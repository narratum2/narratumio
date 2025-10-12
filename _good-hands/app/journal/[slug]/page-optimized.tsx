import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArticle, getRelatedArticles, getAllArticles } from '@/lib/articles'
import ArticleContent from '@/components/ArticleContent'

interface PageProps {
  params: {
    slug: string
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticle(params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} — Good Hands Journal`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticle(params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(params.slug, 3)

  return (
    <article className="pt-20">
      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
      </div>

      {/* Article Header */}
      <header className="bg-white">
        <div className="container-custom max-w-4xl py-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs uppercase tracking-wider text-gold font-medium">
              {article.category}
            </span>
            <span className="text-sm text-harbor">{article.date}</span>
            {article.readTime && (
              <>
                <span className="text-harbor">•</span>
                <span className="text-sm text-harbor">{article.readTime}</span>
              </>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink mb-6 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-harbor mb-8 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-4 pt-8 border-t border-harbor/20">
            <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center text-white font-bold text-lg">
              {article.author.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-ink">{article.author}</p>
              <p className="text-sm text-harbor">{article.authorBio}</p>
            </div>
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-porcelain text-harbor text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Article Content */}
      <div className="bg-porcelain py-16">
        <div className="container-custom max-w-3xl">
          <ArticleContent content={article.content} />

          {/* CTA Box */}
          <div className="mt-12 p-8 bg-white rounded-lg border border-gold/20">
            <h3 className="text-2xl font-serif text-ink mb-3">
              Try These Treatments
            </h3>
            <p className="text-harbor mb-4">
              We work with professionals who actually know these techniques.
            </p>
            <Link
              href="/#booking"
              className="inline-block btn-gold"
            >
              Book a Consultation →
            </Link>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-white py-16">
          <div className="container-custom max-w-6xl">
            <h2 className="text-3xl font-serif mb-8">Continue Reading</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.slug}
                  href={`/journal/${relatedArticle.slug}`}
                  className="group block"
                >
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-gold font-medium block mb-2">
                    {relatedArticle.category}
                  </span>
                  <h3 className="text-xl font-serif group-hover:text-gold transition-colors">
                    {relatedArticle.title}
                  </h3>
                  {relatedArticle.readTime && (
                    <span className="text-sm text-harbor mt-1 block">
                      {relatedArticle.readTime}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-ink text-white py-16">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Ready to Experience Lisbon's Beauty Scene?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let us be your guide to the city's best beauty professionals
          </p>
          <Link 
            href="/#booking" 
            className="btn-primary bg-gold hover:bg-gold/90 text-ink font-semibold"
          >
            Book Your Experience
          </Link>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.excerpt,
            image: article.image,
            datePublished: article.date,
            author: {
              '@type': 'Person',
              name: article.author,
              description: article.authorBio,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Good Hands',
              logo: {
                '@type': 'ImageObject',
                url: '/brand-assets/logo/logo-primary.svg',
              },
            },
          }),
        }}
      />
    </article>
  )
}

// Generate static pages for all articles at build time
export function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: article.slug,
  }))
}

