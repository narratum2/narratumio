# 🤖 AI Agent Implementation Prompt - Mobile UI/UX Fixes

**For:** AI Agents taking on mobile implementation work  
**Context:** Complete mobile audit identified 25 issues to fix  
**Timeline:** 4 weeks, coordinated with Design Team  
**Your Role:** Implement fixes, write code, test, deploy

---

## 📋 COPY THIS PROMPT TO START

```
I'm an AI agent on the Good Hands project, ready to implement mobile UI/UX fixes.

CONTEXT:
- A comprehensive mobile audit identified 25 issues
- Issues range from critical (touch targets) to low priority (enhancements)
- Design team will review and approve all changes
- 4-week timeline with clear milestones

MY TASK TODAY: [Week X, Day Y from MOBILE_IMPLEMENTATION_COORDINATION.md]

WHAT I NEED TO DO:
1. Read: MOBILE_IMPLEMENTATION_COORDINATION.md (my coordination guide)
2. Read: MOBILE_ISSUES_TRACKER.md (my working checklist)
3. Read: MOBILE_AUDIT_QUICK_REFERENCE.md (technical reference)
4. Implement: [Specific task from schedule]

FILES I'LL BE EDITING:
- [List specific files from tracker]

SUCCESS CRITERIA:
- Code follows mobile-first approach
- Touch targets minimum 44px
- Tested on iPhone SE, iPhone 14, iPad
- Lighthouse mobile score maintained/improved
- Design team approves implementation

QUESTIONS FOR DESIGN TEAM:
- [Any clarifications needed before starting]

Please help me implement today's mobile UI/UX fixes following the audit recommendations and coordinating with the design team.
```

---

## 🚀 WEEK-BY-WEEK AI AGENT PROMPTS

### WEEK 1 - DAY 1: Quick Wins (AI Agent)

```
TASK: Implement 4 Quick Wins (17 minutes total)

BACKGROUND:
Mobile audit identified 4 quick fixes that will immediately improve touch target compliance from 88% to 95%.

WHAT TO DO:

1. FIX #1: Mobile Menu Button (5 min)
   File: components/Navbar.tsx
   Line: 62
   Change: className="md:hidden p-2 text-black"
   To: className="md:hidden p-3 text-black min-w-[44px] min-h-[44px] flex items-center justify-center"
   Why: Touch target currently 22px, needs 44px minimum (WCAG requirement)
   
2. FIX #2: Search Button Width (2 min)
   File: components/SearchBar.tsx
   Line: 85
   Change: className="px-8 py-3 bg-ink..."
   To: className="w-full md:w-auto px-8 py-3 bg-ink..."
   Why: Consistency - inputs are full-width on mobile, button should be too
   
3. FIX #3: Hero Height (5 min)
   File: components/HeroModern.tsx
   Line: 8
   Change: style={{ minHeight: '500px' }}
   To: style={{ minHeight: '400px' }}
   Why: 500px takes 88% of iPhone SE screen, users can't see content
   
4. FIX #4: Footer Links Padding (5 min)
   File: components/Footer.tsx
   Lines: 50, 66, 83
   Change: className="text-sm text-porcelain/70..."
   To: className="block py-2 text-sm text-porcelain/70..."
   Why: Increase touch target size for better mobile UX

TESTING:
- Test on iPhone SE (320px width)
- Test on iPhone 14 (390px width)
- Verify touch targets with browser dev tools
- Check Lighthouse mobile score

AFTER COMPLETION:
1. Post screenshots in Slack #mobile-ui-improvements
2. Update MOBILE_ISSUES_TRACKER.md (mark issues #1, #4, #6 as complete)
3. Request design team review

Please implement these 4 quick wins now.
```

---

### WEEK 1 - DAY 2: Mobile Menu Focus Management (AI Agent)

