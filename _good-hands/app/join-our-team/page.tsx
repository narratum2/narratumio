import { Metadata } from 'next'
import ProfessionalSignupForm from '@/components/ProfessionalSignupForm'

export const metadata: Metadata = {
  title: 'Join Our Team — Beauty Professionals | Good Hands',
  description: 'Join Lisbon\'s most exclusive network of vetted beauty professionals. Access premium clientele, flexible scheduling, and brand prestige. Apply now to become part of Good Hands.',
  keywords: 'beauty professional jobs Lisbon, hair stylist jobs Lisbon, makeup artist jobs, esthetician jobs, massage therapist jobs, beauty jobs Portugal',
}

export default function JoinOurTeamPage() {
  return <ProfessionalSignupForm />
}

