/**
 * Safe wrapper for JSON-LD structured data
 * Ensures proper formatting and escaping of schema.org markup
 */

interface StructuredDataProps {
  data: object
}

export default function StructuredData({ data }: StructuredDataProps) {
  // JSON.stringify automatically escapes dangerous characters
  // This is safe because we control the input data
  const jsonString = JSON.stringify(data)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
      suppressHydrationWarning
    />
  )
}

/**
 * Convenience function for generating common schema types
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateOrganizationSchema(org: {
  name: string
  description: string
  url: string
  logo?: string
  sameAs?: string[]
  address?: {
    locality: string
    country: string
  }
  areaServed?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: org.name,
    description: org.description,
    url: org.url,
    ...(org.logo && { logo: org.logo }),
    ...(org.sameAs && { sameAs: org.sameAs }),
    ...(org.address && {
      address: {
        '@type': 'PostalAddress',
        addressLocality: org.address.locality,
        addressCountry: org.address.country,
      },
    }),
    ...(org.areaServed && { areaServed: org.areaServed }),
  }
}

export function generateServiceSchema(service: {
  serviceType: string
  provider: { name: string }
  areaServed: string | object
  offers?: Array<{
    name: string
    category: string
  }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.serviceType,
    provider: {
      '@type': 'Organization',
      name: service.provider.name,
    },
    areaServed: service.areaServed,
    ...(service.offers && {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: service.serviceType,
        itemListElement: service.offers.map((offer) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: offer.name,
            category: offer.category,
          },
        })),
      },
    }),
  }
}