```
TASK: Implement complete mobile menu accessibility fix

FILE: components/Navbar.tsx

REQUIREMENTS FROM AUDIT:
1. Touch target: 44px × 44px minimum ✅ (Done in Day 1)
2. Focus management: Move focus to first link when menu opens
3. Focus restoration: Return focus to button when menu closes
4. ARIA attributes: aria-controls linking button to menu
5. Screen reader: Properly announce menu state

IMPLEMENTATION STEPS:

1. Add imports (line 1):
   import { useState, useEffect, useRef } from 'react'

2. Add refs (after line 18):
   const firstMenuItemRef = useRef<HTMLAnchorElement>(null)
   const menuButtonRef = useRef<HTMLButtonElement>(null)

3. Add focus management effect (after line 26):
   useEffect(() => {
     if (isOpen && firstMenuItemRef.current) {
       firstMenuItemRef.current.focus()
     } else if (!isOpen && menuButtonRef.current && 
                document.activeElement?.tagName === 'A') {
       menuButtonRef.current.focus()
     }
   }, [isOpen])

4. Update button (line 62):
   Add: ref={menuButtonRef}
   Add: aria-controls="mobile-menu"

5. Update mobile menu div (line 90):
   Add: id="mobile-menu"

6. Update first nav link (line 97):
   Add: ref={firstMenuItemRef}

TESTING CHECKLIST:
- [ ] Tab to menu button, press Enter
- [ ] Focus moves to first link
- [ ] Tab through all menu links
- [ ] Press Escape or close button
- [ ] Focus returns to menu button
- [ ] Test with VoiceOver (iOS): Menu state announced correctly
- [ ] Test with keyboard only: Full navigation possible

WCAG SUCCESS CRITERIA:
- 2.4.3 Focus Order: Focus moves logically
- 2.1.1 Keyboard: All functionality available via keyboard
- 4.1.2 Name, Role, Value: Components have proper labels

After implementation, request design team to test on real devices.
```

---

### WEEK 1 - DAY 3: Update All Hero Heights (AI Agent)

```
TASK: Update hero heights across 9 pages for mobile optimization

PROBLEM:
Current minimum height of 500px takes 88% of iPhone SE screen (568px tall).
Users must scroll to see ANY content below hero.
Creates impression of "empty" page.

SOLUTION:
Change to 400px minimum, add max-height constraint.

FILES TO UPDATE (9 total):

1. components/HeroModern.tsx (line 8)
2. app/chiado/page.tsx (line 15)
3. app/alfama/page.tsx (line 15)
4. app/avenida/page.tsx (line 15)
5. app/baixa/page.tsx (line 15)
6. app/belem/page.tsx (line 15)
7. app/cascais/page.tsx (line 15)
8. app/principe-real/page.tsx (line 15)
9. app/sintra/page.tsx (line 15)

FOR EACH FILE:

CURRENT CODE (HeroModern.tsx example):
```tsx
<section className="relative flex items-center justify-center overflow-hidden" 
  style={{ height: 'calc(100vh - 80px)', marginTop: '80px', minHeight: '500px' }}>
```

NEW CODE:
```tsx
<section className="relative flex items-center justify-center overflow-hidden mt-20
  min-h-[400px] h-[calc(100vh-80px)] max-h-[900px]">
```

CHANGES EXPLAINED:
- Remove inline style, use Tailwind classes
- mt-20: Replaces marginTop: '80px'
- min-h-[400px]: Replaces minHeight: '500px' (better for small phones)
- h-[calc(100vh-80px)]: Maintains viewport height calculation
- max-h-[900px]: Prevents hero from being too tall on large screens

FOR NEIGHBORHOOD PAGES:

CURRENT CODE (chiado/page.tsx example):
```tsx
<section className="relative h-[70vh] flex items-center justify-center">
```

NEW CODE:
```tsx
<section className="relative min-h-[400px] h-[60vh] max-h-[600px] flex items-center justify-center">
```

CHANGES EXPLAINED:
- min-h-[400px]: Minimum for small phones
- h-[60vh]: Reduced from 70vh (was too tall)
- max-h-[600px]: Prevents excessive height on large screens

TESTING CHECKLIST:
For EACH page, test on:
- [ ] iPhone SE (320px × 568px) - Hero should be ~60% of screen
- [ ] iPhone 14 (390px × 844px) - Hero should look balanced
- [ ] iPad Mini (744px × 1133px) - Hero should not be too tall
- [ ] Desktop (1440px+) - Max height should cap at 900px/600px

VISUAL CHECKS:
- [ ] Images don't get awkwardly cropped
- [ ] Text remains readable and well-positioned
- [ ] Content below hero is visible without scrolling (on most devices)
- [ ] Scroll indicator (if present) is visible

After completing all 9 pages, create comparison screenshots:
- Before: iPhone SE showing 500px hero
- After: iPhone SE showing 400px hero with content visible

Request design team to review all neighborhood pages for visual approval.
```

---

### WEEK 2 - DAY 6-8: Multi-Step Booking Form (AI Agent)

```
TASK: Implement multi-step booking form (Critical Issue #3)

CONTEXT:
Current form has 15+ fields on one page, causing:
- Scroll fatigue on mobile
- Low completion rate (~45%)
- User abandonment

SOLUTION:
3-step progressive disclosure form with progress indicator.

FILE: components/BookingForm.tsx

DESIGN MOCKUP:
[Wait for design team to provide Figma link]

STEP 1: Plan Component Structure
```tsx
// Add state
const [currentStep, setCurrentStep] = useState(1)
const totalSteps = 3

