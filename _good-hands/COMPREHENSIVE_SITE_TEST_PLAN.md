# 🧪 Comprehensive Site Testing Plan

**Created:** October 11, 2025  
**Purpose:** Test ALL functionalities before account creation  
**Status:** In Progress

---

## 📋 TESTING METHODOLOGY

### Approach:
1. **Replace all Unsplash images** with brand images
2. **Test navigation** - every link, every page
3. **Test functionality** - forms, buttons, interactions
4. **Test performance** - speed, loading, mobile
5. **Document issues** - create fix list
6. **Fix critical issues** - before account setup
7. **Retest** - verify fixes

---

## PHASE A: IMAGE OPTIMIZATION ✅

### A1. Replace Unsplash URLs with Brand Images

**Status:** 🔄 In Progress

**Files to Update:** 33 Unsplash references found

#### Priority 1: Hero Images
- [x] `/components/HeroModern.tsx` - Already using brand image ✅
- [ ] `/app/alfama/page.tsx` - Replace Unsplash
- [ ] `/app/avenida/page.tsx` - Replace Unsplash
- [ ] `/app/baixa/page.tsx` - Replace Unsplash
- [ ] `/app/belem/page.tsx` - Replace Unsplash
- [ ] `/app/cascais/page.tsx` - Replace Unsplash
- [ ] `/app/chiado/page.tsx` - Replace Unsplash
- [ ] `/app/principe-real/page.tsx` - Replace Unsplash
- [ ] `/app/sintra/page.tsx` - Replace Unsplash

#### Priority 2: Service Pages
- [ ] `/app/services/hair/page.tsx` - Replace Unsplash
- [ ] `/app/services/makeup/page.tsx` - Replace Unsplash
- [ ] `/app/services/nails/page.tsx` - Replace Unsplash
- [ ] `/app/services/skincare/page.tsx` - Replace Unsplash
- [ ] `/app/services/wellness/page.tsx` - Replace Unsplash

#### Priority 3: Other Pages
- [ ] `/app/about/page.tsx` - Replace Unsplash
- [ ] `/app/experiences/page.tsx` - Replace Unsplash
- [ ] `/app/guides/page.tsx` - Replace Unsplash
- [ ] `/app/journal/page.tsx` - Replace Unsplash
- [ ] `/components/Lookbook.tsx` - Replace fallback Unsplash URLs

---

## PHASE B: NAVIGATION TESTING 🧭

### B1. Main Navigation (Header)

**Test:** Click every link in header
- [ ] Logo → Homepage
- [ ] Services → /services
- [ ] Experiences → /experiences  
- [ ] Guides → /guides
- [ ] Journal → /journal
- [ ] Hotels → /partnerships
- [ ] About → /about
- [ ] Book Now → Scroll to #booking or /services

**Mobile:**
- [ ] Hamburger menu opens
- [ ] All links work in mobile menu
- [ ] Menu closes on link click
- [ ] Menu closes on outside click

### B2. Footer Navigation

**Test:** All footer links work
- [ ] Services
- [ ] Experiences
- [ ] Guides  
- [ ] Journal
- [ ] About
- [ ] Partnerships
- [ ] Privacy Policy
- [ ] Terms of Service
- [ ] Contact info displayed

### B3. Page-to-Page Navigation

**Test:** Navigate full user journey
- [ ] Homepage → Services
- [ ] Services → Individual service (Hair, Makeup, etc.)
- [ ] Service → Back to Services
- [ ] Homepage → Experiences
- [ ] Experiences → Premium pages (Weddings, Retreats, Corporate)
- [ ] Homepage → Guides
- [ ] Guides → Individual neighborhoods
- [ ] Neighborhood → Back to Guides
- [ ] Homepage → Journal
- [ ] Journal → Individual article
- [ ] Article → Back to Journal

### B4. Internal Links

**Test:** Links within content
- [ ] "Learn more" links work
- [ ] "Book Now" buttons scroll to booking form
- [ ] Cross-links between related content
- [ ] Breadcrumb navigation (if present)

---

## PHASE C: FUNCTIONALITY TESTING ⚙️

### C1. Search Function

**Location:** `/app/services/page.tsx`

**Tests:**
- [ ] Search bar appears
- [ ] Can type in search box
- [ ] Pressing Enter triggers search
- [ ] Results filter by search term
- [ ] "No results" message shows when appropriate
- [ ] Clear search works
- [ ] URL parameters update (/?q=hair)
- [ ] Direct URL with params works (/services?q=makeup)

**Test Cases:**
- [ ] Search "hair" → Shows hair services
- [ ] Search "makeup" → Shows makeup services
- [ ] Search "xyz123" → Shows "no results"
- [ ] Search "" (empty) → Shows all services

### C2. Category Filtering

**Location:** `/app/services/page.tsx`

**Tests:**
- [ ] Category buttons/links exist
- [ ] Clicking category filters results
- [ ] URL updates (/services?category=hair)
- [ ] Direct URL works
- [ ] Combined search + category works (/services?q=color&category=hair)

