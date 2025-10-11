'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/guides', label: 'Guides' },
  { href: '/journal', label: 'Journal' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const { user, loading } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-porcelain/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-semibold text-ink focus-visible-ring">
            Good Hands
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink hover:text-gold transition-colors focus-visible-ring"
              >
                {link.label}
              </Link>
            ))}
            <Link href="#booking" className="btn-primary">
              Book Now
            </Link>
            {!loading && (
              user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 text-sm font-medium text-ink hover:text-gold transition-colors focus-visible-ring"
                    aria-label="User menu"
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
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {showUserMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-48 bg-porcelain rounded-md shadow-lg py-2 z-50"
                      >
                        <Link
                          href="/settings"
                          onClick={() => setShowUserMenu(false)}
                          className="block px-4 py-2 text-sm text-ink hover:bg-shell transition-colors"
                        >
                          Settings
                        </Link>
                        <Link
                          href="/login"
                          onClick={() => setShowUserMenu(false)}
                          className="block px-4 py-2 text-sm text-ink hover:bg-shell transition-colors"
                        >
                          Sign Out
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="text-sm font-medium text-ink hover:text-gold transition-colors focus-visible-ring"
                >
                  Sign In
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-ink focus-visible-ring"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
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
            className="md:hidden bg-porcelain border-t border-harbor/10"
          >
            <div className="container-custom py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-ink hover:text-gold transition-colors focus-visible-ring"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#booking"
                onClick={() => setIsOpen(false)}
                className="block btn-primary text-center"
              >
                Book Now
              </Link>
              {!loading && (
                user ? (
                  <>
                    <Link
                      href="/settings"
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-ink hover:text-gold transition-colors focus-visible-ring"
                    >
                      Settings
                    </Link>
                    <Link
                      href="/login"
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-ink hover:text-gold transition-colors focus-visible-ring"
                    >
                      Sign Out
                    </Link>
                  </>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-ink hover:text-gold transition-colors focus-visible-ring"
                  >
                    Sign In
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

