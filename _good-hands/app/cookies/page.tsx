import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy — Good Hands',
  description: 'Learn about how Good Hands uses cookies and similar technologies.',
}

export default function CookiesPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container-custom max-w-4xl py-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Cookie Policy</h1>
        <p className="text-harbor text-lg mb-8">
          Last updated: October 11, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-serif mb-4">1. What Are Cookies?</h2>
            <p className="text-harbor leading-relaxed">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">2. Types of Cookies We Use</h2>
            
            <h3 className="text-2xl font-serif mb-3 mt-6">2.1 Essential Cookies (Always Active)</h3>
            <p className="text-harbor leading-relaxed mb-3">
              These cookies are necessary for the website to function and cannot be disabled:
            </p>
            <div className="bg-shell p-4 rounded-lg mb-4">
              <ul className="list-disc pl-6 space-y-2 text-harbor">
                <li><strong>Session cookies:</strong> Keep you logged in during your visit</li>
                <li><strong>Security cookies:</strong> Protect against fraud and ensure site security</li>
                <li><strong>Booking cookies:</strong> Remember your form data during the booking process</li>
              </ul>
            </div>

            <h3 className="text-2xl font-serif mb-3 mt-6">2.2 Analytics Cookies (Optional)</h3>
            <p className="text-harbor leading-relaxed mb-3">
              Help us understand how visitors interact with our website:
            </p>
            <div className="bg-shell p-4 rounded-lg mb-4">
              <ul className="list-disc pl-6 space-y-2 text-harbor">
                <li><strong>Google Analytics:</strong> Page views, session duration, bounce rate</li>
                <li><strong>Vercel Analytics:</strong> Performance monitoring and Core Web Vitals</li>
                <li><strong>Lifetime:</strong> Up to 2 years</li>
              </ul>
            </div>

            <h3 className="text-2xl font-serif mb-3 mt-6">2.3 Marketing Cookies (Optional)</h3>
            <p className="text-harbor leading-relaxed mb-3">
              Used to deliver relevant advertisements:
            </p>
            <div className="bg-shell p-4 rounded-lg mb-4">
              <ul className="list-disc pl-6 space-y-2 text-harbor">
                <li><strong>Facebook Pixel:</strong> Track conversions from Facebook ads</li>
                <li><strong>Google Ads:</strong> Retargeting and conversion tracking</li>
                <li><strong>Lifetime:</strong> Up to 90 days</li>
              </ul>
            </div>

            <h3 className="text-2xl font-serif mb-3 mt-6">2.4 Functionality Cookies (Optional)</h3>
            <p className="text-harbor leading-relaxed mb-3">
              Enhance your experience on our site:
            </p>
            <div className="bg-shell p-4 rounded-lg mb-4">
              <ul className="list-disc pl-6 space-y-2 text-harbor">
                <li><strong>Language preference:</strong> Remember your language choice</li>
                <li><strong>Location data:</strong> Show you relevant neighborhood information</li>
                <li><strong>Chat preferences:</strong> Intercom chat settings</li>
                <li><strong>Lifetime:</strong> Up to 1 year</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">3. Third-Party Cookies</h2>
            <p className="text-harbor leading-relaxed mb-4">
              We use services from trusted third parties who may also set cookies:
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-gold pl-4">
                <p className="font-semibold text-ink">Google Analytics</p>
                <p className="text-harbor text-sm">Helps us understand visitor behavior</p>
                <a href="https://policies.google.com/privacy" className="text-gold hover:underline text-sm">
                  Privacy Policy →
                </a>
              </div>

              <div className="border-l-4 border-gold pl-4">
                <p className="font-semibold text-ink">Stripe</p>
                <p className="text-harbor text-sm">Secure payment processing</p>
                <a href="https://stripe.com/privacy" className="text-gold hover:underline text-sm">
                  Privacy Policy →
                </a>
              </div>

              <div className="border-l-4 border-gold pl-4">
                <p className="font-semibold text-ink">Intercom</p>
                <p className="text-harbor text-sm">Customer support chat</p>
                <a href="https://www.intercom.com/legal/privacy" className="text-gold hover:underline text-sm">
                  Privacy Policy →
                </a>
              </div>

              <div className="border-l-4 border-gold pl-4">
                <p className="font-semibold text-ink">Vercel</p>
                <p className="text-harbor text-sm">Website hosting and performance</p>
                <a href="https://vercel.com/legal/privacy-policy" className="text-gold hover:underline text-sm">
                  Privacy Policy →
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">4. How to Manage Cookies</h2>
            
            <h3 className="text-2xl font-serif mb-3 mt-6">4.1 Browser Settings</h3>
            <p className="text-harbor leading-relaxed mb-3">
              You can control cookies through your browser settings:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-harbor">
              <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
              <li><strong>Edge:</strong> Settings → Privacy and Services → Cookies</li>
            </ul>

            <h3 className="text-2xl font-serif mb-3 mt-6">4.2 Opt-Out Links</h3>
            <ul className="list-disc pl-6 space-y-2 text-harbor">
              <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-gold hover:underline">Google Analytics Opt-out</a></li>
              <li><a href="https://optout.aboutads.info/" className="text-gold hover:underline">Digital Advertising Alliance Opt-out</a></li>
              <li><a href="https://www.youronlinechoices.com/" className="text-gold hover:underline">Your Online Choices (EU)</a></li>
            </ul>

            <h3 className="text-2xl font-serif mb-3 mt-6">4.3 Do Not Track</h3>
            <p className="text-harbor leading-relaxed">
              We respect Do Not Track (DNT) signals. When DNT is enabled in your browser, we disable non-essential tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">5. Impact of Disabling Cookies</h2>
            <p className="text-harbor leading-relaxed mb-3">
              If you disable cookies, some features may not work properly:
            </p>
            <div className="bg-gold/10 border border-gold rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">⚠️</span>
                  <span className="text-harbor">You may need to re-enter information when booking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">⚠️</span>
                  <span className="text-harbor">Preference settings won't be remembered</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">⚠️</span>
                  <span className="text-harbor">Some pages may not display correctly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">✓</span>
                  <span className="text-harbor">You can still browse and make bookings</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">6. Updates to This Policy</h2>
            <p className="text-harbor leading-relaxed">
              We may update this Cookie Policy to reflect changes in technology or legal requirements. We'll notify you of significant changes through our website or email.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">7. Questions?</h2>
            <p className="text-harbor leading-relaxed mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="bg-shell p-6 rounded-lg">
              <p className="text-harbor"><strong>Email:</strong> privacy@goodhands.com</p>
              <p className="text-harbor"><strong>Subject:</strong> Cookie Policy Inquiry</p>
            </div>
          </section>

          <section className="bg-gold/10 border-2 border-gold rounded-lg p-6 mt-8">
            <h3 className="text-2xl font-serif mb-3">Your Privacy Matters</h3>
            <p className="text-harbor mb-4">
              We're committed to transparency about data collection. Your trust is important to us, and we only use cookies that help us provide you with the best possible service.
            </p>
            <Link href="/privacy" className="text-gold hover:underline font-medium">
              Read Our Privacy Policy →
            </Link>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-harbor/20">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/privacy" className="text-gold hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gold hover:underline">
              Terms of Service
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

