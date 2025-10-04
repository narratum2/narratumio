'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface LookbookImage {
  id: string
  src: string
  alt: string
  caption?: string
}

export default function Lookbook() {
  const [images, setImages] = useState<LookbookImage[]>([])
  const [selectedImage, setSelectedImage] = useState<LookbookImage | null>(null)

  useEffect(() => {
    // Load lookbook images from JSON
    fetch('/lookbook/lookbook.json')
      .then((res) => res.json())
      .then((data) => setImages(data.images))
      .catch(() => {
        // Fallback to default images if JSON not found
        setImages([
          {
            id: '1',
            src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
            alt: 'Beauty experience 1',
            caption: 'Luxe hair styling in Chiado',
          },
          {
            id: '2',
            src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
            alt: 'Beauty experience 2',
            caption: 'Professional makeup artistry',
          },
          {
            id: '3',
            src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
            alt: 'Beauty experience 3',
            caption: 'Expert color treatment',
          },
          {
            id: '4',
            src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
            alt: 'Beauty experience 4',
            caption: 'Bridal beauty preparation',
          },
          {
            id: '5',
            src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
            alt: 'Beauty experience 5',
            caption: 'Luxury nail care',
          },
          {
            id: '6',
            src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
            alt: 'Beauty experience 6',
            caption: 'Advanced skincare treatments',
          },
        ])
      })
  }, [])

  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Lookbook</h2>
            <p className="text-harbor text-lg max-w-2xl mx-auto">
              A glimpse into the Good Hands experience
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <motion.button
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square rounded-lg overflow-hidden focus-visible-ring"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {image.caption && (
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium">
                      {image.caption}
                    </p>
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gold transition-colors p-2 focus-visible-ring"
              aria-label="Close lightbox"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full aspect-video"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
              {selectedImage.caption && (
                <p className="absolute bottom-0 left-0 right-0 text-white text-center p-4 bg-gradient-to-t from-ink/80 to-transparent">
                  {selectedImage.caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

