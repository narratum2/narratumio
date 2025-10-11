'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Premium Hair Styling',
    description: 'Expert cuts, coloring, and treatments in Lisbon\'s finest salons',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
    price: 'From €80',
    duration: '90 min',
    href: '/services?category=hair',
  },
  {
    title: 'Luxury Nail Care',
    description: 'Manicures, pedicures, and nail art by skilled technicians',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    price: 'From €45',
    duration: '60 min',
    href: '/services?category=nails',
  },
  {
    title: 'Advanced Skincare',
    description: 'Custom facials and treatments for radiant, healthy skin',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    price: 'From €95',
    duration: '75 min',
    href: '/services?category=skincare',
  },
  {
    title: 'Professional Makeup',
    description: 'Event makeup, lessons, and beauty consultations',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
    price: 'From €70',
    duration: '45 min',
    href: '/services?category=makeup',
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
          className="text-center mb-16"
        >
          {/* H2: 40px per design guidelines */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
            Signature Services
          </h2>
          {/* Body text with proper line height */}
          <p className="text-harbor text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Carefully curated experiences delivered by Lisbon\'s most talented professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block bg-porcelain rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-250 focus-visible-ring"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover card-image"
                  />
                </div>
                <div className="p-6">
                  {/* H3: 28px per design guidelines */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-medium mb-2 group-hover:text-gold transition-colors duration-150">
                    {service.title}
                  </h3>
                  <p className="text-harbor text-base leading-relaxed mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4 text-sm text-harbor">
                      <span className="font-medium">{service.price}</span>
                      <span>•</span>
                      <span>{service.duration}</span>
                    </div>
                    <span className="text-gold group-hover:translate-x-1 transition-transform duration-150 inline-block">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

