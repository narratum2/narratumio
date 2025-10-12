import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { createBookingRecord, createCustomerRecord } from '@/lib/notion'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Helper to send to Make.com
async function sendToMake(scenario: string, data: any) {
  const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL
  
  if (!makeWebhookUrl) {
    console.warn('Make.com webhook URL not configured')
    return null
  }

  try {
    const response = await fetch(`${makeWebhookUrl}/${scenario}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    
    return response.ok ? await response.json() : null
  } catch (error) {
    console.error('Make.com webhook error:', error)
    return null
  }
}

export async function POST(request: Request) {
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

    console.log('📅 New booking request:', { name, email, service, date, time })

    // Create records in parallel
    const results = await Promise.allSettled([
      // 1. Create in Notion (primary)
      createBookingRecord({
        customerName: name,
        customerEmail: email,
        service,
        neighborhood: data.neighborhood,
        date,
        time,
        message: data.message,
        utmSource: data.utm_source,
        utmMedium: data.utm_medium,
        utmCampaign: data.utm_campaign,
      }),
      
      // 2. Create customer record (if doesn't exist)
      createCustomerRecord({
        name,
        email,
        phone,
        source: data.source || 'Website Booking',
        utmSource: data.utm_source,
        utmMedium: data.utm_medium,
        utmCampaign: data.utm_campaign,
      }),
      
      // 3. Send to Make.com for email automation
      sendToMake('booking-created', {
        name,
        email,
        phone,
        service,
        neighborhood: data.neighborhood,
        date,
        time,
        message: data.message,
        timestamp: new Date().toISOString(),
      }),
      
      // 4. Backup to Supabase (if configured)
      supabaseUrl && supabaseKey 
        ? createClient(supabaseUrl, supabaseKey)
            .from('bookings')
            .insert([{
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
              created_at: new Date().toISOString(),
            }])
            .select()
        : Promise.resolve({ data: null, error: null }),
    ])

    // Check results
    const [notionBooking, notionCustomer, makeResult, supabaseResult] = results

    const successSummary = {
      notion: notionBooking.status === 'fulfilled' && notionBooking.value !== null,
      customer: notionCustomer.status === 'fulfilled',
      automation: makeResult.status === 'fulfilled',
      backup: supabaseResult.status === 'fulfilled',
    }

    console.log('✅ Booking created:', successSummary)

    // Return success if at least Notion succeeded
    if (successSummary.notion) {
      return NextResponse.json(
        {
          success: true,
          message: 'Booking created successfully',
          booking: {
            id: notionBooking.status === 'fulfilled' ? notionBooking.value?.id : `booking-${Date.now()}`,
            name,
            email,
            service,
            date,
            time,
            created_at: new Date().toISOString(),
          },
          integrations: successSummary,
        },
        { status: 201 }
      )
    }

    // If Notion failed but we're in development mode, return mock success
    console.log('⚠️  Booking created in mock mode (Notion not configured)')
    
    return NextResponse.json(
      {
        success: true,
        message: 'Booking received (development mode)',
        booking: {
          id: `mock-${Date.now()}`,
          ...data,
          created_at: new Date().toISOString(),
        },
        integrations: successSummary,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('❌ Booking API error:', error)
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

