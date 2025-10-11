# 🚨 Good Hands - Error Debugging Guide

## If Your Vercel Deployment Shows Errors

### Step 1: Access the Diagnostic Page

Visit this URL to see what's wrong:
```
https://narratumio.vercel.app/diagnostic
```

This page will show you:
- ✅ Which environment variables are set
- ✅ If Supabase is connecting
- ✅ Exact error messages
- ✅ System status

### Step 2: Check Environment Variables

**Go to Vercel Dashboard:**
1. https://vercel.com/dashboard
2. Click your project
3. Settings → Environment Variables
4. Make sure these 3 are set:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder-anon-key
NEXT_PUBLIC_SITE_URL=https://narratumio.vercel.app
```

**Important**: Set them for **ALL environments** (Production, Preview, Development)

### Step 3: Redeploy

After adding environment variables:
1. Go to Deployments tab
2. Click "..." on latest deployment
3. Click "Redeploy"
4. Wait for build to complete
5. Visit `/diagnostic` again

## Most Common Errors

### Error 1: "Application error: a client-side exception has occurred"

**What it means**: Runtime error, usually missing env vars

**Fix**:
```bash
# Add in Vercel Settings → Environment Variables:
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder-anon-key
```

Then redeploy.

### Error 2: "supabaseUrl is required"

**What it means**: `NEXT_PUBLIC_SUPABASE_URL` is not set

**Fix**: Add the environment variable and redeploy

### Error 3: Homepage works, but /login and /settings error

**What it means**: AuthContext is working, but Supabase placeholder values may cause issues

**Fix**: Either:
- Option A: Keep placeholders (pages will load but auth won't work)
- Option B: Set up real Supabase project (auth will work)

### Error 4: "Hydration failed"

**What it means**: Server and client rendering mismatch

**Fix**: Already handled in code, but if you see this:
1. Clear Vercel cache
2. Redeploy
3. Clear browser cache

## Quick Test Checklist

After deploying, test these pages:

- [ ] Homepage (/) - Should load fine
- [ ] Login (/login) - Should show login form
- [ ] Settings (/settings) - Should redirect to login if not authenticated
- [ ] Diagnostic (/diagnostic) - Should show system status

## Get Help

If errors persist after following this guide:

1. Visit `/diagnostic` and take screenshot
2. Check browser console (F12 → Console) and screenshot errors
3. Check Vercel Runtime Logs and copy error messages
4. Share these with your developer

## Environment Variable Template

Copy this and fill in your values:

```bash
# For placeholder/testing (allows deployment but no real auth)
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder-anon-key
NEXT_PUBLIC_SITE_URL=https://narratumio.vercel.app

# For production (real authentication)
# Get these from https://supabase.com → Your Project → Settings → API
NEXT_PUBLIC_SUPABASE_URL=https://yourproject.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_SITE_URL=https://narratumio.vercel.app
```

## Still Having Issues?

The diagnostic page will tell you exactly what's wrong. Visit:
**https://narratumio.vercel.app/diagnostic**
