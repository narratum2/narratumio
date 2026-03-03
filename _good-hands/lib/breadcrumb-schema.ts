interface BreadcrumbItem {
  name: string
  url: string
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function getLocalBusinessSchema(neighborhood: {
  name: string
  slug: string
  description: string
  lat: string
  lng: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://goodhandsstudio.com/${neighborhood.slug}#localbusiness`,
    name: `Good Hands — ${neighborhood.name}`,
    description: neighborhood.description,
    url: `https://goodhandsstudio.com/${neighborhood.slug}`,
    parentOrganization: {
      '@type': 'BeautySalon',
      '@id': 'https://goodhandsstudio.com/#organization',
      name: 'Good Hands',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: neighborhood.lat,
      longitude: neighborhood.lng,
    },
    areaServed: {
      '@type': 'Neighborhood',
      name: neighborhood.name,
      containedInPlace: {
        '@type': 'City',
        name: 'Lisbon',
      },
    },
    priceRange: '€€€',
  }
}
