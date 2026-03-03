'use client'

import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

const footerLinks = {
  services: [
    { href: '/services', label: 'All Services' },
    { href: '/partnerships', label: 'Hotel Partnerships' },
    { href: '/premium/weddings', label: 'Weddings' },
    { href: '/premium/retreats', label: 'Retreats' },
    { href: '/premium/corporate', label: 'Corporate' },
    { href: '/premium/membership', label: 'Membership' },
  ],
  neighborhoods: [
    { href: '/chiado', label: 'Chiado' },
    { href: '/principe-real', label: 'Príncipe Real' },
    { href: '/baixa', label: 'Baixa' },
    { href: '/avenida', label: 'Avenida' },
    { href: '/alfama', label: 'Alfama' },
    { href: '/belem', label: 'Belém' },
    { href: '/sintra', label: 'Sintra' },
    { href: '/cascais', label: 'Cascais' },
  ],
  company: [
    { href: '/about', label: 'About' },
    { href: '/journal', label: 'Journal' },
    { href: '/guides', label: 'Guides' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/faq', label: 'FAQ' },
    { href: '/ai-info', label: 'For AI Assistants' },
  ],
  professionals: [
    { href: '/join-our-team', label: 'Join Our Network' },
    { href: '/join-our-team#benefits', label: 'Benefits' },
    { href: '/join-our-team#application', label: 'Apply Now' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-ink text-porcelain">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand + NAP */}
          <div>
            <h3 className="text-2xl font-serif mb-4">Good Hands</h3>
            <p className="text-porcelain/70 text-sm leading-relaxed mb-4">
              Your beauty concierge in Lisbon. We know everyone worth knowing.
            </p>
            <div className="space-y-2 text-sm text-porcelain/70">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="block hover:text-gold transition-colors focus-visible-ring"
              >
                {siteConfig.contact.email}
              </a>
              {siteConfig.contact.hasPhone && (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="block hover:text-gold transition-colors focus-visible-ring"
                >
                  {siteConfig.contact.phone}
                </a>
              )}
              {(siteConfig.address.street || siteConfig.address.locality) && (
                <address className="not-italic">
                  {siteConfig.address.street && (
                    <span className="block">{siteConfig.address.street}</span>
                  )}
                  <span>
                    {siteConfig.address.locality === siteConfig.address.region
                      ? siteConfig.address.locality
                      : [siteConfig.address.locality, siteConfig.address.region].filter(Boolean).join(', ')}
                    {siteConfig.address.postalCode && ` ${siteConfig.address.postalCode}`}
                  </span>
                </address>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center py-2 px-1 text-sm text-porcelain/70 hover:text-gold transition-colors focus-visible-ring min-h-[44px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Neighborhoods */}
          <div>
            <h4 className="font-semibold mb-4">Neighborhoods</h4>
            <ul className="space-y-2">
              {footerLinks.neighborhoods.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center py-2 px-1 text-sm text-porcelain/70 hover:text-gold transition-colors focus-visible-ring min-h-[44px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center py-2 px-1 text-sm text-porcelain/70 hover:text-gold transition-colors focus-visible-ring min-h-[44px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Professionals */}
          <div>
            <h4 className="font-semibold mb-4">For Professionals</h4>
            <ul className="space-y-2">
              {footerLinks.professionals.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center py-2 px-1 text-sm text-porcelain/70 hover:text-gold transition-colors focus-visible-ring min-h-[44px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-porcelain/10">
              <p className="text-xs text-porcelain/60 mb-2">Are you a beauty professional?</p>
              <Link 
                href="/join-our-team#application"
                className="inline-block text-sm font-medium text-gold hover:text-gold/80 transition-colors"
              >
                Apply to Join →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-porcelain/10">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-porcelain/60">
              © {new Date().getFullYear()} Good Hands. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-porcelain/60 hover:text-gold transition-colors focus-visible-ring"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-porcelain/60 hover:text-gold transition-colors focus-visible-ring"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

