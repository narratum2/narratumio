import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate Wellness — Good Hands',
  description: 'Team building through beauty and wellness. Curated experiences for corporate events, retreats, and employee wellness programs.',
}

export default function CorporatePage() {
  return (
    <div className="pt-20">
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=2000&q=80"
            alt="Corporate wellness"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/40" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Corporate Wellness</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Elevate your team through curated wellness experiences
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-4xl font-serif mb-6">Wellness for Teams</h2>
          <p className="text-xl text-harbor leading-relaxed">
            Invest in your team\'s wellbeing with Good Hands corporate packages. From
            express lunch services to full-day retreats, we bring premium beauty and
            wellness to your team.
          </p>
        </div>
      </section>

      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-4xl font-serif mb-12 text-center">Corporate Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-serif mb-4">Express Wellness</h3>
              <p className="text-lg text-harbor mb-4">
                15-30 minute treatments at your office
              </p>
              <p className="text-2xl font-serif text-gold mb-6">From €500</p>
              <ul className="space-y-2 mb-6 text-harbor">
                <li>• Chair massage</li>
                <li>• Express manicures</li>
                <li>• Mini facials</li>
                <li>• Stress relief treatments</li>
              </ul>
              <Link href="/#booking" className="btn-secondary w-full text-center">
                Book Express
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-serif mb-4">Full Day Retreat</h3>
              <p className="text-lg text-harbor mb-4">
                Complete wellness experience at a venue
              </p>
              <p className="text-2xl font-serif text-gold mb-6">From €2,500</p>
              <ul className="space-y-2 mb-6 text-harbor">
                <li>• Full spa services</li>
                <li>• Wellness workshops</li>
                <li>• Healthy catering</li>
                <li>• Team activities</li>
              </ul>
              <Link href="/#booking" className="btn-secondary w-full text-center">
                Book Retreat
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Invest in Your Team
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Contact us to discuss custom corporate wellness programs
          </p>
          <Link href="/#booking" className="btn-primary">
            Request Proposal
          </Link>
        </div>
      </section>
    </div>
  )
}

