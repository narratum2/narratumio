# ⚡ Notion Setup - Quick Start (15 min)

**Your automated Notion CRM setup in 3 simple steps!**

---

## 🚀 Quick Setup (Just 3 Steps!)

### 1. Create Integration (3 min)
```
→ Go to: https://www.notion.so/my-integrations
→ Click: "New integration"
→ Name: "Good Hands Integration"
→ Copy the token (starts with "secret_")
```

### 2. Create Parent Page (2 min)
```
→ In Notion: Create new page "Good Hands CRM"
→ Share with your integration:
  - Click "..." menu
  - Click "Connections"
  - Connect "Good Hands Integration"
→ Copy page ID from URL (32 characters)
```

### 3. Run Automated Script (5 min)
```bash
cd /Users/pascalfrey/Repo/narratumio/_good-hands
node scripts/setup-notion-databases.js

# Follow prompts:
# 1. Paste your integration token
# 2. Paste your page ID
# 3. Script creates all 5 databases automatically!
```

---

## ✅ What Gets Created Automatically

The script creates these **5 databases** with full configuration:

- **📅 Bookings** - Customer booking requests
- **👥 Customers** - Customer profiles & history
- **💎 Memberships** - Active subscriptions
- **✂️ Beauty Professionals** - Your professional network
- **🏨 Hotel Partners** - B2B relationships

Each with:
- ✅ All properties configured
- ✅ Select options set up
- ✅ Status workflows ready
- ✅ Proper formatting (dates, emails, currency)

---

## 📋 After Setup: Copy Environment Variables

The script outputs this:
```bash
NOTION_API_KEY=secret_...
NOTION_BOOKINGS_DATABASE_ID=...
NOTION_CUSTOMERS_DATABASE_ID=...
NOTION_MEMBERSHIPS_DATABASE_ID=...
NOTION_PROFESSIONALS_DATABASE_ID=...
NOTION_HOTELPARTNERS_DATABASE_ID=...
```

**Add to .env.local:**
```bash
# Just copy-paste the output!
```

**Add to Vercel:**
```bash
vercel env add NOTION_API_KEY
# (paste value)
# Repeat for each database ID
```

**Then redeploy:**
```bash
vercel --prod
```

---

## 🎯 That's It!

**Total time:** 15 minutes  
**Manual work:** 5 minutes  
**Automated:** 10 minutes  

Your Notion CRM is ready to use! 🎉

---

**Full Guide:** `NOTION_AUTOMATED_SETUP.md`  
**Script Location:** `/scripts/setup-notion-databases.js`  
**Trouble?** See troubleshooting in full guide

