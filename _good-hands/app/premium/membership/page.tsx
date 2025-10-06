import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Membership — Good Hands',
  description: 'Exclusive access, priority booking, and year-round savings with Good Hands membership. Join Lisbon\'s beauty inner circle.',
}

export default function MembershipPage() {
  return (
    <div className="pt-20">
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=2000&q=80"
            alt="Membership"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/40" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Good Hands Membership</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Join the inner circle of Lisbon\'s beauty elite
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif mb-6">Member Benefits</h2>
              <div className="space-y-4">
                {[
                  '15% discount on all services',
                  'Priority booking and concierge access',
                  'Complimentary quarterly treatments',
                  'Exclusive member-only events',
                  'Early access to new services and partners',
                  'Birthday gift package worth €150',
                  'Flexible booking and cancellation',
                  'Personal beauty consultation (quarterly)',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <span className="text-gold text-xl">✓</span>
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-shell rounded-lg p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-serif mb-4">Investment</h3>
              <p className="text-5xl font-serif text-gold mb-6">€200/month</p>
              <p className="text-harbor mb-8">
                Annual membership (€2,400) available with 2 months free
              </p>
              <Link href="/#booking" className="btn-primary text-center">
                Apply for Membership
              </Link>
              <p className="text-sm text-harbor text-center mt-4">
                Limited memberships available
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Experience Matters
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Good Hands membership pays for itself in savings and exclusive access
          </p>
          <Link href="/#booking" className="btn-primary">
            Learn More
          </Link>
        </div>
      </section>
    </div>
  )
}

