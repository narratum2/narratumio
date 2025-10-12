// Health check endpoint for monitoring all integrations
import { NextResponse } from 'next/server'

export async function GET() {
  const checks = {
    timestamp: new Date().toISOString(),
    status: 'healthy',
    integrations: {} as Record<string, { configured: boolean; status: string }>,
  }

  // Check Stripe
  checks.integrations.stripe = {
    configured: !!(
      process.env.STRIPE_SECRET_KEY &&
      process.env.STRIPE_WEBHOOK_SECRET &&
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    ),
    status: process.env.STRIPE_SECRET_KEY ? 'configured' : 'missing',
  }

  // Check Notion
  checks.integrations.notion = {
    configured: !!(
      process.env.NOTION_API_KEY &&
      process.env.NOTION_BOOKINGS_DB_ID &&
      process.env.NOTION_CUSTOMERS_DB_ID &&
      process.env.NOTION_MEMBERSHIPS_DB_ID
    ),
    status:
      process.env.NOTION_API_KEY && process.env.NOTION_BOOKINGS_DB_ID
        ? 'configured'
        : 'partial',
  }

  // Check Make.com
  checks.integrations.make = {
    configured: !!process.env.MAKE_WEBHOOK_URL,
    status: process.env.MAKE_WEBHOOK_URL ? 'configured' : 'missing',
  }

  // Check Intercom
  checks.integrations.intercom = {
    configured: !!process.env.NEXT_PUBLIC_INTERCOM_APP_ID,
    status: process.env.NEXT_PUBLIC_INTERCOM_APP_ID ? 'configured' : 'missing',
  }

  // Check Customer.io
  checks.integrations.customerio = {
    configured: !!(
      process.env.CUSTOMERIO_SITE_ID && process.env.CUSTOMERIO_API_KEY
    ),
    status:
      process.env.CUSTOMERIO_SITE_ID && process.env.CUSTOMERIO_API_KEY
        ? 'configured'
        : 'missing',
  }

  // Check Supabase (optional)
  checks.integrations.supabase = {
    configured: !!(
      process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
    ),
    status: process.env.SUPABASE_URL ? 'configured' : 'optional',
  }

  // Check Google Analytics (optional)
  checks.integrations.analytics = {
    configured: !!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    status: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
      ? 'configured'
      : 'optional',
  }

  // Determine overall status
  const criticalIntegrations = ['stripe', 'notion']
  const allCriticalConfigured = criticalIntegrations.every(
    (key) => checks.integrations[key].configured
  )

  checks.status = allCriticalConfigured ? 'healthy' : 'degraded'

  // Count configured integrations
  const configured = Object.values(checks.integrations).filter(
    (i) => i.configured
  ).length
  const total = Object.keys(checks.integrations).length

  return NextResponse.json({
    ...checks,
    summary: {
      overall: checks.status,
      configured: `${configured}/${total} integrations`,
      criticalConfigured: allCriticalConfigured,
    },
  })
}

