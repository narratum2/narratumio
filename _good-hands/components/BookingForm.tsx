'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface BookingFormData {
  name: string
  email: string
  phone: string
  service: string
  neighborhood: string
  date: string
  time: string
  message: string
  website: string
}

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    neighborhood: '',
    date: '',
    time: '',
    message: '',
    website: '',
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const service = params.get('service')
    if (service) {
      setFormData((prev) => ({ ...prev, service }))
    }
  }, [])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Capture UTM parameters
      const urlParams = new URLSearchParams(window.location.search)
      const utmParams = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_term: urlParams.get('utm_term') || '',
        utm_content: urlParams.get('utm_content') || '',
      }

      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          ...utmParams,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          neighborhood: '',
          date: '',
          time: '',
          message: '',
          website: '',
        })
      } else {
        const errData = await response.json().catch(() => ({}))
        setErrorMessage(errData.error || 'Something went wrong. Please try again.')
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Booking error:', error)
      setErrorMessage('Unable to submit. Please check your connection and try again.')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="booking" className="section-padding bg-white scroll-mt-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Let's Book You
            </h2>
            <p className="text-harbor text-lg mb-4">
              Tell us what you need. We'll handle the rest.
            </p>
            <div className="inline-flex items-center gap-2 bg-gold/10 px-6 py-3 rounded-lg">
              <Sparkles className="w-5 h-5 text-gold" />
              <p className="text-sm font-medium text-gold">
                Concierge service included
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-shell rounded-lg p-6 md:p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service Type *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="select-field"
                >
                  <option value="">Select a service</option>
                  <option value="hair">Hair Styling</option>
                  <option value="nails">Nail Care</option>
                  <option value="skincare">Skincare</option>
                  <option value="makeup">Makeup</option>
                  <option value="wellness">Wellness</option>
                  <option value="wedding">Wedding Package</option>
                  <option value="retreat">Retreat Package</option>
                  <option value="corporate">Corporate Package</option>
                </select>
              </div>

              <div>
                <label htmlFor="neighborhood" className="block text-sm font-medium mb-2">
                  Preferred Neighborhood
                </label>
                <select
                  id="neighborhood"
                  name="neighborhood"
                  value={formData.neighborhood}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select a neighborhood</option>
                  <option value="chiado">Chiado</option>
                  <option value="principe-real">Príncipe Real</option>
                  <option value="baixa">Baixa</option>
                  <option value="avenida">Avenida</option>
                  <option value="alfama">Alfama</option>
                  <option value="belem">Belém</option>
                  <option value="sintra">Sintra</option>
                  <option value="cascais">Cascais</option>
                </select>
              </div>

              {/* Date and Time fields always side-by-side */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="input-field"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="select-field"
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="input-field resize-none"
                placeholder="Tell us more about what you\'re looking for..."
              />
            </div>

            <div aria-hidden="true" className="absolute -left-[9999px]">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <p className="text-harbor/70 text-xs text-center mb-4">
              This is a request, not a final booking. We will personally confirm availability and get back to you within a few hours.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary btn-primary-full-mobile disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Send Booking Request'}
            </button>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-sage/10 border border-sage/30 rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2">Request Received</h3>
                <p className="text-harbor text-sm mb-3">
                  We have your booking request and will get back to you <strong>within a few hours</strong> to confirm availability and finalize your appointment.
                </p>
                <p className="text-harbor/70 text-xs">
                  Check your inbox (and spam folder) for a confirmation from the Good Hands team.
                </p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-red-600 font-medium"
              >
                {errorMessage}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

