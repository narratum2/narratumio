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

    console.log('Professional Application Received:', {
      name: body.fullName,
      email: body.email,
      specialty: body.specialty,
      timestamp: new Date().toISOString(),
    })

    const backends: string[] = []
    let delivered = false

    if (process.env.MAKE_PROFESSIONAL_APPLICATIONS_WEBHOOK_URL) {
      backends.push('make')
      try {
        const makeResponse = await fetch(
          process.env.MAKE_PROFESSIONAL_APPLICATIONS_WEBHOOK_URL,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...body,
              type: 'professional_application',
              source: 'goodhands_website',
              submittedAt: new Date().toISOString(),
            }),
          }
        )
        if (makeResponse.ok) {
          delivered = true
        } else {
          console.error('Make.com webhook failed:', await makeResponse.text())
        }
      } catch (makeError) {
        console.error('Error sending to Make.com:', makeError)
      }
    }

    if (process.env.NOTION_API_KEY && process.env.NOTION_PROFESSIONALS_DATABASE_ID) {
      backends.push('notion')
      try {
        const notionResponse = await fetch('https://api.notion.com/v1/pages', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28',
          },
          body: JSON.stringify({
            parent: { database_id: process.env.NOTION_PROFESSIONALS_DATABASE_ID },
            properties: {
              'Name': { title: [{ text: { content: body.fullName } }] },
              'Email': { email: body.email },
              'Phone': { phone_number: body.phone },
              'Specialty': { select: { name: body.specialty } },
              'Experience': { select: { name: body.experience } },
              'Location': { select: { name: body.location } },
              'Instagram': {
                url: body.instagram.startsWith('@')
                  ? `https://instagram.com/${body.instagram.slice(1)}`
                  : body.instagram,
              },
              'Portfolio': { url: body.portfolio || '' },
              'Availability': { select: { name: body.availability } },
              'Certifications': { rich_text: [{ text: { content: body.certifications } }] },
              'Why Join': { rich_text: [{ text: { content: body.whyJoin } }] },
              'Status': { select: { name: 'New Application' } },
              'Submitted': { date: { start: new Date().toISOString() } },
            },
          }),
        })
        if (notionResponse.ok) {
          delivered = true
        } else {
          console.error('Notion API failed:', await notionResponse.text())
        }
      } catch (notionError) {
        console.error('Error sending to Notion:', notionError)
      }
    }

    if (process.env.FILLOUT_WEBHOOK_URL) {
      backends.push('fillout')
      try {
        const filloutResponse = await fetch(process.env.FILLOUT_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
        if (filloutResponse.ok) {
          delivered = true
        } else {
          console.error('Fillout webhook failed:', await filloutResponse.text())
        }
      } catch (filloutError) {
        console.error('Error sending to Fillout:', filloutError)
      }
    }

    if (backends.length === 0) {
      console.error('No application backends configured')
      return NextResponse.json(
        { error: 'Application system is temporarily unavailable. Please email us directly.' },
        { status: 503 }
      )
    }

    if (!delivered) {
      console.error('All application backends failed:', backends.join(', '))
      return NextResponse.json(
        { error: 'We could not process your application right now. Please try again later or email us directly.' },
        { status: 502 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Application received successfully', applicantName: body.fullName },
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

