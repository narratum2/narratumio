import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Journal — Good Hands',
  description: 'Beauty insights, Lisbon city guides, expert advice, and editorial stories from the Good Hands team.',
}

const articles = [
  {
    title: 'Global Beauty Exploration: Why Local Matters',
    excerpt: 'The case for seeking authentic beauty experiences while traveling and how Good Hands is expanding worldwide.',
    image: '/brand-images/blog-global-beauty.png',
    date: 'October 12, 2025',
    category: 'Global Exploration',
    author: 'Good Hands Editorial Team',
    slug: 'global-beauty-exploration',
  },
  {
    title: 'Yucatan Wellness: Ancient Mayan Beauty Secrets',
    excerpt: 'Discovering holistic beauty practices in the Yucatan Peninsula, from cenote rituals to Mayan herbal medicine.',
    image: '/brand-images/blog-yucatan-wellness.png',
    date: 'October 11, 2025',
    category: 'Global Exploration',
    author: 'Isabella Torres',
    slug: 'yucatan-wellness-beauty',
  },
  {
    title: 'Mexico City Beauty Scene: Where Tradition Meets Innovation',
    excerpt: 'Exploring the vibrant beauty culture of CDMX, from pre-Hispanic rituals to cutting-edge aesthetics.',
    image: '/brand-images/blog-mexico-city.png',
    date: 'October 10, 2025',
    category: 'Global Exploration',
    author: 'Isabella Torres',
    slug: 'mexico-city-beauty-scene',
  },
  {
    title: 'Bridal Hair Trends 2026: What Lisbon Brides Are Choosing',
    excerpt: 'From modern updos to romantic waves, the hairstyles dominating Portuguese weddings.',
    image: '/brand-images/blog-bridal-hair.png',
    date: 'October 8, 2025',
    category: 'Weddings',
    author: 'Sofia Martins',
    slug: 'bridal-hair-trends-2026',
  },
  {
    title: 'Wellness Rituals: How Lisbon Lives Well',
    excerpt: 'The daily practices that keep Lisboetas balanced, beautiful, and centered.',
    image: '/brand-images/hero-wellness-scene.png',
    date: 'October 5, 2025',
    category: 'Wellness',
    author: 'Teresa Alves',
    slug: 'wellness-rituals-lisbon',
  },
  {
    title: 'The Art of Portuguese Beauty Rituals',
    excerpt: 'Discover centuries-old beauty traditions from Portugal that modern experts still swear by.',
    image: '/brand-images/service-makeup-application.png',
    date: 'October 1, 2025',
    category: 'Traditions',
    author: 'Maria Silva',
    slug: 'portuguese-beauty-rituals',
  },
  {
    title: 'Wedding Beauty Timeline: 6 Months to I Do',
    excerpt: 'A comprehensive guide to preparing your beauty routine for the big day.',
    image: '/brand-images/blog-wedding-timeline.png',
    date: 'September 28, 2025',
    category: 'Weddings',
    author: 'Sofia Martins',
    slug: 'wedding-beauty-timeline',
  },
  {
    title: "Lisbon\'s Hidden Beauty Gems",
    excerpt: "Under-the-radar salons and spas that locals treasure.",
    image: '/brand-images/hero-salon-interior.png',
    date: 'September 25, 2025',
    category: 'City Guide',
    author: 'Good Hands Team',
    slug: 'lisbon-hidden-gems',
  },
  {
    title: 'Summer Skincare in Mediterranean Climate',
    excerpt: 'How to adjust your skincare routine for Lisbon summers with expert tips from dermatologists.',
    image: '/brand-images/service-facial-treatment.png',
    date: 'September 20, 2025',
    category: 'Skincare',
    author: 'Dr. Ana Costa',
    slug: 'summer-skincare-mediterranean',
  },
  {
    title: 'The New Wave of Portuguese Nail Art',
    excerpt: 'Meet the artists bringing contemporary Portuguese design to nails.',
    image: '/brand-images/service-nail-art.png',
    date: 'September 15, 2025',
    category: 'Nail Art',
    author: 'Catarina Silva',
    slug: 'portuguese-nail-art',
  },
]

export default function JournalPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brand-images/blog-portuguese-beauty.png"
            alt="Good Hands Journal - beauty insights, Lisbon guides, and expert tips"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/50 to-ink/60" />
        </div>
        <div className="relative z-10 text-center text-white container-custom px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">The Journal</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto leading-relaxed">
            Beauty insights, city guides, and stories from around the world
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

