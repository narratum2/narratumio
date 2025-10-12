# 🚀 Good Hands - Complete Setup Instructions

This guide walks you through setting up all integrations for the Good Hands platform.

---

## 📋 Prerequisites

Before you begin, gather these credentials:

- [ ] Vercel account (deployment)
- [ ] Supabase account (database)
- [ ] Stripe account (payments)
- [ ] n8n instance (automation) - optional but recommended
- [ ] PostHog account (analytics) - optional
- [ ] Semrush Enterprise AIO (AI SEO tracking) - optional but recommended
- [ ] Surfer SEO (content optimization) - optional but recommended

---

## 1️⃣ Vercel Deployment (Already Done! ✅)

Your site is deployed at: **[your-vercel-url].vercel.app**

### Custom Domain (Optional)
1. Go to Vercel dashboard → Your project → Settings → Domains
2. Add your custom domain (e.g., `goodhands.com`)
3. Follow DNS configuration instructions

### Environment Variables
Add these in Vercel dashboard → Settings → Environment Variables:

```bash
# Required
NEXT_PUBLIC_BASE_URL=https://your-domain.com

# Supabase (when you set it up)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe (when you set it up)
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Notion (optional)
NOTION_API_KEY=secret_...
NOTION_BOOKINGS_DATABASE_ID=...
NOTION_CUSTOMERS_DATABASE_ID=...
NOTION_MEMBERSHIPS_DATABASE_ID=...

# PostHog (optional)
NEXT_PUBLIC_POSTHOG_KEY=phc_...
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Anthropic Claude (for content generation)
ANTHROPIC_API_KEY=sk-ant-...
```

---

## 2️⃣ Supabase Database Setup

### Step 1: Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Name: `good-hands-production`
4. Set a strong database password
5. Select region: Europe (West) for Lisbon proximity

### Step 2: Run Database Schema
1. In Supabase dashboard, go to SQL Editor
2. Copy contents from `/lib/supabase.ts` → `DATABASE_SETUP_SQL`
3. Paste and execute the SQL

### Step 3: Get API Keys
1. Go to Settings → API
2. Copy `Project URL` → Add to Vercel as `NEXT_PUBLIC_SUPABASE_URL`
3. Copy `anon public` key → Add to Vercel as `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Step 4: Test Connection
```bash
# In your local terminal
npm run dev

# Try the booking API
curl -X POST http://localhost:3000/api/bookings-supabase \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+351 912 345 678",
    "service": "Premium Hair Styling",
    "date": "2025-10-20",
    "time": "14:00"
  }'
```

---

## 3️⃣ Stripe Payment Setup

### Step 1: Create Stripe Account
1. Go to [stripe.com](https://stripe.com)
2. Sign up for account
3. Complete business verification

### Step 2: Create Products
1. In Stripe dashboard, go to Products
2. Create two products:
   - **Gold Membership**: €49/month recurring
   - **Platinum Membership**: €99/month recurring
3. Copy the Price IDs (e.g., `price_1234...`)

### Step 3: Get API Keys
1. Go to Developers → API keys
2. Copy `Secret key` → Add to Vercel as `STRIPE_SECRET_KEY`
3. Copy `Publishable key` → Add to Vercel as `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

### Step 4: Set Up Webhooks
1. Go to Developers → Webhooks
2. Add endpoint: `https://your-domain.com/api/stripe/webhook`
3. Select events:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
4. Copy webhook signing secret → Add to Vercel as `STRIPE_WEBHOOK_SECRET`

### Step 5: Update Membership Page
In `/app/premium/membership/page.tsx`, replace placeholder price IDs:

```typescript
<SubscribeButton 
  priceId="price_YOUR_GOLD_PRICE_ID" 
  tier="gold" 
  price="€49" 
/>

<SubscribeButton 
  priceId="price_YOUR_PLATINUM_PRICE_ID" 
  tier="platinum" 
  price="€99" 
/>
```

---

## 4️⃣ n8n Automation Setup (Optional but Recommended)

### Option 1: Self-Hosted (FREE)
```bash
# Install n8n globally
npm install -g n8n

# Start n8n
n8n start

# Access at http://localhost:5678
```

