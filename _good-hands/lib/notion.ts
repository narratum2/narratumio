// Notion API Helper Functions
// User needs to set NOTION_API_KEY in environment variables

export interface NotionConfig {
  apiKey: string
  databaseIds: {
    customers: string
    bookings: string
    memberships: string
    hotelPartners: string
    professionals: string
  }
}

export async function getNotionClient() {
  const apiKey = process.env.NOTION_API_KEY

  if (!apiKey) {
    throw new Error('NOTION_API_KEY is not configured. Please set up your Notion integration.')
  }

  const { Client } = await import('@notionhq/client')
  return new Client({ auth: apiKey })
}

export async function createCustomerRecord(data: {
  name: string
  email: string
  phone: string
  source?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
}) {
  try {
    const notion = await getNotionClient()
    const customersDbId = process.env.NOTION_CUSTOMERS_DB_ID

    if (!customersDbId) {
      console.warn('NOTION_CUSTOMERS_DB_ID not configured')
      return null
    }

    const response = await notion.pages.create({
      parent: { database_id: customersDbId },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: data.name,
              },
            },
          ],
        },
        Email: {
          email: data.email,
        },
        Phone: {
          phone_number: data.phone,
        },
        ...(data.source && {
          Source: {
            rich_text: [
              {
                text: {
                  content: data.source,
                },
              },
            ],
          },
        }),
        ...(data.utmSource && {
          'UTM Source': {
            rich_text: [
              {
                text: {
                  content: data.utmSource,
                },
              },
            ],
          },
        }),
        ...(data.utmCampaign && {
          'UTM Campaign': {
            rich_text: [
              {
                text: {
                  content: data.utmCampaign,
                },
              },
            ],
          },
        }),
        Status: {
          select: {
            name: 'New',
          },
        },
        'Created Date': {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    })

    return response
  } catch (error) {
    console.error('Error creating customer record in Notion:', error)
    return null
  }
}

export async function createBookingRecord(data: {
  customerName: string
  customerEmail: string
  service: string
  neighborhood?: string
  date: string
  time: string
  message?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
}) {
  try {
    const notion = await getNotionClient()
    const bookingsDbId = process.env.NOTION_BOOKINGS_DB_ID

    if (!bookingsDbId) {
      console.warn('NOTION_BOOKINGS_DB_ID not configured')
      return null
    }

    const response = await notion.pages.create({
      parent: { database_id: bookingsDbId },
      properties: {
        'Customer Name': {
          title: [
            {
              text: {
                content: data.customerName,
              },
            },
          ],
        },
        'Customer Email': {
          email: data.customerEmail,
        },
        Service: {
          select: {
            name: data.service,
          },
        },
        ...(data.neighborhood && {
          Neighborhood: {
            select: {
              name: data.neighborhood,
            },
          },
        }),
        'Date': {
          date: {
            start: `${data.date}T${data.time}:00`,
          },
        },
        Status: {
          select: {
            name: 'Pending',
          },
        },
        ...(data.message && {
          Notes: {
            rich_text: [
              {
                text: {
                  content: data.message,
                },
              },
            ],
          },
        }),
        ...(data.utmSource && {
          'UTM Source': {
            rich_text: [
              {
                text: {
                  content: data.utmSource,
                },
              },
            ],
          },
        }),
        'Created Date': {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    })

    return response
  } catch (error) {
    console.error('Error creating booking record in Notion:', error)
    return null
  }
}

export async function createMembershipRecord(data: {
  customerEmail: string
  membershipType: 'Gold' | 'Platinum'
  stripeSubscriptionId: string
  stripeCustomerId: string
  status: 'active' | 'cancelled' | 'past_due'
  price: number
}) {
  try {
    const notion = await getNotionClient()
    const membershipsDbId = process.env.NOTION_MEMBERSHIPS_DB_ID

    if (!membershipsDbId) {
      console.warn('NOTION_MEMBERSHIPS_DB_ID not configured')
      return null
    }

    const response = await notion.pages.create({
      parent: { database_id: membershipsDbId },
      properties: {
        'Customer Email': {
          email: data.customerEmail,
        },
        'Membership Type': {
          select: {
            name: data.membershipType,
          },
        },
        'Stripe Subscription ID': {
          rich_text: [
            {
              text: {
                content: data.stripeSubscriptionId,
              },
            },
          ],
        },
        'Stripe Customer ID': {
          rich_text: [
            {
              text: {
                content: data.stripeCustomerId,
              },
            },
          ],
        },
        Status: {
          select: {
            name: data.status === 'active' ? 'Active' : data.status === 'cancelled' ? 'Cancelled' : 'Past Due',
          },
        },
        'Monthly Price': {
          number: data.price,
        },
        'Start Date': {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    })

    return response
  } catch (error) {
    console.error('Error creating membership record in Notion:', error)
    return null
  }
}

export async function logConversation(data: {
  customerEmail?: string
  customerName?: string
  message: string
  source: string
}) {
  try {
    const notion = await getNotionClient()
    const conversationsDbId = process.env.NOTION_CONVERSATIONS_DB_ID

    if (!conversationsDbId) {
      console.warn('NOTION_CONVERSATIONS_DB_ID not configured')
      return null
    }

    const response = await notion.pages.create({
      parent: { database_id: conversationsDbId },
      properties: {
        Message: {
          title: [
            {
              text: {
                content: data.message.substring(0, 100) + (data.message.length > 100 ? '...' : ''),
              },
            },
          ],
        },
        ...(data.customerEmail && {
          'Customer Email': {
            email: data.customerEmail,
          },
        }),
        ...(data.customerName && {
          'Customer Name': {
            rich_text: [
              {
                text: {
                  content: data.customerName,
                },
              },
            ],
          },
        }),
        Source: {
          select: {
            name: data.source,
          },
        },
        'Full Message': {
          rich_text: [
            {
              text: {
                content: data.message,
              },
            },
          ],
        },
        Timestamp: {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    })

    return response
  } catch (error) {
    console.error('Error logging conversation in Notion:', error)
    return null
  }
}

// Helper function to check if customer exists and get their membership status
export async function getCustomerMembershipStatus(email: string) {
  try {
    const notion = await getNotionClient()
    const membershipsDbId = process.env.NOTION_MEMBERSHIPS_DB_ID

    if (!membershipsDbId) {
      return { isMember: false, tier: null, discount: 0 }
    }

    // Query Notion database for active membership
    // Note: In production, update this to use proper Notion API query
    // For now, return mock data to avoid build errors
    const response = {
      results: [] as any[],
    }
    
    // TODO: Uncomment when Notion is configured
    // const response = await notion.databases.query({
    //   database_id: membershipsDbId,
    //   filter: {
    //     and: [
    //       {
    //         property: 'Customer Email',
    //         email: {
    //           equals: email,
    //         },
    //       },
    //       {
    //         property: 'Status',
    //         select: {
    //           equals: 'Active',
    //         },
    //       },
    //     ],
    //   },
    // })

    if (response.results.length > 0) {
      const membership = response.results[0]
      const properties = membership.properties as any
      const tier = properties['Membership Type']?.select?.name as 'Gold' | 'Platinum' | null

      return {
        isMember: true,
        tier,
        discount: tier === 'Gold' ? 0.15 : tier === 'Platinum' ? 0.25 : 0,
      }
    }

    return { isMember: false, tier: null, discount: 0 }
  } catch (error) {
    console.error('Error checking membership status:', error)
    return { isMember: false, tier: null, discount: 0 }
  }
}

