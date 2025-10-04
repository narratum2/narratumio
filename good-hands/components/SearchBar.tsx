'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { value: 'all', label: 'All Services' },
    { value: 'hair', label: 'Hair' },
    { value: 'nails', label: 'Nails' },
    { value: 'skincare', label: 'Skincare' },
    { value: 'makeup', label: 'Makeup' },
    { value: 'wellness', label: 'Wellness' },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search:', { searchTerm, selectedCategory })
    // Implement search logic or navigation
  }

  return (
    <section id="search" className="section-padding bg-shell">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-8">
            Find Your Perfect Experience
          </h2>
          
          <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1">
                <label htmlFor="search" className="sr-only">
                  Search services
                </label>
                <input
                  id="search"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for services, treatments, or locations..."
                  className="w-full px-4 py-3 border border-harbor/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>

              {/* Category Select */}
              <div className="md:w-48">
                <label htmlFor="category" className="sr-only">
                  Select category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-harbor/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-8 py-3 bg-ink text-white rounded-sm font-medium hover:bg-ink-light transition-all focus-visible-ring"
              >
                Search
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

