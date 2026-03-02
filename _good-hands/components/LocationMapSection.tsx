import Link from 'next/link'

interface LocationMapSectionProps {
  neighborhoodName: string
  /** URL-encoded query for Google Maps, e.g. "beauty+salons+chiado+lisbon" */
  mapsQuery: string
}

export default function LocationMapSection({ neighborhoodName, mapsQuery }: LocationMapSectionProps) {
  const mapsUrl = `https://www.google.com/maps/search/${mapsQuery}`

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Explore {neighborhoodName}
          </h2>
          <p className="text-harbor text-lg mb-8">
            Discover beauty salons, spas, and wellness centers throughout the neighborhood
          </p>
          <div className="bg-shell rounded-lg p-12">
            <svg
              className="w-16 h-16 mx-auto mb-6 text-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h3 className="text-2xl font-serif mb-4">View on Map</h3>
            <p className="text-harbor mb-6">
              Explore beauty services and local landmarks in {neighborhoodName}
            </p>
            <Link
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Open in Google Maps
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
