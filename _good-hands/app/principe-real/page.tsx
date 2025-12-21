import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Príncipe Real Beauty Guide — Good Hands',
  description: 'Discover beauty services in Príncipe Real, Lisbon\'s most bohemian and artistic neighborhood. Trendsetting salons and holistic wellness.',
  keywords: ['principe real beauty', 'principe real salon', 'holistic wellness lisbon', 'trendy beauty lisbon'],
}

export default function PrincipeRealPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="/brand-images/category-hair-styling.png" 
            alt="Príncipe Real Lisbon - trendy upscale beauty in garden district" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4 text-center w-full">Príncipe Real</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Where artists, free spirits, and the best colorists in Lisbon all hang out
          </p>
        </div>
      </section>

      {/* Neighborhood Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Lisbon&apos;s Creative Heart</h2>
          
          <div className="prose prose-lg max-w-none text-harbor space-y-6">
            <p className="text-xl leading-relaxed">
              Príncipe Real is where Lisbon keeps its interesting people. The neighborhood wraps around a garden with a massive old cedar tree, surrounded by 19th-century mansions that now house galleries, wine bars, and some genuinely excellent hair salons.
            </p>
            
            <p>
              This is the city's LGBTQ+ heart and creative center. Artists, designers, people who dress well. The streets are lined with antique shops, concept stores, and businesses run by people who actually care what they're doing. Not corporate. Not generic.
            </p>

            <p>
              For beauty, Príncipe Real is where you find the colorists everyone wants. The stylists who trained in Paris or London and came back. Gender-neutral salons. Holistic wellness people who aren't selling snake oil. If you want something boring and safe, go somewhere else. This neighborhood is for people who know what they want.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Príncipe Real */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Why Choose Príncipe Real for Beauty Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-serif mb-3">Actually Good Colorists</h3>
              <p className="text-harbor">
                The stylists here trained in Paris, London, Seoul. They know what's happening before it shows up on Instagram. If you want cutting-edge color or a bold cut, this is your neighborhood.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-serif mb-3">Wellness That Works</h3>
              <p className="text-harbor">
                Reiki, acupuncture, aromatherapy, natural facials. The practitioners here know their stuff and don't make ridiculous claims. Holistic beauty without the nonsense.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-4">🏳️‍🌈</div>
              <h3 className="text-xl font-serif mb-3">Everyone's Welcome</h3>
              <p className="text-harbor">
                Gender-neutral salons. LGBTQ+-owned businesses. A neighborhood that figured out inclusivity years ago. Show up as yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Beauty Services in Príncipe Real</h2>
          
          <div className="space-y-6">
            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Hair Color That Actually Looks Good</h3>
              <p className="text-harbor mb-3">
                The colorists here are Lisbon's best. Fashion colors, perfect balayage, precision cuts. They trained internationally and know what they're doing. Book a consultation and they'll tell you honestly whether your Pinterest idea will actually work with your hair.
              </p>
              <p className="text-sm text-gold">From €90 • Includes our concierge service</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Holistic Wellness Centers</h3>
              <p className="text-harbor mb-3">
                This neighborhood pioneered Lisbon&apos;s alternative wellness movement. Find certified Reiki practitioners, acupuncturists trained in Traditional Chinese Medicine, aromatherapy specialists, and sound healers. Many centers offer yoga or meditation alongside beauty treatments.
              </p>
              <p className="text-sm text-gold">From €70 • Includes expert concierge matching</p>
            </div>

            <div className="border-b border-harbor/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">Natural & Clean Beauty</h3>
              <p className="text-harbor mb-3">
                Organic facials, vegan nail polish, cruelty-free products, and zero-waste practices. Príncipe Real&apos;s beauty businesses lead Lisbon in sustainability and clean beauty formulations. Perfect for eco-conscious clients.
              </p>
              <p className="text-sm text-gold">From €85 • Includes expert concierge matching</p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-semibold mb-2">Editorial Makeup & Styling</h3>
              <p className="text-harbor mb-3">
                Makeup artists who work with fashion shoots, drag performers, and creative events. If you want editorial makeup that makes a statement—not just "pretty"—Príncipe Real is your neighborhood.
              </p>
              <p className="text-sm text-gold">From €80 • Includes expert concierge matching</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Príncipe Real Vibe */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">What to Expect in Príncipe Real Salons</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">🎭 Creative Consultations</h3>
              <p className="text-harbor">
                Príncipe Real professionals view beauty as art. Consultations involve inspiration boards, mood discussions, and creative exploration—not just "a little shorter." They want to understand your aesthetic vision.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">🌈 Gender-Neutral Spaces</h3>
              <p className="text-harbor">
                Many salons explicitly market themselves as gender-neutral, with pricing based on time/complexity rather than gender. Non-binary friendly, with inclusive language and truly welcoming atmospheres.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">💬 English-Friendly</h3>
              <p className="text-harbor">
                Príncipe Real&apos;s international clientele means English is standard. Many stylists are multilingual, having worked abroad or trained internationally.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">📱 Instagram-First</h3>
              <p className="text-harbor">
                These professionals understand social media aesthetics. They&apos;ll photograph your transformation (with permission) and ensure it looks stunning in photos—not just in person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Getting to Príncipe Real</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Public Transport</h3>
              <ul className="space-y-3 text-harbor">
                <li><strong>Metro:</strong> Rato (Yellow Line), 5-min walk</li>
                <li><strong>Tram 24:</strong> Connects to Chiado & waterfront</li>
                <li><strong>Elevador da Glória:</strong> Funicular from Restauradores</li>
                <li><strong>Buses:</strong> 758, 773, 790</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Walking & Parking</h3>
              <ul className="space-y-3 text-harbor">
                <li>From Chiado: 12-minute uphill walk</li>
                <li>From Avenida da Liberdade: 10 minutes</li>
                <li>Parking: Praça do Príncipe Real (limited)</li>
                <li>Best option: Uber/taxi or walk from Chiado</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gold/10 rounded-lg p-6">
            <p className="text-harbor">
              <strong>💡 Pro Tip:</strong> Book afternoon appointments (2pm-5pm) to enjoy Príncipe Real&apos;s vibrant energy. Post-appointment, explore the neighborhood&apos;s rooftop bars (PARK, Topo Chiado nearby) or browse independent boutiques on Rua Dom Pedro V.
            </p>
          </div>
        </div>
      </section>

      {/* Complete Your Visit */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Complete Your Príncipe Real Experience</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🌳</span>
              <div>
                <h4 className="font-semibold mb-1">Jardim do Príncipe Real</h4>
                <p className="text-harbor text-sm">Beautiful garden with 100-year-old cedar tree, perfect for pre-appointment relaxation</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">☕</span>
              <div>
                <h4 className="font-semibold mb-1">Café Príncipe Real</h4>
                <p className="text-harbor text-sm">Traditional kiosk café in the garden, local favorite for bica and pastéis</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🛍️</span>
              <div>
                <h4 className="font-semibold mb-1">Embaixada</h4>
                <p className="text-harbor text-sm">Concept store in a 19th-century palace, Portuguese designers and artisans</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🍸</span>
              <div>
                <h4 className="font-semibold mb-1">PARK Rooftop Bar</h4>
                <p className="text-harbor text-sm">Hidden rooftop with 360° city views, perfect sunset spot</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🏛️</span>
              <div>
                <h4 className="font-semibold mb-1">Museu Nacional de História Natural</h4>
                <p className="text-harbor text-sm">Natural history museum in beautiful Escola Politécnica building</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🍽️</span>
              <div>
                <h4 className="font-semibold mb-1">Pavilhão Chinês</h4>
                <p className="text-harbor text-sm">Eclectic cocktail bar filled with curiosities, Lisbon institution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Explore Príncipe Real</h2>
          
          <div className="bg-shell rounded-lg p-4">
            <div className="aspect-video w-full bg-harbor/10 rounded flex items-center justify-center">
              <div className="text-center text-harbor">
                <p className="text-lg mb-2">📍 Interactive Map</p>
                <p className="text-sm">Google Maps integration showing Good Hands partner locations in Príncipe Real</p>
                <p className="text-xs mt-2 text-harbor/60">(Map embed coming in production)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Príncipe Real Beauty FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Is Príncipe Real more expensive than other neighborhoods?</h3>
              <p className="text-harbor">
                Príncipe Real prices are comparable to Chiado—mid-to-high range (€90-150 for hair, €70-120 for wellness). You&apos;re paying for specialized expertise and trend-forward techniques, not just location.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">I want bold hair color but I&apos;m nervous. Can they help?</h3>
              <p className="text-harbor">
                Absolutely! Príncipe Real colorists excel at transitioning clients into bold looks gradually. They can show you color swatches, digital mockups, and start with subtle placement before full commitment.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Are the holistic treatments actually effective?</h3>
              <p className="text-harbor">
                Our Príncipe Real wellness partners are certified practitioners—licensed acupuncturists, Reiki masters with years of training, aromatherapists with professional credentials. They complement (not replace) medical care.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Is it truly LGBTQ+-friendly or just marketing?</h3>
              <p className="text-harbor">
                Genuinely inclusive. Many salons are LGBTQ+-owned, staff use preferred pronouns, and the neighborhood has a decades-long reputation as Lisbon&apos;s queer hub. It&apos;s authentically welcoming, not performative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Book Your Príncipe Real Experience</h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Let us match you with Príncipe Real&apos;s most innovative beauty professionals
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
