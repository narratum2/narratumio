# 🚀 How to Fix Your Vercel Deployment Errors

## 🎯 **What You Need to Do RIGHT NOW**

### Step 1: Visit Your Diagnostic Page
Go to: **https://narratumio.vercel.app/diagnostic**

This page will show you EXACTLY what's wrong with:
- Environment variables status
- Supabase connection
- Real-time error messages

### Step 2: Add Missing Environment Variables

**Go to Vercel:** https://vercel.com/dashboard

1. Click on your `narratumio` project
2. Click **Settings** tab
3. Click **Environment Variables** in left sidebar
4. Add these 3 variables:

```bash
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://placeholder.supabase.co
Environments: ✅ Production ✅ Preview ✅ Development

Name: NEXT_PUBLIC_SUPABASE_ANON_KEY  
Value: placeholder-anon-key
Environments: ✅ Production ✅ Preview ✅ Development

Name: NEXT_PUBLIC_SITE_URL
Value: https://narratumio.vercel.app
Environments: ✅ Production ✅ Preview ✅ Development
```

### Step 3: Redeploy

1. Go to **Deployments** tab
2. Find the latest deployment
3. Click the **"..."** menu (three dots)
4. Click **"Redeploy"**
5. ✅ Check **"Use existing Build Cache"** OFF (clear cache)
6. Click **"Redeploy"**
7. Wait 2-3 minutes for build to complete

### Step 4: Test Again

After redeployment:
1. Visit https://narratumio.vercel.app
2. Visit https://narratumio.vercel.app/diagnostic
3. Check if all shows ✓ green checkmarks

## 📊 What Each Page Should Show

### Homepage (/)
- ✅ Should load without errors
- ✅ Navbar shows "Sign In" link
- ✅ All sections visible

### Login Page (/login)
- ✅ Should show login form
- ✅ Can toggle between Sign In / Sign Up
- ⚠️ Won't actually work until you set up real Supabase

### Settings Page (/settings)
- ✅ Should redirect to /login (if not logged in)
- ✅ No errors shown

### Diagnostic Page (/diagnostic)
- ✅ All environment variables show "SET"
- ✅ Supabase client initialized
- ⚠️ Connection may fail (that's OK with placeholders)

## 🔴 Common Error Messages & Fixes

| Error | Fix |
|-------|-----|
| "Application error" | Add environment variables → Redeploy |
| "supabaseUrl is required" | Add `NEXT_PUBLIC_SUPABASE_URL` → Redeploy |
| "window is not defined" | Already fixed in code, just redeploy |
| Page loads but blank | Check browser console (F12) for errors |
| Login doesn't work | Expected with placeholders, set up real Supabase |

## 🎨 Visual Guide

```
Vercel Dashboard Flow:
├── Login to Vercel
├── Find "narratumio" project
├── Settings Tab
│   └── Environment Variables
│       ├── Add NEXT_PUBLIC_SUPABASE_URL
│       ├── Add NEXT_PUBLIC_SUPABASE_ANON_KEY
│       └── Add NEXT_PUBLIC_SITE_URL
├── Deployments Tab
│   └── Redeploy (clear cache)
└── Wait for build ✅
```

## ⚡ Quick Commands Reference

### Check Browser Console
```
1. Open your Vercel site
2. Press F12 (or right-click → Inspect)  
3. Click "Console" tab
4. Look for red errors
```

### Check Network Requests
```
1. Press F12
2. Click "Network" tab
3. Refresh page
4. Look for red/failed requests
```

### Check Vercel Logs
```
1. Vercel Dashboard
2. Your project
3. Latest deployment
4. "View Function Logs" button
```

## 🆘 If Still Not Working

1. **Screenshot** the diagnostic page (/diagnostic)
2. **Screenshot** browser console errors (F12 → Console)
3. **Copy** the exact error message you see
4. **Check** if environment variables are really saved in Vercel

## ✅ Success Checklist

After following all steps:

- [ ] Environment variables are set in Vercel (all 3)
- [ ] Redeployed with cache cleared
- [ ] Deployment shows green checkmark
- [ ] Homepage loads without errors
- [ ] /diagnostic page shows system status
- [ ] /login page shows the form
- [ ] /settings redirects to /login (if not logged in)

## 📝 Next Steps (After Errors Fixed)

Once your site loads without errors:

1. **Optional**: Set up real Supabase for working authentication
   - Go to https://supabase.com
   - Create a project
   - Get real credentials
   - Update Vercel environment variables
   - Redeploy

2. **Test** authentication flow
3. **Configure** email templates in Supabase
4. **Add** custom domain (optional)

---

**TL;DR**: Add 3 environment variables in Vercel → Redeploy with cleared cache → Check /diagnostic page
