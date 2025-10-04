import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wedding Beauty Packages — Good Hands',
  description: 'Complete bridal beauty journey from consultation to wedding day. Expert coordination for you and your bridal party.',
}

export default function WeddingsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=2000&q=80"
            alt="Wedding beauty"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/40" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Wedding Beauty</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Look and feel your absolute best on the most important day of your life
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-serif mb-6 text-center">Your Complete Bridal Experience</h2>
          <p className="text-xl text-harbor text-center leading-relaxed mb-12">
            From the moment you say yes to the moment you say "I do," Good Hands coordinates
            every detail of your bridal beauty journey. We partner with Lisbon\'s finest hair
            stylists, makeup artists, and skincare experts to ensure you\'re radiant and
            relaxed on your wedding day.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-4xl font-serif mb-12 text-center">Wedding Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Essential */}
            <div className="bg-white rounded-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-serif mb-2">Essential</h3>
              <p className="text-3xl font-serif text-gold mb-6">€800</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Hair & makeup trial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Wedding day services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Touch-up kit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Timeline coordination</span>
                </li>
              </ul>
              <Link href="/#booking" className="btn-secondary w-full text-center">
                Book Essential
              </Link>
            </div>

            {/* Premium */}
            <div className="bg-ink text-white rounded-lg p-8 transform scale-105 shadow-xl">
              <div className="text-xs uppercase tracking-wider text-gold mb-2">Most Popular</div>
              <h3 className="text-2xl font-serif mb-2">Premium</h3>
              <p className="text-3xl font-serif text-gold mb-6">€1,500</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Everything in Essential</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Multiple trial sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Pre-wedding facials (3)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Bridal party (4 people)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>On-location service</span>
                </li>
              </ul>
              <Link href="/#booking" className="btn-primary w-full text-center">
                Book Premium
              </Link>
            </div>

            {/* Luxury */}
            <div className="bg-white rounded-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-serif mb-2">Luxury</h3>
              <p className="text-3xl font-serif text-gold mb-6">€3,000+</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Everything in Premium</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>6-month beauty program</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Unlimited bridal party</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Weekend services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Personal concierge</span>
                </li>
              </ul>
              <Link href="/#booking" className="btn-secondary w-full text-center">
                Book Luxury
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-serif mb-12 text-center">Your Beauty Timeline</h2>
          <div className="space-y-8">
            {[
              { time: '6 Months Before', task: 'Initial consultation and beauty assessment' },
              { time: '4-5 Months Before', task: 'First hair and makeup trials' },
              { time: '3 Months Before', task: 'Begin skincare program and treatments' },
              { time: '2 Months Before', task: 'Final trial and adjustments' },
              { time: '1 Month Before', task: 'Last treatments and final touches' },
              { time: 'Wedding Week', task: 'Pre-wedding pampering and relaxation' },
              { time: 'Wedding Day', task: 'Professional styling and on-site support' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-gold font-medium">{item.time}</span>
                </div>
                <div className="flex-shrink-0 w-3 h-3 bg-gold rounded-full mt-1"></div>
                <div className="flex-1">
                  <p className="text-lg">{item.task}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to Begin Your Bridal Journey?
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Schedule a complimentary consultation to discuss your vision and customize your
            perfect wedding beauty package.
          </p>
          <Link href="/#booking" className="btn-primary">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

