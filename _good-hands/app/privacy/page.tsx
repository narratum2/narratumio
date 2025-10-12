import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Good Hands',
  description: 'Learn how Good Hands collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container-custom max-w-4xl py-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Privacy Policy</h1>
        <p className="text-harbor text-lg mb-8">
          Last updated: October 11, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-serif mb-4">1. Introduction</h2>
            <p className="text-harbor leading-relaxed">
              Good Hands ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our beauty concierge service and website.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">2. Information We Collect</h2>
            
            <h3 className="text-2xl font-serif mb-3 mt-6">2.1 Personal Information</h3>
            <p className="text-harbor leading-relaxed mb-3">
              When you use our service, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-harbor">
              <li>Name and contact information (email, phone number)</li>
              <li>Service preferences and booking history</li>
              <li>Payment information (processed securely through Stripe)</li>
              <li>Communication history with our concierge team</li>
              <li>Feedback and reviews</li>
            </ul>

            <h3 className="text-2xl font-serif mb-3 mt-6">2.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-harbor">
              <li>Device information (browser type, operating system)</li>
              <li>IP address and location data</li>
              <li>Cookies and usage data (see Cookie Policy)</li>
              <li>Analytics data (page views, session duration)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">3. How We Use Your Information</h2>
            <p className="text-harbor leading-relaxed mb-3">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-harbor">
              <li><strong>Provide our concierge service:</strong> Match you with appropriate beauty professionals</li>
              <li><strong>Process bookings:</strong> Coordinate appointments and handle payments</li>
              <li><strong>Communicate with you:</strong> Send confirmations, reminders, and updates</li>
              <li><strong>Improve our service:</strong> Analyze usage patterns and gather feedback</li>
              <li><strong>Marketing:</strong> Send promotional offers (with your consent)</li>
              <li><strong>Safety and security:</strong> Prevent fraud and protect our users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">4. Information Sharing</h2>
            <p className="text-harbor leading-relaxed mb-3">
              We share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-harbor">
              <li><strong>Beauty professionals:</strong> Only necessary booking details (name, service, time)</li>
              <li><strong>Service providers:</strong> Payment processors (Stripe), email services, analytics tools</li>
              <li><strong>Legal requirements:</strong> When required by law or to protect rights and safety</li>
            </ul>
            <p className="text-harbor leading-relaxed mt-3">
              We never sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">5. Data Security</h2>
            <p className="text-harbor leading-relaxed">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-harbor mt-3">
              <li>Encrypted data transmission (SSL/TLS)</li>
              <li>Secure database storage with access controls</li>
              <li>Regular security audits and updates</li>
              <li>Payment processing through PCI-compliant providers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">6. Your Rights (GDPR)</h2>
            <p className="text-harbor leading-relaxed mb-3">
              Under GDPR, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-harbor">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate information</li>
              <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
              <li><strong>Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Object:</strong> Opt out of marketing communications</li>
              <li><strong>Withdraw consent:</strong> At any time, for consent-based processing</li>
            </ul>
            <p className="text-harbor leading-relaxed mt-3">
              To exercise these rights, contact us at privacy@goodhands.com
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">7. Cookies</h2>
            <p className="text-harbor leading-relaxed">
              We use cookies and similar technologies to enhance your experience. See our <Link href="/cookies" className="text-gold hover:underline">Cookie Policy</Link> for details.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">8. Data Retention</h2>
            <p className="text-harbor leading-relaxed">
              We retain your information for as long as necessary to provide our service and comply with legal obligations. Booking history is kept for 3 years for accounting purposes. You can request deletion at any time.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">9. Children's Privacy</h2>
            <p className="text-harbor leading-relaxed">
              Our service is not intended for children under 16. We do not knowingly collect information from children. If you believe we have inadvertently collected such information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">10. International Data Transfers</h2>
            <p className="text-harbor leading-relaxed">
              Your information may be transferred to and processed in countries outside the European Economic Area. We ensure appropriate safeguards are in place through standard contractual clauses.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">11. Changes to This Policy</h2>
            <p className="text-harbor leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of significant changes via email or prominent notice on our website. Continued use of our service after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">12. Contact Us</h2>
            <p className="text-harbor leading-relaxed mb-3">
              For privacy-related questions or to exercise your rights:
            </p>
            <div className="bg-shell p-6 rounded-lg">
              <p className="text-harbor"><strong>Email:</strong> privacy@goodhands.com</p>
              <p className="text-harbor"><strong>Data Protection Officer:</strong> dpo@goodhands.com</p>
              <p className="text-harbor"><strong>Address:</strong> Good Hands, Lisbon, Portugal</p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-harbor/20">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/terms" className="text-gold hover:underline">
              Terms of Service
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

