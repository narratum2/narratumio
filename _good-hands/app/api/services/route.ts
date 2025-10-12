import { NextResponse } from 'next/server'

// Services data for AI agents and external queries
const services = [
  {
    id: 'premium-hair-styling',
    name: 'Premium Hair Styling',
    category: 'hair',
    description: 'Expert hair colorists and stylists in Lisbon. We match you with professionals based on your hair type, desired style, and preferences.',
    price: 'From €105',
    basePrice: 105,
    duration: '90 min',
    includedServices: ['Consultation', 'Styling', 'Concierge coordination'],
    neighborhoods: ['Chiado', 'Principe Real', 'Avenida', 'Alfama', 'Belem'],
  },
  {
    id: 'luxury-nail-care',
    name: 'Luxury Nail Care',
    category: 'nails',
    description: 'Premium manicure and pedicure services in Lisbon. Vetted nail technicians using high-quality products and techniques.',
    price: 'From €65',
    basePrice: 65,
    duration: '60 min',
    includedServices: ['Manicure or Pedicure', 'Polish application', 'Concierge coordination'],
    neighborhoods: ['Chiado', 'Principe Real', 'Baixa', 'Cascais'],
  },
  {
    id: 'skincare-treatments',
    name: 'Skincare Treatments',
    category: 'skincare',
    description: 'Professional facial treatments and skincare consultations in Lisbon. Customized to your skin type and concerns.',
    price: 'From €95',
    basePrice: 95,
    duration: '75 min',
    includedServices: ['Skin analysis', 'Facial treatment', 'Product recommendations', 'Concierge coordination'],
    neighborhoods: ['Chiado', 'Principe Real', 'Avenida', 'Cascais'],
  },
  {
    id: 'professional-makeup',
    name: 'Professional Makeup',
    category: 'makeup',
    description: 'Expert makeup artists in Lisbon for special events, weddings, photoshoots, or everyday looks.',
    price: 'From €85',
    basePrice: 85,
    duration: '45 min',
    includedServices: ['Makeup application', 'Style consultation', 'Concierge coordination'],
    neighborhoods: ['Chiado', 'Principe Real', 'Avenida', 'Alfama', 'Belem', 'Sintra'],
  },
  {
    id: 'wellness-massage',
    name: 'Wellness & Massage',
    category: 'wellness',
    description: 'Relaxation and therapeutic massage services in Lisbon. Certified massage therapists for stress relief and body wellness.',
    price: 'From €80',
    basePrice: 80,
    duration: '60 min',
    includedServices: ['Massage therapy', 'Aromatherapy', 'Concierge coordination'],
    neighborhoods: ['Principe Real', 'Avenida', 'Cascais', 'Sintra'],
  },
]

const neighborhoods = [
  {
    id: 'chiado',
    name: 'Chiado',
    description: 'Historic upscale neighborhood known for luxury shopping and sophisticated culture',
    serviceCategories: ['hair', 'nails', 'skincare', 'makeup'],
  },
  {
    id: 'principe-real',
    name: 'Principe Real',
    description: 'Trendy, upscale area with boutique shops and artistic vibe',
    serviceCategories: ['hair', 'nails', 'skincare', 'makeup', 'wellness'],
  },
  {
    id: 'alfama',
    name: 'Alfama',
    description: 'Historic old town with traditional charm and cobblestone streets',
    serviceCategories: ['hair', 'makeup'],
  },
  {
    id: 'baixa',
    name: 'Baixa',
    description: 'Central downtown district with grand architecture',
    serviceCategories: ['hair', 'nails'],
  },
  {
    id: 'avenida',
    name: 'Avenida',
    description: 'Main avenue with luxury hotels and high-end services',
    serviceCategories: ['hair', 'skincare', 'makeup', 'wellness'],
  },
  {
    id: 'belem',
    name: 'Belem',
    description: 'Riverside area known for monuments and cultural attractions',
    serviceCategories: ['hair', 'makeup'],
  },
  {
    id: 'cascais',
    name: 'Cascais',
    description: 'Coastal resort town near Lisbon with beach and luxury living',
    serviceCategories: ['nails', 'skincare', 'wellness'],
  },
  {
    id: 'sintra',
    name: 'Sintra',
    description: 'UNESCO World Heritage town with palaces and natural beauty',
    serviceCategories: ['makeup', 'wellness'],
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const neighborhood = searchParams.get('neighborhood')
  const maxPrice = searchParams.get('maxPrice')

  let filteredServices = [...services]

  // Filter by category
  if (category && category !== 'all') {
    filteredServices = filteredServices.filter(s => s.category === category)
  }

  // Filter by neighborhood
  if (neighborhood) {
    filteredServices = filteredServices.filter(s =>
      s.neighborhoods.some(n => n.toLowerCase() === neighborhood.toLowerCase())
    )
  }

  // Filter by max price
  if (maxPrice) {
    const max = parseInt(maxPrice)
    filteredServices = filteredServices.filter(s => s.basePrice <= max)
  }

  return NextResponse.json({
    success: true,
    count: filteredServices.length,
    services: filteredServices,
    neighborhoods: neighborhoods,
    categories: ['hair', 'nails', 'skincare', 'makeup', 'wellness'],
    meta: {
      description: 'Good Hands beauty concierge services in Lisbon, Portugal',
      totalServices: services.length,
      conciergeIncluded: true,
      areaServed: 'Lisbon, Portugal',
    },
  })
}

export async function POST() {
  return NextResponse.json(
    { error: 'Method not allowed. Use GET to retrieve services.' },
    { status: 405 }
  )
}

