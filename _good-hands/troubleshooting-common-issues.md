# Troubleshooting Common Issues

**Quick solutions to problems you might encounter**

---

## 🔴 Critical Issues

### Issue: "Stripe is not configured" Error

**Symptoms:**
- Membership purchase buttons show error
- Payment processing doesn't work
- Health check shows Stripe as "missing"

**Causes:**
1. `STRIPE_SECRET_KEY` not set in Vercel
2. Using wrong key (test vs live)
3. Variable name typo
4. Didn't redeploy after adding variable

**Solutions:**
```bash
# 1. Check variable exists in Vercel
Go to: vercel.com/dashboard → Settings → Environment Variables
Look for: STRIPE_SECRET_KEY

# 2. Verify it starts with sk_
Test: sk_test_... or sk_live_...

# 3. Check all 5 Stripe variables are set:
STRIPE_SECRET_KEY
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
STRIPE_WEBHOOK_SECRET
STRIPE_GOLD_PRICE_ID
STRIPE_PLATINUM_PRICE_ID

# 4. Redeploy
Deployments → Latest → ... → Redeploy
```

**Verification:**
```bash
curl https://your-domain.vercel.app/api/admin/health | jq '.integrations.stripe'
# Should show: "configured": true
```

---

### Issue: Notion Not Saving Bookings

**Symptoms:**
- Bookings submit successfully but don't appear in Notion
- Health check shows Notion as "partial" or "missing"
- Console shows Notion API errors

**Causes:**
1. Databases not shared with integration
2. Wrong database IDs
3. Integration token invalid
4. Database property names don't match

**Solutions:**

**Step 1: Verify Integration**
```
1. Go to notion.so/my-integrations
2. Check "Good Hands Website" integration exists
3. Copy the token (starts with secret_)
4. Verify it matches NOTION_API_KEY in Vercel
```

**Step 2: Share Databases**
```
For EACH database (Bookings, Customers, Memberships):
1. Open the database in Notion
2. Click "..." (top right)
3. Click "Connections"
4. Check "Good Hands Website" is listed
5. If not, add it and click "Confirm"
```

**Step 3: Verify Database IDs**
```
1. Open each database
2. Copy URL
3. Extract 32-character ID
4. Format: notion.so/workspace/[32-CHAR-ID]?v=xyz
5. Verify matches Vercel variable:
   NOTION_BOOKINGS_DB_ID
   NOTION_CUSTOMERS_DB_ID
   NOTION_MEMBERSHIPS_DB_ID
```

**Step 4: Test**
```bash
# Submit test booking
curl -X POST https://your-domain.vercel.app/api/bookings \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","phone":"+351912345678","service":"Hair Styling","date":"2025-01-25","time":"14:00"}'

# Check Notion Bookings database - should appear immediately
```

---

### Issue: Stripe Webhook Not Firing

**Symptoms:**
- Test membership purchase completes
- Money charged in Stripe
- But no entry in Notion Memberships
- Webhook shows "failed" status in Stripe Dashboard

**Causes:**
1. Webhook URL incorrect
2. Webhook secret doesn't match
3. Wrong events selected
4. Webhook disabled

**Solutions:**

**Step 1: Verify Webhook URL**
```
Stripe Dashboard → Developers → Webhooks

URL should be EXACTLY:
https://your-domain.vercel.app/api/stripe/webhook

Common mistakes:
❌ http:// (should be https://)
❌ www.your-domain (remove www if not used)
❌ /api/webhook (missing /stripe/)
❌ Trailing slash /api/stripe/webhook/
```

**Step 2: Check Events**
```
Webhook should listen to exactly these 6 events:
✓ checkout.session.completed
✓ customer.subscription.created
✓ customer.subscription.updated
✓ customer.subscription.deleted
✓ invoice.payment_failed
✓ invoice.payment_succeeded
```

