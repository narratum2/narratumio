import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Avenida Beauty Guide — Good Hands',
  description: 'Luxury beauty on Avenida da Liberdade. Lisbon\'s premier shopping and beauty district.',
}

export default function AvenidaPage() {
  return (
    <div className="pt-20">
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=2000&q=80" alt="Avenida" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Avenida da Liberdade</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Lisbon\'s Champs-Élysées with premium beauty destinations
          </p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl text-center">
          <p className="text-xl text-harbor leading-relaxed">
            Avenida da Liberdade is Lisbon\'s most prestigious boulevard, lined with luxury hotels,
            designer boutiques, and high-end spas. This is where international beauty brands meet
            Portuguese elegance.
          </p>
        </div>
      </section>
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-serif mb-6">Book Luxury Services</h2>
          <Link href="/#booking" className="btn-primary">Book Now</Link>
        </div>
      </section>
    </div>
  )
}

