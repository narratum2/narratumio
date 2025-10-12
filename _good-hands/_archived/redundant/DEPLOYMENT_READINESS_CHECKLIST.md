# ✅ Deployment Readiness Checklist - Good Hands

**Use this checklist before deploying to production**

---

## 🎯 Pre-Deployment Checklist

### Phase 1: Account Setup (30 minutes)

#### Stripe
- [ ] Create Stripe account at stripe.com
- [ ] Complete business verification
- [ ] Add bank account (EUR)
- [ ] Enable payment methods (Cards, Apple Pay, Google Pay, SEPA)
- [ ] Create Gold Membership product (€49/month recurring)
- [ ] Create Platinum Membership product (€129/month recurring)
- [ ] Get API keys (test + live)
- [ ] Save keys securely

#### Notion
- [ ] Create Notion account (or use existing)
- [ ] Create workspace: "Good Hands Operations"
- [ ] Create Bookings database (see structure below)
- [ ] Create Customers database (see structure below)
- [ ] Create Memberships database (see structure below)
- [ ] Create Notion integration at notion.so/my-integrations
- [ ] Share all databases with integration
- [ ] Copy integration token
- [ ] Copy all database IDs (from URLs)

#### Make.com (Optional but Recommended)
- [ ] Sign up at make.com (free tier is fine)
- [ ] Create "New Booking" scenario (see MAKE_SETUP_GUIDE.md)
- [ ] Create webhook trigger
- [ ] Copy webhook URL
- [ ] Activate scenario

#### Customer.io (Optional but Recommended)
- [ ] Sign up at customer.io (free tier available)
- [ ] Get Site ID and API Key from settings
- [ ] Create email campaign for "booking_created"
- [ ] Create email campaign for "membership_created"
- [ ] Activate campaigns

#### Intercom (Optional)
- [ ] Sign up at intercom.com (free trial available)
- [ ] Get App ID from Settings → Installation
- [ ] (Optional) Get API Key for server-side features
- [ ] Configure chat widget appearance

---

### Phase 2: Environment Variables (10 minutes)

#### Add to Vercel
- [ ] Go to vercel.com/dashboard
- [ ] Select "good-hands" project
- [ ] Settings → Environment Variables
- [ ] Add each variable below
- [ ] Select: Production, Preview, Development

#### Critical Variables
```bash
STRIPE_SECRET_KEY=sk_live_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
NOTION_API_KEY=secret_xxxxx
NOTION_BOOKINGS_DB_ID=xxxxx
NOTION_CUSTOMERS_DB_ID=xxxxx
NOTION_MEMBERSHIPS_DB_ID=xxxxx
```

#### Recommended Variables
```bash
MAKE_WEBHOOK_URL=https://hook.eu1.make.com/xxxxx
CUSTOMERIO_SITE_ID=xxxxx
CUSTOMERIO_API_KEY=xxxxx
NEXT_PUBLIC_INTERCOM_APP_ID=xxxxx
```

#### Optional Variables
```bash
ADMIN_API_KEY=your-secure-random-string
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

---

### Phase 3: Stripe Configuration (15 minutes)

#### Webhook Setup
- [ ] Stripe Dashboard → Developers → Webhooks
- [ ] Click "Add endpoint"
- [ ] URL: `https://your-domain.vercel.app/api/stripe/webhook`
- [ ] Select these events:
  - [ ] `checkout.session.completed`
  - [ ] `customer.subscription.created`
  - [ ] `customer.subscription.updated`
  - [ ] `customer.subscription.deleted`
  - [ ] `invoice.payment_failed`
  - [ ] `invoice.payment_succeeded`
- [ ] Click "Add endpoint"
- [ ] Copy signing secret
- [ ] Add to Vercel as `STRIPE_WEBHOOK_SECRET`

#### Create Membership Products
- [ ] Dashboard → Products → Add product
- [ ] Name: "Gold Membership"
- [ ] Price: €49/month (recurring)
- [ ] Copy Price ID → `STRIPE_GOLD_PRICE_ID`
- [ ] Create "Platinum Membership"
- [ ] Price: €129/month (recurring)
- [ ] Copy Price ID → `STRIPE_PLATINUM_PRICE_ID`

#### Enable Customer Portal
- [ ] Dashboard → Settings → Billing → Customer portal
- [ ] Configure portal settings
- [ ] Enable customer self-service

---

