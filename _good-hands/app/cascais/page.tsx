import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cascais Beauty Guide — Good Hands',
  description: 'Beauty services in Cascais, Portugal\'s coastal resort town. Beach-ready treatments, resort spas, and seaside luxury.',
  keywords: ['cascais beauty', 'cascais salon', 'estoril spa', 'beach beauty portugal'],
}

export default function CascaisPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="/brand-images/category-skincare.png" 
            alt="Cascais coastal beauty - luxury seaside spa and wellness services" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4 text-center w-full">Cascais</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Coastal luxury beauty in Portugal&apos;s premier resort town
          </p>
        </div>
      </section>

      {/* Neighborhood Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">The Portuguese Riviera</h2>
          
          <div className="prose prose-lg max-w-none text-harbor space-y-6">
            <p className="text-xl leading-relaxed">
              Cascais transformed from a fishing village to Portugal&apos;s premier coastal resort in the late 19th century when King Luís I chose it as his summer residence. Located 30km west of Lisbon along the Estoril Coast, Cascais today is where Portuguese wealth, international expats, and discerning tourists converge for seaside living at its finest.
            </p>
            
            <p>
              The town exudes relaxed sophistication. Marina full of luxury yachts. Pristine beaches within walking distance of the historic center. Michelin-starred restaurants alongside traditional seafood tavernas. Designer boutiques in pedestrianized streets. Golf courses attracting international players. It&apos;s European coastal elegance without Mediterranean crowds—distinctly Portuguese in character.
            </p>

            <p>
              For beauty services, Cascais offers resort-town excellence. Expect resort spas with ocean views, salons catering to international residents and tourists, and beach-ready treatments (spray tans, bikini waxes, gel manicures built to last). Professionals understand coastal living—humidity-proof hairstyles, sun-protective skincare, and services designed for people who spend time by the sea. Whether you&apos;re visiting for a weekend or living the expat dream, Cascais beauty services blend luxury with practicality.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Cascais */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Why Choose Cascais for Beauty Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-serif mb-3">Resort Spa Experience</h3>
              <p className="text-harbor">
                Full resort spas with extensive facilities, ocean-view treatment rooms, and therapists trained in international resort standards.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-xl font-serif mb-3">Beach-Ready Expertise</h3>
              <p className="text-harbor">
                Professionals who understand coastal beauty needs—sun protection, humidity-proof styling, beach-to-dinner transformations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-serif mb-3">International Vibe</h3>
              <p className="text-harbor">
                Cosmopolitan clientele of expats, tourists, and wealthy Portuguese. Services cater to diverse beauty standards and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Beauty Services in Cascais</h2>
          
          <div className="space-y-6">
            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Resort & Hotel Spas</h3>
              <p className="text-harbor mb-3">
                Cascais hotels (Grande Real Villa Italia, Farol Design Hotel, Pestana Cidadela) house world-class spas offering thalassotherapy (seawater treatments), outdoor massage pavilions, and sunset spa rituals. Many offer day passes or membership programs for non-guests.
              </p>
              <p className="text-sm text-gold">From €120 • Includes expert concierge matching</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Beach-Ready Hair Salons</h3>
              <p className="text-harbor mb-3">
                Salons specializing in beach-appropriate styles—beachy waves, salt spray textures, protective treatments for sun and sea exposure. Many clients are expats living here year-round, so quality is consistently high and international standards apply.
              </p>
              <p className="text-sm text-gold">From €75 • Includes expert concierge matching</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Body Treatments & Spray Tanning</h3>
              <p className="text-harbor mb-3">
                Pre-beach body prep services: spray tans, bikini waxing, body scrubs, cellulite treatments, and summer skin prep. Cascais excels at beach-body treatments with professionals who understand maintaining results in sun, sand, and saltwater.
              </p>
              <p className="text-sm text-gold">From €50 • Includes expert concierge matching</p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-semibold mb-2">Gel Manicures & Pedicures Built to Last</h3>
              <p className="text-harbor mb-3">
                Coastal lifestyle demands long-lasting nail services. Cascais nail technicians excel at gel systems that survive pool, beach, and active lifestyles. Expect 3+ weeks of perfect wear, even with daily swimming.
              </p>
              <p className="text-sm text-gold">From €45 • Includes expert concierge matching</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Cascais Experience */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">What to Expect in Cascais</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">🏖️ Relaxed Resort Atmosphere</h3>
              <p className="text-harbor">
                Even high-end services have a relaxed, vacation vibe. Appointments feel less rushed than Lisbon, dress codes are casual (beach chic totally acceptable), and the overall energy is "we&apos;re all on holiday here."
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">☀️ Sun-Protective Focus</h3>
              <p className="text-harbor">
                Every esthetician emphasizes SPF, stylists recommend UV-protective hair products, and professionals understand that clients spend significant time outdoors. Sun damage prevention is woven into every consultation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">🗣️ Fluent English</h3>
              <p className="text-harbor">
                High concentration of British, French, and American expats means excellent English proficiency across all beauty businesses. Many professionals have worked internationally or trained abroad.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">⏰ Seasonal Considerations</h3>
              <p className="text-harbor">
                Summer (June-September): Book well ahead—Cascais fills with tourists and second-home owners. Winter (October-May): Quieter, easier bookings, better for locals and long-term visitors. Consider seasonality when planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Getting to Cascais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">From Lisbon</h3>
              <ul className="space-y-3 text-harbor">
                <li><strong>Train:</strong> From Cais do Sodré (40 min, €2.25, scenic coastal route)</li>
                <li><strong>Car:</strong> A5 motorway (30 min, tolls apply)</li>
                <li><strong>Uber/Taxi:</strong> 30-40 min depending on traffic (€30-45)</li>
                <li><strong>Bus:</strong> Several express lines from Sete Rios</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Within Cascais</h3>
              <ul className="space-y-3 text-harbor">
                <li><strong>Walking:</strong> Historic center is compact and pedestrian-friendly</li>
                <li><strong>Cycling:</strong> Excellent bike paths along coast</li>
                <li><strong>Local buses:</strong> Connect beaches and neighborhoods</li>
                <li><strong>Parking:</strong> Available but expensive in summer</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gold/10 rounded-lg p-6">
            <p className="text-harbor">
              <strong>💡 Pro Tip:</strong> Take the scenic coastal train from Lisbon—it&apos;s the most enjoyable journey. Book a late afternoon appointment, then stay for dinner by the marina. Make a full evening of it rather than rushing back to Lisbon.
            </p>
          </div>
        </div>
      </section>

      {/* Complete Your Visit */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Complete Your Cascais Experience</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🏖️</span>
              <div>
                <h4 className="font-semibold mb-1">Praia da Conceição</h4>
                <p className="text-harbor text-sm">Main beach, steps from historic center, beach clubs and restaurants</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🌊</span>
              <div>
                <h4 className="font-semibold mb-1">Boca do Inferno</h4>
                <p className="text-harbor text-sm">Dramatic coastal cliffs where waves crash into cave formations</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">⛵</span>
              <div>
                <h4 className="font-semibold mb-1">Cascais Marina</h4>
                <p className="text-harbor text-sm">Luxury yacht harbor with waterfront restaurants and bars</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🏛️</span>
              <div>
                <h4 className="font-semibold mb-1">Casa das Histórias Paula Rego</h4>
                <p className="text-harbor text-sm">Contemporary art museum dedicated to Portuguese artist Paula Rego</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🍽️</span>
              <div>
                <h4 className="font-semibold mb-1">Fortaleza do Guincho</h4>
                <p className="text-harbor text-sm">Michelin-starred restaurant in 17th-century fortress overlooking Atlantic</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">⛳</span>
              <div>
                <h4 className="font-semibold mb-1">Oitavos Dunes Golf Course</h4>
                <p className="text-harbor text-sm">Championship links course, regularly ranked Europe&apos;s best</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🌅</span>
              <div>
                <h4 className="font-semibold mb-1">Cabo da Roca</h4>
                <p className="text-harbor text-sm">Westernmost point of continental Europe, 15 min drive, spectacular views</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Explore Cascais</h2>
          
          <div className="bg-shell rounded-lg p-4">
            <div className="aspect-video w-full bg-harbor/10 rounded flex items-center justify-center">
              <div className="text-center text-harbor">
                <p className="text-lg mb-2">📍 Interactive Map</p>
                <p className="text-sm">Google Maps integration showing Good Hands partner locations in Cascais</p>
                <p className="text-xs mt-2 text-harbor/60">(Map embed coming in production)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Cascais Beauty FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Is Cascais worth the trip from Lisbon just for beauty services?</h3>
              <p className="text-harbor">
                If you&apos;re combining it with a day at the beach, dining, or exploring the coast—absolutely. For just a haircut, probably not unless you&apos;re already staying in Cascais. Best for those making a day of it or visiting for a weekend.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">When is the best time to visit Cascais for beauty services?</h3>
              <p className="text-harbor">
                Late spring (April-May) and early autumn (September-October) offer best combination of good weather, fewer tourists, easier bookings, and pleasant beach temperatures. Mid-summer (July-August) is crowded and requires advance booking.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Are Cascais beauty services more expensive than Lisbon?</h3>
              <p className="text-harbor">
                Comparable to upscale Lisbon neighborhoods (Chiado, Avenida). Resort spas command premium prices, but neighborhood salons are similar to Lisbon pricing. You&apos;re paying for location and resort atmosphere.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Do I need to speak Portuguese in Cascais?</h3>
              <p className="text-harbor">
                English works everywhere in Cascais—high expat population means exceptional English proficiency. Many professionals are multilingual (English, French, Spanish common).
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Can I get beach-ready treatments on short notice?</h3>
              <p className="text-harbor">
                Most spray tans, waxing, and quick services accommodate same-day or next-day bookings outside peak summer. However, booking through Good Hands ensures you get exactly when you want, avoiding last-minute disappointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Book Your Cascais Experience</h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Let us match you with beauty professionals in Portugal&apos;s premier coastal resort
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
