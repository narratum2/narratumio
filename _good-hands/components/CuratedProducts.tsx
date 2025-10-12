'use client'

import { motion } from 'framer-motion'
import ProductTile from './ProductTile'

const products = [
  {
    title: 'Hair Cream',
    brand: 'Five Wits',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&q=80',
    price: '€32',
    stylistName: 'Maria, Senior Stylist',
    quote: 'My go-to for texture without weight. Perfect for Lisbon\'s humidity—gives that lived-in, effortless look.',
    category: 'Hair',
  },
  {
    title: 'Gold Lust Shampoo',
    brand: 'Oribe',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80',
    price: '€48',
    stylistName: 'Ana, Color Specialist',
    quote: 'The scent alone is worth it—bergamot and jasmine. But it\'s perfect for Lisbon\'s hard water which can leave buildup.',
    category: 'Hair',
  },
  {
    title: 'Gentle Hydrating Cleanser',
    brand: 'Dr. Loretta',
    image: 'https://images.unsplash.com/photo-1556228578-dd3a24bef846?w=800&q=80',
    price: '€40',
    stylistName: 'Sofia, Esthetician',
    quote: 'Works beautifully with Lisbon\'s sun. Cleanses without stripping—your skin will thank you after long summer days.',
    category: 'Skincare',
  },
  {
    title: 'Nail Treatment Oil',
    brand: 'Dior',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80',
    price: '€28',
    stylistName: 'Rita, Nail Artist',
    quote: 'Essential for anyone getting frequent manicures. Keeps cuticles soft and nails strong between appointments.',
    category: 'Nails',
  },
]

export default function CuratedProducts() {
  return (
    <section className="section-padding bg-shell">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-wide text-gold mb-3">From the Chair</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Stylist Recommendations
          </h2>
          <p className="text-harbor text-lg max-w-2xl mx-auto">
            Each product chosen for a reason—not marketing, but real experience. 
            Our professionals share what actually works in Lisbon's climate.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductTile
              key={product.title}
              {...product}
              href={`/products/${product.brand.toLowerCase().replace(' ', '-')}-${product.title.toLowerCase().replace(' ', '-')}`}
            />
          ))}
        </div>

        {/* Editorial Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-white p-8 border-l-4 border-gold">
            <p className="text-sm uppercase tracking-wide text-gold mb-2">Our Philosophy</p>
            <p className="text-harbor leading-relaxed">
              We believe in curated recommendations over endless catalogs. 
              Every product here has been tested, loved, and personally vouched for by our stylists. 
              <span className="block mt-3 italic">
                "We stock what we actually use—not what we're paid to promote."
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

