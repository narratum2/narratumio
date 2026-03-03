import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beauty Services — Hair, Skincare, Nails, Makeup & Wellness',
  description: 'Explore our curated beauty services in Lisbon. Premium hair styling, luxury skincare facials, nail care, professional makeup, and holistic wellness — all from personally vetted professionals.',
  alternates: { canonical: 'https://goodhandsstudio.com/services' },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
