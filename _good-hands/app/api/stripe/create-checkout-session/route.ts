import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { priceId, membershipType } = await request.json()

    if (!priceId || typeof priceId !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid price ID' }, { status: 400 })
    }

    const validMembershipTypes = ['Gold', 'Platinum']
    if (!membershipType || !validMembershipTypes.includes(membershipType)) {
      return NextResponse.json({ error: 'Invalid membership type' }, { status: 400 })
    }

    const allowedPriceIds = [
      process.env.NEXT_PUBLIC_STRIPE_GOLD_PRICE_ID,
      process.env.NEXT_PUBLIC_STRIPE_PLATINUM_PRICE_ID,
    ].filter(Boolean)

    if (allowedPriceIds.length > 0 && !allowedPriceIds.includes(priceId)) {
      return NextResponse.json({ error: 'Price ID not recognized' }, { status: 400 })
    }

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY

    if (!stripeSecretKey) {
      return NextResponse.json(
        { 
          error: 'Stripe is not configured yet. Please set up your Stripe account and add STRIPE_SECRET_KEY to your environment variables.',
          setup_required: true 
        },
        { status: 503 }
      )
    }

    // Dynamically import Stripe to avoid build errors if not configured
    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2025-09-30.clover',
    })

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/membership/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/premium/membership`,
      metadata: {
        membership_type: membershipType,
      },
      subscription_data: {
        metadata: {
          membership_type: membershipType,
        },
      },
      allow_promotion_codes: true,
      billing_address_collection: 'required',
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}

