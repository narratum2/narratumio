# 📋 Mobile UI/UX Issues Tracker

**Audit Date:** October 12, 2025  
**Last Updated:** October 12, 2025  
**Total Issues:** 25

> **Instructions:** Check off items as they are completed. Update status and add notes as needed.

---

## 🚨 CRITICAL ISSUES (Must Fix Immediately)

### Issue #1: Mobile Menu Button Touch Target ❌
**Status:** 🔴 Not Started  
**Priority:** P0 - Critical  
**Severity:** Accessibility Failure  
**Effort:** 5 minutes  
**Impact:** High - Fails WCAG 2.1 AA

**Problem:**
- Current touch target: 22px × 22px (p-2 padding)
- Required minimum: 44px × 44px
- Affects all mobile users' ability to open navigation

**Location:**
- File: `components/Navbar.tsx`
- Line: 62-83

**Fix:**
```tsx
// Change line 64:
className="md:hidden p-3 text-black min-w-[44px] min-h-[44px] flex items-center justify-center"

// Add to mobile menu (line 90):
aria-controls="mobile-menu"

// Add id to menu (line 90):
id="mobile-menu"
```

**Testing:**
- [ ] Touch target measures 44px × 44px
- [ ] Button is easily tappable on iPhone SE
- [ ] ARIA attributes working
- [ ] VoiceOver announces correctly

**Assigned To:** _____________  
**Completed Date:** _____________  
**Notes:**

---

### Issue #2: Hero Section Height on Small Phones ❌
**Status:** 🔴 Not Started  
**Priority:** P0 - Critical  
**Severity:** Major UX Issue  
**Effort:** 10 minutes  
**Impact:** High - Affects user engagement

**Problem:**
- Current: 500px minimum height
- On iPhone SE (568px tall): Hero takes 88% of screen
- Users must scroll to see ANY content below hero
- Creates impression of "empty" page

**Location:**
- File: `components/HeroModern.tsx`
- Line: 8

**Fix:**
```tsx
// Replace line 8 inline style:
className="relative flex items-center justify-center overflow-hidden mt-20 
  min-h-[400px] h-[calc(100vh-80px)] max-h-[900px]"

// Remove: style={{ height: 'calc(100vh - 80px)', marginTop: '80px', minHeight: '500px' }}
```

**Also Apply To:**
- [ ] `/app/chiado/page.tsx:15`
- [ ] `/app/alfama/page.tsx:15`
- [ ] `/app/avenida/page.tsx:15`
- [ ] `/app/baixa/page.tsx:15`
- [ ] `/app/belem/page.tsx:15`
- [ ] `/app/cascais/page.tsx:15`
- [ ] `/app/principe-real/page.tsx:15`
- [ ] `/app/sintra/page.tsx:15`

**Testing:**
- [ ] Hero looks good on iPhone SE (320px)
- [ ] Hero looks good on iPhone 14 (390px)
- [ ] Hero looks good on iPad (768px+)
- [ ] Content visible without scrolling
- [ ] Images don't get cropped awkwardly

**Assigned To:** _____________  
**Completed Date:** _____________  
**Notes:**

---

### Issue #3: Booking Form Too Long on Mobile ❌
**Status:** 🔴 Not Started  
**Priority:** P0 - Critical  
**Severity:** Conversion Impact  
**Effort:** 3 hours  
**Impact:** Very High - Affects revenue

**Problem:**
- 15+ form fields visible without scrolling
- Creates scroll fatigue
- Likely causing ~20% conversion drop on mobile
- Users abandon before completing

**Location:**
- File: `components/BookingForm.tsx`
- Line: 113-259

**Solution:** Implement multi-step form

**Step 1: Add State**
```tsx
const [currentStep, setCurrentStep] = useState(1)
const totalSteps = 3
```

**Step 2: Divide Fields**
- Step 1: Personal Info (name, email, phone)
- Step 2: Service Details (service, neighborhood, date, time)
- Step 3: Additional Details (message, special requests)

**Step 3: Add Progress Indicator**
```tsx
<div className="flex justify-center mb-6">
  {[1, 2, 3].map(step => (
    <div key={step} className={`w-12 h-1 mx-1 rounded ${
      step <= currentStep ? 'bg-gold' : 'bg-gray-light'
    }`} />
  ))}
</div>
```

**Step 4: Add Navigation**
```tsx
<div className="flex gap-4 mt-6">
  {currentStep > 1 && (
    <button type="button" onClick={() => setCurrentStep(prev => prev - 1)}
      className="btn-secondary flex-1">Back</button>
  )}
  {currentStep < 3 ? (
    <button type="button" onClick={() => setCurrentStep(prev => prev + 1)}
      className="btn-primary flex-1">Next</button>
  ) : (
    <button type="submit" className="btn-primary flex-1">
      Submit Booking
    </button>
  )}
</div>
```

