import type { Metadata } from 'next'
import HeroModern from '@/components/HeroModern'
import SearchBar from '@/components/SearchBar'
import ValueProposition from '@/components/ValueProposition'
import Services from '@/components/Services'
import CategoriesRow from '@/components/CategoriesRow'
import ExperiencesPreview from '@/components/ExperiencesPreview'
import GuidesPreview from '@/components/GuidesPreview'
import JournalPreview from '@/components/JournalPreview'
import Lookbook from '@/components/Lookbook'
import FAQExpanded from '@/components/FAQExpanded'
import ReviewsSnippet from '@/components/ReviewsSnippet'
import BookingForm from '@/components/BookingForm'
import ParallaxSection from '@/components/ParallaxSection'
// import CuratedProducts from '@/components/CuratedProducts' // Temporarily disabled

export const metadata: Metadata = {
  title: 'Good Hands — Luxury Beauty Concierge Lisbon | Vetted Professionals',
  description:
    "Lisbon's premier luxury beauty concierge. We match you with personally vetted hair stylists, spa therapists, and beauty professionals. Trusted by Four Seasons, Tivoli, and luxury hotels. Serving Chiado, Alfama, Príncipe Real, Belém, Sintra, and Cascais.",
  alternates: { canonical: 'https://goodhandsstudio.com' },
}

export default function Home() {
  return (
    <>
      <HeroModern />
      
      <ParallaxSection speed={0.15}>
        <ValueProposition />
      </ParallaxSection>
      
      <SearchBar />
      
      <ParallaxSection speed={0.1}>
        <Services />
      </ParallaxSection>
      
      <CategoriesRow />
      
      <ParallaxSection speed={0.2}>
        <ExperiencesPreview />
      </ParallaxSection>
      
      <GuidesPreview />
      
      <ParallaxSection speed={0.15}>
        <JournalPreview />
      </ParallaxSection>
      
      {/* CuratedProducts temporarily disabled - awaiting brand images */}
      {/* <CuratedProducts /> */}
      
      <Lookbook />
      <ReviewsSnippet />
      <FAQExpanded />
      <BookingForm />
    </>
  )
}
