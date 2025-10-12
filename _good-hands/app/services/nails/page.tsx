import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Sparkles, Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nail Care Services in Lisbon — Good Hands',
  description: 'Luxury nail salons in Lisbon. Manicures, pedicures, gel, nail art, and extensions. Expert concierge matching with vetted professionals.',
  keywords: ['nail salon lisbon', 'manicure lisbon', 'pedicure lisbon', 'gel nails lisbon', 'nail art lisbon'],
}

const nailServices = [
  {
    name: 'Classic Manicure',
    price: 'From €35',
    duration: '45 min',
    description: 'Traditional manicure with nail shaping, cuticle care, hand massage, and polish. Relaxing and perfectly polished.',
    features: ['Nail shaping', 'Cuticle care', 'Hand massage', 'Classic polish'],
  },
  {
    name: 'Gel Manicure',
    price: 'From €45',
    duration: '60 min',
    description: 'Long-lasting gel polish that stays chip-free for 2-3 weeks. Perfect for Lisbon\'s active lifestyle.',
    features: ['Premium gel polish', '2-3 week wear', 'UV light cured', 'No chip guarantee'],
  },
  {
    name: 'Luxury Pedicure',
    price: 'From €55',
    duration: '75 min',
    description: 'Complete foot transformation including soak, exfoliation, nail care, massage, and polish. Pure indulgence.',
    features: ['Warm foot soak', 'Exfoliation & scrub', 'Callus removal', 'Leg & foot massage', 'Polish'],
  },
  {
    name: 'Nail Art',
    price: 'From €20',
    duration: '30 min',
    description: 'Custom nail art designs from minimalist accents to intricate patterns. Express your style.',
    features: ['Custom designs', 'Hand-painted details', 'Trendy techniques', 'Photo consultation'],
  },
  {
    name: 'Gel Extensions',
    price: 'From €70',
    duration: '90 min',
    description: 'Natural-looking gel extensions for length and strength. Customized to your preferred shape and length.',
    features: ['Custom length', 'Shape customization', 'Gel overlay', 'Natural finish'],
  },
  {
    name: 'Spa Manicure & Pedicure',
    price: 'From €85',
    duration: '120 min',
    description: 'Ultimate pampering package combining luxury manicure and pedicure with extended massage and treatments.',
    features: ['Extended treatments', 'Premium products', 'Longer massage', 'Paraffin wax option'],
  },
]

