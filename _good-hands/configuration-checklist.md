# Configuration Completion Checklist

**Print this and check off as you go!**

---

## Phase 1: Account Creation

### Stripe
- [ ] Account created at stripe.com
- [ ] Business verification completed
- [ ] Bank account added (EUR)
- [ ] Payment methods enabled (Cards, Apple Pay, Google Pay, SEPA)

### Notion  
- [ ] Account created/logged in at notion.so
- [ ] Workspace created: "Good Hands Operations"

### Make.com
- [ ] Account created at make.com
- [ ] Free tier activated

### Customer.io
- [ ] Account created at customer.io
- [ ] Free tier activated

### Intercom (Optional)
- [ ] Account created at intercom.com
- [ ] Free trial or plan selected

---

## Phase 2: Stripe Configuration

### Products
- [ ] Gold Membership created (€49/month recurring)
- [ ] Gold Price ID copied: `____________________`
- [ ] Platinum Membership created (€129/month recurring)
- [ ] Platinum Price ID copied: `____________________`

### Webhook
- [ ] Webhook endpoint created
- [ ] URL set to: `https://your-domain.vercel.app/api/stripe/webhook`
- [ ] 6 events selected (see stripe-webhook-events.md)
- [ ] Webhook signing secret copied: `whsec____________________`

### API Keys
- [ ] Secret key copied: `sk____________________`
- [ ] Publishable key copied: `pk____________________`

### Customer Portal
- [ ] Customer portal enabled
- [ ] Self-service options configured

---

## Phase 3: Notion Configuration

### Databases Created
- [ ] Bookings database created
- [ ] Customers database created
- [ ] Memberships database created
- [ ] Conversations database created (optional)

### Properties Added
- [ ] Bookings: 11 properties (see notion-database-schemas.md)
- [ ] Customers: 10 properties
- [ ] Memberships: 7 properties

### Integration
- [ ] Integration created at notion.so/my-integrations
- [ ] Named: "Good Hands Website"
- [ ] Token copied: `secret____________________`

### Sharing
- [ ] Bookings database shared with integration
- [ ] Customers database shared with integration
- [ ] Memberships database shared with integration

### Database IDs
- [ ] Bookings ID copied: `____________________` (32 chars)
- [ ] Customers ID copied: `____________________` (32 chars)
- [ ] Memberships ID copied: `____________________` (32 chars)

---

## Phase 4: Make.com Configuration

### Basic Setup
- [ ] "New Booking" scenario created
- [ ] Webhook trigger added
- [ ] Webhook URL copied: `https://hook.eu1.make.com/____________________`
- [ ] Scenario activated

### Advanced (Optional)
- [ ] "Membership Created" scenario
- [ ] "Payment Failed" scenario
- [ ] "Subscription Updated" scenario
- [ ] All scenarios activated

---

## Phase 5: Customer.io Configuration

### API Credentials
- [ ] Site ID copied: `____________________`
- [ ] API Key copied: `____________________`

### Email Campaigns (Optional but recommended)
- [ ] "booking_created" campaign created
- [ ] "membership_created" campaign created
- [ ] "booking_reminder_24h" campaign created
- [ ] "review_request" campaign created
- [ ] Campaigns activated

---

## Phase 6: Intercom Configuration (Optional)

### Basic Setup
- [ ] App ID copied: `____________________`
- [ ] Widget appearance configured

### Advanced (Optional)
- [ ] API Key copied for server-side: `____________________`
- [ ] Admin ID copied: `____________________`

---

## Phase 7: Vercel Configuration

### Environment Variables Added
**Stripe (5 variables):**
- [ ] STRIPE_SECRET_KEY
- [ ] NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- [ ] STRIPE_WEBHOOK_SECRET
- [ ] STRIPE_GOLD_PRICE_ID
- [ ] STRIPE_PLATINUM_PRICE_ID

**Notion (4 variables):**
- [ ] NOTION_API_KEY
- [ ] NOTION_BOOKINGS_DB_ID
- [ ] NOTION_CUSTOMERS_DB_ID
- [ ] NOTION_MEMBERSHIPS_DB_ID

