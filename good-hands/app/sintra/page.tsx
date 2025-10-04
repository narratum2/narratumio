import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sintra Beauty & Wellness — Good Hands',
  description: 'Romantic escapes and wellness retreats in the enchanted hills of Sintra.',
}

export default function SintraPage() {
  return (
    <div className="pt-20">
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=2000&q=80" alt="Sintra" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Sintra</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Romantic escapes and wellness retreats in the enchanted hills
          </p>
        </div>
      </section>
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-serif mb-6">Escape to Sintra</h2>
          <Link href="/#booking" className="btn-primary">Book Retreat</Link>
        </div>
      </section>
    </div>
  )
}

