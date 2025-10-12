// Integration testing endpoint for admins
import { NextRequest, NextResponse } from 'next/server'
import { testMakeConnection } from '@/lib/make'
import { testCustomerIOConnection } from '@/lib/customerio'

export async function POST(request: NextRequest) {
  try {
    const { integration, testData } = await request.json()

    // Security: Add admin authentication here in production
    const adminKey = request.headers.get('x-admin-key')
    if (adminKey !== process.env.ADMIN_API_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const results: Record<string, any> = {
      timestamp: new Date().toISOString(),
      integration,
      test: 'pending',
    }

    switch (integration) {
      case 'stripe':
        results.test = await testStripeIntegration()
        break

      case 'notion':
        results.test = await testNotionIntegration()
        break

      case 'make':
        results.test = await testMakeIntegration()
        break

      case 'customerio':
        results.test = await testCustomerIOIntegration()
        break

      case 'intercom':
        results.test = await testIntercomIntegration()
        break

      case 'all':
        results.test = {
          stripe: await testStripeIntegration(),
          notion: await testNotionIntegration(),
          make: await testMakeIntegration(),
          customerio: await testCustomerIOIntegration(),
          intercom: await testIntercomIntegration(),
        }
        break

      default:
        return NextResponse.json(
          { error: 'Invalid integration name' },
          { status: 400 }
        )
    }

    return NextResponse.json(results)
  } catch (error) {
    console.error('❌ Integration test failed:', error)
    return NextResponse.json(
      {
        error: 'Integration test failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

// Test Stripe integration
async function testStripeIntegration() {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY

    if (!stripeSecretKey) {
      return { success: false, error: 'Stripe not configured' }
    }

    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2025-09-30.clover',
    })

    // Try to list products
    const products = await stripe.products.list({ limit: 1 })

    return {
      success: true,
      message: 'Stripe connection successful',
      productsCount: products.data.length,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

// Test Notion integration
async function testNotionIntegration() {
  try {
    const notionApiKey = process.env.NOTION_API_KEY

    if (!notionApiKey) {
      return { success: false, error: 'Notion not configured' }
    }

    const { Client } = await import('@notionhq/client')
    const notion = new Client({ auth: notionApiKey })

    // Try to list databases
    const response = await notion.search({
      filter: { property: 'object', value: 'page' } as any,
      page_size: 10,
    })

    const databases = response.results

    return {
      success: true,
      message: 'Notion connection successful',
      databasesFound: databases.length,
      configured: {
        bookings: !!process.env.NOTION_BOOKINGS_DB_ID,
        customers: !!process.env.NOTION_CUSTOMERS_DB_ID,
        memberships: !!process.env.NOTION_MEMBERSHIPS_DB_ID,
      },
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

// Test Make.com integration
async function testMakeIntegration() {
  try {
    const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL

    if (!makeWebhookUrl) {
      return { success: false, error: 'Make.com not configured' }
    }

    const isConnected = await testMakeConnection()

    return {
      success: isConnected,
      message: isConnected
        ? 'Make.com connection successful'
        : 'Make.com webhook failed',
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

// Test Customer.io integration
async function testCustomerIOIntegration() {
  try {
    const siteId = process.env.CUSTOMERIO_SITE_ID
    const apiKey = process.env.CUSTOMERIO_API_KEY

    if (!siteId || !apiKey) {
      return { success: false, error: 'Customer.io not configured' }
    }

    const isConnected = await testCustomerIOConnection()

    return {
      success: isConnected,
      message: isConnected
        ? 'Customer.io connection successful'
        : 'Customer.io connection failed',
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

// Test Intercom integration
async function testIntercomIntegration() {
  try {
    const appId = process.env.NEXT_PUBLIC_INTERCOM_APP_ID
    const apiKey = process.env.INTERCOM_API_KEY

    if (!appId) {
      return { success: false, error: 'Intercom not configured' }
    }

    if (!apiKey) {
      return {
        success: true,
        message: 'Intercom App ID configured (widget only)',
        note: 'Set INTERCOM_API_KEY for server-side API access',
      }
    }

    // Test API connection
    const response = await fetch('https://api.intercom.io/me', {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: 'application/json',
      },
    })

    if (response.ok) {
      const data = await response.json()
      return {
        success: true,
        message: 'Intercom API connection successful',
        app: data.app?.name,
      }
    }

    return {
      success: false,
      error: `API connection failed: ${response.statusText}`,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

// GET endpoint to list integration status
export async function GET() {
  return NextResponse.json({
    message: 'Integration testing endpoint',
    usage: 'POST with { "integration": "stripe|notion|make|customerio|intercom|all" }',
    note: 'Requires x-admin-key header for authentication',
    availableTests: ['stripe', 'notion', 'make', 'customerio', 'intercom', 'all'],
  })
}

