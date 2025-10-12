# 🧪 Good Hands - Complete Testing Checklist

**Last Updated:** October 11, 2025

---

## ✅ Homepage Testing

### Hero Section
- [ ] "Book Your Experience" button → navigates to `/#booking`
- [ ] "Explore Services" button → navigates to `/services`
- [ ] Scroll indicator animates
- [ ] Parallax scroll effects working
- [ ] Staggered text animations load smoothly
- [ ] Mobile: all text readable, buttons accessible

### Search Bar
- [ ] Search input accepts text
- [ ] Category dropdown works
- [ ] "Search" button submits form
- [ ] Empty search navigates to `/services`
- [ ] Search with term navigates to `/services?q=[term]`
- [ ] Search with category navigates to `/services?category=[cat]`
- [ ] Mobile: form elements stack properly

### Services Section
- [ ] All 5 service cards display
- [ ] Images load properly
- [ ] Hover effects work (zoom, border)
- [ ] Each card links to correct category:
  - [ ] Hair → `/services?category=hair`
  - [ ] Nails → `/services?category=nails`
  - [ ] Skincare → `/services?category=skincare`
  - [ ] Makeup → `/services?category=makeup`
  - [ ] Wellness → `/services?category=wellness`
- [ ] Mobile: cards stack vertically

### Categories Row
- [ ] All category cards clickable
- [ ] Links navigate to correct pages
- [ ] Images load

### Navigation Bar
- [ ] Logo → navigates to `/`
- [ ] Services → navigates to `/services`
- [ ] Neighborhoods dropdown works:
  - [ ] Chiado → `/chiado`
  - [ ] Principe Real → `/principe-real`
  - [ ] Alfama → `/alfama`
  - [ ] Baixa → `/baixa`
  - [ ] Avenida → `/avenida`
  - [ ] Belem → `/belem`
  - [ ] Cascais → `/cascais`
  - [ ] Sintra → `/sintra`
- [ ] Experiences → `/experiences`
- [ ] Journal → `/journal`
- [ ] Membership → `/premium/membership`
- [ ] "Book Now" button → `/#booking`
- [ ] Mobile: hamburger menu opens/closes

### Footer
- [ ] All social links work (once added)
- [ ] Newsletter signup form works
- [ ] Footer links:
  - [ ] About → `/about`
  - [ ] Services → `/services`
  - [ ] Guides → `/guides`
  - [ ] Journal → `/journal`
  - [ ] Memberships → `/premium/membership`
  - [ ] Weddings → `/premium/weddings`
  - [ ] Retreats → `/premium/retreats`
  - [ ] Corporate → `/premium/corporate`
  - [ ] Partnerships → `/partnerships`
  - [ ] AI Info → `/ai-info`
  - [ ] Privacy Policy → `/privacy`
  - [ ] Terms of Service → `/terms`
  - [ ] Cookies → `/cookies`

### Booking Form
- [ ] Form displays at `#booking` anchor
- [ ] All fields accept input:
  - [ ] Name
  - [ ] Email
  - [ ] Phone
  - [ ] Service (dropdown)
  - [ ] Date (date picker)
  - [ ] Time (time picker)
  - [ ] Neighborhood (dropdown)
  - [ ] Message (textarea)
- [ ] Form validation works
- [ ] Submit button triggers API call
- [ ] Success message displays
- [ ] Error handling works
- [ ] Mobile: form elements responsive

### FAQ Section
- [ ] 8 categories display
- [ ] Category headers toggle open/close
- [ ] Questions within categories toggle
- [ ] All 30+ questions readable
- [ ] "Contact Us" button → `mailto:hello@goodhands.com`
- [ ] Mobile: accordions work properly

---

## ✅ Services Page Testing

### Search & Filter
- [ ] URL parameters populate search (from homepage)
- [ ] Search input works
- [ ] Category dropdown filters correctly
- [ ] "Clear" button appears when filters active
- [ ] "Clear" button resets filters
- [ ] Active filters display as badges
- [ ] "No Services Found" shows when no results
- [ ] "View All Services" button clears filters

### Service Categories
- [ ] All 5 categories display
- [ ] Images load for each category
- [ ] Service items within categories display
- [ ] Prices show correctly
- [ ] Durations show correctly
- [ ] "Includes concierge service" note shows

### CTA Section
- [ ] "Book Now" button → `/#booking`
- [ ] Links back to homepage booking form

---

## ✅ Neighborhood Pages Testing

Test each neighborhood page:

