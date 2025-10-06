import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cascais Beauty & Wellness — Good Hands',
  description: 'Coastal elegance and resort-style beauty by the Atlantic Ocean.',
}

export default function CascaisPage() {
  return (
    <div className="pt-20">
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=2000&q=80" alt="Cascais" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Cascais</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Coastal elegance and resort-style pampering by the Atlantic
          </p>
        </div>
      </section>
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-serif mb-6">Coastal Luxury</h2>
          <Link href="/#booking" className="btn-primary">Book Now</Link>
        </div>
      </section>
    </div>
  )
}

