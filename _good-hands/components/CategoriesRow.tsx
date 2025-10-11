'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { categories } from '@/lib/categories'

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.08, 0.3), // Cap delay at 300ms
              }}
              className="motion-reduce:transition-none motion-reduce:transform-none"
            >
              <Link
                href={category.href}
                className="group block relative aspect-square rounded-lg overflow-hidden focus-visible-ring"
                aria-label={`Browse ${category.name} - ${category.description}`}
              >
                <Image
                  src={category.image}
                  alt={category.seoDescription}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 33vw, 16vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none motion-reduce:hover:scale-100"
                  priority={index < 3} // Prioritize first 3 images
                  quality={85}
                />
                {/* Enhanced gradient overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/20" />
                
                {/* Category content */}
                <div className="absolute inset-0 flex flex-col items-start justify-end p-4 md:p-6">
                  <h3 className="text-white font-serif text-xl md:text-2xl mb-1 drop-shadow-lg">
                    {category.name}
                  </h3>
                  <p className="text-white/90 text-xs md:text-sm drop-shadow-md line-clamp-2">
                    {category.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 motion-reduce:transition-none">
                  <svg
                    className="w-6 h-6 text-white drop-shadow-lg"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
