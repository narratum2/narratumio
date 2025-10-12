# Customer.io Email Templates

**Copy these templates when creating your Customer.io campaigns**

---

## Email 1: Booking Confirmation

**Campaign Name:** `booking_created`  
**Trigger:** Event `booking_created`  
**Send:** Immediately

### Subject Line:
```
✅ Your booking is confirmed - {{customer.name}}
```

### Email Body (HTML):
```html
<h1>Booking Confirmed! 🎉</h1>

<p>Hi {{customer.name}},</p>

<p>We're excited to confirm your beauty appointment with Good Hands.</p>

<div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <h2 style="margin-top: 0;">Your Appointment Details</h2>
  <p><strong>Service:</strong> {{event.service}}</p>
  <p><strong>Date:</strong> {{event.date}}</p>
  <p><strong>Time:</strong> {{event.time}}</p>
  <p><strong>Location:</strong> {{event.neighborhood}}, Lisbon</p>
</div>

<h3>What Happens Next?</h3>
<ol>
  <li>Our concierge team will match you with the perfect professional</li>
  <li>You'll receive professional details 24 hours before your appointment</li>
  <li>The professional will arrive at your chosen location</li>
</ol>

<p><strong>Need to make changes?</strong><br>
Reply to this email or call us at +351 XXX XXX XXX</p>

<p style="margin-top: 40px;">
  <a href="https://goodhands.com/my-bookings" style="background: #000; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 6px;">View My Bookings</a>
</p>

<p>Looking forward to pampering you!<br>
The Good Hands Team</p>

<hr style="margin: 40px 0;">
<p style="font-size: 12px; color: #666;">
  Good Hands Concierge · Lisbon, Portugal<br>
  <a href="https://goodhands.com">goodhands.com</a>
</p>
```

---

## Email 2: Membership Welcome (Gold)

**Campaign Name:** `membership_created`  
**Trigger:** Event `membership_created` where `tier = "Gold"`  
**Send:** Immediately

### Subject Line:
```
🌟 Welcome to Gold Membership!
```

### Email Body:
```html
<h1>Welcome to Good Hands Gold! 🌟</h1>

<p>Hi {{customer.name}},</p>

<p>Thank you for joining Good Hands Gold membership. You now have access to exclusive benefits and priority service.</p>

<div style="background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); padding: 30px; border-radius: 12px; margin: 20px 0; color: #000;">
  <h2 style="margin-top: 0;">Your Gold Benefits</h2>
  <ul style="list-style: none; padding: 0;">
    <li>✅ 15% discount on all services</li>
    <li>✅ Priority booking access</li>
    <li>✅ Free service upgrades</li>
    <li>✅ Quarterly exclusive experience</li>
    <li>✅ Free cancellations (24h notice)</li>
    <li>✅ Members-only content</li>
    <li>✅ Birthday month treat</li>
  </ul>
</div>

<h3>Your Discount is Active Now!</h3>
<p>Next time you book, your 15% discount will be applied automatically. No codes needed!</p>

<h3>Membership Details</h3>
<p><strong>Plan:</strong> Gold Membership<br>
<strong>Price:</strong> €49/month<br>
<strong>Next billing date:</strong> {{subscription.next_billing_date}}</p>

<p style="margin-top: 40px;">
  <a href="https://goodhands.com/book" style="background: #FFD700; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Book Your First Service</a>
</p>

<p><a href="https://billing.stripe.com/p/login/test_xxxxx">Manage Membership</a></p>

<p>Welcome to the family!<br>
The Good Hands Team</p>
```

---

## Email 3: Membership Welcome (Platinum)

**Campaign Name:** `membership_created_platinum`  
**Trigger:** Event `membership_created` where `tier = "Platinum"`  
**Send:** Immediately

### Subject Line:
```
💎 Welcome to Platinum Membership - VIP Access!
```

