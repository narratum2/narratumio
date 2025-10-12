# Notion Database Schemas - Good Hands

**Copy these exactly when creating your Notion databases**

---

## Database 1: Bookings

**Create new database page in Notion named: "Bookings"**

### Properties to Add:

1. **Customer Name** 
   - Type: Title
   - Required: Yes

2. **Customer Email**
   - Type: Email
   - Required: Yes

3. **Service**
   - Type: Select
   - Options:
     - Hair Styling
     - Spa Treatments
     - Makeup & Beauty
     - Nails & Manicure
     - Wellness & Massage

4. **Neighborhood**
   - Type: Select
   - Options:
     - Chiado
     - Príncipe Real
     - Alfama
     - Baixa
     - Belém
     - Avenida da Liberdade
     - Cascais
     - Sintra

5. **Date**
   - Type: Date
   - Include time: Yes

6. **Status**
   - Type: Select
   - Options:
     - Pending
     - Confirmed
     - Completed
     - Cancelled

7. **Notes**
   - Type: Text
   - Long text: Yes

8. **UTM Source**
   - Type: Text

9. **UTM Medium**
   - Type: Text

10. **UTM Campaign**
    - Type: Text

11. **Created Date**
    - Type: Date
    - Include time: Yes

---

## Database 2: Customers

**Create new database page in Notion named: "Customers"**

### Properties to Add:

1. **Name**
   - Type: Title
   - Required: Yes

2. **Email**
   - Type: Email
   - Required: Yes

3. **Phone**
   - Type: Phone number

4. **Source**
   - Type: Text

5. **Membership Tier**
   - Type: Select
   - Options:
     - None
     - Gold
     - Platinum

6. **Status**
   - Type: Select
   - Options:
     - New
     - Active
     - Inactive
     - VIP

7. **Last Booking Date**
   - Type: Date

8. **Created Date**
   - Type: Date
   - Include time: Yes

9. **UTM Source**
   - Type: Text

10. **UTM Campaign**
    - Type: Text

---

## Database 3: Memberships

**Create new database page in Notion named: "Memberships"**

### Properties to Add:

1. **Customer Email**
   - Type: Email
   - Required: Yes

2. **Membership Type**
   - Type: Select
   - Options:
     - Gold
     - Platinum

3. **Stripe Subscription ID**
   - Type: Text

4. **Stripe Customer ID**
   - Type: Text

5. **Status**
   - Type: Select
   - Options:
     - Active
     - Cancelled
     - Past Due

6. **Monthly Price**
   - Type: Number
   - Format: Euro (€)

7. **Start Date**
   - Type: Date
   - Include time: Yes

---

## Database 4: Conversations (Optional)

**Create new database page in Notion named: "Conversations"**

### Properties to Add:

1. **Message**
   - Type: Title

2. **Customer Email**
   - Type: Email

3. **Customer Name**
   - Type: Text

4. **Source**
   - Type: Select
   - Options:
     - Website
     - Intercom
     - Email
     - Phone

5. **Full Message**
   - Type: Text
   - Long text: Yes

6. **Timestamp**
   - Type: Date
   - Include time: Yes

---

## After Creating All Databases:

### Step 1: Share with Integration
For EACH database:
1. Click the "..." menu (top right)
2. Select "Connections"
3. Add your "Good Hands Website" integration
4. Click "Confirm"

### Step 2: Copy Database IDs
For EACH database:
1. Open the database in Notion
2. Look at the URL in your browser
3. The database ID is the 32-character string after the workspace name
4. Format: `https://notion.so/workspace/DATABASE_ID?v=...`
5. Copy just the DATABASE_ID part (32 characters, mix of letters and numbers)

Example URL:
```
https://www.notion.so/myworkspace/abc123def456ghi789jkl012mno345pq?v=xyz
                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                  This is your database ID
```

### Step 3: Test
Once you've added the IDs to Vercel and redeployed, test with:
```
curl https://your-domain.vercel.app/api/admin/health
```

Should show all Notion databases as "configured"

---

## Quick Reference Card

**Copy this for easy reference:**

```
Bookings DB:
- 11 properties
- Main: Customer Name, Email, Service, Date, Status

Customers DB:
- 10 properties  
- Main: Name, Email, Phone, Membership Tier, Status

Memberships DB:
- 7 properties
- Main: Customer Email, Type, Stripe IDs, Status

All databases need:
✓ Created in Notion
✓ Properties added
✓ Shared with integration
✓ Database ID copied
✓ ID added to Vercel
```

