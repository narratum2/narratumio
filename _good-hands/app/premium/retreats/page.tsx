import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wellness Retreats — Good Hands',
  description: 'Multi-day beauty and wellness retreats in Sintra and Cascais. Rejuvenate with expert treatments in stunning locations.',
}

export default function RetreatsPage() {
  return (
    <div className="pt-20">
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=2000&q=80"
            alt="Wellness retreat"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/40" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Wellness Retreats</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Escape, rejuvenate, and reconnect with yourself
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-4xl font-serif mb-6">Retreat Packages</h2>
          <p className="text-xl text-harbor leading-relaxed">
            Our curated wellness retreats combine luxury accommodations, daily beauty treatments,
            wellness consultations, and mindful experiences in Portugal\'s most beautiful settings.
          </p>
        </div>
      </section>

      <section className="section-padding bg-shell">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-serif mb-4">Sintra Sanctuary</h3>
              <p className="text-lg text-harbor mb-6">
                3-5 days of mountain serenity, spa treatments, and holistic wellness in the
                UNESCO World Heritage hills of Sintra.
              </p>
              <p className="text-2xl font-serif text-gold mb-6">From €1,200</p>
              <Link href="/#booking" className="btn-primary">Book Sintra Retreat</Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80"
                alt="Sintra retreat"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-96 rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
                alt="Cascais retreat"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-serif mb-4">Cascais Coastal Escape</h3>
              <p className="text-lg text-harbor mb-6">
                2-4 days of oceanfront luxury, thalassotherapy, and seaside wellness on
                Portugal\'s stunning Atlantic coast.
              </p>
              <p className="text-2xl font-serif text-gold mb-6">From €1,500</p>
              <Link href="/#booking" className="btn-primary">Book Cascais Retreat</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Design Your Custom Retreat
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Every retreat is customizable. Let us create the perfect escape for you.
          </p>
          <Link href="/#booking" className="btn-primary">
            Plan Your Retreat
          </Link>
        </div>
      </section>
    </div>
  )
}