**Step 3: Verify Secret**
```
1. Stripe → Webhooks → Click your endpoint
2. Click "Reveal" on Signing secret
3. Copy it (starts with whsec_)
4. Check Vercel has: STRIPE_WEBHOOK_SECRET=whsec_...
5. Must match EXACTLY
```

**Step 4: Test Webhook**
```
1. Stripe → Webhooks → Your endpoint
2. Click "Send test webhook"
3. Select "checkout.session.completed"
4. Click "Send test webhook"
5. Should show "200 OK" response
```

**Step 5: Check Logs**
```
Vercel → Deployments → Latest → Functions
Look for /api/stripe/webhook function
Check logs for errors
```

---

## 🟡 Common Issues

### Issue: Make.com Scenarios Not Executing

**Symptoms:**
- Booking submitted successfully
- Entry appears in Notion
- But Make.com scenario doesn't run
- No email sent

**Causes:**
1. Scenario not activated (toggled off)
2. Wrong webhook URL in Vercel
3. Scenario has errors
4. Module connections failed

**Solutions:**

**Step 1: Check Activation**
```
Make.com → Scenarios → Your scenario
Look at bottom left - should show "On" (green)
If "Off" (grey), click to toggle On
```

**Step 2: Verify Webhook URL**
```
Vercel Environment Variables:
MAKE_WEBHOOK_URL=https://hook.eu1.make.com/xxxxx

Should be BASE URL only, without scenario name
❌ Wrong: https://hook.eu1.make.com/xxxxx/booking-created
✅ Right: https://hook.eu1.make.com/xxxxx
```

**Step 3: Test Manually**
```
Make.com → Scenario → Right-click webhook → "Run this module only"
Enter test data
Check if subsequent modules execute
```

**Step 4: Check Execution History**
```
Make.com → Scenarios → Your scenario → History tab
Look for recent executions
Click to see details
Check which module failed
```

**Step 5: Verify Connections**
```
Each module should show "Connected"
If any show disconnected:
1. Click module
2. Click "Change" next to connection
3. Reauthorize
```

---

### Issue: Customer.io Emails Not Sending

**Symptoms:**
- Bookings work
- Notion updates work
- But confirmation emails not arriving
- Not in spam either

**Causes:**
1. Customer not identified
2. Campaign not activated
3. API credentials wrong
4. Customer opted out

**Solutions:**

**Step 1: Check Customer Identification**
```
Customer.io → Data & Analytics → People
Search for customer email
Should appear after booking
If not, API key is wrong
```

**Step 2: Activate Campaign**
```
Customer.io → Campaigns → Your campaign
Status should be "Live" (not Draft or Paused)
If not live, click "Activate"
```

**Step 3: Check Event Tracking**
```
Customer.io → People → Search email → Timeline
Should show "booking_created" event
If missing, event not being tracked
```

**Step 4: Verify API Keys**
```
Vercel → Environment Variables
CUSTOMERIO_SITE_ID=xxxxx (no secret_ prefix)
CUSTOMERIO_API_KEY=xxxxx

Check Customer.io → Settings → API Credentials
Must match exactly
```

**Step 5: Check Campaign Trigger**
```
Customer.io → Campaign → Workflow
Trigger should be: Event "booking_created"
Not: Segment, Date, or Manual
```

---

### Issue: Environment Variables Not Working

**Symptoms:**
- Added variables to Vercel
- Redeployed site
- Still getting "not configured" errors
- Health check shows "missing"

**Causes:**
1. Didn't select all environments
2. Typo in variable name
3. Didn't actually redeploy
4. Using preview deployment, not production

**Solutions:**

**Step 1: Check All Environments Selected**
```
When adding variable, must check:
☑ Production
☑ Preview
☑ Development

If any unchecked, variable won't work in that environment
```

