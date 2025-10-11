# 🔍 Troubleshooting Vercel Deployment Errors

## Common Errors and Solutions

### 1. "Application error: a client-side exception has occurred"

**Cause**: Usually happens when environment variables are missing or Supabase client fails to initialize.

**Solution**:
```bash
# Add these in Vercel Dashboard → Settings → Environment Variables:
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder-anon-key
NEXT_PUBLIC_SITE_URL=https://narratumio.vercel.app
```

### 2. Build succeeds but pages show errors

**Cause**: Runtime errors due to missing environment variables or authentication context issues.

**Check**:
1. Open browser console (F12) - what error do you see?
2. Check Vercel deployment logs
3. Verify environment variables are set

### 3. "supabaseUrl is required" error

**Cause**: Missing `NEXT_PUBLIC_SUPABASE_URL` environment variable.

**Solution**:
- Go to Vercel project → Settings → Environment Variables
- Add `NEXT_PUBLIC_SUPABASE_URL` with value `https://placeholder.supabase.co`
- Add `NEXT_PUBLIC_SUPABASE_ANON_KEY` with value `placeholder-anon-key`
- Redeploy

### 4. Pages load but authentication doesn't work

**Cause**: Placeholder Supabase credentials are being used.

**Solution**: Set up real Supabase project:
1. Go to https://supabase.com
2. Create new project
3. Get real credentials from Settings → API
4. Update Vercel environment variables
5. Redeploy

## 🔍 How to Check What Error You're Seeing

### Option 1: Browser Console
1. Open your Vercel site
2. Press F12 (or right-click → Inspect)
3. Go to "Console" tab
4. Look for red error messages
5. Take a screenshot and share the error

### Option 2: Vercel Deployment Logs
1. Go to Vercel Dashboard
2. Click on your project
3. Click on latest deployment
4. Click "View Function Logs" or "Runtime Logs"
5. Look for errors

### Option 3: Network Tab
1. Open browser DevTools (F12)
2. Go to "Network" tab
3. Refresh the page
4. Look for failed requests (red)
5. Click on them to see error details

## 🚨 Quick Fixes for Common Scenarios

### Scenario A: Homepage works, but login/settings pages error

**Fix**: Authentication context issue
```bash
# Verify these files exist:
- _good-hands/contexts/AuthContext.tsx
- _good-hands/lib/auth.ts
- _good-hands/app/layout.tsx (wrapped with AuthProvider)
```

### Scenario B: All pages show "Application error"

**Fix**: Missing environment variables
1. Add placeholder env vars in Vercel
2. Redeploy
3. Should work with placeholders

### Scenario C: Build fails

**Fix**: Check build logs for specific error
```bash
# Common build errors:
- Module not found → Missing import
- Type error → TypeScript issue
- Syntax error → Code syntax problem
```

## 📋 Diagnostic Checklist

Run through this checklist:

- [ ] Build succeeds in Vercel (green checkmark)
- [ ] Environment variables are set (all 3)
- [ ] Variables set for "Production" environment
- [ ] Latest deployment is the one with auth changes
- [ ] Browser console shows specific error message
- [ ] Runtime logs in Vercel show errors

## 🆘 What Error Are You Seeing?

Please check your deployment and tell me:

1. **What page shows the error?**
   - Homepage (/)
   - Login page (/login)
   - Settings page (/settings)
   - All pages

2. **What's the exact error message?**
   - From browser console (F12 → Console)
   - From Vercel logs
   - From the page itself

3. **Did the build succeed?**
   - Green checkmark in Vercel
   - Or red X (build failed)

4. **Are environment variables set?**
   - Check Vercel → Settings → Environment Variables
   - Should see 3 variables listed

## 🔧 Emergency Fix

If nothing else works, try this:

1. Go to Vercel Dashboard
2. Find your deployment
3. Click "..." menu → "Redeploy"
4. Check "Clear cache and retry"
5. Click "Redeploy"

This will do a fresh build with cleared cache.
