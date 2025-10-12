# 🚀 Quick Start - Engineering Integrations

**Get your integrations running in 30 minutes**

---

## ✅ What's Already Done

All the code is written and ready. You just need to:
1. Sign up for accounts
2. Add API keys
3. Set up Make.com scenarios
4. Test and deploy

---

## 🎯 30-Minute Setup

### Step 1: Stripe (5 minutes)

**If not already done:**
1. Go to https://stripe.com → Sign up
2. Complete business verification
3. Dashboard → Developers → API keys
4. Copy these keys:
   ```
   STRIPE_SECRET_KEY=sk_live_xxxxx
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
   ```
5. Dashboard → Developers → Webhooks → Add endpoint
   - URL: `https://your-domain.vercel.app/api/stripe/webhook`
   - Events: Select all `checkout.*`, `customer.subscription.*`, `invoice.*`
   - Copy signing secret: `STRIPE_WEBHOOK_SECRET=whsec_xxxxx`

### Step 2: Notion (Already Done ✓)

Your Notion is already set up! Just verify:
- ✅ `NOTION_API_KEY` is set
- ✅ `NOTION_BOOKINGS_DB_ID` is set
- ✅ `NOTION_CUSTOMERS_DB_ID` is set
- ✅ `NOTION_MEMBERSHIPS_DB_ID` is set

### Step 3: Make.com (10 minutes)

1. Go to https://make.com → Sign up (free tier is fine)
2. Create new scenario: "New Booking"
3. Add Webhooks → Custom webhook → Copy URL
4. Set environment variable:
   ```
   MAKE_WEBHOOK_URL=https://hook.eu1.make.com/xxxxx
   ```
5. Follow `MAKE_SETUP_GUIDE.md` for detailed scenario setup

**Quick scenario (minimum viable):**
```
Webhook Trigger → Parse JSON → Create Notion Booking → Done
```

### Step 4: Customer.io (5 minutes - Optional but recommended)

1. Go to https://customer.io → Sign up (free tier available)
2. Settings → Account Settings → API Credentials
3. Copy credentials:
   ```
   CUSTOMERIO_SITE_ID=xxxxx
   CUSTOMERIO_API_KEY=xxxxx
   ```
4. Create email campaign for "booking_created" event

### Step 5: Intercom (5 minutes - Optional)

1. Go to https://intercom.com → Sign up ($74/month or free trial)
2. Settings → Installation → Copy App ID
3. Set environment variable:
   ```
   NEXT_PUBLIC_INTERCOM_APP_ID=xxxxx
   ```
4. (Optional) For server-side API: Settings → Developers → Copy API key
   ```
   INTERCOM_API_KEY=xxxxx
   ```

### Step 6: Add to Vercel (3 minutes)

1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add all the keys you copied above
3. Select: Production, Preview, Development
4. Click "Save"

### Step 7: Deploy & Test (2 minutes)

1. Vercel → Deployments → Latest → Redeploy
2. Wait for deployment to complete
3. Test health check:
   ```bash
   curl https://your-domain.vercel.app/api/admin/health
   ```
4. Should return: `"status": "healthy"`

---

## 🧪 Quick Test

### Test 1: Health Check (30 seconds)

```bash
curl https://your-domain.vercel.app/api/admin/health
```

**Expected:** All integrations show as configured

### Test 2: Booking (1 minute)

```bash
curl -X POST https://your-domain.vercel.app/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "your-email@example.com",
    "phone": "+351 912 345 678",
    "service": "Hair Styling",
    "date": "2025-01-20",
    "time": "14:00"
  }'
```

**Expected:** 
- ✅ Success response
- ✅ Entry in Notion Bookings database
- ✅ Email confirmation (if Customer.io configured)

### Test 3: Membership Purchase (2 minutes)

1. Go to: `https://your-domain.vercel.app/premium/membership`
2. Click "Choose Gold" or "Choose Platinum"
3. Use test card: `4242 4242 4242 4242`
4. Complete checkout

