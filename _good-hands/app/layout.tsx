import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Grain from '@/components/Grain'
import { AuthProvider } from '@/contexts/AuthContext'

export const metadata: Metadata = {
  title: 'Good Hands — Beauty Concierge for Lisbon & Beyond',
  description: 'Curated beauty experiences in Lisbon\'s most elegant neighborhoods. Premium services, expert guidance, and boutique-level care.',
  keywords: 'beauty concierge, Lisbon beauty, premium beauty services, beauty experiences, wedding beauty, corporate beauty',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://goodhands.com',
    siteName: 'Good Hands',
    title: 'Good Hands — Beauty Concierge for Lisbon & Beyond',
    description: 'Curated beauty experiences in Lisbon\'s most elegant neighborhoods.',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Good Hands Beauty Concierge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Good Hands — Beauty Concierge',
    description: 'Curated beauty experiences in Lisbon\'s most elegant neighborhoods.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Good Hands',
              description: 'AI-first beauty concierge for Lisbon and beyond',
              url: 'https://goodhands.com',
              logo: 'https://goodhands.com/logo.png',
              sameAs: [
                'https://instagram.com/goodhands',
                'https://facebook.com/goodhands',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Lisbon',
                addressCountry: 'PT',
              },
              areaServed: [
                'Chiado',
                'Príncipe Real',
                'Baixa',
                'Avenida da Liberdade',
                'Alfama',
                'Belém',
                'Sintra',
                'Cascais',
              ],
            }),
          }}
        />
      </head>
      <body>
        <AuthProvider>
          <Grain />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AuthProvider>
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

