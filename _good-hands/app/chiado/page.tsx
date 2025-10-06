import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chiado Beauty Guide — Good Hands',
  description: 'Discover the best beauty salons, spas, and wellness centers in historic Chiado. Curated by Good Hands.',
}

const partners = [
  {
    name: 'Atelier de Beleza',
    type: 'Hair Salon',
    description: 'Classic elegance meets modern technique',
    specialty: 'Precision cuts & color',
  },
  {
    name: 'Spa Chiado',
    type: 'Day Spa',
    description: 'Luxury treatments in a historic setting',
    specialty: 'Facials & massage',
  },
  {
    name: 'Nails Boutique',
    type: 'Nail Studio',
    description: 'Art-inspired manicures and pedicures',
    specialty: 'Gel art & extensions',
  },
]

export default function ChiadoPage() {
  return (
    <div className="pt-20">
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1585208798174-6cedd86e1b5a?w=2000&q=80"
            alt="Chiado neighborhood"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Chiado</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Historic elegance meets modern luxury in Lisbon\'s most refined district
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-serif mb-6 text-center">About Chiado</h2>
          <p className="text-xl text-harbor leading-relaxed text-center mb-8">
            Nestled between Bairro Alto and Baixa, Chiado is Lisbon\'s cultural heart. This
            elegant neighborhood combines centuries of history with contemporary sophistication,
            making it the perfect setting for luxury beauty experiences.
          </p>
          <p className="text-lg text-harbor leading-relaxed text-center">
            From grand Art Nouveau buildings to intimate salons tucked in cobbled streets,
            Chiado\'s beauty scene reflects the neighborhood\'s refined character. Here you\'ll
            find master stylists, historic spas, and boutique studios that have served
            Lisbon\'s discerning clientele for generations.
          </p>
        </div>
      </section>

      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-4xl font-serif mb-12 text-center">Curated Partners in Chiado</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-serif mb-2">{partner.name}</h3>
                <p className="text-sm text-gold mb-3">{partner.type}</p>
                <p className="text-harbor mb-3">{partner.description}</p>
                <p className="text-sm font-medium">
                  <span className="text-harbor/60">Specialty:</span> {partner.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-serif mb-8 text-center">Neighborhood Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-serif mb-3">📍 Getting There</h3>
              <p className="text-harbor">
                Metro: Baixa-Chiado (Blue/Green lines)<br />
                Tram: 28E (iconic yellow tram)<br />
                Easy walking from Rossio and Bairro Alto
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-3">☕ After Your Treatment</h3>
              <p className="text-harbor">
                A Brasileira café, Bertrand bookstore (world\'s oldest),<br />
                Designer boutiques on Rua Garrett,<br />
                Miradouro de Santa Catarina viewpoint
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Book Your Chiado Experience
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            Let us connect you with the perfect salon or spa in Chiado
          </p>
          <Link href="/#booking" className="btn-primary">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  )
}

