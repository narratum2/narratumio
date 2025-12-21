'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Premium Hair Styling',
    description: 'We match you with Lisbon\'s best hair colorists and stylists—no more trial and error',
    image: '/brand-images/category-hair-styling.png',
    price: 'From €105',
    priceNote: 'Includes concierge service',
    duration: '90 min',
    href: '/services?category=hair',
  },
  {
    title: 'Luxury Nail Care',
    description: 'Perfectly curated nail technicians who understand exactly what you want',
    image: '/brand-images/category-makeup.png',
    price: 'From €60',
    priceNote: 'Includes concierge service',
    duration: '60 min',
    href: '/services?category=nails',
  },
  {
    title: 'Advanced Skincare',
    description: 'We connect you with skincare experts who truly understand your skin',
    image: '/brand-images/service-facial-treatment.png',
    price: 'From €125',
    priceNote: 'Includes concierge service',
    duration: '75 min',
    href: '/services?category=skincare',
  },
  {
    title: 'Professional Makeup',
    description: 'Your personal beauty concierge finds the perfect makeup artist for your event',
    image: '/brand-images/service-makeup-application.png',
    price: 'From €92',
    priceNote: 'Includes concierge service',
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
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Stop Wasting Time on the Wrong Professionals
          </h2>
          <p className="text-harbor text-lg max-w-2xl mx-auto text-center">
            We've vetted hundreds of beauty professionals so you don't have to. Our concierge service ensures perfect matches—every single time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block bg-shell rounded-lg overflow-hidden hover:shadow-xl transition-shadow focus-visible-ring"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-harbor mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-3 text-sm text-harbor">
                        <span className="font-semibold text-ink text-lg">{service.price}</span>
                        <span>•</span>
                        <span>{service.duration}</span>
                      </div>
                      <span className="text-xs text-gold">{service.priceNote}</span>
                    </div>
                    <span className="text-gold group-hover:translate-x-1 transition-transform inline-block text-2xl">
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-gold">
            Discover All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

