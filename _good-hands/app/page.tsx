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
import CuratedProducts from '@/components/CuratedProducts'

export default function Home() {
  return (
    <>
      <HeroModern />
      
      <ParallaxSection speed={0.3}>
        <ValueProposition />
      </ParallaxSection>
      
      <SearchBar />
      
      <ParallaxSection speed={0.2}>
        <Services />
      </ParallaxSection>
      
      <CategoriesRow />
      
      <ParallaxSection speed={0.4}>
        <ExperiencesPreview />
      </ParallaxSection>
      
      <GuidesPreview />
      
      <ParallaxSection speed={0.3}>
        <JournalPreview />
      </ParallaxSection>
      
      <CuratedProducts />
      
      <Lookbook />
      <ReviewsSnippet />
      <FAQExpanded />
      <BookingForm />
    </>
  )
}
