import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sintra Beauty Guide — Good Hands',
  description: 'Beauty services in Sintra, Portugal\'s fairy-tale mountain town. Romantic settings, boutique spas, and enchanted beauty experiences.',
  keywords: ['sintra beauty', 'sintra spa', 'sintra wellness', 'romantic beauty portugal'],
}

export default function SintraPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="/brand-images/experience-wellness-retreat.png" 
            alt="Sintra magical beauty - romantic wellness experiences in palace setting" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-ink/60" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Sintra</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Fairy-tale beauty in Portugal&apos;s enchanted mountains
          </p>
        </div>
      </section>

      {/* Neighborhood Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">The Romantic Mountain Escape</h2>
          
          <div className="prose prose-lg max-w-none text-harbor space-y-6">
            <p className="text-xl leading-relaxed">
              Sintra is where reality feels suspended. This UNESCO World Heritage Site sits in the Serra de Sintra mountains, 30km northwest of Lisbon, shrouded in microclimates that create frequent mist, unexpected rain, and an otherworldly atmosphere. Lord Byron called it a "glorious Eden," and modern visitors understand why—colorful palaces emerge from forest greenery, quintas (estates) hide behind stone walls, and the air smells of pine and eucalyptus.
            </p>
            
            <p>
              The town center (Sintra Vila) feels frozen in time—narrow cobblestone streets wind past pastry shops selling travesseiros and queijadas, historic manor houses with intricate azulejos, and the National Palace with its distinctive twin chimneys. Surrounding hills hide romantic treasures: Pena Palace&apos;s colorful fantasy architecture, Quinta da Regaleira&apos;s mystical gardens, Moorish Castle ruins, and countless secret gardens.
            </p>

            <p>
              For beauty services, Sintra offers something no other location can: romance and escape. Expect boutique spas in converted manor houses, wellness retreats in forest settings, and beauty experiences designed around Sintra&apos;s mystical atmosphere. This isn&apos;t where you go for a quick haircut—it&apos;s where you book a couples spa day, a retreat weekend, or a pre-wedding pampering experience. Sintra beauty services are about the journey and setting as much as the treatment itself.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Sintra */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Why Choose Sintra for Beauty Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">🏰</div>
              <h3 className="text-xl font-serif mb-3">Romantic Atmosphere</h3>
              <p className="text-harbor">
                Treatments in historic quintas, forest-view spas, and settings straight from fairy tales. The location elevates every experience.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-xl font-serif mb-3">Nature Integration</h3>
              <p className="text-harbor">
                Forest air, mountain water, herbal gardens—Sintra&apos;s natural environment is woven into wellness treatments and products.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">💑</div>
              <h3 className="text-xl font-serif mb-3">Couples & Retreats</h3>
              <p className="text-harbor">
                Perfect for romantic getaways, honeymoons, anniversary celebrations, or pre-wedding pampering. Escape-focused experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Beauty Services in Sintra</h2>
          
          <div className="space-y-6">
            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Boutique Spa Retreats</h3>
              <p className="text-harbor mb-3">
                Sintra&apos;s historic quintas and boutique hotels house intimate spas—Tivoli Palácio de Seteais, Penha Longa Resort, and independent wellness retreats. Expect full-day experiences: massage, facials, thermal circuits, forest walks, healthy meals. Treatments often incorporate local botanicals and mountain spring water.
              </p>
              <p className="text-sm text-gold">From €150 (half-day) • Includes expert concierge matching</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Couples Wellness Experiences</h3>
              <p className="text-harbor mb-3">
                Side-by-side massage in rooms overlooking forest or palace gardens. Couples treatments designed for romantic occasions—honeymoons, anniversaries, proposals. Many spas offer champagne, private terraces, and extend treatment times for leisurely shared experiences.
              </p>
              <p className="text-sm text-gold">From €300 (couples package) • Includes expert concierge matching</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Pre-Wedding Pampering</h3>
              <p className="text-harbor mb-3">
                Destination wedding in Portugal? Sintra is where bridal parties retreat for pre-wedding spa days. Full-day packages combining treatments, lunch, champagne, and the magical Sintra setting. Popular for intimate wedding groups staying in the area.
              </p>
              <p className="text-sm text-gold">From €200/person (group packages) • Includes expert concierge matching</p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-semibold mb-2">Wellness Retreat Services</h3>
              <p className="text-harbor mb-3">
                Multi-day wellness programs at retreat centers: yoga, meditation, spa treatments, forest bathing, healthy cuisine. Sintra&apos;s tranquil setting and cooler climate make it ideal for focused wellness immersion away from city distractions.
              </p>
              <p className="text-sm text-gold">Custom packages • Includes expert concierge matching</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Sintra Experience */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">What to Expect in Sintra</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">🌫️ Microclimate Considerations</h3>
              <p className="text-harbor">
                Sintra is 5-10°C cooler than Lisbon, with frequent mist and unpredictable weather. Bring layers even in summer. Indoor spa facilities are climate-controlled, but outdoor gardens and terraces can be chilly. Check weather before outdoor treatments.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">⏰ Slow, Leisurely Pace</h3>
              <p className="text-harbor">
                Nothing in Sintra moves quickly. Treatments are longer, transitions unhurried, and the philosophy is about disconnecting from modern life&apos;s rush. Don&apos;t book back-to-back activities—Sintra demands you slow down.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">🍃 Natural & Organic Focus</h3>
              <p className="text-harbor">
                Sintra wellness centers emphasize natural, often locally-sourced products. Expect herbal treatments, botanical ingredients from Sintra&apos;s gardens, and holistic approaches prioritizing natural healing over aggressive interventions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">💰 Premium Pricing, Worth It</h3>
              <p className="text-harbor">
                Sintra beauty services cost 30-40% more than Lisbon due to location, settings, and experience design. But you&apos;re paying for an unforgettable setting and escape, not just a treatment. Consider it part of a romantic weekend investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Getting to Sintra</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">From Lisbon</h3>
              <ul className="space-y-3 text-harbor">
                <li><strong>Train:</strong> From Rossio station (40 min, €2.25, frequent departures)</li>
                <li><strong>Car:</strong> A5 + IC19 (30-40 min, scenic mountain roads)</li>
                <li><strong>Private transfer:</strong> Recommended for spa days (door-to-door, €60-80)</li>
                <li><strong>Organized day trip:</strong> Many include transport + palace visits</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Within Sintra</h3>
              <ul className="space-y-3 text-harbor">
                <li><strong>Walking:</strong> Historic center is compact but hilly</li>
                <li><strong>Bus 434:</strong> Connects train station to main palaces</li>
                <li><strong>Tuk-tuks:</strong> Popular for navigating steep roads</li>
                <li><strong>Uber/Taxi:</strong> Essential for reaching spa locations outside center</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gold/10 rounded-lg p-6">
            <p className="text-harbor">
              <strong>💡 Pro Tip:</strong> Book spa appointments for mid-afternoon (2-5pm), arrive early for lunch, then stay for dinner after your treatment. Sintra&apos;s magic intensifies as day-trippers leave and mist settles over the mountains. Make it an overnight experience if possible.
            </p>
          </div>
        </div>
      </section>

      {/* Complete Your Visit */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Complete Your Sintra Experience</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🎨</span>
              <div>
                <h4 className="font-semibold mb-1">Pena Palace</h4>
                <p className="text-harbor text-sm">Colorful Romantic palace, UNESCO site, most Instagram-famous Portuguese landmark</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🌟</span>
              <div>
                <h4 className="font-semibold mb-1">Quinta da Regaleira</h4>
                <p className="text-harbor text-sm">Mystical estate with initiation well, underground tunnels, symbolic gardens</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🏰</span>
              <div>
                <h4 className="font-semibold mb-1">Moorish Castle</h4>
                <p className="text-harbor text-sm">8th-century fortress ruins with panoramic mountain views, atmospheric in mist</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🏛️</span>
              <div>
                <h4 className="font-semibold mb-1">National Palace of Sintra</h4>
                <p className="text-harbor text-sm">Royal palace in town center, distinctive twin chimneys, medieval and Manueline architecture</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🌳</span>
              <div>
                <h4 className="font-semibold mb-1">Monserrate Palace & Gardens</h4>
                <p className="text-harbor text-sm">Exotic botanical gardens surrounding Romantic palace, less crowded than Pena</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🥐</span>
              <div>
                <h4 className="font-semibold mb-1">Piriquita Pastry Shop</h4>
                <p className="text-harbor text-sm">Since 1862, original travesseiros (almond pillows) and queijadas (cheese tarts)</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🍽️</span>
              <div>
                <h4 className="font-semibold mb-1">Tascantiga</h4>
                <p className="text-harbor text-sm">Cozy restaurant serving traditional Portuguese petiscos (tapas) in historic setting</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🌊</span>
              <div>
                <h4 className="font-semibold mb-1">Praia das Maçãs</h4>
                <p className="text-harbor text-sm">Beach at Sintra&apos;s edge, historic tram connection, seafood restaurants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Explore Sintra</h2>
          
          <div className="bg-shell rounded-lg p-4">
            <div className="aspect-video w-full bg-harbor/10 rounded flex items-center justify-center">
              <div className="text-center text-harbor">
                <p className="text-lg mb-2">📍 Interactive Map</p>
                <p className="text-sm">Google Maps integration showing Good Hands partner locations in Sintra</p>
                <p className="text-xs mt-2 text-harbor/60">(Map embed coming in production)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Sintra Beauty FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Is Sintra worth visiting just for a spa treatment?</h3>
              <p className="text-harbor">
                For a single 60-minute treatment, probably not—too much travel. But for a full spa day, couples experience, or wellness retreat, absolutely. Sintra rewards those who give it time. Consider staying overnight to fully appreciate the experience.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">What should I wear to Sintra for a spa day?</h3>
              <p className="text-harbor">
                Layers! Sintra can be 10°C cooler and damp even when Lisbon is sunny. Bring a jacket or sweater for walking between palace visits and your spa. Inside treatment rooms, standard spa attire (robes provided).
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Can we combine palace tours with beauty services in one day?</h3>
              <p className="text-harbor">
                Challenging but possible. Better approach: explore palaces morning/early afternoon, then transition to spa (2-5pm), finish with dinner. Trying to fit too much creates stress—Sintra doesn&apos;t reward rushing.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Are Sintra spas better than Lisbon&apos;s?</h3>
              <p className="text-harbor">
                Different, not necessarily better. Sintra offers romance, nature, escape, and unique settings. Lisbon offers convenience, variety, and urban sophistication. Choose based on what experience you want, not technical superiority.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Should we book spa services before arriving in Sintra?</h3>
              <p className="text-harbor">
                Absolutely yes—especially for couples treatments, weekends, or specific time slots. Sintra&apos;s boutique spas have limited capacity and book weeks ahead in summer. Good Hands ensures you get your preferred timing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Book Your Sintra Experience</h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Let us create a magical beauty escape in Portugal&apos;s most romantic destination
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
