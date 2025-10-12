# 🧪 Live Site Testing Checklist - October 11, 2025

**Site URL:** https://good-hands-lisbon.vercel.app  
**Fallback URL:** https://good-hands-3erz7v15f-narratums-projects.vercel.app  
**Testing Phase:** B & C (Navigation + Functionality)

---

## ✅ PHASE A: IMAGE VERIFICATION - Complete

**Quick Visual Check:**
- [ ] Homepage hero image loads (brand image, not Unsplash)
- [ ] All images have proper aspect ratios
- [ ] No broken image icons
- [ ] Images load fast (Next.js optimization working)

---

## 🧭 PHASE B: NAVIGATION TESTING

### B1. Main Header Navigation

**Starting Point:** Homepage (/)

| Link | Expected Destination | Status | Notes |
|------|---------------------|--------|-------|
| Logo | `/` (Homepage) | ⬜ | Should refresh homepage |
| Services | `/services` or dropdown | ⬜ | Check if dropdown exists |
| Experiences | `/experiences` | ⬜ | |
| Guides | `/guides` | ⬜ | |
| Journal | `/journal` | ⬜ | |
| Hotels/Partnerships | `/partnerships` | ⬜ | |
| About | `/about` | ⬜ | |
| Book Now Button | `#booking` or `/services` | ⬜ | Check scroll behavior |

**Mobile Menu:**
- [ ] Hamburger menu opens/closes
- [ ] All links work in mobile menu
- [ ] Menu closes after clicking link

---

### B2. Footer Navigation

**Service Links:**
- [ ] Hair Services → `/services/hair`
- [ ] Makeup Services → `/services/makeup`
- [ ] Nail Services → `/services/nails`
- [ ] Skincare Services → `/services/skincare`
- [ ] Wellness Services → `/services/wellness`

**Experience Links:**
- [ ] Wedding Packages → `/experiences` (or specific section)
- [ ] Wellness Retreats → `/experiences`
- [ ] Corporate Wellness → `/experiences`
- [ ] Membership → `/membership` or `/premium/membership`

**Guide Links:**
- [ ] Chiado → `/chiado`
- [ ] Príncipe Real → `/principe-real`
- [ ] Baixa → `/baixa`
- [ ] Avenida → `/avenida`
- [ ] Alfama → `/alfama`
- [ ] Belém → `/belem`
- [ ] Sintra → `/sintra`
- [ ] Cascais → `/cascais`

**Policy Pages:**
- [ ] Privacy Policy → `/privacy`
- [ ] Terms of Service → `/terms`
- [ ] Cookie Policy → `/cookies`

**Social Links:**
- [ ] Instagram (if present) → External link, opens new tab
- [ ] LinkedIn (if present) → External link, opens new tab
- [ ] Email link → Opens email client

---

### B3. Internal Page Navigation

**User Journey #1: Homepage → Service → Book**
1. [ ] Start at `/`
2. [ ] Click any service card
3. [ ] Lands on correct service page
4. [ ] Click "Book Now" CTA
5. [ ] Scrolls to booking form or opens modal

**User Journey #2: Homepage → Guide → Explore**
1. [ ] Start at `/`
2. [ ] Click neighborhood card
3. [ ] Lands on neighborhood page
4. [ ] Verify back navigation works
5. [ ] Verify related links work

**User Journey #3: Journal → Article → Read**
1. [ ] Visit `/journal`
2. [ ] Click article card
3. [ ] Article page loads
4. [ ] Images in article load correctly
5. [ ] Back to journal works

**Cross-Navigation:**
- [ ] Service page → Related services links work
- [ ] Neighborhood page → Related neighborhoods work
- [ ] Journal article → Related articles work

---

### B4. All CTA Buttons (Critical!)

**Homepage CTAs:**
- [ ] Hero "Book Now" button
- [ ] Services section "View All Services" button
- [ ] Any other CTAs

**Service Pages (5 pages):**
- [ ] `/services/hair` - "Book Now" button
- [ ] `/services/makeup` - "Book Now" button
- [ ] `/services/nails` - "Book Now" button
- [ ] `/services/skincare` - "Book Now" button
- [ ] `/services/wellness` - "Book Now" button

**Neighborhood Pages (8 pages):**
- [ ] `/chiado` - CTA button
- [ ] `/principe-real` - CTA button
- [ ] `/baixa` - CTA button
- [ ] `/avenida` - CTA button
- [ ] `/alfama` - CTA button
- [ ] `/belem` - CTA button
- [ ] `/sintra` - CTA button
- [ ] `/cascais` - CTA button

**Premium/Experience Pages:**
- [ ] `/experiences` - CTAs for each experience type
- [ ] `/premium/membership` - "Join Now" button
- [ ] `/premium/experiences` - CTAs
- [ ] `/premium/concierge` - CTAs

**Expected Behavior:**
- All CTAs should either:
  - Scroll to `#booking` section
  - Navigate to `/services` or specific service
  - Open booking modal
  - Navigate to external booking system

---

## ⚙️ PHASE C: FUNCTIONALITY TESTING

### C1. Search Function (if present)

**Test Scenarios:**
- [ ] Search bar is visible
- [ ] Can type in search bar
- [ ] Search returns results
- [ ] Can click search results
- [ ] "No results" message shows when appropriate
- [ ] Search filters work (if present)

