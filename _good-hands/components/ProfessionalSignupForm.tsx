'use client'

import { useState } from 'react'
import { Send, CheckCircle, Sparkles } from 'lucide-react'

export default function ProfessionalSignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      specialty: formData.get('specialty'),
      experience: formData.get('experience'),
      certifications: formData.get('certifications'),
      location: formData.get('location'),
      portfolio: formData.get('portfolio'),
      instagram: formData.get('instagram'),
      availability: formData.get('availability'),
      whyJoin: formData.get('whyJoin'),
      submittedAt: new Date().toISOString(),
    }

    try {
      // Send to our API endpoint which will forward to Notion
      const response = await fetch('/api/professional-applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form
        ;(e.target as HTMLFormElement).reset()
        
        // Scroll to success message
        setTimeout(() => {
          document.getElementById('success-message')?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          })
        }, 100)
      } else {
        alert('There was an error submitting your application. Please try again or email us directly at professionals@goodhands.com')
      }
    } catch (error) {
      console.error('Application submission error:', error)
      alert('There was an error submitting your application. Please try again or email us directly at professionals@goodhands.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section-padding bg-shell" id="join-our-team">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-gold mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider font-medium">Join Our Network</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Are You a Beauty Professional?
          </h2>
          <p className="text-xl text-harbor max-w-2xl mx-auto mb-4">
            Join Lisbon's most exclusive network of vetted beauty professionals. 
            We connect you with discerning clients and luxury hotel guests.
          </p>
          <p className="text-harbor max-w-2xl mx-auto">
            Good Hands personally vets every professional in our network. If you're exceptional at what you do, 
            we'd love to meet you.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg text-center">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="font-medium mb-2">Premium Clientele</h3>
            <p className="text-sm text-harbor">Access to luxury hotel guests and high-end clients</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center">
            <div className="text-3xl mb-3">📅</div>
            <h3 className="font-medium mb-2">Flexible Scheduling</h3>
            <p className="text-sm text-harbor">Work on your terms with our concierge coordination</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center">
            <div className="text-3xl mb-3">🌟</div>
            <h3 className="font-medium mb-2">Brand Prestige</h3>
            <p className="text-sm text-harbor">Join a trusted network recognized by Four Seasons & Tivoli</p>
          </div>
        </div>

        {/* Form or Success Message */}
        {isSubmitted ? (
          <div 
            id="success-message"
            className="bg-white rounded-lg p-8 md:p-12 text-center"
          >
            <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
            <h3 className="text-3xl font-serif mb-4">Application Received!</h3>
            <p className="text-lg text-harbor mb-6">
              Thank you for your interest in joining Good Hands. Our team will review your application 
              and reach out within 3-5 business days.
            </p>
            <p className="text-harbor">
              We receive many applications and personally vet each professional to maintain our quality standards. 
              If selected, we'll invite you for an interview and trial service evaluation.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-8 text-gold hover:text-gold/80 font-medium transition-colors"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                  Full Name <span className="text-coral">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full px-4 py-3 border border-harbor/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Maria Silva"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address <span className="text-coral">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-harbor/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="maria@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number <span className="text-coral">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-harbor/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="+351 912 345 678"
                />
              </div>

              {/* Specialty */}
              <div>
                <label htmlFor="specialty" className="block text-sm font-medium mb-2">
                  Primary Specialty <span className="text-coral">*</span>
                </label>
                <select
                  id="specialty"
                  name="specialty"
                  required
                  className="w-full px-4 py-3 border border-harbor/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white"
                >
                  <option value="">Select your specialty</option>
                  <option value="Hair Stylist">Hair Stylist</option>
                  <option value="Colorist">Hair Colorist</option>
                  <option value="Makeup Artist">Makeup Artist</option>
                  <option value="Nail Technician">Nail Technician</option>
                  <option value="Esthetician">Esthetician / Facialist</option>
                  <option value="Massage Therapist">Massage Therapist</option>
                  <option value="Lash & Brow">Lash & Brow Specialist</option>
                  <option value="Barber">Barber</option>
                  <option value="Bridal Specialist">Bridal Beauty Specialist</option>
                  <option value="Multiple">Multiple Specialties</option>
                </select>
              </div>

              {/* Years of Experience */}
              <div>
                <label htmlFor="experience" className="block text-sm font-medium mb-2">
                  Years of Experience <span className="text-coral">*</span>
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  className="w-full px-4 py-3 border border-harbor/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white"
                >
                  <option value="">Select experience level</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="10+ years">10+ years</option>
                  <option value="15+ years">15+ years</option>
                </select>
              </div>

              {/* Location/Neighborhood */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium mb-2">
                  Preferred Work Location <span className="text-coral">*</span>
                </label>
                <select
                  id="location"
                  name="location"
                  required
                  className="w-full px-4 py-3 border border-harbor/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white"
                >
                  <option value="">Select location</option>
                  <option value="Chiado">Chiado</option>
                  <option value="Príncipe Real">Príncipe Real</option>
                  <option value="Baixa">Baixa</option>
                  <option value="Avenida da Liberdade">Avenida da Liberdade</option>
                  <option value="Alfama">Alfama</option>
                  <option value="Belém">Belém</option>
                  <option value="Cascais">Cascais</option>
                  <option value="Sintra">Sintra</option>
                  <option value="Mobile - Travel to Client">Mobile - Travel to Client</option>
                  <option value="Multiple Locations">Multiple Locations</option>
                </select>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-6">
              <label htmlFor="certifications" className="block text-sm font-medium mb-2">
                Certifications & Training <span className="text-coral">*</span>
              </label>
              <textarea
                id="certifications"
                name="certifications"
                required
                rows={3}
                className="w-full px-4 py-3 border border-harbor/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                placeholder="List your professional certifications, specialized training, product certifications (e.g., Redken Certified, Dermalogica Expert, etc.)"
              />
            </div>

            {/* Portfolio/Website */}
            <div className="mb-6">
              <label htmlFor="portfolio" className="block text-sm font-medium mb-2">
                Portfolio or Website
              </label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                className="w-full px-4 py-3 border border-harbor/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="https://yourwebsite.com"
              />
            </div>

            {/* Instagram */}
            <div className="mb-6">
              <label htmlFor="instagram" className="block text-sm font-medium mb-2">
                Instagram Handle <span className="text-coral">*</span>
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                required
                className="w-full px-4 py-3 border border-harbor/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="@yourusername"
              />
              <p className="text-xs text-harbor mt-1">
                We review your work through your social media portfolio
              </p>
            </div>

            {/* Availability */}
            <div className="mb-6">
              <label htmlFor="availability" className="block text-sm font-medium mb-2">
                Current Availability <span className="text-coral">*</span>
              </label>
              <select
                id="availability"
                name="availability"
                required
                className="w-full px-4 py-3 border border-harbor/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white"
              >
                <option value="">Select your availability</option>
                <option value="Full-time">Full-time (5+ days/week)</option>
                <option value="Part-time">Part-time (2-4 days/week)</option>
                <option value="Weekends">Weekends only</option>
                <option value="Flexible">Flexible schedule</option>
                <option value="By appointment">By appointment only</option>
                <option value="Currently booked">Currently fully booked</option>
              </select>
            </div>

            {/* Why Join */}
            <div className="mb-8">
              <label htmlFor="whyJoin" className="block text-sm font-medium mb-2">
                Why do you want to join Good Hands? <span className="text-coral">*</span>
              </label>
              <textarea
                id="whyJoin"
                name="whyJoin"
                required
                rows={4}
                className="w-full px-4 py-3 border border-harbor/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                placeholder="Tell us about your experience, what makes you exceptional, and why you'd be a great fit for our network of luxury beauty professionals..."
              />
            </div>

            {/* Terms */}
            <div className="mb-8">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 text-gold focus:ring-gold border-harbor/20 rounded"
                />
                <span className="text-sm text-harbor">
                  I understand that Good Hands personally vets all professionals and that this application 
                  does not guarantee acceptance. I agree to participate in an interview and trial service 
                  evaluation if selected. <span className="text-coral">*</span>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-gold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Application
                </>
              )}
            </button>

            <p className="text-xs text-center text-harbor mt-4">
              We review applications within 3-5 business days. Due to high volume, we can only respond to selected candidates.
            </p>
          </form>
        )}

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-harbor mb-4">
            <strong>What happens next?</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-harbor">
            <div>
              <div className="text-2xl mb-2">📋</div>
              <p className="font-medium mb-1">1. Application Review</p>
              <p>We review your experience, portfolio, and social presence</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🤝</div>
              <p className="font-medium mb-1">2. Interview</p>
              <p>Selected candidates meet with our team for an in-depth interview</p>
            </div>
            <div>
              <div className="text-2xl mb-2">✨</div>
              <p className="font-medium mb-1">3. Trial Service</p>
              <p>We experience your services firsthand to ensure quality standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

