'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroModern() {
  return (
    <div className="mt-20">
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] min-h-[350px] overflow-hidden">
        <Image
          src="/brand-images/hero-salon-interior.png"
          alt="Luxury beauty salon in Lisbon with sage green arches"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom text-center px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-serif font-normal mb-6 md:mb-8 text-ink text-[clamp(2rem,8vw,4.5rem)] leading-[1.15] tracking-[-0.02em]">
              Lisbon&apos;s Premier Beauty Concierge
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 text-harbor max-w-2xl mx-auto font-light px-4 leading-[1.7]">
              We navigate Lisbon&apos;s beauty scene for you.{' '}
              Expert matching. Perfect results. Every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 max-w-md sm:max-w-none mx-auto">
              <a href="#booking" className="btn-gold w-full sm:w-auto">
                Book Your Experience
              </a>
              <a href="/services" className="btn-secondary w-full sm:w-auto">
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
