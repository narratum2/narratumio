# Deployment Guide — Good Hands

This guide walks you through deploying Good Hands to Vercel with full integration setup.

## Prerequisites

- [x] GitHub account
- [x] Vercel account (free tier works)
- [x] Supabase account (optional for development, required for production)
- [x] Intercom account (optional)

## Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
```bash
cd good-hands
git init
git add .
git commit -m "Initial commit: Good Hands beauty concierge platform"
```

2. **Create GitHub Repository**:
   - Go to [GitHub](https://github.com/new)
   - Create a new repository named `good-hands`
   - Don't initialize with README (we already have one)

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/good-hands.git
git branch -M main
git push -u origin main
```

## Step 2: Set Up Supabase

1. **Create Project**:
   - Go to [Supabase](https://supabase.com)
   - Click "New Project"
   - Choose organization and set project name: `good-hands`
   - Generate a strong database password
   - Select region closest to your users (Europe West for Lisbon)

2. **Create Bookings Table**:
   - Go to SQL Editor in Supabase dashboard
   - Run this SQL:

```sql
-- Create bookings table
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  neighborhood TEXT,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  message TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_bookings_created_at ON bookings(created_at DESC);
CREATE INDEX idx_bookings_date ON bookings(date);

-- Enable Row Level Security (RLS)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policy for service role (API access)
CREATE POLICY "Service role can do everything" ON bookings
  FOR ALL
  USING (auth.role() = 'service_role');
```

3. **Get API Credentials**:
   - Go to Settings → API
   - Copy `Project URL` (this is your `SUPABASE_URL`)
   - Copy `service_role` key (this is your `SUPABASE_SERVICE_ROLE_KEY`)
   - ⚠️ Keep the service_role key secret! Never commit it to Git.

## Step 3: Set Up Intercom (Optional)

1. **Create Workspace**:
   - Go to [Intercom](https://www.intercom.com)
   - Sign up and create a workspace
   - Name it "Good Hands"

2. **Install Messenger**:
   - Go to Settings → Installation
   - Copy your `App ID`
   - This is your `NEXT_PUBLIC_INTERCOM_APP_ID`

## Step 4: Deploy to Vercel

1. **Import Project**:
   - Go to [Vercel](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your GitHub repository: `good-hands`

2. **Configure Project**:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

3. **Add Environment Variables**:
   Click "Environment Variables" and add:

   ```
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   NEXT_PUBLIC_INTERCOM_APP_ID=your_intercom_app_id
   ```

   - ✅ Check all environments (Production, Preview, Development)

4. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at `https://good-hands.vercel.app`

## Step 5: Configure Custom Domain (Optional)

1. **Add Domain in Vercel**:
   - Go to your project → Settings → Domains
   - Add your domain: `goodhands.com`

2. **Update DNS**:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.21.21`
   - Or follow Vercel's specific instructions for your DNS provider

3. **Wait for DNS Propagation**:
   - Usually takes 5-60 minutes
   - Vercel will auto-provision SSL certificate

## Step 6: Test Your Deployment

### Test Booking Form
1. Visit `https://your-domain.com`
2. Scroll to booking form
3. Submit a test booking
4. Check Supabase dashboard → Table Editor → `bookings`
5. Verify the booking appears

### Test API Endpoints
```bash
# Test OpenAPI spec
curl https://your-domain.com/api/openapi.json

# Test bookings endpoint info
curl https://your-domain.com/api/bookings

# Test OG image
open https://your-domain.com/api/og?title=Test&subtitle=Works
```

### Test Intercom
1. Visit your site
2. Look for Intercom chat widget in bottom-right
3. Send a test message
4. Check Intercom dashboard for the conversation

## Step 7: Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test booking form submission
- [ ] Verify images load properly
- [ ] Test mobile responsiveness
- [ ] Check Lighthouse score (aim for 90+ on all metrics)
- [ ] Test SEO with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Submit sitemap to Google Search Console
- [ ] Test Intercom chat functionality
- [ ] Set up monitoring (Vercel Analytics is built-in)

## Continuous Deployment

Vercel automatically deploys when you push to GitHub:

- **Push to `main`** → Deploys to production
- **Push to other branches** → Creates preview deployment
- **Pull requests** → Automatic preview deployments with unique URLs

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `SUPABASE_URL` | Yes | Your Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Service role key for server-side operations |
| `NEXT_PUBLIC_INTERCOM_APP_ID` | No | Intercom app ID (public, safe to expose) |

## Monitoring & Analytics

### Vercel Analytics (Built-in)
- Real-time visitor data
- Core Web Vitals tracking
- No configuration needed (free on Pro plan)

### Performance Monitoring
- Check Vercel dashboard → Analytics
- Monitor Lighthouse scores
- Track Core Web Vitals:
  - LCP (Largest Contentful Paint) < 2.5s ✅
  - FID (First Input Delay) < 100ms ✅
  - CLS (Cumulative Layout Shift) < 0.1 ✅

## Troubleshooting

### Build Fails
- Check Vercel build logs for errors
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Booking Form Not Working
- Check browser console for errors
- Verify Supabase environment variables are set correctly
- Check Supabase table exists and RLS policies are correct

### Images Not Loading
- Verify image domains are in `next.config.js`
- Check Next.js image optimization is working
- Review Vercel logs for 404 errors

### Intercom Not Showing
- Verify `NEXT_PUBLIC_INTERCOM_APP_ID` is set
- Check browser console for loading errors
- Ensure you're not blocking third-party scripts

## Support

For deployment issues:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)

---

🎉 **Congratulations!** Your Good Hands platform is now live and ready to connect clients with beautiful experiences.



