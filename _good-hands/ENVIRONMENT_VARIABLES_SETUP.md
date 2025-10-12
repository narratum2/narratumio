# 🔐 Environment Variables Setup Guide

**Last Updated:** January 11, 2025

This guide shows you exactly which environment variables you need and how to set them up.

---

## 📋 QUICK START CHECKLIST

### Priority 1: Essential (Required for Production)
- [ ] `STRIPE_SECRET_KEY` - Payment processing
- [ ] `STRIPE_WEBHOOK_SECRET` - Subscription events
- [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Frontend checkout

### Priority 2: Highly Recommended
- [ ] `NOTION_API_KEY` - CRM functionality
- [ ] `NOTION_BOOKINGS_DB_ID` - Booking tracking
- [ ] `NOTION_CUSTOMERS_DB_ID` - Customer management
- [ ] `NOTION_MEMBERSHIPS_DB_ID` - Membership tracking

### Priority 3: Nice to Have
- [ ] `NEXT_PUBLIC_INTERCOM_APP_ID` - Live chat
- [ ] `CUSTOMERIO_API_KEY` - Email automation
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Analytics

---

## 🔑 ENVIRONMENT VARIABLES LIST

### **STRIPE (Payment Processing)**

```bash
# Secret Key (Backend)
STRIPE_SECRET_KEY=sk_test_51xxxxx (test) or sk_live_51xxxxx (production)

# Publishable Key (Frontend)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx (test) or pk_live_xxxxx (production)

# Webhook Secret (for subscription events)
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# Optional: Product Price IDs
STRIPE_GOLD_PRICE_ID=price_xxxxx
STRIPE_PLATINUM_PRICE_ID=price_xxxxx
```

**Where to get these:**
1. Go to https://dashboard.stripe.com
2. Sign up or log in
3. Click "Developers" in top right
4. Click "API keys" in left sidebar
5. Copy "Secret key" and "Publishable key"
6. For webhook secret:
   - Click "Webhooks" in left sidebar
   - Click "Add endpoint"
   - URL: `https://your-domain.vercel.app/api/stripe/webhook`
   - Events: Select all `checkout.*` and `customer.subscription.*` events
   - Copy "Signing secret"

---

### **NOTION (CRM & Database)**

```bash
# API Token
NOTION_API_KEY=secret_xxxxx

# Database IDs
NOTION_CUSTOMERS_DB_ID=xxxxx
NOTION_BOOKINGS_DB_ID=xxxxx
NOTION_MEMBERSHIPS_DB_ID=xxxxx
NOTION_CONVERSATIONS_DB_ID=xxxxx
NOTION_PROFESSIONALS_DB_ID=xxxxx
NOTION_HOTEL_PARTNERS_DB_ID=xxxxx
```

**Where to get these:**
1. Go to https://notion.so/my-integrations
2. Click "+ New integration"
3. Name it "Good Hands Website"
4. Select your workspace
5. Click "Submit"
6. Copy the "Internal Integration Token" (starts with `secret_`)
7. For database IDs:
   - Open each database in Notion
   - Copy the ID from the URL
   - URL format: `notion.so/workspace/<DATABASE_ID>?v=...`
   - The database ID is the 32-character string

**Setup Instructions:**
See `CRM_MEMBERSHIP_INTEGRATION_GUIDE.md` for complete database setup

---

### **INTERCOM (Live Chat)**

```bash
NEXT_PUBLIC_INTERCOM_APP_ID=xxxxx
```

**Where to get this:**
1. Go to https://app.intercom.com
2. Sign up for account (Starter plan $74/month)
3. Go to Settings → Installation
4. Copy your App ID

---

### **CUSTOMER.IO (Email Automation)**

```bash
CUSTOMERIO_API_KEY=xxxxx
CUSTOMERIO_SITE_ID=xxxxx
```

**Where to get these:**
1. Go to https://customer.io
2. Sign up (free tier available)
3. Go to Account Settings → API Credentials
4. Copy "Site ID" and "API Key"

---

### **GOOGLE ANALYTICS**

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Where to get this:**
1. Go to https://analytics.google.com
2. Create new property
3. Set up data stream
4. Copy Measurement ID (starts with G-)

---

### **GENERAL SETTINGS**

```bash
# Your production domain
NEXT_PUBLIC_BASE_URL=https://goodhands.com

# Node environment
NODE_ENV=production
```

---

## 🚀 HOW TO ADD TO VERCEL

### **Option 1: Vercel Dashboard (Recommended)**

1. Go to https://vercel.com/dashboard
2. Select your "good-hands-lisbon" project
3. Click "Settings" tab
4. Click "Environment Variables" in left sidebar
5. For each variable:
   - Enter "Key" (e.g., `STRIPE_SECRET_KEY`)
   - Enter "Value" (your actual key)
   - Select environments: Production, Preview, Development
   - Click "Add"
6. After adding all variables, redeploy:
   - Go to "Deployments" tab
   - Click "..." on latest deployment
   - Click "Redeploy"

### **Option 2: Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Add variables
vercel env add STRIPE_SECRET_KEY
# Paste your key when prompted

# Pull to local .env.local
vercel env pull .env.local
```

---

## 💻 LOCAL DEVELOPMENT

### **Step 1: Create .env.local file**

```bash
# In your project root (_good-hands folder)
touch .env.local
```

### **Step 2: Add variables**

Open `.env.local` and paste:

```bash
# === STRIPE ===
STRIPE_SECRET_KEY=sk_test_your_test_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_test_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# === NOTION ===
NOTION_API_KEY=secret_your_integration_token
NOTION_CUSTOMERS_DB_ID=your_database_id
NOTION_BOOKINGS_DB_ID=your_database_id
NOTION_MEMBERSHIPS_DB_ID=your_database_id

# === OTHER ===
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NODE_ENV=development
```

### **Step 3: Restart dev server**

```bash
npm run dev
```

**Important:** Never commit `.env.local` to Git! It's already in `.gitignore`

---

## 🧪 TESTING YOUR SETUP

### **Test Stripe Integration:**

```javascript
// Check in browser console on any page
console.log('Stripe Key:', process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
// Should show your publishable key (pk_test_... or pk_live_...)
```

Try to purchase a membership:
1. Go to `/premium/membership`
2. Click "Choose Gold" or "Choose Platinum"
3. Should redirect to Stripe Checkout
4. Use test card: `4242 4242 4242 4242`, any future date, any CVC

### **Test Notion Integration:**

Submit a booking:
1. Go to homepage
2. Scroll to booking form
3. Fill out and submit
4. Check Notion workspace
5. Should see new entry in Bookings database

### **Test Webhooks (Stripe):**

Use Stripe CLI for local testing:

```bash
# Install Stripe CLI
# https://stripe.com/docs/stripe-cli

# Login
stripe login

# Forward webhooks to local
stripe listen --forward-to localhost:3000/api/stripe/webhook

# In another terminal, trigger test event
stripe trigger checkout.session.completed
```

---

## 🔒 SECURITY BEST PRACTICES

### **DO:**
- ✅ Use test keys in development
- ✅ Use live keys only in production
- ✅ Keep secret keys in environment variables only
- ✅ Add all keys to Vercel environment variables
- ✅ Use different Notion workspaces for dev/prod (if needed)

### **DON'T:**
- ❌ Never commit .env.local to Git
- ❌ Never share secret keys publicly
- ❌ Never use live keys in development
- ❌ Never hardcode keys in source code
- ❌ Never expose secret keys in frontend code

---

## 🆘 TROUBLESHOOTING

### **"Stripe is not configured" error**

**Problem:** `STRIPE_SECRET_KEY` not found

**Solution:**
1. Check Vercel environment variables
2. Verify variable name is exactly `STRIPE_SECRET_KEY`
3. Redeploy after adding variables
4. For local: check `.env.local` exists and has the key

### **"Notion API key invalid" error**

**Problem:** Notion integration token is wrong or databases not shared

**Solution:**
1. Verify token starts with `secret_`
2. In Notion, open each database
3. Click "..." → "Connections" → Add your integration
4. Copy database IDs again (32-character strings)

### **Webhooks not working**

**Problem:** Stripe webhook secret is wrong or webhook not created

**Solution:**
1. In Stripe Dashboard → Webhooks
2. Verify endpoint URL matches your domain
3. Copy the "Signing secret" exactly
4. Add to `STRIPE_WEBHOOK_SECRET`
5. Test with Stripe CLI locally first

### **Environment variables not updating**

**Problem:** Changes not reflected after deployment

**Solution:**
1. After changing variables in Vercel, MUST redeploy
2. Go to Deployments → Latest → Redeploy
3. Don't use cached build
4. Wait for deployment to complete
5. Clear browser cache

---

## 📚 RELATED DOCUMENTATION

- `CRM_MEMBERSHIP_INTEGRATION_GUIDE.md` - Full Notion setup
- `CHECKOUT_SYSTEM_RECOMMENDATION.md` - Stripe setup details
- `MASTER_TODO_LIST.md` - Complete project roadmap

---

## ✅ VERIFICATION CHECKLIST

Before going live, verify:

- [ ] Stripe keys added to Vercel (production environment)
- [ ] Stripe webhook endpoint created and verified
- [ ] Test membership purchase end-to-end
- [ ] Notion databases created and shared with integration
- [ ] Test booking submission → see in Notion
- [ ] Intercom chat widget visible (if using)
- [ ] Google Analytics tracking (if using)
- [ ] All variables added to "Production" environment in Vercel
- [ ] Latest deployment includes all variables
- [ ] Test payment with real card (small amount)
- [ ] Verify webhook events trigger correctly

---

**Need Help?** Check the error messages in:
- Vercel deployment logs
- Browser console (F12)
- Stripe Dashboard → Events
- Notion integration logs

---

**Status:** Ready to configure! 🚀

Start with Stripe for payments, then add Notion for CRM. Everything else is optional.