### Option 2: Cloud ($20/month)
1. Go to [n8n.io/cloud](https://n8n.io/cloud)
2. Sign up for cloud account
3. Create workspace

### Step 3: Import Workflows
1. In n8n, click "Import from File"
2. Use workflow templates from `N8N_WORKFLOWS.md`
3. Configure credentials for each node:
   - Supabase
   - Stripe
   - Email (SMTP)
   - Slack (if using)

### Step 4: Set Up Webhooks
1. In each workflow, activate the webhook
2. Copy webhook URLs
3. Configure triggers:
   - Supabase: Database webhooks
   - Stripe: Webhook events (already done in Step 3)
   - Website: Booking form submissions

---

## 5️⃣ PostHog Analytics (Optional)

### Step 1: Create PostHog Account
1. Go to [posthog.com](https://posthog.com)
2. Sign up (free tier available)
3. Create project: `Good Hands Production`

### Step 2: Get API Keys
1. Go to Project Settings
2. Copy `Project API Key` → Add to Vercel as `NEXT_PUBLIC_POSTHOG_KEY`
3. Host is `https://app.posthog.com`

### Step 3: Verify Tracking
1. Deploy to Vercel with new env vars
2. Visit your site
3. Check PostHog dashboard for events:
   - `page_view`
   - `ai_discovery` (if AI agent detected)
   - `booking_submitted`
   - `search`

---

## 6️⃣ AI SEO Tools Setup (Recommended)

### Semrush Enterprise AIO ($499/month)

**What it does:** Tracks your brand visibility in ChatGPT, Perplexity, Claude, Gemini

1. Go to [semrush.com/enterprise-aio](https://www.semrush.com)
2. Sign up for trial or subscription
3. Add your domain
4. Enable "AI Brand Monitoring"
5. Set up alerts for brand mentions
6. Review weekly reports

**Expected Results:**
- Track how often "Good Hands" appears in AI responses
- Monitor competitor AI visibility
- Get recommendations to improve AI discoverability

### Surfer SEO ($129/month)

**What it does:** Real-time content optimization for search and AI

1. Go to [surferseo.com](https://surferseo.com)
2. Sign up for account
3. Install Chrome extension
4. Connect your domain

**How to use:**
1. For existing pages: Run "Audit" to get optimization recommendations
2. For new content: Use "Content Editor" while writing
3. Optimize all blog articles for target keywords
4. Track improvements in SERP Analyzer

**Priority pages to optimize:**
- Homepage
- Services page
- All neighborhood pages
- Top 5 blog articles

---

## 7️⃣ Google Analytics 4 (Free)

### Step 1: Create GA4 Property
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create account: `Good Hands`
3. Create property: `Good Hands Website`
4. Select timezone: Europe/Lisbon

### Step 2: Get Measurement ID
1. Go to Admin → Data Streams
2. Click "Add stream" → Web
3. Enter your domain
4. Copy `Measurement ID` (G-XXXXXXXXXX)

### Step 3: Add to Website
In `/app/layout.tsx`, add to `<head>`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Step 4: Track Custom Events
Custom events are already set up in `/lib/analytics.ts`:
- Bookings
- Searches
- AI agent visits
- API calls

---

## 8️⃣ Testing Checklist

Once everything is set up, test these flows:

### Booking Flow
- [ ] Fill out booking form
- [ ] Submit successfully
- [ ] Check Supabase for new booking record
- [ ] Check n8n for workflow execution
- [ ] Verify email confirmation sent (if configured)
- [ ] Check PostHog for `booking_submitted` event

### Membership Flow
- [ ] Click "Choose Gold" button
- [ ] Redirected to Stripe checkout
- [ ] Complete test payment (use Stripe test cards)
- [ ] Verify webhook received
- [ ] Check Supabase for membership record
- [ ] Verify email sent (if configured)

### Search Flow
- [ ] Use search bar on homepage
- [ ] Verify navigation to services page with filters
- [ ] Check PostHog for `search` event

### API Endpoints
- [ ] Visit `/api/services` - should return JSON
- [ ] Visit `/api/neighborhoods` - should return JSON
- [ ] Visit `/api-docs` - should load documentation page

### AI Discovery
- [ ] Check browser console for AI agent detection
- [ ] Verify `/robots.txt` is accessible
- [ ] Verify `/api/openapi.json` is accessible
- [ ] Check PostHog for any `ai_discovery` events

---

## 9️⃣ Go Live Checklist

Before announcing your launch:

- [ ] Custom domain configured
- [ ] SSL certificate active (automatic with Vercel)
- [ ] All environment variables set in production
- [ ] Supabase production database configured
- [ ] Stripe live mode enabled (not test mode)
- [ ] n8n workflows active
- [ ] Analytics tracking verified
- [ ] All forms tested end-to-end
- [ ] Mobile responsive design verified
- [ ] Page speed optimized (check with PageSpeed Insights)
- [ ] Legal pages complete (Privacy, Terms, Cookies)
- [ ] Contact email active and monitored
- [ ] Social media links work
- [ ] All images loading properly
- [ ] No console errors in browser

---

## 🆘 Troubleshooting

### Bookings Not Saving
- Check Supabase credentials in Vercel env vars
- Verify database tables exist
- Check Supabase logs for errors
- Test API endpoint directly with curl

### Stripe Checkout Not Working
- Verify price IDs are correct
- Check Stripe API keys are in live mode
- Confirm webhook endpoint is reachable
- Check Stripe dashboard for errors

### n8n Workflows Not Triggering
- Verify webhooks are active
- Check webhook URLs are correct
- Test individual nodes in n8n
- Check execution logs for errors

### Analytics Not Tracking
- Verify PostHog API key is correct
- Check browser console for errors
- Disable ad blockers for testing
- Wait 5-10 minutes for data to appear

---

## 📞 Support

If you need help:

1. **Check documentation files:**
   - `AI_SEO_TOOLS_INTEGRATION.md`
   - `N8N_WORKFLOWS.md`
   - `NOTION_SETUP_INSTRUCTIONS.md`
   - `ULTIMATE_AI_OPTIMIZED_STACK.md`

2. **Contact support:**
   - Email: hello@goodhands.com
   - Or ask me (your AI assistant) - I'm here to help!

---

**Last updated:** October 11, 2025  
**Next review:** Check monthly for new tools and optimizations

