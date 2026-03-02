'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'

interface SubscribeButtonProps {
  priceId: string
  tier: 'gold' | 'platinum'
  price: string
}

export default function SubscribeButton({ priceId, tier, price }: SubscribeButtonProps) {
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState('')

  const handleSubscribe = async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId,
          membershipType: tier === 'gold' ? 'Gold' : 'Platinum',
        }),
      })

      const data = await response.json()

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

  return (
    <>
    <button
      onClick={handleSubscribe}
      disabled={loading}
      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Processing...
        </>
      ) : (
        <>Choose {tier === 'gold' ? 'Gold' : 'Platinum'} - {price}/month</>
      )}
    </button>
    {error && <p className="text-red-600 text-sm mt-2 text-center">{error}</p>}
    </>
  )
}

