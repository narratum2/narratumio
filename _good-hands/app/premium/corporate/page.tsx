import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Corporate Beauty Services | Good Hands Lisbon',
  description: 'Professional beauty services for corporate events, team building, and employee wellness. On-site beauty treatments, executive grooming, and corporate packages in Lisbon.',
  keywords: 'corporate beauty services, company wellness, employee benefits, corporate events, team building beauty, executive grooming Lisbon',
}

export default function CorporatePage() {
  return (
    <div className="bg-porcelain">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/brand-images/service-makeup-application.png"
            alt="Professional corporate beauty services - Executive grooming and team wellness in office setting - Good Hands corporate services in Lisbon"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/70 via-harbor/60 to-ink/70" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-center w-full">
              Corporate Beauty & Wellness Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-2xl mx-auto">
              Elevate your corporate culture with professional beauty services for team events, employee wellness programs, and executive grooming
            </p>
            <Link href="/#booking" className="btn-primary bg-gold hover:bg-gold/90">
              Request Corporate Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Why Companies Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-8 text-center">
              Why Leading Companies Choose Good Hands
            </h2>
            <p className="text-xl text-harbor text-center mb-12 max-w-2xl mx-auto">
              From tech startups to Fortune 500 companies, we provide beauty and grooming services that enhance company culture and employee satisfaction.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-porcelain rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-3">💼 Professional On-Site Service</h3>
                <p className="text-harbor">
                  Our professionals come to your office, co-working space, or event venue. No time wasted traveling—your team stays productive.
                </p>
              </div>
              <div className="p-6 bg-porcelain rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-3">🎯 Boosts Employee Morale</h3>
                <p className="text-harbor">
                  Beauty services as employee perks show you care about well-being. Happier teams are more engaged and productive.
                </p>
              </div>
              <div className="p-6 bg-porcelain rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-3">⚡ Quick & Convenient</h3>
                <p className="text-harbor">
                  Express services during lunch breaks, or full pampering for special events. Flexible scheduling fits your company's needs.
                </p>
              </div>
              <div className="p-6 bg-porcelain rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-3">📊 Easy Administration</h3>
                <p className="text-harbor">
                  One invoice, one coordinator. We handle scheduling, logistics, and payment processing. You just approve and enjoy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-porcelain">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-12 text-center">
              Corporate Service Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Employee Wellness Days */}
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-ink mb-4">Employee Wellness Days</h3>
                <p className="text-harbor mb-4">Monthly or quarterly beauty perks for your team</p>
                <ul className="space-y-3 text-harbor mb-6">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Express manicures (15 min)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Chair massages (15-30 min)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Quick makeup touch-ups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Eyebrow shaping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Skin consultations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Product sampling</span>
                  </li>
                </ul>
                <p className="text-sm font-semibold text-ink">From €35/person</p>
              </div>

              {/* Corporate Events */}
              <div className="bg-white p-8 rounded-lg border-2 border-gold">
                <div className="inline-block bg-gold text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  Most Popular
                </div>
                <h3 className="text-2xl font-serif text-ink mb-4">Corporate Events</h3>
                <p className="text-harbor mb-4">For conferences, offsites, and team celebrations</p>
                <ul className="space-y-3 text-harbor mb-6">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Full beauty bar setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Multiple service stations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Hair styling demos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Makeup workshops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Skincare consultations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Branded experience available</span>
                  </li>
                </ul>
                <p className="text-sm font-semibold text-ink">Custom pricing (typically €2,500+)</p>
              </div>

              {/* Executive Services */}
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-ink mb-4">Executive Services</h3>
                <p className="text-harbor mb-4">Premium grooming for leadership teams</p>
                <ul className="space-y-3 text-harbor mb-6">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Pre-presentation grooming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Media appearance prep</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Corporate headshot styling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Image consulting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Personal shopping assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Ongoing grooming maintenance</span>
                  </li>
                </ul>
                <p className="text-sm font-semibold text-ink">From €150/executive/session</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-ink mb-12 text-center">
              Perfect For These Occasions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <span className="text-3xl">🎉</span>
                <div>
                  <h3 className="font-semibold text-ink mb-2">Company Anniversaries</h3>
                  <p className="text-harbor">Celebrate milestones with a beauty bar for the whole team</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">🎯</span>
                <div>
                  <h3 className="font-semibold text-ink mb-2">Product Launches</h3>
                  <p className="text-harbor">Executive grooming before major announcements and press events</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">🏆</span>
                <div>
                  <h3 className="font-semibold text-ink mb-2">Team Building Events</h3>
                  <p className="text-harbor">Interactive beauty workshops as unique team activities</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">📸</span>
                <div>
                  <h3 className="font-semibold text-ink mb-2">Corporate Photoshoots</h3>
                  <p className="text-harbor">Professional styling for company headshots and website photography</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">🎁</span>
                <div>
                  <h3 className="font-semibold text-ink mb-2">Employee Appreciation</h3>
                  <p className="text-harbor">Show gratitude with quarterly wellness days</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">🏢</span>
                <div>
                  <h3 className="font-semibold text-ink mb-2">Conference Support</h3>
                  <p className="text-harbor">On-site grooming for multi-day corporate events</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">💼</span>
                <div>
                  <h3 className="font-semibold text-ink mb-2">Recruitment Events</h3>
                  <p className="text-harbor">Stand out at job fairs with a unique candidate experience</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">🎄</span>
                <div>
                  <h3 className="font-semibold text-ink mb-2">Holiday Parties</h3>
                  <p className="text-harbor">Pre-party styling and touch-ups for your team celebration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-porcelain">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif text-ink mb-12 text-center">
              Simple Process, Seamless Experience
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-2">Initial Consultation</h3>
                  <p className="text-harbor">Tell us about your event, team size, and goals. We'll propose the perfect package.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-2">Custom Proposal</h3>
                  <p className="text-harbor">Receive detailed pricing, service options, and timeline within 24 hours.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-2">Logistics Planning</h3>
                  <p className="text-harbor">We coordinate everything—professional scheduling, equipment, setup, and breakdown.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-2">Event Day Excellence</h3>
                  <p className="text-harbor">Our team arrives early, sets up, and delivers exceptional service to your employees.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center text-xl font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-2">Simple Billing</h3>
                  <p className="text-harbor">One invoice, net-30 terms available. Track services and costs easily for your records.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-ink mb-12 text-center">
              Success Story
            </h2>
            <div className="bg-porcelain p-8 md:p-12 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  T
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-ink">Tech Startup, Lisbon</h3>
                  <p className="text-harbor">120 employees, Annual company retreat</p>
                </div>
            </div>

              <p className="text-harbor text-lg mb-6 italic">
                "We wanted to do something special for our team after a challenging year. Good Hands set up a full beauty bar at our off-site retreat. Every employee got express manicures, chair massages, and skincare consultations. The feedback was overwhelmingly positive—people said it was the highlight of the retreat."
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-ink mb-2">98%</p>
                  <p className="text-harbor">Employee satisfaction</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-ink mb-2">120</p>
                  <p className="text-harbor">Services delivered in 3 hours</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-ink mb-2">€50</p>
                  <p className="text-harbor">Cost per employee</p>
                </div>
              </div>

              <p className="text-ink font-semibold">— HR Director, Leading Tech Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-porcelain">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif text-ink mb-12 text-center">
              Corporate Services FAQ
            </h2>
            <div className="space-y-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-white rounded-lg font-semibold text-ink">
                  What's the minimum team size?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 text-harbor">
                  No minimum! We've served teams as small as 5 executives and as large as 200+ employees. Pricing scales accordingly.
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-white rounded-lg font-semibold text-ink">
                  Do you provide all equipment?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 text-harbor">
                  Yes. We bring professional equipment, products, chairs, tables, and everything needed. You just provide the space and power outlets.
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-white rounded-lg font-semibold text-ink">
                  How much space do you need?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 text-harbor">
                  Depends on services. For express manicures, about 3x3 meters per station. For a full beauty bar setup, a conference room or open area works well. We'll visit your space beforehand.
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-white rounded-lg font-semibold text-ink">
                  Can we customize the services?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 text-harbor">
                  Absolutely! Every corporate package is customized. Mix and match services, choose specific time slots, and add branded elements.
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-white rounded-lg font-semibold text-ink">
                  What payment terms do you offer?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 text-harbor">
                  Net-30 invoicing for established companies. For first-time events, we request 50% deposit. Ongoing wellness programs can be monthly billing.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to Elevate Your Corporate Culture?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create a custom corporate beauty program for your team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#booking" className="btn-primary bg-gold hover:bg-gold/90">
            Request Proposal
          </Link>
            <a href="mailto:corporate@goodhands.com" className="btn-secondary border-white text-white hover:bg-white/10">
              Email: corporate@goodhands.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
