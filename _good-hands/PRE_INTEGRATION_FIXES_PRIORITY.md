# 🔧 PRE-INTEGRATION FIXES - Priority List
## Fix These BEFORE Stripe/Notion Integration

**Date:** October 12, 2025  
**Priority:** CRITICAL - Fix visual/UX issues first  
**Status:** User-identified issues + AI team documentation

---

## 🚨 CRITICAL ISSUES (Fix TODAY - 2-3 hours)

### Issue #1: Hero Scrolling Overlap with Navbar ❌
**Problem:**
- Hero section `marginTop: 80px` causes overlap issues
- Navbar z-index conflicts
- Content hidden behind fixed navbar
- Poor scroll behavior

**Files Affected:**
- `/components/HeroModern.tsx` Line 8
- `/app/chiado/page.tsx` and all 7 other neighborhood pages
- `/components/Hero.tsx` (if still in use)

**Fix:**
```tsx
// HeroModern.tsx - Line 8
// CHANGE FROM:
<section className="relative flex items-center justify-center overflow-hidden" 
  style={{ height: 'calc(100vh - 80px)', marginTop: '80px', minHeight: '500px' }}>

// CHANGE TO:
<section className="relative flex items-center justify-center overflow-hidden mt-20" 
  style={{ minHeight: '600px', height: 'calc(100vh - 80px)' }}>

// Better approach - use Tailwind classes:
<section className="relative flex items-center justify-center overflow-hidden mt-20 min-h-[400px] md:min-h-[600px] h-[calc(100vh-80px)]">
```

**Apply To:**
- [ ] `/components/HeroModern.tsx`
- [ ] `/app/alfama/page.tsx`
- [ ] `/app/avenida/page.tsx`
- [ ] `/app/baixa/page.tsx`
- [ ] `/app/belem/page.tsx`
- [ ] `/app/cascais/page.tsx`
- [ ] `/app/chiado/page.tsx`
- [ ] `/app/principe-real/page.tsx`
- [ ] `/app/sintra/page.tsx`

**Time:** 20 minutes  
**Impact:** HIGH - Fixes major UX issue

---

### Issue #2: Search Bar Overlap/Spacing ❌
**Problem:**
- Search section ID="#search" but no smooth scroll
- SearchBar position causes overlap
- Button width inconsistent on mobile
- No proper scroll padding

**Files Affected:**
- `/components/SearchBar.tsx`
- `/app/globals.css` (scroll-padding)

**Fix 1 - Search Bar Component:**
```tsx
// SearchBar.tsx - Line 86
// ADD w-full md:w-auto to button:
className="w-full md:w-auto px-8 py-3 bg-ink text-white rounded-sm font-medium hover:bg-ink-light transition-all focus-visible-ring"
```

**Fix 2 - Add Scroll Padding:**
```css
// globals.css - Add to html selector
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Navbar height */
}
```

**Testing:**
- [ ] Click "Book Now" in hero
- [ ] Scroll to search smoothly
- [ ] No overlap with navbar
- [ ] Search button full-width on mobile

**Time:** 10 minutes  
**Impact:** HIGH - Fixes navigation flow

---

### Issue #3: CuratedProducts with Unsplash URLs ❌
**Problem:**
- Component still has 4 Unsplash image URLs
- User said "handle later - need full shop"
- Currently visible on homepage
- Brand inconsistency

**File:** `/app/page.tsx` Line 14 & 43

**Fix:** Comment out temporarily
```tsx
// page.tsx
import HeroModern from '@/components/HeroModern'
// ... other imports ...
// import CuratedProducts from '@/components/CuratedProducts' // COMMENTED OUT - will add with shop

export default function Home() {
  return (
    <>
      <HeroModern />
      // ... other components ...
      <Lookbook />
      {/* <CuratedProducts /> */} {/* TEMPORARILY DISABLED - waiting for full shop implementation */}
      <ReviewsSnippet />
      // ... rest ...
    </>
  )
}
```

**Time:** 2 minutes  
**Impact:** HIGH - Removes Unsplash URLs

---