**Testing:**
- [ ] Step 1 shows only 3 fields
- [ ] Progress indicator works
- [ ] Next button validates current step
- [ ] Back button preserves data
- [ ] Submit only on final step
- [ ] Form state persists between steps
- [ ] Error handling per step

**Design Needed:**
- [ ] Progress indicator design
- [ ] Step transition animation
- [ ] Mobile-optimized layout
- [ ] Success state design

**Assigned To:** _____________  
**Completed Date:** _____________  
**Notes:**

---

## ⚠️ HIGH PRIORITY ISSUES (Fix This Sprint)

### Issue #4: Search Button Width Inconsistency ❌
**Status:** 🔴 Not Started  
**Priority:** P1 - High  
**Effort:** 2 minutes  
**Impact:** Medium - UX consistency

**Problem:**
- Form inputs are full-width on mobile
- Submit button is auto-width
- Visual inconsistency

**Location:**
- File: `components/SearchBar.tsx`
- Line: 85-90

**Fix:**
```tsx
// Add w-full md:w-auto to button (line 86):
className="w-full md:w-auto px-8 py-3 bg-ink text-white rounded-sm font-medium hover:bg-ink-light transition-all focus-visible-ring"
```

**Testing:**
- [ ] Button full-width on mobile (<768px)
- [ ] Button auto-width on desktop (>768px)
- [ ] Maintains 48px height
- [ ] Looks consistent with inputs

**Assigned To:** _____________  
**Completed Date:** _____________

---

### Issue #5: Focus Management in Mobile Menu ❌
**Status:** 🔴 Not Started  
**Priority:** P1 - High  
**Effort:** 30 minutes  
**Impact:** High - Accessibility

**Problem:**
- When menu opens, focus doesn't move
- When menu closes, focus doesn't return
- Keyboard users can't navigate properly
- Screen reader users get lost

**Location:**
- File: `components/Navbar.tsx`
- Line: 16-121

**Fix:**
```tsx
// Add imports (line 1):
import { useState, useEffect, useRef } from 'react'

// Add refs (after line 18):
const firstMenuItemRef = useRef<HTMLAnchorElement>(null)
const menuButtonRef = useRef<HTMLButtonElement>(null)

// Add effect (after line 26):
useEffect(() => {
  if (isOpen && firstMenuItemRef.current) {
    firstMenuItemRef.current.focus()
  } else if (!isOpen && menuButtonRef.current && document.activeElement?.tagName === 'A') {
    menuButtonRef.current.focus()
  }
}, [isOpen])

// Add ref to button (line 62):
ref={menuButtonRef}

// Add ref to first link (line 97):
ref={firstMenuItemRef}
```

**Testing:**
- [ ] Focus moves to first link when menu opens
- [ ] Focus returns to button when menu closes
- [ ] Tab key navigates through menu items
- [ ] Escape key closes menu and returns focus
- [ ] Screen reader announces menu state

**Assigned To:** _____________  
**Completed Date:** _____________

---

### Issue #6: Footer Link Touch Targets ❌
**Status:** 🔴 Not Started  
**Priority:** P1 - High  
**Effort:** 5 minutes  
**Impact:** Medium - Accessibility

**Problem:**
- Footer links have minimal padding
- Hard to tap on mobile
- Especially difficult at bottom of screen

**Location:**
- File: `components/Footer.tsx`
- Line: 50-90

**Fix:**
```tsx
// Add py-2 to all footer links:
// Services links (line 50-56):
className="block py-2 text-sm text-porcelain/70 hover:text-gold transition-colors focus-visible-ring"

// Neighborhood links (line 66-72):
className="block py-2 text-sm text-porcelain/70 hover:text-gold transition-colors focus-visible-ring"

// Company links (line 83-89):
className="block py-2 text-sm text-porcelain/70 hover:text-gold transition-colors focus-visible-ring"
```

**Testing:**
- [ ] Links easy to tap on mobile
- [ ] Adequate spacing between links
- [ ] Touch target ~40px height minimum
- [ ] Visual spacing looks balanced

**Assigned To:** _____________  
**Completed Date:** _____________

---

### Issue #7: Button Global CSS Mobile Override ❌
**Status:** 🔴 Not Started  
**Priority:** P1 - High  
**Effort:** 15 minutes  
**Impact:** Medium - UX consistency

