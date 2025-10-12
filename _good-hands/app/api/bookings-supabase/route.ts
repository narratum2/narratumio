import { NextRequest, NextResponse } from 'next/server'
import { createBooking, createOrUpdateCustomer } from '@/lib/supabase'

// Disable static generation for this route
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    const { name, email, phone, service, date, time } = data
    if (!name || !email || !phone || !service || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create or update customer
    const customer = await createOrUpdateCustomer({
      email,
      name,
      phone,
    })

    // Create booking
    const booking = await createBooking({
      customer_name: name,
      customer_email: email,
      customer_phone: phone,
      service_type: service,
      preferred_date: date,
      preferred_time: time,
      neighborhood: data.neighborhood,
      message: data.message,
      utm_source: data.utm_source,
      utm_medium: data.utm_medium,
      utm_campaign: data.utm_campaign,
    })

    // TODO: Trigger n8n workflow for notifications
    // TODO: Add to Notion via Make.com
    // TODO: Send confirmation email

    return NextResponse.json(
      {
        success: true,
        booking,
        customer,
        message: 'Booking created successfully. We\'ll confirm within 24 hours.',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Booking API error:', error)
    return NextResponse.json(
      { error: 'Failed to create booking', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    {
      message: 'Bookings API with Supabase',
      methods: ['POST'],
      requiredFields: ['name', 'email', 'phone', 'service', 'date', 'time'],
      optionalFields: ['neighborhood', 'message', 'utm_*'],
    },
    { status: 200 }
  )
}

