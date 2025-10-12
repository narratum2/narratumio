# Notion Integration Setup Instructions

## 🎯 Goal
Connect Good Hands website to Notion as the central command center for all business operations.

---

## Step 1: Create Notion Integration

1. Go to https://www.notion.so/my-integrations
2. Click "+ New integration"
3. Name it: "Good Hands Website Integration"
4. Select your workspace
5. Set capabilities:
   - ✅ Read content
   - ✅ Update content
   - ✅ Insert content
6. Click "Submit"
7. **Copy the "Internal Integration Token"** (starts with `secret_...`)

---

## Step 2: Create Notion Databases

### Database 1: 💬 Customer Conversations

1. Create a new database in Notion
2. Name it: "Customer Conversations"
3. Add these properties:

| Property Name | Type | Options |
|--------------|------|---------|
| Name | Title | - |
| Contact Method | Select | Chat, Email, Phone, Booking Form |
| Inquiry Type | Select | Booking, Question, Partnership, Complaint, Feedback |
| Status | Select | New, In Progress, Resolved, Follow-up Needed |
| Priority | Select | Urgent, High, Normal, Low |
| Email | Email | - |
| Customer Sentiment | Select | 😊 Happy, 😐 Neutral, 😞 Unhappy |
| Source | Select | Website Chat, Direct Email, Hotel Referral, Social Media |
| Created Date | Date | - |

4. Share the database with your integration:
   - Click "..." at the top right of the database
   - Click "Add connections"
   - Select "Good Hands Website Integration"

5. Copy the Database ID:
   - From the URL: `https://notion.so/{workspace}/{DATABASE_ID}?v=...`
   - Copy the DATABASE_ID part

---

### Database 2: 📅 Bookings

1. Create a new database in Notion
2. Name it: "Bookings"
3. Add these properties:

| Property Name | Type | Options |
|--------------|------|---------|
| Customer Name | Title | - |
| Service | Select | Hair Styling, Spa Treatment, Makeup, Nails, Wellness, Custom Package |
| Professional Assigned | Relation | → Beauty Professionals Network (create DB first) |
| Date & Time | Date | Include time |
| Neighborhood | Select | Alfama, Chiado, Príncipe Real, Baixa, Belém, Avenida, Cascais, Sintra |
| Status | Select | 📝 Requested, ✅ Confirmed, 👤 Professional Assigned, 🎉 Completed, ❌ Cancelled |
| Price | Number | Format: Euro |
| Deposit Paid | Checkbox | - |
| Customer Email | Email | - |
| Customer Phone | Phone | - |
| Source | Select | Website, Hotel Partner, Direct Referral, Returning Customer |
| Hotel Partner | Relation | → Hotel Partners (create DB first) |
| Created Date | Date | - |

4. Share with integration
5. Copy Database ID

---

### Database 3: 🏨 Hotel Partners

1. Create a new database in Notion
2. Name it: "Hotel Partners"
3. Add these properties:

| Property Name | Type | Options |
|--------------|------|---------|
| Hotel Name | Title | - |
| Contact Person | Text | - |
| Email | Email | - |
| Phone | Phone | - |
| Website | URL | - |
| Location/Neighborhood | Select | Same as bookings |
| Partnership Status | Select | 🎯 Target, 📞 First Contact, 💬 In Discussion, 📄 Contract Sent, ✅ Active Partner, ❌ Declined, 😴 Inactive |
| Deal Value (Monthly) | Number | Format: Euro |
| Commission Rate | Number | Format: Percent |
| Contract Start Date | Date | - |
| Next Follow-up Date | Date | - |

4. Share with integration
5. Copy Database ID

---

### Database 4: 💅 Beauty Professionals Network

1. Create a new database in Notion
2. Name it: "Beauty Professionals Network"
3. Add these properties:

| Property Name | Type | Options |
|--------------|------|---------|
| Professional Name | Title | - |
| Service Type | Multi-select | Hair, Spa, Makeup, Nails, Wellness |
| Specialties | Multi-select | Color, Cutting, Styling, Massage, Facial, Bridal Makeup, etc. |
| Location/Neighborhood | Select | Same as bookings |
| Languages | Multi-select | English, Portuguese, Spanish, French, Italian |
| Price Range | Select | €, €€, €€€, €€€€ |
| Availability | Select | High, Medium, Low, Fully Booked |
| Rating | Select | ⭐⭐⭐⭐⭐, ⭐⭐⭐⭐, ⭐⭐⭐ |
| Active | Checkbox | - |
| Instagram | URL | - |
| Onboarding Date | Date | - |

4. Share with integration
5. Copy Database ID

---

## Step 3: Add Environment Variables to Vercel

1. Go to your Vercel project dashboard
2. Go to Settings → Environment Variables
3. Add these variables:

```
NOTION_API_KEY=secret_your_integration_token_here
NOTION_CONVERSATIONS_DB_ID=your_conversations_database_id
NOTION_BOOKINGS_DB_ID=your_bookings_database_id
NOTION_PARTNERS_DB_ID=your_hotel_partners_database_id
NOTION_PROFESSIONALS_DB_ID=your_professionals_database_id
```

4. Apply to all environments (Production, Preview, Development)
5. Save

---

## Step 4: Test the Integration

### Test 1: Create a Test Booking

