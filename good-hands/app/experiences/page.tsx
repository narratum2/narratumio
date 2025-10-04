import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Premium Experiences — Good Hands',
  description: 'Elevated multi-service beauty packages for weddings, retreats, corporate events, and exclusive memberships.',
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
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    priceFrom: '€800',
  },
  {
    title: 'Wellness Retreats',
    slug: 'retreats',
    description: 'Multi-day rejuvenation in Sintra or Cascais',
    features: [
      '2-5 day retreat packages',
      'Daily beauty treatments',
      'Wellness consultations',
      'Spa access included',
      'Curated accommodations',
      'Nutrition guidance',
    ],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80',
    priceFrom: '€1,200',
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
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80',
    priceFrom: '€500',
  },
  {
    title: 'Good Hands Membership',
    slug: 'membership',
    description: 'Exclusive access and priority booking year-round',
    features: [
      'Priority booking access',
      '15% discount on all services',
      'Complimentary quarterly treatments',
      'Member-only events',
      'Personal beauty concierge',
      'Birthday gift package',
    ],
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=80',
    priceFrom: '€200/month',
  },
]

export default function ExperiencesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=2000&q=80"
            alt="Premium experiences"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Premium Experiences</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Elevated packages for life\'s most important moments
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
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Create Your Custom Experience
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Not sure which package is right for you? Let\'s design something perfect together.
          </p>
          <Link href="/#booking" className="btn-primary">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

