'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface AnimatedServiceCardProps {
  title: string
  description: string
  image: string
  price: string
  priceNote: string
  duration: string
  href: string
  index: number
}

export default function AnimatedServiceCard({
  title,
  description,
  image,
  price,
  priceNote,
  duration,
  href,
  index
}: AnimatedServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={href} className="block">
        <div className="relative h-96 rounded-lg overflow-hidden bg-harbor/5">
          {/* Image with Hover Zoom */}
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 border-2 border-gold"
              initial={{ opacity: 0, scale: 0.95 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Content Overlay */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            >
              {/* Title */}
              <h3 className="text-3xl font-serif text-white mb-3 group-hover:text-gold transition-colors">
                {title}
              </h3>

              {/* Description */}
              <p className="text-porcelain/90 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                {description}
              </p>

              {/* Pricing */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 text-white">
                    <span className="font-semibold text-xl text-gold">{price}</span>
                    <span>•</span>
                    <span className="text-sm">{duration}</span>
                  </div>
                  <span className="text-xs text-gold/80 block mt-1">{priceNote}</span>
                </div>

                {/* Arrow Icon */}
                <motion.div
                  className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 165, 116, 0.4)' }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

