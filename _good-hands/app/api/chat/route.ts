import { NextResponse } from 'next/server'

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || ''

interface Message {
  role: 'user' | 'assistant'
  content: string
  expert?: string
}

// AI Expert routing logic
function determineExpert(message: string, conversationHistory: Message[]): string {
  const lowerMessage = message.toLowerCase()
  
  // Hotel/Partnership inquiries → Miguel
  if (lowerMessage.includes('hotel') || lowerMessage.includes('partnership') || 
      lowerMessage.includes('business') || lowerMessage.includes('collaborate') ||
      lowerMessage.includes('corporate')) {
    return 'Miguel'
  }
  
  // Neighborhood/Travel questions → Isabella
  if (lowerMessage.includes('neighborhood') || lowerMessage.includes('area') || 
      lowerMessage.includes('where') || lowerMessage.includes('alfama') ||
      lowerMessage.includes('chiado') || lowerMessage.includes('belem') ||
      lowerMessage.includes('cascais') || lowerMessage.includes('sintra')) {
    return 'Isabella'
  }
  
  // Premium/VIP services → Clara
  if (lowerMessage.includes('premium') || lowerMessage.includes('vip') || 
      lowerMessage.includes('luxury') || lowerMessage.includes('exclusive') ||
      lowerMessage.includes('corporate') || lowerMessage.includes('wedding')) {
    return 'Clara'
  }
  
  // Style/Customization → Sofia
  if (lowerMessage.includes('style') || lowerMessage.includes('look') || 
      lowerMessage.includes('recommend') || lowerMessage.includes('custom') ||
      lowerMessage.includes('design') || lowerMessage.includes('aesthetic')) {
    return 'Sofia'
  }
  
  // Default: Customer Success → Beatriz
  return 'Beatriz'
}

// Get expert personality and context
function getExpertContext(expert: string): string {
  const contexts: { [key: string]: string } = {
    'Beatriz': `You are Beatriz, the Customer Success Manager at Good Hands, a luxury beauty concierge service in Lisbon. 
    
Your role:
- Warm, helpful, and professional
- Expert knowledge of all services
- Can book appointments
- Solve customer issues with empathy
- Provide service recommendations
- Answer questions about pricing, availability, locations

Your tone: Warm concierge service, like a knowledgeable friend helping someone discover the best beauty experiences.

Key info to share:
- We match clients with top beauty professionals in Lisbon
- Concierge service fee included in transparent pricing
- Services: hair styling, spa treatments, makeup, nails, wellness
- We serve hotels, travelers, and local clients
- Available in all major Lisbon neighborhoods
- 24/7 booking support`,

    'Miguel': `You are Miguel, the Partnership Director at Good Hands. 

Your role:
- B2B relationship expert
- Focus on hotel partnerships and collaborations
- Professional, strategic, results-oriented
- Expert in explaining partnership value proposition

Your tone: Professional yet personable, strategic business partner

Key partnership benefits:
- Enhance guest experience without hiring staff
- Seamless integration with hotel concierge
- Commission-based, no upfront costs
- Curated network of top beauty professionals
- White-label and co-branding options
- 24/7 booking management
- Exclusive access for luxury properties
- Dedicated partner support

Target partners: Four Seasons, Ritz, Tivoli, boutique luxury hotels`,

    'Isabella': `You are Isabella, the Content Strategist and Travel Advisor at Good Hands.

Your role:
- Expert on Lisbon neighborhoods and beauty culture
- Provide insider local knowledge
- Match services to neighborhood character
- Create memorable experience recommendations

Your tone: Knowledgeable local insider, editorial storytelling style

Neighborhood expertise:
- Alfama: Historic, authentic, intimate neighborhood salons
- Chiado: Sophisticated, elegant, boutique experiences
- Príncipe Real: Creative, trendy, artistic beauty spaces
- Baixa: Central, convenient, classic Portuguese style
- Belém: Riverside tranquility, spa wellness focus
- Avenida: Modern luxury, high-end treatments
- Cascais: Beach glamour, resort-style services
- Sintra: Romantic, wellness retreats, nature-inspired`,

    'Clara': `You are Clara, the Chief Business Strategist at Good Hands.

Your role:
- Handle VIP and premium inquiries
- Corporate services and events
- Membership program expert
- Strategic, sophisticated, detail-oriented

Your tone: Executive concierge, white-glove service

Premium offerings:
- VIP membership with priority booking and discounts
- Corporate packages for companies
- Wedding beauty coordination (entire party)
- Retreat wellness programs
- Special event coordination
- Customized multi-service experiences
- Private sessions at exclusive locations
- Personalized beauty journey planning`,

    'Sofia': `You are Sofia, the Creative Director at Good Hands.

Your role:
- Style consultant and beauty advisor
- Personalized recommendations
- Trend-aware yet timeless
- Artistic, creative, inspiring

Your tone: Sophisticated style advisor, luxury magazine editorial

Expertise:
- Portuguese beauty traditions meet modern luxury
- Personalized style matching (not one-size-fits-all)
- Seasonal and occasion-based recommendations
- Color, cut, and style consultation
- Holistic beauty approach (inside and out)
- Local ingredients and authentic experiences
- Creating signature looks for special moments`
  }
  
  return contexts[expert] || contexts['Beatriz']
}

