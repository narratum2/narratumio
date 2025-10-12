import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Heart, Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Skincare & Facial Services in Lisbon — Good Hands',
  description: 'Expert facial treatments and skincare services in Lisbon. HydraFacials, chemical peels, LED therapy, and customized treatments. Vetted estheticians matched to your skin needs.',
  keywords: ['facial lisbon', 'skincare lisbon', 'hydrafacial lisbon', 'chemical peel lisbon', 'esthetician lisbon'],
}

const skincareServices = [
  {
    name: 'Signature Facial',
    price: 'From €95',
    duration: '75 min',
    description: 'Customized facial treatment adapted to your skin type and concerns. Includes cleansing, exfoliation, extractions, massage, mask, and serums.',
    features: ['Skin analysis', 'Double cleanse', 'Gentle extractions', 'Face & neck massage', 'Custom mask', 'Serums & SPF'],
  },
  {
    name: 'HydraFacial',
    price: 'From €140',
    duration: '60 min',
    description: 'Medical-grade hydradermabrasion treatment that cleanses, exfoliates, extracts, and hydrates using patented Vortex technology.',
    features: ['Deep cleansing & exfoliation', 'Painless extractions', 'Intense hydration', 'Immediate glow', 'No downtime', 'Customizable boosters'],
  },
  {
    name: 'Chemical Peel',
    price: 'From €120',
    duration: '45-60 min',
    description: 'Professional-grade acid exfoliation to resurface skin, reduce pigmentation, and improve texture. Multiple strength options available.',
    features: ['Skin assessment', 'Appropriate peel strength', 'Neutralization', 'Soothing treatment', 'Home care instructions', '3-7 day healing'],
  },
  {
    name: 'Anti-Aging Treatment',
    price: 'From €150',
    duration: '90 min',
    description: 'Advanced facial targeting fine lines, loss of firmness, and age spots. Often includes LED therapy, microcurrent, or radio frequency.',
    features: ['Technology-enhanced', 'Collagen stimulation', 'Firming massage', 'Peptide serums', 'Long-lasting results'],
  },
  {
    name: 'Acne Treatment Facial',
    price: 'From €110',
    duration: '75 min',
    description: 'Specialized treatment for acne-prone skin with deep cleansing, gentle extractions, antibacterial treatments, and oil control.',
    features: ['Deep pore cleansing', 'Safe extractions', 'High-frequency treatment', 'Salicylic acid', 'Oil-free products', 'Prevention focus'],
  },
  {
    name: 'LED Light Therapy',
    price: 'From €80',
    duration: '30-45 min',
    description: 'Non-invasive treatment using specific light wavelengths to treat acne (blue), stimulate collagen (red), or reduce inflammation.',
    features: ['No pain', 'No downtime', 'Multiple wavelengths', 'Cumulative results', 'Add-on to facials'],
  },
]

