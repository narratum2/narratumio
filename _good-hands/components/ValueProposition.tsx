'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    problem: 'Time you will never get back',
    solution: 'We have already done the vetting. Every professional, tested by us personally.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    problem: 'Too many choices, no real answers',
    solution: 'Tell us what you are looking for. We will match you with someone who actually gets it.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    problem: 'Lost in translation',
    solution: 'We bridge the language gap. Book in English, get understood perfectly.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    problem: 'Appointments that never happen',
    solution: 'Confirmed bookings. Real follow-up. We keep everyone accountable.',
  },
]

export default function ValueProposition() {
  return (
    <section className="section-padding bg-shell">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            You Know the Feeling
          </h2>
          <p className="text-xl text-harbor max-w-3xl mx-auto mb-4 text-center">
            Three hours scrolling through Instagram. Fifteen reviews that contradict each other. A growing sense that you are about to make an expensive mistake. Again.
          </p>
          <p className="text-2xl font-serif text-gold max-w-2xl mx-auto text-center">
            There is a better way. We are that friend who knows everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-gold mb-4">{item.icon}</div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-harbor uppercase tracking-wide mb-1">The Problem:</p>
                  <p className="text-lg font-medium text-ink">{item.problem}</p>
                </div>
                <div>
                  <p className="text-sm text-gold uppercase tracking-wide mb-1">Our Solution:</p>
                  <p className="text-lg font-medium text-ink">{item.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 relative z-10"
        >
          <div className="bg-gold/10 border-2 border-gold rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif mb-4">
              How It Actually Works
            </h3>
            <p className="text-lg text-harbor mb-6">
              We have spent years building relationships with the best professionals in Lisbon. We know who is brilliant with color, who specializes in curly hair, who has the lightest touch for facials. You tell us what you need, and we make the introduction.
            </p>
            <p className="text-lg text-harbor mb-6">
              No endless scrolling. No taking chances. Just straightforward access to people who are genuinely good at what they do. We book it, we coordinate it, we make sure it happens exactly as planned. If something goes wrong (it will not), we handle it.
            </p>
            <a
              href="#booking"
              className="btn-primary text-lg"
            >
              Make Your First Booking
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

