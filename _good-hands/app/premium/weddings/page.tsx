import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Sparkles, Palette, CalendarDays, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wedding Beauty Services | Good Hands Lisbon',
  description: 'Comprehensive wedding beauty services in Lisbon. From bridal makeup and hair to full bridal party coordination. Make your special day perfect with our curated beauty professionals.',
  keywords: 'wedding beauty Lisbon, bridal makeup, bridal hair, wedding beauty services, Lisbon weddings',
  alternates: { canonical: 'https://goodhandsstudio.com/premium/weddings' },
}

export default function WeddingsPage() {
  return (
    <div className="bg-porcelain">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gold via-sand to-porcelain py-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-ink text-center w-full">
              Your Perfect Wedding Day Beauty
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-harbor max-w-2xl mx-auto">
              From intimate ceremonies to grand celebrations, we coordinate every beauty detail for you and your entire bridal party
            </p>
            <Link href="/?service=wedding#booking" className="btn-gold">
              Plan Your Wedding Beauty
            </Link>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-8 text-center">
              Wedding Beauty, Stress-Free
            </h2>
            <p className="text-xl text-harbor text-center mb-12 max-w-2xl mx-auto">
              Planning a wedding in Lisbon? We handle all beauty coordination so you can focus on your special day.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-porcelain rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-3 flex items-center gap-2"><Palette className="w-5 h-5 text-gold shrink-0" /> Complete Coordination</h3>
                <p className="text-harbor">
                  One point of contact for bride, bridesmaids, mothers, and flower girls. We manage everything.
                </p>
              </div>
              <div className="p-6 bg-porcelain rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-3 flex items-center gap-2"><Sparkles className="w-5 h-5 text-gold shrink-0" /> Trial Sessions</h3>
                <p className="text-harbor">
                  Complete hair and makeup trials so you're confident and beautiful on your wedding day.
                </p>
              </div>
              <div className="p-6 bg-porcelain rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-3 flex items-center gap-2"><CalendarDays className="w-5 h-5 text-gold shrink-0" /> Timeline Management</h3>
                <p className="text-harbor">
                  We create a detailed timeline ensuring everyone is ready on schedule—no stress, no delays.
                </p>
              </div>
              <div className="p-6 bg-porcelain rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-3 flex items-center gap-2"><MapPin className="w-5 h-5 text-gold shrink-0" /> On-Location Services</h3>
                <p className="text-harbor">
                  Our professionals come to your hotel, villa, or venue. Getting ready happens where you want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="section-padding bg-porcelain">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-12 text-center">
              Wedding Beauty Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-ink mb-4">Bridal Services</h3>
                <ul className="space-y-3 text-harbor">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Bridal makeup (trial + day-of)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Bridal hair styling (trial + day-of)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Pre-wedding skincare consultation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Manicure & pedicure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Facial treatment (pre-wedding)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Touch-up kit provision</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-ink mb-4">Bridal Party</h3>
                <ul className="space-y-3 text-harbor">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Bridesmaids makeup & hair</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Mother of bride/groom services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Flower girls hair & makeup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Group manicures & pedicures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Matching style coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Group spa experiences</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-ink mb-4">Additional Services</h3>
                <ul className="space-y-3 text-harbor">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Pre-wedding spa day</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Groom grooming services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Next-day beauty recovery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Multi-day event coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Engagement party services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Rehearsal dinner beauty</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-ink mb-12 text-center">
              Wedding Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-2 border-harbor/20 rounded-lg p-8 hover:border-gold transition-colors">
                <h3 className="text-2xl font-serif text-ink mb-2">Intimate</h3>
                <p className="text-harbor mb-4">Perfect for small ceremonies</p>
                <p className="text-4xl font-bold text-ink mb-6">€850</p>
                <ul className="space-y-2 text-harbor mb-8">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Bride: Hair + Makeup (trial + day-of)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Up to 2 additional people</span>
                </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>On-location service</span>
                </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                  <span>Touch-up kit</span>
                </li>
              </ul>
              <Link href="/?service=wedding#booking" className="btn-secondary w-full text-center">
                  Book Intimate Package
              </Link>
            </div>

              <div className="border-2 border-gold rounded-lg p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-serif text-ink mb-2">Classic</h3>
                <p className="text-harbor mb-4">Full bridal party beauty</p>
                <p className="text-4xl font-bold text-ink mb-6">€1,850</p>
                <ul className="space-y-2 text-harbor mb-8">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Bride: Premium package</span>
                </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Up to 5 bridesmaids</span>
                </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Mother of bride & groom</span>
                </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Timeline coordination</span>
                </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Pre-wedding spa day option</span>
                </li>
              </ul>
              <Link href="/?service=wedding#booking" className="btn-primary w-full text-center">
                  Book Classic Package
              </Link>
            </div>

              <div className="border-2 border-harbor/20 rounded-lg p-8 hover:border-gold transition-colors">
                <h3 className="text-2xl font-serif text-ink mb-2">Luxury</h3>
                <p className="text-harbor mb-4">Complete multi-day coverage</p>
                <p className="text-4xl font-bold text-ink mb-6">€3,500</p>
                <ul className="space-y-2 text-harbor mb-8">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Everything in Classic</span>
                </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Unlimited bridal party size</span>
                </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Multi-day event coverage</span>
                </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Dedicated coordinator</span>
                </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Rehearsal dinner + next-day services</span>
                </li>
              </ul>
              <Link href="/?service=wedding#booking" className="btn-secondary w-full text-center">
                  Book Luxury Package
              </Link>
              </div>
            </div>
            <p className="text-center text-harbor mt-8">
              All packages include our concierge coordination service. Custom packages available.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Example */}
      <section className="section-padding bg-porcelain">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif text-ink mb-12 text-center">
              Your Wedding Day Timeline
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-xl font-bold text-gold">8:00 AM</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-ink mb-1">Team Arrival & Setup</h3>
                  <p className="text-harbor">Our professionals arrive at your location with all equipment</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-xl font-bold text-gold">8:30 AM</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-ink mb-1">Bridal Party Begins</h3>
                  <p className="text-harbor">Bridesmaids, mothers, and flower girls start getting ready</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-xl font-bold text-gold">10:30 AM</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-ink mb-1">Bride Hair Styling</h3>
                  <p className="text-harbor">Your hair artist creates your perfect bridal hairstyle</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-xl font-bold text-gold">11:30 AM</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-ink mb-1">Bride Makeup</h3>
                  <p className="text-harbor">Flawless makeup application for your special moment</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-xl font-bold text-gold">12:30 PM</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-ink mb-1">Final Touches & Photos</h3>
                  <p className="text-harbor">Touch-ups complete, you're ready for getting-ready photos</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-xl font-bold text-gold">1:00 PM</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-ink mb-1">Team Departs</h3>
                  <p className="text-harbor">We leave you with touch-up kits and emergency contact</p>
                </div>
              </div>
            </div>
            <p className="text-center text-harbor mt-8 italic">
              *Timeline customized to your wedding schedule
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-ink mb-12 text-center">
              What Brides Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-porcelain p-8 rounded-lg">
                <div className="flex gap-1 text-gold mb-4">
                  <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                </div>
                <p className="text-harbor text-lg mb-4 italic">
                  "Good Hands made my wedding day stress-free. The team was punctual, professional, and my makeup lasted through tears, dancing, and everything in between. I felt like the most beautiful version of myself."
                </p>
                <p className="text-ink font-semibold">— Sarah M., Bride</p>
                <p className="text-harbor text-sm">Cascais Wedding, June 2024</p>
              </div>
              <div className="bg-porcelain p-8 rounded-lg">
                <div className="flex gap-1 text-gold mb-4">
                  <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                </div>
                <p className="text-harbor text-lg mb-4 italic">
                  "Having one coordinator for all 8 bridesmaids was a lifesaver. Everyone looked stunning and we finished on schedule. The trial sessions gave me complete confidence."
                </p>
                <p className="text-ink font-semibold">— Maria L., Bride</p>
                <p className="text-harbor text-sm">Belém Wedding, September 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to Plan Your Wedding Beauty?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create a custom package perfect for your special day
          </p>
          <Link href="/?service=wedding#booking" className="btn-gold">
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