### Phase 4: Notion Database Setup (30 minutes)

#### Bookings Database Schema
```
Properties:
- Customer Name (Title)
- Customer Email (Email)
- Service (Select: Hair Styling, Spa, Makeup, Nails, Wellness)
- Neighborhood (Select: Chiado, Príncipe Real, Alfama, Baixa, Belém, Avenida, Cascais, Sintra)
- Date (Date)
- Status (Select: Pending, Confirmed, Completed, Cancelled)
- Notes (Text)
- UTM Source (Text)
- UTM Medium (Text)
- UTM Campaign (Text)
- Created Date (Date)
```

#### Customers Database Schema
```
Properties:
- Name (Title)
- Email (Email)
- Phone (Phone)
- Source (Text)
- Membership Tier (Select: None, Gold, Platinum)
- Status (Select: New, Active, Inactive)
- Last Booking Date (Date)
- Created Date (Date)
- UTM Source (Text)
- UTM Campaign (Text)
```

#### Memberships Database Schema
```
Properties:
- Customer Email (Email)
- Membership Type (Select: Gold, Platinum)
- Stripe Subscription ID (Text)
- Stripe Customer ID (Text)
- Status (Select: Active, Cancelled, Past Due)
- Monthly Price (Number)
- Start Date (Date)
```

---

### Phase 5: Testing (20 minutes)

#### Health Check
```bash
curl https://your-domain.vercel.app/api/admin/health
```
- [ ] Returns `"status": "healthy"`
- [ ] All integrations show as "configured"

#### Integration Tests (if admin key configured)
```bash
curl -X POST https://your-domain.vercel.app/api/admin/test-integrations \
  -H "x-admin-key: your-key" \
  -d '{"integration": "all"}'
```
- [ ] Stripe test passes
- [ ] Notion test passes
- [ ] Make.com test passes (if configured)
- [ ] Customer.io test passes (if configured)

#### Booking Test
```bash
curl -X POST https://your-domain.vercel.app/api/bookings \
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
- [ ] Returns success response
- [ ] Entry appears in Notion Bookings
- [ ] Entry appears in Notion Customers
- [ ] Email sent (if Customer.io configured)
- [ ] Make.com scenario executes (if configured)

#### Membership Purchase Test
- [ ] Go to `/premium/membership`
- [ ] Click "Choose Gold"
- [ ] Use test card: `4242 4242 4242 4242`
- [ ] Complete checkout
- [ ] Redirects to success page
- [ ] Entry appears in Notion Memberships
- [ ] Welcome email sent (if Customer.io configured)
- [ ] Webhook shows in Stripe Dashboard

#### Coupon Validation Test
```bash
curl -X POST https://your-domain.vercel.app/api/stripe/validate-coupon \
  -H "Content-Type: application/json" \
  -d '{"code": "WELCOME15"}'
```
- [ ] Returns coupon details (if coupon exists)
- [ ] Or returns error if coupon doesn't exist

---

### Phase 6: Make.com Scenarios (45 minutes - Optional)

Follow MAKE_SETUP_GUIDE.md to create:
- [ ] Scenario 1: New Booking Flow
- [ ] Scenario 2: Membership Created
- [ ] Scenario 3: Payment Failed
- [ ] Scenario 4: Subscription Updated
- [ ] Scenario 5: Chat Message Logging

For each scenario:
- [ ] Created and configured
- [ ] Tested with sample data
- [ ] Activated (toggled "On")
- [ ] Execution history shows success

---

### Phase 7: Content & Design QA (30 minutes)

#### Content Review
- [ ] All service descriptions accurate
- [ ] Pricing correct (€49 Gold, €129 Platinum)
- [ ] Neighborhood information correct
- [ ] Blog articles proofread
- [ ] SEO metadata complete
- [ ] Legal pages reviewed (privacy, terms, cookies)

#### Design Review
- [ ] Site loads on desktop
- [ ] Site loads on mobile
- [ ] All images load properly
- [ ] No broken links
- [ ] Forms work correctly
- [ ] CTAs clearly visible
- [ ] Chat widget appears (if Intercom configured)

#### Browser Testing
- [ ] Chrome (desktop + mobile)
- [ ] Safari (desktop + mobile)
- [ ] Firefox
- [ ] Edge

---

### Phase 8: Analytics & Monitoring (15 minutes)

#### Google Analytics (Optional)
- [ ] Create GA4 property
- [ ] Get Measurement ID
- [ ] Add to `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- [ ] Verify tracking works

