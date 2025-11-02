import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Beauty Retreats | Good Hands Lisbon',
  description: 'Transformative beauty retreats in Lisbon and beyond. Multi-day immersive experiences focused on personal beauty transformation, self-care, and confidence building.',
  keywords: 'beauty retreat Lisbon, beauty transformation, self-care retreat, beauty workshop, confidence retreat',
}

export default function RetreatsPage() {
  return (
    <div className="bg-porcelain">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage via-sand to-gold py-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-white text-center w-full">
              Beauty Transformation Retreats
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Multi-day immersive experiences focused on discovering your authentic beauty, learning professional techniques, and building lasting confidence
            </p>
            <Link href="/#booking" className="btn-primary bg-white text-sand hover:bg-porcelain">
              Join Our Next Retreat
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Our Retreats Different */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-8 text-center">
              Not Your Typical Retreat
            </h2>
            <p className="text-xl text-harbor text-center mb-12 max-w-2xl mx-auto">
              This isn't about relaxation—it's about transformation. Learn from Lisbon's top beauty professionals and discover techniques you'll use for life.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-porcelain rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-3">💄 Hands-On Learning</h3>
                <p className="text-harbor">
                  Master makeup techniques, hair styling, and skincare routines taught by professionals. Leave with skills, not just memories.
                </p>
              </div>
              <div className="p-6 bg-porcelain rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-3">✨ Personal Transformation</h3>
                <p className="text-harbor">
                  Discover your signature look, understand your features, and learn what truly works for you—not generic trends.
                </p>
              </div>
              <div className="p-6 bg-porcelain rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-3">👥 Small Group Intimacy</h3>
                <p className="text-harbor">
                  Maximum 8 participants. Every session is personalized, with individual attention from master stylists.
                </p>
              </div>
              <div className="p-6 bg-porcelain rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-3">🏰 Stunning Locations</h3>
                <p className="text-harbor">
                  Historic palaces in Sintra, coastal villas in Cascais, boutique studios in Chiado—each retreat is unforgettable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-porcelain">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-12 text-center">
              Your Transformation Journey
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-ink mb-4">Day 1: Foundation</h3>
                <p className="text-harbor mb-4 font-semibold">Discover Your Natural Beauty</p>
                <ul className="space-y-3 text-harbor">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Professional skin analysis & personalized skincare routine</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Face shape & feature analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Color theory: Finding your palette</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Makeup basics masterclass</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Product selection workshop</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-ink mb-4">Day 2: Mastery</h3>
                <p className="text-harbor mb-4 font-semibold">Professional Techniques</p>
                <ul className="space-y-3 text-harbor">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Advanced makeup application (day & evening looks)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Hair styling techniques you can recreate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Quick beauty routines for busy mornings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Photography-ready makeup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Professional photoshoot with your new looks</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-ink mb-4">Day 3: Confidence</h3>
                <p className="text-harbor mb-4 font-semibold">Own Your Beauty</p>
                <ul className="space-y-3 text-harbor">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Create your signature everyday look</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Wardrobe & beauty coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Building your personal beauty toolkit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Troubleshooting common beauty challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Graduation ceremony & personalized beauty plan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Options */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif text-ink mb-12 text-center">
              Choose Your Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-2 border-harbor/20 rounded-lg p-8 hover:border-gold transition-colors">
                <h3 className="text-2xl font-serif text-ink mb-2">3-Day Intensive</h3>
                <p className="text-harbor mb-4">Weekend transformation</p>
                <p className="text-4xl font-bold text-ink mb-6">€1,850</p>
                <ul className="space-y-3 text-harbor mb-8">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>All workshops & masterclasses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Professional photoshoot</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Personalized beauty plan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>All meals & refreshments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Curated beauty kit (€200 value)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Lifetime access to alumni community</span>
                  </li>
                </ul>
                <p className="text-sm text-harbor mb-4">*Accommodation not included</p>
                <Link href="/#booking" className="btn-secondary w-full text-center">
                  Book 3-Day Retreat
                </Link>
              </div>

              <div className="border-2 border-gold rounded-lg p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold text-white px-4 py-1 rounded-full text-sm font-semibold">
                    All-Inclusive
                  </span>
                </div>
                <h3 className="text-2xl font-serif text-ink mb-2">5-Day Immersive</h3>
                <p className="text-harbor mb-4">Complete transformation</p>
                <p className="text-4xl font-bold text-ink mb-6">€3,500</p>
                <ul className="space-y-3 text-harbor mb-8">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Everything in 3-Day Intensive</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Luxury accommodation (4 nights)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Extended workshops & 1-on-1 sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Personal shopping session in Chiado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Premium beauty kit (€500 value)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>3-month post-retreat support</span>
                  </li>
                </ul>
                <p className="text-sm text-harbor mb-4">*All-inclusive experience</p>
                <Link href="/#booking" className="btn-primary w-full text-center">
                  Book 5-Day Retreat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-porcelain">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-ink mb-12 text-center">
              Every Retreat Includes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🎨</span>
                <div>
                  <h3 className="font-semibold text-ink mb-1">Professional Instruction</h3>
                  <p className="text-harbor">Learn from Lisbon's top makeup artists, hair stylists, and beauty experts</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">📸</span>
                <div>
                  <h3 className="font-semibold text-ink mb-1">Professional Photos</h3>
                  <p className="text-harbor">Leave with stunning before & after photos showcasing your transformation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">💼</span>
                <div>
                  <h3 className="font-semibold text-ink mb-1">Beauty Toolkit</h3>
                  <p className="text-harbor">Curated products selected specifically for your needs and preferences</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">📋</span>
                <div>
                  <h3 className="font-semibold text-ink mb-1">Personalized Plan</h3>
                  <p className="text-harbor">Custom beauty routine tailored to your lifestyle, budget, and goals</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">👥</span>
                <div>
                  <h3 className="font-semibold text-ink mb-1">Community Access</h3>
                  <p className="text-harbor">Join our alumni network for ongoing support and exclusive events</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">🍽️</span>
            <div>
                  <h3 className="font-semibold text-ink mb-1">Gourmet Meals</h3>
                  <p className="text-harbor">Healthy, delicious meals that nourish both body and beauty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Dates */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-ink mb-12 text-center">
              Upcoming Retreats
            </h2>
            <div className="space-y-6">
              <div className="border border-harbor/20 rounded-lg p-6 hover:border-gold transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-serif text-ink mb-2">Spring Transformation</h3>
                    <p className="text-harbor mb-1">📍 Historic Palace, Sintra</p>
                    <p className="text-harbor">📅 March 15-17, 2025 (3-Day)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-harbor mb-2">5 spots remaining</p>
                    <Link href="/#booking" className="btn-primary inline-block">
                      Reserve Your Spot
                    </Link>
                  </div>
                </div>
              </div>

              <div className="border border-harbor/20 rounded-lg p-6 hover:border-gold transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-serif text-ink mb-2">Summer Glow Intensive</h3>
                    <p className="text-harbor mb-1">📍 Coastal Villa, Cascais</p>
                    <p className="text-harbor">📅 June 5-9, 2025 (5-Day All-Inclusive)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-harbor mb-2">3 spots remaining</p>
                    <Link href="/#booking" className="btn-primary inline-block">
                      Reserve Your Spot
                    </Link>
                  </div>
                </div>
              </div>

              <div className="border border-harbor/20 rounded-lg p-6 hover:border-gold transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-serif text-ink mb-2">Autumn Beauty Reset</h3>
                    <p className="text-harbor mb-1">📍 Boutique Studio, Chiado</p>
                    <p className="text-harbor">📅 September 20-22, 2025 (3-Day)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-harbor mb-2">8 spots available</p>
                    <Link href="/#booking" className="btn-secondary inline-block">
                      Join Waitlist
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-porcelain">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-ink mb-12 text-center">
              Transformation Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg">
                <div className="flex gap-1 text-gold mb-4">
                  <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                </div>
                <p className="text-harbor text-lg mb-4 italic">
                  "I came feeling invisible. I left feeling radiant. The techniques I learned completely changed how I approach my morning routine. Three months later, I still get compliments daily."
                </p>
                <p className="text-ink font-semibold">— Jennifer K.</p>
                <p className="text-harbor text-sm">Sintra Retreat, October 2024</p>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <div className="flex gap-1 text-gold mb-4">
                  <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                </div>
                <p className="text-harbor text-lg mb-4 italic">
                  "This wasn't just about makeup—it was about understanding myself. The personalized approach meant everything I learned actually works for MY face, MY hair, MY lifestyle."
                </p>
                <p className="text-ink font-semibold">— Patricia S.</p>
                <p className="text-harbor text-sm">Cascais Retreat, July 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif text-ink mb-12 text-center">
              Retreat FAQ
            </h2>
            <div className="space-y-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-porcelain rounded-lg font-semibold text-ink">
                  What level of experience do I need?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 text-harbor">
                  None! Our retreats are designed for all levels, from complete beginners to those wanting to refine their skills. Each participant receives personalized instruction.
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-porcelain rounded-lg font-semibold text-ink">
                  Can I bring my own products?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 text-harbor">
                  Absolutely! We encourage you to bring products you already own. Our experts will teach you how to use them better and suggest additions if needed.
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-porcelain rounded-lg font-semibold text-ink">
                  What's the group size?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 text-harbor">
                  Maximum 8 participants per retreat. This ensures everyone receives personalized attention and has time for individual questions and practice.
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-porcelain rounded-lg font-semibold text-ink">
                  Can I attend with a friend?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 text-harbor">
                  Yes! Many participants come with friends. We offer a 10% discount when you book together (use code BRINGAFRIEND at checkout).
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-porcelain rounded-lg font-semibold text-ink">
                  What if I need to cancel?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 text-harbor">
                  Full refund if cancelled 30+ days before. 50% refund 15-30 days before. No refund within 14 days, but you can transfer to another retreat date.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to Transform?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Reserve your spot in our next beauty transformation retreat
          </p>
          <Link href="/#booking" className="btn-primary bg-gold hover:bg-gold/90">
            Book Your Retreat Now
          </Link>
        </div>
      </section>
    </div>
  )
}