**Test Queries:**
- [ ] "hair" → Should show hair services
- [ ] "chiado" → Should show Chiado neighborhood
- [ ] "wedding" → Should show wedding packages
- [ ] "xyz123" → Should show "no results"

---

### C2. Booking Form

**Location:** Check where it appears (scroll to `#booking` or separate page)

**Form Fields Check:**
- [ ] Name field present
- [ ] Email field present
- [ ] Phone field present (optional?)
- [ ] Service selection dropdown/field
- [ ] Date picker (if present)
- [ ] Time picker (if present)
- [ ] Message/Notes textarea
- [ ] Submit button

**Form Validation:**
- [ ] Try submitting empty form → Should show validation errors
- [ ] Enter invalid email → Should show email validation
- [ ] Enter invalid phone → Should validate phone format
- [ ] Fill all required fields → Should allow submission

**Form Submission:**
- ⚠️ **NOTE:** Actual submission may not work yet (waiting for integrations)
- [ ] Click submit with valid data
- [ ] Check for loading state
- [ ] Check for success/error message
- [ ] Check if form resets after submission

---

### C3. Interactive Elements

**Lookbook/Gallery:**
- [ ] Navigate to lookbook section (homepage or dedicated page)
- [ ] Images load correctly (brand images, not Unsplash)
- [ ] Can click to enlarge (if feature exists)
- [ ] Navigation arrows work (if present)
- [ ] Lightbox closes properly
- [ ] Mobile swipe works

**FAQs (if present):**
- [ ] FAQ items expand on click
- [ ] FAQ items collapse when clicked again
- [ ] Multiple FAQs can be open at once (or accordion behavior)
- [ ] Smooth animations

**Accordions/Dropdowns:**
- [ ] All expandable sections work
- [ ] Smooth animations
- [ ] Proper open/close states

**Hover Effects:**
- [ ] Card hover effects work
- [ ] Button hover states work
- [ ] Link hover states work
- [ ] Image hover effects work (if any)

---

### C4. Forms & Inputs

**Newsletter Signup (if present):**
- [ ] Email input field works
- [ ] Submit button works
- [ ] Shows success/error message
- [ ] Validates email format

**Contact Forms:**
- [ ] All fields work
- [ ] Validation works
- [ ] Submit works (or shows appropriate message)

---

## 📱 PHASE D: MOBILE TESTING

**Devices to Test:**
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Tablet (iPad or Android)

**Mobile Navigation:**
- [ ] Hamburger menu works
- [ ] All links accessible
- [ ] Touch targets large enough
- [ ] No overlapping elements

**Mobile Layout:**
- [ ] All pages responsive
- [ ] Images scale properly
- [ ] Text readable (not too small)
- [ ] No horizontal scrolling
- [ ] Cards stack vertically

**Mobile Performance:**
- [ ] Pages load quickly
- [ ] Images optimized for mobile
- [ ] Smooth scrolling
- [ ] No lag or jank

**Mobile Forms:**
- [ ] Keyboard doesn't break layout
- [ ] Form fields accessible
- [ ] Submit buttons reachable
- [ ] Date/time pickers work on mobile

---

## ⚡ PHASE E: PERFORMANCE TESTING

### E1. Lighthouse Audit

**Run on:** https://pagespeed.web.dev/

**Test URLs:**
1. [ ] Homepage `/`
2. [ ] Service page `/services/hair`
3. [ ] Neighborhood page `/chiado`
4. [ ] Journal `/journal`

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

---

### E2. Load Time Testing

**First Load (Cold Cache):**
- [ ] Homepage loads in < 3 seconds
- [ ] Images appear quickly
- [ ] No layout shift (CLS)
- [ ] Interactive in < 5 seconds

**Subsequent Loads (Warm Cache):**
- [ ] Navigation feels instant
- [ ] Images cached properly
- [ ] No unnecessary reloads

---

### E3. Image Optimization Verification

**Check Network Tab:**
- [ ] Images served as WebP/AVIF (Next.js optimization)
- [ ] Images properly sized (not oversized)
- [ ] Lazy loading working (images load on scroll)
- [ ] No 404s for missing images

---

## 🐛 BUG TRACKING

### Critical Bugs (Site Breaking):
_Document here as found_

### High Priority Bugs (Feature Breaking):
_Document here as found_

### Medium Priority Bugs (UX Issues):
_Document here as found_

### Low Priority Bugs (Minor Issues):
_Document here as found_

---

## ✅ TESTING COMPLETION CHECKLIST

- [ ] All navigation links tested
- [ ] All CTAs tested
- [ ] All interactive elements tested
- [ ] Forms tested (where possible)
- [ ] Mobile testing complete
- [ ] Performance audit complete
- [ ] All bugs documented
- [ ] Screenshots taken of issues
- [ ] Testing report created

---

## 📊 TESTING METRICS

**Total Links Tested:** ___ / ___  
**Total CTAs Tested:** ___ / ___  
**Bugs Found:** ___  
**Critical Issues:** ___  
**Average Page Load:** ___ seconds  
**Lighthouse Score:** ___

---

**Testing By:** Pascal + AI Agent System  
**Testing Date:** October 11, 2025  
**Deployment:** Commit 47f14b8  
**Status:** 🔄 Ready to begin testing once Vercel deployment completes

