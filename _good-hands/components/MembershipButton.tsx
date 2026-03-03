'use client'

import { useState } from 'react'

interface MembershipButtonProps {
  tier: 'gold' | 'platinum'
  priceId?: string
}

export default function MembershipButton({ tier, priceId }: MembershipButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const resolvedPriceId = priceId
    || (tier === 'gold' ? process.env.NEXT_PUBLIC_STRIPE_GOLD_PRICE_ID : undefined)
    || (tier === 'platinum' ? process.env.NEXT_PUBLIC_STRIPE_PLATINUM_PRICE_ID : undefined)

  const handleClick = async () => {
    if (!resolvedPriceId) {
      window.location.href = '/#booking'
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: resolvedPriceId,
          membershipType: tier === 'gold' ? 'Gold' : 'Platinum',
        }),
      })

      const data = await res.json()

      if (data.setup_required) {
        window.location.href = '/#booking'
        return
      }

      if (data.url) {
        window.location.href = data.url
      } else {
        setError('Unable to start checkout. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const label = loading
    ? 'Loading...'
    : `Choose ${tier === 'gold' ? 'Gold' : 'Platinum'}`

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={loading}
        className="w-full btn-gold py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{
          background: tier === 'platinum'
            ? 'linear-gradient(135deg, #c0c0c0 0%, #f5f5f5 50%, #c0c0c0 100%)'
            : 'linear-gradient(135deg, #8B7355 0%, #d4af37 50%, #8B7355 100%)',
        }}
      >
        {label}
      </button>
      {error && <p className="text-red-600 text-sm mt-2 text-center">{error}</p>}
    </div>
  )
}

