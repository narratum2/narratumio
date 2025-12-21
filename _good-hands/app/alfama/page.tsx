import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Alfama Beauty Guide — Good Hands',
  description: 'Authentic beauty experiences in historic Alfama. Traditional treatments in Lisbon\'s oldest neighborhood.',
}

export default function AlfamaPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/brand-images/beauty-moment.png" alt="Historic Alfama neighborhood Lisbon - authentic beauty experiences in traditional setting" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4 text-center w-full">Alfama</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Ancient streets and authentic experiences in Lisbon&apos;s oldest quarter
          </p>
        </div>
      </section>

      {/* Neighborhood Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">The Heart of Historic Lisbon</h2>
          
          <div className="prose prose-lg max-w-none text-harbor space-y-6">
            <p className="text-xl leading-relaxed">
              Alfama is Lisbon&apos;s oldest and most iconic neighborhood, a maze of narrow cobblestone streets that cascade down the hillside from São Jorge Castle to the Tagus River. This historic quarter survived the 1755 earthquake and retains its medieval Moorish layout—intimate, winding, and wonderfully atmospheric.
            </p>
            
            <p>
              Walking through Alfama feels like stepping back in time. Fado music drifts from tiny tascas, laundry hangs between buildings, and locals chat from their windows. It&apos;s authentic, unhurried, and deeply rooted in Portuguese tradition.
            </p>

            <p>
              For beauty services, Alfama offers a unique blend of traditional and modern. Hidden salons in converted townhouses provide intimate, personalized experiences, while the neighborhood&apos;s authentic character attracts professionals who value artisanal craftsmanship over trends.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Alfama for Beauty Services */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Why Choose Alfama for Beauty Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-serif mb-3">Authentic Atmosphere</h3>
              <p className="text-harbor">
                Experience beauty services in historic buildings with original architecture, offering a unique and memorable setting.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">🤲</div>
              <h3 className="text-xl font-serif mb-3">Personal Touch</h3>
              <p className="text-harbor">
                Smaller, family-run establishments provide exceptional personal attention and traditional Portuguese hospitality.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-serif mb-3">Cultural Experience</h3>
              <p className="text-harbor">
                Combine your beauty appointment with fado music, traditional restaurants, and stunning viewpoints throughout the neighborhood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Beauty Services in Alfama</h2>
          
          <div className="space-y-6">
            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Hair Salons</h3>
              <p className="text-harbor mb-3">
                Traditional Portuguese salons alongside modern stylists working in renovated spaces. Specialties include natural wave treatments perfect for Lisbon&apos;s humid climate.
              </p>
              <p className="text-sm text-gold">From €80 • Includes expert concierge matching</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Nail Care</h3>
              <p className="text-harbor mb-3">
                Intimate nail studios offering detailed, unhurried services. Perfect for travelers who want a relaxing experience while exploring the neighborhood.
              </p>
              <p className="text-sm text-gold">From €45 • Includes expert concierge matching</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Skincare & Facials</h3>
              <p className="text-harbor mb-3">
                Small esthetician studios specializing in Portuguese skincare products and traditional olive oil-based treatments.
              </p>
              <p className="text-sm text-gold">From €95 • Includes expert concierge matching</p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-semibold mb-2">Makeup Artists</h3>
              <p className="text-harbor mb-3">
                Local makeup artists available for events, photoshoots against Alfama&apos;s stunning backdrop, or lessons in your vacation rental.
              </p>
              <p className="text-sm text-gold">From €70 • Includes expert concierge matching</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Around */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Getting to Alfama</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Public Transport</h3>
              <ul className="space-y-3 text-harbor">
                <li><strong>Tram 28:</strong> Iconic yellow tram stops throughout Alfama</li>
                <li><strong>Tram 12:</strong> Connects downtown to Alfama&apos;s heart</li>
                <li><strong>Metro:</strong> Santa Apolónia (Blue Line) at the base</li>
                <li><strong>Buses:</strong> 737, 734, 759 serve the area</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Walking & Tips</h3>
              <ul className="space-y-3 text-harbor">
                <li>From Baixa: 15-20 minute uphill walk</li>
                <li>Wear comfortable shoes—steep cobblestones!</li>
                <li>Allow extra time for the climb</li>
                <li>Consider arriving early to explore before your appointment</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gold/10 rounded-lg p-6">
            <p className="text-harbor">
              <strong>💡 Pro Tip:</strong> Schedule your beauty appointment for late morning or early afternoon, then spend the evening exploring Alfama&apos;s fado houses and miradouros (viewpoints). The neighborhood is magical at sunset.
            </p>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Complete Your Alfama Experience</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🏰</span>
              <div>
                <h4 className="font-semibold mb-1">São Jorge Castle</h4>
                <p className="text-harbor text-sm">Medieval fortress with panoramic city views, 10-minute walk uphill</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">⛪</span>
              <div>
                <h4 className="font-semibold mb-1">Lisbon Cathedral (Sé)</h4>
                <p className="text-harbor text-sm">12th-century Romanesque cathedral, architectural marvel</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🎵</span>
              <div>
                <h4 className="font-semibold mb-1">Fado Museum</h4>
                <p className="text-harbor text-sm">Learn about Portugal&apos;s soulful music tradition</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🌅</span>
              <div>
                <h4 className="font-semibold mb-1">Miradouro de Santa Luzia</h4>
                <p className="text-harbor text-sm">Stunning terrace overlooking the Tagus, perfect photo spot</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🍽️</span>
              <div>
                <h4 className="font-semibold mb-1">Traditional Tascas</h4>
                <p className="text-harbor text-sm">Authentic Portuguese restaurants serving grilled sardines and bacalhau</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Explore Alfama</h2>
          
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="aspect-video w-full bg-harbor/10 rounded flex items-center justify-center">
              <div className="text-center text-harbor">
                <p className="text-lg mb-2">📍 Interactive Map</p>
                <p className="text-sm">Google Maps integration will show Good Hands partner locations in Alfama</p>
                <p className="text-xs mt-2 text-harbor/60">(Map embed coming in production)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Alfama Beauty FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Is Alfama hard to navigate for appointments?</h3>
              <p className="text-harbor">
                The narrow streets can be confusing at first, but we provide detailed directions and Google Maps pins for every appointment. Most locations are easily accessible once you know the way. Allow an extra 10 minutes your first time.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Can beauty professionals come to my accommodation in Alfama?</h3>
              <p className="text-harbor">
                Yes! Many vacation rentals in Alfama have accessibility challenges, so we offer in-home services from mobile professionals. Perfect if you&apos;re staying in a higher-floor apartment.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">What&apos;s the best time to book in Alfama?</h3>
              <p className="text-harbor">
                Mornings (9am-12pm) tend to be quieter before tourist crowds arrive. Late afternoon (4pm-7pm) is also excellent—get beautified before an evening of fado and dinner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Book Your Alfama Experience</h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Let us match you with the perfect beauty professional in Lisbon&apos;s most historic neighborhood
          </p>
          <Link href="/#booking" className="btn-primary">Book Now</Link>
          <p className="text-sm text-porcelain/60 mt-6">
            All prices include expert concierge matching & coordination
          </p>
        </div>
      </section>
    </div>
  )
}
