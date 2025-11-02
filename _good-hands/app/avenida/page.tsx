import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Avenida da Liberdade Beauty Guide — Good Hands',
  description: 'Luxury beauty services on Avenida da Liberdade, Lisbon\'s grand boulevard. International brands, flagship salons, executive grooming.',
  keywords: ['avenida beauty', 'luxury salon lisbon', 'avenida da liberdade spa', 'executive grooming lisbon'],
}

export default function AvenidaPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="/brand-images/salon-detail.png" 
            alt="Avenida da Liberdade Lisbon - luxury beauty services on prestigious boulevard" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Avenida da Liberdade</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Lisbon&apos;s grand boulevard of luxury beauty
          </p>
        </div>
      </section>

      {/* Neighborhood Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Lisbon&apos;s Champs-Élysées</h2>
          
          <div className="prose prose-lg max-w-none text-harbor space-y-6">
            <p className="text-xl leading-relaxed">
              Avenida da Liberdade is Lisbon&apos;s most prestigious address—a tree-lined boulevard connecting Marquês de Pombal square to Restauradores, modeled after Paris&apos;s Champs-Élysées. Built in the 1880s, this wide avenue represents Lisbon at its most cosmopolitan: luxury hotels (Four Seasons, Tivoli), international flagship stores, corporate headquarters, and upscale dining.
            </p>
            
            <p>
              The avenue exudes sophistication. Jacaranda trees provide shade over mosaic pavements. Art Deco and Belle Époque buildings house high-end retail. Business professionals walk briskly to meetings while tourists window-shop designer boutiques. It&apos;s Lisbon&apos;s statement that "we&apos;re a European capital city with global standards."
            </p>

            <p>
              For beauty services, Avenida da Liberdade represents international luxury. Expect flagship salons from global brands, hotel spas with worldwide reputations, and professionals trained in London, Paris, or New York. If you want recognizable names, cutting-edge technology, and premium everything, this is your destination. Prices reflect the prestige—typically 20-30% higher than other neighborhoods, but you&apos;re paying for guaranteed international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Avenida */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Why Choose Avenida for Beauty Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-serif mb-3">International Standards</h3>
              <p className="text-harbor">
                Flagship locations of brands you know from London, Paris, New York. Consistent quality wherever you&apos;ve experienced them before.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-serif mb-3">Executive Convenience</h3>
              <p className="text-harbor">
                Perfect for business travelers staying at Avenida&apos;s luxury hotels or professionals working in nearby offices. Premium efficiency.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-serif mb-3">Latest Technology</h3>
              <p className="text-harbor">
                First to offer new treatments—RF microneedling, cutting-edge lasers, advanced skincare technology. Investment in latest equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Beauty Services on Avenida</h2>
          
          <div className="space-y-6">
            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Luxury Hotel Spas</h3>
              <p className="text-harbor mb-3">
                Four Seasons Spa, Tivoli Avenida Spa, and other hotel wellness centers offering full spa experiences. Expect international product lines (La Prairie, Valmont), extensive facilities (saunas, pools, relaxation lounges), and therapists trained to global luxury standards. Day passes often available for non-guests.
              </p>
              <p className="text-sm text-gold">From €150 • Includes expert concierge matching</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">International Hair Salon Chains</h3>
              <p className="text-harbor mb-3">
                Flagship locations of international brands with stylists trained in London, Paris, or Milan academies. Advanced color techniques, precision cutting, and brand-consistent service. Perfect if you want the same experience you had in another city.
              </p>
              <p className="text-sm text-gold">From €110 • Includes expert concierge matching</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Medical Aesthetics Clinics</h3>
              <p className="text-harbor mb-3">
                Doctor-supervised aesthetic medicine—Botox, fillers, laser treatments, body contouring. Avenida houses Lisbon&apos;s premier medical aesthetic practices with board-certified dermatologists and plastic surgeons.
              </p>
              <p className="text-sm text-gold">Consultation required • Includes expert concierge matching</p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-semibold mb-2">Executive Grooming Lounges</h3>
              <p className="text-harbor mb-3">
                High-end men&apos;s grooming spaces designed for business professionals—precision haircuts, hot towel shaves, express manicures, shoe shines. Leather chairs, whiskey bars, financial news on screens. Efficiency meets luxury.
              </p>
              <p className="text-sm text-gold">From €60 • Includes expert concierge matching</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Avenida Experience */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">What to Expect on Avenida</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">🏢 Corporate-Level Professionalism</h3>
              <p className="text-harbor">
                Avenida beauty businesses operate like international corporations—consistent standards, quality control, staff training programs, and accountability. You&apos;re a valued client, not just a neighborhood regular.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">⚡ Premium Efficiency</h3>
              <p className="text-harbor">
                Time is money on Avenida. Appointments start precisely on schedule, services move efficiently without feeling rushed, and booking systems are digital and streamlined. Perfect for business travelers.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">🌍 Multicultural Clientele</h3>
              <p className="text-harbor">
                International business travelers, expats, diplomats, and wealthy tourists. Staff speak multiple languages fluently and understand diverse beauty standards and preferences.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">💳 Transparent Luxury Pricing</h3>
              <p className="text-harbor">
                Expensive, yes—but prices are clearly listed, include everything, and match what you&apos;d pay at the same brand in London or Paris. No surprises, no ambiguity, full transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Getting to Avenida da Liberdade</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Metro</h3>
              <ul className="space-y-3 text-harbor">
                <li><strong>Marquês de Pombal:</strong> Yellow & Blue Lines (north end)</li>
                <li><strong>Avenida:</strong> Blue Line (mid-avenue)</li>
                <li><strong>Restauradores:</strong> Blue Line (south end)</li>
                <li><strong>All within walking distance</strong> of avenue addresses</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Other Transport</h3>
              <ul className="space-y-3 text-harbor">
                <li><strong>Walking:</strong> Central location, walkable from Baixa (10 min)</li>
                <li><strong>Uber/Taxi:</strong> Always available, quick pickup</li>
                <li><strong>Hotel Proximity:</strong> Many within steps of salons</li>
                <li><strong>Parking:</strong> Underground garages available (expensive)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gold/10 rounded-lg p-6">
            <p className="text-harbor">
              <strong>💡 Pro Tip:</strong> Book morning appointments (9-11am) before the avenue gets busy. Combine with breakfast at one of the grand hotel cafés—turn your beauty appointment into a luxurious morning ritual.
            </p>
          </div>
        </div>
      </section>

      {/* Complete Your Visit */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Complete Your Avenida Experience</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🏨</span>
              <div>
                <h4 className="font-semibold mb-1">Four Seasons Hotel Ritz</h4>
                <p className="text-harbor text-sm">Afternoon tea, Michelin-starred dining, luxury shopping arcade</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🛍️</span>
              <div>
                <h4 className="font-semibold mb-1">Designer Boutiques</h4>
                <p className="text-harbor text-sm">Louis Vuitton, Prada, Gucci flagship stores lining the avenue</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🌳</span>
              <div>
                <h4 className="font-semibold mb-1">Eduardo VII Park</h4>
                <p className="text-harbor text-sm">Formal gardens at avenue&apos;s north end, panoramic city views from top</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🍽️</span>
              <div>
                <h4 className="font-semibold mb-1">Cervejaria Ribadouro</h4>
                <p className="text-harbor text-sm">Traditional seafood restaurant, Lisbon institution since 1947</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🎭</span>
              <div>
                <h4 className="font-semibold mb-1">Teatro Tivoli BBVA</h4>
                <p className="text-harbor text-sm">Major theater hosting musicals, concerts, and performances</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">☕</span>
              <div>
                <h4 className="font-semibold mb-1">Café Versailles</h4>
                <p className="text-harbor text-sm">Art Deco café serving traditional Portuguese pastries since 1922</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Explore Avenida da Liberdade</h2>
          
          <div className="bg-shell rounded-lg p-4">
            <div className="aspect-video w-full bg-harbor/10 rounded flex items-center justify-center">
              <div className="text-center text-harbor">
                <p className="text-lg mb-2">📍 Interactive Map</p>
                <p className="text-sm">Google Maps integration showing Good Hands partner locations on Avenida</p>
                <p className="text-xs mt-2 text-harbor/60">(Map embed coming in production)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Avenida Beauty FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Is Avenida really that much more expensive?</h3>
              <p className="text-harbor">
                Yes—typically 20-30% premium over other neighborhoods. You&apos;re paying for international brand names, prime real estate, advanced technology, and hotel-level service standards. Worth it for consistency and luxury.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Can I use hotel spas if I&apos;m not a guest?</h3>
              <p className="text-harbor">
                Most hotel spas welcome day guests for treatments, though you may pay slightly more than hotel guests. Some require advance booking or have limited availability for non-guests.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Are Avenida salons better than neighborhood ones?</h3>
              <p className="text-harbor">
                Not necessarily "better"—but different. More consistent, international standards, latest equipment. Neighborhood salons may have more skilled individual stylists but less brand consistency and amenities.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">What should I wear to Avenida salons?</h3>
              <p className="text-harbor">
                Smart casual at minimum. Avenida has a more formal atmosphere than other neighborhoods—think business attire or upscale leisurewear. You&apos;ll feel out of place in beachwear or athletic clothes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Book Your Avenida Experience</h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Let us match you with luxury beauty services on Lisbon&apos;s most prestigious boulevard
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
