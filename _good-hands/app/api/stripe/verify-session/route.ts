import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get('session_id')

  if (!sessionId) {
    return NextResponse.json({ valid: false }, { status: 400 })
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ valid: false, reason: 'not_configured' }, { status: 503 })
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status === 'paid' || session.status === 'complete') {
      return NextResponse.json({ valid: true, email: session.customer_email })
    }

    return NextResponse.json({ valid: false, reason: 'incomplete' })
  } catch {
    return NextResponse.json({ valid: false, reason: 'invalid' }, { status: 400 })
  }
}