### Chiado (`/chiado`)
- [ ] Page loads
- [ ] Content displays
- [ ] Images load
- [ ] "Book Now" buttons work
- [ ] Mobile responsive

### Principe Real (`/principe-real`)
- [ ] Page loads
- [ ] Content displays
- [ ] Navigation works

### Alfama (`/alfama`)
- [ ] Page loads
- [ ] Content displays

### Baixa (`/baixa`)
- [ ] Page loads
- [ ] Content displays

### Avenida (`/avenida`)
- [ ] Page loads
- [ ] Content displays

### Belem (`/belem`)
- [ ] Page loads
- [ ] Content displays

### Cascais (`/cascais`)
- [ ] Page loads
- [ ] Content displays

### Sintra (`/sintra`)
- [ ] Page loads
- [ ] Content displays

---

## ✅ Premium Pages Testing

### Membership Page (`/premium/membership`)
- [ ] Page loads
- [ ] Gold plan displays ($49/month)
- [ ] Platinum plan displays ($99/month)
- [ ] "Choose Gold" button works
- [ ] "Choose Platinum" button works
- [ ] Stripe checkout opens (when configured)
- [ ] Benefits list readable
- [ ] FAQ section works
- [ ] Mobile: pricing cards stack

### Weddings Page (`/premium/weddings`)
- [ ] Page loads
- [ ] Content displays
- [ ] Images load
- [ ] "Book Consultation" button works
- [ ] Mobile responsive

### Retreats Page (`/premium/retreats`)
- [ ] Page loads
- [ ] Beauty-focused content (not spa)
- [ ] Images appropriate
- [ ] "Learn More" buttons work

### Corporate Page (`/premium/corporate`)
- [ ] Page loads
- [ ] B2B messaging clear
- [ ] Contact form works
- [ ] Corporate image appropriate (not wellness-generic)

---

## ✅ Blog/Journal Testing

### Journal Index (`/journal`)
- [ ] Page loads
- [ ] Blog articles display
- [ ] 5 articles show:
  - [ ] Wedding beauty timeline
  - [ ] Chiado hair salons
  - [ ] Luxury nail salons
  - [ ] Skincare treatments
  - [ ] Makeup artists
- [ ] Article cards clickable
- [ ] Images load
- [ ] Excerpts display
- [ ] "Read More" buttons work

### Individual Articles
- [ ] `/journal/[slug]` pages load
- [ ] Full content displays
- [ ] Images load
- [ ] Typography readable
- [ ] "Last Updated" date shows
- [ ] Related articles section (if exists)
- [ ] "Book Now" CTA at bottom

---

## ✅ Additional Pages Testing

### About Page (`/about`)
- [ ] Page exists and loads
- [ ] Content displays
- [ ] Team info (if exists)
- [ ] Mission/values clear

### Experiences Page (`/experiences`)
- [ ] Page loads
- [ ] Experiences display
- [ ] Booking options clear

### Guides Page (`/guides`)
- [ ] Page loads
- [ ] Neighborhood guides display
- [ ] Maps show (if implemented)

### Partnerships Page (`/partnerships`)
- [ ] Page loads
- [ ] B2B messaging for hotels
- [ ] Contact form works
- [ ] Benefits clear

### AI Info Page (`/ai-info`)
- [ ] Page loads
- [ ] API information displays
- [ ] Links to `/api-docs` work

### API Docs Page (`/api-docs`)
- [ ] Page loads
- [ ] OpenAPI spec link works
- [ ] Endpoint documentation readable
- [ ] Example requests shown

### Legal Pages
- [ ] Privacy Policy (`/privacy`) loads
- [ ] Terms of Service (`/terms`) loads
- [ ] Cookies Policy (`/cookies`) loads
- [ ] Content is complete (not placeholder)

---

## ✅ API Endpoints Testing

### Services API
```bash
curl https://your-domain.com/api/services
```
- [ ] Returns JSON
- [ ] All services listed
- [ ] Pricing correct
- [ ] Categories work

### Services with Filters
```bash
curl "https://your-domain.com/api/services?category=hair"
```
- [ ] Filters work
- [ ] Returns correct subset

### Neighborhoods API
```bash
curl https://your-domain.com/api/neighborhoods
```
- [ ] Returns JSON
- [ ] All neighborhoods listed
- [ ] Descriptions present

### Neighborhoods by Slug
```bash
curl "https://your-domain.com/api/neighborhoods?slug=chiado"
```
- [ ] Returns single neighborhood
- [ ] Detailed info present

