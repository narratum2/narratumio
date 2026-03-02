/**
 * Builds the organization/BeautySalon schema.org JSON-LD for layout.
 * Uses siteConfig for NAP consistency with Google Business Profile.
 */

import { siteConfig } from './site-config'

export function getOrganizationSchema() {
  const { contact, address, reviews, assets } = siteConfig

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    '@id': 'https://goodhandsstudio.com/#organization',
    name: 'Good Hands',
    alternateName: ['Good Hands Lisbon', 'Good Hands Beauty Concierge', 'Good Hands Portugal'],
    description:
      'Premier luxury beauty concierge service in Lisbon. We match discerning clients with personally vetted hair stylists, spa therapists, makeup artists, and beauty professionals. We eliminate the trial-and-error of finding quality beauty services by providing expert curation, personalized matching, and white-glove booking coordination. Trusted by Four Seasons, Tivoli, and luxury hotels since 2024.',
    url: 'https://goodhandsstudio.com',
    logo: assets.logo,
    image: assets.heroImage,
    email: contact.email,
    priceRange: '€€€',
    sameAs: [
      'https://instagram.com/goodhands',
      'https://facebook.com/goodhands',
      'https://linkedin.com/company/goodhands',
    ],
    address: {
      '@type': 'PostalAddress',
      ...(address.street && { streetAddress: address.street }),
      addressLocality: address.locality,
      addressRegion: address.region,
      ...(address.postalCode && { postalCode: address.postalCode }),
      addressCountry: address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '38.7223',
      longitude: '-9.1393',
    },
    areaServed: [
      { '@type': 'City', name: 'Lisbon', '@id': 'https://en.wikipedia.org/wiki/Lisbon' },
      { '@type': 'Neighborhood', name: 'Chiado' },
      { '@type': 'Neighborhood', name: 'Príncipe Real' },
      { '@type': 'Neighborhood', name: 'Alfama' },
      { '@type': 'Neighborhood', name: 'Belém' },
      { '@type': 'Neighborhood', name: 'Baixa' },
      { '@type': 'Neighborhood', name: 'Avenida da Liberdade' },
      { '@type': 'City', name: 'Cascais' },
      { '@type': 'City', name: 'Sintra' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Beauty Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Premium Hair Styling',
            description: 'Expert hair colorists and stylists matched to your style preferences',
            serviceType: 'Hair Styling & Coloring',
          },
          price: '105.00',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Spa Treatments',
            description: 'Curated massage and facial treatments',
            serviceType: 'Spa & Wellness',
          },
          price: '95.00',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Professional Makeup',
            description: 'Special occasion and bridal makeup artists',
            serviceType: 'Makeup Artistry',
          },
          price: '85.00',
          priceCurrency: 'EUR',
        },
      ],
    },
    knowsAbout: [
      'Beauty Services',
      'Hair Styling',
      'Spa Treatments',
      'Makeup Artistry',
      'Concierge Services',
      'Luxury Hospitality',
      'Lisbon Tourism',
    ],
    slogan: 'Your Personal Beauty Concierge in Lisbon',
  }

  if (contact.hasPhone && contact.phone) {
    schema.telephone = contact.phone
  }

  if (reviews.count > 0) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: String(reviews.averageRating),
      reviewCount: String(reviews.count),
      bestRating: '5',
      worstRating: '1',
    }
  }

  return schema
}
