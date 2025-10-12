import { NextResponse } from 'next/server'

const NOTION_API_KEY = process.env.NOTION_API_KEY || ''
const NOTION_CONVERSATIONS_DB_ID = process.env.NOTION_CONVERSATIONS_DB_ID || ''

// This endpoint logs chat conversations to Notion
// Called by Intercom webhook or chat API
export async function POST(request: Request) {
  try {
    const { 
      customerName, 
      customerEmail,
      messages, 
      inquiryType,
      source,
      sentiment 
    } = await request.json()

    // Create page in Notion Conversations database
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: {
          database_id: NOTION_CONVERSATIONS_DB_ID,
        },
        properties: {
          // Customer Name (title)
          'Name': {
            title: [
              {
                text: {
                  content: customerName || 'Anonymous',
                },
              },
            ],
          },
          // Contact Method
          'Contact Method': {
            select: {
              name: source || 'Chat',
            },
          },
          // Inquiry Type
          'Inquiry Type': {
            select: {
              name: inquiryType || 'Question',
            },
          },
          // Status
          'Status': {
            select: {
              name: 'New',
            },
          },
          // Priority
          'Priority': {
            select: {
              name: sentiment === 'unhappy' ? 'High' : 'Normal',
            },
          },
          // Customer Email
          'Email': {
            email: customerEmail || null,
          },
          // Customer Sentiment
          'Customer Sentiment': {
            select: {
              name: sentiment || '😐 Neutral',
            },
          },
          // Source
          'Source': {
            select: {
              name: source || 'Website Chat',
            },
          },
        },
        children: [
          {
            object: 'block',
            type: 'heading_2',
            heading_2: {
              rich_text: [
                {
                  type: 'text',
                  text: {
                    content: 'Conversation History',
                  },
                },
              ],
            },
          },
          ...messages.map((msg: any) => ({
            object: 'block',
            type: 'paragraph',
            paragraph: {
              rich_text: [
                {
                  type: 'text',
                  text: {
                    content: `${msg.role === 'user' ? '👤 Customer' : '🤖 Assistant'}: ${msg.content}`,
                  },
                  annotations: {
                    bold: msg.role === 'user',
                  },
                },
              ],
            },
          })),
        ],
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Notion API error:', error)
      return NextResponse.json(
        { error: 'Failed to log to Notion', details: error },
        { status: 500 }
      )
    }

    const data = await response.json()
    
    return NextResponse.json({
      success: true,
      notionPageId: data.id,
      notionPageUrl: data.url,
    })

  } catch (error) {
    console.error('Error logging conversation to Notion:', error)
    return NextResponse.json(
      { error: 'Failed to log conversation' },
      { status: 500 }
    )
  }
}

// Helper function to detect inquiry type from message content
function detectInquiryType(message: string): string {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes('book') || lowerMessage.includes('appointment')) {
    return 'Booking'
  }
  if (lowerMessage.includes('hotel') || lowerMessage.includes('partnership')) {
    return 'Partnership'
  }
  if (lowerMessage.includes('complaint') || lowerMessage.includes('unhappy')) {
    return 'Complaint'
  }
  if (lowerMessage.includes('feedback') || lowerMessage.includes('review')) {
    return 'Feedback'
  }
  return 'Question'
}

// Helper function to detect sentiment
function detectSentiment(message: string): string {
  const lowerMessage = message.toLowerCase()
  
  const happyWords = ['great', 'excellent', 'amazing', 'love', 'perfect', 'wonderful']
  const unhappyWords = ['bad', 'terrible', 'awful', 'disappointed', 'unhappy', 'complaint']
  
  const hasHappyWords = happyWords.some(word => lowerMessage.includes(word))
  const hasUnhappyWords = unhappyWords.some(word => lowerMessage.includes(word))
  
  if (hasHappyWords) return '😊 Happy'
  if (hasUnhappyWords) return '😞 Unhappy'
  return '😐 Neutral'
}

