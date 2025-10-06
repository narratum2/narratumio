import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import CategoriesRow from '@/components/CategoriesRow'
import Services from '@/components/Services'
import ExperiencesPreview from '@/components/ExperiencesPreview'
import JournalPreview from '@/components/JournalPreview'
import GuidesPreview from '@/components/GuidesPreview'
import Lookbook from '@/components/Lookbook'
import ReviewsSnippet from '@/components/ReviewsSnippet'
import FAQ from '@/components/FAQ'
import BookingForm from '@/components/BookingForm'

export default function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <CategoriesRow />
      <Services />
      <ExperiencesPreview />
      <JournalPreview />
      <GuidesPreview />
      <Lookbook />
      <ReviewsSnippet />
      <FAQ />
      <BookingForm />
    </>
  )
}