**Step 2: Verify Variable Names EXACTLY**
```
Case-sensitive! Must be EXACT:
✓ STRIPE_SECRET_KEY
✗ stripe_secret_key
✗ STRIPE_SECRET_KEY (extra space)
✗ STRIPE_SECRET_KEY_ (trailing underscore)
```

**Step 3: Force Redeploy**
```
1. Vercel → Deployments
2. Click "..." on latest deployment
3. Click "Redeploy"
4. DO NOT use cached build
5. Wait for completion (~2 min)
```

**Step 4: Check Production Domain**
```
Make sure you're testing on production domain:
✓ https://your-domain.com
✗ https://preview-xxx.vercel.app (preview branch)
```

**Step 5: Clear Cache**
```
Browser: Hard refresh (Cmd+Shift+R or Ctrl+Shift+R)
API: Add ?nocache=1 to URL
```

---

## 🟢 Minor Issues

### Issue: Intercom Widget Not Appearing

**Causes:**
- App ID not set
- Script blocked by ad blocker
- Wrong App ID format

**Solutions:**
```
1. Check NEXT_PUBLIC_INTERCOM_APP_ID is set
2. Verify starts with app_id (no secret_ prefix)
3. Disable ad blockers
4. Check browser console for errors
5. Hard refresh page
```

---

### Issue: Test Card Not Working

**Causes:**
- Using wrong test card number
- Using live key instead of test key
- Card expired

**Solutions:**
```
Use Stripe test cards:
✓ Success: 4242 4242 4242 4242
✓ Decline: 4000 0000 0000 0002
✓ 3D Secure: 4000 0025 0000 3155

Any future expiry date, any CVC
Must use sk_test_ keys, not sk_live_
```

---

### Issue: Coupon Not Validating

**Causes:**
- Coupon doesn't exist in Stripe
- Coupon expired
- Max redemptions reached
- Coupon for wrong product

**Solutions:**
```
1. Check coupon exists in Stripe Dashboard
2. Verify it's active (not archived)
3. Check expiry date
4. Check redemption limits
5. Test with different coupon
```

---

## 🔧 Diagnostic Commands

### Check All Integrations
```bash
curl https://your-domain.vercel.app/api/admin/health | jq '.'
```

### Test Booking API
```bash
curl -X POST https://your-domain.vercel.app/api/bookings \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","phone":"+351912345678","service":"Hair Styling","date":"2025-01-25","time":"14:00"}' | jq '.'
```

### Test Stripe Coupon
```bash
curl -X POST https://your-domain.vercel.app/api/stripe/validate-coupon \
  -H "Content-Type: application/json" \
  -d '{"code":"YOUR_CODE"}' | jq '.'
```

### Check Vercel Logs
```
vercel logs --since 1h
```

---

## 📞 Where to Check Logs

### Vercel Function Logs
```
vercel.com/dashboard → Project → Deployments → Latest → Functions
Click on function name to see logs
```

### Stripe Webhook Logs
```
dashboard.stripe.com/webhooks → Your endpoint → Events
Shows delivery attempts and responses
```

### Make.com Execution History
```
make.com → Scenarios → Your scenario → History
Shows each execution with details
```

### Customer.io Activity Log
```
customer.io → People → Search email → Activity
Shows all events and emails sent
```

### Notion API Logs
```
notion.so/my-integrations → Your integration → Usage
Shows API call history
```

---

## 🆘 Still Stuck?

### Quick Diagnosis Steps:
1. Run health check
2. Check Vercel function logs
3. Verify all environment variables
4. Test with curl commands
5. Check each service's dashboard

### Common Patterns:
- If ONE integration fails → Check that integration's credentials
- If ALL integrations fail → Check Vercel deployment
- If intermittent → Check rate limits or network issues
- If worked before → Check for expired tokens/credentials

---

**Most issues are solved by:**
1. Verifying environment variables
2. Redeploying after changes
3. Checking service dashboards
4. Reading error messages carefully

**Save this file for quick reference during setup!**