**Make.com (1 variable):**
- [ ] MAKE_WEBHOOK_URL

**Customer.io (2 variables):**
- [ ] CUSTOMERIO_SITE_ID
- [ ] CUSTOMERIO_API_KEY

**Intercom (1 variable):**
- [ ] NEXT_PUBLIC_INTERCOM_APP_ID

**Admin (1 variable):**
- [ ] ADMIN_API_KEY (generated random string)

### Deployment
- [ ] All variables selected for: Production, Preview, Development
- [ ] Site redeployed after adding variables
- [ ] Deployment successful (no errors)

---

## Phase 8: Testing

### Health Check
- [ ] `/api/admin/health` returns "healthy"
- [ ] Stripe shows as "configured"
- [ ] Notion shows as "configured"
- [ ] Make.com shows as "configured" (if set up)
- [ ] Customer.io shows as "configured" (if set up)

### Booking Test
- [ ] Test booking submitted
- [ ] Success response received
- [ ] Entry appears in Notion Bookings
- [ ] Entry appears in Notion Customers
- [ ] Email sent (if Customer.io configured)
- [ ] Make.com scenario executed (if configured)

### Membership Test
- [ ] Visited `/premium/membership` page
- [ ] Clicked "Choose Gold"
- [ ] Used test card `4242 4242 4242 4242`
- [ ] Checkout completed successfully
- [ ] Redirected to success page
- [ ] Entry appears in Notion Memberships
- [ ] Entry appears in Stripe Customers
- [ ] Welcome email sent (if Customer.io configured)
- [ ] Webhook event shows in Stripe Dashboard

### Webhook Test
- [ ] Test webhook sent from Stripe Dashboard
- [ ] Webhook delivery successful (2xx status)
- [ ] Event logged in Vercel function logs
- [ ] Notion updated correctly

### Coupon Test (if created)
- [ ] Test coupon created in Stripe
- [ ] Coupon validated via API
- [ ] Discount applied correctly

---

## Phase 9: Browser Testing

### Desktop
- [ ] Chrome - site loads, forms work
- [ ] Safari - site loads, forms work
- [ ] Firefox - site loads, forms work

### Mobile
- [ ] iPhone Safari - site loads, forms work
- [ ] Android Chrome - site loads, forms work

### Features
- [ ] Navigation works on all devices
- [ ] Booking form submits
- [ ] Membership page loads
- [ ] Search function works
- [ ] Chat widget appears (if Intercom configured)

---

## Phase 10: Final Verification

### Documentation
- [ ] All passwords/keys stored securely
- [ ] Team briefed on Notion CRM
- [ ] Support process documented

### Business
- [ ] Beauty professionals ready
- [ ] Pricing confirmed
- [ ] Service areas confirmed
- [ ] Customer service process ready

### Monitoring
- [ ] Vercel deployment notifications on
- [ ] Stripe webhook monitoring set up
- [ ] Error logging reviewed

### Launch Readiness
- [ ] All critical tests passed
- [ ] No blockers identified
- [ ] Rollback plan ready
- [ ] Team ready to support

---

## Completion Summary

**Total Checkboxes:** ~130+

**Completed:** _____ / 130+

**Status:** 
- [ ] Not Started
- [ ] In Progress
- [ ] Configuration Complete
- [ ] Testing Complete
- [ ] ✅ READY TO LAUNCH!

---

## Notes

**Issues Encountered:**
```
(Write any problems you faced)
```

**Solutions:**
```
(Write how you resolved them)
```

**Time Taken:**
```
Phase 1: _____ minutes
Phase 2: _____ minutes
Phase 3: _____ minutes
Phase 4: _____ minutes
Phase 5: _____ minutes
Phase 6: _____ minutes
Phase 7: _____ minutes
Phase 8: _____ minutes
Total: _____ minutes
```

---

**Completed By:** _______________  
**Date:** _______________  
**Ready for Launch:** [ ] Yes [ ] No

