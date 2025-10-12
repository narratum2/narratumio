'use client'

interface MembershipButtonProps {
  tier: 'gold' | 'platinum'
}

export default function MembershipButton({ tier }: MembershipButtonProps) {
  const handleClick = () => {
    // Will integrate with Stripe
    alert('Stripe integration coming soon! You will need to set up your Stripe account first.')
  }

  return (
    <button
      onClick={handleClick}
      className="w-full btn-gold py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
      style={{
        background: tier === 'platinum' 
          ? 'linear-gradient(135deg, #c0c0c0 0%, #f5f5f5 50%, #c0c0c0 100%)'
          : 'linear-gradient(135deg, #8B7355 0%, #d4af37 50%, #8B7355 100%)',
      }}
    >
      Choose {tier === 'gold' ? 'Gold' : 'Platinum'}
    </button>
  )
}

