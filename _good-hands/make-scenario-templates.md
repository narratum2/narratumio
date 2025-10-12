# Make.com Scenario Templates

**Copy-paste these data mappings when creating your Make.com scenarios**

---

## Scenario 1: New Booking Flow

### Webhook Trigger
**Webhook name:** `booking-created`

### Module 1: Parse JSON
**Input:** `{{body}}`

**Expected data structure:**
```json
{
  "type": "booking",
  "customer": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+351 912 345 678"
  },
  "booking": {
    "service": "Hair Styling",
    "neighborhood": "Chiado",
    "date": "2025-01-20",
    "time": "14:00",
    "notes": "Optional message"
  },
  "timestamp": "2025-01-11T10:30:00Z"
}
```

### Module 2: Create Notion Page (Bookings)
**Database:** Select "Bookings"

**Property Mappings:**
```
Customer Name: {{customer.name}}
Customer Email: {{customer.email}}
Service: {{booking.service}}
Neighborhood: {{booking.neighborhood}}
Date: {{booking.date}}T{{booking.time}}:00
Status: Pending
Notes: {{booking.notes}}
Created Date: {{timestamp}}
```

### Module 3: Create/Update Notion Page (Customers)
**Database:** Select "Customers"

**Search for existing:**
```
Email equals {{customer.email}}
```

**If exists:** Update  
**If not exists:** Create new

**Property Mappings:**
```
Name: {{customer.name}}
Email: {{customer.email}}
Phone: {{customer.phone}}
Last Booking Date: {{timestamp}}
Status: Active
```

### Module 4: Customer.io Track Event
**Customer ID:** `{{customer.email}}`  
**Event Name:** `booking_created`

**Event Data:**
```json
{
  "service": "{{booking.service}}",
  "neighborhood": "{{booking.neighborhood}}",
  "date": "{{booking.date}}",
  "time": "{{booking.time}}"
}
```

### Module 5: Slack Message (Optional)
**Channel:** `#bookings`

**Message:**
```
🎉 New Booking!

Customer: {{customer.name}}
Email: {{customer.email}}
Service: {{booking.service}}
Location: {{booking.neighborhood}}
When: {{booking.date}} at {{booking.time}}

Notes: {{booking.notes}}
```

---

## Scenario 2: Membership Created

### Webhook Trigger
**Webhook name:** `membership-created`

**Expected data:**
```json
{
  "type": "membership",
  "customer": {
    "email": "john@example.com",
    "stripeCustomerId": "cus_xxxxx"
  },
  "membership": {
    "tier": "Gold",
    "subscriptionId": "sub_xxxxx",
    "price": 49,
    "benefits": ["15% discount", "Priority booking", "Free cancellations"]
  },
  "timestamp": "2025-01-11T10:30:00Z"
}
```

### Module 1: Create Notion Page (Memberships)
**Database:** Select "Memberships"

**Property Mappings:**
```
Customer Email: {{customer.email}}
Membership Type: {{membership.tier}}
Stripe Subscription ID: {{membership.subscriptionId}}
Stripe Customer ID: {{customer.stripeCustomerId}}
Status: Active
Monthly Price: {{membership.price}}
Start Date: {{timestamp}}
```

### Module 2: Update Notion Page (Customers)
**Database:** Select "Customers"

**Search:**
```
Email equals {{customer.email}}
```

**Update:**
```
Membership Tier: {{membership.tier}}
Status: VIP
```

### Module 3: Customer.io Track Event
**Customer ID:** `{{customer.email}}`  
**Event Name:** `membership_created`

**Event Data:**
```json
{
  "tier": "{{membership.tier}}",
  "price": "{{membership.price}}",
  "benefits": "{{membership.benefits}}"
}
```

### Module 4: Intercom Tag Contact (Optional)
**Contact Email:** `{{customer.email}}`  
**Tag Name:** `{{membership.tier}}-member`

### Module 5: Slack Message
**Channel:** `#memberships`

**Message:**
```
🌟 New {{membership.tier}} Member!

Email: {{customer.email}}
Price: €{{membership.price}}/month
Subscription: {{membership.subscriptionId}}

Welcome aboard! 🎉
```

---

## Scenario 3: Payment Failed

### Webhook Trigger
**Webhook name:** `payment-failed`

**Expected data:**
```json
{
  "type": "payment-failed",
  "customer": {
    "email": "john@example.com"
  },
  "payment": {
    "invoiceId": "in_xxxxx",
    "amount": 49,
    "currency": "EUR",
    "attemptCount": 1,
    "retryAvailable": true
  },
  "timestamp": "2025-01-11T10:30:00Z"
}
```

### Module 1: Update Notion Page (Customers)
**Database:** Select "Customers"

**Search:**
```
Email equals {{customer.email}}
```

**Update:**
```
Status: Payment Failed
(Add a note about payment failure)
```

### Module 2: Customer.io Track Event
**Customer ID:** `{{customer.email}}`  
**Event Name:** `payment_failed`

**Event Data:**
```json
{
  "invoice_id": "{{payment.invoiceId}}",
  "amount": "{{payment.amount}}",
  "currency": "{{payment.currency}}",
  "attempt": "{{payment.attemptCount}}",
  "retry_available": "{{payment.retryAvailable}}"
}
```

