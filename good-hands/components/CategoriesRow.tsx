'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const categories = [
  {
    name: 'Hair',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80',
    href: '/services?category=hair',
  },
  {
    name: 'Nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80',
    href: '/services?category=nails',
  },
  {
    name: 'Skincare',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80',
    href: '/services?category=skincare',
  },
  {
    name: 'Makeup',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80',
    href: '/services?category=makeup',
  },
  {
    name: 'Wellness',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80',
    href: '/services?category=wellness',
  },
  {
    name: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80',
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