export async function POST(request: Request) {
  try {
    const { message, conversationHistory = [], currentExpert } = await request.json()

    // Determine which expert should respond
    const expert = determineExpert(message, conversationHistory)
    const expertContext = getExpertContext(expert)

    // Build conversation for Claude
    const claudeMessages = conversationHistory.map((msg: Message) => ({
      role: msg.role,
      content: msg.content
    }))

    claudeMessages.push({
      role: 'user',
      content: message
    })

    // Call Claude API
    const response = await callClaude(expertContext, claudeMessages, expert)

    // Log conversation to Notion (implement separately)
    await logConversationToNotion({
      expert,
      userMessage: message,
      assistantResponse: response,
      timestamp: new Date()
    })

    return NextResponse.json({
      message: response,
      expert,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    )
  }
}

async function callClaude(systemPrompt: string, messages: any[], expert: string): Promise<string> {
  if (!ANTHROPIC_API_KEY) {
    // Fallback responses for development
    return getFallbackResponse(expert, messages[messages.length - 1].content)
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: systemPrompt,
        messages: messages
      })
    })

    const data = await response.json()
    return data.content[0].text

  } catch (error) {
    console.error('Claude API error:', error)
    return getFallbackResponse(expert, messages[messages.length - 1].content)
  }
}

function getFallbackResponse(expert: string, userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase()
  
  if (expert === 'Miguel' && (lowerMessage.includes('hotel') || lowerMessage.includes('partner'))) {
    return `Thank you for your interest in partnering with Good Hands! We'd love to discuss how we can enhance your guests' experience with our curated beauty concierge services.

Our hotel partnerships include:
• Seamless integration with your concierge team
• Commission-based model (no upfront costs)
• Access to Lisbon's top beauty professionals
• 24/7 booking management
• White-label options available

Could you tell me a bit more about your property? Are you interested in offering this as an exclusive amenity to your guests?`
  }
  
  if (expert === 'Isabella' && (lowerMessage.includes('neighborhood') || lowerMessage.includes('where'))) {
    return `I'd be delighted to help you discover the perfect neighborhood for your beauty experience! Each area of Lisbon has its own unique character:

🏛️ **Chiado/Príncipe Real** - Sophisticated boutique salons in elegant historic buildings
🌊 **Alfama** - Intimate, authentic neighborhood experiences
🏖️ **Cascais** - Beach-side glamour and resort-style treatments
🏰 **Sintra** - Romantic wellness retreats in nature

Where are you staying, or what kind of atmosphere appeals to you most?`
  }
  
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
    return `Our pricing is transparent and includes our concierge service fee. Here are some examples:

💇 **Hair Styling** - From €105 (includes consultation, service, and concierge matching)
💆 **Spa Treatments** - From €95 (60-90 min massage or facial)
💅 **Nails** - From €55 (manicure) / €75 (pedicure)
💄 **Makeup** - From €85 (special occasion) / €150 (bridal)

VIP members receive 15% off all services plus priority booking. Would you like to book a specific service, or shall I help you create a custom package?`
  }
  
  if (lowerMessage.includes('book') || lowerMessage.includes('appointment') || lowerMessage.includes('schedule')) {
    return `I'd love to help you book! To find the perfect match for you, I just need a few quick details:

📅 When would you like your appointment? (date and preferred time)
💇 What service are you interested in?
📍 Which neighborhood would you prefer?
✨ Any specific preferences? (style, professional gender, language, etc.)

Feel free to share as much or as little as you'd like - I'm here to make this effortless for you!`
  }
  
  // Default response
  return `Thank you for reaching out! I'm here to help you with anything related to Good Hands - whether it's booking a service, learning about our neighborhoods, exploring premium packages, or discussing partnerships.

What would you like to know more about?`
}

async function logConversationToNotion(data: any) {
  // This will be implemented when Notion API is set up
  // For now, just log to console
  console.log('Chat logged:', data)
}

