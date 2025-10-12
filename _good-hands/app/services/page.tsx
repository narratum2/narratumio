'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Search, X } from 'lucide-react'
import CuratedProducts from '@/components/CuratedProducts'

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
      { name: 'Photoshoot Hair Styling', price: 'From €100', duration: '75 min' },
    ],
    image: '/brand-images/category-hair-styling.png',
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
    image: '/brand-images/salon-detail.png',
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
    image: '/brand-images/service-facial-treatment.png',
  },
  {
    category: 'Makeup',
    slug: 'makeup',
    services: [
      { name: 'Event Makeup', price: 'From €70', duration: '45 min' },
      { name: 'Bridal Makeup', price: 'From €150', duration: '90 min' },
      { name: 'Makeup Lesson', price: 'From €120', duration: '90 min' },
      { name: 'Beauty Consultation', price: 'From €80', duration: '60 min' },
      { name: 'Photoshoot & Editorial Makeup', price: 'From €150', duration: '60 min' },
    ],
    image: '/brand-images/service-makeup-application.png',
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
    image: '/brand-images/category-wellness.png',
  },
]

export default function ServicesPage() {
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredServices, setFilteredServices] = useState(services)

  // Initialize from URL parameters
  useEffect(() => {
    const q = searchParams.get('q') || ''
    const category = searchParams.get('category') || 'all'
    setSearchTerm(q)
    setSelectedCategory(category)
  }, [searchParams])

  // Filter services based on search and category
  useEffect(() => {
    let filtered = services

    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(cat => cat.slug === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      
      // List of location terms to ignore (since all services are in Lisbon)
      const locationTerms = ['lisbon', 'lisboa', 'portugal', 'porto', 'cascais', 'sintra']
      const isLocationSearch = locationTerms.some(loc => term.includes(loc))
      
      // If searching for location only, show all results
      // Otherwise filter by category or service name
      if (!isLocationSearch) {
        filtered = filtered.filter(cat => 
          cat.category.toLowerCase().includes(term) ||
          cat.services.some(service => service.name.toLowerCase().includes(term))
        )
      }
    }

    setFilteredServices(filtered)
  }, [searchTerm, selectedCategory])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    window.history.pushState({}, '', '/services')
  }
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/brand-images/salon-detail.png"
            alt="Beauty services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Premium beauty experiences with expert concierge matching
          </p>
          <p className="text-lg text-gold mt-2">
            All prices include concierge service & coordination
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-harbor" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-3 border border-harbor/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-harbor/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white md:w-48"
              >
                <option value="all">All Categories</option>
                <option value="hair">Hair Styling</option>
                <option value="nails">Nail Care</option>
                <option value="skincare">Skincare</option>
                <option value="makeup">Makeup</option>
                <option value="wellness">Wellness</option>
              </select>

              {/* Clear Filters */}
              {(searchTerm || selectedCategory !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-3 text-harbor hover:text-ink transition-colors flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Clear
                </button>
              )}
            </div>

            {/* Active Filters Display */}
            {(searchTerm || selectedCategory !== 'all') && (
              <div className="mt-4 flex flex-wrap gap-2">
                {searchTerm && (
                  <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm">
                    Search: "{searchTerm}"
                  </span>
                )}
                {selectedCategory !== 'all' && (
                  <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm">
                    Category: {services.find(s => s.slug === selectedCategory)?.category}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      {filteredServices.length === 0 ? (
        <section className="section-padding bg-white">
          <div className="container-custom text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-3xl font-serif mb-4">No Services Found</h2>
            <p className="text-harbor mb-6">
              We couldn't find any services matching your search. Try different keywords or browse all services.
            </p>
            <button onClick={clearFilters} className="btn-gold">
              Discover All Services
            </button>
          </div>
        </section>
      ) : (
        filteredServices.map((category, idx) => (
        <section
          key={category.category}
          className={`section-padding ${idx % 2 === 0 ? 'bg-white' : 'bg-shell'}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={idx % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.category}
                    fill
                    className="object-cover"
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
                        <p className="text-xs text-gold mt-1">Includes concierge service</p>
                      </div>
                      <span className="text-gold font-medium whitespace-nowrap ml-4">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )))}

      {/* Photoshoot Services Highlight */}
      <section className="section-padding bg-gradient-to-br from-gold/5 via-shell to-porcelain">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-gold mb-4">
              <span className="text-2xl">📸</span>
              <span className="text-sm uppercase tracking-wider font-medium">Special Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Professional Photoshoot Beauty Services
            </h2>
            <p className="text-xl text-harbor max-w-2xl mx-auto">
              Organized beauty sessions for brand campaigns, editorial content, influencer shoots, and personal branding
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-serif mb-4">For Content Creators & Influencers</h3>
              <p className="text-harbor mb-4">
                Our vetted makeup artists and hairstylists specialize in photo-ready looks that translate beautifully on camera.
                Perfect for Instagram, TikTok, YouTube, and editorial shoots in Lisbon's stunning design hotels and iconic locations.
              </p>
              <ul className="space-y-2 text-sm text-harbor">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Camera-ready hair and makeup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>On-location services at design hotels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Touch-ups throughout your shoot</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Coordination with photographers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-serif mb-4">For Brands & Editorial</h3>
              <p className="text-harbor mb-4">
                Professional beauty services for brand campaigns, marketing materials, e-commerce product photography with models,
                and hotel/hospitality brand imagery.
              </p>
              <ul className="space-y-2 text-sm text-harbor">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Editorial fashion & beauty content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Brand campaigns & marketing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Professional headshots & personal branding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Full logistics and coordination</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-serif mb-4">How It Works</h3>
            <p className="text-harbor mb-6">
              Contact our concierge team to coordinate hair, makeup, styling, and photography services for your shoot.
              We handle all logistics and professional coordination so you can focus on creating amazing content.
            </p>
            <Link href="/#booking" className="btn-gold inline-block">
              Book Your Photoshoot Session
            </Link>
          </div>
        </div>
      </section>

      {/* Curated Products */}
      <CuratedProducts />

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to Reserve Your Session?
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            We'll match you with the perfect professional for your needs
          </p>
          <Link href="/#booking" className="btn-gold">
            Reserve Your Experience
          </Link>
        </div>
      </section>

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
            areaServed: 'Lisbon, Portugal',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Beauty Services',
              itemListElement: services.flatMap((cat) =>
                cat.services.map((service) => ({
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: service.name,
                    category: cat.category,
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

