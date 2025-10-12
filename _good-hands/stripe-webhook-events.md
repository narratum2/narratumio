# Stripe Webhook Events Configuration

**Exact events to select when setting up your Stripe webhook**

---

## Webhook Endpoint URL

```
https://your-domain.vercel.app/api/stripe/webhook
```

**Replace `your-domain` with your actual Vercel domain**

---

## Events to Select

When creating your webhook in Stripe Dashboard → Developers → Webhooks, select these EXACT events:

### Checkout Events
```
✓ checkout.session.completed
```
**What it does:** Triggers when customer completes membership purchase

### Subscription Events
```
✓ customer.subscription.created
✓ customer.subscription.updated  
✓ customer.subscription.deleted
```
**What they do:**
- `created` - New membership subscription started
- `updated` - Membership plan changed or status updated
- `deleted` - Membership cancelled

### Invoice Events
```
✓ invoice.payment_failed
✓ invoice.payment_succeeded
```
**What they do:**
- `payment_failed` - Monthly payment failed, triggers recovery email
- `payment_succeeded` - Monthly payment successful, logs transaction

---

## Step-by-Step Setup

### 1. Go to Stripe Dashboard
```
https://dashboard.stripe.com/webhooks
```

### 2. Click "Add endpoint"

### 3. Enter endpoint URL
```
https://your-domain.vercel.app/api/stripe/webhook
```

### 4. Click "Select events"

### 5. Search and select each event:
- Type "checkout.session" → Check `checkout.session.completed`
- Type "customer.subscription" → Check all 3 subscription events
- Type "invoice.payment" → Check both payment events

### 6. Click "Add events"

### 7. Click "Add endpoint"

### 8. Copy the "Signing secret"
- Starts with `whsec_`
- This is your `STRIPE_WEBHOOK_SECRET`
- Save it securely!

---

## Verification

After setup, you can verify in Stripe Dashboard:

1. Go to Webhooks section
2. Click on your endpoint
3. Should show "Listening to 6 events"
4. Events listed should match above

---

## Testing Webhooks

### Option 1: Stripe Dashboard
1. Go to your webhook
2. Click "Send test webhook"
3. Select event type
4. Click "Send test webhook"

### Option 2: Stripe CLI (Local Testing)
```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward webhooks to localhost
stripe listen --forward-to localhost:3000/api/stripe/webhook

# In another terminal, trigger test
stripe trigger checkout.session.completed
```

### Option 3: Real Test Purchase
1. Go to your membership page
2. Use test card: `4242 4242 4242 4242`
3. Complete purchase
4. Check webhook delivery in Stripe Dashboard

---

## What Each Event Triggers

### `checkout.session.completed`
→ Creates membership record in Notion  
→ Sends to Make.com for welcome email  
→ Tags customer in Intercom as member  

### `customer.subscription.created`
→ Logs subscription details  
→ Updates customer status  

### `customer.subscription.updated`
→ Updates membership status in Notion  
→ Handles plan changes (upgrade/downgrade)  
→ Tracks cancellation requests  

### `customer.subscription.deleted`
→ Marks membership as cancelled in Notion  
→ Sends cancellation confirmation email  
→ Removes member tag in Intercom  

### `invoice.payment_failed`
→ Sends payment failure notification email  
→ Creates follow-up task  
→ Alerts admin  

### `invoice.payment_succeeded`
→ Logs successful payment  
→ Sends receipt email  
→ Updates payment history  

---

## Troubleshooting

### Webhook not firing?
- Check endpoint URL matches your domain exactly
- Verify webhook is enabled (not disabled)
- Check Vercel function logs for errors

### Events not showing in logs?
- Verify `STRIPE_WEBHOOK_SECRET` is correct in Vercel
- Check signing secret matches
- Try test webhook from Stripe Dashboard

### Getting signature verification errors?
- Double-check webhook secret in Vercel
- Make sure you copied the entire secret
- Verify no extra spaces or characters

---

## Monitoring

### Check webhook delivery:
1. Stripe Dashboard → Webhooks
2. Click your endpoint
3. View "Recent attempts"
4. Should show successful deliveries (2xx status)

### Check your logs:
1. Vercel Dashboard → Your Project
2. Deployments → Latest → Functions
3. Click on webhook function
4. View logs for webhook events

---

## Quick Reference

**Events to select:** 6 total
- 1 checkout event
- 3 subscription events  
- 2 invoice events

**Signing secret format:** `whsec_xxxxx`

**Endpoint URL:** `https://your-domain.vercel.app/api/stripe/webhook`

**After setup:**
1. Copy signing secret → `STRIPE_WEBHOOK_SECRET`
2. Add to Vercel environment variables
3. Redeploy
4. Test with test purchase

---

**Save this checklist:**

- [ ] Webhook endpoint created
- [ ] All 6 events selected
- [ ] Signing secret copied
- [ ] Added to Vercel as `STRIPE_WEBHOOK_SECRET`
- [ ] Site redeployed
- [ ] Test webhook sent successfully
- [ ] Real test purchase completed
- [ ] Webhook delivery confirmed in Stripe Dashboard

