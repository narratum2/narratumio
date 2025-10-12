import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { logger } from '@/lib/logger'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export async function POST(request: Request) {
  try {
    const data = await request.json()
    logger.apiRequest('POST', '/api/bookings', data)

    // Validate required fields
    const { name, email, phone, service, date, time } = data
    if (!name || !email || !phone || !service || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // If Supabase credentials are available, insert to database
    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey)

      const { data: booking, error } = await supabase
        .from('bookings')
        .insert([
          {
            name,
            email,
            phone,
            service,
            neighborhood: data.neighborhood || null,
            date,
            time,
            message: data.message || null,
            utm_source: data.utm_source || null,
            utm_medium: data.utm_medium || null,
            utm_campaign: data.utm_campaign || null,
            utm_term: data.utm_term || null,
            utm_content: data.utm_content || null,
            created_at: new Date().toISOString(),
          },
        ])
        .select()

      if (error) {
        logger.error('Supabase error creating booking', error)
        return NextResponse.json(
          { error: 'Failed to create booking' },
          { status: 500 }
        )
      }

      logger.apiResponse('POST', '/api/bookings', 201, { id: booking?.[0]?.id })
      return NextResponse.json(
        { success: true, booking },
        { status: 201 }
      )
    } else {
      // Mock response when Supabase is not configured
      logger.info('Booking request received (mock mode)', data)
      
      return NextResponse.json(
        {
          success: true,
          message: 'Booking received (development mode)',
          booking: {
            id: `mock-${Date.now()}`,
            ...data,
            created_at: new Date().toISOString(),
          },
        },
        { status: 201 }
      )
    }
  } catch (error) {
    logger.error('Booking API error', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    {
      message: 'Bookings API endpoint',
      methods: ['POST'],
      requiredFields: ['name', 'email', 'phone', 'service', 'date', 'time'],
      optionalFields: ['neighborhood', 'message', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'],
    },
    { status: 200 }
  )
}

