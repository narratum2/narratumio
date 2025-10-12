import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { createMembershipRecord } from '@/lib/notion'
import Stripe from 'stripe'

// Helper to send webhooks to Make.com
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
    
    if (!response.ok) {
      console.error('Make.com webhook failed:', response.statusText)
      return null
    }
    
    return await response.json()
  } catch (error) {
    console.error('Make.com webhook error:', error)
    return null
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = headers().get('stripe-signature')

    if (!signature) {
      return NextResponse.json({ error: 'No signature' }, { status: 400 })
    }

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

    if (!stripeSecretKey || !webhookSecret) {
      console.error('Stripe webhook: Missing configuration')
      return NextResponse.json({ error: 'Webhook not configured' }, { status: 503 })
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2025-09-30.clover',
    })

    // Verify webhook signature
    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret)

    // Handle different event types
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        console.log('✅ Checkout completed:', session.id)
        
        // Get customer details
        const customerEmail = session.customer_details?.email
        const customerId = session.customer as string
        const subscriptionId = session.subscription as string
        const membershipType = session.metadata?.membership_type as 'Gold' | 'Platinum'
        
        if (customerEmail && subscriptionId && membershipType) {
          // Create membership record in Notion
          const notionResult = await createMembershipRecord({
            customerEmail,
            membershipType,
            stripeSubscriptionId: subscriptionId,
            stripeCustomerId: customerId,
            status: 'active',
            price: membershipType === 'Gold' ? 49 : 129,
          })
          
          console.log('📝 Notion membership record created:', notionResult?.id)
          
          // Send to Make.com for email automation
          await sendToMake('membership-created', {
            email: customerEmail,
            membershipType,
            subscriptionId,
            customerId,
            timestamp: new Date().toISOString(),
          })
        }
        
        break
      }

      case 'customer.subscription.created': {
        const subscription = event.data.object as any
        console.log('🆕 Subscription created:', subscription.id)
        
        // Get customer details
        const customer = await stripe.customers.retrieve(subscription.customer as string)
        const customerEmail = (customer as Stripe.Customer).email
        
        if (customerEmail) {
          await sendToMake('subscription-created', {
            email: customerEmail,
            subscriptionId: subscription.id,
            status: subscription.status,
            currentPeriodEnd: new Date(subscription.current_period_end * 1000).toISOString(),
          })
        }
        
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as any
        console.log('🔄 Subscription updated:', subscription.id)
        
        // Send update to Make.com to update Notion
        await sendToMake('subscription-updated', {
          subscriptionId: subscription.id,
          status: subscription.status,
          cancelAtPeriodEnd: subscription.cancel_at_period_end,
          currentPeriodEnd: new Date(subscription.current_period_end * 1000).toISOString(),
        })
        
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as any
        console.log('❌ Subscription cancelled:', subscription.id)
        
        // Send to Make.com to update Notion and send cancellation email
        await sendToMake('subscription-cancelled', {
          subscriptionId: subscription.id,
          cancelledAt: new Date().toISOString(),
        })
        
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        console.log('💳 Payment failed:', invoice.id)
        
        const customer = await stripe.customers.retrieve(invoice.customer as string)
        const customerEmail = (customer as Stripe.Customer).email
        
        if (customerEmail) {
          // Send payment failure notification
          await sendToMake('payment-failed', {
            email: customerEmail,
            invoiceId: invoice.id,
            amount: invoice.amount_due / 100,
            currency: invoice.currency,
            attemptCount: invoice.attempt_count,
          })
        }
        
        break
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice
        console.log('✅ Payment succeeded:', invoice.id)
        
        const customer = await stripe.customers.retrieve(invoice.customer as string)
        const customerEmail = (customer as Stripe.Customer).email
        
        if (customerEmail) {
          // Log successful payment and send receipt
          await sendToMake('payment-succeeded', {
            email: customerEmail,
            invoiceId: invoice.id,
            amount: invoice.amount_paid / 100,
            currency: invoice.currency,
            pdfUrl: invoice.invoice_pdf,
          })
        }
        
        break
      }

      default:
        console.log(`ℹ️  Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('❌ Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 400 }
    )
  }
}