### Issue #4: Partnerships Page Missing Hero Image ❌
**Problem:**
- `/app/partnerships/page.tsx` has no hero image
- Just gradient background
- Looks incomplete vs other pages

**File:** `/app/partnerships/page.tsx`

**Fix:** Add hero section like other pages
```tsx
// At top of partnerships/page.tsx
import Image from 'next/image'

// Add hero section after opening div
<div className="pt-20">
  {/* Hero Section */}
  <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <Image
        src="/brand-images/experience-corporate-wellness.png"
        alt="Good Hands hotel and hospitality partnerships - luxury concierge beauty services"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
    </div>
    <div className="relative z-10 text-center text-white container-custom px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">Hotel Partnerships</h1>
      <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
        Elevating guest experiences with curated beauty concierge services
      </p>
    </div>
  </section>
  
  {/* Rest of existing content... */}
```

**Time:** 15 minutes  
**Impact:** HIGH - Completes page design

---

### Issue #5: Blog Posts Not Operational ❌
**Problem:**
- Journal page lists 10 articles
- Clicking any article goes to `/journal/[slug]`
- Only ONE actual article page exists: `/journal/finding-calm-in-chiado/page.tsx`
- Other 9 articles return 404
- Dynamic route exists but has no content

**Files:**
- `/app/journal/page.tsx` - Lists articles
- `/app/journal/[slug]/page.tsx` - Dynamic route (empty/broken)
- `/app/journal/finding-calm-in-chiado/page.tsx` - Only working article

**Fix Options:**

**Option A: Quick Fix - Make All Links Go to Working Article**
```tsx
// journal/page.tsx - Temporarily disable broken links
<Link
  href="/journal/finding-calm-in-chiado" // All point to working article
  className="group block bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
>
```

**Option B: Better Fix - Create Placeholder Article Pages**
```tsx
// Create simple placeholder for each article
// journal/[slug]/page.tsx
export async function generateStaticParams() {
  return [
    { slug: 'global-beauty-exploration' },
    { slug: 'yucatan-wellness-beauty' },
    { slug: 'mexico-city-beauty-scene' },
    // ... all 10 slugs
  ]
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const articles = {
    'global-beauty-exploration': {
      title: 'Global Beauty Exploration: Why Local Matters',
      content: '...',
    },
    // ... all article data
  }
  
  const article = articles[params.slug]
  
  return (
    <article>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </article>
  )
}
```

**Option C: BEST - Use Existing Content from MD Files**
```bash
# You have 15 blog articles in /content/blog/*.md
# Need to:
# 1. Read MD files
# 2. Parse frontmatter
# 3. Render in [slug] route
```

**Recommended:** Option B for now (2 hours), Option C later

**Time:** 2 hours (Option B) or 4 hours (Option C)  
**Impact:** HIGH - Makes blog functional

---

## 🟡 HIGH PRIORITY (Fix This Week - 4-6 hours)

### Issue #6: No New Blog/Journal Images Generated ❌
**Problem:**
- Journal articles use brand images
- NOT specific to article content
- Need 10 unique hero images for blog posts
- Current: Reusing same 8 brand images

**What's Needed:**
10 new images in same style as brand images for:
1. Global Beauty Exploration
2. Yucatan Wellness
3. Mexico City Beauty
4. Bridal Hair Trends 2026
5. Wellness Rituals Lisbon
6. Portuguese Beauty Rituals
7. Wedding Beauty Timeline
8. Lisbon Hidden Gems
9. Summer Skincare Mediterranean
10. Portuguese Nail Art

**Options:**

**A. Use Gemini (Like before):**
```bash
# Prompts similar to existing brand images:
"Luxury beauty editorial photography, [specific topic], 
minimalist aesthetic, soft natural lighting, 
sage green and gold accents, high-end beauty magazine style"
```

**B. Use existing brand images (temporary):**
Map articles to closest existing images

**C. Professional photography (later):**
Part of Week 4 plan

**Recommended:** Option A - Generate 10 new images with Gemini

**Time:** 2-3 hours  
**Impact:** MEDIUM - Improves blog visual quality

---

### Issue #7: Mobile Hero Height Too Large ❌
**Already Documented in Bug Tracker as Bug #4**

