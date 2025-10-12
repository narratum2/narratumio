'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ProductTileProps {
  title: string
  brand: string
  image: string
  price: string
  stylistName: string
  quote: string
  category?: string
  href?: string
}

export default function ProductTile({
  title,
  brand,
  image,
  price,
  stylistName,
  quote,
  category = '',
  href = '#',
}: ProductTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <Link
        href={href}
        className="block bg-white overflow-hidden hover:shadow-xl transition-all duration-600 focus-visible-ring"
      >
        {/* Product Image */}
        <div className="relative h-80 bg-shell overflow-hidden">
          <Image
            src={image}
            alt={`${brand} ${title}`}
            fill
            className="object-cover transition-transform duration-800 group-hover:scale-105"
          />
          {category && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-gold/90 backdrop-blur-sm text-ink text-xs font-medium uppercase tracking-wide">
                Stylist's Pick
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-6">
          {/* Brand & Title */}
          <div className="mb-4">
            <p className="text-xs uppercase tracking-wide text-harbor mb-1">{brand}</p>
            <h3 className="text-xl font-serif text-ink group-hover:text-gold transition-colors">
              {title}
            </h3>
          </div>

          {/* Stylist Quote - "From the chair with love" */}
          <blockquote className="mb-4 pl-4 border-l-2 border-gold/30">
            <p className="text-sm text-harbor italic leading-relaxed">
              "{quote}"
            </p>
            <footer className="mt-2 text-xs text-gold font-medium">
              — {stylistName}
            </footer>
          </blockquote>

          {/* Price */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-ink">{price}</span>
            <span className="text-gold group-hover:translate-x-1 transition-transform inline-block text-xl">
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

