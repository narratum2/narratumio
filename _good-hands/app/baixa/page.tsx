import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Baixa Beauty Guide — Good Hands',
  description: 'Beauty services in Baixa, Lisbon\'s downtown district. Central location, accessible salons, and convenient beauty experiences.',
  keywords: ['baixa beauty', 'downtown lisbon salon', 'baixa spa', 'central lisbon beauty'],
}

export default function BaixaPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="/brand-images/blog-lisbon-guide.png" 
            alt="Baixa district Lisbon - central beauty services in historic downtown" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Baixa</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Downtown convenience meets quality beauty services
          </p>
        </div>
      </section>

      {/* Neighborhood Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Lisbon&apos;s Downtown Hub</h2>
          
          <div className="prose prose-lg max-w-none text-harbor space-y-6">
            <p className="text-xl leading-relaxed">
              Baixa (pronounced "bye-sha," meaning "lower") is Lisbon&apos;s grand downtown district, rebuilt in a perfect grid after the devastating 1755 earthquake. This planned neighborhood represents enlightenment-era urban design at its finest—wide boulevards, uniform neoclassical buildings, and the city&apos;s most accessible streets.
            </p>
            
            <p>
              Stretching from Praça do Comércio (riverfront) to Rossio Square, Baixa is where locals and tourists intersect. It&apos;s Lisbon&apos;s shopping district, financial center, and transit hub—all Metro lines converge here. The neighborhood pulses with energy during business hours but quiets at night when offices close.
            </p>

            <p>
              For beauty services, Baixa offers unmatched convenience. If you&apos;re staying centrally, working downtown, or just exploring Lisbon, Baixa&apos;s salons are the easiest to reach. Services here cater to both busy professionals needing quick lunchtime treatments and tourists wanting quality without traveling far from their hotels.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Baixa */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Why Choose Baixa for Beauty Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">🚇</div>
              <h3 className="text-xl font-serif mb-3">Maximum Accessibility</h3>
              <p className="text-harbor">
                All four Metro lines meet in Baixa. No neighborhood in Lisbon is easier to reach from anywhere in the city.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-serif mb-3">Quick & Efficient</h3>
              <p className="text-harbor">
                Perfect for busy schedules. Many salons cater to professionals with express services and lunchtime availability.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-xl font-serif mb-3">Tourist-Friendly</h3>
              <p className="text-harbor">
                Close to major hotels, excellent English proficiency, and accustomed to travelers&apos; needs and schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Beauty Services in Baixa</h2>
          
          <div className="space-y-6">
            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Quick-Service Hair Salons</h3>
              <p className="text-harbor mb-3">
                Baixa excels at efficiency without sacrificing quality. Many salons offer express cuts, same-day color, and blowouts for professionals and travelers on tight schedules. Booking systems are streamlined, and most accept walk-ins during off-peak hours.
              </p>
              <p className="text-sm text-gold">From €70 • Includes expert concierge matching</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Lunchtime Beauty Services</h3>
              <p className="text-harbor mb-3">
                Express manicures, eyebrow shaping, and quick facials designed for 45-60 minute lunch breaks. Baixa&apos;s salons understand the downtown professional clientele and offer services that fit business schedules.
              </p>
              <p className="text-sm text-gold">From €40 • Includes expert concierge matching</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Hotel-Adjacent Spas</h3>
              <p className="text-harbor mb-3">
                Several high-quality spas operate near Baixa&apos;s luxury hotels. If you&apos;re staying downtown, you can walk to treatments without navigating Lisbon&apos;s hills. Many offer couples packages and pre-dinner beautification.
              </p>
              <p className="text-sm text-gold">From €85 • Includes expert concierge matching</p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-semibold mb-2">Men&apos;s Grooming</h3>
              <p className="text-harbor mb-3">
                Traditional barbershops alongside modern grooming lounges. Baixa&apos;s business district means strong demand for professional men&apos;s services—sharp haircuts, beard trims, and executive grooming.
              </p>
              <p className="text-sm text-gold">From €30 • Includes expert concierge matching</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Baixa Experience */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">What to Expect in Baixa Salons</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">⏰ Efficiency-Focused</h3>
              <p className="text-harbor">
                Baixa salons respect your time. Appointments start promptly, services move efficiently, and you&apos;re in and out as scheduled. Perfect for travelers with packed itineraries or professionals on lunch breaks.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">🌍 International Clientele</h3>
              <p className="text-harbor">
                Downtown location means diverse clients. Staff are accustomed to serving tourists, expats, and business travelers—English is standard, and cultural awareness is high.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">💳 Modern Payment</h3>
              <p className="text-harbor">
                All major credit cards accepted, contactless payment available, and digital booking systems. Baixa&apos;s salons are tech-forward and visitor-friendly.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">🏃 Walk-In Friendly</h3>
              <p className="text-harbor">
                While booking ahead is recommended, many Baixa salons accommodate walk-ins better than other neighborhoods. If you need a last-minute service, Baixa is your best bet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Getting to Baixa</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Metro (All Lines!)</h3>
              <ul className="space-y-3 text-harbor">
                <li><strong>Baixa-Chiado:</strong> Blue & Green Lines</li>
                <li><strong>Rossio:</strong> Green Line</li>
                <li><strong>Terreiro do Paço:</strong> Blue Line</li>
                <li><strong>Restauradores:</strong> Blue Line</li>
              </ul>
              <p className="text-sm text-gold mt-4">Easiest neighborhood to reach by Metro!</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Other Transport</h3>
              <ul className="space-y-3 text-harbor">
                <li><strong>Walking:</strong> Flat streets, fully pedestrianized zones</li>
                <li><strong>Trams:</strong> 12, 15, 25, 28 all pass through</li>
                <li><strong>Buses:</strong> Dozens of lines serve Baixa</li>
                <li><strong>Taxis/Uber:</strong> Readily available everywhere</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gold/10 rounded-lg p-6">
            <p className="text-harbor">
              <strong>💡 Pro Tip:</strong> Schedule appointments between 2pm-4pm when Baixa is quietest (after lunch rush, before evening). Streets are less crowded, and service feels more relaxed.
            </p>
          </div>
        </div>
      </section>

      {/* Complete Your Visit */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Complete Your Baixa Experience</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🏛️</span>
              <div>
                <h4 className="font-semibold mb-1">Praça do Comércio</h4>
                <p className="text-harbor text-sm">Grand riverside square with triumphal arch, café terraces, and Tagus views</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">⛲</span>
              <div>
                <h4 className="font-semibold mb-1">Rossio Square</h4>
                <p className="text-harbor text-sm">Baixa&apos;s northern anchor with wave-pattern pavement and historic cafés</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🛍️</span>
              <div>
                <h4 className="font-semibold mb-1">Rua Augusta</h4>
                <p className="text-harbor text-sm">Pedestrian shopping street connecting Rossio to the riverfront</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🚡</span>
              <div>
                <h4 className="font-semibold mb-1">Elevador de Santa Justa</h4>
                <p className="text-harbor text-sm">Neo-Gothic elevator offering panoramic city views from the top</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">☕</span>
              <div>
                <h4 className="font-semibold mb-1">Confeitaria Nacional</h4>
                <p className="text-harbor text-sm">Historic pastry shop since 1829, perfect for post-salon Portuguese sweets</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🍽️</span>
              <div>
                <h4 className="font-semibold mb-1">Time Out Market</h4>
                <p className="text-harbor text-sm">Food hall with 40+ vendors, 10-minute walk from central Baixa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Explore Baixa</h2>
          
          <div className="bg-shell rounded-lg p-4">
            <div className="aspect-video w-full bg-harbor/10 rounded flex items-center justify-center">
              <div className="text-center text-harbor">
                <p className="text-lg mb-2">📍 Interactive Map</p>
                <p className="text-sm">Google Maps integration showing Good Hands partner locations in Baixa</p>
                <p className="text-xs mt-2 text-harbor/60">(Map embed coming in production)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Baixa Beauty FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Is Baixa more affordable than other neighborhoods?</h3>
              <p className="text-harbor">
                Generally yes—Baixa tends to be 10-15% less expensive than Chiado or Príncipe Real. High volume and competition keep prices competitive. Great value for quality services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Can I find a salon without booking ahead?</h3>
              <p className="text-harbor">
                Baixa is your best neighborhood for walk-ins. Many salons hold slots for same-day appointments, especially weekday afternoons. Still, booking through Good Hands ensures you get exactly what you want.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Are Baixa salons as good as trendy neighborhoods?</h3>
              <p className="text-harbor">
                Absolutely. While Baixa may not have the avant-garde vibe of Príncipe Real, the technical quality is excellent. Many top professionals work here precisely because of the central location and steady clientele.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Is Baixa crowded during the day?</h3>
              <p className="text-harbor">
                Yes, especially 10am-1pm and 5pm-7pm. However, salons are located on quieter side streets away from tourist thoroughfares. Once inside, it&apos;s peaceful. Book 2pm-4pm for the calmest experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Book Your Baixa Experience</h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Let us match you with the perfect beauty professional in Lisbon&apos;s most accessible neighborhood
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
