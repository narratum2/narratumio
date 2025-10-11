# Vercel Deployment Guide

## Required Environment Variables

Before deploying to Vercel, you **MUST** set up the following environment variables in your Vercel project settings:

### 1. Supabase Configuration (Required)

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key-here
```

To get these values:
1. Go to https://supabase.com
2. Create a new project (or select existing)
3. Go to Settings → API
4. Copy the "Project URL" for `NEXT_PUBLIC_SUPABASE_URL`
5. Copy the "anon/public" key for `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 2. Site URL (Required)

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

This should be your actual Vercel deployment URL or custom domain.

### 3. Optional: Intercom (Optional)

```
NEXT_PUBLIC_INTERCOM_APP_ID=your-intercom-app-id
```

Only add this if you want to enable Intercom chat support.

## Deployment Steps

### Option 1: Via Vercel Dashboard

1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. **Before deploying**, go to "Environment Variables" section
5. Add all required environment variables listed above
6. Click "Deploy"

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from the _good-hands directory
cd _good-hands
vercel

# Add environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add NEXT_PUBLIC_SITE_URL

# Deploy to production
vercel --prod
```

## Common Deployment Errors

### Error: "supabaseUrl is required"

**Solution**: Make sure you've added the `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` environment variables in Vercel.

### Error: Build fails with metadata warnings

**Solution**: Add the `NEXT_PUBLIC_SITE_URL` environment variable.

### Error: Module not found

**Solution**: Ensure all dependencies are in `package.json` and run `npm install` locally to verify.

## Post-Deployment Checklist

- [ ] Environment variables are set in Vercel
- [ ] Supabase project is set up and running
- [ ] Test login functionality on deployed site
- [ ] Test settings page on deployed site
- [ ] Verify all pages load correctly
- [ ] Check that authentication redirects work properly

## Supabase Setup

If you haven't set up Supabase yet:

1. Create an account at https://supabase.com
2. Create a new project
3. Wait for database to initialize (2-3 minutes)
4. Go to Settings → API to get your credentials
5. Enable Email Auth:
   - Go to Authentication → Providers
   - Enable Email provider
   - Configure email templates if needed
6. Set up redirect URLs:
   - Go to Authentication → URL Configuration
   - Add your Vercel deployment URL to "Site URL"
   - Add redirect URLs (e.g., `https://your-domain.vercel.app/settings`)

## Testing Authentication

After deployment:

1. Visit your deployed site
2. Click "Sign In" in the navbar
3. Create a test account
4. Check your email for verification
5. Log in and access the Settings page
6. Test password change functionality

## Need Help?

If you're still experiencing deployment issues:

1. Check Vercel deployment logs for specific errors
2. Verify all environment variables are set correctly
3. Ensure Supabase project is active and credentials are valid
4. Check the browser console for any client-side errors
