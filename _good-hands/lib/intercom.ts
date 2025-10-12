// Intercom Chat Widget Integration Helper
// Handles customer conversations and support

/**
 * Get Intercom App ID from environment
 */
export function getIntercomAppId(): string | null {
  return process.env.NEXT_PUBLIC_INTERCOM_APP_ID || null
}

/**
 * Check if Intercom is configured
 */
export function isIntercomEnabled(): boolean {
  return !!getIntercomAppId()
}

/**
 * Intercom boot configuration
 * Used to initialize the widget with user data
 */
export interface IntercomBootConfig {
  app_id: string
  user_id?: string
  email?: string
  name?: string
  created_at?: number
  custom_attributes?: {
    membership_tier?: 'Gold' | 'Platinum' | 'None'
    last_booking_date?: string
    total_bookings?: number
    lifetime_value?: number
    preferred_neighborhood?: string
    [key: string]: any
  }
}

/**
 * Create Intercom boot configuration for a customer
 */
export function createIntercomConfig(user?: {
  id?: string
  email?: string
  name?: string
  membershipTier?: 'Gold' | 'Platinum' | 'None'
  lastBookingDate?: string
  totalBookings?: number
  lifetimeValue?: number
}): IntercomBootConfig | null {
  const appId = getIntercomAppId()

  if (!appId) {
    return null
  }

  const config: IntercomBootConfig = {
    app_id: appId,
  }

  if (user) {
    if (user.id) config.user_id = user.id
    if (user.email) config.email = user.email
    if (user.name) config.name = user.name
    
    config.custom_attributes = {
      membership_tier: user.membershipTier || 'None',
      last_booking_date: user.lastBookingDate,
      total_bookings: user.totalBookings,
      lifetime_value: user.lifetimeValue,
    }
  }

  return config
}

/**
 * Server-side Intercom API helper
 * Requires INTERCOM_API_KEY in environment
 */
export class IntercomAPI {
  private apiKey: string | null
  private baseUrl = 'https://api.intercom.io'

  constructor() {
    this.apiKey = process.env.INTERCOM_API_KEY || null
  }

  private async request(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    data?: any
  ): Promise<any> {
    if (!this.apiKey) {
      throw new Error('Intercom API key not configured')
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    })

    if (!response.ok) {
      throw new Error(`Intercom API error: ${response.statusText}`)
    }

    return response.json()
  }

  /**
   * Create or update a contact in Intercom
   */
  async createOrUpdateContact(contact: {
    email: string
    name?: string
    phone?: string
    customAttributes?: Record<string, any>
  }) {
    return this.request('/contacts', 'POST', {
      role: 'user',
      email: contact.email,
      name: contact.name,
      phone: contact.phone,
      custom_attributes: contact.customAttributes,
    })
  }

  /**
   * Tag a contact in Intercom
   */
  async tagContact(contactId: string, tagName: string) {
    return this.request('/tags', 'POST', {
      name: tagName,
      users: [{ id: contactId }],
    })
  }

  /**
   * Create a note on a contact
   */
  async createNote(contactId: string, body: string) {
    return this.request('/notes', 'POST', {
      body,
      contact: { id: contactId },
    })
  }

  /**
   * Send a message to a contact
   */
  async sendMessage(contact: { email: string }, message: string) {
    return this.request('/messages', 'POST', {
      message_type: 'inapp',
      body: message,
      from: { type: 'admin', id: process.env.INTERCOM_ADMIN_ID },
      to: { type: 'user', email: contact.email },
    })
  }

  /**
   * Track an event for a contact
   */
  async trackEvent(email: string, eventName: string, metadata?: Record<string, any>) {
    return this.request('/events', 'POST', {
      event_name: eventName,
      created_at: Math.floor(Date.now() / 1000),
      email,
      metadata,
    })
  }
}

/**
 * Create an Intercom API instance
 */
export function createIntercomAPI(): IntercomAPI {
  return new IntercomAPI()
}

/**
 * Log a booking to Intercom as an event
 */
export async function logBookingToIntercom(booking: {
  email: string
  service: string
  date: string
  amount?: number
}) {
  try {
    const intercom = createIntercomAPI()
    
    await intercom.trackEvent(booking.email, 'booking_created', {
      service: booking.service,
      date: booking.date,
      amount: booking.amount,
    })
    
    console.log('✅ Booking logged to Intercom')
  } catch (error) {
    console.error('❌ Failed to log booking to Intercom:', error)
  }
}

/**
 * Update customer's membership status in Intercom
 */
export async function updateMembershipInIntercom(
  email: string,
  membershipTier: 'Gold' | 'Platinum' | 'None'
) {
  try {
    const intercom = createIntercomAPI()
    
    await intercom.createOrUpdateContact({
      email,
      customAttributes: {
        membership_tier: membershipTier,
        membership_updated_at: new Date().toISOString(),
      },
    })
    
    console.log(`✅ Membership updated in Intercom: ${email} → ${membershipTier}`)
  } catch (error) {
    console.error('❌ Failed to update membership in Intercom:', error)
  }
}

/**
 * Send automated message for abandoned bookings
 */
export async function sendAbandonedBookingMessage(email: string, name?: string) {
  try {
    const intercom = createIntercomAPI()
    
    const message = `Hi${name ? ` ${name}` : ''}! 👋\n\nI noticed you were looking at our services but didn't complete your booking. Can I help with anything?\n\nFeel free to reach out if you have questions! We're here to make your beauty experience perfect. ✨`
    
    await intercom.sendMessage({ email }, message)
    
    console.log('✅ Abandoned booking message sent via Intercom')
  } catch (error) {
    console.error('❌ Failed to send abandoned booking message:', error)
  }
}

/**
 * Client-side Intercom widget methods
 * These return JavaScript code strings to be executed in the browser
 */
export const IntercomWidget = {
  /**
   * Show the Intercom messenger
   */
  show: () => `if (window.Intercom) window.Intercom('show')`,

  /**
   * Hide the Intercom messenger
   */
  hide: () => `if (window.Intercom) window.Intercom('hide')`,

  /**
   * Update user data
   */
  update: (data: Record<string, any>) => 
    `if (window.Intercom) window.Intercom('update', ${JSON.stringify(data)})`,

  /**
   * Track an event
   */
  trackEvent: (eventName: string, metadata?: Record<string, any>) =>
    `if (window.Intercom) window.Intercom('trackEvent', '${eventName}', ${JSON.stringify(metadata || {})})`,

  /**
   * Show a specific message/article
   */
  showArticle: (articleId: string) =>
    `if (window.Intercom) window.Intercom('showArticle', ${articleId})`,

  /**
   * Start a new conversation with a pre-filled message
   */
  showNewMessage: (message: string) =>
    `if (window.Intercom) window.Intercom('showNewMessage', '${message}')`,
}

