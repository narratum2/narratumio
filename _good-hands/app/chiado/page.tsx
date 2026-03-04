import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getNeighborhoodPrice } from '@/lib/pricing'
import { getBreadcrumbSchema, getLocalBusinessSchema } from '@/lib/breadcrumb-schema'
import LocationMapSection from '@/components/LocationMapSection'
import { Building2, Sparkles, ShoppingBag, Wine, Palette, MessageCircle, Camera, Lightbulb, Coffee, BookOpen, Drama, Sun, UtensilsCrossed, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chiado Beauty Guide — Good Hands',
  description: 'Luxury beauty services in Chiado, Lisbon\'s most elegant neighborhood. Historic charm meets modern expertise.',
  keywords: ['chiado beauty', 'chiado salon', 'chiado spa', 'luxury beauty lisbon'],
  alternates: { canonical: 'https://goodhandsstudio.com/chiado' },
}

export default function ChiadoPage() {
  return (
    <div className="pt-20">
      {/* Hero Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] min-h-[300px] overflow-hidden">
        <Image 
          src="/brand-images/hero-chiado.jpg" 
          alt="Chiado Lisbon - bohemian chic beauty services in cultural heart" 
          fill 
          className="object-cover" 
          priority 
        />
      </div>

      {/* Hero Content */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-4 text-ink">Chiado</h1>
          <p className="text-xl md:text-2xl text-harbor max-w-2xl mx-auto">
            Where historic elegance meets contemporary beauty expertise
          </p>
        </div>
      </section>

      {/* Neighborhood Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-center">Lisbon&apos;s Most Elegant Quarter</h2>
          
          <div className="prose prose-lg max-w-none text-harbor space-y-6">
            <p className="text-xl leading-relaxed">
              Chiado is Lisbon&apos;s cultural and intellectual heart, a sophisticated neighborhood where Belle Époque architecture houses contemporary art galleries, historic cafés, and luxury boutiques. Once the domain of poets and artists like Fernando Pessoa, today Chiado remains the city&apos;s most refined district.
            </p>
            
            <p>
              The neighborhood stretches from Praça Luís de Camões to Praça do Carmo, with elegant boulevards, bookshops, theaters, and some of Lisbon&apos;s finest retail. After the devastating 1988 fire, Chiado was beautifully restored, blending historic façades with modern interiors.
            </p>

            <p>
              For beauty services, Chiado represents the pinnacle of Lisbon&apos;s luxury scene. Upscale salons occupy beautifully restored buildings, offering classic European techniques with impeccable service. Expect elevated experiences, refined aesthetics, and professionals who take their craft seriously.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Chiado */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">Why Choose Chiado for Beauty Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0"><Building2 className="w-5 h-5 text-gold" /></div>
              <h3 className="text-xl font-serif mb-3">Historic Luxury</h3>
              <p className="text-harbor">
                Experience beauty services in magnificent restored buildings with original azulejo tiles, high ceilings, and architectural details.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0"><Sparkles className="w-5 h-5 text-gold" /></div>
              <h3 className="text-xl font-serif mb-3">Elevated Service</h3>
              <p className="text-harbor">
                Chiado&apos;s salons set Lisbon&apos;s standards for professionalism, technique, and client care. Expect excellence as standard.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0"><ShoppingBag className="w-5 h-5 text-gold" /></div>
              <h3 className="text-xl font-serif mb-3">Perfect Location</h3>
              <p className="text-harbor">
                Combine beauty appointments with shopping, cultural visits, and dining in Lisbon&apos;s most walkable neighborhood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Beauty Services in Chiado</h2>
          
          <div className="space-y-6">
            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Luxury Hair Salons</h3>
              <p className="text-harbor mb-3">
                International-caliber stylists trained in Paris, London, and Milan. Specialties include precision cutting, complex color work, and European blow-dry techniques. Many salons offer champagne service and private styling suites.
              </p>
              <p className="text-sm text-gold">{getNeighborhoodPrice('chiado', 'hair')} • Includes expert concierge matching</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">High-End Nail Salons</h3>
              <p className="text-harbor mb-3">
                Pristine manicure bars offering gel systems, luxury pedicures, and intricate nail art. Expect spacious stations, premium products (OPI, CND), and meticulous attention to hygiene and detail.
              </p>
              <p className="text-sm text-gold">{getNeighborhoodPrice('chiado', 'nails')} • Includes expert concierge matching</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Facial & Skincare Studios</h3>
              <p className="text-harbor mb-3">
                European skincare treatments using premium product lines (Biologique Recherche, Sodashi, Yon-Ka). Specialized facials address Lisbon&apos;s climate effects on skin.
              </p>
              <p className="text-sm text-gold">{getNeighborhoodPrice('chiado', 'skincare')} • Includes expert concierge matching</p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-semibold mb-2">Editorial Makeup Artists</h3>
              <p className="text-harbor mb-3">
                Professional makeup artists with fashion, film, and bridal expertise. Many have worked with Portuguese and international publications.
              </p>
              <p className="text-sm text-gold">{getNeighborhoodPrice('chiado', 'makeup')} • Includes expert concierge matching</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Chiado Experience */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">What to Expect in Chiado Salons</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2"><Wine className="w-5 h-5 text-gold shrink-0" /> Elevated Amenities</h3>
              <p className="text-harbor">
                Complimentary beverages (often including champagne or Portuguese wines), magazines, WiFi, and comfortable waiting areas. Some salons offer light refreshments and private treatment rooms.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2"><Palette className="w-5 h-5 text-gold shrink-0" /> European Techniques</h3>
              <p className="text-harbor">
                Many Chiado professionals trained internationally and bring sophisticated European techniques—from French balayage to Italian precision cutting to Scandinavian skincare methods.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2"><MessageCircle className="w-5 h-5 text-gold shrink-0" /> Consultation Culture</h3>
              <p className="text-harbor">
                Chiado salons prioritize thorough consultations. Expect in-depth discussions about your goals, lifestyle, and maintenance—not rushed appointments.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2"><Camera className="w-5 h-5 text-gold shrink-0" /> Instagram-Worthy Interiors</h3>
              <p className="text-harbor">
                Chiado&apos;s salons are architectural gems—marble details, vintage mirrors, designer furniture, and stunning natural light. The spaces themselves are part of the luxury experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting to Chiado */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Getting to Chiado</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Public Transport</h3>
              <ul className="space-y-3 text-harbor">
                <li><strong>Metro:</strong> Baixa-Chiado (Blue & Green Lines)</li>
                <li><strong>Tram 28:</strong> Stops at Chiado (Rua Garrett)</li>
                <li><strong>Tram 24:</strong> Connects to Príncipe Real</li>
                <li><strong>Elevador da Bica:</strong> Funicular from riverfront</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Walking & Parking</h3>
              <ul className="space-y-3 text-harbor">
                <li>From Rossio: 7-minute walk</li>
                <li>From Príncipe Real: 10-minute walk</li>
                <li>Parking: Camões parking garage</li>
                <li>Uber/taxi readily available</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gold/10 rounded-lg p-6">
            <p className="text-harbor">
              <strong>Pro Tip:</strong> Book morning appointments (10am-12pm) when Chiado is quieter. Afternoon appointments pair perfectly with shopping at Armazéns do Chiado or coffee at A Brasileira, Pessoa&apos;s favorite café.
            </p>
          </div>
        </div>
      </section>

      {/* Complete Your Visit */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Complete Your Chiado Experience</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0"><Coffee className="w-5 h-5 text-gold" /></div>
              <div>
                <h3 className="font-semibold mb-1">A Brasileira</h3>
                <p className="text-harbor text-sm">Historic Art Nouveau café, Fernando Pessoa&apos;s haunt, perfect for post-salon coffee</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0"><ShoppingBag className="w-5 h-5 text-gold" /></div>
              <div>
                <h3 className="font-semibold mb-1">Armazéns do Chiado</h3>
                <p className="text-harbor text-sm">Elegant shopping center with Portuguese and international brands</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0"><BookOpen className="w-5 h-5 text-gold" /></div>
              <div>
                <h3 className="font-semibold mb-1">Livraria Bertrand</h3>
                <p className="text-harbor text-sm">World&apos;s oldest operating bookstore (since 1732)</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0"><Drama className="w-5 h-5 text-gold" /></div>
              <div>
                <h3 className="font-semibold mb-1">Teatro Nacional São Carlos</h3>
                <p className="text-harbor text-sm">Stunning 18th-century opera house, Portugal&apos;s La Scala</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0"><Sun className="w-5 h-5 text-gold" /></div>
              <div>
                <h3 className="font-semibold mb-1">Miradouro de Santa Catarina</h3>
                <p className="text-harbor text-sm">Sunset viewpoint overlooking the Tagus, 5-minute walk</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0"><UtensilsCrossed className="w-5 h-5 text-gold" /></div>
              <div>
                <h3 className="font-semibold mb-1">Bairro do Avillez</h3>
                <p className="text-harbor text-sm">José Avillez&apos;s multi-space restaurant, Michelin-starred chef</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-center">Explore Chiado</h2>
          
          <div className="bg-shell rounded-lg p-4">
            <div className="aspect-video w-full bg-harbor/10 rounded flex items-center justify-center">
              <div className="text-center text-harbor">
                <p className="text-lg mb-2 flex items-center justify-center gap-2"><MapPin className="w-5 h-5 text-gold" /> Interactive Map</p>
                <p className="text-sm">Google Maps integration showing Good Hands partner locations in Chiado</p>
                <p className="text-xs mt-2 text-harbor/60">(Map embed coming in production)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Chiado Beauty FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Is Chiado more expensive than other neighborhoods?</h3>
              <p className="text-harbor">
                Slightly, yes—typically 10-20% higher than average Lisbon prices. You&apos;re paying for prime location, elevated service, luxurious environments, and highly experienced professionals. The value and experience reflect the premium.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Do I need to dress up for Chiado salons?</h3>
              <p className="text-harbor">
                Not required, but Chiado has a more refined atmosphere. Smart casual is perfectly appropriate. You&apos;ll feel comfortable in the same outfit you&apos;d wear to a nice restaurant.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Can I get same-day appointments in Chiado?</h3>
              <p className="text-harbor">
                Sometimes, but Chiado&apos;s top professionals book out quickly. We recommend booking 1-2 weeks ahead, especially for complex services like color or special occasions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Are Chiado salons tourist-friendly?</h3>
              <p className="text-harbor">
                Absolutely. All our Chiado partners speak excellent English and regularly serve international clients. They understand tourists&apos; needs (unfamiliar products, time constraints, hotel locations).
              </p>
            </div>
          </div>
        </div>
      </section>

      <LocationMapSection
        neighborhoodName="Chiado"
        mapsQuery="beauty+salons+chiado+lisbon"
      />

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Book Your Chiado Experience</h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Let us match you with Chiado&apos;s finest beauty professionals in this legendary neighborhood
          </p>
          <Link href="/#booking" className="btn-gold">Book Now</Link>
          <p className="text-sm text-porcelain/60 mt-6">
            All prices include expert concierge matching & coordination
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema([
          { name: 'Home', url: 'https://goodhandsstudio.com' },
          { name: 'Neighborhoods', url: 'https://goodhandsstudio.com/guides' },
          { name: 'Chiado', url: 'https://goodhandsstudio.com/chiado' },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema({
          name: 'Chiado',
          slug: 'chiado',
          description: "Luxury beauty services in Chiado, Lisbon's most elegant neighborhood",
          lat: '38.7108',
          lng: '-9.1425',
        })) }}
      />
    </div>
  )
}
