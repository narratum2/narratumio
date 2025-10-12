import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Palette, Sparkles, Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Makeup Services in Lisbon — Good Hands',
  description: 'Professional makeup artists in Lisbon. Bridal makeup, event makeup, makeup lessons, and editorial looks. Expert concierge matching with vetted artists.',
  keywords: ['makeup artist lisbon', 'bridal makeup lisbon', 'event makeup lisbon', 'makeup lesson lisbon'],
}

const makeupServices = [
  {
    name: 'Event Makeup',
    price: 'From €70',
    duration: '45-60 min',
    description: 'Professional makeup for any occasion—dinners, parties, photoshoots, or nights out. Tailored to your style, event type, and outfit.',
    features: ['Skin prep & primer', 'Full face application', 'Lashes included', 'Touch-up kit provided', 'Photos for reference'],
  },
  {
    name: 'Bridal Makeup',
    price: 'From €150',
    duration: '90 min + trial',
    description: 'Wedding day perfection with trial session included. Long-lasting formulas designed to photograph beautifully and withstand emotional moments.',
    features: ['Trial session (60 min)', 'Wedding day application', 'Lash application', 'Touch-up kit', 'On-location available', 'Photography-tested products'],
  },
  {
    name: 'Makeup Lesson',
    price: 'From €120',
    duration: '90 min',
    description: 'Learn techniques customized to your face, skill level, and goals. Hands-on instruction, product recommendations, and take-home guide.',
    features: ['Personalized instruction', 'Use your products or ours', 'Face chart to take home', 'Product recommendations', 'Video recording option'],
  },
  {
    name: 'Editorial Makeup',
    price: 'From €100',
    duration: '60-90 min',
    description: 'Fashion-forward, creative makeup for photoshoots, magazines, or artistic projects. Collaboration with your vision or photographer\'s direction.',
    features: ['Concept discussion', 'Creative application', 'Bold or avant-garde looks', 'Photography optimization', 'Portfolio photos'],
  },
  {
    name: 'Beauty Consultation',
    price: 'From €80',
    duration: '60 min',
    description: 'Personalized beauty analysis covering makeup techniques, color palette, product recommendations, and application tips for your features.',
    features: ['Face shape analysis', 'Color matching', 'Product recommendations', 'Technique demonstration', 'Shopping list provided'],
  },
  {
    name: 'Group Makeup (Bridal Party)',
    price: 'From €60/person',
    duration: '45 min each',
    description: 'Makeup for bridesmaids, mothers of bride/groom, or any group event. Coordinated looks that complement without matching exactly.',
    features: ['Coordinated styling', 'Volume discounts', 'On-location service', 'Group timing coordination', 'Touch-up kits for all'],
  },
]

