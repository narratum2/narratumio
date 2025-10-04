# Launch Checklist — Good Hands

Complete this checklist before going live.

## ✅ Development Complete

- [x] Project structure created
- [x] All pages implemented (30+)
- [x] All components built (15)
- [x] API routes functional
- [x] Tailwind theme configured
- [x] Documentation written

## 📋 Pre-Deployment

### Code Quality
- [ ] Run `npm run lint` — Fix any linting errors
- [ ] Run `npm run build` — Verify build succeeds
- [ ] Test locally with `npm run start`
- [ ] Check all pages load without errors
- [ ] Verify no console errors in browser

### Content Review
- [ ] Replace placeholder images with real photos
- [ ] Update service descriptions and pricing
- [ ] Add real partner/venue information
- [ ] Update team member photos and bios
- [ ] Review all copy for typos and accuracy
- [ ] Add real contact information

### Environment Setup
- [ ] Create Supabase project
- [ ] Run SQL to create `bookings` table
- [ ] Copy Supabase URL and service role key
- [ ] (Optional) Set up Intercom workspace
- [ ] (Optional) Get Intercom App ID

### Repository
- [ ] Initialize Git repository
- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Verify `.gitignore` excludes `.env` files
- [ ] Add `.env.example` to repository

## 🚀 Deployment to Vercel

### Vercel Setup
- [ ] Create Vercel account
- [ ] Import GitHub repository
- [ ] Verify Next.js auto-detected
- [ ] Add environment variables:
  - [ ] `SUPABASE_URL`
  - [ ] `SUPABASE_SERVICE_ROLE_KEY`
  - [ ] `NEXT_PUBLIC_INTERCOM_APP_ID` (optional)
- [ ] Deploy to production
- [ ] Wait for build to complete (~3 min)

### Domain Configuration
- [ ] (Optional) Add custom domain in Vercel
- [ ] (Optional) Configure DNS records
- [ ] (Optional) Wait for SSL certificate
- [ ] Verify site accessible at production URL

## 🧪 Post-Deployment Testing

### Functionality Tests
- [ ] Visit homepage — loads correctly
- [ ] Test navigation — all links work
- [ ] Test mobile menu — opens and closes
- [ ] Scroll through homepage — animations work
- [ ] Submit booking form — data saves to Supabase
- [ ] Check Supabase dashboard — booking appears
- [ ] Test search functionality
- [ ] Click through all category cards
- [ ] Visit all neighborhood pages (8)
- [ ] Visit all premium pages (4)
- [ ] Test Lookbook lightbox
- [ ] Expand FAQ items
- [ ] Test Intercom chat (if enabled)

### API Testing
- [ ] Visit `/api/openapi.json` — returns JSON
- [ ] Visit `/api/bookings` — returns info
- [ ] Visit `/api/og` — generates image
- [ ] Visit `/sitemap.xml` — returns XML

### Mobile Testing
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test tablet view (iPad)
- [ ] Verify responsive images load
- [ ] Check touch targets are adequate
- [ ] Test forms on mobile

### Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)

### Performance Testing
- [ ] Run Lighthouse audit
  - [ ] Performance > 90
  - [ ] Accessibility = 100
  - [ ] Best Practices > 90
  - [ ] SEO = 100
- [ ] Check Core Web Vitals
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1
- [ ] Test on slow 3G connection

### SEO Testing
- [ ] Google Rich Results Test — passes
- [ ] Test meta tags with social media debuggers:
  - [ ] Facebook Sharing Debugger
  - [ ] Twitter Card Validator
  - [ ] LinkedIn Post Inspector
- [ ] Verify JSON-LD with Google's tool
- [ ] Check robots.txt accessible
- [ ] Verify sitemap.xml valid

## 🔍 Accessibility Audit

- [ ] Tab through entire site — keyboard navigation works
- [ ] All focus states visible
- [ ] All images have alt text
- [ ] All forms have labels
- [ ] Color contrast meets AA standards
- [ ] Screen reader test (optional but recommended)

## 📊 Analytics & Monitoring

- [ ] Enable Vercel Analytics (if on Pro plan)
- [ ] Set up Google Search Console
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Configure error monitoring (Sentry, optional)

## 📄 Legal & Compliance

- [ ] Create Privacy Policy page
- [ ] Create Terms of Service page
- [ ] Add cookie consent banner (if using cookies)
- [ ] GDPR compliance check (if serving EU)
- [ ] Update footer links to legal pages

## 🔐 Security Review

- [ ] Environment variables not committed to Git
- [ ] Service role key kept private
- [ ] Supabase RLS policies configured
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] Content Security Policy headers (optional)

## 📢 Launch Day

- [ ] Announce on social media
- [ ] Send email to existing customers
- [ ] Update Google My Business
- [ ] Reach out to partners
- [ ] Press release (optional)
- [ ] Monitor Vercel logs for errors
- [ ] Watch Supabase for bookings
- [ ] Respond to Intercom messages

## 📈 Post-Launch (Week 1)

- [ ] Monitor analytics daily
- [ ] Check error logs
- [ ] Respond to user feedback
- [ ] Fix any reported bugs
- [ ] A/B test booking form if needed
- [ ] Gather user testimonials
- [ ] Update content based on user behavior

## 🎯 Ongoing Maintenance

### Weekly
- [ ] Check booking submissions
- [ ] Monitor site performance
- [ ] Review analytics
- [ ] Update journal with new content

### Monthly
- [ ] Update service offerings
- [ ] Add new testimonials
- [ ] Review and update pricing
- [ ] Check for broken links
- [ ] Update dependencies (`npm update`)

### Quarterly
- [ ] Major content refresh
- [ ] Add new neighborhoods
- [ ] Feature new partners
- [ ] SEO audit
- [ ] Performance optimization review

## 🆘 Emergency Contacts

### Technical Issues
- **Vercel Status:** https://vercel-status.com
- **Supabase Status:** https://status.supabase.com
- **Vercel Support:** support@vercel.com
- **Next.js Discord:** https://nextjs.org/discord

### Rollback Plan
If something breaks:
1. Go to Vercel dashboard
2. Find previous working deployment
3. Click "Promote to Production"
4. Site reverts in seconds

## ✨ Success Metrics

Track these KPIs:
- Booking form submissions per week
- Page views and unique visitors
- Average time on site
- Mobile vs desktop traffic
- Top traffic sources (organic, direct, referral)
- Most popular services
- Most popular neighborhoods
- Bounce rate (aim for < 50%)

---

## 🎉 You're Ready to Launch!

Once all boxes are checked, your Good Hands platform is ready for the world.

Good luck! 🚀

