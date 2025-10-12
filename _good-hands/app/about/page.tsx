import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Heart, Shield, Users, Instagram, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — Good Hands',
  description: 'We believe beauty should be a trusted experience, not a gamble. Discover the philosophy behind Lisbon\'s most discerning beauty concierge.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero - Brand Philosophy */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-shell via-porcelain to-white">
        <div className="container-custom max-w-5xl text-center py-20">
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-wider text-gold font-medium">Our Philosophy</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif mb-8 text-ink leading-tight">
            Beauty Should Be a<br />
            <span className="text-gold">Trusted Experience,</span><br />
            Not a Gamble
          </h1>
          
          <p className="text-xl md:text-2xl text-harbor leading-relaxed max-w-3xl mx-auto mb-12">
            In a city of endless options, we don't add to the noise—we cut through it. 
            Good Hands exists because excellence shouldn't require insider knowledge, 
            and trust shouldn't be earned through disappointment.
          </p>

          <div className="inline-flex items-center gap-2 text-harbor/60 text-sm">
            <div className="w-12 h-px bg-gold"></div>
            <span>Est. 2024, Lisbon</span>
            <div className="w-12 h-px bg-gold"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-harbor/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-gold rounded-full"></div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider text-gold font-medium mb-4 block">The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Finding Beauty Services<br />Shouldn't Feel Like This
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-6xl mb-4 opacity-40">😰</div>
              <h3 className="text-xl font-serif mb-2">Overwhelming Choice</h3>
              <p className="text-harbor text-sm">
                Hundreds of salons, countless reviews, no way to know who's actually good
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4 opacity-40">⏰</div>
              <h3 className="text-xl font-serif mb-2">Hours Wasted</h3>
              <p className="text-harbor text-sm">
                Scrolling, comparing, reading reviews, still uncertain if it's the right choice
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4 opacity-40">💸</div>
              <h3 className="text-xl font-serif mb-2">Expensive Mistakes</h3>
              <p className="text-harbor text-sm">
                Bad haircuts. Poor service. Wasted money. The cost of trial and error adds up
              </p>
            </div>
          </div>

          <div className="bg-ink text-white rounded-2xl p-10 md:p-16 text-center">
            <p className="text-2xl md:text-3xl font-serif italic mb-6 leading-relaxed">
              "We realized that the beauty industry's biggest problem 
              wasn't a lack of talented professionals—<br />
              <span className="text-gold">it was the impossibility of finding them with confidence.</span>"
            </p>
            <p className="text-porcelain/70">— The Good Hands founding principle</p>
          </div>
        </div>
      </section>

      {/* Our Solution - Brand Promise */}
      <section className="section-padding bg-gradient-to-br from-shell to-porcelain">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider text-gold font-medium mb-4 block">Our Solution</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              We're Your Trusted Insider
            </h2>
            <p className="text-xl text-harbor max-w-2xl mx-auto">
              Think of us as that friend who knows everyone, has tried everything, 
              and only recommends places they genuinely love
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Sparkles className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-2xl font-serif mb-3">Rigorous Vetting</h3>
              <p className="text-harbor mb-4">
                We personally visit, test, and evaluate every professional. Portfolio review, 
                hygiene standards, client interviews, trial services. Only 1 in 5 make it onto our platform.
              </p>
              <ul className="space-y-2 text-sm text-harbor">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>In-person salon visits and hygiene audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Portfolio and certification verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Trial services by our team</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Ongoing quality monitoring</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Heart className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-2xl font-serif mb-3">Personal Matching</h3>
              <p className="text-harbor mb-4">
                Not every great professional is right for every client. We match based on 
                your style, preferences, budget, and what you actually want—not just what's available.
              </p>
              <ul className="space-y-2 text-sm text-harbor">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Style preference analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Specialized needs (curly hair, sensitive skin, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Language and communication style</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Location and schedule convenience</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Shield className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-2xl font-serif mb-3">Quality Guarantee</h3>
              <p className="text-harbor mb-4">
                If something isn't right, we make it right. No arguments, no hassles. 
                Your satisfaction is our reputation, and we protect it fiercely.
              </p>
              <ul className="space-y-2 text-sm text-harbor">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Post-service follow-up on every booking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Immediate resolution for any issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Complimentary redo or refund guarantee</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>24/7 concierge support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Users className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-2xl font-serif mb-3">End-to-End Care</h3>
              <p className="text-harbor mb-4">
                From your first inquiry to following up after your appointment, 
                we handle everything. You just show up and enjoy the experience.
              </p>
              <ul className="space-y-2 text-sm text-harbor">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Professional matching and booking coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Appointment reminders and directions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Portuguese-English communication bridge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Flexible rescheduling and cancellations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Manifesto */}
      <section className="section-padding bg-ink text-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">What We Believe</h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-gold pl-6 py-2">
              <p className="text-xl md:text-2xl leading-relaxed">
                We believe <strong className="text-gold">excellence should be accessible</strong>, 
                not hidden behind insider networks
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6 py-2">
              <p className="text-xl md:text-2xl leading-relaxed">
                We believe <strong className="text-gold">trust is earned</strong> through 
                transparency, not marketing promises
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6 py-2">
              <p className="text-xl md:text-2xl leading-relaxed">
                We believe <strong className="text-gold">quality costs money</strong>, 
                but shouldn't cost you disappointment
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6 py-2">
              <p className="text-xl md:text-2xl leading-relaxed">
                We believe <strong className="text-gold">beauty is personal</strong>, 
                and matching matters more than marketing
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6 py-2">
              <p className="text-xl md:text-2xl leading-relaxed">
                We believe <strong className="text-gold">your time is valuable</strong>, 
                and research shouldn't be your second job
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lisbon */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm uppercase tracking-wider text-gold font-medium mb-4 block">Why Lisbon</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                A City That Deserves This Service
              </h2>
              <div className="space-y-4 text-lg text-harbor leading-relaxed">
                <p>
                  Lisbon is experiencing a renaissance. World-class talent is pouring into the city—hair stylists 
                  from Paris, estheticians from Milan, makeup artists from London. The quality is here.
                </p>
                <p>
                  But if you don't speak Portuguese, don't have local connections, or just moved here? 
                  You'd never know where to find them. That's the problem we solve.
                </p>
                <p>
                  We're locals who love this city and want everyone—residents, expats, visitors—to experience 
                  the best of Lisbon's beauty scene without the frustration of figuring it out alone.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1585208798174-6cedd86e1b5a?w=800&q=80"
                  alt="Lisbon cityscape"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-gold text-ink p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-serif font-bold">500+</div>
                <div className="text-sm">Vetted Professionals</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-serif font-bold text-gold">8</div>
                <div className="text-sm text-ink">Neighborhoods</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">
            How We're Different
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-serif mb-3">We're Not a Marketplace</h3>
              <p className="text-harbor">
                We don't list everyone who pays us. We're curators, not a directory. 
                Every professional earns their place through quality, not a subscription fee.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-serif mb-3">We're Not Passive Tech</h3>
              <p className="text-harbor">
                Yes, we use AI. But a human reviews every booking, makes every match, 
                and follows up personally. Technology enables us—it doesn't replace us.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-serif mb-3">We Don't Scale at the Expense of Quality</h3>
              <p className="text-harbor">
                We could add 1,000 salons tomorrow. We won't. Growth is good; 
                quality dilution isn't. We only expand when we can maintain our standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-serif mb-3">We Put Clients First, Not Commissions</h3>
              <p className="text-harbor">
                Our fee is included upfront. We never recommend based on who pays us more. 
                Your perfect match is our only metric.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">
            Who Good Hands Is For
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-serif mb-3">Travelers & Visitors</h3>
              <p className="text-harbor">
                You're in Lisbon for a week or a month. You want a great haircut, 
                not a research project. We handle everything before you land.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-xl font-serif mb-3">Expats & New Residents</h3>
              <p className="text-harbor">
                You just moved here. Finding a trusted hairstylist shouldn't take six months 
                of trial and error. We're your instant beauty network.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-serif mb-3">Lisbon Locals</h3>
              <p className="text-harbor">
                Even if you live here, you don't know every great salon in every neighborhood. 
                We do. Let us introduce you to professionals you didn't know existed.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-ink via-harbor to-ink text-white rounded-lg p-10">
            <p className="text-2xl font-serif italic mb-4">
              "If you value your time, appreciate quality, and believe beauty should be trusted—
              Good Hands was built for you."
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-gold/10 via-shell to-porcelain">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-harbor mb-8 leading-relaxed">
            Join hundreds of clients who've stopped gambling with their beauty and started trusting Good Hands
          </p>
          <Link href="/#booking" className="btn-gold text-lg px-10 py-4 inline-block">
            Book Your First Experience
          </Link>
          <p className="text-sm text-harbor/60 mt-6">
            First-time clients: Share your preferences, we'll match you perfectly
          </p>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl text-center">
          <h3 className="text-2xl font-serif mb-6 text-ink">Follow Our Journey</h3>
          <p className="text-harbor mb-8">
            Stay updated with beauty tips, Lisbon guides, and behind-the-scenes stories
          </p>
          
          <div className="flex justify-center items-center gap-6">
            <a
              href="https://instagram.com/goodhands"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 hover:transform hover:scale-110 transition-all"
              aria-label="Follow us on Instagram"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow">
                <Instagram className="w-8 h-8" />
              </div>
              <span className="text-sm text-harbor group-hover:text-gold transition-colors">Instagram</span>
            </a>

            <a
              href="https://x.com/goodhands"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 hover:transform hover:scale-110 transition-all"
              aria-label="Follow us on X (Twitter)"
            >
              <div className="w-16 h-16 rounded-full bg-ink flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <span className="text-sm text-harbor group-hover:text-gold transition-colors">X (Twitter)</span>
            </a>

            <a
              href="https://t.me/goodhands"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 hover:transform hover:scale-110 transition-all"
              aria-label="Join us on Telegram"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow">
                <Send className="w-7 h-7" />
              </div>
              <span className="text-sm text-harbor group-hover:text-gold transition-colors">Telegram</span>
            </a>
          </div>

          <p className="text-xs text-harbor/60 mt-8">
            Have questions? Reach out anytime at{' '}
            <a href="mailto:hello@goodhands.com" className="text-gold hover:underline">
              hello@goodhands.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
