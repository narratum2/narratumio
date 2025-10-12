import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import CategoriesRow from '@/components/CategoriesRow'
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
      {/* Services component removed - redundant with CategoriesRow */}
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

