'use client'

import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Sofia M.',
    location: 'Lisbon',
    rating: 5,
    text: 'Good Hands made my wedding day absolutely perfect. The coordination was flawless, and I felt like a queen.',
  },
  {
    name: 'James L.',
    location: 'London',
    rating: 5,
    text: 'Visiting Lisbon and needed a last-minute haircut. Good Hands connected me with an amazing stylist in Chiado. Professional and friendly!',
  },
  {
    name: 'Ana R.',
    location: 'Cascais',
    rating: 5,
    text: 'The corporate wellness package was exactly what our team needed. Highly recommend for any company event.',
  },
]

export default function ReviewsSnippet() {
  return (
    <section className="section-padding bg-ink text-porcelain">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Loved by Our Clients
          </h2>
          <p className="text-porcelain/70 text-lg">
            See what people are saying about their Good Hands experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-ink-light rounded-lg p-6"
            >
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-gold text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-porcelain/90 mb-4 leading-relaxed">
                "{review.text}"
              </p>
              <div className="border-t border-porcelain/10 pt-4">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-porcelain/60">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

