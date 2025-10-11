# 🤖 AI Agent Task Queue

**Auto-Generated Priority Queue for Background AI Activities**  
**Last Updated:** October 11, 2025

---

## 🚨 Critical Path (Do First)

### 1. Visual Coherence Audit
**Priority:** P0 | **Estimated:** 2-3 hours  
**Status:** 🔴 Not Started

**Tasks:**
- [ ] Audit all pages for 8px grid compliance
- [ ] Document spacing inconsistencies
- [ ] Fix typography hierarchy issues
- [ ] Standardize component margins/padding
- [ ] Create spacing violation report

**Files to Check:**
- `app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`
- All neighborhood pages (`app/chiado/`, `app/principe-real/`, etc.)
- All premium pages (`app/premium/*/page.tsx`)

**Success Criteria:**
- All spacing uses multiples of 8px
- Consistent padding across similar elements
- Clear visual rhythm established

---

### 2. Typography System Implementation
**Priority:** P0 | **Estimated:** 1-2 hours  
**Status:** 🔴 Not Started

**Tasks:**
- [ ] Verify Playfair Display loads correctly
- [ ] Check all H1-H6 follow hierarchy (56px → 40px → 28px → 20px)
- [ ] Ensure line-heights are optimal (1.2 for headings, 1.6 for body)
- [ ] Add letter-spacing refinements (-0.02em for large headings)
- [ ] Test font fallbacks

**Files to Modify:**
- `app/globals.css` (lines 20-28)
- `app/layout.tsx` (font configuration)
- `tailwind.config.ts` (font family definitions)

**Success Criteria:**
- Clear visual hierarchy on every page
- No font loading flashes (FOUT)
- Elegant letter-spacing on headlines

---

### 3. Color System Enforcement
**Priority:** P0 | **Estimated:** 1 hour  
**Status:** 🔴 Not Started

