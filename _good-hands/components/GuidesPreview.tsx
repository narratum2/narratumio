'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const guides = [
  {
    title: 'Chiado',
    description: 'Historic elegance meets modern luxury',
    href: '/chiado',
    icon: '🏛️',
  },
  {
    title: 'Príncipe Real',
    description: 'Bohemian charm in the heart of the city',
    href: '/principe-real',
    icon: '🌳',
  },
  {
    title: 'Baixa',
    description: 'Grand boulevards and timeless style',
    href: '/baixa',
    icon: '🏛️',
  },
  {
    title: 'Avenida',
    description: 'Lisbon\'s premier shopping district',
    href: '/avenida',
    icon: '✨',
  },
  {
    title: 'Alfama',
    description: 'Ancient streets, authentic experiences',
    href: '/alfama',
    icon: '🎭',
  },
  {
    title: 'Belém',
    description: 'Riverside beauty and historic grandeur',
    href: '/belem',
    icon: '⚓',
  },
  {
    title: 'Sintra',
    description: 'Romantic escapes in the hills',
    href: '/sintra',
    icon: '🏰',
  },
  {
    title: 'Cascais',
    description: 'Coastal elegance by the sea',
    href: '/cascais',
    icon: '🌊',
  },
]

export default function GuidesPreview() {
  return (
    <section className="section-padding bg-shell">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Neighborhood Guides
          </h2>
          <p className="text-harbor text-lg max-w-2xl mx-auto">
            Discover beauty experiences across Lisbon\'s most distinctive neighborhoods
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                href={guide.href}
                className="group block bg-white rounded-lg p-6 hover:shadow-lg transition-all focus-visible-ring text-center"
              >
                <div className="text-4xl mb-3">{guide.icon}</div>
                <h3 className="font-serif text-lg mb-2 group-hover:text-gold transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-harbor">{guide.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/guides" className="btn-secondary">
            View All Neighborhood Guides
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

