import { Metadata } from 'next'
import Link from 'next/link'
import { Check, Star, Crown, Sparkles } from 'lucide-react'
import MembershipButton from '@/components/MembershipButton'

export const metadata: Metadata = {
  title: 'Membership — Good Hands',
  description: 'Join Good Hands membership for exclusive discounts, priority booking, and VIP beauty concierge services across Lisbon and beyond.',
  openGraph: {
    title: 'Good Hands Membership — Your VIP Beauty Passport',
    description: 'Save up to 25% on all services with Gold or Platinum membership. Priority booking, exclusive experiences, and concierge excellence.',
  },
}

const goldBenefits = [
  '15% discount on all beauty services',
  'Priority booking access',
  'Free service upgrades when available',
  'Quarterly exclusive experience',
  'Free cancellations (up to 24 hours)',
  'Members-only content & tips',
  'Expert concierge matching included',
  'No booking fees',
]

const platinumBenefits = [
  '25% discount on all beauty services',
  'VIP priority booking (first access)',
  'Complimentary service upgrades',
  'Monthly exclusive experience',
  'Free cancellations (up to 2 hours)',
  'Dedicated concierge phone line',
  'Annual beauty consultation (€200 value)',
  'Partner hotel benefits & discounts',
  'Members-only events & workshops',
  'Express appointment booking',
  'Birthday month special gift',
]

