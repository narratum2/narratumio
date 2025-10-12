'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/partnerships', label: 'Hotels' },
  { href: '/guides', label: 'Guides' },
  { href: '/journal', label: 'Journal' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? 'bg-white/98 backdrop-blur-md shadow-sm' : 'bg-white/95 backdrop-blur-sm'
      }`}
      style={{ zIndex: 'var(--z-fixed)' }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between" style={{ height: '80px' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-xl font-serif font-normal text-black tracking-tight group-hover:text-gold transition-colors duration-300">
              Good Hands
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-black hover:text-gold transition-colors duration-300"
                style={{ letterSpacing: '0.08em' }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="#booking" className="btn-primary">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-black"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-light"
          >
            <div className="container-custom py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-sm font-medium uppercase tracking-wider text-black hover:text-gold transition-colors"
                  style={{ letterSpacing: '0.08em' }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#booking"
                onClick={() => setIsOpen(false)}
                className="block btn-primary text-center mt-6"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

