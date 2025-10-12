'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StructuredData, { generateFAQSchema } from './StructuredData'

const faqs = [
  {
    question: 'How does Good Hands work?',
    answer: 'Good Hands is your personal beauty concierge. Simply tell us what you need, and we\'ll match you with the perfect professionals in Lisbon\'s best neighborhoods. We handle bookings, recommendations, and ensure you get white-glove service.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve all major Lisbon neighborhoods including Chiado, Príncipe Real, Baixa, Avenida da Liberdade, Alfama, and Belém. We also offer services in Sintra and Cascais for destination experiences.',
  },
  {
    question: 'How far in advance should I book?',
    answer: 'For standard services, we recommend booking 1-2 weeks in advance. For premium experiences like weddings or retreats, please book 2-3 months ahead to ensure availability of our top professionals.',
  },
  {
    question: 'Do you offer home services?',
    answer: 'Yes! Many of our professionals offer in-home services for an additional fee. This is particularly popular for bridal parties, corporate events, and special occasions.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 48+ hours in advance receive a full refund. Cancellations within 48 hours are subject to a 50% fee. Same-day cancellations are non-refundable.',
  },
  {
    question: 'Are consultations available?',
    answer: 'Absolutely! We offer complimentary 15-minute consultations via video call or in person. For premium packages, we include comprehensive consultations as part of the experience.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding bg-porcelain">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-harbor text-lg max-w-2xl mx-auto">
            Everything you need to know about Good Hands
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-lg p-6 text-left hover:shadow-md transition-shadow focus-visible-ring"
                aria-expanded={openIndex === index}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-serif text-lg pr-8">{faq.question}</h3>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gold text-2xl flex-shrink-0"
                  >
                    ↓
                  </motion.span>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-harbor mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <StructuredData data={generateFAQSchema(faqs)} />
      </div>
    </section>
  )
}

