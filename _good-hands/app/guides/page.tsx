import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Neighborhood Guides — Good Hands',
  description: 'Discover beauty experiences across Lisbon\'s most distinctive neighborhoods, from historic Chiado to coastal Cascais.',
}

const neighborhoods = [
  {
    name: 'Chiado',
    slug: 'chiado',
    description: 'Historic elegance meets modern luxury in Lisbon\'s most refined district',
    image: '/brand-images/hero-salon-interior.png',
    highlights: ['Luxury salons', 'Historic spas', 'Art galleries'],
  },
  {
    name: 'Príncipe Real',
    slug: 'principe-real',
    description: 'Bohemian charm and cutting-edge style in the heart of the city',
    image: '/brand-images/category-hair-styling.png',
    highlights: ['Boutique studios', 'Garden cafés', 'Design shops'],
  },
  {
    name: 'Baixa',
    slug: 'baixa',
    description: 'Grand boulevards and timeless beauty in downtown Lisbon',
    image: '/brand-images/blog-lisbon-guide.png',
    highlights: ['Classic salons', 'Shopping districts', 'Historic venues'],
  },
  {
    name: 'Avenida da Liberdade',
    slug: 'avenida',
    description: 'Lisbon\'s Champs-Élysées with premium beauty destinations',
    image: '/brand-images/salon-detail.png',
    highlights: ['High-end spas', 'Luxury brands', 'Tree-lined avenues'],
  },
  {
    name: 'Alfama',
    slug: 'alfama',
    description: 'Ancient streets and authentic experiences in Lisbon\'s oldest quarter',
    image: '/brand-images/beauty-moment.png',
    highlights: ['Traditional treatments', 'Fado music', 'Hidden gems'],
  },
  {
    name: 'Belém',
    slug: 'belem',
    description: 'Riverside beauty and historic grandeur by the Tagus',
    image: '/brand-images/category-wellness.png',
    highlights: ['Waterfront spas', 'Cultural sites', 'Pastéis de Belém'],
  },
  {
    name: 'Sintra',
    slug: 'sintra',
    description: 'Romantic escapes and wellness retreats in the enchanted hills',
    image: '/brand-images/experience-wellness-retreat.png',
    highlights: ['Mountain retreats', 'Palace views', 'Natural beauty'],
  },
  {
    name: 'Cascais',
    slug: 'cascais',
    description: 'Coastal elegance and resort-style pampering by the Atlantic',
    image: '/brand-images/category-skincare.png',
    highlights: ['Beach clubs', 'Marina life', 'Seafood dining'],
  },
]

export default function GuidesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/brand-images/blog-lisbon-guide.png"
            alt="Lisbon neighborhood beauty guides - discover the best areas for luxury services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Neighborhood Guides</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Discover beauty across Lisbon\'s most distinctive districts
          </p>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoods.map((neighborhood) => (
              <Link
                key={neighborhood.slug}
                href={`/${neighborhood.slug}`}
                className="group block bg-shell rounded-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-2xl font-serif mb-1">{neighborhood.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-harbor text-sm mb-3">{neighborhood.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-2 py-1 bg-gold/10 text-gold rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Let our beauty concierge help you find the perfect neighborhood and service
          </p>
          <Link href="/#booking" className="btn-primary">
            Get Personalized Recommendations
          </Link>
        </div>
      </section>
    </div>
  )
}

