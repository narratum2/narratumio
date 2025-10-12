// Customer.io Email Automation Integration Helper
// Handles transactional and marketing emails

export interface CustomerIOConfig {
  siteId: string
  apiKey: string
  trackingApiKey?: string
}

/**
 * Get Customer.io configuration from environment
 */
export function getCustomerIOConfig(): CustomerIOConfig | null {
  const siteId = process.env.CUSTOMERIO_SITE_ID
  const apiKey = process.env.CUSTOMERIO_API_KEY
  const trackingApiKey = process.env.CUSTOMERIO_TRACKING_API_KEY

  if (!siteId || !apiKey) {
    return null
  }

  return { siteId, apiKey, trackingApiKey }
}

/**
 * Check if Customer.io is configured
 */
export function isCustomerIOEnabled(): boolean {
  return !!getCustomerIOConfig()
}

/**
 * Customer.io API Client
 */
export class CustomerIOClient {
  private config: CustomerIOConfig | null
  private trackApiUrl = 'https://track.customer.io/api/v1'
  private appApiUrl = 'https://api.customer.io/v1/api'

  constructor() {
    this.config = getCustomerIOConfig()
  }

  private getAuthHeaders(): HeadersInit {
    if (!this.config) {
      throw new Error('Customer.io not configured')
    }

    const credentials = Buffer.from(
      `${this.config.siteId}:${this.config.apiKey}`
    ).toString('base64')

    return {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/json',
    }
  }

