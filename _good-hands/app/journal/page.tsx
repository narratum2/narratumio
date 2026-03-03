import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Journal — Good Hands',
  description: 'Beauty insights, Lisbon city guides, expert advice, and editorial stories from the Good Hands team.',
  alternates: { canonical: 'https://goodhandsstudio.com/journal' },
}

function parseDate(dateStr: string): number {
  const d = new Date(dateStr)
  return isNaN(d.getTime()) ? 0 : d.getTime()
}

export default function JournalPage() {
  const allArticles = getAllArticles().sort((a, b) => parseDate(b.date) - parseDate(a.date))
  const [featured, ...rest] = allArticles
  return (
    <div className="pt-20">
      {/* Hero Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] min-h-[300px] overflow-hidden">
        <Image
          src="/brand-images/blog-portuguese-beauty.jpg"
          alt="Good Hands Journal - beauty insights, Lisbon guides, and expert tips"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Hero Content */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-4 text-ink">The Journal</h1>
          <p className="text-xl md:text-2xl text-harbor max-w-2xl mx-auto leading-relaxed">
            Beauty insights, city guides, and stories from around the world
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <Link
              href={`/journal/${featured.slug}`}
              className="group block max-w-5xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-96 md:h-auto rounded-lg overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-wider text-gold font-medium">
                      Featured
                    </span>
                    <span className="text-xs text-harbor">{featured.date}</span>
                  </div>
                  <h2 className="text-4xl font-serif mb-4 group-hover:text-gold transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-harbor text-lg mb-4">{featured.excerpt}</p>
                  <p className="text-sm text-harbor">By {featured.author}</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-3xl font-serif mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rest.map((article) => (
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

