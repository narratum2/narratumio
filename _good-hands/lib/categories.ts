/**
 * Shared category configuration for consistent data across the application
 * Ensures category names, slugs, and images are synchronized between components
 */

export interface Category {
  name: string
  slug: string
  description: string
  image: string
  href: string
  seoDescription: string
}

export const categories: Category[] = [
  {
    name: 'Hair Styling',
    slug: 'hair',
    description: 'Professional hair styling, cuts, color, and treatments',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
    href: '/services?category=hair',
    seoDescription: 'Expert hair styling services including precision cuts, color treatments, balayage, and hair repair in Lisbon',
  },
  {
    name: 'Nail Care',
    slug: 'nails',
    description: 'Manicures, pedicures, and nail art by experts',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    href: '/services?category=nails',
    seoDescription: 'Luxury nail care services including gel manicures, pedicures, nail art, and extensions',
  },
  {
    name: 'Skincare',
    slug: 'skincare',
    description: 'Luxurious facials and advanced skincare treatments',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    href: '/services?category=skincare',
    seoDescription: 'Premium skincare treatments including facials, anti-aging treatments, and LED therapy',
  },
  {
    name: 'Makeup',
    slug: 'makeup',
    description: 'Professional makeup for events, weddings, and lessons',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
    href: '/services?category=makeup',
    seoDescription: 'Professional makeup services for events, weddings, and personalized makeup lessons',
  },
  {
    name: 'Wellness',
    slug: 'wellness',
    description: 'Relaxing massages and holistic wellness treatments',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    href: '/services?category=wellness',
    seoDescription: 'Therapeutic wellness treatments including Swedish massage, deep tissue, aromatherapy, and hot stone massage',
  },
  {
    name: 'Weddings',
    slug: 'weddings',
    description: 'Complete bridal beauty packages and coordination',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    href: '/premium/weddings',
    seoDescription: 'Comprehensive wedding beauty packages including hair, makeup, skincare, and bridal party coordination',
  },
]

/**
 * Get category by slug
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug)
}

/**
 * Get category display name for services page
 */
export function getCategoryDisplayName(slug: string): string {
  const category = getCategoryBySlug(slug)
  return category?.name || slug
}
