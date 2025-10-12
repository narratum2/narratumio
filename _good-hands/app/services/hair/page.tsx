import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Scissors, Sparkles, Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hair Styling Services in Lisbon — Good Hands',
  description: 'Expert hair stylists in Lisbon. Precision cuts, color, balayage, and treatments. Expert concierge matching with vetted professionals.',
  keywords: ['hair salon lisbon', 'hair stylist lisbon', 'balayage lisbon', 'hair color lisbon', 'haircut lisbon'],
}

const hairServices = [
  {
    name: 'Precision Cut',
    price: 'From €80',
    duration: '60 min',
    description: 'Expert cutting techniques tailored to your hair type, face shape, and lifestyle. Includes wash, cut, and styling.',
    features: ['Consultation included', 'Wash & blow-dry', 'Styling tips'],
  },
  {
    name: 'Color & Highlights',
    price: 'From €120',
    duration: '120 min',
    description: 'Professional color services from root touch-ups to full transformations. Premium color products for lasting results.',
    features: ['Color consultation', 'Premium products', 'Toner application', 'Styling'],
  },
  {
    name: 'Balayage',
    price: 'From €180',
    duration: '180 min',
    description: 'Hand-painted highlights for natural, sun-kissed dimension. Perfect for low-maintenance color with maximum impact.',
    features: ['Customized placement', 'Toner & gloss', 'Styling', 'Maintenance tips'],
  },
  {
    name: 'Blowout & Styling',
    price: 'From €45',
    duration: '45 min',
    description: 'Professional blow-dry and styling for any occasion. From sleek and smooth to voluminous and textured.',
    features: ['Wash included', 'Heat protection', 'Long-lasting results'],
  },
  {
    name: 'Treatment & Repair',
    price: 'From €60',
    duration: '60 min',
    description: 'Deep conditioning treatments to restore moisture, repair damage, and enhance shine. Perfect for Lisbon\'s humid climate.',
    features: ['Damage assessment', 'Keratin or protein treatment', 'Take-home care advice'],
  },
  {
    name: 'Bridal Hair',
    price: 'From €150',
    duration: '90-120 min',
    description: 'Wedding day hair artistry with trial session. Updos, half-up styles, or flowing waves designed to last all day.',
    features: ['Trial session included', 'On-location available', 'Touch-up kit provided'],
  },
]