**Problem:**
- `.btn-primary` forces 100% width on ALL mobile buttons
- Not all buttons should be full-width
- Creates layout issues in some contexts

**Location:**
- File: `app/globals.css`
- Line: 181-188

**Fix:**
```css
/* Remove width: 100% forcing, create variant instead */
@media (max-width: 768px) {
  .btn-primary {
    padding: 16px 24px;
    font-size: 12px;
    /* REMOVE: width: 100%; max-width: 100%; */
  }
  
  /* Add new variant class */
  .btn-primary-full-mobile {
    width: 100%;
    max-width: 100%;
  }
}
```

**Then Update Components:**
- [ ] Keep full-width: Hero CTAs, Booking form submit
- [ ] Remove full-width: Inline buttons, Button groups

**Testing:**
- [ ] Hero buttons still full-width on mobile
- [ ] Inline buttons not forced full-width
- [ ] Button groups layout correctly
- [ ] No regression on desktop

**Assigned To:** _____________  
**Completed Date:** _____________

---

### Issue #8: CTA Button Breakpoint Inconsistency ❌
**Status:** 🔴 Not Started  
**Priority:** P1 - High  
**Effort:** 10 minutes  
**Impact:** Low - Visual polish

**Problem:**
- Hero CTA buttons switch to row at 640px (sm:)
- Most other components switch at 768px (md:)
- Inconsistent behavior across breakpoints

**Location:**
- File: `components/HeroModern.tsx`
- Line: 37-44

**Fix:**
```tsx
// Change sm: to md: (line 37):
<div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center px-4 max-w-md md:max-w-none mx-auto">
```

**Testing:**
- [ ] Buttons stack on mobile (<768px)
- [ ] Buttons row on tablet (>768px)
- [ ] Consistent with other components
- [ ] Good spacing in both layouts

**Assigned To:** _____________  
**Completed Date:** _____________

---

## 📝 MEDIUM PRIORITY ISSUES (Plan for Next Sprint)

### Issue #9: Service Card Active States Missing ❌
**Status:** 🔴 Not Started  
**Priority:** P2 - Medium  
**Effort:** 1 hour  
**Impact:** Low - Tactile feedback

**Problem:**
- Cards have hover states but no active/pressed states
- On mobile, hover doesn't exist
- Missing tactile feedback on tap

**Location:**
- Files: Service pages and card components
- Multiple locations

**Fix:**
Add to all interactive cards:
```tsx
className="... transition-all hover:scale-[1.02] active:scale-[0.98]"
```

**Apply To:**
- [ ] Service cards
- [ ] Neighborhood cards
- [ ] Experience cards
- [ ] Journal cards
- [ ] Premium package cards

**Testing:**
- [ ] Cards shrink slightly when pressed
- [ ] Transition is smooth (150-200ms)
- [ ] Works on touch devices
- [ ] Doesn't interfere with navigation

**Assigned To:** _____________  
**Completed Date:** _____________

---

### Issue #10: Membership Benefits Lists Too Long ❌
**Status:** 🔴 Not Started  
**Priority:** P2 - Medium  
**Effort:** 2 hours  
**Impact:** Medium - Scannability

**Problem:**
- Gold tier: 8 benefits listed
- Platinum tier: 11 benefits listed
- Creates visual clutter on mobile
- Hard to compare tiers

**Location:**
- File: `app/premium/membership/page.tsx`
- Line: 15-38

**Solution:** Implement accordion or "Show more" pattern

**Option A: Accordion**
```tsx
const [expandedTier, setExpandedTier] = useState<'gold' | 'platinum' | null>(null)

<button onClick={() => setExpandedTier(expandedTier === 'gold' ? null : 'gold')}>
  {expandedTier === 'gold' ? 'Show Less' : 'Show All Benefits'}
</button>
```

**Option B: Show Core Benefits + "Show More"**
- Show top 4 benefits
- "Show 4 more benefits" button
- Expand inline

**Testing:**
- [ ] Core benefits always visible
- [ ] Expansion works smoothly
- [ ] Can compare tiers easily
- [ ] Doesn't break layout

**Design Needed:**
- [ ] UI design for expansion
- [ ] Animation for reveal
- [ ] Mobile-optimized layout

**Assigned To:** _____________  
**Completed Date:** _____________

---

### Issue #11: Footer Stacking Order on Mobile ❌
**Status:** 🔴 Not Started  
**Priority:** P2 - Medium  
**Effort:** 5 minutes  
**Impact:** Low - Visual hierarchy

**Problem:**
- Copyright and policy links stack on mobile
- Links appear above copyright
- Visual hierarchy feels reversed

