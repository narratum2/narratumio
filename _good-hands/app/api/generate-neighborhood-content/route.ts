import { NextResponse } from 'next/server'

export const runtime = 'edge'

/**
 * AI Neighborhood Content Generator
 * 
 * Automatically generates rich, SEO-optimized content for neighborhood pages
 * Includes: beauty scene overview, best services, local atmosphere, booking CTAs
 */

interface NeighborhoodPrompt {
  neighborhood: string
  focus?: 'beauty' | 'lifestyle' | 'complete'
  includeProviders?: boolean
}

const LISBON_NEIGHBORHOODS = {
  chiado: {
    name: 'Chiado',
    character: 'Historic, elegant, cultural heart',
    landmarks: ['A Brasileira café', 'Bertrand bookstore', 'São Carlos Theatre'],
    vibe: 'Sophisticated, literary, refined',
  },
  'principe-real': {
    name: 'Príncipe Real',
    character: 'Bohemian, trendy, LGBTQ+ friendly',
    landmarks: ['Príncipe Real Garden', 'Embaixada concept store', 'Miradouro São Pedro de Alcântara'],
    vibe: 'Artistic, cosmopolitan, fashionable',
  },
  baixa: {
    name: 'Baixa',
    character: 'Downtown, commercial, bustling',
    landmarks: ['Praça do Comércio', 'Rua Augusta', 'Santa Justa Elevator'],
    vibe: 'Energetic, central, accessible',
  },
  avenida: {
    name: 'Avenida da Liberdade',
    character: 'Luxury, high-end, prestigious',
    landmarks: ['Luxury boutiques', 'Grand hotels', 'Tree-lined avenue'],
    vibe: 'Opulent, exclusive, glamorous',
  },
  alfama: {
    name: 'Alfama',
    character: 'Ancient, authentic, traditional',
    landmarks: ['São Jorge Castle', 'Fado houses', 'Portas do Sol viewpoint'],
    vibe: 'Intimate, historic, soulful',
  },
  belem: {
    name: 'Belém',
    character: 'Riverside, monumental, spacious',
    landmarks: ['Jerónimos Monastery', 'Belém Tower', 'Monument to Discoveries'],
    vibe: 'Grand, peaceful, cultural',
  },
  sintra: {
    name: 'Sintra',
    character: 'Mountain retreat, romantic, fairy-tale',
    landmarks: ['Pena Palace', 'Quinta da Regaleira', 'Moorish Castle'],
    vibe: 'Magical, lush, escapist',
  },
  cascais: {
    name: 'Cascais',
    character: 'Coastal, resort town, upscale',
    landmarks: ['Boca do Inferno', 'Marina', 'Guincho Beach'],
    vibe: 'Relaxed, sunny, coastal chic',
  },
}

export async function POST(request: Request) {
  try {
    const body: NeighborhoodPrompt = await request.json()
    const { neighborhood, focus = 'complete', includeProviders = true } = body

    if (!neighborhood || !LISBON_NEIGHBORHOODS[neighborhood as keyof typeof LISBON_NEIGHBORHOODS]) {
      return NextResponse.json(
        { error: 'Invalid neighborhood. Must be one of: ' + Object.keys(LISBON_NEIGHBORHOODS).join(', ') },
        { status: 400 }
      )
    }

    const content = await generateNeighborhoodContent(neighborhood, focus, includeProviders)

    return NextResponse.json(content, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Neighborhood content generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate neighborhood content' },
      { status: 500 }
    )
  }
}

