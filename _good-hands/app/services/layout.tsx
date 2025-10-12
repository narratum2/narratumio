import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Beauty Services in Lisbon — Good Hands',
    description:
      'Explore our curated beauty services across Lisbon. Hair styling, nail care, skincare, makeup, and wellness treatments by vetted professionals.',
    keywords: [
      'beauty services Lisbon',
      'hair salon Lisbon',
      'nail care Lisbon',
      'skincare Lisbon',
      'makeup artist Lisbon',
      'massage Lisbon',
      'wellness treatments',
    ],
    openGraph: {
      title: 'Beauty Services in Lisbon — Good Hands',
      description:
        'Premium beauty experiences curated for discerning clients. Hair, nails, skincare, makeup, and wellness services.',
      type: 'website',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80',
          width: 1200,
          height: 630,
          alt: 'Good Hands Beauty Services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Beauty Services in Lisbon — Good Hands',
      description:
        'Premium beauty experiences curated for discerning clients. Hair, nails, skincare, makeup, and wellness services.',
      images: ['https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80'],
    },
  }
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
