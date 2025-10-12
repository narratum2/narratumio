import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = [
      'fullName',
      'email',
      'phone',
      'specialty',
      'experience',
      'certifications',
      'location',
      'instagram',
      'availability',
      'whyJoin',
    ]

    const missingFields = requiredFields.filter((field) => !body[field])

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: 'Missing required fields', missingFields },
        { status: 400 }
      )
    }

    // Log the application (in production, this would go to Notion)
    console.log('Professional Application Received:', {
      name: body.fullName,
      email: body.email,
      specialty: body.specialty,
      timestamp: new Date().toISOString(),
    })

    // Option 1: Send to Make.com webhook (which forwards to Notion)
    // This is the recommended approach as Make.com is already set up
    if (process.env.MAKE_PROFESSIONAL_APPLICATIONS_WEBHOOK_URL) {
      try {
        const makeResponse = await fetch(
          process.env.MAKE_PROFESSIONAL_APPLICATIONS_WEBHOOK_URL,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...body,
              type: 'professional_application',
              source: 'goodhands_website',
              submittedAt: new Date().toISOString(),
            }),
          }
        )

        if (!makeResponse.ok) {
          console.error('Make.com webhook failed:', await makeResponse.text())
        } else {
          console.log('Application forwarded to Make.com successfully')
        }
      } catch (makeError) {
        console.error('Error sending to Make.com:', makeError)
        // Continue anyway - we'll fall back to Notion direct or Fillout
      }
    }

    // Option 2: Send directly to Notion (if NOTION_API_KEY is set)
    if (process.env.NOTION_API_KEY && process.env.NOTION_PROFESSIONALS_DATABASE_ID) {
      try {
        const notionResponse = await fetch('https://api.notion.com/v1/pages', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28',
          },
          body: JSON.stringify({
            parent: {
              database_id: process.env.NOTION_PROFESSIONALS_DATABASE_ID,
            },
            properties: {
              'Name': {
                title: [
                  {
                    text: {
                      content: body.fullName,
                    },
                  },
                ],
              },
              'Email': {
                email: body.email,
              },
              'Phone': {
                phone_number: body.phone,
              },
              'Specialty': {
                select: {
                  name: body.specialty,
                },
              },
              'Experience': {
                select: {
                  name: body.experience,
                },
              },
              'Location': {
                select: {
                  name: body.location,
                },
              },
              'Instagram': {
                url: body.instagram.startsWith('@') 
                  ? `https://instagram.com/${body.instagram.slice(1)}` 
                  : body.instagram,
              },
              'Portfolio': {
                url: body.portfolio || '',
              },
              'Availability': {
                select: {
                  name: body.availability,
                },
              },
              'Certifications': {
                rich_text: [
                  {
                    text: {
                      content: body.certifications,
                    },
                  },
                ],
              },
              'Why Join': {
                rich_text: [
                  {
                    text: {
                      content: body.whyJoin,
                    },
                  },
                ],
              },
              'Status': {
                select: {
                  name: 'New Application',
                },
              },
              'Submitted': {
                date: {
                  start: new Date().toISOString(),
                },
              },
            },
          }),
        })

        if (!notionResponse.ok) {
          console.error('Notion API failed:', await notionResponse.text())
        } else {
          console.log('Application added to Notion successfully')
        }
      } catch (notionError) {
        console.error('Error sending to Notion:', notionError)
      }
    }

    // Option 3: Send to Fillout webhook (if configured)
    if (process.env.FILLOUT_WEBHOOK_URL) {
      try {
        const filloutResponse = await fetch(process.env.FILLOUT_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })

        if (!filloutResponse.ok) {
          console.error('Fillout webhook failed:', await filloutResponse.text())
        } else {
          console.log('Application forwarded to Fillout successfully')
        }
      } catch (filloutError) {
        console.error('Error sending to Fillout:', filloutError)
      }
    }

    // Send email notification to Good Hands team
    if (process.env.RESEND_API_KEY) {
      try {
        // You can add Resend email integration here
        // For now, we'll just log it
        console.log('Email notification would be sent to team about new application')
      } catch (emailError) {
        console.error('Error sending email notification:', emailError)
      }
    }

    // Return success regardless of webhook status
    // The application was received even if integrations failed
    return NextResponse.json(
      {
        success: true,
        message: 'Application received successfully',
        applicantName: body.fullName,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error processing professional application:', error)
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    )
  }
}

// GET endpoint to check if the API is working
export async function GET() {
  return NextResponse.json({
    endpoint: 'Professional Applications API',
    status: 'active',
    methods: ['POST'],
    description: 'Submit applications from beauty professionals to join Good Hands network',
    requiredFields: [
      'fullName',
      'email',
      'phone',
      'specialty',
      'experience',
      'certifications',
      'location',
      'instagram',
      'availability',
      'whyJoin',
    ],
    integrations: {
      makecom: !!process.env.MAKE_PROFESSIONAL_APPLICATIONS_WEBHOOK_URL,
      notion: !!process.env.NOTION_API_KEY && !!process.env.NOTION_PROFESSIONALS_DATABASE_ID,
      fillout: !!process.env.FILLOUT_WEBHOOK_URL,
    },
  })
}

