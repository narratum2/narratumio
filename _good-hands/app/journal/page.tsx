import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Journal — Good Hands',
  description: 'Beauty insights, Lisbon city guides, expert advice, and editorial stories from the Good Hands team.',
}

const articles = [
  {
    title: 'The Art of Portuguese Beauty Rituals',
    excerpt: 'Discover centuries-old beauty traditions from Portugal that modern experts still swear by. From olive oil treatments to rose water tonics.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
    date: 'October 1, 2025',
    category: 'Traditions',
    author: 'Maria Silva',
    slug: 'portuguese-beauty-rituals',
  },
  {
    title: 'Wedding Beauty Timeline: 6 Months to I Do',
    excerpt: 'A comprehensive guide to preparing your beauty routine for the big day, from skin prep to finding the perfect hairstyle.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
    date: 'September 28, 2025',
    category: 'Weddings',
    author: 'Sofia Martins',
    slug: 'wedding-beauty-timeline',
  },
  {
    title: "Lisbon\'s Hidden Beauty Gems",
    excerpt: "Our editors share their favorite under-the-radar salons and spas across the city that locals don\'t want you to know about.",
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    date: 'September 25, 2025',
    category: 'City Guide',
    author: 'Good Hands Team',
    slug: 'lisbon-hidden-gems',
  },
  {
    title: 'Summer Skincare in Mediterranean Climate',
    excerpt: 'How to adjust your skincare routine for Lisbon summers. Expert tips from our favorite dermatologists and estheticians.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    date: 'September 20, 2025',
    category: 'Skincare',
    author: 'Dr. Ana Costa',
    slug: 'summer-skincare-mediterranean',
  },
  {
    title: 'The New Wave of Portuguese Nail Art',
    excerpt: 'Meet the artists bringing Portuguese azulejo tiles and traditional motifs to modern nail design.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    date: 'September 15, 2025',
    category: 'Nails',
    author: 'Beatriz Santos',
    slug: 'portuguese-nail-art',
  },
  {
    title: 'Finding Your Signature Scent in Lisbon',
    excerpt: 'A guide to the city\'s best perfumeries and fragrance consultants for creating a custom scent.',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
    date: 'September 10, 2025',
    category: 'Fragrance',
    author: 'Maria Silva',
    slug: 'signature-scent-lisbon',
  },
]

export default function JournalPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=2000&q=80"
            alt="Journal"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">The Journal</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Beauty insights, city guides, and stories from Lisbon
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Link
            href={`/journal/${articles[0].slug}`}
            className="group block max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-96 md:h-auto rounded-lg overflow-hidden">
                <Image
                  src={articles[0].image}
                  alt={articles[0].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs uppercase tracking-wider text-gold font-medium">
                    Featured
                  </span>
                  <span className="text-xs text-harbor">{articles[0].date}</span>
                </div>
                <h2 className="text-4xl font-serif mb-4 group-hover:text-gold transition-colors">
                  {articles[0].title}
                </h2>
                <p className="text-harbor text-lg mb-4">{articles[0].excerpt}</p>
                <p className="text-sm text-harbor">By {articles[0].author}</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-3xl font-serif mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="group block bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs uppercase tracking-wider text-gold font-medium">
                      {article.category}
                    </span>
                    <span className="text-xs text-harbor">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-serif mb-2 group-hover:text-gold transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-harbor text-sm mb-3">{article.excerpt}</p>
                  <p className="text-xs text-harbor">By {article.author}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

