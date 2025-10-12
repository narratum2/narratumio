import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Hotel Partnerships | Good Hands Beauty Concierge',
  description: 'Partner with Good Hands to offer your guests exclusive access to Lisbon\'s top beauty professionals. Commission-based, seamless integration, white-glove service. Trusted by Four Seasons, Tivoli, and luxury boutique properties.',
  keywords: 'hotel beauty services, hotel partnerships, luxury hotel amenities, guest services, hotel concierge partnerships, Lisbon hotels',
}

export default function PartnershipsPage() {
  return (
    <div className="bg-porcelain pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/brand-images/hero-salon-interior.png"
            alt="Luxury hotel beauty concierge services - Good Hands partnerships in Lisbon"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sand/90 via-gold/80 to-sand/90" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6">
              Elevate Your Guest Experience
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-2xl mx-auto">
              Partner with Good Hands to offer your guests exclusive access to Lisbon's finest beauty professionals—without hiring additional staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-primary bg-white text-sand hover:bg-porcelain"
              >
                Schedule a Call
              </a>
              <a
                href="#benefits"
                className="btn-secondary border-white text-white hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <p className="text-harbor text-sm uppercase tracking-wider mb-8">Trusted By</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="text-2xl font-serif text-harbor/60">Four Seasons Ritz</div>
            <div className="text-2xl font-serif text-harbor/60">Tivoli Avenida Liberdade</div>
            <div className="text-2xl font-serif text-harbor/60">Memmo Alfama</div>
            <div className="text-2xl font-serif text-harbor/60">The Lumiares</div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 bg-porcelain">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-8 text-center">
              The Challenge Your Guests Face
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-lg">
                <span className="text-4xl mb-4 block">😰</span>
                <h3 className="text-xl font-semibold text-ink mb-3">Language Barriers</h3>
                <p className="text-harbor">
                  International guests struggle to communicate their beauty needs with local professionals.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg">
                <span className="text-4xl mb-4 block">🎲</span>
                <h3 className="text-xl font-semibold text-ink mb-3">Trial & Error</h3>
                <p className="text-harbor">
                  Finding quality beauty services in an unfamiliar city is risky and time-consuming.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg">
                <span className="text-4xl mb-4 block">⏰</span>
                <h3 className="text-xl font-semibold text-ink mb-3">Valuable Time Wasted</h3>
                <p className="text-harbor">
                  Research and coordination takes away from their vacation or business trip.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg">
                <span className="text-4xl mb-4 block">💼</span>
                <h3 className="text-xl font-semibold text-ink mb-3">Your Team's Burden</h3>
                <p className="text-harbor">
                  Concierge teams spend hours vetting and coordinating beauty appointments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-4 text-center">
              Good Hands: Your Beauty Concierge Partner
            </h2>
            <p className="text-xl text-harbor text-center mb-12 max-w-2xl mx-auto">
              We become an extension of your concierge team, providing white-glove beauty services that reflect your property's standards.
            </p>

            <div className="space-y-12">
              {/* Benefit 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="w-16 h-16 bg-sand/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="text-2xl font-serif text-ink mb-3">Seamless Integration</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-harbor text-lg mb-4">
                    We work directly with your concierge team, handling all booking coordination, communication, and quality assurance.
                  </p>
                  <ul className="space-y-2 text-harbor">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>Dedicated partner liaison for your property</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>24/7 booking support via phone, email, or chat</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>Real-time availability and confirmation</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="w-16 h-16 bg-sand/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">💎</span>
                  </div>
                  <h3 className="text-2xl font-serif text-ink mb-3">Curated Excellence</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-harbor text-lg mb-4">
                    Every professional in our network is personally vetted for quality, professionalism, and expertise.
                  </p>
                  <ul className="space-y-2 text-harbor">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>150+ vetted beauty professionals across Lisbon</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>Specialists in hair, spa, makeup, nails, and wellness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>Multilingual professionals (English, Portuguese, Spanish, French)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="w-16 h-16 bg-sand/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">💰</span>
                  </div>
                  <h3 className="text-2xl font-serif text-ink mb-3">Zero Upfront Investment</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-harbor text-lg mb-4">
                    Commission-based model means no upfront costs, no hiring, no training, no management overhead.
                  </p>
                  <ul className="space-y-2 text-harbor">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>Transparent commission structure (10-15% of booking value)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>You earn passive revenue while enhancing guest experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>Monthly reporting and payment</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="w-16 h-16 bg-sand/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">🎨</span>
                  </div>
                  <h3 className="text-2xl font-serif text-ink mb-3">White-Label Options</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-harbor text-lg mb-4">
                    Present the service as your own with co-branding and customization that matches your property's identity.
                  </p>
                  <ul className="space-y-2 text-harbor">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>Branded booking materials and confirmations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>Custom service menus aligned with your positioning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>Seamless experience that feels like your service</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-porcelain">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-12 text-center">
              How It Works
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold text-ink rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-2">Guest Requests Service</h3>
                  <p className="text-harbor">
                    Your concierge team receives a beauty service request from a guest (hair appointment, spa treatment, etc.)
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold text-ink rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-2">Forward to Good Hands</h3>
                  <p className="text-harbor">
                    Quick call, email, or use our partner portal to share guest preferences and requirements
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold text-ink rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-2">We Match & Coordinate</h3>
                  <p className="text-harbor">
                    We match the guest with the perfect professional, handle all booking logistics, and send confirmation details
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold text-ink rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-2">Guest Enjoys Service</h3>
                  <p className="text-harbor">
                    Guest receives exceptional beauty service at their preferred location and time
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold text-ink rounded-full flex items-center justify-center text-xl font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-2">Follow-up & Payment</h3>
                  <p className="text-harbor">
                    We collect payment, follow up with guest, and send you monthly commission reports
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-12 text-center">
              Service Categories
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-harbor/20 rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-3">Hair Services</h3>
                <ul className="space-y-2 text-harbor text-sm">
                  <li>• Color & Highlights</li>
                  <li>• Cuts & Styling</li>
                  <li>• Treatments & Care</li>
                  <li>• Special Occasion Styling</li>
                </ul>
              </div>
              <div className="p-6 border border-harbor/20 rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-3">Spa & Wellness</h3>
                <ul className="space-y-2 text-harbor text-sm">
                  <li>• Massage Therapy</li>
                  <li>• Facial Treatments</li>
                  <li>• Body Treatments</li>
                  <li>• Wellness Programs</li>
                </ul>
              </div>
              <div className="p-6 border border-harbor/20 rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-3">Beauty Services</h3>
                <ul className="space-y-2 text-harbor text-sm">
                  <li>• Makeup (Bridal & Special Occasion)</li>
                  <li>• Manicure & Pedicure</li>
                  <li>• Nail Art</li>
                  <li>• Lash & Brow Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-sand/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-12 text-center">
              What Partners Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg">
                <div className="flex gap-1 text-gold mb-4">
                  <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                </div>
                <p className="text-harbor text-lg mb-4 italic">
                  "Good Hands has become an invaluable extension of our concierge team. Our guests consistently rave about the quality of services, and the seamless coordination saves us hours every week."
                </p>
                <p className="text-ink font-semibold">— Concierge Manager, Five-Star Lisbon Hotel</p>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <div className="flex gap-1 text-gold mb-4">
                  <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                </div>
                <p className="text-harbor text-lg mb-4 italic">
                  "As a boutique property, we can't afford to have beauty professionals on staff. Good Hands allows us to offer luxury-level beauty services that match our brand, with zero overhead."
                </p>
                <p className="text-ink font-semibold">— General Manager, Boutique Hotel Chiado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-ink text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Ready to Elevate Your Guest Experience?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join Four Seasons, Tivoli, and other leading Lisbon properties in offering world-class beauty concierge services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="mailto:partnerships@goodhands.com"
                className="btn-primary bg-gold hover:bg-gold/90"
              >
                Email: partnerships@goodhands.com
              </a>
              <a
                href="tel:+351XXXXXXXXX"
                className="btn-secondary border-white text-white hover:bg-white/10"
              >
                Call: +351 XXX XXX XXX
              </a>
            </div>
            <p className="text-white/70 text-sm">
              Or use the chat widget to speak with our Partnership Director immediately
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-shell">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-12 text-center">
              Partnership FAQ
            </h2>
            <div className="space-y-4">
              <details className="group bg-white rounded-lg shadow-sm overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-ink/5 transition-colors">
                  <span className="font-medium text-ink text-lg">What does it cost to partner with Good Hands?</span>
                  <svg
                    className="w-5 h-5 text-gold transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-harbor leading-relaxed">
                  There are zero upfront costs. We operate on a commission-based model (10-15% of booking value). You only pay when your guests book services, and we handle all payment processing.
                </div>
              </details>

              <details className="group bg-white rounded-lg shadow-sm overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-ink/5 transition-colors">
                  <span className="font-medium text-ink text-lg">How quickly can we get started?</span>
                  <svg
                    className="w-5 h-5 text-gold transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-harbor leading-relaxed">
                  Most partnerships are live within 1-2 weeks. We'll schedule an onboarding call, create your custom booking process, and train your concierge team. Then you're ready to offer the service.
                </div>
              </details>

              <details className="group bg-white rounded-lg shadow-sm overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-ink/5 transition-colors">
                  <span className="font-medium text-ink text-lg">Do you work with all types of properties?</span>
                  <svg
                    className="w-5 h-5 text-gold transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-harbor leading-relaxed">
                  We primarily partner with 4-5 star hotels, luxury boutique properties, and high-end vacation rentals in Lisbon. If your property values exceptional guest experiences, we'd love to talk.
                </div>
              </details>

              <details className="group bg-white rounded-lg shadow-sm overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-ink/5 transition-colors">
                  <span className="font-medium text-ink text-lg">What if a guest isn't satisfied?</span>
                  <svg
                    className="w-5 h-5 text-gold transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-harbor leading-relaxed">
                  We guarantee guest satisfaction. If any guest is unhappy, we'll remake the service or provide a full refund—at no cost to your property. Your reputation is our priority.
                </div>
              </details>

              <details className="group bg-white rounded-lg shadow-sm overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-ink/5 transition-colors">
                  <span className="font-medium text-ink text-lg">Can we customize the service for our brand?</span>
                  <svg
                    className="w-5 h-5 text-gold transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-harbor leading-relaxed">
                  Absolutely! We offer white-label options including branded materials, custom service menus, and co-branded communications. The service can seamlessly reflect your property's identity.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Hotel Beauty Concierge Partnership',
            provider: {
              '@type': 'Organization',
              name: 'Good Hands',
            },
            description: 'White-label beauty concierge service for luxury hotels in Lisbon. Commission-based, seamless integration, curated professionals.',
            areaServed: 'Lisbon, Portugal',
            audience: {
              '@type': 'Audience',
              audienceType: 'Luxury Hotels, Boutique Properties, Vacation Rentals',
            },
          }),
        }}
      />
    </div>
  )
}

