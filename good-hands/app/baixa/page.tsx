import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Baixa Beauty Guide — Good Hands',
  description: 'Beauty services in downtown Baixa. Grand boulevards and timeless style.',
}

export default function BaixaPage() {
  return (
    <div className="pt-20">
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1562774683-6d7deec28895?w=2000&q=80" alt="Baixa" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Baixa</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Grand boulevards and timeless beauty in downtown Lisbon
          </p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-4xl font-serif mb-6">About Baixa</h2>
          <p className="text-xl text-harbor leading-relaxed">
            Baixa is Lisbon\'s historic downtown, rebuilt after the 1755 earthquake with grand
            Pombaline architecture. This organized grid of streets is home to classic salons
            and historic beauty establishments that have served generations.
          </p>
        </div>
      </section>
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Book Your Baixa Experience</h2>
          <Link href="/#booking" className="btn-primary">Book Now</Link>
        </div>
      </section>
    </div>
  )
}

