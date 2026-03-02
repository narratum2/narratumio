'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { getAllArticles } from '@/lib/articles'

function parseDate(dateStr: string): number {
  const d = new Date(dateStr)
  return isNaN(d.getTime()) ? 0 : d.getTime()
}

export default function JournalPreview() {
  const articles = getAllArticles()
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
    .slice(0, 3)
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              From the Journal
            </h2>
            <p className="text-harbor text-lg">
              Beauty insights, city guides, and expert advice
            </p>
          </div>
          <Link
            href="/journal"
            className="hidden md:block text-gold hover:text-gold-dark transition-colors focus-visible-ring"
          >
            View All Articles →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/journal/${article.slug}`}
                className="group block focus-visible-ring"
              >
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs uppercase tracking-wider text-gold font-medium">
                    {article.category}
                  </span>
                  <span className="text-xs text-harbor">{article.date}</span>
                </div>
                <h3 className="text-xl font-serif mb-2 group-hover:text-gold transition-colors">
                  {article.title}
                </h3>
                <p className="text-harbor text-sm">{article.excerpt}</p>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 md:hidden"
        >
          <Link href="/journal" className="btn-secondary">
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