### C3. Booking Form

**Location:** `/#booking` and `/components/BookingForm.tsx`

**Tests:**
- [ ] Form appears on page
- [ ] All fields present:
  - [ ] Name field
  - [ ] Email field  
  - [ ] Phone field
  - [ ] Service selection
  - [ ] Date picker
  - [ ] Time selection
  - [ ] Location/neighborhood
  - [ ] Message/notes field
- [ ] Required fields marked
- [ ] Validation works (empty fields show errors)
- [ ] Email validation works
- [ ] Phone validation works
- [ ] Date picker opens and works
- [ ] Can't select past dates
- [ ] Submit button works
- [ ] Loading state shows on submit
- [ ] Success message shows
- [ ] Error message shows (if submission fails)
- [ ] Form clears after successful submission

**Test Submissions:**
- [ ] Valid submission → Success
- [ ] Invalid email → Error shown
- [ ] Missing required fields → Error shown
- [ ] Past date → Error shown

### C4. CTA Buttons

**Test ALL "Book Now" buttons site-wide:**

**Homepage:**
- [ ] Hero "Book Your Experience" → Scrolls to #booking
- [ ] Services section CTA → Works
- [ ] Experiences section CTA → Works

**Service Pages:**
- [ ] Each service page "Book Now" → Works

**Premium Pages:**
- [ ] Weddings "Book Consultation" → Works
- [ ] Retreats "Book Experience" → Works
- [ ] Corporate "Contact Us" → Works

**Neighborhood Pages:**
- [ ] Each neighborhood "Book Services" → Works

**Test other CTAs:**
- [ ] "Explore Services" → /services
- [ ] "View All Guides" → /guides
- [ ] "Read More" → Correct article
- [ ] "Learn More" → Correct page

### C5. Interactive Elements

**Lookbook/Gallery:**
- [ ] Images load
- [ ] Click image opens lightbox
- [ ] Lightbox navigation works (next/prev)
- [ ] Lightbox close works (X button)
- [ ] Lightbox close works (outside click)
- [ ] Lightbox close works (Escape key)

**Accordions/Expandables:**
- [ ] FAQ accordions expand/collapse
- [ ] Only one open at a time (if designed that way)
- [ ] Smooth animation
- [ ] Content is readable when expanded

**Hover States:**
- [ ] Buttons have hover effects
- [ ] Links have hover effects
- [ ] Cards have hover effects
- [ ] Images have hover effects (if applicable)

### C6. Forms & Inputs

**Newsletter (if present):**
- [ ] Email input works
- [ ] Submit button works
- [ ] Validation works
- [ ] Success message shows

**Contact Form (if present):**
- [ ] All fields work
- [ ] Validation works
- [ ] Submit works
- [ ] Success/error messages show

---

## PHASE D: PERFORMANCE TESTING 🚀

### D1. Page Load Speed

**Test on:** Chrome DevTools Network tab

**Pages to Test:**
- [ ] Homepage
- [ ] /services
- [ ] /services/hair
- [ ] /alfama
- [ ] /journal

**Metrics:**
- [ ] Initial load < 3 seconds
- [ ] Images load progressively
- [ ] No blocking resources
- [ ] Fonts load without flash

### D2. Mobile Performance

**Test on:** Chrome DevTools Mobile Emulation

**Devices:**
- [ ] iPhone 12 Pro
- [ ] iPhone SE
- [ ] iPad
- [ ] Samsung Galaxy S21

**Tests:**
- [ ] Page loads on mobile
- [ ] Images responsive
- [ ] Text readable (not too small)
- [ ] Buttons tappable (not too small)
- [ ] No horizontal scroll
- [ ] Forms work on mobile
- [ ] Navigation works on mobile

### D3. Lighthouse Audit

**Run on:** Homepage, Services, One neighborhood page

**Target Scores:**
- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

**Common Issues to Fix:**
- [ ] Image optimization
- [ ] Unused JavaScript
- [ ] Render-blocking resources
- [ ] Missing alt text
- [ ] Contrast ratios
- [ ] Touch target sizes

### D4. Image Performance

**Check:**
- [ ] Images use Next.js Image component
- [ ] Images have width/height
- [ ] Images have alt text
- [ ] Images use appropriate formats (WebP)
- [ ] Images lazy load (except above fold)
- [ ] Images have blur placeholder (optional but nice)

---

## PHASE E: CROSS-BROWSER TESTING 🌐

### E1. Desktop Browsers

**Test on:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Quick Tests:**
- [ ] Site loads
- [ ] Navigation works
- [ ] Forms work
- [ ] Styles look correct
- [ ] No console errors

### E2. Mobile Browsers

**Test on real devices if possible:**
- [ ] Safari iOS
- [ ] Chrome Android
- [ ] Samsung Internet

---

## PHASE F: CONTENT TESTING 📝

### F1. Text Content

