# 📧 n8n Workflow Templates for Good Hands

**Purpose:** Automate communication and data flow  
**Platform:** n8n (open source automation)

---

## 🔧 WORKFLOW 1: New Booking Notification

### Trigger: Webhook
**URL:** `https://your-n8n-instance.com/webhook/new-booking`

### Flow:
```
1. Webhook (receive booking data)
   ↓
2. Supabase: Insert booking
   ↓
3. Notion: Create booking entry (via Make.com webhook)
   ↓
4. Email: Send confirmation to customer
   ↓
5. Slack: Notify team channel
```

### n8n JSON:
```json
{
  "nodes": [
    {
      "parameters": {
        "path": "new-booking",
        "responseMode": "onReceived",
        "options": {}
      },
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "position": [250, 300]
    },
    {
      "parameters": {
        "operation": "insert",
        "table": "bookings",
        "data": "={{$json}}"
      },
      "name": "Supabase",
      "type": "n8n-nodes-base.supabase",
      "position": [450, 300]
    },
    {
      "parameters": {
        "fromEmail": "bookings@goodhands.com",
        "toEmail": "={{$json.customer_email}}",
        "subject": "Booking Confirmation - Good Hands",
        "text": "Thank you for your booking! We'll confirm your appointment within 24 hours."
      },
      "name": "Send Email",
      "type": "n8n-nodes-base.emailSend",
      "position": [650, 300]
    },
    {
      "parameters": {
        "channel": "#bookings",
        "text": "🎯 New booking from {{$json.customer_name}} for {{$json.service_type}}"
      },
      "name": "Slack",
      "type": "n8n-nodes-base.slack",
      "position": [850, 300]
    }
  ]
}
```

---

## 📬 WORKFLOW 2: Welcome New Member

### Trigger: Stripe Webhook (new subscription)

### Flow:
```
1. Stripe Webhook (subscription.created)
   ↓
2. Supabase: Create/Update customer
   ↓
3. Supabase: Create membership record
   ↓
4. Email: Send welcome email with member guide
   ↓
5. Notion: Add to members database
   ↓
6. Slack: Notify team
```

---

## 🔔 WORKFLOW 3: Booking Reminder (24h before)

### Trigger: Schedule (runs every hour)

### Flow:
```
1. Schedule Trigger (hourly)
   ↓
2. Supabase: Query bookings for tomorrow
   ↓
3. Filter: Only confirmed bookings
   ↓
4. Loop: For each booking
   ↓
5. Email: Send reminder to customer
   ↓
6. SMS: Send reminder (optional)
```

---

## 💬 WORKFLOW 4: Chat Widget Integration

### Setup in n8n Chat Widget:
```javascript
// Add to your website
<script>
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = "YOUR_CRISP_ID";
  (function(){
    d = document;
    s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
</script>
```

### Webhook for chat logs:
```
Crisp → n8n Webhook → Supabase (log conversation)
```

---

## 📊 WORKFLOW 5: Daily Summary Report

### Trigger: Schedule (daily at 9 AM)

### Flow:
```
1. Schedule Trigger (daily 9 AM)
   ↓
2. Supabase: Count new bookings (yesterday)
   ↓
3. Supabase: Count new members
   ↓
4. Stripe: Get revenue (yesterday)
   ↓
5. Format: Create report
   ↓
6. Email: Send to team
   ↓
7. Notion: Create page with stats
```

---

## ⚡ WORKFLOW 6: Failed Payment Recovery

### Trigger: Stripe Webhook (invoice.payment_failed)

### Flow:
```
1. Stripe Webhook
   ↓
2. Supabase: Update membership status to 'past_due'
   ↓
3. Email: Send payment failed notification
   ↓
4. Wait: 3 days
   ↓
5. Email: Send final reminder
   ↓
6. If still failed: Cancel membership
```

---

## 🎯 WORKFLOW 7: Lead Capture from Chat

### Trigger: Chat conversation ends

### Flow:
```
1. Chat Widget (conversation complete)
   ↓
2. Extract: Email, name, interest
   ↓
3. Supabase: Create lead
   ↓
4. Notion: Add to leads database
   ↓
5. Email: Send follow-up
```

---

## 🔄 WORKFLOW 8: Sync to Notion (Real-time)

### Trigger: Supabase Database Change

