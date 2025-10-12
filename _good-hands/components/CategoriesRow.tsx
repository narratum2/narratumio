'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const categories = [
  {
    name: 'Hair',
    image: '/brand-images/category-hair-styling.png',
    href: '/services?category=hair',
  },
  {
    name: 'Nails',
    image: '/brand-images/category-makeup.png',
    href: '/services?category=nails',
  },
  {
    name: 'Skincare',
    image: '/brand-images/category-skincare.png',
    href: '/services?category=skincare',
  },
  {
    name: 'Makeup',
    image: '/brand-images/service-makeup-application.png',
    href: '/services?category=makeup',
  },
  {
    name: 'Wellness',
    image: '/brand-images/category-wellness.png',
    href: '/services?category=wellness',
  },
  {
    name: 'Weddings',
    image: '/brand-images/category-weddings.png',
    href: '/premium/weddings',
  },
]

export default function CategoriesRow() {
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
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Browse by Category
          </h2>
          <p className="text-harbor text-lg max-w-2xl mx-auto">
            Discover curated beauty experiences tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={category.href}
                className="group block relative aspect-square rounded-lg overflow-hidden focus-visible-ring"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
                <div className="absolute inset-0 flex items-end p-4">
                  <h3 className="text-white font-serif text-lg md:text-xl">
                    {category.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

