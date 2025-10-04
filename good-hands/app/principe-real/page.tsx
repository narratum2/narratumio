import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Príncipe Real Beauty Guide — Good Hands',
  description: 'Explore beauty experiences in bohemian Príncipe Real. Curated salons, studios, and wellness spaces.',
}

export default function PrincipeRealPage() {
  return (
    <div className="pt-20">
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555881770-e7c1b5e6d4d2?w=2000&q=80"
            alt="Príncipe Real"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Príncipe Real</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Bohemian charm and cutting-edge style in the heart of Lisbon
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-4xl font-serif mb-6">About Príncipe Real</h2>
          <p className="text-xl text-harbor leading-relaxed mb-8">
            Príncipe Real is where Lisbon\'s creative energy converges. This trendy neighborhood
            surrounds a beautiful garden and is home to independent boutiques, concept stores,
            and some of the city\'s most innovative beauty spaces.
          </p>
          <p className="text-lg text-harbor leading-relaxed">
            The beauty scene here reflects the neighborhood\'s bohemian spirit—expect
            forward-thinking stylists, organic treatments, and studios that double as art
            galleries. It\'s where Lisbon\'s fashion set comes for their beauty fix.
          </p>
        </div>
      </section>

      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Discover Príncipe Real
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Book beauty services in this creative neighborhood
          </p>
          <Link href="/#booking" className="btn-primary">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  )
}

