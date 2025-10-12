import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Good Hands',
  description: 'Complete answers to common questions about Good Hands luxury beauty concierge service in Lisbon. Learn about our services, pricing, booking process, and what makes us different.',
  keywords: 'good hands faq, lisbon beauty questions, beauty concierge how it works, beauty services pricing lisbon',
}

const faqs = [
  {
    category: 'About Good Hands',
    questions: [
      {
        q: 'What is Good Hands?',
        a: 'Good Hands is Lisbon\'s premier luxury beauty concierge service. We match discerning clients with personally vetted beauty professionals across hair, spa, makeup, nail, and wellness services. Think of us as your personal beauty advisor who has already done the research and vetting for you.'
      },
      {
        q: 'How does Good Hands work?',
        a: 'Our process is simple: (1) You tell us what you\'re looking for (service type, style preferences, location), (2) We match you with 2-3 perfect professionals from our curated network based on your specific needs, (3) You choose your preferred professional and time slot, (4) We coordinate all booking details, (5) You enjoy your personalized beauty experience with our satisfaction guarantee.'
      },
      {
        q: 'What makes Good Hands different from booking directly?',
        a: 'We eliminate trial-and-error. Every professional in our network has been personally vetted for quality, professionalism, and expertise. We match you based on your specific style preferences (not just availability), coordinate all communication (helpful if you don\'t speak Portuguese), manage your preferences across visits, and provide a satisfaction guarantee. Think of us as having a local friend\'s insider recommendations.'
      },
      {
        q: 'Who uses Good Hands?',
        a: 'Our clients include international travelers visiting Lisbon, luxury hotel guests, expatriates new to the city, local residents who value our curation, and anyone planning special occasions like weddings or events. About 50% are tourists, 20% hotel guests, 15% expats, and 15% local residents.'
      },
      {
        q: 'Which Lisbon neighborhoods do you serve?',
        a: 'We serve all major Lisbon areas: Alfama (historic, intimate neighborhood salons), Chiado (sophisticated boutique experiences), Príncipe Real (creative, artistic spaces), Baixa (central, classic Portuguese style), Belém (riverside wellness and spas), Avenida da Liberdade (modern luxury), plus Cascais (beach glamour) and Sintra (wellness retreats).'
      },
    ]
  },
  {
    category: 'Pricing & Booking',
    questions: [
      {
        q: 'How much do services cost?',
        a: 'Our pricing is transparent and includes our concierge service fee: Hair Styling from €105, Hair Color from €145, Spa Treatments from €95, Makeup from €85, Nails from €55, Wellness from €120. VIP members receive 15% off all services. Prices vary based on specific treatment, professional expertise level, and session duration.'
      },
      {
        q: 'What\'s included in the price?',
        a: 'All prices include: (1) The beauty service itself with premium products, (2) Our concierge coordination and matching service, (3) All communication and booking management, (4) Preference tracking for future visits, and (5) Our satisfaction guarantee. Gratuity is not included but is appreciated (10-15% is customary in Lisbon).'
      },
      {
        q: 'How far in advance should I book?',
        a: 'We recommend booking 2-7 days in advance for optimal professional selection and time slot availability. However, we can often accommodate same-day or next-day requests based on professional availability. For weddings and special events, please book 2-3 months in advance to ensure your preferred professionals are available.'
      },
      {
        q: 'Can I book same-day services?',
        a: 'Yes! While we recommend advance booking for best selection, we can often accommodate same-day requests depending on professional availability. Contact us via chat or phone, and we\'ll do our best to find you a perfect match quickly.'
      },
      {
        q: 'What is your cancellation policy?',
        a: 'We offer a 24-hour cancellation policy for full refund. Cancellations made less than 24 hours before your appointment may be subject to a cancellation fee. No-shows will be charged the full service amount. VIP members have more flexible cancellation terms.'
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards (Visa, Mastercard, Amex), debit cards, Apple Pay, Google Pay, and bank transfers. Payment is securely processed through Stripe at the time of booking.'
      },
    ]
  },
  {
    category: 'Services & Professionals',
    questions: [
      {
        q: 'What beauty services do you offer?',
        a: 'We offer comprehensive beauty services: Hair (cuts, color, styling, treatments), Spa & Wellness (massage, facials, body treatments, holistic therapies), Makeup (special occasion, bridal, editorial), Nails (manicures, pedicures, nail art), and Wellness (yoga, meditation, nutrition consultations). All services are provided by personally vetted professionals.'
      },
      {
        q: 'How do you vet your professionals?',
        a: 'Every professional undergoes rigorous vetting: (1) Portfolio and credentials review, (2) Client reference checks, (3) In-person interviews, (4) Trial services by our team, (5) Ongoing quality monitoring. We only work with licensed professionals who meet our high standards for skill, hygiene, professionalism, and customer service.'
      },
      {
        q: 'Can I request a specific professional?',
        a: 'Absolutely! If you\'ve worked with one of our professionals before and loved them, just let us know their name when booking, and we\'ll prioritize matching you with them (subject to their availability). VIP members get priority access to their favorite professionals.'
      },
      {
        q: 'What languages do your professionals speak?',
        a: 'Most of our professionals speak English and Portuguese fluently. Many also speak Spanish, French, Italian, or German. When you book, let us know your language preference, and we\'ll match you with someone who speaks your language comfortably.'
      },
      {
        q: 'Where do services take place?',
        a: 'Services are provided at our professionals\' studios, salons, or spas throughout Lisbon. All locations are vetted for quality, hygiene, and ambiance. We provide complete address and arrival instructions after booking. For special occasions or groups, some professionals offer mobile services.'
      },
    ]
  },
  {
    category: 'Special Services',
    questions: [
      {
        q: 'Do you offer wedding beauty services?',
        a: 'Yes! We specialize in wedding beauty. Our premium wedding packages include: Trial sessions 2-3 months before, day-of coordination for entire bridal party, timeline management, dedicated beauty teams, and touch-up services. Packages start at €500 depending on party size and services needed.'
      },
      {
        q: 'Can you handle group bookings?',
        a: 'Absolutely! We specialize in group experiences for bridal parties, birthdays, bachelorettes, corporate events, and wellness retreats. We coordinate multiple professionals, manage timing, and ensure everyone has a fantastic experience. Contact us for custom group packages with special rates.'
      },
      {
        q: 'Do you work with hotels?',
        a: 'Yes! We partner with luxury hotels including Four Seasons Ritz Lisbon, Tivoli Hotels, and boutique properties to provide exclusive beauty concierge services for their guests. Hotel partners benefit from seamless integration with their concierge teams, commission-based pricing, and white-glove service that reflects their brand standards.'
      },
      {
        q: 'Do you offer beauty retreats?',
        a: 'Yes! Our multi-day beauty and wellness retreats in Sintra and Cascais include curated treatments, consultations, product packages, and wellness activities. Retreats range from 2-5 days and are fully customizable. Prices start at €800 per person.'
      },
      {
        q: 'Can you coordinate corporate wellness events?',
        a: 'Absolutely! We create custom corporate wellness experiences including team spa days, beauty and self-care workshops, stress-relief treatments, and executive grooming services. Perfect for retreats, team building, or client entertainment. Contact us for tailored corporate packages.'
      },
    ]
  },
  {
    category: 'Membership & Loyalty',
    questions: [
      {
        q: 'Do you offer a membership program?',
        a: 'Yes! Our VIP Membership costs €299/year and includes: 15% off all services, priority booking with your favorite professionals, flexible cancellation policy, exclusive access to new professionals and special events, and a dedicated concierge contact. Membership pays for itself after 3-4 bookings.'
      },
      {
        q: 'Is membership worth it for locals?',
        a: 'Definitely! About 40% of our members are Lisbon residents who use us regularly. If you book beauty services 3+ times per year, membership saves you money. Plus, you get the convenience of having your preferences saved and access to professionals you might not discover on your own.'
      },
    ]
  },
  {
    category: 'For International Visitors',
    questions: [
      {
        q: 'Is Good Hands good for tourists?',
        a: 'Yes! About 50% of our clients are international travelers. We eliminate the stress of finding reliable beauty services in an unfamiliar city. We handle language barriers, know which professionals understand international styles, and ensure you get exactly what you\'re looking for without trial-and-error.'
      },
      {
        q: 'Do I need to speak Portuguese?',
        a: 'Not at all! Good Hands operates in English and Portuguese. All our concierge staff speak fluent English, and we match you with English-speaking professionals. We coordinate all communication, so you never have to worry about language barriers.'
      },
      {
        q: 'Can you help if I\'m only in Lisbon for a few days?',
        a: 'Absolutely! We specialize in helping short-term visitors. We can often accommodate same-day bookings, recommend services based on your schedule and hotel location, and ensure you have a wonderful experience even with limited time.'
      },
      {
        q: 'Do you accept international credit cards?',
        a: 'Yes! We accept all major international credit cards including Visa, Mastercard, and Amex from any country. Our payment processing is secure and multi-currency capable.'
      },
    ]
  },
  {
    category: 'Quality & Satisfaction',
    questions: [
      {
        q: 'What if I\'m not satisfied with my service?',
        a: 'Your complete satisfaction is guaranteed. If you\'re not happy with any aspect of your service, contact us immediately. We\'ll work with you to make it right—whether that means rebooking with a different professional who better matches your preferences, adjusting the service, or providing a full refund. Our reputation depends on your happiness.'
      },
      {
        q: 'How do you ensure consistent quality?',
        a: 'We maintain quality through: (1) Rigorous professional vetting process, (2) Ongoing monitoring via client feedback, (3) Mystery shopping our own network, (4) Regular professional evaluations, and (5) Immediate action if quality drops. We\'ve removed professionals from our network who don\'t maintain our standards.'
      },
      {
        q: 'Can I provide feedback after my service?',
        a: 'Please do! We send a follow-up survey after every service. Your feedback helps us maintain quality and improve our matching. We read every response personally and act on any concerns immediately.'
      },
    ]
  }
]

// Generate schema markup for FAQ
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.flatMap(category => 
    category.questions.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  )
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="pt-20 bg-white">
        <div className="container-custom max-w-4xl py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-harbor max-w-2xl mx-auto">
              Everything you need to know about Good Hands luxury beauty concierge service in Lisbon
            </p>
            <p className="text-sm text-harbor/60 mt-4">
              <strong>Last Updated:</strong> January 11, 2025
            </p>
          </div>

          {faqs.map((category, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl font-serif mb-6 pb-2 border-b-2 border-gold">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, qIdx) => (
                  <div key={qIdx} className="border-l-4 border-sand pl-6">
                    <h3 className="text-lg font-bold mb-2 text-ink">{faq.q}</h3>
                    <p className="text-harbor leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16 p-8 bg-sand/10 rounded-lg text-center">
            <h2 className="text-2xl font-serif mb-4">Still Have Questions?</h2>
            <p className="text-harbor mb-6">
              Our concierge team is here to help. Chat with us 24/7 or send us an email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#booking" className="btn-primary">
                Chat With Us
              </a>
              <a href="mailto:concierge@goodhands.com" className="btn-secondary">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