### Flow:
```
1. Supabase Trigger (new booking/customer)
   ↓
2. Make.com Webhook
   ↓
3. Make.com: Format data
   ↓
4. Notion: Create/Update entry
```

---

## 📝 Setup Instructions

### 1. Install n8n
```bash
# Self-hosted (FREE)
npm install -g n8n
n8n start

# Or use cloud version ($20/month)
# https://n8n.io/cloud
```

### 2. Connect Services
- Add Supabase credentials
- Add Stripe API key
- Add email SMTP settings
- Add Slack webhook URL
- Add Notion API key (via Make.com)

### 3. Import Workflows
- Copy JSON templates
- Paste in n8n editor
- Configure credentials
- Test each workflow
- Activate

### 4. Set Up Webhooks
```
Supabase → n8n:     https://your-n8n.com/webhook/supabase
Stripe → n8n:       https://your-n8n.com/webhook/stripe
Website → n8n:      https://your-n8n.com/webhook/booking
Chat → n8n:         https://your-n8n.com/webhook/chat
```

---

## 🎨 Email Templates (HTML)

### Booking Confirmation
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2d3748; color: white; padding: 30px; text-align: center; }
    .content { padding: 30px; background: #f7fafc; }
    .button { background: #d4a574; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; display: inline-block; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Booking Confirmed!</h1>
    </div>
    <div class="content">
      <p>Dear {{customer_name}},</p>
      <p>Thank you for booking with Good Hands! We've received your request for <strong>{{service_type}}</strong>.</p>
      
      <h3>Booking Details:</h3>
      <ul>
        <li><strong>Service:</strong> {{service_type}}</li>
        <li><strong>Date:</strong> {{preferred_date}}</li>
        <li><strong>Time:</strong> {{preferred_time}}</li>
        <li><strong>Location:</strong> {{neighborhood}}</li>
      </ul>
      
      <p>Our concierge team is now matching you with the perfect professional. We'll send you confirmation and professional details within 24 hours.</p>
      
      <p style="text-align: center; margin: 30px 0;">
        <a href="https://goodhands.com/bookings/{{booking_id}}" class="button">View Booking</a>
      </p>
      
      <p>Questions? Simply reply to this email.</p>
      
      <p>Best regards,<br>The Good Hands Team</p>
    </div>
  </div>
</body>
</html>
```

### Welcome Email (New Member)
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%); color: white; padding: 40px; text-align: center; }
    .badge { background: #d4a574; color: white; padding: 8px 16px; border-radius: 20px; display: inline-block; margin: 10px 0; }
    .content { padding: 30px; background: #f7fafc; }
    .benefits { background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #d4a574; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to Good Hands!</h1>
      <div class="badge">{{membership_tier}} Member</div>
    </div>
    <div class="content">
      <p>Dear {{customer_name}},</p>
      
      <p>🎉 Congratulations! Your {{membership_tier}} membership is now active.</p>
      
      <div class="benefits">
        <h3>Your Benefits:</h3>
        <ul>
          <li>{{discount}}% discount on all services</li>
          <li>Priority booking access</li>
          <li>Exclusive experiences</li>
          <li>Dedicated concierge support</li>
          <li>Free cancellations</li>
        </ul>
      </div>
      
      <h3>Getting Started:</h3>
      <ol>
        <li><strong>Book Your First Service:</strong> Your discount applies automatically</li>
        <li><strong>Explore Member Perks:</strong> Check your member portal</li>
        <li><strong>Join Our Community:</strong> Connect with other members</li>
      </ol>
      
      <p style="text-align: center; margin: 30px 0;">
        <a href="https://goodhands.com/member-portal" class="button">Access Member Portal</a>
      </p>
      
      <p>Welcome to the Good Hands family! ✨</p>
      
      <p>Best regards,<br>The Good Hands Team</p>
    </div>
  </div>
</body>
</html>
```

---

## 🚀 Quick Start Checklist

- [ ] Sign up for n8n (cloud or self-host)
- [ ] Import workflow templates
- [ ] Add Supabase credentials
- [ ] Add Stripe API key
- [ ] Configure email SMTP
- [ ] Set up Slack webhooks
- [ ] Test each workflow
- [ ] Activate workflows
- [ ] Monitor execution logs

---

**Next Steps:** Once n8n is set up, all communication is automated! 🎉

