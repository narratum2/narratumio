import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Sparkles, Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wellness & Massage Services in Lisbon — Good Hands',
  description: 'Professional massage and wellness services in Lisbon. Swedish, deep tissue, aromatherapy, hot stone massage. Expert concierge matching with licensed therapists.',
  keywords: ['massage lisbon', 'spa lisbon', 'wellness lisbon', 'swedish massage lisbon', 'deep tissue lisbon'],
}

const wellnessServices = [
  {
    name: 'Swedish Massage',
    price: 'From €90',
    duration: '60 min',
    description: 'Classic relaxation massage using long, flowing strokes, kneading, and circular movements. Perfect for stress relief and improving circulation.',
    features: ['Full body', 'Adjustable pressure', 'Relaxation focus', 'Aromatherapy option', 'Improves circulation'],
  },
  {
    name: 'Deep Tissue Massage',
    price: 'From €100',
    duration: '75 min',
    description: 'Focused therapeutic massage targeting chronic muscle tension and knots. Uses slower, deeper strokes to reach sublayer muscles and fascia.',
    features: ['Targets problem areas', 'Chronic pain relief', 'Intense pressure', 'Post-session soreness possible', 'Injury recovery support'],
  },
  {
    name: 'Aromatherapy Massage',
    price: 'From €95',
    duration: '60 min',
    description: 'Swedish-style massage enhanced with essential oils chosen for therapeutic properties. Lavender for relaxation, eucalyptus for respiratory, citrus for energy.',
    features: ['Custom oil blend', 'Holistic benefits', 'Mood enhancement', 'Stress reduction', 'Sensory experience'],
  },
  {
    name: 'Hot Stone Massage',
    price: 'From €110',
    duration: '90 min',
    description: 'Heated basalt stones placed on key points and used during massage. Deep heat penetrates muscles, releasing tension more effectively.',
    features: ['Smooth heated stones', 'Deep relaxation', 'Muscle tension release', 'Improved circulation', 'Winter favorite'],
  },
  {
    name: 'Pregnancy Massage',
    price: 'From €90',
    duration: '60 min',
    description: 'Specialized massage adapted for pregnant women. Focuses on back pain, leg swelling, and stress relief with safe positioning and techniques.',
    features: ['Certified prenatal therapists', 'Side-lying position', 'Back & leg focus', 'Second & third trimester safe', 'Pregnancy cushions'],
  },
  {
    name: 'Couples Massage',
    price: 'From €180',
    duration: '60 min',
    description: 'Side-by-side massage in the same room. Choose Swedish, deep tissue, or aromatherapy. Perfect for anniversaries, honeymoons, or shared relaxation.',
    features: ['Private room', 'Two therapists', 'Synchronized session', 'Champagne option', 'Romantic experience'],
  },
]