async function generateNeighborhoodContent(
  neighborhoodSlug: string,
  focus: string,
  includeProviders: boolean
) {
  const neighborhood = LISBON_NEIGHBORHOODS[neighborhoodSlug as keyof typeof LISBON_NEIGHBORHOODS]

  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY

  const systemPrompt = `You are a luxury travel and beauty writer specializing in Lisbon. You write for Good Hands, an exclusive beauty concierge service. Your writing is sophisticated, evocative, and conversion-focused. You understand how a neighborhood's atmosphere influences its beauty scene.`

  const userPrompt = `Write comprehensive content for a neighborhood guide page about ${neighborhood.name}, Lisbon.

Neighborhood Character: ${neighborhood.character}
Atmosphere: ${neighborhood.vibe}
Notable Landmarks: ${neighborhood.landmarks.join(', ')}

Create content that includes:

1. **Hero Section**
   - Compelling headline about ${neighborhood.name}'s beauty scene
   - Evocative 2-sentence description of the neighborhood's character

2. **About the Neighborhood** (200 words)
   - Paint a vivid picture of ${neighborhood.name}
   - Describe the atmosphere and the type of people who live/visit here
   - Explain why this neighborhood attracts certain beauty professionals
   - Connect the neighborhood's character to its beauty offerings

3. **The Beauty Scene in ${neighborhood.name}** (250 words)
   - What makes ${neighborhood.name}'s beauty services unique
   - Types of professionals attracted to this area (hair colorists, nail artists, etc.)
   - The style and aesthetic of salons here (modern/traditional/boutique)
   - Price range and quality expectations
   - How the neighborhood's vibe influences beauty trends here

4. **Why Choose Good Hands in ${neighborhood.name}** (150 words)
   - We know every professional in this neighborhood personally
   - We understand the neighborhood's unique style
   - We match you with professionals who fit the ${neighborhood.vibe} aesthetic
   - Strong call-to-action

5. **Recommended Services** (List format)
   - 3 service types that are particularly excellent in this neighborhood
   - Brief explanation of why each service excels here

6. **Getting There & Around**
   - Metro/transport options
   - Best times to visit for appointments
   - Where to go before/after your beauty appointment

Format as JSON:
{
  "heroHeadline": "Compelling headline",
  "heroSubtitle": "2-sentence evocative description",
  "aboutContent": "200-word HTML content",
  "beautySceneContent": "250-word HTML content with <h3> subheadings",
  "whyGoodHandsContent": "150-word HTML content with strong CTA",
  "recommendedServices": [
    {
      "service": "Service name",
      "why": "Why it's great here",
      "priceRange": "From €X"
    }
  ],
  "gettingThere": "HTML content with transport info",
  "metaDescription": "155-character SEO description",
  "pageTitle": "SEO page title (60 characters)",
  "keywords": ["keyword1", "keyword2", "keyword3"]
}`

  if (ANTHROPIC_API_KEY) {
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 4096,
          system: systemPrompt,
          messages: [
            {
              role: 'user',
              content: userPrompt,
            },
          ],
        }),
      })

      const data = await response.json()
      const generatedContent = data.content[0].text

      // Parse JSON response from Claude
      const content = JSON.parse(generatedContent)
      
      return {
        ...content,
        neighborhood: neighborhoodSlug,
        generatedAt: new Date().toISOString(),
        status: 'generated',
      }
    } catch (error) {
      console.error('AI generation failed, using template:', error)
    }
  }

  // Fallback template (high-quality, ready to use)
  return {
    heroHeadline: `Discover ${neighborhood.name}'s Hidden Beauty Gems`,
    heroSubtitle: `${neighborhood.character}. Where Lisbon's ${neighborhood.vibe} spirit meets exceptional beauty expertise.`,
    aboutContent: `
      <p>
        ${neighborhood.name} is ${neighborhood.character}, making it one of Lisbon's most distinctive neighborhoods. 
        The streets around ${neighborhood.landmarks[0]} buzz with a unique energy that attracts both locals and 
        discerning visitors seeking authentic experiences.
      </p>
      <p>
        This ${neighborhood.vibe} atmosphere naturally draws beauty professionals who understand sophistication. 
        Walking through ${neighborhood.name}, you'll find boutique salons tucked into historic buildings, 
        modern spas with river views, and intimate studios where master technicians practice their craft.
      </p>
      <p>
        The neighborhood's character influences everything—from the minimalist aesthetics of its salons to 
        the personalized, unhurried service you'll receive. This isn't about quick appointments; it's about 
        the art of transformation in a setting that inspires.
      </p>
    `,
    beautySceneContent: `
      <h3>A Neighborhood That Attracts Excellence</h3>
      <p>
        ${neighborhood.name}'s beauty scene reflects its ${neighborhood.vibe} character. The professionals 
        who choose to work here aren't just skilled—they're artists who've been drawn to this neighborhood's 
        unique atmosphere. You'll find celebrated hair colorists who've trained in Paris, nail artists who 
        push creative boundaries, and estheticians who blend Portuguese traditions with cutting-edge techniques.
      </p>
      
      <h3>What Makes Beauty Services Here Different</h3>
      <p>
        In ${neighborhood.name}, beauty services come with context. Your stylist knows the neighborhood's history. 
        Your facialist sources products from local Portuguese brands. The experience isn't transactional—it's 
        an introduction to Lisbon's creative spirit.
      </p>
      <p>
        Expect higher standards here. These professionals maintain their reputation through excellence, not marketing. 
        Word travels fast in ${neighborhood.name}, and only the best survive. That's why Good Hands has carefully 
        vetted every single professional in our ${neighborhood.name} network.
      </p>
      
      <h3>The ${neighborhood.name} Aesthetic</h3>
      <p>
        Whether you're seeking a classic Portuguese beauty ritual or contemporary styling, ${neighborhood.name}'s 
        salons deliver. The aesthetic leans ${neighborhood.vibe}, with interiors that range from restored 
        19th-century spaces to sleek modern studios. What they all share: attention to detail and an understanding 
        that beauty is about more than just the result—it's about the entire experience.
      </p>
    `,
    whyGoodHandsContent: `
      <p>
        Finding the right beauty professional in ${neighborhood.name} is challenging. The best studios don't advertise. 
        Master technicians often work by appointment only. Language barriers complicate communication about exactly 
        what you want.
      </p>
      <p>
        <strong>That's where Good Hands makes the difference.</strong> We know every exceptional professional in 
        ${neighborhood.name} personally. We understand who excels at what, who speaks English fluently, and who's 
        worth the investment. We've done the research, built the relationships, and tested the services.
      </p>
      <p>
        More importantly, we understand ${neighborhood.name}'s unique aesthetic. When you book through Good Hands, 
        we don't just find you any professional—we match you with someone who gets the ${neighborhood.vibe} style 
        you're seeking. No trial and error. No disappointments. Just perfect matches, every time.
      </p>
      <div class="mt-6">
        <a href="/#booking" class="btn-primary">Book Your ${neighborhood.name} Experience</a>
      </div>
    `,
    recommendedServices: [
      {
        service: 'Hair Color & Styling',
        why: `${neighborhood.name}'s colorists are known for natural-looking highlights and cuts that work with Lisbon's climate`,
        priceRange: 'From €105',
      },
      {
        service: 'Advanced Skincare',
        why: 'Estheticians here blend Portuguese beauty traditions with modern techniques',
        priceRange: 'From €125',
      },
      {
        service: 'Luxury Nail Care',
        why: `The ${neighborhood.vibe} aesthetic extends to detailed, artistic nail work`,
        priceRange: 'From €60',
      },
    ],
    gettingThere: `
      <div class="space-y-4">
        <div>
          <h4 class="font-semibold text-ink mb-2">🚇 By Metro</h4>
          <p class="text-harbor">
            Nearest stations vary by salon location. Good Hands provides exact directions when you book.
          </p>
        </div>
        <div>
          <h4 class="font-semibold text-ink mb-2">🚕 By Taxi/Uber</h4>
          <p class="text-harbor">
            Most affordable and convenient. Simply share your appointment address.
          </p>
        </div>
        <div>
          <h4 class="font-semibold text-ink mb-2">⏰ Best Times</h4>
          <p class="text-harbor">
            Weekday mornings (10am-12pm) are quieter. Weekend afternoons book quickly—reserve in advance.
          </p>
        </div>
        <div>
          <h4 class="font-semibold text-ink mb-2">☕ Before or After</h4>
          <p class="text-harbor">
            ${neighborhood.landmarks[0]} is nearby. Perfect for coffee before your appointment or lunch after. 
            Good Hands includes neighborhood recommendations with every booking.
          </p>
        </div>
      </div>
    `,
    metaDescription: `Discover ${neighborhood.name}'s best beauty salons and spas. Good Hands connects you with vetted professionals in Lisbon's ${neighborhood.vibe} neighborhood. Book today.`,
    pageTitle: `${neighborhood.name} Beauty Guide — Good Hands Lisbon`,
    keywords: [
      `${neighborhood.name} beauty`,
      `${neighborhood.name} salons`,
      `${neighborhood.name} spa`,
      'lisbon beauty services',
      `${neighborhoodSlug} hair salon`,
      'beauty concierge lisbon',
    ],
    neighborhood: neighborhoodSlug,
    generatedAt: new Date().toISOString(),
    status: 'template',
  }
}

// GET endpoint for API info
export async function GET() {
  return NextResponse.json({
    endpoint: '/api/generate-neighborhood-content',
    description: 'AI-powered neighborhood content generation for Good Hands',
    method: 'POST',
    neighborhoods: Object.keys(LISBON_NEIGHBORHOODS),
    example: {
      neighborhood: 'chiado',
      focus: 'complete',
      includeProviders: true,
    },
  })
}

