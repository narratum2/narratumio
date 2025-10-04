import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Belém Beauty Guide — Good Hands',
  description: 'Riverside beauty in historic Belém. Spa experiences by the Tagus.',
}

export default function BelemPage() {
  return (
    <div className="pt-20">
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=2000&q=80" alt="Belém" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Belém</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Riverside beauty and historic grandeur by the Tagus
          </p>
        </div>
      </section>
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-serif mb-6">Experience Belém</h2>
          <Link href="/#booking" className="btn-primary">Book Now</Link>
        </div>
      </section>
    </div>
  )
}

