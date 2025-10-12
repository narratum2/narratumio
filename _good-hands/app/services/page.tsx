'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { categories, getCategoryDisplayName } from '@/lib/categories'

const services = [
  {
    category: 'Hair Styling',
    slug: 'hair',
    services: [
      { name: 'Precision Cut', price: 'From €80', duration: '60 min' },
      { name: 'Color & Highlights', price: 'From €120', duration: '120 min' },
      { name: 'Balayage', price: 'From €180', duration: '180 min' },
      { name: 'Blowout & Styling', price: 'From €45', duration: '45 min' },
      { name: 'Treatment & Repair', price: 'From €60', duration: '60 min' },
    ],
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
  },
  {
    category: 'Nail Care',
    slug: 'nails',
    services: [
      { name: 'Classic Manicure', price: 'From €35', duration: '45 min' },
      { name: 'Gel Manicure', price: 'From €45', duration: '60 min' },
      { name: 'Luxury Pedicure', price: 'From €55', duration: '75 min' },
      { name: 'Nail Art', price: 'From €20', duration: '30 min' },
      { name: 'Extensions', price: 'From €70', duration: '90 min' },
    ],
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
  },
  {
    category: 'Skincare',
    slug: 'skincare',
    services: [
      { name: 'Signature Facial', price: 'From €95', duration: '75 min' },
      { name: 'Anti-Aging Treatment', price: 'From €140', duration: '90 min' },
      { name: 'Deep Cleanse', price: 'From €85', duration: '60 min' },
      { name: 'Microdermabrasion', price: 'From €120', duration: '60 min' },
      { name: 'LED Light Therapy', price: 'From €100', duration: '45 min' },
    ],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
  },
  {
    category: 'Makeup',
    slug: 'makeup',
    services: [
      { name: 'Event Makeup', price: 'From €70', duration: '45 min' },
      { name: 'Bridal Makeup', price: 'From €150', duration: '90 min' },
      { name: 'Makeup Lesson', price: 'From €120', duration: '90 min' },
      { name: 'Beauty Consultation', price: 'From €80', duration: '60 min' },
    ],
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
  },
  {
    category: 'Wellness',
    slug: 'wellness',
    services: [
      { name: 'Swedish Massage', price: 'From €90', duration: '60 min' },
      { name: 'Deep Tissue', price: 'From €100', duration: '75 min' },
      { name: 'Aromatherapy', price: 'From €95', duration: '60 min' },
      { name: 'Hot Stone', price: 'From €110', duration: '90 min' },
    ],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
  },
]

