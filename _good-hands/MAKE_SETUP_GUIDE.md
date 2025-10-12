# 🔄 Make.com Setup Guide - Good Hands Automation

**Complete guide to setting up Make.com automation scenarios**

---

## 📋 Overview

Make.com (formerly Integromat) is the automation orchestrator that connects all Good Hands integrations. It receives webhooks from the website and Stripe, then triggers actions in Notion, Customer.io, Slack, and other services.

---

## 🎯 Required Make.com Scenarios

### Scenario 1: New Booking Flow

**Trigger:** Webhook from `/api/bookings`

**Flow:**
```
Webhook Trigger
  ↓
Parse JSON Data
  ↓
Create/Update Notion Customer Record
  ↓
Create Notion Booking Record
  ↓
Send Confirmation Email (Customer.io)
  ↓
Send Slack Notification (optional)
  ↓
Tag Customer in Intercom (optional)
```

**Setup Steps:**

1. **Create New Scenario** in Make.com
2. **Add Webhook Trigger**
   - Click "+" to add first module
   - Search for "Webhooks"
   - Select "Custom webhook"
   - Create new webhook
   - Copy the webhook URL → Save to `MAKE_WEBHOOK_URL` environment variable
   - Name webhook: "booking-created"

3. **Add Notion Module - Create Customer**
   - Click "+" after webhook
   - Search for "Notion"
   - Select "Create a Database Item"
   - Connect your Notion account
   - Select "Customers" database
   - Map fields:
     ```
     Name: {{webhook.customer.name}}
     Email: {{webhook.customer.email}}
     Phone: {{webhook.customer.phone}}
     Source: Website Booking
     Last Booking Date: {{now}}
     ```

4. **Add Notion Module - Create Booking**
   - Add another Notion module
   - Select "Create a Database Item"
   - Select "Bookings" database
   - Map fields:
     ```
     Customer Name: {{webhook.customer.name}}
     Customer Email: {{webhook.customer.email}}
     Service: {{webhook.booking.service}}
     Neighborhood: {{webhook.booking.neighborhood}}
     Date: {{webhook.booking.date}}
     Time: {{webhook.booking.time}}
     Status: Pending
     Notes: {{webhook.booking.notes}}
     Created Date: {{now}}
     ```

5. **Add Customer.io Module - Track Event**
   - Add Customer.io module
   - Select "Track an Event"
   - Connect Customer.io account
   - Map fields:
     ```
     Customer ID: {{webhook.customer.email}}
     Event Name: booking_created
     Event Data: {{webhook}}
     ```

6. **Add Slack Module - Send Message** (Optional)
   - Add Slack module
   - Select "Create a Message"
   - Select channel: #bookings
   - Message template:
     ```
     🎉 New Booking!
     
     Customer: {{webhook.customer.name}}
     Service: {{webhook.booking.service}}
     Date: {{webhook.booking.date}} at {{webhook.booking.time}}
     Neighborhood: {{webhook.booking.neighborhood}}
     
     View in Notion: [Link]
     ```

7. **Test the Scenario**
   - Click "Run once"
   - Send test webhook from API
   - Verify all modules execute successfully

8. **Activate Scenario**
   - Toggle "On" in bottom left
   - Set schedule: Immediately (for webhooks)

---

### Scenario 2: Membership Created

**Trigger:** Stripe webhook → Website → Make.com

**Flow:**
```
Webhook Trigger
  ↓
Create Notion Membership Record
  ↓
Update Customer Record with Membership Tier
  ↓
Send Welcome Email (Customer.io)
  ↓
Tag as Member in Intercom
  ↓
Send Slack Notification
```

**Setup:**

1. **Webhook Trigger**
   - Name: "membership-created"
   - Expected data:
     ```json
     {
       "email": "customer@email.com",
       "membershipType": "Gold",
       "subscriptionId": "sub_xxxxx",
       "customerId": "cus_xxxxx",
       "timestamp": "2025-01-11T10:30:00Z"
     }
     ```

2. **Notion - Create Membership**
   ```
   Database: Memberships
   Fields:
     - Customer Email: {{webhook.email}}
     - Membership Type: {{webhook.membershipType}}
     - Stripe Subscription ID: {{webhook.subscriptionId}}
     - Stripe Customer ID: {{webhook.customerId}}
     - Status: Active
     - Start Date: {{webhook.timestamp}}
     - Monthly Price: {{if(webhook.membershipType = "Gold", 49, 129)}}
   ```

3. **Notion - Update Customer**
   ```
   Database: Customers
   Search by: Email = {{webhook.email}}
   Update:
     - Membership Tier: {{webhook.membershipType}}
     - Membership Start: {{webhook.timestamp}}
   ```