#### Google Search Console
- [ ] Add property at search.google.com/search-console
- [ ] Verify ownership
- [ ] Submit sitemap: `https://your-domain.com/sitemap.xml`

#### Monitoring Setup
- [ ] Vercel deployment notifications enabled
- [ ] Stripe webhook delivery monitoring
- [ ] Make.com execution alerts (if configured)
- [ ] Error logging reviewed

---

### Phase 9: Security Review (10 minutes)

#### Access Control
- [ ] Admin API key set (random, secure)
- [ ] Stripe webhook secret configured
- [ ] All API keys stored in Vercel (not in code)
- [ ] .env.local not committed to Git
- [ ] Different keys for dev vs production

#### SSL & Domain
- [ ] Custom domain configured
- [ ] SSL certificate active (automatic with Vercel)
- [ ] www redirects properly
- [ ] HTTPS enforced

#### API Security
- [ ] Rate limiting considered (future enhancement)
- [ ] CORS configured properly
- [ ] No sensitive data in client-side code
- [ ] Error messages don't expose internals

---

### Phase 10: Launch Preparation (Variable Time)

#### Documentation
- [ ] README.md updated with deployment info
- [ ] Team trained on Notion CRM
- [ ] Make.com scenarios documented
- [ ] Runbook created for common issues

#### Business Readiness
- [ ] Professional network ready (beauty professionals onboarded)
- [ ] Pricing finalized and approved
- [ ] Service areas confirmed
- [ ] Customer service process defined
- [ ] Booking management workflow established

#### Marketing Readiness
- [ ] Social media accounts set up
- [ ] Email marketing ready
- [ ] Launch announcement prepared
- [ ] Press kit available (if applicable)

---

## 🚀 Go Live Checklist

### Final Pre-Launch (Day Before)

- [ ] All tests passed
- [ ] All integrations working
- [ ] Team briefed and ready
- [ ] Monitoring in place
- [ ] Backup plan defined
- [ ] Customer support ready
- [ ] Payment processing tested with real (small) transaction
- [ ] DNS configured correctly
- [ ] SSL certificate verified

### Launch Day

- [ ] Final smoke test of all features
- [ ] Monitor Vercel deployment logs
- [ ] Monitor Stripe Dashboard
- [ ] Monitor Notion for incoming bookings
- [ ] Watch for any errors
- [ ] Have rollback plan ready

### Post-Launch (First 24 Hours)

- [ ] Monitor error rates
- [ ] Check webhook delivery success rate
- [ ] Review first bookings/memberships
- [ ] Verify email delivery
- [ ] Check analytics tracking
- [ ] Test customer support flow
- [ ] Monitor social media mentions
- [ ] Be ready to respond quickly to issues

---

## 🆘 Rollback Plan

If critical issues arise:

1. **Immediate Actions:**
   - [ ] Add maintenance page if needed
   - [ ] Pause Stripe webhooks if payment issues
   - [ ] Disable problematic features via feature flags

2. **Investigation:**
   - [ ] Check Vercel function logs
   - [ ] Review Stripe webhook events
   - [ ] Check Make.com execution history
   - [ ] Review browser console errors

3. **Fix or Rollback:**
   - [ ] Fix critical bugs immediately
   - [ ] Or rollback to previous deployment in Vercel
   - [ ] Communicate status to team and customers

---

## 📊 Success Metrics (Track After Launch)

### Week 1
- [ ] Zero critical bugs
- [ ] 100% webhook delivery rate
- [ ] >90% payment success rate
- [ ] First 5-10 bookings received
- [ ] 1-2 memberships sold

### Month 1
- [ ] 50+ bookings processed
- [ ] 5-10 active memberships
- [ ] <5 customer support issues
- [ ] Site uptime >99.9%
- [ ] Average load time <3s

---

## 📝 Notes Section

**Deployment Date:** _______________

**Deployed By:** _______________

**Issues Encountered:**
- 

**Resolutions:**
- 

**Post-Launch Improvements Needed:**
- 

---

**Last Updated:** January 11, 2025  
**Version:** 1.0

**For questions, see:**
- `QUICK_START_INTEGRATIONS.md` - Quick setup
- `API_INTEGRATION_GUIDE.md` - Technical details
- `MAKE_SETUP_GUIDE.md` - Automation setup