Send POST request to:
```bash
curl -X POST https://goodhands.com/api/notion/create-booking \
  -H "Content-Type: application/json" \
  -d '{
    "customerName": "Test Customer",
    "customerEmail": "test@example.com",
    "service": "Hair Styling",
    "date": "2025-02-01",
    "time": "14:00",
    "neighborhood": "Chiado",
    "price": "105",
    "notes": "Test booking from API"
  }'
```

Check: New page should appear in Notion Bookings database

---

### Test 2: Log a Test Conversation

Send POST request to:
```bash
curl -X POST https://goodhands.com/api/notion/log-conversation \
  -H "Content-Type: application/json" \
  -d '{
    "customerName": "Test User",
    "customerEmail": "test@example.com",
    "messages": [
      {"role": "user", "content": "I need a hair appointment"},
      {"role": "assistant", "content": "I would be happy to help you book!"}
    ],
    "inquiryType": "Booking",
    "source": "Website Chat",
    "sentiment": "😊 Happy"
  }'
```

Check: New page should appear in Notion Conversations database

---

## Step 5: Set Up Make.com Automation (Optional but Recommended)

### Scenario 1: Intercom Chat → Notion

1. Create Make.com account (free tier)
2. Create new scenario
3. Add Intercom "Watch Conversations" trigger
4. Add HTTP "Make a Request" module
   - URL: `https://goodhands.com/api/notion/log-conversation`
   - Method: POST
   - Body: Map Intercom conversation data
5. Add Slack "Create Message" module (optional)
   - Send notification to #chat-inquiries channel
6. Activate scenario

---

### Scenario 2: Booking Form → Notion → Slack

1. Create new scenario in Make.com
2. Add Webhook trigger
   - Copy webhook URL
   - Add to booking form submission
3. Add HTTP request to Notion API
4. Add Slack notification
5. Add Customer.io email trigger (optional)
6. Activate scenario

---

### Scenario 3: Notion Status Change → Automated Actions

1. Create new scenario
2. Add Notion "Watch Database Items" trigger
   - Watch Bookings database
   - Trigger on property change (Status)
3. Add Router with different paths:
   - If Status = "Confirmed" → Send confirmation email
   - If Status = "Professional Assigned" → Notify professional via SMS
   - If Status = "Completed" → Send review request
4. Activate scenario

---

## Step 6: Set Up Intercom Chat Widget

1. Create Intercom account: https://www.intercom.com/
2. Get your Intercom App ID
3. Add to Vercel environment variables:
```
NEXT_PUBLIC_INTERCOM_APP_ID=your_intercom_app_id
```
4. Intercom is already integrated in `app/layout.tsx` (lines 93-105)
5. Redeploy

---

## Step 7: Configure Intercom Webhooks

1. In Intercom, go to Settings → Webhooks
2. Create new webhook
3. URL: `https://goodhands.com/api/notion/log-conversation`
4. Select topics:
   - conversation.user.created
   - conversation.user.replied
   - conversation.admin.replied
5. Save webhook

---

## Step 8: Mobile Control Setup

### Your Phone:
1. Download Notion app (iOS/Android)
2. Download Intercom app (iOS/Android)
3. Download Slack app (iOS/Android)

Now you can manage everything from your phone!

---

## 🎯 What You'll Be Able to Do

### Via Notion (Desktop or Mobile):
- ✅ View all customer conversations
- ✅ See all bookings and their status
- ✅ Track hotel partnership pipeline
- ✅ Manage professional network
- ✅ Update booking statuses
- ✅ Add notes to any record
- ✅ Generate reports and analytics

### Via Intercom (Desktop or Mobile):
- ✅ Respond to customer chats
- ✅ Let AI handle routine queries
- ✅ Jump into conversations when needed
- ✅ Set away messages
- ✅ View conversation history

### Via Slack (Desktop or Mobile):
- ✅ Get instant notifications for new bookings
- ✅ Be alerted to high-priority inquiries
- ✅ Quick updates without opening Notion
- ✅ Team communication

---

## 🔄 The Complete Flow Example

**Customer books a service:**

1. Customer fills booking form on website
2. API creates record in Notion Bookings DB ✅
3. Make.com detects new booking
4. Make.com sends Slack notification to you
5. AI reads customer preferences from Notion
6. AI suggests best professional match
7. You review in Notion, approve or adjust
8. You update status to "Confirmed"
9. Make.com detects status change
10. Make.com sends confirmation email via Customer.io
11. Make.com sends calendar invite
12. You manage everything from phone via Notion app

**Total time for you:** 1-2 minutes

---

## 💰 Costs

- **Notion:** Free for individuals, $10/month for Plus (recommended)
- **Intercom:** $74/month Starter plan
- **Make.com:** Free tier (1,000 operations/month), then $9-29/month
- **Slack:** Free for your use case

**Total: ~$93-113/month for full automation**

---

## 🆘 Troubleshooting

### "API returned 401 Unauthorized"
- Check NOTION_API_KEY is correct in Vercel environment variables
- Verify database is shared with integration

### "Database not found"
- Verify database ID is correct
- Check database is shared with integration
- Database ID should be 32 characters (without dashes)

### "Notion integration not appearing"
- Make sure you created integration in the same workspace as databases
- Refresh the "Add connections" menu

### "Webhook not triggering"
- Check webhook URL is correct (https required)
- Verify webhook is active in Make.com/Intercom
- Check webhook logs for errors

---

## 📞 Need Help?

Ask me (the AI) anytime! I can:
- Debug API errors
- Help set up Make.com scenarios
- Create custom Notion templates
- Optimize your workflow

---

**Once setup is complete, you'll have a fully automated, Notion-powered business management system!** 🚀