4. **Customer.io - Send Welcome**
   ```
   Event Name: membership_created
   Data:
     - tier: {{webhook.membershipType}}
     - benefits: [array of benefits]
   ```

5. **Intercom - Tag Customer**
   ```
   Tag: "{{webhook.membershipType}}-member"
   ```

---

### Scenario 3: Payment Failed

**Trigger:** Stripe webhook → Website → Make.com

**Flow:**
```
Webhook Trigger
  ↓
Update Customer Record in Notion (Payment Failed flag)
  ↓
Send Payment Failed Email (Customer.io)
  ↓
Create Task in Notion (Follow-up)
  ↓
Send Alert to Slack
```

**Setup:**

1. **Webhook Trigger** - "payment-failed"

2. **Notion - Update Customer**
   ```
   Search: Email = {{webhook.email}}
   Update:
     - Payment Status: Failed
     - Last Payment Failure: {{now}}
     - Failed Attempts: +1
   ```

3. **Customer.io - Send Email**
   ```
   Event: payment_failed
   Template: Payment Failed Notification
   Data:
     - amount: {{webhook.amount}}
     - invoice_url: {{webhook.invoice_url}}
   ```

4. **Slack - Alert**
   ```
   Channel: #alerts
   Message: ⚠️ Payment failed for {{webhook.email}} - €{{webhook.amount}}
   ```

---

### Scenario 4: Subscription Updated

**Trigger:** Stripe webhook → Website → Make.com

**Flow:**
```
Webhook Trigger
  ↓
Update Notion Membership Record
  ↓
Send Email if Cancelled
  ↓
Log Event in Customer.io
```

**Setup:**

1. **Webhook Trigger** - "subscription-updated"

2. **Notion - Update Membership**
   ```
   Search: Stripe Subscription ID = {{webhook.subscriptionId}}
   Update:
     - Status: {{webhook.status}}
     - Cancel at Period End: {{webhook.cancelAtPeriodEnd}}
     - Current Period End: {{webhook.currentPeriodEnd}}
   ```

3. **Router - Check if Cancelled**
   - Add Router module
   - Route 1: If `cancelAtPeriodEnd = true`
     - Send cancellation warning email
   - Route 2: If `status = canceled`
     - Send goodbye email

---

### Scenario 5: Chat Message Logging

**Trigger:** Intercom webhook or website chat

**Flow:**
```
Webhook Trigger
  ↓
Create Notion Conversation Record
  ↓
Check for Hotel Inquiry Keywords
  ↓
If Hotel Inquiry → Create Partnership Pipeline Entry
  ↓
Notify Team via Slack
```

**Setup:**

1. **Webhook Trigger** - "chat-message"

2. **Notion - Log Conversation**
   ```
   Database: Conversations
   Fields:
     - Customer Name: {{webhook.conversation.customerName}}
     - Email: {{webhook.conversation.customerEmail}}
     - Message: {{webhook.conversation.message}}
     - Source: {{webhook.conversation.source}}
     - Sentiment: {{webhook.conversation.sentiment}}
     - Timestamp: {{webhook.timestamp}}
   ```

3. **Text Parser - Check Keywords**
   ```
   Pattern: Match "hotel|partnership|corporate|concierge"
   Text: {{webhook.conversation.message}}
   ```

4. **Router - If Hotel Inquiry**
   ```
   If keywords found:
     → Create Notion page in "Hotel Partners" database
     → Send Slack notification to #partnerships
   ```

---

## 🔗 Make.com Connections Setup

### Connect Notion

1. In Make.com, go to Scenarios
2. Add Notion module
3. Click "Add" next to Connection
4. Select "Internal Integration"
5. Paste your `NOTION_API_KEY`
6. Test connection

### Connect Customer.io

1. Add Customer.io module
2. Click "Add" next to Connection
3. Enter:
   - Site ID: Your `CUSTOMERIO_SITE_ID`
   - API Key: Your `CUSTOMERIO_API_KEY`
4. Test connection

### Connect Intercom

1. Add Intercom module
2. Click "Add" next to Connection
3. OAuth authentication
4. Authorize Make.com in Intercom

### Connect Slack

1. Add Slack module
2. Click "Add" next to Connection
3. OAuth authentication
4. Select workspace
5. Authorize channels

### Connect Stripe (Optional)

If you want to query Stripe directly:
1. Add Stripe module
2. Enter API Key: Your `STRIPE_SECRET_KEY`

---

## 📊 Make.com Best Practices

### Error Handling

**Add Error Handler to Each Scenario:**

1. Click wrench icon on any module
2. Select "Add error handler"
3. Choose "Ignore" or "Rollback"
4. Add Slack notification for critical errors