**Location:**
- File: `components/Footer.tsx`
- Line: 98-115

**Fix:**
```tsx
// Change flex-col to flex-col-reverse (line 98):
<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
```

**Testing:**
- [ ] Copyright appears first on mobile
- [ ] Links appear below copyright on mobile
- [ ] Desktop layout unchanged
- [ ] Spacing looks balanced

**Assigned To:** _____________  
**Completed Date:** _____________

---

### Issue #12: Form Container Padding Too Large ❌
**Status:** 🔴 Not Started  
**Priority:** P2 - Medium  
**Effort:** 2 minutes  
**Impact:** Low - Space efficiency

**Problem:**
- Form has p-8 (32px) padding on mobile
- Reduces usable space significantly
- Especially noticeable on small screens

**Location:**
- File: `components/BookingForm.tsx`
- Line: 113

**Fix:**
```tsx
// Change p-8 to p-6 (line 113):
<form className="bg-shell rounded-lg p-6 md:p-8 lg:p-12">
```

**Testing:**
- [ ] More usable space on mobile
- [ ] Form doesn't feel cramped
- [ ] Padding scales appropriately
- [ ] Desktop layout unchanged

**Assigned To:** _____________  
**Completed Date:** _____________

---

### Issue #13: Date/Time Fields Stack Unnecessarily ❌
**Status:** 🔴 Not Started  
**Priority:** P2 - Medium  
**Effort:** 5 minutes  
**Impact:** Low - Efficiency

**Problem:**
- Date and time fields stack on mobile (1 column)
- They're narrow inputs, could fit side-by-side
- Takes up more vertical space than needed

**Location:**
- File: `components/BookingForm.tsx`
- Line: 114

**Fix:**
```tsx
// Keep most fields in responsive grid:
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
  {/* Name, Email, Phone, Service, Neighborhood */}
</div>

// But date/time always side-by-side:
<div className="grid grid-cols-2 gap-4 mb-6">
  <div>{/* Date field */}</div>
  <div>{/* Time field */}</div>
</div>
```

**Testing:**
- [ ] Date and time side-by-side on all mobile sizes
- [ ] Fields don't feel cramped
- [ ] Labels are readable
- [ ] Inputs are tappable

**Assigned To:** _____________  
**Completed Date:** _____________

---

## 💡 LOW PRIORITY ISSUES (Future Enhancements)

### Issue #14: Scroll Progress Indicator ❌
**Status:** 🔴 Not Started  
**Priority:** P3 - Low  
**Effort:** 1 hour  
**Impact:** Low - Enhancement

**Problem:**
- Long journal articles have no progress indicator
- Users don't know how much content remains
- Common UX pattern on long-form content

**Location:**
- File: `app/journal/[slug]/page.tsx`
- Add as new component

**Implementation:**
```tsx
// Create ScrollProgressBar component
const [progress, setProgress] = useState(0)

useEffect(() => {
  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = (window.scrollY / totalHeight) * 100
    setProgress(progress)
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

return (
  <div className="fixed top-20 left-0 right-0 h-1 bg-gray-light z-50">
    <div className="h-full bg-gold transition-all" style={{ width: `${progress}%` }} />
  </div>
)
```

**Assigned To:** _____________  
**Completed Date:** _____________

---

### Issue #15: Image Loading States ❌
**Status:** 🔴 Not Started  
**Priority:** P3 - Low  
**Effort:** 2 hours  
**Impact:** Low - Perceived performance

**Problem:**
- Images appear suddenly when loaded
- No blur-up placeholder effect
- Feels janky on slow connections

**Solution:**
Add blur placeholders to Next.js Image components

**Implementation:**
```tsx
<Image
  src="..."
  alt="..."
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // Generate with sharp
/>
```

**Assigned To:** _____________  
**Completed Date:** _____________

---

### Issue #16: Swipe Gestures for Galleries ❌
**Status:** 🔴 Not Started  
**Priority:** P3 - Low  
**Effort:** 4 hours  
**Impact:** Low - Enhancement

**Problem:**
- Lookbook and image galleries don't support swipe
- Common mobile pattern expected by users
- Currently requires tapping arrows

**Location:**
- File: `components/Lookbook.tsx`

**Implementation:**
Use library like `react-swipeable` or implement custom touch handlers

**Assigned To:** _____________  
**Completed Date:** _____________

---

### Issue #17: Pricing Card Comparison on Mobile ❌
**Status:** 🔴 Not Started  
**Priority:** P3 - Low  
**Effort:** 3 hours  
**Impact:** Low - Enhancement

**Problem:**
- Gold and Platinum cards stack vertically on mobile
- Hard to compare when they're far apart
- Need to scroll back and forth

