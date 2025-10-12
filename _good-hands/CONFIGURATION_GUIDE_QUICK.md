# ⚡ Quick Configuration Guide

**The fastest path to getting Good Hands live**

---

## 🎯 The 3-Step Process

### Step 1: Create Accounts (30 min)
### Step 2: Copy Keys (20 min)
### Step 3: Add to Vercel + Test (25 min)

**Total Time: ~75 minutes**

---

## Step 1: Create Accounts

### 1.1 Stripe (CRITICAL - 15 min)

**Go to:** https://stripe.com

**Do this:**
1. Sign up with business email
2. Complete verification (they'll guide you)
3. Add bank account
4. Dashboard → Products → New
   - Name: "Gold Membership", €49/month, recurring → **Copy Price ID**
   - Name: "Platinum Membership", €129/month, recurring → **Copy Price ID**
5. Dashboard → Developers → Webhooks → Add endpoint
   - URL: `https://YOUR-DOMAIN.vercel.app/api/stripe/webhook`
   - Events: Select these 6 (see `stripe-webhook-events.md`):
     - checkout.session.completed
     - customer.subscription.created
     - customer.subscription.updated
     - customer.subscription.deleted
     - invoice.payment_failed
     - invoice.payment_succeeded
   - **Copy Signing Secret** (starts with `whsec_`)
6. Dashboard → Developers → API keys
   - **Copy both keys** (Secret key starts with `sk_`, Publishable with `pk_`)

**Save these 5 things:**
```
STRIPE_SECRET_KEY=sk_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_GOLD_PRICE_ID=price_...
STRIPE_PLATINUM_PRICE_ID=price_...
```

---

### 1.2 Notion (CRITICAL - 45 min)

**Go to:** https://notion.so

**Do this:**
1. Sign up / Log in
2. Create workspace: "Good Hands Operations"
3. Create 3 new database pages:
   
   **Database 1: "Bookings"**
   - Add 11 properties (see `notion-database-schemas.md` for exact list)
   - Quick version: Customer Name (title), Customer Email (email), Service (select), Date (date), Status (select), Notes (text), + 5 UTM fields

   **Database 2: "Customers"**
   - Add 10 properties
   - Quick version: Name (title), Email (email), Phone (phone), Membership Tier (select), Status (select), + 5 more

   **Database 3: "Memberships"**
   - Add 7 properties  
   - Quick version: Customer Email (email), Membership Type (select), Stripe IDs (text), Status (select), Price (number), Start Date (date)

4. Create Integration:
   - Go to: https://notion.so/my-integrations
   - New integration → Name: "Good Hands Website"
   - **Copy Integration Token** (starts with `secret_`)

5. Share databases:
   - Open each database → "..." → "Connections" → Add "Good Hands Website"
   - Do this for all 3 databases

6. Copy database IDs:
   - Open each database → Look at URL
   - Copy the 32-character ID from URL (between workspace name and `?v=`)

**Save these 4 things:**
```
NOTION_API_KEY=secret_...
NOTION_BOOKINGS_DB_ID=... (32 chars)
NOTION_CUSTOMERS_DB_ID=... (32 chars)
NOTION_MEMBERSHIPS_DB_ID=... (32 chars)
```

---

### 1.3 Make.com (RECOMMENDED - 5 min)

**Go to:** https://make.com

**Do this:**
1. Sign up (free tier)
2. Create new scenario: "New Booking"
3. Add module: Webhooks → Custom webhook
4. **Copy webhook URL** (starts with `https://hook.eu1.make.com/`)
5. Click OK → Save → Activate (toggle On)

**Full setup later:** See `MAKE_SETUP_GUIDE.md` for complete scenarios

**Save this 1 thing:**
```
MAKE_WEBHOOK_URL=https://hook.eu1.make.com/...
```

---

### 1.4 Customer.io (RECOMMENDED - 5 min)

**Go to:** https://customer.io

**Do this:**
1. Sign up (free tier)
2. Settings → API Credentials
3. **Copy Site ID and API Key**

**Email campaigns later:** Create campaigns for booking confirmations, etc.

**Save these 2 things:**
```
CUSTOMERIO_SITE_ID=...
CUSTOMERIO_API_KEY=...
```

---

### 1.5 Intercom (OPTIONAL - 5 min)

**Go to:** https://intercom.com

**Do this:**
1. Sign up (free trial or $74/mo)
2. Settings → Installation
3. **Copy App ID**

**Save this 1 thing:**
```
NEXT_PUBLIC_INTERCOM_APP_ID=...
```

---

### 1.6 Admin Key (1 min)

**Generate a random secure string:**

```bash
# Option 1: Use our generator
node admin-api-key-generator.js

# Option 2: Generate manually (Mac/Linux)
openssl rand -base64 32

# Option 3: Use online generator
# Go to: https://www.random.org/strings/
# Length: 32, Unique: Yes, Format: Alphanumeric
```

**Save this 1 thing:**
```
ADMIN_API_KEY=... (your random string)
```

---

## Step 2: Organize Your Keys (5 min)

Open `env-variables-template.txt` and fill it in with all your keys.

**You should have:**
- [ ] 5 Stripe keys
- [ ] 4 Notion keys
- [ ] 1 Make.com URL
- [ ] 2 Customer.io keys
- [ ] 1 Intercom ID (optional)
- [ ] 1 Admin key

**Total: 13-14 environment variables**

---

## Step 3: Add to Vercel & Deploy (10 min)

**Go to:** https://vercel.com/dashboard

**Do this:**
1. Select your Good Hands project
2. Settings → Environment Variables
3. For EACH variable in your list:
   - Click "Add New"
   - Name: (e.g., `STRIPE_SECRET_KEY`)
   - Value: (paste your key)
   - Select: **Production**, **Preview**, **Development** ← IMPORTANT!
   - Click "Save"
4. Repeat 13-14 times (yes, it's tedious but necessary!)
5. After adding ALL variables:
   - Go to "Deployments" tab
   - Click "..." on latest deployment
   - Click "Redeploy"
   - Wait ~2 minutes

---

## Step 4: Test Everything (15 min)

### Test 1: Health Check (30 seconds)

Open in browser:
```
https://your-domain.vercel.app/api/admin/health
```

**Should see:** All integrations marked as "configured"

---

### Test 2: Create Booking (2 min)

```bash
curl -X POST https://your-domain.vercel.app/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "your-email@example.com",
    "phone": "+351 912 345 678",
    "service": "Hair Styling",
    "date": "2025-01-25",
    "time": "14:00"
  }'
```

**Check:**
- [ ] Success response
- [ ] Entry in Notion "Bookings"
- [ ] Entry in Notion "Customers"

---

### Test 3: Buy Membership (3 min)

1. Go to: `https://your-domain.vercel.app/premium/membership`
2. Click "Choose Gold"
3. Use card: `4242 4242 4242 4242` (Stripe test card)
4. Complete checkout

**Check:**
- [ ] Redirected to success page
- [ ] Entry in Notion "Memberships"
- [ ] Entry in Stripe Dashboard
- [ ] Webhook fired in Stripe

---

### Test 4: Verify Webhooks (2 min)

**In Stripe Dashboard:**
1. Developers → Webhooks
2. Click your endpoint
3. View "Recent attempts"
4. Should show successful delivery (200 status)

---

## 🎉 You're Live!

If all tests pass, your system is fully operational!

**What works now:**
✅ Customers can book services  
✅ Bookings saved in Notion  
✅ Customers can buy memberships  
✅ Memberships tracked automatically  
✅ 15-25% discounts applied to members  
✅ All payments processed by Stripe  
✅ Webhooks trigger automations  

---

## Next Steps

### Immediate:
- [ ] Create a real booking for yourself
- [ ] Test on mobile device
- [ ] Show content AI where to add blog posts
- [ ] Plan your launch

### This Week:
- [ ] Complete Make.com scenarios (see `MAKE_SETUP_GUIDE.md`)
- [ ] Set up Customer.io email campaigns
- [ ] Configure Intercom chat widget
- [ ] Onboard first beauty professionals

### Next Week:
- [ ] **Launch!** 🚀

---

## Troubleshooting

**Health check shows "degraded"?**
- That's OK if you only set up Stripe + Notion
- Add other integrations when ready

**Booking not appearing in Notion?**
- Check NOTION_API_KEY is correct
- Verify databases are shared with integration
- Check database IDs match (32 characters each)

**Stripe webhook failing?**
- Verify STRIPE_WEBHOOK_SECRET is correct
- Check webhook URL matches your domain
- Test with "Send test webhook" in Stripe

**Need more help?**
- See `API_INTEGRATION_GUIDE.md` for troubleshooting
- Check Vercel function logs for errors
- Review configuration checklist

---

## Time Saved

**Without preparation:** 4-5 hours of figuring things out

**With this guide:** ~75 minutes of focused work

**You saved:** 3+ hours! 🎉

---

**Last Updated:** January 11, 2025  
**Status:** Ready to use!

