import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Welcome to Good Hands Membership!',
  description: 'Your membership is now active. Start enjoying VIP benefits and exclusive discounts.',
}

export default function MembershipSuccessPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-shell via-white to-shell flex items-center">
      <div className="container-custom py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-sage/20 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-sage" />
          </div>

          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Welcome to Good Hands! 🎉
          </h1>

          <p className="text-xl text-harbor mb-8">
            Your membership is now active. Get ready to experience luxury beauty services like never before.
          </p>

          <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Sparkles className="w-6 h-6 text-gold" />
              <h2 className="text-2xl font-serif">What Happens Next?</h2>
            </div>

            <div className="space-y-4 text-left max-w-md mx-auto">
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center text-gold font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Check Your Email</h3>
                  <p className="text-harbor text-sm">
                    You'll receive a welcome email with your membership details and exclusive perks guide.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center text-gold font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Book Your First Service</h3>
                  <p className="text-harbor text-sm">
                    Your membership discount is automatically applied to all bookings. Start exploring!
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center text-gold font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Manage Your Membership</h3>
                  <p className="text-harbor text-sm">
                    Access your member portal anytime to update payment info, view invoices, or manage your plan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#booking" className="btn-primary">
              Book Your First Service
            </Link>
            <Link href="/services" className="btn-secondary">
              Browse All Services
            </Link>
          </div>

          <p className="text-sm text-harbor mt-8">
            Questions about your membership?{' '}
            <Link href="/#booking" className="text-gold hover:underline">
              Contact our concierge team
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