**Expected:**
- ✅ Redirect to success page
- ✅ Entry in Notion Memberships database
- ✅ Welcome email (if Customer.io configured)

---

## ⚡ Minimum Viable Setup

**For testing today (5 minutes):**

1. ✅ Stripe keys → Vercel ✓ (You already have these)
2. ✅ Notion keys → Vercel ✓ (You already have these)
3. ⏳ Make.com webhook URL → Vercel (Quick signup + copy URL)
4. 🚀 Redeploy

**This gets you:**
- ✅ Working booking system
- ✅ Working membership purchases
- ✅ Data saved in Notion
- ✅ Make.com ready to add automations

**Can add later:**
- Customer.io for emails (30 minutes to set up properly)
- Intercom for chat (15 minutes)
- Complete Make.com scenarios (follow guide)

---

## 📊 Integration Priority

### Essential (Do Today)
1. ✅ Stripe - Already set up
2. ✅ Notion - Already set up
3. ⏳ Make.com - Quick signup + URL

### Important (This Week)
4. Customer.io - Automated emails
5. Make.com scenarios - Full automation

### Nice to Have (Next Week)
6. Intercom - Live chat
7. Slack - Team notifications
8. Advanced Make.com scenarios

---

## 🔍 Verify Everything Works

### Checklist

**Stripe:**
- [ ] Webhook endpoint created in Stripe Dashboard
- [ ] Test payment successful
- [ ] Webhook events showing in Stripe Dashboard → Events

**Notion:**
- [ ] Test booking appears in Bookings database
- [ ] Customer record created in Customers database
- [ ] Membership appears after test purchase

**Make.com:**
- [ ] Scenario created and activated
- [ ] Webhook URL added to Vercel
- [ ] Test webhook shows in execution history

**Customer.io (if configured):**
- [ ] Test customer identified
- [ ] Event tracked successfully
- [ ] Email campaign activated

**Intercom (if configured):**
- [ ] Widget appears on website
- [ ] Can open chat messenger
- [ ] Test message logged

---

## 🆘 Troubleshooting Quick Fixes

### "Stripe webhook not working"
```bash
# Check in Vercel logs if webhook is being received
# Verify STRIPE_WEBHOOK_SECRET matches Stripe Dashboard
# Test locally with Stripe CLI:
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

### "Make.com not receiving webhooks"
```bash
# Verify MAKE_WEBHOOK_URL is set
# Check scenario is toggled "On" in Make.com
# Test with manual webhook trigger in Make.com interface
```

### "Notion not saving data"
```bash
# Check health endpoint: /api/admin/health
# Verify database IDs are correct
# Check databases are shared with integration in Notion
```

---

## 📚 Documentation

**For quick reference:**
- `API_INTEGRATION_GUIDE.md` - Complete technical docs
- `MAKE_SETUP_GUIDE.md` - Make.com scenario setup
- `ENGINEERING_INTEGRATIONS_COMPLETE.md` - What's been built

**For detailed setup:**
- `ENVIRONMENT_VARIABLES_SETUP.md` - All environment variables
- `CRM_MEMBERSHIP_INTEGRATION_GUIDE.md` - Full Notion setup

---

## 💬 What to Tell Your Content AI

"All engineering integrations are complete. I'm working on:
- Stripe configuration
- Make.com setup
- Testing the booking flow

You can focus on:
- Blog content creation
- Neighborhood guide expansion
- FAQ sections
- Service descriptions"

---

## ✨ You're Almost There!

**Time to live:** 30 minutes of configuration + testing

**What you'll have:**
- 💳 Working payment system (Stripe)
- 📊 Automated CRM (Notion)
- 🤖 Email automation (Customer.io)
- 💬 Live chat (Intercom)
- 🔄 Full automation (Make.com)

**All the code is done. Just add your API keys and go! 🚀**

---

**Last Updated:** January 11, 2025  
**Ready to deploy!**

