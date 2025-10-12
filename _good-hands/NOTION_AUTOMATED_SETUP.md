# 🚀 Notion Automated Setup Guide

**Time Required:** 15 minutes (5 min manual + 10 min automated)  
**Difficulty:** Easy - mostly automated!

---

## 🎯 What This Does

This automated setup will:
- ✅ Create all 5 Notion databases
- ✅ Configure all properties and schemas
- ✅ Set up proper select options and statuses
- ✅ Generate environment variables
- ✅ Provide ready-to-use database IDs

**You only need to:**
1. Create a Notion account (if needed)
2. Create an integration (2 clicks)
3. Create a parent page (1 click)
4. Run the automated script!

---

## 📋 STEP-BY-STEP GUIDE

### Step 1: Create Notion Account (2 minutes)
**If you don't have Notion:**

1. Go to https://www.notion.so
2. Sign up with your email
3. Choose "For Personal Use" or "For Work"
4. Complete onboarding

**If you have Notion:** Skip to Step 2!

---

### Step 2: Create Notion Integration (3 minutes)

1. **Go to:** https://www.notion.so/my-integrations

2. **Click:** "New integration" button

3. **Fill in:**
   - Name: `Good Hands Integration`
   - Associated workspace: Select your workspace
   - Type: Internal integration

4. **Click:** "Submit"

5. **Copy the token:**
   - You'll see "Internal Integration Token"
   - Click "Show" and copy the entire token
   - It starts with `secret_`
   - **Save this** - you'll need it in a moment

---

### Step 3: Create Parent Page (2 minutes)

1. **Open Notion** (the app or web)

2. **Create a new page:**
   - Click "+ New Page" in sidebar
   - Or press `Cmd+N` (Mac) / `Ctrl+N` (Windows)

3. **Name it:** `Good Hands CRM`

4. **Share with integration:**
   - Click the `...` menu (top right of page)
   - Click "Connections"
   - Find "Good Hands Integration"
   - Click to connect it
   - ✅ Connection should show as active

5. **Get the page ID:**
   - Look at the URL in your browser
   - Format: `https://www.notion.so/workspace-name/PAGE_ID_HERE?v=...`
   - Copy the 32-character ID (between workspace name and `?`)
   - Example: If URL is `https://www.notion.so/myworkspace/a1b2c3d4e5...?v=123`
   - Page ID is: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`
   - **Save this** - you'll need it next

---

### Step 4: Run Automated Setup (5 minutes)

**Open your terminal and run:**

```bash
cd /Users/pascalfrey/Repo/narratumio/_good-hands

# Make the script executable
chmod +x scripts/setup-notion-databases.js

# Run the setup
node scripts/setup-notion-databases.js
```

**The script will prompt you for:**

1. **Your Notion Integration Token** (from Step 2)
   - Paste the token starting with `secret_`
   - Press Enter

2. **Your Parent Page ID** (from Step 3)
   - Paste the 32-character page ID
   - Press Enter

**Then it will automatically:**
- ✅ Create 📅 Bookings database
- ✅ Create 👥 Customers database
- ✅ Create 💎 Memberships database
- ✅ Create ✂️ Beauty Professionals database
- ✅ Create 🏨 Hotel Partners database
- ✅ Configure all properties
- ✅ Set up select options
- ✅ Generate environment variables

---

### Step 5: Add Environment Variables (2 minutes)

**The script will output something like:**

```bash
# Notion Configuration
NOTION_API_KEY=secret_abc123...
NOTION_BOOKINGS_DATABASE_ID=abc123...
NOTION_CUSTOMERS_DATABASE_ID=def456...
NOTION_MEMBERSHIPS_DATABASE_ID=ghi789...
NOTION_PROFESSIONALS_DATABASE_ID=jkl012...
NOTION_HOTELPARTNERS_DATABASE_ID=mno345...
```

**Add to your local environment:**

```bash
# Copy the output
# Paste into .env.local file
echo "NOTION_API_KEY=secret_..." >> .env.local
echo "NOTION_BOOKINGS_DATABASE_ID=..." >> .env.local
# etc...
```

**Add to Vercel:**

```bash
# Option 1: Via CLI
vercel env add NOTION_API_KEY
# Paste the value when prompted
# Repeat for each database ID