**Problem:**
- Hero height 500px minimum
- On iPhone SE (568px tall): Takes 88% of screen
- Users must scroll to see any content
- Bad first impression

**Fix:**
```tsx
// HeroModern.tsx and all neighborhood pages
// CHANGE minHeight from 500px to 400px
className="relative flex items-center justify-center overflow-hidden mt-20 min-h-[400px] md:min-h-[600px] h-[calc(100vh-80px)]"
```

**Time:** 15 minutes (already in bug tracker)  
**Impact:** HIGH - Mobile UX

---

### Issue #8: Navbar Z-Index Conflicts ❌
**Problem:**
- Navbar z-index: `var(--z-fixed)` = 1000
- Some content may overlap
- Sticky positioning issues

**File:** `/components/Navbar.tsx` Line 33

**Fix:**
```tsx
// Navbar.tsx - Line 29-33
<nav
  className={`fixed top-0 left-0 right-0 transition-all duration-500 z-50 ${
    isScrolled ? 'bg-white/98 backdrop-blur-md shadow-sm' : 'bg-white/95 backdrop-blur-sm'
  }`}
>
```

**Better:** Remove inline z-index style, use Tailwind class

**Time:** 5 minutes  
**Impact:** MEDIUM - Prevents overlap issues

---

## 🟢 MEDIUM PRIORITY (Week 2 - 3-4 hours)

### Issue #9: Lookbook Images Fallback ❌
**Problem:**
- Lookbook tries to load `/lookbook/lookbook.json`
- Falls back to hardcoded images if JSON not found
- JSON file should exist at `/public/lookbook/lookbook.json`

**File:** `/components/Lookbook.tsx` Line 20

**Check:**
```bash
ls -la /Users/pascalfrey/Repo/narratumio/_good-hands/public/lookbook/
```

**Fix if missing:**
```json
// public/lookbook/lookbook.json
{
  "images": [
    {
      "id": "1",
      "src": "/brand-images/hero-salon-interior.png",
      "alt": "Luxury salon interior Chiado - Good Hands beauty concierge",
      "caption": "Luxe styling in Chiado"
    },
    // ... 5 more images
  ]
}
```

**Time:** 10 minutes  
**Impact:** LOW - Already has fallback

---

### Issue #10: Search Term Not Used ❌
**Problem:**
- SearchBar component captures search term
- Passes category to services page
- But searchTerm (`q` parameter) is NOT passed
- Services page doesn't actually filter by search term

**File:** `/components/SearchBar.tsx` Line 21-32

**Fix:**
```tsx
// SearchBar.tsx - Line 24-26
const params = new URLSearchParams()

if (searchTerm && searchTerm.trim()) {
  params.set('q', searchTerm.trim())
}

if (selectedCategory && selectedCategory !== 'all') {
  params.set('category', selectedCategory)
}
```

**Then in Services Page:**
```tsx
// app/services/page.tsx
'use client'
import { useSearchParams } from 'next/navigation'

export default function ServicesPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')
  const category = searchParams.get('category')
  
  // Filter services based on query and category
  const filteredServices = services.filter(service => {
    if (query && !service.name.toLowerCase().includes(query.toLowerCase())) {
      return false
    }
    if (category && service.category !== category) {
      return false
    }
    return true
  })
  
  return (
    // Render filteredServices
  )
}
```

**Time:** 1 hour  
**Impact:** HIGH - Makes search actually work

---

## 📋 COMPLETE PRIORITY ORDER