export default function SkincareServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/brand-images/service-facial-treatment.png"
            alt="Advanced skincare and facial treatments in Lisbon - Good Hands beauty concierge"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-12 h-12 text-gold" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Skincare & Facials</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Expert estheticians matched to your unique skin needs
          </p>
          <p className="text-lg text-gold mt-3">
            All prices include expert concierge matching & coordination
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-center">Your Skin, Our Expertise</h2>
          
          <div className="prose prose-lg max-w-none text-harbor space-y-6 text-center mb-12">
            <p className="text-xl leading-relaxed">
              Great skincare isn&apos;t one-size-fits-all. We match you with licensed estheticians who understand Lisbon&apos;s climate, your skin type, and your specific concerns—whether that&apos;s sun damage, aging, acne, or simply maintaining healthy glow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Personalized Analysis</h3>
              <p className="text-harbor text-sm">
                Every treatment starts with thorough skin analysis—no cookie-cutter approaches
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Never Rushed</h3>
              <p className="text-harbor text-sm">
                Proper treatment timing, no assembly-line facials. Your skin gets the time it needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Prime Locations</h3>
              <p className="text-harbor text-sm">
                Treatment rooms in Lisbon&apos;s best neighborhoods—peaceful, clean, professional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Our Skincare Services</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skincareServices.map((service, idx) => (
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

      {/* Lisbon Climate Considerations */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Skincare for Lisbon&apos;s Climate</h2>
          
          <div className="bg-shell rounded-lg p-8">
            <p className="text-harbor mb-6">
              Lisbon&apos;s Mediterranean climate—300+ days of sunshine, Atlantic humidity, and persistent UV exposure—creates unique skincare challenges. Our local estheticians know how to address them.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">☀️ Sun Damage Concerns</h3>
                <ul className="space-y-2 text-sm text-harbor">
                  <li>• Hyperpigmentation from year-round UV</li>
                  <li>• Premature aging (fine lines, texture changes)</li>
                  <li>• Uneven skin tone from sun exposure</li>
                  <li>• Vitamin C & retinol are essential</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">💨 Wind & Humidity Effects</h3>
                <ul className="space-y-2 text-sm text-harbor">
                  <li>• Dehydration despite humid air</li>
                  <li>• Compromised skin barrier from wind</li>
                  <li>• Salt air exposure (even not at beach)</li>
                  <li>• Hydration + barrier repair focus</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Good Hands */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Why Book Skincare Through Good Hands?</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">🔬 Licensed & Certified</h3>
              <p className="text-harbor">
                All estheticians hold professional licenses and certification from recognized institutions. We verify credentials, not just portfolios.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">🧴 Premium Products</h3>
              <p className="text-harbor">
                Our partners use professional-grade product lines (Biologique Recherche, Dermalogica, SkinCeuticals) unavailable in retail. You get treatment-strength formulations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">🎯 Matched to Your Needs</h3>
              <p className="text-harbor">
                Acne-prone skin? We match you with estheticians specializing in acne. Anti-aging focus? We connect you with professionals trained in advanced technologies. No guesswork.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">💬 Clear Communication</h3>
              <p className="text-harbor">
                All our estheticians speak English fluently. Describe your concerns clearly, understand treatment plans, and get product recommendations you can actually follow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Protocols */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">What to Expect</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-semibold mb-2">Before Your Appointment</h3>
              <p className="text-harbor">
                Arrive with clean face (no makeup). Avoid active ingredients (retinol, acids) 2-3 days before chemical peels. Inform your esthetician of allergies, medications, or recent procedures.
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-semibold mb-2">During Treatment</h3>
              <p className="text-harbor">
                Expect thorough consultation, skin analysis under magnification, customized product selection, and education about what&apos;s happening. Communicate if anything feels uncomfortable.
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-semibold mb-2">After Treatment</h3>
              <p className="text-harbor">
                Follow home care instructions precisely—especially SPF use. Some treatments (peels, microneedling) require 24-48 hour downtime. Schedule social events accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Skincare FAQ</h2>
          
          <div className="space-y-6">
            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                How often should I get facials?
              </summary>
              <p className="mt-4 text-harbor">
                For general maintenance: monthly. For specific concerns (acne, aging, hyperpigmentation): every 2-3 weeks initially, then monthly. Your esthetician will recommend a personalized schedule.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                Will chemical peels damage my skin?
              </summary>
              <p className="mt-4 text-harbor">
                When performed by licensed professionals using appropriate strengths for your skin type, chemical peels are safe and effective. They cause controlled exfoliation, not damage. Always follow aftercare instructions.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                Can I wear makeup after a facial?
              </summary>
              <p className="mt-4 text-harbor">
                After basic facials: Yes, immediately. After peels or aggressive treatments: Wait 24-48 hours or as instructed. Schedule facials before important events with buffer time.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                Do I need to do anything special before my appointment?
              </summary>
              <p className="text-harbor mt-4">
                Arrive with clean face. Stop retinol 2-3 days before peels. Avoid sun exposure before and after. Inform esthetician of all products you&apos;re using and any medications.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                What&apos;s the difference between a spa facial and medical facial?
              </summary>
              <p className="mt-4 text-harbor">
                Spa facials focus on relaxation with gentler products. Medical/clinical facials use stronger active ingredients, advanced technologies, and target specific skin concerns. We offer both depending on your needs.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready for Healthier, Glowing Skin?
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            We&apos;ll match you with a licensed esthetician who specializes in your skin concerns
          </p>
          <Link href="/#booking" className="btn-primary">
            Book Skincare Service
          </Link>
          <p className="text-sm text-porcelain/60 mt-6">
            Expert concierge matching included • Licensed professionals • Results guaranteed
          </p>
        </div>
      </section>
    </div>
  )
}