export default function HairServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/brand-images/category-hair-styling.png"
            alt="Professional hair styling and color treatments in Lisbon - Good Hands concierge"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Scissors className="w-12 h-12 text-gold" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Hair Styling</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Expert hair stylists matched to your unique needs
          </p>
          <p className="text-lg text-gold mt-3">
            All prices include expert concierge matching & coordination
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-center">Your Hair, Our Expertise</h2>
          
          <div className="prose prose-lg max-w-none text-harbor space-y-6 text-center mb-12">
            <p className="text-xl leading-relaxed">
              Finding the right hair stylist is personal. We match you with vetted professionals who understand your hair texture, lifestyle, and vision—whether you&apos;re a local or visiting Lisbon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Expert Matching</h3>
              <p className="text-harbor text-sm">
                We consider your hair type, desired style, and preferences to match you with the perfect stylist
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Convenient Booking</h3>
              <p className="text-harbor text-sm">
                Book online in minutes. We handle all coordination and confirmations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Prime Locations</h3>
              <p className="text-harbor text-sm">
                Salons in Lisbon&apos;s best neighborhoods—Chiado, Príncipe Real, and more
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Our Hair Services</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {hairServices.map((service, idx) => (
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

      {/* Why Choose Good Hands */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Why Book Hair Services Through Good Hands?</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-semibold mb-2">Climate-Appropriate Expertise</h3>
              <p className="text-harbor">
                Our stylists understand Lisbon&apos;s unique humid climate and recommend products and techniques that work in these conditions—not just look good in photos.
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-semibold mb-2">No Language Barriers</h3>
              <p className="text-harbor">
                All our professionals speak English fluently. You can clearly communicate your vision without lost-in-translation mistakes.
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-semibold mb-2">Vetted & Verified</h3>
              <p className="text-harbor">
                Every stylist undergoes portfolio review, reference checks, and trial services. You&apos;re booking with proven professionals, not taking a chance.
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-harbor">
                The price you see is the price you pay. No surprise charges, hidden fees, or awkward conversations about costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Hair Salons by Neighborhood</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Chiado</h3>
              <p className="text-harbor mb-2">
                Historic elegance meets modern technique. Upscale salons with classic European aesthetics.
              </p>
              <Link href="/chiado" className="text-gold hover:underline text-sm font-medium">
                Explore Chiado →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Príncipe Real</h3>
              <p className="text-harbor mb-2">
                Trendsetting stylists and avant-garde color. Perfect for bold transformations and creative cuts.
              </p>
              <Link href="/principe-real" className="text-gold hover:underline text-sm font-medium">
                Explore Príncipe Real →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Avenida da Liberdade</h3>
              <p className="text-harbor mb-2">
                Luxury flagship salons from international brands. VIP experience with premium products.
              </p>
              <Link href="/avenida" className="text-gold hover:underline text-sm font-medium">
                Explore Avenida →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Alfama</h3>
              <p className="text-harbor mb-2">
                Intimate, boutique studios in historic buildings. Traditional Portuguese hospitality.
              </p>
              <Link href="/alfama" className="text-gold hover:underline text-sm font-medium">
                Explore Alfama →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Hair Services FAQ</h2>
          
          <div className="space-y-6">
            <details className="bg-shell rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                How do I know which stylist is right for me?
              </summary>
              <p className="mt-4 text-harbor">
                When you book, tell us about your hair type, desired style, and any concerns. We match you with stylists who specialize in what you need. You can also request to see their portfolio before confirming.
              </p>
            </details>

            <details className="bg-shell rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                Can I get balayage if I have dark hair?
              </summary>
              <p className="mt-4 text-harbor">
                Absolutely! Balayage works beautifully on all hair colors. For very dark hair, the process may take longer and prices may vary. We&apos;ll discuss options during consultation.
              </p>
            </details>

            <details className="bg-shell rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                What if I don&apos;t speak Portuguese?
              </summary>
              <p className="mt-4 text-harbor">
                All our stylists speak English fluently. Many also speak Spanish, French, or Italian. We ensure you can communicate your vision clearly.
              </p>
            </details>

            <details className="bg-shell rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                Should I wash my hair before my appointment?
              </summary>
              <p className="mt-4 text-harbor">
                For cuts, come with clean, dry hair if possible. For color services, it&apos;s often better to have hair that hasn&apos;t been washed for 24 hours—but we&apos;ll specify when you book.
              </p>
            </details>

            <details className="bg-shell rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                Do you offer mobile hair services?
              </summary>
              <p className="mt-4 text-harbor">
                Yes! Many of our stylists offer mobile services for an additional fee. Perfect for bridal parties, special events, or if you prefer the convenience of your accommodation.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready for Your Perfect Hair Day?
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Tell us what you need, and we&apos;ll match you with the ideal stylist
          </p>
          <Link href="/#booking" className="btn-primary">
            Book Hair Service
          </Link>
          <p className="text-sm text-porcelain/60 mt-6">
            Expert concierge matching included • No hidden fees • Satisfaction guaranteed
          </p>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Hair Styling Services',
            description: 'Expert hair styling, cutting, and color services in Lisbon',
            provider: {
              '@type': 'Organization',
              name: 'Good Hands',
            },
            areaServed: 'Lisbon, Portugal',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Hair Services',
              itemListElement: hairServices.map((service) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: service.name,
                  description: service.description,
                },
              })),
            },
          }),
        }}
      />
    </div>
  )
}