### TODAY (2-3 hours total):
1. ✅ **2 min:** Comment out CuratedProducts (#3)
2. ✅ **10 min:** Fix search button width & scroll padding (#2)
3. ✅ **15 min:** Add hero to partnerships page (#4)
4. ✅ **20 min:** Fix hero scroll overlap all pages (#1)
5. ✅ **5 min:** Fix navbar z-index (#8)

**Total:** ~50 minutes of fixes

### THIS WEEK (4-6 hours):
6. ✅ **2 hours:** Make blog posts operational (Option B) (#5)
7. ✅ **2-3 hours:** Generate 10 new blog images with Gemini (#6)
8. ✅ **15 min:** Fix mobile hero height (#7 - already in bug tracker)
9. ✅ **1 hour:** Make search actually filter results (#10)

**Total:** ~6 hours

### WEEK 2:
10. ✅ Complete blog system with MD files (#5 Option C)
11. ✅ All other bugs from BUG_TRACKER
12. ✅ Then integrations (Stripe, Notion, etc.)

---

## ✅ TESTING CHECKLIST (After Fixes)

### Visual/UX Tests:
- [ ] Hero doesn't overlap navbar
- [ ] Scroll to #booking works smoothly
- [ ] No content hidden behind navbar
- [ ] All pages have proper hero images
- [ ] Mobile hero height appropriate (400px not 500px)
- [ ] CuratedProducts not visible (commented out)
- [ ] Partnerships page has hero image

### Functional Tests:
- [ ] Click blog post → article displays (not 404)
- [ ] All 10 blog posts work
- [ ] Search bar passes query parameter
- [ ] Services page filters by search term
- [ ] Search button full-width on mobile
- [ ] Navbar z-index doesn't conflict

### Image Tests:
- [ ] No Unsplash URLs visible anywhere
- [ ] All hero images load
- [ ] Blog images unique and relevant
- [ ] Lookbook images display
- [ ] Brand consistency maintained

---

## 🚫 DO NOT START UNTIL THESE ARE FIXED

**Block these until above fixes complete:**
- ❌ Stripe integration setup
- ❌ Notion workspace configuration
- ❌ Make.com scenarios
- ❌ Customer.io setup
- ❌ Intercom configuration
- ❌ Any external service integration

**Reason:** Visual/UX bugs will confuse testing and configuration. Fix foundation first.

---

## 📊 PROGRESS TRACKER

### Status:
- [ ] Issue #1: Hero overlap - NOT FIXED
- [ ] Issue #2: Search bar spacing - NOT FIXED
- [ ] Issue #3: CuratedProducts - NOT FIXED
- [ ] Issue #4: Partnerships hero - NOT FIXED
- [ ] Issue #5: Blog posts 404 - NOT FIXED
- [ ] Issue #6: Blog images - NOT GENERATED
- [ ] Issue #7: Mobile hero height - NOT FIXED
- [ ] Issue #8: Navbar z-index - NOT FIXED
- [ ] Issue #9: Lookbook JSON - NOT CHECKED
- [ ] Issue #10: Search filtering - NOT FIXED

**Progress:** 0/10 (0%)

### After Today's Fixes:
**Target:** 5/10 (50%) - Issues #1-4, #8

### After This Week:
**Target:** 10/10 (100%) - All visual/UX issues resolved

---

## 💡 WHY THIS ORDER?

1. **Visual First:** Users see the site before using features
2. **UX Second:** Navigation and flow must work smoothly
3. **Content Third:** Blog posts and images complete the experience
4. **Integrations Last:** Only after solid foundation

**This prevents:**
- ❌ Testing payment flows with broken navigation
- ❌ Configuring CRM with confusing UX
- ❌ Generating test data on broken pages
- ❌ Having to fix issues twice (before & after integration)

---

## 🎯 NEXT STEPS

### Right Now:
1. Open this file
2. Start with Issue #3 (2 min) - comment out CuratedProducts
3. Move to Issue #2 (10 min) - search bar fixes
4. Then Issue #4 (15 min) - partnerships hero
5. Then Issue #1 (20 min) - hero scroll overlap
6. Then Issue #8 (5 min) - navbar z-index

**Total time:** ~50 minutes  
**Result:** Major visual/UX improvements

### After Today's Fixes:
- Test everything
- Commit changes
- Deploy
- Review with fresh eyes
- Move to blog fixes

### This Week:
- Fix blog operational issues
- Generate blog images
- Complete search functionality
- THEN ready for integrations

---

**Status:** Ready to start fixing  
**Priority:** Do these BEFORE any configuration/integration work  
**Timeline:** Today + this week = Ready for integrations

---

**Let's fix the foundation before building on top of it!** 🔧