function ServicesContent() {
  const searchParams = useSearchParams()
  const categoryFilter = searchParams.get('category')

  // Filter services based on category query parameter
  const filteredServices = categoryFilter
    ? services.filter((service) => service.slug === categoryFilter)
    : services

  const pageTitle = categoryFilter
    ? `${getCategoryDisplayName(categoryFilter)} Services`
    : 'Our Services'

  const pageDescription = categoryFilter
    ? `Explore our premium ${getCategoryDisplayName(categoryFilter).toLowerCase()} services in Lisbon`
    : 'Premium beauty experiences curated for discerning clients'

  return (
    <div className="pt-20">
      {/* Breadcrumbs */}
      <nav className="bg-white border-b border-harbor/10 py-3">
        <div className="container-custom">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-harbor hover:text-gold transition-colors focus-visible-ring">
                Home
              </Link>
            </li>
            <li className="text-harbor/50">→</li>
            <li>
              <Link href="/services" className="text-harbor hover:text-gold transition-colors focus-visible-ring">
                Services
              </Link>
            </li>
            {categoryFilter && (
              <>
                <li className="text-harbor/50">→</li>
                <li className="text-ink font-medium">
                  {getCategoryDisplayName(categoryFilter)}
                </li>
              </>
            )}
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=2000&q=80"
            alt="Beauty services"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">{pageTitle}</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            {pageDescription}
          </p>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="bg-white border-b border-harbor/10 sticky top-20 z-40 shadow-sm">
        <div className="container-custom py-6">
          <h3 className="text-sm uppercase tracking-wider text-harbor font-medium mb-4 text-center">
            Browse by Category
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/services"
              className={`px-6 py-2 rounded-full font-medium transition-all focus-visible-ring ${
                !categoryFilter
                  ? 'bg-ink text-white'
                  : 'bg-porcelain text-harbor hover:bg-shell'
              }`}
            >
              All Services
            </Link>
            {categories
              .filter((cat) => cat.slug !== 'weddings') // Weddings is premium, separate page
              .map((category) => (
                <Link
                  key={category.slug}
                  href={`/services?category=${category.slug}`}
                  className={`px-6 py-2 rounded-full font-medium transition-all focus-visible-ring ${
                    categoryFilter === category.slug
                      ? 'bg-ink text-white'
                      : 'bg-porcelain text-harbor hover:bg-shell'
                  }`}
                >
                  {category.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* No results message */}
      {filteredServices.length === 0 && (
        <section className="section-padding bg-white text-center">
          <div className="container-custom max-w-3xl">
            <div className="mb-8">
              <svg
                className="w-24 h-24 mx-auto text-harbor/30 mb-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">No services found</h2>
              <p className="text-harbor text-lg mb-8">
                We couldn't find any services matching your criteria.
              </p>
            </div>
            
            <div className="bg-shell rounded-lg p-8">
              <h3 className="text-xl font-serif mb-4">Try browsing our popular categories:</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {categories
                  .filter((cat) => cat.slug !== 'weddings')
                  .map((category) => (
                    <Link
                      key={category.slug}
                      href={`/services?category=${category.slug}`}
                      className="px-6 py-3 bg-white text-ink rounded-full font-medium hover:bg-ink hover:text-white transition-all focus-visible-ring shadow-sm"
                    >
                      {category.name}
                    </Link>
                  ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/#booking"
                  className="inline-block text-gold hover:text-gold-dark font-medium transition-colors"
                >
                  Or tell us what you're looking for →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Grid */}
      {filteredServices.map((category, idx) => (
        <section
          key={category.category}
          id={category.slug}
          className={`section-padding ${idx % 2 === 0 ? 'bg-white' : 'bg-shell'}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={idx % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src={category.image}
                    alt={`${category.category} services`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className={idx % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                <h2 className="text-4xl font-serif mb-8">{category.category}</h2>
                <div className="space-y-4">
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="flex justify-between items-start border-b border-harbor/10 pb-4"
                    >
                      <div>
                        <h3 className="font-medium text-lg">{service.name}</h3>
                        <p className="text-sm text-harbor">{service.duration}</p>
                      </div>
                      <span className="text-gold font-medium whitespace-nowrap ml-4">
                        {service.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to Book Your Experience?
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect service and professional for your needs
          </p>
          <Link href="/#booking" className="btn-primary">
            Book Now
          </Link>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Beauty Services',
            provider: {
              '@type': 'Organization',
              name: 'Good Hands',
            },
            areaServed: {
              '@type': 'City',
              name: 'Lisbon',
              '@id': 'https://www.wikidata.org/wiki/Q597',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Beauty Services',
              itemListElement: filteredServices.flatMap((cat) =>
                cat.services.map((service) => ({
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: service.name,
                    category: cat.category,
                    provider: {
                      '@type': 'Organization',
                      name: 'Good Hands',
                    },
                  },
                  priceSpecification: {
                    '@type': 'PriceSpecification',
                    priceCurrency: 'EUR',
                  },
                }))
              ),
            },
          }),
        }}
      />
    </div>
  )
}

export default function ServicesPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gold border-r-transparent"></div>
            <p className="mt-4 text-harbor">Loading services...</p>
          </div>
        </div>
      }
    >
      <ServicesContent />
    </Suspense>
  )
}