export default function WellnessServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/brand-images/category-wellness.png"
            alt="Wellness spa and massage experiences in Lisbon - Good Hands luxury concierge"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-12 h-12 text-gold" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Wellness & Massage</h1>
          <p className="text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto">
            Professional massage therapy matched to your needs
          </p>
          <p className="text-lg text-gold mt-3">
            All prices include expert concierge matching & coordination
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-center">Your Body Deserves Expert Care</h2>
          
          <div className="prose prose-lg max-w-none text-harbor space-y-6 text-center mb-12">
            <p className="text-xl leading-relaxed">
              Massage isn&apos;t a luxury—it&apos;s essential self-care. We match you with licensed massage therapists who understand anatomy, therapeutic techniques, and how to customize pressure and approach to your body&apos;s unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Licensed Therapists</h3>
              <p className="text-harbor text-sm">
                All therapists hold professional certifications and licenses—verified credentials, not just experience claims
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Proper Time Allocation</h3>
              <p className="text-harbor text-sm">
                60 minutes means 60 minutes on the table—not including consultation or dressing time
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Peaceful Settings</h3>
              <p className="text-harbor text-sm">
                Clean, quiet treatment rooms with proper tables, fresh linens, and professional ambiance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Our Wellness Services</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {wellnessServices.map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif">{service.name}</h3>
                  <div className="text-right">
                    <div className="text-gold font-semibold text-lg">{service.price}</div>
                    <div className="text-harbor text-sm">{service.duration}</div>
                  </div>
                </div>
                
                <p className="text-harbor mb-4">{service.description}</p>
                
                <div className="border-t border-harbor/10 pt-4">
                  <p className="text-sm font-semibold mb-2">Features:</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-harbor flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 text-xs text-gold">
                  ✓ Concierge matching & coordination included
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choosing the Right Massage */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Which Massage is Right for You?</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-semibold mb-2">For Stress & Relaxation</h3>
              <p className="text-harbor">
                <strong>Choose:</strong> Swedish Massage or Aromatherapy Massage<br/>
                <strong>Why:</strong> Gentle pressure, full relaxation focus, promotes sleep, reduces anxiety. You&apos;ll leave feeling calm and loose, not sore.
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-semibold mb-2">For Chronic Pain or Tension</h3>
              <p className="text-harbor">
                <strong>Choose:</strong> Deep Tissue Massage<br/>
                <strong>Why:</strong> Targets specific problem areas (tight shoulders, lower back pain, muscle knots). Therapeutic, not just relaxing. May be temporarily uncomfortable but addresses underlying issues.
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-semibold mb-2">For Cold Weather Comfort</h3>
              <p className="text-harbor">
                <strong>Choose:</strong> Hot Stone Massage<br/>
                <strong>Why:</strong> Deep heat penetration feels amazing in winter. Melts tension faster than hands alone. Ultimate comfort and warmth.
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-semibold mb-2">For Pregnancy Discomfort</h3>
              <p className="text-harbor">
                <strong>Choose:</strong> Pregnancy Massage (after first trimester)<br/>
                <strong>Why:</strong> Safe positioning, focuses on pregnancy-specific issues (back pain, leg swelling), therapists trained in prenatal safety.
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-semibold mb-2">For Special Occasions</h3>
              <p className="text-harbor">
                <strong>Choose:</strong> Couples Massage<br/>
                <strong>Why:</strong> Shared relaxation experience, romantic, great for honeymoons, anniversaries, or simply reconnecting with your partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Good Hands */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Why Book Massage Through Good Hands?</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">🏥 Verified Credentials</h3>
              <p className="text-harbor">
                We verify every therapist&apos;s license, certification, and training. You&apos;re getting legitimate massage therapy from qualified professionals, not untrained practitioners.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">💬 Clear Communication</h3>
              <p className="text-harbor">
                All therapists speak English fluently. Communicate your pain points, pressure preferences, and any injuries clearly—no language barriers to proper treatment.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">🧼 Hygiene Standards</h3>
              <p className="text-harbor">
                Fresh linens every session, clean treatment rooms, sanitized equipment. We inspect facilities personally—you&apos;re getting professional spa standards, not sketchy "massage" parlors.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">⏱️ Full-Time Guarantee</h3>
              <p className="text-harbor">
                Book 60 minutes, get 60 minutes on the table. Some places short you 5-10 minutes for "setup"—we guarantee full treatment time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">What to Expect at Your Massage</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Before Treatment (10 minutes):</h3>
              <ul className="space-y-2 text-harbor ml-6">
                <li>• Brief health history form (injuries, medical conditions, allergies)</li>
                <li>• Consultation about problem areas and pressure preferences</li>
                <li>• Therapist leaves room while you undress to comfort level</li>
                <li>• Lie on table under sheet—you&apos;re draped throughout</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">During Treatment:</h3>
              <ul className="space-y-2 text-harbor ml-6">
                <li>• Only area being worked on is exposed, rest stays draped</li>
                <li>• Therapist checks in about pressure periodically</li>
                <li>• Communicate if anything feels uncomfortable</li>
                <li>• Falling asleep is completely normal and welcomed</li>
                <li>• Sessions are silent or with quiet music—no awkward small talk unless you initiate</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">After Treatment:</h3>
              <ul className="space-y-2 text-harbor ml-6">
                <li>• Therapist leaves while you dress</li>
                <li>• Drink water immediately (flushes released toxins)</li>
                <li>• Don&apos;t rush—take time to reorient</li>
                <li>• Possible mild soreness 24-48 hours (especially deep tissue)</li>
                <li>• Benefits continue developing for 2-3 days post-treatment</li>
              </ul>
            </div>

            <div className="bg-gold/10 rounded-lg p-6">
              <p className="text-harbor">
                <strong>💡 Pro Tip:</strong> Schedule massage for late afternoon or evening, not morning. This way you can go home, rest, and let the relaxation continue rather than rushing back to work or activities. Your body needs time to integrate the benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-shell">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Massage FAQ</h2>
          
          <div className="space-y-6">
            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                How much should I undress?
              </summary>
              <p className="mt-4 text-harbor">
                To your comfort level. Most people undress completely or down to underwear—you&apos;re draped with sheets throughout and only the area being worked on is ever exposed. More clothing = more limited access to muscles.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                Will deep tissue massage hurt?
              </summary>
              <p className="mt-4 text-harbor">
                It can be intense ("good pain"), but shouldn&apos;t be unbearable. Communicate if pressure is too much. Temporary soreness 24-48 hours after is normal as muscles release. That&apos;s different from injury pain.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                How often should I get massage?
              </summary>
              <p className="mt-4 text-harbor">
                For general wellness: monthly. For chronic pain: weekly or biweekly until improved, then monthly maintenance. For stress management: every 2-3 weeks provides consistent benefits. For special occasions: as desired.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                Can I request a male or female therapist?
              </summary>
              <p className="mt-4 text-harbor">
                Absolutely. Gender preference is common and never questioned. Simply mention it when booking with Good Hands.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none">
                What&apos;s the difference between massage and physiotherapy?
              </summary>
              <p className="mt-4 text-harbor">
                Massage focuses on relaxation and general muscle tension. Physiotherapy addresses specific injuries with therapeutic exercises and rehabilitation. For injury recovery, combine both—ask your doctor which to prioritize.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to Relax?
          </h2>
          <p className="text-xl text-porcelain/80 mb-8 max-w-2xl mx-auto">
            We&apos;ll match you with a licensed massage therapist perfect for your needs
          </p>
          <Link href="/#booking" className="btn-primary">
            Book Wellness Service
          </Link>
          <p className="text-sm text-porcelain/60 mt-6">
            Expert concierge matching included • Licensed therapists • Professional facilities
          </p>
        </div>
      </section>
    </div>
  )
}