export default function MembershipPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-ink via-harbor to-ink text-white">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium">Exclusive Membership Access</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-center w-full">
            Your VIP Beauty Passport
          </h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-3xl mx-auto mb-8">
            Join Good Hands membership and enjoy priority access, exclusive discounts, and white-glove concierge service—at home in Lisbon and wherever you travel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#plans" className="btn-primary">
              View Membership Plans
            </a>
            <Link href="/#booking" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
              Book One-Time Service
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Why Become a Member?
            </h2>
            <p className="text-harbor text-lg max-w-2xl mx-auto">
              Our members save time, money, and never worry about finding the right beauty professional again.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-serif mb-2">Save Significantly</h3>
              <p className="text-harbor">
                Members save 15-25% on every service. Break even after just 2-3 bookings per month.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-serif mb-2">Priority Access</h3>
              <p className="text-harbor">
                Get first access to booking slots with Lisbon's most sought-after professionals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-serif mb-2">Exclusive Perks</h3>
              <p className="text-harbor">
                Access members-only experiences, events, and partnerships you won't find anywhere else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="section-padding bg-shell">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Choose Your Membership
            </h2>
            <p className="text-harbor text-lg">
              All memberships include expert concierge matching and coordination
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Gold Membership */}
            <div className="bg-white rounded-lg p-8 md:p-10 shadow-lg border-2 border-transparent hover:border-gold/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-8 h-8 text-gold" />
                <h3 className="text-3xl font-serif">Gold Membership</h3>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">€49</span>
                  <span className="text-harbor">/month</span>
                </div>
                <p className="text-sm text-harbor mt-2">Cancel anytime • No commitment</p>
              </div>

              <div className="mb-8">
                <p className="text-harbor mb-6">
                  Perfect for regular beauty enthusiasts who want consistent savings and quality.
                </p>
                
                <ul className="space-y-3">
                  {goldBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-harbor">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <MembershipButton tier="gold" />

              <p className="text-center text-sm text-harbor mt-4">
                Save €180+ per year on regular services
              </p>
            </div>

            {/* Platinum Membership */}
            <div className="bg-gradient-to-br from-ink to-harbor text-white rounded-lg p-8 md:p-10 shadow-xl relative overflow-hidden border-2 border-gold">
              <div className="absolute top-0 right-0 bg-gold text-ink text-xs font-bold px-4 py-1 rounded-bl-lg">
                MOST POPULAR
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <Crown className="w-8 h-8 text-gold" />
                <h3 className="text-3xl font-serif">Platinum Membership</h3>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">€129</span>
                  <span className="text-porcelain/80">/month</span>
                </div>
                <p className="text-sm text-porcelain/70 mt-2">Cancel anytime • No commitment</p>
              </div>

              <div className="mb-8">
                <p className="text-porcelain/90 mb-6">
                  The ultimate VIP experience for discerning clients who expect nothing but the best.
                </p>
                
                <ul className="space-y-3">
                  {platinumBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-porcelain/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <MembershipButton tier="platinum" />

              <p className="text-center text-sm text-porcelain/70 mt-4">
                Save €500+ per year + exclusive perks worth €1000+
              </p>
            </div>
          </div>

          {/* Comparison Note */}
          <div className="mt-12 text-center bg-white rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-harbor">
              <strong>Not sure which is right for you?</strong> Book 2+ services per month? Choose Gold. 
              Book 4+ times or want VIP treatment? Platinum pays for itself.
            </p>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-shell rounded-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-center">
              Calculate Your Savings
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-serif text-xl mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold" />
                  Gold Member
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-harbor">2 haircuts/month (€160)</span>
                    <span className="font-semibold">-€24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-harbor">1 facial/month (€125)</span>
                    <span className="font-semibold">-€19</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-semibold">Monthly savings:</span>
                    <span className="text-gold font-bold">€43</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-harbor">Membership cost:</span>
                    <span>€49</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-bold">Annual savings:</span>
                    <span className="text-gold font-bold text-lg">€180+</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-ink to-harbor text-white rounded-lg p-6">
                <h3 className="font-serif text-xl mb-4 flex items-center gap-2">
                  <Crown className="w-5 h-5 text-gold" />
                  Platinum Member
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-porcelain/80">4 services/month (€450)</span>
                    <span className="font-semibold">-€113</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-porcelain/80">Exclusive perks value:</span>
                    <span className="font-semibold">€83/mo</span>
                  </div>
                  <div className="flex justify-between border-t border-white/20 pt-2">
                    <span className="font-semibold">Monthly value:</span>
                    <span className="text-gold font-bold">€196</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-porcelain/80">Membership cost:</span>
                    <span>€129</span>
                  </div>
                  <div className="flex justify-between border-t border-white/20 pt-2">
                    <span className="font-bold">Annual savings:</span>
                    <span className="text-gold font-bold text-lg">€500+</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-harbor mt-6 text-sm">
              * Calculations based on average service prices. Your actual savings will vary based on services booked.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">
            Membership FAQs
          </h2>

          <div className="space-y-6">
            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                How does the membership discount work?
                <span className="text-gold text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-harbor">
                Your discount (15% for Gold, 25% for Platinum) is automatically applied to every booking you make. 
                Simply book through your member account, and the savings are reflected at checkout. All prices you see 
                already include our expert concierge matching and coordination service.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                Can I cancel my membership anytime?
                <span className="text-gold text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-harbor">
                Yes! There's no long-term commitment. You can cancel anytime through your member portal. 
                Your membership remains active until the end of your current billing period.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                What's included in the concierge service?
                <span className="text-gold text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-harbor">
                Every membership includes our signature concierge service: expert matching with the perfect professional 
                for your needs, appointment coordination, follow-up support, and quality assurance. We handle all the 
                details so you just show up and enjoy.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                Do memberships work outside Lisbon?
                <span className="text-gold text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-harbor">
                Currently, our full network operates in Lisbon and surrounding areas (Cascais, Sintra). 
                However, we're expanding to Porto, Algarve, and international destinations like Ibiza, Tulum, and Dubai. 
                Platinum members will get early access to new cities as we launch.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                What are the exclusive experiences?
                <span className="text-gold text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-harbor">
                We host special members-only events like beauty masterclasses, behind-the-scenes studio tours, 
                product launch previews, and curated beauty experiences at partner hotels and spas. 
                Gold members get quarterly access, Platinum members get monthly invitations.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                Can I upgrade from Gold to Platinum?
                <span className="text-gold text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-harbor">
                Absolutely! You can upgrade anytime through your member portal. The price difference will be 
                prorated for the remainder of your billing cycle.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                Is there a free trial?
                <span className="text-gold text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-harbor">
                We offer a 30-day money-back guarantee. Try your membership for a month, and if you're not completely 
                satisfied, we'll refund your membership fee—no questions asked.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to Join?
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Start saving today and enjoy VIP access to Lisbon's finest beauty professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#plans" className="btn-primary">
              Choose Your Plan
            </a>
            <Link href="/#booking" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
              Questions? Contact Us
            </Link>
          </div>
          
          <p className="text-sm text-porcelain/60 mt-8">
            30-day money-back guarantee • No commitment • Cancel anytime
          </p>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MemberProgram',
            name: 'Good Hands Membership',
            description: 'VIP beauty concierge membership with exclusive discounts and priority access',
            url: 'https://goodhands.com/premium/membership',
            provider: {
              '@type': 'Organization',
              name: 'Good Hands',
            },
            offers: [
              {
                '@type': 'Offer',
                name: 'Gold Membership',
                price: '49',
                priceCurrency: 'EUR',
                priceSpecification: {
                  '@type': 'UnitPriceSpecification',
                  price: '49',
                  priceCurrency: 'EUR',
                  unitText: 'MONTH',
                },
              },
              {
                '@type': 'Offer',
                name: 'Platinum Membership',
                price: '129',
                priceCurrency: 'EUR',
                priceSpecification: {
                  '@type': 'UnitPriceSpecification',
                  price: '129',
                  priceCurrency: 'EUR',
                  unitText: 'MONTH',
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}
