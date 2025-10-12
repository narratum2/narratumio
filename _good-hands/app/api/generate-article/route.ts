import { NextResponse } from 'next/server'

export const runtime = 'edge'

/**
 * AI Blog Content Generation API
 * 
 * This endpoint generates SEO-optimized blog articles for Good Hands
 * using AI. Articles are optimized for lead generation and conversions.
 */

interface ArticlePrompt {
  topic: string
  category: 'hair' | 'nails' | 'skincare' | 'makeup' | 'wellness' | 'lisbon-guide' | 'beauty-tips'
  tone?: 'professional' | 'friendly' | 'luxury' | 'editorial'
  targetKeywords?: string[]
  includeCallToAction?: boolean
}

export async function POST(request: Request) {
  try {
    const body: ArticlePrompt = await request.json()
    const { 
      topic, 
      category, 
      tone = 'editorial', 
      targetKeywords = [],
      includeCallToAction = true 
    } = body

    if (!topic || !category) {
      return NextResponse.json(
        { error: 'Topic and category are required' },
        { status: 400 }
      )
    }

    // Generate article using AI (Claude/OpenAI)
    const article = await generateArticleContent({
      topic,
      category,
      tone,
      targetKeywords,
      includeCallToAction,
    })

    return NextResponse.json(article, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Article generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate article' },
      { status: 500 }
    )
  }
}

async function generateArticleContent(params: ArticlePrompt) {
  const { topic, category, tone, targetKeywords, includeCallToAction } = params

  // Build AI prompt
  const systemPrompt = `You are an expert beauty and lifestyle writer for Good Hands, a luxury beauty concierge service in Lisbon. Write engaging, SEO-optimized blog articles that educate readers while subtly promoting our concierge service. Your writing should be ${tone}, sophisticated, and conversion-focused.`

  const userPrompt = `Write a comprehensive blog article about: "${topic}"

Category: ${category}
Target Keywords: ${targetKeywords ? targetKeywords.join(', ') : 'beauty, luxury, Lisbon'}
Tone: ${tone}

Article Requirements:
1. Engaging headline (60-70 characters, include main keyword)
2. Compelling introduction (hook the reader immediately)
3. Well-structured body with subheadings (H2, H3)
4. Expert tips and actionable advice
5. Lisbon-specific references where relevant
6. Natural mentions of professional beauty services
${includeCallToAction ? '7. Strong call-to-action to book Good Hands concierge service' : ''}

Format as JSON with these fields:
{
  "title": "Article headline",
  "excerpt": "150-character summary for SEO",
  "content": "Full article in HTML format with proper headings",
  "metaDescription": "SEO meta description (155 characters)",
  "keywords": ["keyword1", "keyword2", "keyword3"],
  "category": "${category}",
  "estimatedReadTime": "X min read",
  "callToAction": "Compelling CTA text",
  "imagePrompts": ["Description for hero image", "Description for inline image"]
}`

  // In production, replace with actual AI API call (Claude/OpenAI)
  // For now, return a template structure
  
  // Example using Anthropic Claude (you'll need API key in env)
  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY

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
      const article = JSON.parse(generatedContent)
      
      return {
        ...article,
        generatedAt: new Date().toISOString(),
        status: 'generated',
      }
    } catch (error) {
      console.error('AI generation failed, using template:', error)
    }
  }

  // Fallback template if no API key
  return {
    title: `${topic}: Expert Guide from Good Hands`,
    excerpt: `Discover professional insights about ${topic.toLowerCase()} from Lisbon's premier beauty concierge service.`,
    content: `
      <h2>Introduction to ${topic}</h2>
      <p>At Good Hands, we understand the importance of ${topic.toLowerCase()}. Our expert concierge team has curated this comprehensive guide to help you navigate the complexity of finding the perfect beauty professional in Lisbon.</p>

      <h2>Why ${topic} Matters</h2>
      <p>Finding the right professional for ${category} services can be overwhelming. With countless options across Lisbon's neighborhoods, how do you choose? That's where our concierge service comes in.</p>

      <h2>Expert Tips for ${topic}</h2>
      <ul>
        <li>Research thoroughly before making a decision</li>
        <li>Look for professionals with proven track records</li>
        <li>Consider location and accessibility in Lisbon</li>
        <li>Read reviews and ask for recommendations</li>
        <li>Or simply let Good Hands match you with the perfect professional</li>
      </ul>

      <h2>Lisbon's Best ${category} Professionals</h2>
      <p>We've personally vetted every ${category} professional in our network. From Chiado to Príncipe Real, we know who excels at what. No more trial and error—we match you with the right professional the first time.</p>

      ${includeCallToAction ? `
      <h2>Let Us Handle the Complexity</h2>
      <p>Stop wasting time researching. Our concierge service takes care of everything—from finding the perfect professional to booking your appointment. Experience the Good Hands difference today.</p>
      ` : ''}
    `,
    metaDescription: `Expert guide to ${topic.toLowerCase()} in Lisbon. Professional advice from Good Hands beauty concierge. Book your perfect ${category} experience today.`,
    keywords: [topic.toLowerCase(), category, 'lisbon beauty', ...(targetKeywords || [])],
    category,
    estimatedReadTime: '5 min read',
    callToAction: includeCallToAction ? `Book your ${category} experience with Good Hands today` : null,
    imagePrompts: [
      `Luxury ${category} salon in Lisbon, elegant and modern interior`,
      `Professional ${category} treatment in progress, close-up detail shot`,
    ],
    generatedAt: new Date().toISOString(),
    status: 'template',
  }
}

// GET endpoint for API info
export async function GET() {
  return NextResponse.json({
    endpoint: '/api/generate-article',
    description: 'AI-powered blog content generation for Good Hands',
    method: 'POST',
    example: {
      topic: 'The Art of Balayage Hair Coloring',
      category: 'hair',
      tone: 'editorial',
      targetKeywords: ['balayage lisbon', 'hair coloring', 'professional colorist'],
      includeCallToAction: true,
    },
    categories: ['hair', 'nails', 'skincare', 'makeup', 'wellness', 'lisbon-guide', 'beauty-tips'],
    tones: ['professional', 'friendly', 'luxury', 'editorial'],
  })
}