// Define step configuration
const steps = [
  {
    title: "Personal Information",
    fields: ["name", "email", "phone"],
    description: "Let's start with your contact details"
  },
  {
    title: "Service Details",
    fields: ["service", "neighborhood", "date", "time"],
    description: "Tell us what you're looking for"
  },
  {
    title: "Additional Details",
    fields: ["message"],
    description: "Any special requests?"
  }
]
```

STEP 2: Build Progress Indicator Component
```tsx
const ProgressIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-center mb-8 gap-2">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`h-1 flex-1 max-w-[100px] rounded-full transition-all duration-300 ${
            index + 1 <= currentStep ? 'bg-gold' : 'bg-gray-light'
          }`}
        />
      ))}
    </div>
  )
}
```

STEP 3: Create Step Renderer
```tsx
const renderStep = () => {
  switch(currentStep) {
    case 1:
      return (
        <motion.div
          key="step1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-serif mb-2">{steps[0].title}</h3>
          <p className="text-harbor mb-6">{steps[0].description}</p>
          
          {/* Name field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          
          {/* Email field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          
          {/* Phone field */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
        </motion.div>
      )
    
    case 2:
      return (
        <motion.div key="step2" /* ... similar structure ... */>
          {/* Service, Neighborhood, Date, Time fields */}
        </motion.div>
      )
    
    case 3:
      return (
        <motion.div key="step3" /* ... similar structure ... */>
          {/* Message field */}
        </motion.div>
      )
  }
}
```

STEP 4: Add Navigation Buttons
```tsx
const handleNext = () => {
  // Validate current step
  const currentFields = steps[currentStep - 1].fields
  const isValid = currentFields.every(field => formData[field])
  
  if (!isValid) {
    // Show error
    return
  }
  
  setCurrentStep(prev => Math.min(prev + 1, totalSteps))
}

const handleBack = () => {
  setCurrentStep(prev => Math.max(prev - 1, 1))
}

// In JSX:
<div className="flex gap-4 mt-8">
  {currentStep > 1 && (
    <button
      type="button"
      onClick={handleBack}
      className="btn-secondary flex-1"
    >
      ← Back
    </button>
  )}
  
  {currentStep < totalSteps ? (
    <button
      type="button"
      onClick={handleNext}
      className="btn-primary flex-1"
    >
      Next →
    </button>
  ) : (
    <button
      type="submit"
      disabled={isSubmitting}
      className="btn-primary flex-1"
    >
      {isSubmitting ? 'Submitting...' : 'Submit Booking'}
    </button>
  )}
</div>
```

STEP 5: Validation Per Step
```tsx
const validateStep = (stepNumber: number): boolean => {
  const fields = steps[stepNumber - 1].fields
  
  return fields.every(field => {
    const value = formData[field]
    if (!value) return false
    
    // Additional validation
    if (field === 'email') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    }
    if (field === 'phone') {
      return /^[0-9+\s()-]+$/.test(value)
    }
    
    return true
  })
}
```

TESTING REQUIREMENTS:
- [ ] Step 1: Can't proceed with empty fields
- [ ] Step 1: Email validation works
- [ ] Step 1: Phone validation works
- [ ] Step 1 → Step 2: Smooth transition
- [ ] Step 2: Can go back, data persists
- [ ] Step 2 → Step 3: Validation works
- [ ] Step 3: Submit only when valid
- [ ] Progress indicator updates correctly
- [ ] Animations smooth (300-400ms)
- [ ] Mobile keyboard doesn't cover buttons
- [ ] Form state survives page refresh (localStorage)

MOBILE-SPECIFIC TESTS:
- [ ] iPhone SE: 3 fields fit without scrolling (Step 1)
- [ ] Buttons are 48px height minimum
- [ ] Keyboard opens above buttons
- [ ] Swipe gesture doesn't trigger accidentally

SUCCESS METRICS:
- Form completion rate: Target 60%+ (from 45%)
- Time to complete: <2 minutes
- Error rate: <10%
- User feedback: Positive

