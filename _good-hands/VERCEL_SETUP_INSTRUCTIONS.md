# 🚀 Vercel Setup Instructions for Good Hands

## ⚠️ IMPORTANT: Root Directory Configuration

Your repository has two projects:
- **Root directory**: Static Narratum.io site
- **`_good-hands/` directory**: Good Hands Next.js app

Vercel needs to be configured to deploy from the `_good-hands` directory.

## Option 1: Via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** tab
4. Click **General** in the left sidebar
5. Find **Root Directory** section
6. Set: `_good-hands`
7. Click **Save**
8. Go to **Deployments** → **Redeploy**

## Option 2: Via Project Settings

If you see a "Configure Project" step during import:

1. **Framework Preset**: Next.js
2. **Root Directory**: `_good-hands`
3. **Build Command**: `npm run build`
4. **Output Directory**: `.next`
5. **Install Command**: `npm install`

## Option 3: Create Separate Vercel Project

If the above doesn't work, create a new Vercel project:

1. Go to https://vercel.com/new
2. Import your GitHub repo
3. During setup, set **Root Directory** to `_good-hands`
4. Deploy

## Environment Variables

After configuring the root directory, add these environment variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder-anon-key
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
```

**Select**: Production, Preview, Development (all three)

## Verify Configuration

After redeploying with the correct root directory:

1. Visit: `https://your-project.vercel.app`
   - Should show Good Hands homepage (not Narratum.io)

2. Visit: `https://your-project.vercel.app/diagnostic`
   - Should show system diagnostic page

3. Visit: `https://your-project.vercel.app/login`
   - Should show login form

## Current Issue

Right now, Vercel is deploying the root directory (Narratum.io static site) instead of the `_good-hands` Next.js app.

**Status**: ❌ Wrong directory being deployed
**Fix**: Set Root Directory to `_good-hands` in Vercel settings

## Quick Test

After changing the root directory setting:
```bash
# Your site should show "Good Hands — Beauty Concierge" 
# NOT "Narratum | Strategic Infrastructure"
```

## Need Help?

The root `vercel.json` has been updated to point to `_good-hands`, but you may still need to:
1. Set Root Directory in Vercel Dashboard
2. Or create a new Vercel project with correct root directory