### Email Body:
```html
<h1>Welcome to Platinum! 💎</h1>

<p>Hi {{customer.name}},</p>

<p>Welcome to the ultimate beauty experience. As a Platinum member, you have VIP access to our finest services and professionals.</p>

<div style="background: linear-gradient(135deg, #E5E4E2 0%, #C0C0C0 100%); padding: 30px; border-radius: 12px; margin: 20px 0; color: #000;">
  <h2 style="margin-top: 0;">Your Platinum Benefits</h2>
  <ul style="list-style: none; padding: 0;">
    <li>💎 25% discount on all services</li>
    <li>💎 VIP priority booking</li>
    <li>💎 Complimentary service upgrades</li>
    <li>💎 Monthly exclusive experience</li>
    <li>💎 Free cancellations (2h notice)</li>
    <li>💎 Dedicated concierge line</li>
    <li>💎 Annual beauty consultation</li>
    <li>💎 Partner hotel spa benefits</li>
    <li>💎 Priority professional selection</li>
    <li>💎 Exclusive event invitations</li>
  </ul>
</div>

<h3>Your VIP Discount is Active!</h3>
<p>Enjoy 25% off every booking. Your discount applies automatically.</p>

<h3>Dedicated Support</h3>
<p>As a Platinum member, you have access to our concierge line:<br>
<strong>WhatsApp:</strong> +351 XXX XXX XXX<br>
<strong>Email:</strong> platinum@goodhands.com</p>

<p style="margin-top: 40px;">
  <a href="https://goodhands.com/platinum-experiences" style="background: #C0C0C0; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">View Exclusive Experiences</a>
</p>

<p>Your luxury journey begins now!<br>
The Good Hands Platinum Team</p>
```

---

## Email 4: Booking Reminder (24h)

**Campaign Name:** `booking_reminder_24h`  
**Trigger:** Scheduled 24 hours before appointment  
**Send:** Once, 24 hours before

### Subject Line:
```
⏰ Tomorrow: Your {{event.service}} appointment
```

### Email Body:
```html
<h1>Your appointment is tomorrow! ⏰</h1>

<p>Hi {{customer.name}},</p>

<p>This is a friendly reminder about your upcoming beauty appointment.</p>

<div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <h2 style="margin-top: 0;">Tomorrow's Appointment</h2>
  <p><strong>Service:</strong> {{event.service}}</p>
  <p><strong>Date:</strong> {{event.date}}</p>
  <p><strong>Time:</strong> {{event.time}}</p>
  <p><strong>Location:</strong> {{event.neighborhood}}, Lisbon</p>
  <p><strong>Professional:</strong> {{event.professional_name}}</p>
</div>

<h3>Preparation Tips</h3>
<ul>
  <li>Please be ready 5 minutes before appointment time</li>
  <li>Have a clean, comfortable space prepared</li>
  <li>Wear comfortable clothing</li>
</ul>

<p><strong>Need to reschedule?</strong><br>
{{#if customer.membership_tier}}
Free cancellation up to {{cancellation_window}}!
{{else}}
Please contact us at least 24 hours in advance.
{{/if}}</p>

<p>See you tomorrow!<br>
The Good Hands Team</p>
```

---

## Email 5: Review Request

**Campaign Name:** `review_request`  
**Trigger:** 24 hours after appointment  
**Send:** Once, 24 hours after

### Subject Line:
```
How was your experience? Share your thoughts 💭
```

### Email Body:
```html
<h1>How did we do? 🌟</h1>

<p>Hi {{customer.name}},</p>

<p>We hope you loved your {{event.service}} experience! We'd be grateful if you could share your feedback.</p>

<div style="text-align: center; margin: 40px 0;">
  <p style="font-size: 18px; margin-bottom: 20px;">Rate your experience:</p>
  <div>
    <a href="https://goodhands.com/review?rating=5&booking={{event.id}}" style="font-size: 32px; text-decoration: none; margin: 0 5px;">⭐</a>
    <a href="https://goodhands.com/review?rating=4&booking={{event.id}}" style="font-size: 32px; text-decoration: none; margin: 0 5px;">⭐</a>
    <a href="https://goodhands.com/review?rating=3&booking={{event.id}}" style="font-size: 32px; text-decoration: none; margin: 0 5px;">⭐</a>
    <a href="https://goodhands.com/review?rating=2&booking={{event.id}}" style="font-size: 32px; text-decoration: none; margin: 0 5px;">⭐</a>
    <a href="https://goodhands.com/review?rating=1&booking={{event.id}}" style="font-size: 32px; text-decoration: none; margin: 0 5px;">⭐</a>
  </div>
</div>

<p style="text-align: center;">
  <a href="https://goodhands.com/review?booking={{event.id}}" style="background: #000; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 6px;">Write a Review</a>
</p>

{{#if customer.membership_tier}}
<div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 30px 0;">
  <h3 style="margin-top: 0;">Book Again & Save!</h3>
  <p>As a {{customer.membership_tier}} member, you saved {{savings_amount}} on this service. Ready for your next pampering session?</p>
  <p><a href="https://goodhands.com/book">Book Your Next Appointment</a></p>
</div>
{{/if}}

<p>Thank you for choosing Good Hands!<br>
The Good Hands Team</p>
```

