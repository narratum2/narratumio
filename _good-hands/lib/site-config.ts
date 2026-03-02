/**
 * Site configuration for NAP (Name, Address, Phone) and business info.
 * Used for schema.org, Footer, and Google Business Profile consistency.
 *
 * Set these in .env.local for production:
 *   NEXT_PUBLIC_SITE_PHONE
 *   NEXT_PUBLIC_SITE_ADDRESS_STREET
 *   NEXT_PUBLIC_SITE_ADDRESS_LOCALITY
 *   NEXT_PUBLIC_SITE_ADDRESS_REGION
 *   NEXT_PUBLIC_SITE_GOOGLE_REVIEW_COUNT (optional - omit if no reviews)
 */

const BASE_URL = 'https://goodhandsstudio.com'

export const siteConfig = {
  name: 'Good Hands',
  tagline: 'Your Personal Beauty Concierge in Lisbon',
  url: BASE_URL,

  // NAP - must match Google Business Profile exactly when verified
  contact: {
    email: 'concierge@goodhandsstudio.com',
    phone: process.env.NEXT_PUBLIC_SITE_PHONE || '',
    // Phone display: show only when set, otherwise hide
    hasPhone: !!process.env.NEXT_PUBLIC_SITE_PHONE,
  },

  address: {
    street: process.env.NEXT_PUBLIC_SITE_ADDRESS_STREET || '',
    locality: process.env.NEXT_PUBLIC_SITE_ADDRESS_LOCALITY || 'Lisbon',
    region: process.env.NEXT_PUBLIC_SITE_ADDRESS_REGION || 'Lisbon',
    postalCode: process.env.NEXT_PUBLIC_SITE_ADDRESS_POSTAL || '',
    country: 'PT',
  },

  // Only output aggregateRating in schema when you have real Google reviews
  reviews: {
    count: process.env.NEXT_PUBLIC_SITE_GOOGLE_REVIEW_COUNT
      ? parseInt(process.env.NEXT_PUBLIC_SITE_GOOGLE_REVIEW_COUNT, 10)
      : 0,
    averageRating: 4.9,
  },

  // Assets - use existing files
  assets: {
    logo: `${BASE_URL}/brand-assets/logo/logo-icon.svg`,
    heroImage: `${BASE_URL}/brand-images/hero-salon-interior.png`,
  },
} as const

export type SiteConfig = typeof siteConfig