export default function MakeupServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/brand-images/category-makeup.png"
            alt="Professional makeup artists for events and weddings in Lisbon - Good Hands"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Palette className="w-12 h-12 text-gold" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Makeup Services</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Professional makeup artists matched to your style and occasion
          </p>
          <p className="text-lg text-gold mt-3">
            All prices include expert concierge matching & coordination
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-center">Your Vision, Our Artistry</h2>
          
          <div className="prose prose-lg max-w-none text-harbor space-y-6 text-center mb-12">
            <p className="text-xl leading-relaxed">
              Great makeup artistry is about enhancing who you are, not masking it. We match you with artists who understand your aesthetic—whether that&apos;s natural and glowing, dramatic and editorial, or bridal perfection that lasts from ceremony through last dance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Portfolio-Based Matching</h3>
              <p className="text-harbor text-sm">
                We show you artists&apos; work before booking so you know their style matches your vision
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Professional Products</h3>
              <p className="text-harbor text-sm">
                High-end makeup brands (MAC, NARS, Charlotte Tilbury) for long-lasting, camera-ready results
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Flexible Locations</h3>
              <p className="text-harbor text-sm">
                Studio, your hotel, wedding venue, or anywhere you need us—we come to you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Our Makeup Services</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {makeupServices.map((service, idx) => (
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

      {/* Makeup Styles */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Find Your Style</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-semibold mb-2">Natural & Fresh</h3>
              <p className="text-harbor">
                "No-makeup" makeup that enhances your features subtly. Dewy skin, groomed brows, defined lashes, natural flush. Perfect for daytime events, professional photoshoots, or enhancing your everyday look.
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-semibold mb-2">Classic Glamour</h3>
              <p className="text-harbor">
                Timeless elegance—flawless base, defined eyes, classic red lip or nude sophistication. Think Old Hollywood, Grace Kelly, Audrey Hepburn. Beautiful in photos, appropriate for formal events.
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-semibold mb-2">Modern Glam</h3>
              <p className="text-harbor">
                Statement makeup with perfect balance—glowing skin, bold eyes OR bold lips (not both), sculpted features. Instagram-ready but wearable. Popular for parties, weddings, nights out.
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-semibold mb-2">Editorial & Creative</h3>
              <p className="text-harbor">
                Fashion-forward, artistic looks for photoshoots, fashion shows, or creative projects. Bold color, graphic lines, avant-garde techniques. For those who want to make a statement.
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-semibold mb-2">Bridal Perfection</h3>
              <p className="text-harbor">
                Long-lasting, photograph-proof makeup that looks beautiful in person AND in photos (often different requirements). Designed to last 12+ hours through emotions, hugs, dancing, and Portuguese sunshine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Good Hands */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Why Book Makeup Through Good Hands?</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">🎨 Portfolio-Vetted Artists</h3>
              <p className="text-harbor">
                We show you each artist&apos;s Instagram or portfolio BEFORE you book. See their actual work, not just descriptions. If you don&apos;t love their style, we match you with someone else.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">📸 Photography Understanding</h3>
              <p className="text-harbor">
                Our artists understand the difference between makeup that looks good in person vs. in photos. They adapt application based on lighting, camera type, and whether you&apos;re being photographed.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">🧴 Premium Products</h3>
              <p className="text-harbor">
                Professional-grade brands (MAC, NARS, Charlotte Tilbury, Bobbi Brown), not drugstore makeup. High-pigment formulas, better staying power, superior results.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">⏰ Reliable & Punctual</h3>
              <p className="text-harbor">
                Artists arrive on time with all necessary products. No last-minute cancellations, no showing up unprepared. We guarantee reliability for important occasions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">How to Prepare</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Before Your Appointment:</h3>
              <ul className="space-y-2 text-harbor ml-6">
                <li>• <strong>Skincare:</strong> Cleanse, moisturize, apply SPF (wait 15 min before makeup)</li>
                <li>• <strong>Hydration:</strong> Drink water—hydrated skin holds makeup better</li>
                <li>• <strong>Reference photos:</strong> Save 3-5 photos of looks you love</li>
                <li>• <strong>Outfit consideration:</strong> Know what you&apos;re wearing to coordinate makeup</li>
                <li>• <strong>Hair done first:</strong> If possible, complete hair before makeup</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Communicate Clearly:</h3>
              <ul className="space-y-2 text-harbor ml-6">
                <li>• Mention any skin sensitivities or allergies</li>
                <li>• Specify coverage level (sheer, medium, full)</li>
                <li>• Share concerns (oily T-zone, dry patches, etc.)</li>
                <li>• Describe event type and duration</li>
                <li>• State if you&apos;ll be photographed professionally</li>
              </ul>
            </div>

            <div className="bg-gold/10 rounded-lg p-6">
              <p className="text-harbor">
                <strong>💡 Pro Tip:</strong> For bridal or important events, book a trial session 2-4 weeks before. This lets you see the final look, make adjustments, and eliminate day-of anxiety. Most brides who skip trials regret it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Makeup Services FAQ</h2>
          
          <div className="space-y-6">
            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                Should I do my own makeup or hire a professional?
              </summary>
              <p className="mt-4 text-harbor">
                Hire a professional if: it&apos;s your wedding/major event, you&apos;ll be photographed professionally, you want to learn new techniques, or you simply want to feel pampered. DIY if: you&apos;re skilled and confident, budget is extremely tight, or you genuinely prefer your own hand.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                How long does professional makeup last?
              </summary>
              <p className="mt-4 text-harbor">
                With proper application and quality products: 8-12 hours easily. Bridal makeup is designed to last 12-16 hours. Touch-ups may be needed for lipstick after eating/drinking, but base and eyes should stay put.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                Will I look like myself?
              </summary>
              <p className="mt-4 text-harbor">
                Yes—unless you specifically request dramatic transformation. Professional makeup enhances your features, doesn&apos;t mask them. You should look like the best, most polished version of yourself.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                Can the artist use my own makeup products?
              </summary>
              <p className="mt-4 text-harbor">
                For lessons, yes—that&apos;s often the point. For events/bridal, most artists prefer their professional kit (better products, hygiene control, full color range). Discuss beforehand if you have specific products you want incorporated.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                What if I don&apos;t like the makeup during application?
              </summary>
              <p className="mt-4 text-harbor">
                Speak up immediately! Good artists want your feedback during the process. It&apos;s much easier to adjust while they&apos;re working than after completion. They&apos;re professionals—they can handle critique.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to Look Your Best?
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            We&apos;ll match you with a makeup artist whose style aligns perfectly with your vision
          </p>
          <Link href="/#booking" className="btn-primary">
            Book Makeup Service
          </Link>
          <p className="text-sm text-porcelain/60 mt-6">
            Expert concierge matching included • Portfolio-vetted artists • Professional products
          </p>
        </div>
      </section>
    </div>
  )
}

