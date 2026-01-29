import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Grain from '@/components/Grain'
import AIDiscoveryTracker from '@/components/AIDiscoveryTracker'

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
    url: 'https://goodhands.com',
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BeautySalon',
              '@id': 'https://goodhands.com/#organization',
              name: 'Good Hands',
              alternateName: ['Good Hands Lisbon', 'Good Hands Beauty Concierge', 'Good Hands Portugal'],
              description: 'Premier luxury beauty concierge service in Lisbon. We match discerning clients with personally vetted hair stylists, spa therapists, makeup artists, and beauty professionals. We eliminate the trial-and-error of finding quality beauty services by providing expert curation, personalized matching, and white-glove booking coordination. Trusted by Four Seasons, Tivoli, and luxury hotels since 2024.',
              url: 'https://goodhands.com',
              logo: 'https://goodhands.com/logo.png',
              image: 'https://goodhands.com/hero-image.jpg',
              telephone: '+351-XXX-XXX-XXX',
              email: 'concierge@goodhands.com',
              priceRange: '€€€',
              sameAs: [
                'https://instagram.com/goodhands',
                'https://facebook.com/goodhands',
                'https://linkedin.com/company/goodhands',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Lisbon',
                addressRegion: 'Lisbon',
                addressCountry: 'PT',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '38.7223',
                longitude: '-9.1393',
              },
              areaServed: [
                { '@type': 'City', name: 'Lisbon', '@id': 'https://en.wikipedia.org/wiki/Lisbon' },
                { '@type': 'Neighborhood', name: 'Chiado' },
                { '@type': 'Neighborhood', name: 'Príncipe Real' },
                { '@type': 'Neighborhood', name: 'Alfama' },
                { '@type': 'Neighborhood', name: 'Belém' },
                { '@type': 'Neighborhood', name: 'Baixa' },
                { '@type': 'Neighborhood', name: 'Avenida da Liberdade' },
                { '@type': 'City', name: 'Cascais' },
                { '@type': 'City', name: 'Sintra' },
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '127',
                bestRating: '5',
                worstRating: '1',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Beauty Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Premium Hair Styling',
                      description: 'Expert hair colorists and stylists matched to your style preferences',
                      serviceType: 'Hair Styling & Coloring',
                    },
                    price: '105.00',
                    priceCurrency: 'EUR',
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Luxury Spa Treatments',
                      description: 'Curated massage and facial treatments',
                      serviceType: 'Spa & Wellness',
                    },
                    price: '95.00',
                    priceCurrency: 'EUR',
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Professional Makeup',
                      description: 'Special occasion and bridal makeup artists',
                      serviceType: 'Makeup Artistry',
                    },
                    price: '85.00',
                    priceCurrency: 'EUR',
                  },
                ],
              },
              knowsAbout: ['Beauty Services', 'Hair Styling', 'Spa Treatments', 'Makeup Artistry', 'Concierge Services', 'Luxury Hospitality', 'Lisbon Tourism'],
              slogan: 'Your Personal Beauty Concierge in Lisbon',
            }),
          }}
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
                  url: 'https://goodhands.com#search',
                },
                {
                  '@type': 'HowToStep',
                  position: 2,
                  name: 'Get Personalized Match',
                  text: 'Our concierge reviews your preferences and matches you with the perfect professional from our vetted network of 150+ specialists',
                  url: 'https://goodhands.com/about',
                },
                {
                  '@type': 'HowToStep',
                  position: 3,
                  name: 'Book & Confirm',
                  text: 'Choose your preferred date and time. We handle all coordination and send you confirmation details',
                  url: 'https://goodhands.com/services',
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

