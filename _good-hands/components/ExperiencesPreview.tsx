'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const experiences = [
  {
    title: 'Bridal Beauty Journey',
    description: 'Complete wedding day preparation with trials, treatments, and day-of styling',
    image: '/brand-images/experience-bridal-beauty.png',
    tag: 'Wedding',
    href: '/premium/weddings',
  },
  {
    title: 'Wellness Retreat',
    description: 'Multi-day rejuvenation package in Sintra or Cascais',
    image: '/brand-images/experience-wellness-retreat.png',
    tag: 'Retreat',
    href: '/premium/retreats',
  },
  {
    title: 'Corporate Wellness',
    description: 'Team building through beauty and wellness experiences',
    image: '/brand-images/experience-corporate-wellness.png',
    tag: 'Corporate',
    href: '/premium/corporate',
  },
]

export default function ExperiencesPreview() {
  return (
    <section className="section-padding bg-porcelain">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Premium Experiences
          </h2>
          <p className="text-harbor text-lg max-w-2xl mx-auto">
            Elevated multi-service packages for life\'s special moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={experience.href}
                className="group block bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all focus-visible-ring"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold text-ink text-sm font-medium rounded-full">
                      {experience.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2 group-hover:text-gold transition-colors">
                    {experience.title}
                  </h3>
                  <p className="text-harbor text-sm">{experience.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/experiences" className="btn-gold">
            Explore Premium Experiences
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

