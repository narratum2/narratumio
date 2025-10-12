import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — Good Hands',
  description: 'Terms and conditions for using the Good Hands beauty concierge service.',
}

export default function TermsPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container-custom max-w-4xl py-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Terms of Service</h1>
        <p className="text-harbor text-lg mb-8">
          Last updated: October 11, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-serif mb-4">1. Agreement to Terms</h2>
            <p className="text-harbor leading-relaxed">
              By accessing or using Good Hands ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">2. Description of Service</h2>
            <p className="text-harbor leading-relaxed">
              Good Hands is a beauty concierge service that connects clients with vetted beauty professionals in Lisbon, Portugal. Our service includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-harbor mt-3">
              <li>Personalized matching with beauty professionals</li>
              <li>Booking coordination and management</li>
              <li>Quality assurance and customer support</li>
              <li>Payment processing on behalf of service providers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">3. User Responsibilities</h2>
            <h3 className="text-2xl font-serif mb-3 mt-6">3.1 Account Information</h3>
            <p className="text-harbor leading-relaxed">
              You agree to provide accurate, current, and complete information and to update it as necessary to maintain accuracy.
            </p>

            <h3 className="text-2xl font-serif mb-3 mt-6">3.2 Conduct</h3>
            <p className="text-harbor leading-relaxed mb-3">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-harbor">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Harass, abuse, or harm beauty professionals or other users</li>
              <li>Provide false or misleading information</li>
              <li>Attempt to circumvent our concierge service fees</li>
              <li>Use automated systems to access the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">4. Bookings and Payments</h2>
            
            <h3 className="text-2xl font-serif mb-3 mt-6">4.1 Pricing</h3>
            <p className="text-harbor leading-relaxed">
              All prices include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-harbor mt-2">
              <li>Service fee paid to the beauty professional</li>
              <li>Good Hands concierge service fee</li>
              <li>Applicable taxes</li>
            </ul>
            <p className="text-harbor leading-relaxed mt-3">
              Prices are displayed in Euros (€) and are subject to change. The price shown at time of booking is the price you pay.
            </p>

            <h3 className="text-2xl font-serif mb-3 mt-6">4.2 Payment Processing</h3>
            <p className="text-harbor leading-relaxed">
              Payments are processed securely through Stripe. By making a booking, you authorize us to charge your payment method for the full amount.
            </p>

            <h3 className="text-2xl font-serif mb-3 mt-6">4.3 Membership Plans</h3>
            <p className="text-harbor leading-relaxed">
              Membership subscriptions renew automatically. You may cancel at any time, but refunds are not provided for partial months. Membership discounts apply to the service portion only.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">5. Cancellations and Refunds</h2>
            <h3 className="text-2xl font-serif mb-3 mt-6">5.1 Cancellation Policy</h3>
            <ul className="list-disc pl-6 space-y-2 text-harbor">
              <li><strong>48+ hours before:</strong> Full refund</li>
              <li><strong>24-48 hours before:</strong> 50% refund</li>
              <li><strong>Less than 24 hours:</strong> No refund</li>
              <li><strong>No-show:</strong> No refund</li>
            </ul>

            <h3 className="text-2xl font-serif mb-3 mt-6">5.2 Provider Cancellations</h3>
            <p className="text-harbor leading-relaxed">
              If a beauty professional cancels, we will either reschedule with another qualified professional or provide a full refund.
            </p>

            <h3 className="text-2xl font-serif mb-3 mt-6">5.3 Service Issues</h3>
            <p className="text-harbor leading-relaxed">
              If you're unsatisfied with your service, contact us within 24 hours. We'll investigate and may offer a partial refund or future service credit at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">6. Intellectual Property</h2>
            <p className="text-harbor leading-relaxed">
              The Service and its original content, features, and functionality are owned by Good Hands and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">7. Liability and Warranties</h2>
            <h3 className="text-2xl font-serif mb-3 mt-6">7.1 Service "As Is"</h3>
            <p className="text-harbor leading-relaxed">
              The Service is provided "as is" without warranties of any kind, either express or implied.
            </p>

            <h3 className="text-2xl font-serif mb-3 mt-6">7.2 Professional Services</h3>
            <p className="text-harbor leading-relaxed">
              While we carefully vet all beauty professionals, Good Hands acts as a concierge service only. We are not liable for the quality of services provided by independent beauty professionals. However, we stand behind our matchmaking and will work to resolve any issues.
            </p>

            <h3 className="text-2xl font-serif mb-3 mt-6">7.3 Limitation of Liability</h3>
            <p className="text-harbor leading-relaxed">
              Good Hands shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service. Our maximum liability is limited to the amount you paid for the specific booking in question.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">8. Indemnification</h2>
            <p className="text-harbor leading-relaxed">
              You agree to indemnify and hold Good Hands harmless from any claims, damages, losses, liabilities, and expenses arising from your use of the Service or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">9. Dispute Resolution</h2>
            <h3 className="text-2xl font-serif mb-3 mt-6">9.1 Governing Law</h3>
            <p className="text-harbor leading-relaxed">
              These Terms are governed by the laws of Portugal, without regard to conflict of law provisions.
            </p>

            <h3 className="text-2xl font-serif mb-3 mt-6">9.2 Arbitration</h3>
            <p className="text-harbor leading-relaxed">
              Any disputes will first be resolved through good-faith negotiation. If unresolved, disputes will be settled through binding arbitration in Lisbon, Portugal.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">10. Changes to Terms</h2>
            <p className="text-harbor leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or prominent notice on our website. Continued use after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">11. Termination</h2>
            <p className="text-harbor leading-relaxed">
              We may terminate or suspend your access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">12. Contact Information</h2>
            <div className="bg-shell p-6 rounded-lg">
              <p className="text-harbor"><strong>Email:</strong> hello@goodhands.com</p>
              <p className="text-harbor"><strong>Legal:</strong> legal@goodhands.com</p>
              <p className="text-harbor"><strong>Address:</strong> Good Hands, Lisbon, Portugal</p>
            </div>
          </section>

          <section className="bg-gold/10 border-2 border-gold rounded-lg p-6 mt-8">
            <h3 className="text-2xl font-serif mb-3">Questions About Our Terms?</h3>
            <p className="text-harbor mb-4">
              We're here to help. Contact our team if you need clarification on anything in these Terms of Service.
            </p>
            <Link href="/#booking" className="text-gold hover:underline font-medium">
              Get in Touch →
            </Link>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-harbor/20">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/privacy" className="text-gold hover:underline">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-gold hover:underline">
              Cookie Policy
            </Link>
            <Link href="/" className="text-gold hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

