'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroModern() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ height: 'calc(100vh - 80px)', marginTop: '80px', minHeight: '500px' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/brand-images/hero-salon-interior.png"
          alt="Luxury beauty salon in Lisbon with sage green arches"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-serif font-normal mb-6 md:mb-8 text-balance text-center w-full" style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
            Lisbon's Premier Beauty Concierge
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 text-white/90 max-w-2xl mx-auto font-light px-4" style={{ lineHeight: '1.7' }}>
            We navigate Lisbon's beauty scene for you.<br className="hidden sm:inline" />
            <span className="inline sm:hidden"> </span>Expert matching. Perfect results. Every time.
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center px-4 max-w-md md:max-w-none mx-auto">
            <a href="#booking" className="btn-gold btn-primary-full-mobile md:w-auto">
              Book Your Experience
            </a>
            <a href="/services" className="btn-secondary btn-primary-full-mobile md:w-auto" style={{ borderColor: 'white', color: 'white' }}>
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex"
      >
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-xs uppercase tracking-widest font-medium" style={{ letterSpacing: '0.15em' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
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
