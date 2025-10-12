import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json()

    if (!code) {
      return NextResponse.json(
        { error: 'Coupon code is required' },
        { status: 400 }
      )
    }

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY

    if (!stripeSecretKey) {
      return NextResponse.json(
        { error: 'Stripe is not configured' },
        { status: 503 }
      )
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2025-09-30.clover',
    })

    try {
      // Try to retrieve promotion code
      const promotionCodes = await stripe.promotionCodes.list({
        code: code,
        active: true,
        limit: 1,
        expand: ['data.coupon'],
      })

      if (promotionCodes.data.length === 0) {
        return NextResponse.json(
          {
            valid: false,
            error: 'Invalid coupon code',
          },
          { status: 404 }
        )
      }

      const promotionCode: any = promotionCodes.data[0]
      const coupon = promotionCode.coupon

      // Check if coupon is valid
      if (!coupon.valid) {
        return NextResponse.json(
          {
            valid: false,
            error: 'This coupon has expired or is no longer valid',
          },
          { status: 400 }
        )
      }

      // Check if coupon has reached max redemptions
      if (
        coupon.max_redemptions &&
        coupon.times_redeemed &&
        coupon.times_redeemed >= coupon.max_redemptions
      ) {
        return NextResponse.json(
          {
            valid: false,
            error: 'This coupon has reached its maximum number of uses',
          },
          { status: 400 }
        )
      }

      // Check if coupon has expired
      if (coupon.redeem_by && coupon.redeem_by < Math.floor(Date.now() / 1000)) {
        return NextResponse.json(
          {
            valid: false,
            error: 'This coupon has expired',
          },
          { status: 400 }
        )
      }

      // Build discount information
      const discount: any = {
        type: coupon.percent_off ? 'percentage' : 'fixed',
        valid: true,
      }

      if (coupon.percent_off) {
        discount.amount = coupon.percent_off
        discount.description = `${coupon.percent_off}% off`
      } else if (coupon.amount_off) {
        discount.amount = coupon.amount_off / 100 // Convert from cents
        discount.currency = coupon.currency?.toUpperCase() || 'EUR'
        discount.description = `€${discount.amount} off`
      }

      // Add duration information
      if (coupon.duration === 'once') {
        discount.duration = 'Applies once'
      } else if (coupon.duration === 'forever') {
        discount.duration = 'Applies forever'
      } else if (coupon.duration === 'repeating' && coupon.duration_in_months) {
        discount.duration = `Applies for ${coupon.duration_in_months} months`
      }

      // Add restrictions
      const restrictions: string[] = []
      if (coupon.min_amount_currency) {
        const minAmount = (coupon.min_amount_currency || 0) / 100
        restrictions.push(`Minimum purchase: €${minAmount}`)
      }

      if (coupon.max_redemptions) {
        const remaining = coupon.max_redemptions - (coupon.times_redeemed || 0)
        restrictions.push(`${remaining} uses remaining`)
      }

      if (coupon.redeem_by) {
        const expiryDate = new Date(coupon.redeem_by * 1000).toLocaleDateString()
        restrictions.push(`Expires: ${expiryDate}`)
      }

      return NextResponse.json({
        valid: true,
        code: code,
        promotionCodeId: promotionCode.id,
        couponId: coupon.id,
        discount,
        restrictions: restrictions.length > 0 ? restrictions : undefined,
        metadata: coupon.metadata,
      })
    } catch (error: any) {
      // Stripe error
      if (error.type === 'StripeInvalidRequestError') {
        return NextResponse.json(
          {
            valid: false,
            error: 'Invalid coupon code',
          },
          { status: 404 }
        )
      }

      throw error
    }
  } catch (error) {
    console.error('❌ Coupon validation error:', error)
    return NextResponse.json(
      { error: 'Failed to validate coupon' },
      { status: 500 }
    )
  }
}

// GET endpoint to list available coupons (for admin use)
export async function GET() {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY

    if (!stripeSecretKey) {
      return NextResponse.json(
        { error: 'Stripe is not configured' },
        { status: 503 }
      )
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2025-09-30.clover',
    })

    const coupons = await stripe.coupons.list({
      limit: 20,
    })

    const activeCoupons = coupons.data.filter((coupon) => coupon.valid)

    return NextResponse.json({
      success: true,
      count: activeCoupons.length,
      coupons: activeCoupons.map((coupon) => ({
        id: coupon.id,
        name: coupon.name,
        percentOff: coupon.percent_off,
        amountOff: coupon.amount_off ? coupon.amount_off / 100 : undefined,
        currency: coupon.currency,
        duration: coupon.duration,
        durationInMonths: coupon.duration_in_months,
        timesRedeemed: coupon.times_redeemed,
        maxRedemptions: coupon.max_redemptions,
        valid: coupon.valid,
      })),
    })
  } catch (error) {
    console.error('❌ Failed to list coupons:', error)
    return NextResponse.json(
      { error: 'Failed to fetch coupons' },
      { status: 500 }
    )
  }
}