---

## Email 6: Payment Failed

**Campaign Name:** `payment_failed`  
**Trigger:** Event `payment_failed`  
**Send:** Immediately

### Subject Line:
```
⚠️ Payment issue with your Good Hands membership
```

### Email Body:
```html
<h1>Payment Failed</h1>

<p>Hi {{customer.name}},</p>

<p>We were unable to process your membership payment for Good Hands {{customer.membership_tier}} membership.</p>

<div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 20px; margin: 20px 0;">
  <h3 style="margin-top: 0;">Payment Details</h3>
  <p><strong>Amount:</strong> €{{event.amount}}<br>
  <strong>Invoice:</strong> {{event.invoice_id}}<br>
  <strong>Attempt:</strong> {{event.attempt}} of 3</p>
</div>

<h3>What Happens Next?</h3>
<p>Don't worry! We'll automatically retry the payment in 3 days. Your membership benefits remain active during this time.</p>

<h3>Update Your Payment Method</h3>
<p>To avoid any interruption in service, please update your payment information:</p>

<p style="margin-top: 20px;">
  <a href="{{event.update_payment_url}}" style="background: #ffc107; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Update Payment Method</a>
</p>

<p>If you have any questions, please contact us at support@goodhands.com</p>

<p>Thank you,<br>
The Good Hands Team</p>
```

---

## Email 7: Abandoned Booking Recovery

**Campaign Name:** `abandoned_booking`  
**Trigger:** User visited booking page but didn't complete  
**Send:** 24 hours after abandonment

### Subject Line:
```
Still thinking about it? Here's 10% off! 🎁
```

### Email Body:
```html
<h1>We saved your booking! 🎁</h1>

<p>Hi there,</p>

<p>We noticed you were interested in booking a {{event.service}} service but didn't complete your reservation.</p>

<p>We'd love to help you schedule your pampering session! As a thank you for considering us, here's a special offer:</p>

<div style="background: #000; color: #fff; padding: 30px; border-radius: 12px; text-align: center; margin: 30px 0;">
  <h2 style="color: #fff; margin-top: 0;">10% OFF Your First Booking</h2>
  <p style="font-size: 24px; font-weight: bold; margin: 20px 0;">FIRST10</p>
  <p style="font-size: 14px;">Valid for 7 days</p>
</div>

<p style="text-align: center;">
  <a href="https://goodhands.com/book?service={{event.service}}&coupon=FIRST10" style="background: #FFD700; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Complete My Booking</a>
</p>

<h3>Why Choose Good Hands?</h3>
<ul>
  <li>✨ Vetted, professional beauty experts</li>
  <li>🏠 Service at your location</li>
  <li>⏰ Flexible scheduling</li>
  <li>💯 Quality guaranteed</li>
</ul>

<p>Questions? Just reply to this email!</p>

<p>The Good Hands Team</p>
```

---

## Campaign Settings

### Sending Best Practices:

**Booking Confirmation:** Send immediately  
**Membership Welcome:** Send immediately  
**Booking Reminder:** 24 hours before  
**Review Request:** 24 hours after  
**Payment Failed:** Immediately  
**Abandoned Booking:** 24 hours after abandonment  

### Unsubscribe:
Add to all emails:
```html
<p style="font-size: 12px; color: #999; margin-top: 40px;">
  <a href="{{unsubscribe_url}}">Unsubscribe</a> from these emails
</p>
```

---

**Copy these templates into your Customer.io account and customize with your branding!**

