'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop"
          alt="Luxury beauty experience"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {/* H1: 56px (3.5rem) per design guidelines */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance">
            Beauty in Good Hands
          </h1>
          {/* Body text with 1.6 line height */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-porcelain/90 max-w-2xl mx-auto text-balance leading-relaxed">
            Curated beauty experiences in Lisbon\'s most elegant neighborhoods
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA with gold accent per design guidelines */}
            <a
              href="#search"
              className="px-8 py-4 bg-gold text-ink rounded-md font-semibold hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-150 focus-visible-ring"
            >
              Explore Services
            </a>
            {/* Secondary button with harbor border */}
            <a
              href="#booking"
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-md font-medium hover:bg-white hover:text-ink transition-all duration-150 focus-visible-ring"
            >
              Book Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.25 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-sm uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