  private async request(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    data?: any
  ): Promise<any> {
    const response = await fetch(url, {
      method,
      headers: this.getAuthHeaders(),
      body: data ? JSON.stringify(data) : undefined,
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Customer.io API error: ${response.status} - ${error}`)
    }

    // Some endpoints return no content
    if (response.status === 204) {
      return { success: true }
    }

    return response.json()
  }

  /**
   * Identify or update a customer
   */
  async identify(customerId: string, attributes: {
    email: string
    name?: string
    created_at?: number
    [key: string]: any
  }) {
    return this.request(
      `${this.trackApiUrl}/customers/${customerId}`,
      'PUT',
      attributes
    )
  }

  /**
   * Track an event for a customer
   */
  async track(customerId: string, eventName: string, data?: Record<string, any>) {
    return this.request(
      `${this.trackApiUrl}/customers/${customerId}/events`,
      'POST',
      {
        name: eventName,
        data: data || {},
        timestamp: Math.floor(Date.now() / 1000),
      }
    )
  }

  /**
   * Delete a customer
   */
  async delete(customerId: string) {
    return this.request(
      `${this.trackApiUrl}/customers/${customerId}`,
      'DELETE'
    )
  }

  /**
   * Send a transactional email
   */
  async sendTransactional(
    transactionalMessageId: string,
    recipient: {
      id?: string
      email: string
    },
    data: Record<string, any>
  ) {
    return this.request(
      `${this.appApiUrl}/send/email`,
      'POST',
      {
        transactional_message_id: transactionalMessageId,
        to: recipient.email,
        identifiers: recipient.id ? { id: recipient.id } : { email: recipient.email },
        message_data: data,
      }
    )
  }
}

/**
 * Create a Customer.io client
 */
export function createCustomerIOClient(): CustomerIOClient {
  return new CustomerIOClient()
}

// Email templates and event names
export const CustomerIOEvents = {
  BOOKING_CREATED: 'booking_created',
  BOOKING_CONFIRMED: 'booking_confirmed',
  BOOKING_REMINDER: 'booking_reminder_24h',
  BOOKING_COMPLETED: 'booking_completed',
  BOOKING_CANCELLED: 'booking_cancelled',
  MEMBERSHIP_CREATED: 'membership_created',
  MEMBERSHIP_RENEWED: 'membership_renewed',
  MEMBERSHIP_EXPIRING: 'membership_expiring_soon',
  MEMBERSHIP_CANCELLED: 'membership_cancelled',
  PAYMENT_FAILED: 'payment_failed',
  PAYMENT_SUCCEEDED: 'payment_succeeded',
  ABANDONED_BOOKING: 'abandoned_booking',
  REVIEW_REQUEST: 'review_request',
  REFERRAL_REWARD: 'referral_reward',
} as const

/**
 * Send booking confirmation email
 */
export async function sendBookingConfirmation(booking: {
  customerEmail: string
  customerName: string
  service: string
  date: string
  time: string
  neighborhood?: string
  message?: string
}) {
  try {
    const client = createCustomerIOClient()
    
    // Identify the customer
    await client.identify(booking.customerEmail, {
      email: booking.customerEmail,
      name: booking.customerName,
      last_booking_date: new Date().toISOString(),
    })

    // Track booking event
    await client.track(
      booking.customerEmail,
      CustomerIOEvents.BOOKING_CREATED,
      {
        service: booking.service,
        date: booking.date,
        time: booking.time,
        neighborhood: booking.neighborhood || 'Not specified',
        notes: booking.message || '',
      }
    )

    console.log('✅ Booking confirmation sent via Customer.io')
  } catch (error) {
    console.error('❌ Failed to send booking confirmation:', error)
  }
}

/**
 * Send membership welcome email
 */
export async function sendMembershipWelcome(membership: {
  email: string
  name?: string
  tier: 'Gold' | 'Platinum'
}) {
  try {
    const client = createCustomerIOClient()

    await client.identify(membership.email, {
      email: membership.email,
      name: membership.name,
      membership_tier: membership.tier,
      membership_start_date: new Date().toISOString(),
    })

    await client.track(
      membership.email,
      CustomerIOEvents.MEMBERSHIP_CREATED,
      {
        tier: membership.tier,
        benefits: membership.tier === 'Gold' 
          ? ['15% discount', 'Priority booking', 'Free cancellations']
          : ['25% discount', 'VIP priority', 'Concierge line', 'Annual consultation'],
      }
    )

    console.log(`✅ Membership welcome sent: ${membership.tier}`)
  } catch (error) {
    console.error('❌ Failed to send membership welcome:', error)
  }
}

/**
 * Send payment failed notification
 */
export async function sendPaymentFailed(payment: {
  email: string
  amount: number
  currency: string
  invoiceUrl?: string
}) {
  try {
    const client = createCustomerIOClient()

    await client.track(
      payment.email,
      CustomerIOEvents.PAYMENT_FAILED,
      {
        amount: payment.amount,
        currency: payment.currency,
        invoice_url: payment.invoiceUrl,
        retry_available: true,
      }
    )

    console.log('✅ Payment failed notification sent')
  } catch (error) {
    console.error('❌ Failed to send payment failed notification:', error)
  }
}

/**
 * Send booking reminder (24 hours before)
 */
export async function sendBookingReminder(booking: {
  email: string
  name: string
  service: string
  date: string
  time: string
  professionalName?: string
  location?: string
}) {
  try {
    const client = createCustomerIOClient()

    await client.track(
      booking.email,
      CustomerIOEvents.BOOKING_REMINDER,
      {
        service: booking.service,
        date: booking.date,
        time: booking.time,
        professional_name: booking.professionalName || 'Your assigned professional',
        location: booking.location || 'Location to be confirmed',
      }
    )

    console.log('✅ Booking reminder sent')
  } catch (error) {
    console.error('❌ Failed to send booking reminder:', error)
  }
}

/**
 * Send post-service follow-up and review request
 */
export async function sendReviewRequest(booking: {
  email: string
  name: string
  service: string
  professionalName?: string
}) {
  try {
    const client = createCustomerIOClient()

    await client.track(
      booking.email,
      CustomerIOEvents.REVIEW_REQUEST,
      {
        service: booking.service,
        professional_name: booking.professionalName,
      }
    )

    console.log('✅ Review request sent')
  } catch (error) {
    console.error('❌ Failed to send review request:', error)
  }
}

/**
 * Send membership renewal reminder
 */
export async function sendMembershipRenewal(membership: {
  email: string
  name: string
  tier: 'Gold' | 'Platinum'
  renewalDate: string
  amount: number
}) {
  try {
    const client = createCustomerIOClient()

    await client.track(
      membership.email,
      CustomerIOEvents.MEMBERSHIP_RENEWED,
      {
        tier: membership.tier,
        renewal_date: membership.renewalDate,
        amount: membership.amount,
      }
    )

    console.log('✅ Membership renewal reminder sent')
  } catch (error) {
    console.error('❌ Failed to send membership renewal reminder:', error)
  }
}

/**
 * Send abandoned booking recovery email
 */
export async function sendAbandonedBookingEmail(booking: {
  email: string
  name?: string
  service: string
  discountCode?: string
}) {
  try {
    const client = createCustomerIOClient()

    await client.track(
      booking.email,
      CustomerIOEvents.ABANDONED_BOOKING,
      {
        service: booking.service,
        discount_code: booking.discountCode,
        incentive_message: booking.discountCode 
          ? `Use code ${booking.discountCode} for 10% off!`
          : undefined,
      }
    )

    console.log('✅ Abandoned booking email sent')
  } catch (error) {
    console.error('❌ Failed to send abandoned booking email:', error)
  }
}

/**
 * Batch identify multiple customers
 */
export async function batchIdentifyCustomers(
  customers: Array<{
    id: string
    email: string
    attributes: Record<string, any>
  }>
): Promise<void> {
  const client = createCustomerIOClient()

  const results = await Promise.allSettled(
    customers.map((customer) =>
      client.identify(customer.id, {
        email: customer.email,
        ...customer.attributes,
      })
    )
  )

  const successful = results.filter((r) => r.status === 'fulfilled').length
  console.log(`✅ Batch identified ${successful}/${customers.length} customers`)
}

/**
 * Health check for Customer.io integration
 */
export async function testCustomerIOConnection(): Promise<boolean> {
  try {
    const config = getCustomerIOConfig()
    
    if (!config) {
      console.error('❌ Customer.io not configured')
      return false
    }

    // Try to identify a test customer
    const client = createCustomerIOClient()
    await client.identify('test-connection', {
      email: 'test@goodhands.com',
      name: 'Test Connection',
      test: true,
    })

    console.log('✅ Customer.io connection test succeeded')
    return true
  } catch (error) {
    console.error('❌ Customer.io connection test failed:', error)
    return false
  }
}