# Option 2: Via Dashboard
# Go to: vercel.com/your-project/settings/environment-variables
# Add each variable manually
```

---

### Step 6: Verify Setup (1 minute)

1. **Open Notion**
2. **Go to your "Good Hands CRM" page**
3. **You should see 5 new databases:**
   - 📅 Bookings
   - 👥 Customers
   - 💎 Memberships
   - ✂️ Beauty Professionals
   - 🏨 Hotel Partners

4. **Click into each one** - they're fully configured!

---

## 🎉 DONE!

Your Notion CRM is now fully set up and ready to use!

---

## 📊 What You Just Created

### 📅 Bookings Database
**Tracks:** Customer booking requests  
**Properties:**
- Customer details (name, email, phone)
- Service type (Hair, Spa, Makeup, etc.)
- Neighborhood preference
- Date & time
- Status (New → Confirmed → Completed)
- Pricing
- UTM tracking
- Notes

### 👥 Customers Database
**Tracks:** Customer profiles and history  
**Properties:**
- Contact information
- Membership type (None, Gold, Platinum)
- Total bookings & lifetime value
- Preferred services & locations
- Tags (VIP, Regular, Hotel Guest, etc.)
- Notes

### 💎 Memberships Database
**Tracks:** Active subscriptions  
**Properties:**
- Customer details
- Membership type & status
- Start/renewal dates
- Stripe integration IDs
- Revenue tracking
- Benefits usage

### ✂️ Beauty Professionals Database
**Tracks:** Your professional network  
**Properties:**
- Name & contact info
- Specialties (Hair, Nails, Makeup, etc.)
- Neighborhood
- Rating & total bookings
- Status (Active, Inactive, Pending)
- Languages & availability

### 🏨 Hotel Partners Database
**Tracks:** B2B hotel partnerships  
**Properties:**
- Hotel details
- Contact person
- Status (Active, Negotiating, etc.)
- Commission rate
- Contract dates
- Performance metrics
- Coupon codes

---

## 🔗 How It Integrates

### With Your Website:
When customers book on your website:
1. Form submits to `/api/bookings`
2. Creates booking in Supabase
3. **Notion webhook** adds entry to Bookings database
4. You see it instantly in Notion!

### With Stripe:
When customers subscribe:
1. Stripe webhook fires
2. Creates/updates customer in Customers database
3. Adds membership to Memberships database
4. Links Stripe customer ID

### With Make.com:
Automation workflows will:
1. Watch for new Notion bookings
2. Send confirmation emails
3. Create calendar events
4. Send reminders
5. Request reviews

---

## 🛠️ Troubleshooting

### "Invalid token" error
- Make sure token starts with `secret_`
- Copy the entire token (no spaces)
- Token might expire - generate a new one

### "Invalid page ID" error
- Page ID should be 32 characters
- Remove any dashes if present
- Make sure you shared the page with the integration

### "Permission denied" error
- Go back to your parent page
- Click "..." → "Connections"
- Make sure "Good Hands Integration" is connected

### Databases not appearing
- Refresh your Notion page
- They'll be inside your "Good Hands CRM" page
- Look for the 📅 📊 emoji icons

---

## ⚙️ Advanced: Environment Variables

**Local Development (.env.local):**
```bash
NOTION_API_KEY=secret_...
NOTION_BOOKINGS_DATABASE_ID=...
NOTION_CUSTOMERS_DATABASE_ID=...
NOTION_MEMBERSHIPS_DATABASE_ID=...
NOTION_PROFESSIONALS_DATABASE_ID=...
NOTION_HOTELPARTNERS_DATABASE_ID=...
```

**Production (Vercel):**
```bash
# Add via CLI
vercel env add NOTION_API_KEY
vercel env add NOTION_BOOKINGS_DATABASE_ID
vercel env add NOTION_CUSTOMERS_DATABASE_ID
vercel env add NOTION_MEMBERSHIPS_DATABASE_ID
vercel env add NOTION_PROFESSIONALS_DATABASE_ID
vercel env add NOTION_HOTELPARTNERS_DATABASE_ID

# Then redeploy
vercel --prod
```

---

## 🎯 Next Steps

**After Notion is set up:**

1. ✅ Test booking flow
   - Submit a test booking on your website
   - Check if it appears in Notion Bookings database

2. ✅ Set up Make.com automation
   - Connect Make.com to Notion
   - Build automation scenarios
   - See: `N8N_WORKFLOWS.md` for workflows

3. ✅ Customize databases
   - Add custom properties if needed
   - Adjust select options
   - Create views (by status, by date, etc.)

4. ✅ Train your team
   - Show them the Notion workspace
   - Explain each database
   - Set up permissions

---

## 📚 Related Documentation

- **Full Notion Guide:** `NOTION_SETUP_INSTRUCTIONS.md`
- **CRM Integration:** `CRM_MEMBERSHIP_INTEGRATION_GUIDE.md`
- **Automation Workflows:** `N8N_WORKFLOWS.md`
- **API Integration:** `/lib/notion.ts`

---

## 💡 Pro Tips

1. **Create Views:** Set up filtered views in each database (e.g., "Today's Bookings", "Active Members")

2. **Add Templates:** Create templates for common booking types

3. **Set Reminders:** Use Notion reminders for follow-ups

4. **Link Databases:** Use relations to connect bookings with customers

5. **Export Data:** Notion allows CSV export for reporting

---

## 🆘 Need Help?

**If the automated script fails:**
1. Check the error message
2. Verify your token and page ID
3. Make sure the integration has access
4. Try running the script again

**Still stuck?**
- Check Notion API status: https://status.notion.so
- Review Notion API docs: https://developers.notion.com
- Ask in the dashboard: Update `TEAM_STATUS_DASHBOARD.md`

---

**✨ Your CRM is ready! Time to start managing bookings like a pro! 🚀**

---

**Setup Script:** `/scripts/setup-notion-databases.js`  
**Created:** January 11, 2025  
**Estimated Time:** 15 minutes total  
**Difficulty:** ⭐ Easy (mostly automated)

