import { NextResponse } from 'next/server'

const NOTION_API_KEY = process.env.NOTION_API_KEY || ''
const NOTION_BOOKINGS_DB_ID = process.env.NOTION_BOOKINGS_DB_ID || ''

// This endpoint creates a booking record in Notion
// Called when a booking form is submitted
export async function POST(request: Request) {
  try {
    const { 
      customerName,
      customerEmail,
      customerPhone,
      service,
      date,
      time,
      neighborhood,
      price,
      notes,
      source,
      hotelPartner 
    } = await request.json()

    // Create page in Notion Bookings database
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: {
          database_id: NOTION_BOOKINGS_DB_ID,
        },
        properties: {
          // Customer Name (title)
          'Customer Name': {
            title: [
              {
                text: {
                  content: customerName,
                },
              },
            ],
          },
          // Service
          'Service': {
            select: {
              name: service,
            },
          },
          // Date & Time
          'Date & Time': {
            date: {
              start: `${date}T${time}:00`,
            },
          },
          // Neighborhood
          'Neighborhood': {
            select: {
              name: neighborhood,
            },
          },
          // Status
          'Status': {
            select: {
              name: '📝 Requested',
            },
          },
          // Price
          'Price': {
            number: parseFloat(price),
          },
          // Source
          'Source': {
            select: {
              name: source || 'Website',
            },
          },
          // Customer Email
          'Customer Email': {
            email: customerEmail,
          },
          // Customer Phone
          'Customer Phone': {
            phone_number: customerPhone || null,
          },
          // Hotel Partner
          ...(hotelPartner && {
            'Hotel Partner': {
              relation: [
                {
                  id: hotelPartner, // Notion page ID from Partners DB
                },
              ],
            },
          }),
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
                    content: 'Customer Notes',
                  },
                },
              ],
            },
          },
          {
            object: 'block',
            type: 'paragraph',
            paragraph: {
              rich_text: [
                {
                  type: 'text',
                  text: {
                    content: notes || 'No special notes provided.',
                  },
                },
              ],
            },
          },
        ],
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Notion API error:', error)
      return NextResponse.json(
        { error: 'Failed to create booking in Notion', details: error },
        { status: 500 }
      )
    }

    const data = await response.json()
    
    // TODO: Send confirmation email via Customer.io
    // TODO: Notify team via Slack
    // TODO: Trigger AI professional matching

    return NextResponse.json({
      success: true,
      bookingId: data.id,
      notionUrl: data.url,
      message: 'Booking created successfully',
    })

  } catch (error) {
    console.error('Error creating booking in Notion:', error)
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve booking by ID
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const bookingId = searchParams.get('id')

  if (!bookingId) {
    return NextResponse.json({ error: 'Booking ID required' }, { status: 400 })
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/pages/${bookingId}`, {
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
      },
    })

    if (!response.ok) {
      const error = await response.json()
      return NextResponse.json({ error: 'Booking not found', details: error }, { status: 404 })
    }

    const data = await response.json()
    return NextResponse.json({ booking: data })

  } catch (error) {
    console.error('Error fetching booking from Notion:', error)
    return NextResponse.json({ error: 'Failed to fetch booking' }, { status: 500 })
  }
}

// PATCH endpoint to update booking status
export async function PATCH(request: Request) {
  try {
    const { bookingId, status, professionalAssigned, notes } = await request.json()

    if (!bookingId) {
      return NextResponse.json({ error: 'Booking ID required' }, { status: 400 })
    }

    const updateProperties: any = {}

    if (status) {
      updateProperties['Status'] = {
        select: { name: status },
      }
    }

    if (professionalAssigned) {
      updateProperties['Professional Assigned'] = {
        relation: [{ id: professionalAssigned }],
      }
    }

    const response = await fetch(`https://api.notion.com/v1/pages/${bookingId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        properties: updateProperties,
        ...( notes && {
          children: [
            {
              object: 'block',
              type: 'paragraph',
              paragraph: {
                rich_text: [
                  {
                    type: 'text',
                    text: {
                      content: `Update: ${notes}`,
                    },
                  },
                ],
              },
            },
          ],
        }),
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      return NextResponse.json({ error: 'Failed to update booking', details: error }, { status: 500 })
    }

    const data = await response.json()
    return NextResponse.json({ success: true, booking: data })

  } catch (error) {
    console.error('Error updating booking in Notion:', error)
    return NextResponse.json({ error: 'Failed to update booking' }, { status: 500 })
  }
}