**Example Error Handler:**
```
Module: Notion Create Booking
Error Handler: Ignore (continue scenario)
  ↓
If Error → Send Slack Alert
  Message: "❌ Booking creation failed: {{error.message}}"
```

### Data Stores

Create data stores for:
- **Failed Operations** - Retry queue
- **Customer Cache** - Reduce Notion queries
- **Rate Limiting** - Track API usage

### Scheduling

**Webhook Scenarios:** Immediate execution

**Scheduled Scenarios:**
- Daily reports: 9:00 AM
- Email campaigns: Varies by campaign
- Data sync: Every 15 minutes

---

## 🧪 Testing Make.com Scenarios

### Test Individual Modules

1. Click "Run this module only" (right-click module)
2. Enter test data
3. Verify output

### Test Full Scenario

1. Click "Run once" in bottom left
2. Send test webhook from your API
3. Watch execution in real-time
4. Check each module's output

### Test with Stripe CLI

```bash
# Forward Stripe webhooks to Make.com
stripe listen --forward-to https://hook.eu1.make.com/xxxxx/stripe-webhook

# Trigger test event
stripe trigger checkout.session.completed
```

---

## 📈 Monitoring & Analytics

### Execution History

- View in Make.com → Scenario → History
- Check execution time
- Review errors
- Debug failed runs

### Key Metrics

- **Execution count** - Total runs
- **Success rate** - % successful
- **Average time** - Performance
- **Error rate** - % failed

### Alerts

Set up email/Slack alerts for:
- Scenario failures
- High error rates
- Slow executions
- Quota warnings

---

## 💰 Make.com Pricing

### Operations Calculation

- **1 Operation** = 1 module execution
- Example: Booking flow with 6 modules = 6 operations per booking

### Plans

- **Free:** 1,000 operations/month
- **Core:** 10,000 operations/month - $9
- **Pro:** 50,000 operations/month - $29
- **Teams:** 100,000+ operations/month - $99+

### Estimate Your Usage

**Assumptions:**
- 50 bookings/month
- 5 memberships/month
- 100 chat messages/month

**Calculation:**
- Bookings: 50 × 6 operations = 300
- Memberships: 5 × 5 operations = 25
- Chats: 100 × 3 operations = 300
- Stripe webhooks: 50 × 3 operations = 150
- **Total: ~775 operations/month**

**Recommendation:** Start with **Core plan ($9/month)**

---

## 🔧 Troubleshooting

### "Webhook not receiving data"

1. Check webhook URL in `MAKE_WEBHOOK_URL`
2. Verify scenario is active (toggle "On")
3. Test with manual webhook trigger in Make.com
4. Check Vercel logs for outgoing requests

### "Notion module fails"

1. Verify database IDs are correct
2. Check database is shared with Notion integration
3. Verify field types match (select, email, date, etc.)
4. Test with simple data first

### "Customer.io not sending emails"

1. Verify Customer.io connection in Make.com
2. Check customer is identified (not anonymous)
3. Verify email campaign is active
4. Check spam folder

### "Scenario runs too slow"

1. Remove unnecessary modules
2. Use parallel paths (Router)
3. Cache frequently accessed data
4. Reduce Notion queries

---

## 📚 Advanced Scenarios

### Abandoned Booking Recovery

**Trigger:** Schedule (daily)

**Flow:**
1. Query Notion for customers who started booking but didn't complete
2. Send reminder email via Customer.io
3. Offer 10% discount code
4. Track conversions

### Membership Renewal Reminders

**Trigger:** Schedule (daily)

**Flow:**
1. Query Notion for memberships expiring in 7 days
2. Send renewal reminder
3. Offer annual discount
4. Update reminder sent date

### Revenue Reporting

**Trigger:** Schedule (weekly)

**Flow:**
1. Query Notion for all bookings this week
2. Calculate total revenue
3. Group by service type
4. Create report in Notion
5. Send summary to Slack

---

## ✅ Setup Checklist

Before activating scenarios:

- [ ] Make.com account created
- [ ] Base webhook URL saved to `MAKE_WEBHOOK_URL`
- [ ] Notion connection configured
- [ ] Customer.io connection configured
- [ ] All 5 core scenarios created
- [ ] Error handlers added
- [ ] Test data sent through each scenario
- [ ] All modules execute successfully
- [ ] Scenarios activated (toggled "On")
- [ ] Execution history showing successes
- [ ] Slack notifications working (if enabled)

---

## 📖 Resources

- [Make.com Documentation](https://www.make.com/en/help)
- [Make.com Academy](https://www.make.com/en/academy)
- [Notion API in Make.com](https://www.make.com/en/help/app/notion)
- [Customer.io in Make.com](https://www.make.com/en/help/app/customerio)

---

**Last Updated:** January 11, 2025

For questions, check the Make.com community forum or contact support.