### Bookings API
```bash
curl -X POST https://your-domain.com/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+351 912 345 678",
    "service": "Hair Styling",
    "date": "2025-10-20",
    "time": "14:00"
  }'
```
- [ ] Accepts POST requests
- [ ] Validation works
- [ ] Success response returned
- [ ] Supabase entry created (when configured)

---

## ✅ Mobile Testing

### Responsive Breakpoints
Test on:
- [ ] Mobile (375px width)
- [ ] Tablet (768px width)
- [ ] Desktop (1440px width)

### Mobile-Specific Issues
- [ ] Navigation hamburger menu works
- [ ] Touch targets large enough (44px minimum)
- [ ] Forms usable on mobile
- [ ] Images load/scale properly
- [ ] Text readable without zooming
- [ ] Buttons not overlapping
- [ ] Scroll performance smooth
- [ ] Parallax effects not janky

---

## ✅ Performance Testing

### Page Speed
- [ ] Homepage loads < 3 seconds
- [ ] Services page loads < 3 seconds
- [ ] Blog pages load < 3 seconds
- [ ] Images lazy-load properly
- [ ] Fonts load without flash

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

Test with:
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] [GTmetrix](https://gtmetrix.com/)
- [ ] Chrome DevTools Lighthouse

---

## ✅ SEO Testing

### Meta Tags
- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] Open Graph tags present
- [ ] Twitter Card tags present

### Schema Markup
- [ ] Homepage has BeautySalon schema
- [ ] Services page has Service schema
- [ ] FAQ page has FAQPage schema
- [ ] Blog articles have Article schema
- [ ] Validate with [Google Rich Results Test](https://search.google.com/test/rich-results)

### SEO Basics
- [ ] `/robots.txt` accessible
- [ ] `/sitemap.xml` accessible
- [ ] `/api/openapi.json` accessible
- [ ] All images have alt text
- [ ] Headings in proper hierarchy (H1 → H2 → H3)
- [ ] Internal links work
- [ ] No broken links

---

## ✅ Analytics Testing

### PostHog (when configured)
- [ ] Page view events tracked
- [ ] `booking_submitted` event fires
- [ ] `search` event fires
- [ ] `ai_discovery` event fires (if AI agent)
- [ ] Dashboard shows data

### Google Analytics 4 (when configured)
- [ ] Page views tracked
- [ ] Custom events fire
- [ ] Real-time data shows

---

## ✅ Integration Testing

### Stripe (when configured)
- [ ] Checkout session creates
- [ ] Payment page loads
- [ ] Test card works (4242 4242 4242 4242)
- [ ] Webhook receives events
- [ ] Supabase membership created

### Supabase (when configured)
- [ ] Bookings save to database
- [ ] Customers create/update
- [ ] Memberships track correctly
- [ ] Real-time subscriptions work

### n8n (when configured)
- [ ] Workflows trigger on booking
- [ ] Emails send
- [ ] Slack notifications work (if using)
- [ ] Data syncs to Notion (if using)

---

## ✅ Browser Compatibility

Test in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

---

## ✅ Accessibility Testing

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Skip to content link works
- [ ] Focus indicators visible
- [ ] No keyboard traps

### Screen Reader
- [ ] Headings announced properly
- [ ] Links have descriptive text
- [ ] Images have alt text
- [ ] Forms have labels
- [ ] ARIA labels where needed

### Color Contrast
- [ ] Text meets WCAG AA standards (4.5:1 minimum)
- [ ] Links distinguishable
- [ ] Buttons have sufficient contrast

---

## 🚨 Known Issues (To Fix)

1. [ ] Search function needs live testing (appears to work, needs verification)
2. [ ] Animated service cards not yet integrated into Services component
3. [ ] Neighborhood pages need comprehensive content (currently have basic content)
4. [ ] Maps integration not yet implemented for guides
5. [ ] Some legal pages may have placeholder content
6. [ ] Social media links in footer need actual URLs

---

## 📝 Testing Notes

**How to test:**
1. Open site in browser
2. Go through each checklist item
3. Mark [x] when confirmed working
4. Note any issues in "Known Issues" section
5. Retest after fixes deployed

**Priority order:**
1. Critical user flows (booking, search, navigation)
2. All buttons and links
3. Mobile responsiveness
4. Performance
5. SEO and analytics
6. Accessibility

---

**Last tested:** [Date]  
**Tested by:** [Name]  
**Browser:** [Browser/Version]  
**Device:** [Device]