Coordinate with design team daily for progress reviews.
```

---

## 🎯 GENERAL AI AGENT BEST PRACTICES

### Before Starting Any Task:

```
CHECKLIST:
1. [ ] Read the specific issue in MOBILE_ISSUES_TRACKER.md
2. [ ] Read the detailed explanation in MOBILE_UI_UX_AUDIT_REPORT_OCT_12_2025.md
3. [ ] Check if design mockup is required (ask design team)
4. [ ] Identify all files that need changes
5. [ ] Understand the "why" behind the fix
6. [ ] Note any dependencies or blockers
7. [ ] Estimate time accurately
8. [ ] Have testing plan ready
```

### During Implementation:

```
BEST PRACTICES:
- Write mobile-first code (start with smallest screen)
- Use Tailwind utilities (avoid custom CSS)
- Follow existing patterns in codebase
- Add comments for complex logic
- Test incrementally (don't wait until end)
- Post progress updates in Slack
- Ask design team questions early
- Keep changes focused (one issue at a time)
```

### After Completing Task:

```
CHECKLIST:
1. [ ] Test on 3+ devices (iPhone SE, iPhone 14, iPad)
2. [ ] Test with keyboard navigation
3. [ ] Test with screen reader (if applicable)
4. [ ] Run Lighthouse mobile audit
5. [ ] Check console for errors
6. [ ] Take screenshots/video of changes
7. [ ] Update MOBILE_ISSUES_TRACKER.md
8. [ ] Post in Slack for design review
9. [ ] Wait for approval before next task
10. [ ] Celebrate progress! 🎉
```

---

## 📱 MOBILE TESTING COMMANDS

```bash
# Start development server
npm run dev

# Open in mobile view
# Chrome DevTools: Cmd+Shift+M (Mac) or Ctrl+Shift+M (Windows)

# Test specific viewport sizes
# iPhone SE: 320px × 568px
# iPhone 14: 390px × 844px
# iPad Mini: 744px × 1133px

# Run Lighthouse mobile audit
npx lighthouse http://localhost:3000 --view --preset=desktop --only-categories=performance,accessibility,best-practices

# Check bundle size
npm run build
npm run analyze

# Test build before deploying
npm run build && npm run start
```

---

## 🔗 QUICK LINKS FOR AI AGENTS

**Reference Documents:**
- Coordination Guide: `MOBILE_IMPLEMENTATION_COORDINATION.md`
- Working Tracker: `MOBILE_ISSUES_TRACKER.md`
- Technical Reference: `MOBILE_AUDIT_QUICK_REFERENCE.md`
- Full Audit: `MOBILE_UI_UX_AUDIT_REPORT_OCT_12_2025.md`

**Code Files (Most Changed):**
- Navigation: `components/Navbar.tsx`
- Hero: `components/HeroModern.tsx`
- Form: `components/BookingForm.tsx`
- Search: `components/SearchBar.tsx`
- Footer: `components/Footer.tsx`
- Styles: `app/globals.css`
- Config: `tailwind.config.ts`

**Design Standards:**
- Brand System: `BRAND_DESIGN_SYSTEM.md`
- Touch Targets: 44px minimum
- Color Contrast: WCAG AA minimum
- Animations: 300-400ms duration
- Breakpoints: sm (640px), md (768px), lg (1024px)

---

## 🎉 SUCCESS EXAMPLE

**Example: Mobile Menu Button Fix**

```
✅ COMPLETED: Issue #1 - Mobile Menu Button Touch Target

WHAT I DID:
1. Updated button className in components/Navbar.tsx:62
   - Changed p-2 to p-3
   - Added min-w-[44px] min-h-[44px]
   - Added flex items-center justify-center
   
2. Added focus management
   - Imported useRef from React
   - Created refs for button and first menu item
   - Added useEffect for focus control
   - Added aria-controls attribute
   
3. Tested on 3 devices
   - iPhone SE: ✅ Button easy to tap
   - iPhone 14: ✅ Works perfectly
   - iPad Mini: ✅ No issues

RESULTS:
- Touch target: 22px → 48px (218% increase)
- Lighthouse accessibility: 95 → 100
- VoiceOver: Properly announced
- Keyboard nav: Works perfectly

DESIGN TEAM FEEDBACK:
Sofia: "Looks great! Approved ✓"

IMPACT:
- Touch target compliance: 88% → 92% (one button fixed)
- Accessibility score improved
- User experience enhanced

TIME TAKEN: 35 minutes (estimated 30 minutes)

LESSONS LEARNED:
- Focus management more complex than expected
- Testing with VoiceOver revealed additional issue (fixed)
- Always test on real iPhone, not just emulator

NEXT: Moving to Issue #2 (Hero Heights)
```

---

## 💬 ASKING FOR HELP

**If Stuck, Use This Template:**

```
HELP NEEDED: [Issue #X - Brief description]

WHAT I'M TRYING TO DO:
[Explain the goal]

WHAT I'VE TRIED:
1. [Approach 1] - Result: [What happened]
2. [Approach 2] - Result: [What happened]

THE PROBLEM:
[Specific issue or error]

MY QUESTION:
[Specific question for design team]

CODE SNIPPET:
```tsx
[Relevant code]
```

SCREENSHOT/VIDEO:
[Attach if helpful]

TIMELINE:
Need answer by: [Date/time]
Blocking other work: Yes/No
```

---

**Ready to implement mobile fixes?** Choose your week/day from the schedule and start!

**Questions?** Ask in #mobile-ui-improvements Slack channel.

**Let's ship great mobile UX!** 🚀📱

