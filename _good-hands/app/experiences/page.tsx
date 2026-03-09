import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Premium Experiences — Good Hands',
  description: 'Elevated multi-service beauty packages for weddings, retreats, corporate events, and exclusive memberships.',
  alternates: { canonical: 'https://goodhandsstudio.com/experiences' },
}

const experiences = [
  {
    title: 'Wedding Beauty Packages',
    slug: 'weddings',
    description: 'Complete bridal beauty journey from trial to wedding day',
    features: [
      'Personalized beauty consultation',
      'Multiple trial sessions',
      'Wedding day coordination',
      'Bridal party services',
      'Touch-up kit included',
      'On-location service available',
    ],
    image: '/brand-images/experience-bridal-beauty.png',
    priceFrom: 'From €850',
  },
  {
    title: 'Wellness Retreats',
    slug: 'retreats',
    description: 'Multi-day rejuvenation in Sintra or Cascais',
    features: [
      '3-5 day retreat packages',
      'Daily beauty treatments & workshops',
      'Professional photoshoot included',
      'Take-home beauty kit',
      'Alumni community access',
      'Post-retreat support',
    ],
    image: '/brand-images/experience-wellness-retreat.jpg',
    priceFrom: 'From €1,850',
  },
  {
    title: 'Corporate Wellness',
    slug: 'corporate',
    description: 'Team building through beauty and wellness',
    features: [
      'Customizable group packages',
      'On-site or venue-based',
      'Wellness workshops',
      'Express beauty services',
      'Stress relief treatments',
      'Corporate gifting options',
    ],
    image: '/brand-images/experience-corporate-wellness.png',
    priceFrom: 'Pricing on request',
  },
  {
    title: 'Good Hands Membership',
    slug: 'membership',
    description: 'Exclusive access and priority booking year-round',
    features: [
      'Priority booking access',
      '15–25% discount on all services',
      'Exclusive quarterly or monthly experiences',
      'Dedicated concierge line (Platinum)',
      'Free cancellations (24h notice)',
      'No booking fees',
    ],
    image: '/brand-images/category-makeup.jpg',
    priceFrom: 'From €49/month',
  },
]

export default function ExperiencesPage() {
  return (
    <div className="pt-20">
      {/* Hero Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] min-h-[300px] overflow-hidden">
        <Image
          src="/brand-images/category-weddings.png"
          alt="Premium beauty experiences - weddings, retreats, corporate wellness - Good Hands Lisbon"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Content */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-4 text-ink">Premium Experiences</h1>
          <p className="text-xl md:text-2xl text-harbor max-w-2xl mx-auto">
            Elevated packages for life&apos;s most important moments
          </p>
        </div>
      </section>

      {/* Experiences */}
      {experiences.map((exp, idx) => (
        <section
          key={exp.slug}
          className={`section-padding ${idx % 2 === 0 ? 'bg-white' : 'bg-shell'}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={idx % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={idx % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                <h2 className="text-4xl font-serif mb-4">{exp.title}</h2>
                <p className="text-harbor text-lg mb-6">{exp.description}</p>
                <p className="text-2xl font-serif text-gold mb-6">{exp.priceFrom}</p>
                <ul className="space-y-3 mb-8">
                  {exp.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-gold mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/premium/${exp.slug}`}
                  className="btn-primary inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
            Create Your Custom Experience
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Not sure which package is right for you? Let&apos;s design something perfect together.
          </p>
          <Link href="/#booking" className="btn-gold">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

