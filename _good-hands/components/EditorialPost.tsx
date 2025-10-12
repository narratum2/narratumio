'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface EditorialPostProps {
  title: string
  eyebrow?: string
  author: string
  date: string
  readTime?: string
  heroImage: string
  children: React.ReactNode
}

export default function EditorialPost({
  title,
  eyebrow = 'JOURNAL',
  author,
  date,
  readTime = '5 min read',
  heroImage,
  children,
}: EditorialPostProps) {
  return (
    <article className="bg-white">
      {/* Hero Image - Full Bleed */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/60" />
      </div>

      {/* Article Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="content-narrow section-padding"
      >
        {/* Eyebrow */}
        <p className="text-sm uppercase tracking-wide text-gold mb-4 font-medium">
          {eyebrow}
        </p>

        {/* Headline - Large Serif */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight">
          {title}
        </h1>

        {/* Byline */}
        <div className="flex items-center gap-4 text-harbor text-sm pb-8 border-b border-harbor/10">
          <span className="font-medium text-ink">{author}</span>
          <span>•</span>
          <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
          <span>•</span>
          <span>{readTime}</span>
        </div>
      </motion.header>

      {/* Article Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="content-narrow editorial-content pb-24"
      >
        {children}
      </motion.div>

      {/* Related Articles CTA */}
      <section className="section-padding bg-shell">
        <div className="container-custom text-center">
          <h3 className="text-3xl font-serif mb-6">More from the Journal</h3>
          <Link href="/journal" className="btn-secondary">
            Explore All Articles
          </Link>
        </div>
      </section>
    </article>
  )
}

// Example Usage Component
export function EditorialPostExample() {
  return (
    <EditorialPost
      title="Finding Calm in Chiado"
      eyebrow="WELLNESS GUIDE"
      author="Maria Santos"
      date="2024-10-11"
      readTime="8 min read"
      heroImage="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=2000&q=80"
    >
      {/* Drop Cap First Paragraph */}
      <p className="drop-cap">
        In the heart of Lisbon, tucked between the grand facades of Chiado's theatres and boutiques, 
        lies a collection of wellness sanctuaries that most tourists never find. These aren't the 
        places shouting from Instagram feeds—they're the quiet refuges that locals whisper about, 
        the kind where you book three months ahead because word travels slowly but surely.
      </p>

      <p>
        I've spent five years navigating this city's beauty landscape, and what I've learned is that 
        the best massage in Lisbon isn't where you'd expect. It's in a third-floor walk-up with windows 
        that frame the Tagus, where Ana has been working magic on stressed shoulders since before wellness 
        became a buzzword.
      </p>

      <h2>The Art of Slow Beauty</h2>

      <p>
        Lisbon moves at its own pace—locals call it "devagar," slowly. The city's wellness philosophy 
        mirrors this: treatments aren't rushed, conversations aren't transactional, and you're never 
        just a time slot. It's the antithesis of conveyor-belt beauty.
      </p>

      {/* Pull Quote */}
      <blockquote className="editorial-quote">
        The best treatments in Lisbon happen in spaces where time seems suspended—where you hear 
        the tram bells through open windows and smell jasmine drifting up from the street.
      </blockquote>

      <h3>Where Locals Actually Go</h3>

      <p>
        Forget the hotel spas. The places worth your time are tucked into centuries-old buildings, 
        often with no signage beyond a small brass plaque. Here's what I tell friends who ask:
      </p>

      <ul>
        <li>Book treatments for late afternoon when the light turns golden</li>
        <li>Choose spaces with natural ventilation—Lisbon's breeze is part of the experience</li>
        <li>Don't rush to leave; many include time for tea afterward</li>
      </ul>

      <h2>The Chiado Secret</h2>

      <p>
        There's a facial treatment I keep coming back to—not because it's trendy or Instagram-worthy, 
        but because Sofia, the esthetician, knows Portuguese skincare traditions that predate all the 
        current buzz. She uses honey from Alentejo, olive oil from family groves, and her hands move 
        with the kind of confidence that comes from decades of practice.
      </p>

      <p>
        "Skincare isn't about fighting age," she once told me, hands working rose hip oil into my cheeks. 
        "It's about respecting what your face has lived through." It's this philosophy—beauty as 
        self-care rather than self-improvement—that defines the best of Lisbon's wellness scene.
      </p>

      {/* CTA Section */}
      <div className="cta-section">
        <h3>Experience It Yourself</h3>
        <p className="mb-6">
          We can connect you with these hidden gems—the places locals trust with their own skin, 
          hair, and well-being.
        </p>
        <Link href="/#booking" className="btn-gold">
          Reserve Your Wellness Session
        </Link>
      </div>

      <p className="text-sm text-harbor italic mt-12">
        <strong>About the Author:</strong> Maria Santos has been curating Lisbon's beauty experiences 
        for Good Hands since 2020. She lives in Príncipe Real with two rescue cats and an ever-growing 
        collection of Portuguese ceramics.
      </p>
    </EditorialPost>
  )
}