**Location:**
- File: `app/premium/membership/page.tsx`

**Solution:**
Add sticky "Compare Plans" button that shows side-by-side modal

**Assigned To:** _____________  
**Completed Date:** _____________

---

## 📚 DOCUMENTATION & BEST PRACTICES

### Doc #1: Update Design System ❌
**Priority:** P1  
**Effort:** 2 hours

**Tasks:**
- [ ] Document mobile-first approach
- [ ] Add touch target specifications (44px minimum)
- [ ] Document button variants for mobile
- [ ] Add mobile spacing guidelines
- [ ] Update component examples with mobile views

**File:** `BRAND_DESIGN_SYSTEM.md`  
**Assigned To:** _____________

---

### Doc #2: Create Mobile Component Library ❌
**Priority:** P2  
**Effort:** 4 hours

**Tasks:**
- [ ] Document all mobile variants
- [ ] Add code examples
- [ ] Include do's and don'ts
- [ ] Add accessibility notes
- [ ] Include testing criteria

**New File:** `MOBILE_COMPONENT_LIBRARY.md`  
**Assigned To:** _____________

---

### Doc #3: Mobile Testing Checklist ❌
**Priority:** P2  
**Effort:** 1 hour

**Tasks:**
- [ ] Document required devices
- [ ] List test scenarios
- [ ] Include accessibility tests
- [ ] Add performance benchmarks
- [ ] Create testing template

**New File:** `MOBILE_TESTING_CHECKLIST.md`  
**Assigned To:** _____________

---

## 📊 PROGRESS TRACKING

### Overall Progress
- **Total Issues:** 25
- **Completed:** 0 (0%)
- **In Progress:** 0 (0%)
- **Not Started:** 25 (100%)

### By Priority
- **Critical (P0):** 0/3 complete (0%)
- **High (P1):** 0/5 complete (0%)
- **Medium (P2):** 0/5 complete (0%)
- **Low (P3):** 0/4 complete (0%)
- **Documentation:** 0/8 complete (0%)

### By Sprint
- **Sprint 1 (Week 1):** 0/8 complete
- **Sprint 2 (Week 2):** 0/5 complete
- **Sprint 3 (Week 3):** 0/5 complete
- **Sprint 4 (Week 4):** Testing phase

### Quick Wins Status
- [ ] Issue #4: Search button width (2 min)
- [ ] Issue #3: Hero height (5 min) - partial
- [ ] Issue #6: Footer links (5 min)
- [ ] Issue #1: Menu button (5 min) - partial

**Quick Wins Total:** 0/4 complete

---

## 🎯 WEEKLY GOALS

### Week 1 Goals (By Oct 19)
- [ ] Complete all 3 critical issues
- [ ] Complete all 4 quick wins
- [ ] Complete at least 3 high priority issues
- [ ] Set up testing environment

**Target Metrics:**
- Touch target compliance: 100%
- Mobile usability score: 90+

### Week 2 Goals (By Oct 26)
- [ ] Complete remaining high priority issues
- [ ] Start medium priority issues
- [ ] Complete multi-step form
- [ ] Real device testing begins

**Target Metrics:**
- Form completion rate: 60%+
- WCAG compliance: 95%+

### Week 3 Goals (By Nov 2)
- [ ] Complete all medium priority issues
- [ ] Polish and refinements
- [ ] Update documentation
- [ ] Accessibility audit

**Target Metrics:**
- Mobile usability score: 95+
- All accessibility tests passing

### Week 4 Goals (By Nov 9)
- [ ] Complete comprehensive testing
- [ ] Fix all bugs found
- [ ] Final sign-off
- [ ] Deploy to production

**Target Metrics:**
- All issues resolved
- Production ready

---

## 📝 NOTES & DECISIONS

### Design Decisions Log
| Date | Issue | Decision | Reason |
|------|-------|----------|--------|
| Oct 12 | Audit Complete | Proceed with implementation | ROI justified |
| | | | |
| | | | |

### Blockers & Dependencies
| Issue | Blocked By | Status | Notes |
|-------|-----------|--------|-------|
| #3 (Multi-step form) | Design mockups needed | 🔴 | Need UI design |
| | | | |

### Questions for Stakeholders
- [ ] Budget approval for 100 hours? (€4,800)
- [ ] Timeline approval for 4 weeks?
- [ ] Priority order confirmed?
- [ ] Success metrics agreed?

---

**Last Updated:** October 12, 2025  
**Next Review:** _____________  
**Update Frequency:** Daily during implementation

**Report Issues:** Add notes in this document and mention in standup

