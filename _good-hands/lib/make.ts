// Make.com (Integromat) Integration Helper
// Handles automation workflows and webhooks

export interface MakeScenario {
  bookingCreated: 'booking-created'
  membershipCreated: 'membership-created'
  subscriptionCreated: 'subscription-created'
  subscriptionUpdated: 'subscription-updated'
  subscriptionCancelled: 'subscription-cancelled'
  paymentFailed: 'payment-failed'
  paymentSucceeded: 'payment-succeeded'
  chatMessage: 'chat-message'
  hotelInquiry: 'hotel-inquiry'
}

export const MAKE_SCENARIOS: MakeScenario = {
  bookingCreated: 'booking-created',
  membershipCreated: 'membership-created',
  subscriptionCreated: 'subscription-created',
  subscriptionUpdated: 'subscription-updated',
  subscriptionCancelled: 'subscription-cancelled',
  paymentFailed: 'payment-failed',
  paymentSucceeded: 'payment-succeeded',
  chatMessage: 'chat-message',
  hotelInquiry: 'hotel-inquiry',
}

/**
 * Send data to a Make.com webhook scenario
 * @param scenario - The scenario endpoint name
 * @param data - The data payload to send
 * @returns Response from Make.com or null if failed
 */
export async function sendToMake(
  scenario: string,
  data: Record<string, any>
): Promise<any | null> {
  const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL

  if (!makeWebhookUrl) {
    console.warn('⚠️  Make.com webhook URL not configured')
    return null
  }

  try {
    const url = `${makeWebhookUrl}/${scenario}`
    
    console.log(`📤 Sending to Make.com [${scenario}]:`, {
      url: url.replace(/https:\/\/hook\..+?\//g, 'https://hook.****/'),
      dataKeys: Object.keys(data),
    })

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: data.timestamp || new Date().toISOString(),
        source: 'good-hands-website',
      }),
    })

    if (!response.ok) {
      console.error('❌ Make.com webhook failed:', {
        status: response.status,
        statusText: response.statusText,
        scenario,
      })
      return null
    }

    const result = await response.json()
    console.log(`✅ Make.com [${scenario}] succeeded`)
    
    return result
  } catch (error) {
    console.error('❌ Make.com webhook error:', {
      scenario,
      error: error instanceof Error ? error.message : 'Unknown error',
    })
    return null
  }
}

/**
 * Send booking data to Make.com for processing
 * Triggers email confirmation, Notion updates, and team notifications
 */
export async function sendBookingToMake(booking: {
  name: string
  email: string
  phone: string
  service: string
  neighborhood?: string
  date: string
  time: string
  message?: string
}) {
  return sendToMake(MAKE_SCENARIOS.bookingCreated, {
    type: 'booking',
    customer: {
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
    },
    booking: {
      service: booking.service,
      neighborhood: booking.neighborhood || 'Not specified',
      date: booking.date,
      time: booking.time,
      notes: booking.message || '',
    },
  })
}

/**
 * Send membership creation to Make.com
 * Triggers welcome email, Notion membership record, and onboarding flow
 */
export async function sendMembershipToMake(membership: {
  email: string
  membershipType: 'Gold' | 'Platinum'
  subscriptionId: string
  customerId: string
}) {
  return sendToMake(MAKE_SCENARIOS.membershipCreated, {
    type: 'membership',
    customer: {
      email: membership.email,
      stripeCustomerId: membership.customerId,
    },
    membership: {
      tier: membership.membershipType,
      subscriptionId: membership.subscriptionId,
      price: membership.membershipType === 'Gold' ? 49 : 129,
      benefits:
        membership.membershipType === 'Gold'
          ? ['15% discount', 'Priority booking', 'Free cancellations']
          : ['25% discount', 'VIP priority', 'Concierge line', 'Free cancellations'],
    },
  })
}

/**
 * Send chat message to Make.com for logging and AI analysis
 */
export async function sendChatToMake(chat: {
  customerName?: string
  customerEmail?: string
  message: string
  source: string
  sentiment?: 'positive' | 'neutral' | 'negative'
}) {
  return sendToMake(MAKE_SCENARIOS.chatMessage, {
    type: 'chat',
    conversation: {
      customerName: chat.customerName || 'Anonymous',
      customerEmail: chat.customerEmail,
      message: chat.message,
      source: chat.source,
      sentiment: chat.sentiment || 'neutral',
    },
  })
}

/**
 * Send hotel inquiry to Make.com
 * Triggers partnership pipeline creation and follow-up automation
 */
export async function sendHotelInquiryToMake(inquiry: {
  hotelName: string
  contactName: string
  contactEmail: string
  contactPhone?: string
  message: string
}) {
  return sendToMake(MAKE_SCENARIOS.hotelInquiry, {
    type: 'hotel-inquiry',
    hotel: {
      name: inquiry.hotelName,
      contactPerson: inquiry.contactName,
      email: inquiry.contactEmail,
      phone: inquiry.contactPhone || '',
    },
    inquiry: {
      message: inquiry.message,
      source: 'website',
      status: 'new',
    },
  })
}

/**
 * Send payment failure notification to Make.com
 * Triggers customer notification and retry workflow
 */
export async function sendPaymentFailedToMake(payment: {
  email: string
  invoiceId: string
  amount: number
  currency: string
  attemptCount: number
}) {
  return sendToMake(MAKE_SCENARIOS.paymentFailed, {
    type: 'payment-failed',
    customer: {
      email: payment.email,
    },
    payment: {
      invoiceId: payment.invoiceId,
      amount: payment.amount,
      currency: payment.currency,
      attemptCount: payment.attemptCount,
      retryAvailable: payment.attemptCount < 3,
    },
  })
}

/**
 * Batch send multiple events to Make.com
 * Useful for processing multiple related events at once
 */
export async function sendBatchToMake(
  scenario: string,
  items: Record<string, any>[]
): Promise<any[]> {
  const results = await Promise.allSettled(
    items.map((item) => sendToMake(scenario, item))
  )

  return results.map((result) => 
    result.status === 'fulfilled' ? result.value : null
  )
}

/**
 * Health check for Make.com integration
 * Tests webhook connectivity and response
 */
export async function testMakeConnection(): Promise<boolean> {
  const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL

  if (!makeWebhookUrl) {
    console.error('❌ Make.com webhook URL not configured')
    return false
  }

  try {
    const response = await sendToMake('health-check', {
      test: true,
      message: 'Health check from Good Hands',
    })

    return response !== null
  } catch (error) {
    console.error('❌ Make.com connection test failed:', error)
    return false
  }
}

