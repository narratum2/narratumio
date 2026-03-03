import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { createBookingRecord, createCustomerRecord } from '@/lib/notion'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

// Validation helpers
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[\d\s\-\+\(\)]{8,20}$/ // International phone format
const TIME_REGEX = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/ // HH:MM or H:MM

function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim())
}

function validatePhone(phone: string): boolean {
  const digitsOnly = phone.replace(/\D/g, '')
  return digitsOnly.length >= 8 && PHONE_REGEX.test(phone.trim())
}

function validateDate(dateStr: string): boolean {
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) return false
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  date.setHours(0, 0, 0, 0)
  return date >= today
}

function validateTime(timeStr: string): boolean {
  return TIME_REGEX.test(timeStr) || /^[0-9]{1,2}:[0-5][0-9]$/.test(timeStr)
}

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

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const now = Date.now()
    const entry = rateLimitStore.get(ip)

    if (entry && now < entry.resetAt) {
      if (entry.count >= RATE_LIMIT_MAX) {
        return NextResponse.json(
          { error: 'Too many requests. Please wait a moment and try again.' },
          { status: 429 }
        )
      }
      entry.count++
    } else {
      rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    }

    const data = await request.json()

    if (data.website) {
      return NextResponse.json({ success: true, message: 'Booking received' }, { status: 201 })
    }

    const { name, email, phone, service, date, time } = data
    if (!name || !email || !phone || !service || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const VALID_SERVICES = ['hair', 'nails', 'skincare', 'makeup', 'wellness', 'wedding', 'retreat', 'corporate']
    if (!VALID_SERVICES.includes(service)) {
      return NextResponse.json(
        { error: 'Invalid service type' },
        { status: 400 }
      )
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    if (!validatePhone(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number. Please provide a valid number with at least 8 digits.' },
        { status: 400 }
      )
    }

    if (!validateDate(date)) {
      return NextResponse.json(
        { error: 'Please select a date today or in the future' },
        { status: 400 }
      )
    }

    if (!validateTime(time)) {
      return NextResponse.json(
        { error: 'Invalid time format' },
        { status: 400 }
      )
    }

    if (typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please provide your full name' },
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

    // If Notion failed: return mock success only in development; fail in production
    const isProduction = process.env.NODE_ENV === 'production'
    if (isProduction) {
      console.error('❌ Booking failed: Notion integration not available in production')
      return NextResponse.json(
        { error: 'Booking service temporarily unavailable. Please try again or contact us directly.' },
        { status: 503 }
      )
    }

    console.log('⚠️  Booking created in mock mode (Notion not configured - dev only)')
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