**Check for:**
- [ ] No placeholder text ("Lorem ipsum")
- [ ] No "TODO" markers in visible content
- [ ] No obvious typos
- [ ] Consistent tone/voice
- [ ] Concierge messaging present
- [ ] Pricing includes concierge note

### F2. Links & References

**Check:**
- [ ] No broken links (404s)
- [ ] External links open in new tab
- [ ] Email links work (mailto:)
- [ ] Phone links work (tel:)
- [ ] Social media links (if present) work

### F3. SEO Elements

**Check each page:**
- [ ] Has meta title
- [ ] Has meta description
- [ ] Has OG image
- [ ] Has OG title/description
- [ ] Has Twitter card
- [ ] Has canonical URL
- [ ] Has appropriate headings (H1, H2, etc.)
- [ ] Has schema markup

---

## PHASE G: ACCESSIBILITY TESTING ♿

### G1. Keyboard Navigation

**Test:**
- [ ] Tab through all links
- [ ] Tab through all form fields
- [ ] Enter key activates buttons
- [ ] Escape closes modals
- [ ] Focus visible on all elements
- [ ] Logical tab order

### G2. Screen Reader

**Test with:** macOS VoiceOver or NVDA (Windows)

**Check:**
- [ ] Images have alt text
- [ ] Links have descriptive text
- [ ] Form labels present
- [ ] Headings in logical order
- [ ] Landmarks identified

### G3. Color Contrast

**Check:**
- [ ] Text readable on backgrounds
- [ ] Links distinguishable
- [ ] Buttons have sufficient contrast
- [ ] Use WebAIM Contrast Checker

---

## PHASE H: INTEGRATION TESTING 🔌

### H1. Non-Account Integrations

**Google Maps (if embedded):**
- [ ] Maps load
- [ ] Pins show correctly
- [ ] Zoom/pan works
- [ ] Directions link works

**Social Media Embeds:**
- [ ] Instagram embeds load
- [ ] Twitter embeds load
- [ ] Other embeds work

### H2. Analytics Tracking

**If Google Analytics setup:**
- [ ] Page views tracked
- [ ] Button clicks tracked
- [ ] Form submissions tracked
- [ ] Conversions tracked

---

## PHASE I: ERROR HANDLING 🚨

### I1. 404 Page

**Test:**
- [ ] Visit non-existent page
- [ ] 404 page shows
- [ ] 404 page styled correctly
- [ ] Link back to homepage works

### I2. Error States

**Test:**
- [ ] Form submission error
- [ ] Network error
- [ ] Image load error (use offline mode)
- [ ] API error (if applicable)

**Check:**
- [ ] User-friendly error messages
- [ ] Not just "Error"
- [ ] Instructions on what to do
- [ ] No console errors exposed to user

---

## PHASE J: EDGE CASES 🔬

### J1. Long Content

**Test:**
- [ ] Very long name in form
- [ ] Very long message in form
- [ ] Very long search term
- [ ] Page with lots of content scrolls properly

### J2. Special Characters

**Test in forms:**
- [ ] Name with accents (José, François)
- [ ] Email with + sign
- [ ] International phone numbers
- [ ] Special characters in message

### J3. Slow Connection

**Test on:** Chrome DevTools → Slow 3G

**Check:**
- [ ] Site still usable
- [ ] Loading states show
- [ ] No broken images
- [ ] Forms still submit

---

## 🔍 ISSUE TRACKING

### Critical Issues (Must Fix Before Launch)
_To be filled as testing progresses_

### High Priority Issues
_To be filled as testing progresses_

### Medium Priority Issues
_To be filled as testing progresses_

### Low Priority / Nice-to-Have
_To be filled as testing progresses_

---

## 📊 TESTING PROGRESS

**Last Updated:** October 11, 2025

### Completion Status:
- [ ] Phase A: Image Optimization (0%)
- [ ] Phase B: Navigation Testing (0%)
- [ ] Phase C: Functionality Testing (0%)
- [ ] Phase D: Performance Testing (0%)
- [ ] Phase E: Cross-Browser Testing (0%)
- [ ] Phase F: Content Testing (0%)
- [ ] Phase G: Accessibility Testing (0%)
- [ ] Phase H: Integration Testing (0%)
- [ ] Phase I: Error Handling (0%)
- [ ] Phase J: Edge Cases (0%)

**Overall Completion:** 0/10 phases

---

## ✅ SIGN-OFF

**When ALL phases complete:**
- [ ] All critical issues fixed
- [ ] All high priority issues fixed
- [ ] Site ready for account creation
- [ ] Site ready for production launch

**Tested by:** Claude (AI Agent System)  
**Date:** TBD  
**Status:** Testing in progress

---

## 🚀 NEXT STEPS AFTER TESTING

1. Fix all critical and high priority issues
2. Create accounts (Stripe, Notion, Make.com, etc.)
3. Test integrations
4. Final QA
5. Production launch!

---

**This is comprehensive due diligence testing. Nothing will be missed!** ✅