### Module 3: Slack Alert
**Channel:** `#alerts`

**Message:**
```
⚠️ Payment Failed

Customer: {{customer.email}}
Amount: €{{payment.amount}}
Invoice: {{payment.invoiceId}}
Attempt: {{payment.attemptCount}}

Action needed: Customer will receive retry email
```

---

## Scenario 4: Subscription Updated

### Webhook Trigger
**Webhook name:** `subscription-updated`

**Expected data:**
```json
{
  "subscriptionId": "sub_xxxxx",
  "status": "active",
  "cancelAtPeriodEnd": false,
  "currentPeriodEnd": "2025-02-11T10:30:00Z",
  "timestamp": "2025-01-11T10:30:00Z"
}
```

### Module 1: Search Notion (Memberships)
**Database:** Select "Memberships"

**Filter:**
```
Stripe Subscription ID equals {{subscriptionId}}
```

### Module 2: Update Notion Page
**Update found page:**
```
Status: {{if(status = "active", "Active", if(status = "canceled", "Cancelled", "Past Due"))}}
```

### Module 3: Router
**Route 1:** If `cancelAtPeriodEnd = true`
→ Send cancellation warning email

**Route 2:** If `status = "canceled"`
→ Send goodbye email

**Route 3:** Otherwise
→ Do nothing

---

## Scenario 5: Chat Message Logging

### Webhook Trigger
**Webhook name:** `chat-message`

**Expected data:**
```json
{
  "type": "chat",
  "conversation": {
    "customerName": "John Doe",
    "customerEmail": "john@example.com",
    "message": "I'd like to book a spa treatment",
    "source": "website",
    "sentiment": "positive"
  },
  "timestamp": "2025-01-11T10:30:00Z"
}
```

### Module 1: Create Notion Page (Conversations)
**Database:** Select "Conversations"

**Property Mappings:**
```
Message: {{conversation.message}} (truncate to 100 chars for title)
Customer Name: {{conversation.customerName}}
Customer Email: {{conversation.customerEmail}}
Source: {{conversation.source}}
Full Message: {{conversation.message}}
Timestamp: {{timestamp}}
```

### Module 2: Text Parser (Check for Keywords)
**Pattern:** `hotel|partnership|corporate|concierge|business`  
**Text:** `{{conversation.message}}`

### Module 3: Router
**Route 1:** If keywords found
→ Create page in "Hotel Partners" database
→ Send Slack notification to #partnerships

**Route 2:** If no keywords
→ End scenario

---

## Common Connections Setup

### Notion Connection
1. Click "Add" next to Connection
2. Select "Internal Integration"
3. Paste your `NOTION_API_KEY`
4. Test connection

### Customer.io Connection
1. Click "Add" next to Connection
2. Enter Site ID: `CUSTOMERIO_SITE_ID`
3. Enter API Key: `CUSTOMERIO_API_KEY`
4. Test connection

### Intercom Connection (Optional)
1. Click "Add" next to Connection
2. OAuth authentication
3. Authorize Make.com
4. Select workspace

### Slack Connection (Optional)
1. Click "Add" next to Connection
2. OAuth authentication
3. Select workspace
4. Authorize channels

---

## Error Handling

### Add to Each Scenario:

**Error Handler (on each module):**
1. Right-click module
2. Add error handler
3. Choose "Ignore" or "Resume"
4. Add Slack notification for errors:

```
❌ Error in {{scenario.name}}

Module: {{module.name}}
Error: {{error.message}}

Check Make.com execution history for details.
```

---

## Testing Your Scenarios

### Test Booking Scenario:
```bash
curl -X POST https://hook.eu1.make.com/YOUR_WEBHOOK_ID/booking-created \
  -H "Content-Type: application/json" \
  -d '{
    "type": "booking",
    "customer": {
      "name": "Test User",
      "email": "test@example.com",
      "phone": "+351 912 345 678"
    },
    "booking": {
      "service": "Hair Styling",
      "neighborhood": "Chiado",
      "date": "2025-01-25",
      "time": "14:00",
      "notes": "Test booking"
    },
    "timestamp": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'"
  }'
```

### Check Results:
1. Make.com → Scenarios → History
2. Click on execution
3. View each module's output
4. Check Notion for new entries
5. Check email sent (if Customer.io configured)

---

## Optimization Tips

### Performance:
- Use parallel paths where possible
- Cache frequently accessed data
- Reduce unnecessary Notion queries

### Reliability:
- Add error handlers to all modules
- Set up retry logic for critical operations
- Monitor execution history daily

### Cost:
- Free tier: 1,000 operations/month
- Each module execution = 1 operation
- Estimate: 50 bookings × 5 modules = 250 operations

---

## Quick Reference

**Scenario 1:** Booking → Notion + Email + Slack  
**Scenario 2:** Membership → Notion + Email + Tag + Slack  
**Scenario 3:** Payment Failed → Update + Alert + Email  
**Scenario 4:** Subscription → Update status + Conditional email  
**Scenario 5:** Chat → Log + Check keywords + Route  

**Total Operations per Month:**
- 50 bookings × 5 = 250
- 5 memberships × 5 = 25
- 100 chats × 3 = 300
- **Total: ~575 operations/month** (well within free tier)

---

**Save this file and use it when creating your Make.com scenarios!**

