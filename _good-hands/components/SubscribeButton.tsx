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

  const handleSubscribe = async () => {
    setLoading(true)

    try {
      const response = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          tier,
        }),
      })

      const data = await response.json()

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url
      } else if (data.setup_required) {
        alert('Stripe is not configured yet. Please set up your Stripe account.')
        setLoading(false)
      } else {
        alert('Failed to create checkout session. Please try again.')
        setLoading(false)
      }
    } catch (error) {
      console.error('Subscribe error:', error)
      alert('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
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
  )
}