**Tasks:**
- [ ] Audit all pages for off-brand colors
- [ ] Replace hardcoded hex values with Tailwind classes
- [ ] Verify gold (#d4af37) used only for CTAs and accents
- [ ] Check sage/rose used appropriately for wellness
- [ ] Ensure porcelain background consistency

**Files to Check:**
- All `.tsx` files in `app/` and `components/`
- Search for hardcoded colors: `#[0-9a-f]{6}`

**Success Criteria:**
- Zero hardcoded colors outside design system
- Consistent color usage across all pages

---

## 🎨 High Priority (Design Excellence)

### 4. Button & CTA Standardization
**Priority:** P1 | **Estimated:** 1 hour  
**Status:** 🔴 Not Started

**Tasks:**
- [ ] Audit all buttons for consistency
- [ ] Standardize CTA copy ("Book Now" vs "Reserve" vs "Schedule")
- [ ] Ensure all buttons use btn-primary or btn-secondary classes
- [ ] Add hover states with lift effect (translateY(-2px))
- [ ] Add gold focus rings to all interactive elements

**Components to Update:**
- `components/Hero.tsx`
- `components/BookingForm.tsx`
- `components/Services.tsx`
- All page CTAs

**Success Criteria:**
- All CTAs use consistent copy
- Beautiful hover/focus states
- Gold focus rings on tab navigation

---

### 5. Image Optimization & Replacement
**Priority:** P1 | **Estimated:** 3-4 hours  
**Status:** 🔴 Not Started

**Tasks:**
- [ ] Identify all generic stock photos
- [ ] Source editorial-quality replacements (natural light, authentic)
- [ ] Optimize images (WebP format, proper sizing)
- [ ] Add lazy loading to below-fold images
- [ ] Ensure alt text is descriptive

**Image Requirements:**
- Natural light, minimal styling
- Authentic moments (not overly posed)
- Sage/white color palette alignment
- 1920px wide for hero images
- Proper aspect ratios (16:9 for hero, 4:3 for cards)

**Success Criteria:**
- No generic Unsplash stock photos
- All images aligned with Blackstones aesthetic
- Fast loading (< 2s LCP)

---

### 6. Animation & Micro-interactions
**Priority:** P1 | **Estimated:** 2 hours  
**Status:** 🔴 Not Started

**Tasks:**
- [ ] Add subtle fade-in animations on scroll
- [ ] Implement card hover effects (lift + image zoom)
- [ ] Add smooth page transitions
- [ ] Refine form field focus animations
- [ ] Test animations don't cause CLS issues

**Use Framer Motion:**
```typescript
// Example pattern:
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

**Success Criteria:**
- Subtle, elegant animations (not distracting)
- No layout shift during animations
- 60fps performance

---

## 📐 Medium Priority (UX Refinements)

### 7. Spacing Deep Dive
**Priority:** P2 | **Estimated:** 2 hours  
**Status:** 🔴 Not Started

**Tasks:**
- [ ] Add generous white space around headlines (mb-6 minimum)
- [ ] Ensure section padding uses 2xl (48px) or larger
- [ ] Fix any cramped layouts
- [ ] Add breathing room to cards (p-8 minimum)
- [ ] Verify mobile spacing scales down appropriately

**8px Grid Reference:**
```
xs: 4px   (space-1)
sm: 8px   (space-2)
md: 16px  (space-4)
lg: 24px  (space-6)
xl: 32px  (space-8)
2xl: 48px (space-12)
3xl: 64px (space-16)
4xl: 96px (space-24)
```

---

### 8. Component Consistency
**Priority:** P2 | **Estimated:** 2 hours  
**Status:** 🔴 Not Started

**Tasks:**
- [ ] Standardize card designs (same border radius, shadow, padding)
- [ ] Unify form field styling
- [ ] Ensure all icons use consistent size/weight
- [ ] Standardize link styles (underline on hover)
- [ ] Make all modals use same design pattern

**Components to Review:**
- `components/Services.tsx`
- `components/GuidesPreview.tsx`
- `components/ExperiencesPreview.tsx`
- `components/BookingForm.tsx`

---

### 9. Mobile Responsiveness Polish
**Priority:** P2 | **Estimated:** 2 hours  
**Status:** 🔴 Not Started

**Tasks:**
- [ ] Test all pages on iPhone SE (375px)
- [ ] Verify touch targets are 44px minimum
- [ ] Fix any horizontal scroll issues
- [ ] Ensure mobile menu works perfectly
- [ ] Test forms on mobile (keyboard behavior)

**Breakpoints:**
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

---

## 📝 Lower Priority (Content & Polish)

### 10. Blog/Journal Editorial Layout
**Priority:** P3 | **Estimated:** 2 hours  
**Status:** 🔴 Not Started

**Tasks:**
- [ ] Design editorial blog post template
- [ ] Add featured image with proper sizing
- [ ] Implement reading time indicator
- [ ] Add author byline with photo
- [ ] Style blockquotes, lists, code blocks

---

### 11. Pop-up/Modal Design
**Priority:** P3 | **Estimated:** 1 hour  
**Status:** 🔴 Not Started

**Tasks:**
- [ ] Design elegant modal component
- [ ] Add backdrop blur effect
- [ ] Ensure close button is accessible
- [ ] Add escape key to close
- [ ] Test modal on mobile

---

### 12. SEO & Metadata Polish
**Priority:** P3 | **Estimated:** 1 hour  
**Status:** 🔴 Not Started

**Tasks:**
- [ ] Verify all pages have unique meta descriptions
- [ ] Check Open Graph images generate correctly
- [ ] Ensure JSON-LD structured data is valid
- [ ] Test social media sharing previews
- [ ] Optimize page titles for SEO

---

## ⚡ Quick Wins (< 30 min each)

- [ ] Add smooth scroll behavior (`scroll-behavior: smooth`)
- [ ] Fix any console errors/warnings
- [ ] Add loading states to booking form
- [ ] Optimize font loading (font-display: swap)
- [ ] Add transition to mobile menu
- [ ] Fix any broken internal links
- [ ] Add "Back to top" button on long pages
- [ ] Ensure all images have alt text
- [ ] Add hover state to logo (subtle scale)
- [ ] Test all forms for validation

---

## 📊 Tracking & Metrics

### Completed: 0/12 (0%)
### In Progress: 0/12
### Blocked: 0/12

**Estimated Total Time:** 20-25 hours  
**Target Completion:** October 15, 2025

---

## 🔄 Update Protocol

**When completing a task:**
1. Change status from 🔴 to 🟢
2. Add completion date
3. Document any issues encountered
4. Update percentage complete
5. Move to next highest priority task

**Status Indicators:**
- 🔴 Not Started
- 🟡 In Progress
- 🟢 Complete
- 🔵 Blocked
- ⚪ Deferred

---

## 🎯 Success Metrics

**Track these after each task:**
- Lighthouse Performance Score
- Lighthouse Accessibility Score
- Visual coherence rating (subjective)
- User feedback (if available)
- Page load time (LCP)

**Target Goals:**
- Performance: 95+
- Accessibility: 100
- Visual Coherence: "Blackstones-level"
- LCP: < 2.0s

---

**Next Task for AI Agent:** Start with Task #1 (Visual Coherence Audit)

_This queue is optimized for parallel AI agent processing. Multiple agents can work on different priority levels simultaneously._
