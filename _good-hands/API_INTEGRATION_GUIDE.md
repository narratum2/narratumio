# 🔌 API Integration Guide - Good Hands

**Complete technical documentation for all integrations**

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Environment Variables](#environment-variables)
3. [API Endpoints](#api-endpoints)
4. [Integration Libraries](#integration-libraries)
5. [Webhooks](#webhooks)
6. [Testing](#testing)
7. [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

Good Hands uses a microservices integration architecture with:
- **Stripe** - Payment processing & subscriptions
- **Notion** - CRM & database
- **Make.com** - Automation orchestrator
- **Intercom** - Customer chat
- **Customer.io** - Email automation
- **Supabase** - Backup database (optional)

### Architecture Flow

```
User Action → Website API → Notion (Primary) → Make.com → Automations
                    ↓
                  Stripe → Webhooks → Notion + Make.com
                    ↓
              Customer.io + Intercom
```

---

## 🔐 Environment Variables

### Required for Production

```bash
# Stripe (Payment Processing)
STRIPE_SECRET_KEY=sk_live_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# Notion (CRM)
NOTION_API_KEY=secret_xxxxx
NOTION_BOOKINGS_DB_ID=xxxxx
NOTION_CUSTOMERS_DB_ID=xxxxx
NOTION_MEMBERSHIPS_DB_ID=xxxxx
NOTION_CONVERSATIONS_DB_ID=xxxxx (optional)
```

### Recommended

```bash
# Make.com (Automation)
MAKE_WEBHOOK_URL=https://hook.eu1.make.com/xxxxx

# Intercom (Chat)
NEXT_PUBLIC_INTERCOM_APP_ID=xxxxx
INTERCOM_API_KEY=xxxxx (for server-side API)

# Customer.io (Email)
CUSTOMERIO_SITE_ID=xxxxx
CUSTOMERIO_API_KEY=xxxxx
```

### Optional

```bash
# Supabase (Backup Database)
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=xxxxx

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Admin Tools
ADMIN_API_KEY=your-secret-admin-key
```

---

## 🛠️ API Endpoints

### Bookings API

**Create Booking**
```http
POST /api/bookings
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+351 912 345 678",
  "service": "Hair Styling",
  "neighborhood": "Chiado",
  "date": "2025-01-20",
  "time": "14:00",
  "message": "Optional notes",
  "utm_source": "google",
  "utm_medium": "cpc",
  "utm_campaign": "winter2025"
}
```

**Response (200 OK)**
```json
{
  "success": true,
  "message": "Booking created successfully",
  "booking": {
    "id": "notion-page-id",
    "name": "John Doe",
    "email": "john@example.com",
    "service": "Hair Styling",
    "date": "2025-01-20",
    "time": "14:00",
    "created_at": "2025-01-11T10:30:00Z"
  },
  "integrations": {
    "notion": true,
    "customer": true,
    "automation": true,
    "backup": true
  }
}
```

### Stripe APIs

**Create Checkout Session (Membership)**
```http
POST /api/stripe/create-checkout-session
Content-Type: application/json

{
  "priceId": "price_xxxxx",
  "membershipType": "Gold"
}
```

**Response**
```json
{
  "sessionId": "cs_test_xxxxx",
  "url": "https://checkout.stripe.com/c/pay/cs_test_xxxxx"
}
```

**Validate Coupon Code**
```http
POST /api/stripe/validate-coupon
Content-Type: application/json

{
  "code": "WELCOME15"
}
```

**Response**
```json
{
  "valid": true,
  "code": "WELCOME15",
  "promotionCodeId": "promo_xxxxx",
  "couponId": "coupon_xxxxx",
  "discount": {
    "type": "percentage",
    "amount": 15,
    "description": "15% off",
    "duration": "Applies once"
  },
  "restrictions": [
    "Minimum purchase: €50",
    "100 uses remaining"
  ]
}
```

**List Active Coupons (Admin)**
```http
GET /api/stripe/validate-coupon
```

**Webhook Handler**
```http
POST /api/stripe/webhook
Stripe-Signature: t=xxx,v1=xxx
Content-Type: application/json

[Stripe Event Object]
```

### Admin APIs

**Health Check**
```http
GET /api/admin/health
```

**Response**
```json
{
  "timestamp": "2025-01-11T10:30:00Z",
  "status": "healthy",
  "integrations": {
    "stripe": {
      "configured": true,
      "status": "configured"
    },
    "notion": {
      "configured": true,
      "status": "configured"
    },
    "make": {
      "configured": true,
      "status": "configured"
    },
    "intercom": {
      "configured": false,
      "status": "missing"
    },
    "customerio": {
      "configured": true,
      "status": "configured"
    }
  },
  "summary": {
    "overall": "healthy",
    "configured": "4/7 integrations",
    "criticalConfigured": true
  }
}
```

**Test Integrations**
```http
POST /api/admin/test-integrations
x-admin-key: your-secret-admin-key
Content-Type: application/json

{
  "integration": "all"
}
```

**Response**
```json
{
  "timestamp": "2025-01-11T10:30:00Z",
  "integration": "all",
  "test": {
    "stripe": {
      "success": true,
      "message": "Stripe connection successful",
      "productsCount": 5
    },
    "notion": {
      "success": true,
      "message": "Notion connection successful",
      "databasesFound": 4,
      "configured": {
        "bookings": true,
        "customers": true,
        "memberships": true
      }
    },
    "make": {
      "success": true,
      "message": "Make.com connection successful"
    },
    "customerio": {
      "success": true,
      "message": "Customer.io connection successful"
    },
    "intercom": {
      "success": true,
      "message": "Intercom App ID configured (widget only)"
    }
  }
}
```

---

## 📚 Integration Libraries

### Notion (`/lib/notion.ts`)

```typescript
import { 
  createBookingRecord, 
  createCustomerRecord, 
  createMembershipRecord,
  getCustomerMembershipStatus 
} from '@/lib/notion'

// Create booking
await createBookingRecord({
  customerName: 'John Doe',
  customerEmail: 'john@example.com',
  service: 'Hair Styling',
  neighborhood: 'Chiado',
  date: '2025-01-20',
  time: '14:00',
  message: 'Optional notes',
  utmSource: 'google',
  utmMedium: 'cpc',
  utmCampaign: 'winter2025'
})

// Check membership status
const status = await getCustomerMembershipStatus('john@example.com')
// Returns: { isMember: true, tier: 'Gold', discount: 0.15 }
```

### Make.com (`/lib/make.ts`)

```typescript
import { 
  sendToMake, 
  sendBookingToMake, 
  sendMembershipToMake 
} from '@/lib/make'

// Send booking to Make.com
await sendBookingToMake({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+351 912 345 678',
  service: 'Hair Styling',
  date: '2025-01-20',
  time: '14:00'
})

// Send membership creation
await sendMembershipToMake({
  email: 'john@example.com',
  membershipType: 'Gold',
  subscriptionId: 'sub_xxxxx',
  customerId: 'cus_xxxxx'
})

// Generic webhook
await sendToMake('custom-scenario', {
  type: 'custom-event',
  data: { ... }
})
```

### Intercom (`/lib/intercom.ts`)

```typescript
import { 
  createIntercomAPI, 
  logBookingToIntercom, 
  updateMembershipInIntercom 
} from '@/lib/intercom'

// Track booking event
await logBookingToIntercom({
  email: 'john@example.com',
  service: 'Hair Styling',
  date: '2025-01-20',
  amount: 105
})

// Update membership
await updateMembershipInIntercom('john@example.com', 'Gold')

// Server-side API
const intercom = createIntercomAPI()
await intercom.createOrUpdateContact({
  email: 'john@example.com',
  name: 'John Doe',
  customAttributes: {
    membership_tier: 'Gold',
    lifetime_value: 450
  }
})
```

### Customer.io (`/lib/customerio.ts`)

```typescript
import { 
  sendBookingConfirmation, 
  sendMembershipWelcome, 
  sendPaymentFailed 
} from '@/lib/customerio'

// Send booking confirmation
await sendBookingConfirmation({
  customerEmail: 'john@example.com',
  customerName: 'John Doe',
  service: 'Hair Styling',
  date: '2025-01-20',
  time: '14:00',
  neighborhood: 'Chiado'
})

// Send membership welcome
await sendMembershipWelcome({
  email: 'john@example.com',
  name: 'John Doe',
  tier: 'Gold'
})

// Track custom event
const client = createCustomerIOClient()
await client.track('john@example.com', 'custom_event', {
  custom_field: 'value'
})
```

### Membership (`/lib/membership.ts`)

```typescript
import { 
  checkMembershipStatus, 
  calculateDiscountedPrice, 
  applyMembershipDiscount 
} from '@/lib/membership'

// Check status
const status = await checkMembershipStatus('john@example.com')
// Returns: { isMember: true, tier: 'Gold', discount: 0.15, benefits: [...] }

// Calculate discount
const pricing = calculateDiscountedPrice(100, status)
// Returns: { original: 100, discount: 0.15, discountAmount: 15, final: 85, savings: 15 }

// Apply discount in one step
const result = await applyMembershipDiscount('john@example.com', 100)
// Returns: { membershipStatus: {...}, pricing: {...} }
```

---

## 🪝 Webhooks

### Stripe Webhook Events

**Endpoint:** `POST /api/stripe/webhook`

**Required Header:** `Stripe-Signature`

**Handled Events:**
- `checkout.session.completed` - Membership purchase completed
- `customer.subscription.created` - New subscription created
- `customer.subscription.updated` - Subscription modified
- `customer.subscription.deleted` - Subscription cancelled
- `invoice.payment_failed` - Payment failed
- `invoice.payment_succeeded` - Payment successful

**Setup in Stripe:**
1. Go to Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://your-domain.com/api/stripe/webhook`
3. Select events listed above
4. Copy webhook signing secret to `STRIPE_WEBHOOK_SECRET`

### Make.com Webhooks

**Format:** `POST https://hook.eu1.make.com/xxxxx/{scenario}`

**Scenarios:**
- `booking-created` - New booking
- `membership-created` - New membership
- `subscription-updated` - Subscription change
- `payment-failed` - Payment failure
- `chat-message` - Chat conversation
- `hotel-inquiry` - Partnership inquiry

**Setup:**
1. Create Make.com scenario
2. Add "Custom webhook" trigger
3. Copy webhook URL
4. Set `MAKE_WEBHOOK_URL` to base URL (without scenario name)

---

## 🧪 Testing

### Local Development

**1. Test Health Check**
```bash
curl http://localhost:3000/api/admin/health
```

**2. Test Booking (Mock Mode)**
```bash
curl -X POST http://localhost:3000/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+351 912 345 678",
    "service": "Hair Styling",
    "date": "2025-01-20",
    "time": "14:00"
  }'
```

**3. Test Coupon Validation**
```bash
curl -X POST http://localhost:3000/api/stripe/validate-coupon \
  -H "Content-Type: application/json" \
  -d '{"code": "WELCOME15"}'
```

**4. Test Integrations (Requires Admin Key)**
```bash
curl -X POST http://localhost:3000/api/admin/test-integrations \
  -H "Content-Type: application/json" \
  -H "x-admin-key: your-secret-key" \
  -d '{"integration": "all"}'
```

### Stripe Testing

**Use Test Cards:**
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- 3D Secure: `4000 0025 0000 3155`

**Test Webhooks Locally:**
```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward webhooks
stripe listen --forward-to localhost:3000/api/stripe/webhook

# Trigger test event
stripe trigger checkout.session.completed
```

### Notion Testing

```typescript
// Test in Node.js or browser console
const { Client } = require('@notionhq/client')
const notion = new Client({ auth: 'your-api-key' })

const response = await notion.databases.query({
  database_id: 'your-database-id',
  page_size: 1
})

console.log(response.results)
```

---

## 🔍 Troubleshooting

### Common Issues

**1. "Stripe is not configured"**
- Check `STRIPE_SECRET_KEY` is set in environment variables
- Verify key starts with `sk_test_` (test) or `sk_live_` (production)
- Redeploy after adding variables

**2. "Notion API key invalid"**
- Verify token starts with `secret_`
- Check databases are shared with integration:
  - Open database in Notion
  - Click "..." → "Connections" → Add integration
- Verify database IDs are correct (32-character strings from URL)

**3. "Webhook signature verification failed"**
- Check `STRIPE_WEBHOOK_SECRET` matches Stripe Dashboard
- Verify webhook endpoint URL is correct
- Test with Stripe CLI locally first

**4. "Make.com webhook not working"**
- Verify `MAKE_WEBHOOK_URL` includes base URL only (not scenario)
- Check scenario is active in Make.com
- Test with manual webhook trigger in Make.com

**5. "Customer.io emails not sending"**
- Check `CUSTOMERIO_SITE_ID` and `CUSTOMERIO_API_KEY` are correct
- Verify customer is identified before tracking events
- Check email campaigns are activated in Customer.io

### Debug Mode

Enable detailed logging:
```bash
NODE_ENV=development
DEBUG=true
```

Check logs in:
- Vercel: Dashboard → Deployments → Functions
- Local: Terminal console
- Stripe: Dashboard → Events
- Make.com: Scenario execution history

---

## 📊 Monitoring

### Key Metrics to Track

**API Endpoints:**
- Booking success rate
- Payment completion rate
- Webhook delivery rate
- API response times

**Integrations:**
- Notion write success rate
- Make.com scenario executions
- Email delivery rate
- Chat widget engagement

### Monitoring Tools

**Vercel Analytics** (Built-in)
- Function invocations
- Error rates
- Performance metrics

**Stripe Dashboard**
- Payment volume
- Failed payments
- Webhook delivery

**Notion** (Manual)
- Database growth
- Data quality checks

---

## 🔒 Security

### Best Practices

1. **Environment Variables**
   - Never commit `.env.local` to Git
   - Use different keys for dev/production
   - Rotate keys regularly

2. **Webhook Security**
   - Always verify Stripe webhook signatures
   - Use `x-admin-key` for admin endpoints
   - Validate all input data

3. **API Rate Limits**
   - Implement rate limiting on public endpoints
   - Use exponential backoff for retries
   - Cache responses where appropriate

4. **Error Handling**
   - Never expose sensitive data in errors
   - Log errors server-side only
   - Return generic messages to clients

---

## 🚀 Deployment Checklist

Before going live:

- [ ] All environment variables set in Vercel (Production)
- [ ] Stripe webhook endpoint created and verified
- [ ] Test membership purchase end-to-end
- [ ] Notion databases created and shared
- [ ] Test booking submission → Notion
- [ ] Make.com scenarios activated
- [ ] Customer.io campaigns activated
- [ ] Health check returns "healthy"
- [ ] Test payment with real card (small amount)
- [ ] Verify all webhooks trigger correctly
- [ ] Test email delivery
- [ ] Check Intercom widget loads

---

## 📖 Additional Resources

- [Stripe API Docs](https://stripe.com/docs/api)
- [Notion API Docs](https://developers.notion.com/)
- [Make.com Docs](https://www.make.com/en/help/modules)
- [Intercom API Docs](https://developers.intercom.com/)
- [Customer.io API Docs](https://customer.io/docs/api/)

---

**Last Updated:** January 11, 2025  
**Version:** 1.0.0

For questions or issues, check the troubleshooting section or review the integration library source code.