export default function NailServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/brand-images/salon-detail.png"
            alt="Luxury nail care and manicure services in Lisbon - Good Hands concierge"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-12 h-12 text-gold" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Nail Care</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Immaculate nails and ultimate relaxation in Lisbon&apos;s finest salons
          </p>
          <p className="text-lg text-gold mt-3">
            All prices include expert concierge matching & coordination
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-center">Polished to Perfection</h2>
          
          <div className="prose prose-lg max-w-none text-harbor space-y-6 text-center mb-12">
            <p className="text-xl leading-relaxed">
              From quick polish changes to indulgent spa experiences, we connect you with nail technicians who combine artistry with hygiene excellence. Every salon we partner with meets strict sanitation standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Hygiene Excellence</h3>
              <p className="text-harbor text-sm">
                All tools sterilized, single-use files, and hospital-grade sanitation protocols
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Never Rushed</h3>
              <p className="text-harbor text-sm">
                Proper drying time and attention to detail—no assembly-line service
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Boutique Salons</h3>
              <p className="text-harbor text-sm">
                Intimate spaces in beautiful locations, never crowded or chaotic
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Our Nail Services</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {nailServices.map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif">{service.name}</h3>
                  <div className="text-right">
                    <div className="text-gold font-semibold text-lg">{service.price}</div>
                    <div className="text-harbor text-sm">{service.duration}</div>
                  </div>
                </div>
                
                <p className="text-harbor mb-4">{service.description}</p>
                
                <div className="border-t border-harbor/10 pt-4">
                  <p className="text-sm font-semibold mb-2">Includes:</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-harbor flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 text-xs text-gold">
                  ✓ Concierge matching & coordination included
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Climate Considerations */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Lisbon Climate & Your Nails</h2>
          
          <div className="bg-shell rounded-lg p-8">
            <p className="text-harbor mb-6">
              Lisbon&apos;s unique climate—humid summers, mild winters, and year-round sunshine—affects nail services in specific ways. Our local experts know how to adjust techniques for lasting results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">🌊 Humidity Challenges</h3>
                <ul className="space-y-2 text-sm text-harbor">
                  <li>• Gel polish lasts longer than traditional polish</li>
                  <li>• Base coats are essential for chip prevention</li>
                  <li>• Quick-dry top coats recommended</li>
                  <li>• Allow proper drying time (not rushed!)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">☀️ Sun Exposure Tips</h3>
                <ul className="space-y-2 text-sm text-harbor">
                  <li>• UV top coats prevent color fading</li>
                  <li>• Cuticle oil protects from dryness</li>
                  <li>• Regular moisturizing is essential</li>
                  <li>• Lighter colors show less wear</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Good Hands */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Why Book Nail Services Through Good Hands?</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">🧼 Hygiene Guarantee</h3>
              <p className="text-harbor">
                Every salon we partner with follows strict sanitation protocols. We personally inspect facilities and verify autoclave sterilization of metal tools. Your health and safety are non-negotiable.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">⏰ No Rush, No Wait</h3>
              <p className="text-harbor">
                We book appropriate time slots so you&apos;re never rushed or kept waiting. Proper drying time, careful application, and attention to detail on every service.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">💅 Quality Products</h3>
              <p className="text-harbor">
                Our salons use premium brands (OPI, CND, Essie) and never water down products. You get professional-grade quality, not bargain supplies.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">🗣️ Clear Communication</h3>
              <p className="text-harbor">
                All technicians speak English fluently. Show reference photos, explain your preferences, and get exactly what you want—no miscommunication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Nail Services FAQ</h2>
          
          <div className="space-y-6">
            <details className="bg-shell rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                How long does gel polish really last in Lisbon?
              </summary>
              <p className="mt-4 text-harbor">
                Typically 2-3 weeks, though Lisbon&apos;s humidity and sun can affect longevity. Proper application and quality products (which all our salons use) make a huge difference. Swimming and beach activities may reduce wear time.
              </p>
            </details>

            <details className="bg-shell rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                Are the tools really clean?
              </summary>
              <p className="mt-4 text-harbor">
                Yes. We only partner with salons that use autoclave sterilization for metal tools and dispose of single-use items (files, buffers) after each client. If you have concerns, you can bring your own tools.
              </p>
            </details>

            <details className="bg-shell rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                Can I get nail art if I don&apos;t speak Portuguese?
              </summary>
              <p className="mt-4 text-harbor">
                Absolutely! All our technicians speak English. You can show inspiration photos and clearly communicate your design preferences. Many salons also have design catalogs to browse.
              </p>
            </details>

            <details className="bg-shell rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                What&apos;s the difference between a regular and spa pedicure?
              </summary>
              <p className="mt-4 text-harbor">
                Spa pedicures include extended treatments like longer massage, exfoliating masks, paraffin wax, and premium products. Regular pedicures focus on nail care and polish. Both include essential foot care.
              </p>
            </details>

            <details className="bg-shell rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                Can I bring my own polish color?
              </summary>
              <p className="mt-4 text-harbor">
                Yes, most salons allow this. Just mention it when booking. However, our salons stock extensive color ranges from premium brands, so you&apos;ll likely find what you want.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready for Perfect Nails?
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            We&apos;ll match you with a vetted nail technician in a pristine salon
          </p>
          <Link href="/#booking" className="btn-primary">
            Book Nail Service
          </Link>
          <p className="text-sm text-porcelain/60 mt-6">
            Expert concierge matching included • Hygiene guaranteed • Satisfaction assured
          </p>
        </div>
      </section>
    </div>
  )
}

