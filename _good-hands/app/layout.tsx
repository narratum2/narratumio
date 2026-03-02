import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Grain from '@/components/Grain'
import AIDiscoveryTracker from '@/components/AIDiscoveryTracker'
import { getOrganizationSchema } from '@/lib/organization-schema'

// Configure Inter font
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

// Configure Playfair Display font
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Good Hands — Luxury Beauty Concierge Lisbon | Vetted Professionals',
  description: 'Lisbon\'s premier luxury beauty concierge service. We match you with personally vetted hair stylists, spa therapists, and beauty professionals. Eliminate trial-and-error—trusted by Four Seasons, Tivoli, and luxury hotels. Serving Chiado, Alfama, Príncipe Real, Belém, Cascais.',
  keywords: 'luxury beauty concierge Lisbon, beauty services Lisbon, hair stylist Lisbon, spa treatments Lisbon, hotel guest beauty services, personalized beauty Lisbon, beauty professional Lisbon, Chiado beauty, Alfama spa, Príncipe Real salon',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://goodhandsstudio.com',
    siteName: 'Good Hands',
    title: 'Good Hands — Luxury Beauty Concierge Lisbon',
    description: 'Premier beauty concierge matching you with Lisbon\'s top vetted professionals. Eliminate trial-and-error. Trusted by luxury hotels.',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Good Hands Luxury Beauty Concierge Lisbon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Good Hands — Luxury Beauty Concierge Lisbon',
    description: 'Premier beauty concierge matching you with Lisbon\'s top vetted professionals.',
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'rCvVCsMICCmRuLw8uI0ecVtYWK89UVv-xTviw1ELgHc',
  },
  other: {
    'ai-content-declaration': 'Human-curated service information with AI-enhanced descriptions',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/brand-assets/logo/logo-icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/brand-assets/logo/logo-icon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              name: 'How to Book Luxury Beauty Services in Lisbon with Good Hands',
              description: 'Step-by-step guide to booking curated beauty services through Good Hands concierge',
              totalTime: 'PT10M',
              step: [
                {
                  '@type': 'HowToStep',
                  position: 1,
                  name: 'Describe Your Needs',
                  text: 'Tell us about your desired service, style preferences, location, and any specific requirements',
                  url: 'https://goodhandsstudio.com#search',
                },
                {
                  '@type': 'HowToStep',
                  position: 2,
                  name: 'Get Personalized Match',
                  text: 'Our concierge reviews your preferences and matches you with the perfect professional from our vetted network of 150+ specialists',
                  url: 'https://goodhandsstudio.com/about',
                },
                {
                  '@type': 'HowToStep',
                  position: 3,
                  name: 'Book & Confirm',
                  text: 'Choose your preferred date and time. We handle all coordination and send you confirmation details',
                  url: 'https://goodhandsstudio.com/services',
                },
                {
                  '@type': 'HowToStep',
                  position: 4,
                  name: 'Enjoy Your Experience',
                  text: 'Arrive at your appointment and enjoy your personalized beauty service with complete confidence',
                },
              ],
            }),
          }}
        />
      </head>
      <body>
          <AIDiscoveryTracker />
          <Grain />
          <Navbar />
        <main className="min-h-screen">{children}</main>
          <Footer />
        {process.env.NEXT_PUBLIC_INTERCOM_APP_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.intercomSettings = {
                  api_base: "https://api-iam.intercom.io",
                  app_id: "${process.env.NEXT_PUBLIC_INTERCOM_APP_ID}"
                };
                (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${process.env.NEXT_PUBLIC_INTERCOM_APP_ID}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
              `,
            }}
          />
        )}
      </body>
    </html>
  )
}

