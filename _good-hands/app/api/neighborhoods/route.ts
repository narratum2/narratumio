import { NextResponse } from 'next/server'

const neighborhoods = [
  {
    id: 'chiado',
    name: 'Chiado',
    slug: 'chiado',
    description: 'Historic upscale neighborhood in central Lisbon, known for luxury shopping, sophisticated cafes, and cultural attractions. One of the most elegant areas of the city.',
    characteristics: [
      'Upscale shopping district',
      'Historic architecture',
      'Cultural theaters and museums',
      'Luxury boutiques',
      'High-end restaurants',
    ],
    beautyScene: 'Premium salons and beauty professionals catering to discerning clientele. Known for cutting-edge hair styling and luxury treatments.',
    serviceCategories: ['hair', 'nails', 'skincare', 'makeup'],
    popularServices: ['Premium Hair Styling', 'Luxury Nail Care', 'Skincare Treatments', 'Professional Makeup'],
    atmosphere: 'Sophisticated and refined',
    priceRange: '€€€',
  },
  {
    id: 'principe-real',
    name: 'Principe Real',
    slug: 'principe-real',
    description: 'Trendy, upscale area with beautiful gardens, boutique shops, and a vibrant artistic scene. Popular with creative professionals and expats.',
    characteristics: [
      'Trendy boutiques',
      'Beautiful garden park',
      'LGBTQ+ friendly',
      'Artistic community',
      'Design shops',
    ],
    beautyScene: 'Modern, trend-forward beauty services. Known for creative hair color, artistic nail designs, and holistic wellness.',
    serviceCategories: ['hair', 'nails', 'skincare', 'makeup', 'wellness'],
    popularServices: ['Premium Hair Styling', 'Luxury Nail Care', 'Skincare Treatments', 'Wellness & Massage'],
    atmosphere: 'Creative and contemporary',
    priceRange: '€€€',
  },
  {
    id: 'alfama',
    name: 'Alfama',
    slug: 'alfama',
    description: 'The oldest district in Lisbon with narrow cobblestone streets, traditional Fado music, and authentic Portuguese character.',
    characteristics: [
      'Historic old town',
      'Cobblestone streets',
      'Fado music venues',
      'Traditional Portuguese culture',
      'Castle views',
    ],
    beautyScene: 'Authentic local salons with traditional Portuguese service. Perfect for tourists wanting a genuine local beauty experience.',
    serviceCategories: ['hair', 'makeup'],
    popularServices: ['Premium Hair Styling', 'Professional Makeup'],
    atmosphere: 'Traditional and authentic',
    priceRange: '€€',
  },
  {
    id: 'baixa',
    name: 'Baixa',
    slug: 'baixa',
    description: 'Central downtown Lisbon with grand 18th-century architecture, major shopping streets, and bustling commercial activity.',
    characteristics: [
      'Downtown center',
      'Pombaline architecture',
      'Main shopping streets',
      'Tourist hub',
      'Business district',
    ],
    beautyScene: 'Accessible beauty services with professional standards. Ideal for quick appointments between meetings or sightseeing.',
    serviceCategories: ['hair', 'nails'],
    popularServices: ['Premium Hair Styling', 'Luxury Nail Care'],
    atmosphere: 'Bustling and central',
    priceRange: '€€',
  },
  {
    id: 'avenida',
    name: 'Avenida da Liberdade',
    slug: 'avenida',
    description: 'Lisbon\'s main boulevard with luxury hotels, high-end fashion stores, and upscale services. The Champs-Élysées of Lisbon.',
    characteristics: [
      'Luxury boulevard',
      'Five-star hotels',
      'Designer boutiques',
      'High-end shopping',
      'Premium services',
    ],
    beautyScene: 'Ultra-luxury beauty services catering to international clientele and hotel guests. Premium products and exclusive treatments.',
    serviceCategories: ['hair', 'skincare', 'makeup', 'wellness'],
    popularServices: ['Premium Hair Styling', 'Skincare Treatments', 'Professional Makeup', 'Wellness & Massage'],
    atmosphere: 'Luxurious and international',
    priceRange: '€€€€',
  },
  {
    id: 'belem',
    name: 'Belem',
    slug: 'belem',
    description: 'Riverside area famous for UNESCO monuments, pastéis de nata, and cultural attractions. A must-visit for history and architecture.',
    characteristics: [
      'UNESCO World Heritage sites',
      'Riverside location',
      'Cultural monuments',
      'Tourist attractions',
      'Spacious and airy',
    ],
    beautyScene: 'Convenient beauty services for visitors exploring the area. Professional quality with flexible scheduling.',
    serviceCategories: ['hair', 'makeup'],
    popularServices: ['Premium Hair Styling', 'Professional Makeup'],
    atmosphere: 'Historic and scenic',
    priceRange: '€€',
  },
  {
    id: 'cascais',
    name: 'Cascais',
    slug: 'cascais',
    description: 'Coastal resort town 30km from Lisbon with beautiful beaches, marina, and luxury lifestyle. Popular summer destination.',
    characteristics: [
      'Beach resort',
      'Marina and yachts',
      'Golf courses',
      'Luxury villas',
      'International community',
    ],
    beautyScene: 'Resort-style beauty services with a focus on relaxation and vacation pampering. Beach-ready treatments and holiday glam.',
    serviceCategories: ['nails', 'skincare', 'wellness'],
    popularServices: ['Luxury Nail Care', 'Skincare Treatments', 'Wellness & Massage'],
    atmosphere: 'Relaxed and luxurious',
    priceRange: '€€€',
  },
  {
    id: 'sintra',
    name: 'Sintra',
    slug: 'sintra',
    description: 'Magical UNESCO town in the hills near Lisbon with fairy-tale palaces, lush forests, and romantic atmosphere.',
    characteristics: [
      'UNESCO World Heritage',
      'Romantic palaces',
      'Mountain scenery',
      'Natural beauty',
      'Mystical atmosphere',
    ],
    beautyScene: 'Boutique beauty services in a serene natural setting. Perfect for retreat-style experiences and special occasions.',
    serviceCategories: ['makeup', 'wellness'],
    popularServices: ['Professional Makeup', 'Wellness & Massage'],
    atmosphere: 'Magical and serene',
    priceRange: '€€€',
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  const category = searchParams.get('category')

  let result = [...neighborhoods]

  // Filter by specific neighborhood
  if (slug) {
    const neighborhood = result.find(n => n.slug === slug)
    if (!neighborhood) {
      return NextResponse.json(
        { error: 'Neighborhood not found' },
        { status: 404 }
      )
    }
    return NextResponse.json({
      success: true,
      neighborhood,
    })
  }

  // Filter by service category
  if (category) {
    result = result.filter(n => n.serviceCategories.includes(category))
  }

  return NextResponse.json({
    success: true,
    count: result.length,
    neighborhoods: result,
    meta: {
      description: 'Neighborhoods served by Good Hands beauty concierge in Lisbon, Portugal',
      totalNeighborhoods: neighborhoods.length,
      areaServed: 'Greater Lisbon Area, Portugal',
    },
  })
}

