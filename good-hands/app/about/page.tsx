import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Good Hands',
  description: 'Meet the team behind Lisbon\'s premier beauty concierge service. Our story, mission, and commitment to excellence.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=2000&q=80"
            alt="About Good Hands"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">About Good Hands</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Curating beauty experiences with care and expertise
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-serif mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg mx-auto text-harbor">
            <p className="text-xl leading-relaxed">
              Good Hands began with a simple observation: finding exceptional beauty services
              in Lisbon shouldn\'t require insider knowledge. Whether you\'re a resident or
              visitor, everyone deserves access to the city\'s best professionals.
            </p>
            <p className="text-xl leading-relaxed">
              We built Good Hands as an AI-first beauty concierge that combines cutting-edge
              technology with human expertise. Our platform connects you with vetted
              professionals across Lisbon\'s most elegant neighborhoods, ensuring every
              experience meets our exacting standards.
            </p>
            <p className="text-xl leading-relaxed">
              From intimate salons in Chiado to destination spas in Sintra, we\'ve curated a
              network of partners who share our commitment to excellence, authenticity, and
              exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-4xl font-serif mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✨</span>
              </div>
              <h3 className="text-2xl font-serif mb-3">Excellence</h3>
              <p className="text-harbor">
                We partner only with the finest professionals who meet our rigorous standards
                for skill, service, and experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-2xl font-serif mb-3">Trust</h3>
              <p className="text-harbor">
                Your beauty is in good hands. We personally vet every provider and stand
                behind every recommendation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💎</span>
              </div>
              <h3 className="text-2xl font-serif mb-3">Curation</h3>
              <p className="text-harbor">
                We don\'t list everyone—we curate the best. Quality over quantity, always.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-serif mb-12 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-1">Sofia Martins</h3>
              <p className="text-sm text-gold mb-2">Founder & CEO</p>
              <p className="text-sm text-harbor">
                Former beauty editor with 15 years in luxury hospitality
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-1">Miguel Costa</h3>
              <p className="text-sm text-gold mb-2">Head of Technology</p>
              <p className="text-sm text-harbor">
                AI engineer passionate about personalized experiences
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-1">Ana Silva</h3>
              <p className="text-sm text-gold mb-2">Concierge Director</p>
              <p className="text-sm text-harbor">
                Beauty insider with connections across Lisbon\'s best salons
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of clients who trust Good Hands for their beauty needs
          </p>
          <Link href="/#booking" className="btn-primary">
            Book Your First Experience
          </Link>
        </div>
      </section>
    </div>
  )
}

