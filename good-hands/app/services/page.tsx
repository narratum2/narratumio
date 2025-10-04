import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services — Good Hands',
  description: 'Explore our curated beauty services across Lisbon. Hair styling, nail care, skincare, makeup, and wellness treatments.',
}

const services = [
  {
    category: 'Hair Styling',
    services: [
      { name: 'Precision Cut', price: 'From €80', duration: '60 min' },
      { name: 'Color & Highlights', price: 'From €120', duration: '120 min' },
      { name: 'Balayage', price: 'From €180', duration: '180 min' },
      { name: 'Blowout & Styling', price: 'From €45', duration: '45 min' },
      { name: 'Treatment & Repair', price: 'From €60', duration: '60 min' },
    ],
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
  },
  {
    category: 'Nail Care',
    services: [
      { name: 'Classic Manicure', price: 'From €35', duration: '45 min' },
      { name: 'Gel Manicure', price: 'From €45', duration: '60 min' },
      { name: 'Luxury Pedicure', price: 'From €55', duration: '75 min' },
      { name: 'Nail Art', price: 'From €20', duration: '30 min' },
      { name: 'Extensions', price: 'From €70', duration: '90 min' },
    ],
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
  },
  {
    category: 'Skincare',
    services: [
      { name: 'Signature Facial', price: 'From €95', duration: '75 min' },
      { name: 'Anti-Aging Treatment', price: 'From €140', duration: '90 min' },
      { name: 'Deep Cleanse', price: 'From €85', duration: '60 min' },
      { name: 'Microdermabrasion', price: 'From €120', duration: '60 min' },
      { name: 'LED Light Therapy', price: 'From €100', duration: '45 min' },
    ],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
  },
  {
    category: 'Makeup',
    services: [
      { name: 'Event Makeup', price: 'From €70', duration: '45 min' },
      { name: 'Bridal Makeup', price: 'From €150', duration: '90 min' },
      { name: 'Makeup Lesson', price: 'From €120', duration: '90 min' },
      { name: 'Beauty Consultation', price: 'From €80', duration: '60 min' },
    ],
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
  },
  {
    category: 'Wellness',
    services: [
      { name: 'Swedish Massage', price: 'From €90', duration: '60 min' },
      { name: 'Deep Tissue', price: 'From €100', duration: '75 min' },
      { name: 'Aromatherapy', price: 'From €95', duration: '60 min' },
      { name: 'Hot Stone', price: 'From €110', duration: '90 min' },
    ],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=2000&q=80"
            alt="Beauty services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Premium beauty experiences curated for discerning clients
          </p>
        </div>
      </section>

      {/* Services Grid */}
      {services.map((category, idx) => (
        <section
          key={category.category}
          className={`section-padding ${idx % 2 === 0 ? 'bg-white' : 'bg-shell'}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={idx % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.category}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={idx % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                <h2 className="text-4xl font-serif mb-8">{category.category}</h2>
                <div className="space-y-4">
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="flex justify-between items-start border-b border-harbor/10 pb-4"
                    >
                      <div>
                        <h3 className="font-medium text-lg">{service.name}</h3>
                        <p className="text-sm text-harbor">{service.duration}</p>
                      </div>
                      <span className="text-gold font-medium">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to Book Your Experience?
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect service and professional for your needs
          </p>
          <Link href="/#booking" className="btn-primary">
            Book Now
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Beauty Services',
            provider: {
              '@type': 'Organization',
              name: 'Good Hands',
            },
            areaServed: 'Lisbon, Portugal',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Beauty Services',
              itemListElement: services.flatMap((cat) =>
                cat.services.map((service) => ({
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: service.name,
                    category: cat.category,
                  },
                }))
              ),
            },
          }),
        }}
      />
    </div>
  )
}

