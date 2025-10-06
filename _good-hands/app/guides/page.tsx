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
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e1b5a?w=800&q=80',
    highlights: ['Luxury salons', 'Historic spas', 'Art galleries'],
  },
  {
    name: 'Príncipe Real',
    slug: 'principe-real',
    description: 'Bohemian charm and cutting-edge style in the heart of the city',
    image: 'https://images.unsplash.com/photo-1555881770-e7c1b5e6d4d2?w=800&q=80',
    highlights: ['Boutique studios', 'Garden cafés', 'Design shops'],
  },
  {
    name: 'Baixa',
    slug: 'baixa',
    description: 'Grand boulevards and timeless beauty in downtown Lisbon',
    image: 'https://images.unsplash.com/photo-1562774683-6d7deec28895?w=800&q=80',
    highlights: ['Classic salons', 'Shopping districts', 'Historic venues'],
  },
  {
    name: 'Avenida da Liberdade',
    slug: 'avenida',
    description: 'Lisbon\'s Champs-Élysées with premium beauty destinations',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80',
    highlights: ['High-end spas', 'Luxury brands', 'Tree-lined avenues'],
  },
  {
    name: 'Alfama',
    slug: 'alfama',
    description: 'Ancient streets and authentic experiences in Lisbon\'s oldest quarter',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80',
    highlights: ['Traditional treatments', 'Fado music', 'Hidden gems'],
  },
  {
    name: 'Belém',
    slug: 'belem',
    description: 'Riverside beauty and historic grandeur by the Tagus',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80',
    highlights: ['Waterfront spas', 'Cultural sites', 'Pastéis de Belém'],
  },
  {
    name: 'Sintra',
    slug: 'sintra',
    description: 'Romantic escapes and wellness retreats in the enchanted hills',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
    highlights: ['Mountain retreats', 'Palace views', 'Natural beauty'],
  },
  {
    name: 'Cascais',
    slug: 'cascais',
    description: 'Coastal elegance and resort-style pampering by the Atlantic',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
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
            src="https://images.unsplash.com/photo-1585208798174-6cedd86e1b5a?w=2000&q=80"
            alt="Lisbon neighborhoods"
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

