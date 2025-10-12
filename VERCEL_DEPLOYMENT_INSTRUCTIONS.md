# Vercel Deployment Instructions

## Current Issue
Vercel is currently deploying the **root static site** (index.html) instead of the **Next.js app** located in `_good-hands/`.

## Solution: Configure Vercel Dashboard

You need to update the Vercel project settings in the **Vercel Dashboard**. Here's how:

### Step 1: Go to Vercel Dashboard
1. Log in to [vercel.com](https://vercel.com)
2. Select your **narratumio** project (or whatever it's named)

### Step 2: Update Project Settings
1. Click **Settings** (top navigation)
2. Go to **General** section
3. Find **Root Directory** setting
4. Click **Edit**
5. Enter: `_good-hands`
6. Click **Save**

### Step 3: Update Build Settings (if needed)
While still in Settings, go to **Build & Development Settings**:

- **Framework Preset**: Should auto-detect as **Next.js** after setting root directory
- **Build Command**: `npm run build` (or leave empty for default)
- **Output Directory**: `.next` (or leave empty for default)
- **Install Command**: `npm install` (or leave empty for default)

### Step 4: Redeploy
1. Go to **Deployments** tab
2. Click the **⋯** menu on the latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger automatic deployment

## Verification

After redeploying, your site should show:
- ✅ Next.js app from `_good-hands/`
- ✅ Modern React UI with Tailwind styling
- ✅ All pages working: `/about`, `/services`, `/journal`, etc.

Instead of:
- ❌ Static HTML site from root `index.html`

## Alternative: Use Vercel CLI (Optional)

If you prefer command line:

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Link your project
cd /Users/pascalfrey/Repo/narratumio
vercel link

# Deploy with root directory specified
vercel --prod --cwd _good-hands
```

## Why This Happened

Your repository has **two sites**:
1. **Root directory**: Static HTML site (for GitHub Pages)
2. **_good-hands/ directory**: Next.js app (for Vercel)

Vercel was deploying the root by default. Setting the root directory to `_good-hands` tells Vercel to deploy the Next.js app instead.

## Current Status

- ✅ GitHub Pages: Building successfully (static site)
- ⏳ Vercel: Needs root directory configuration
- ✅ Code: All latest changes committed and pushed

---

**Last Updated**: October 12, 2025

