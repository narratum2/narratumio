# 🚨 IMMEDIATE Image Fixes Needed - October 11, 2025

## CRITICAL - Fix Now Before Further Testing

### 1. ❌ Partnerships/Hotels Page - NO HERO IMAGE
**File:** `/app/partnerships/page.tsx`  
**Issue:** Page has gradient hero but no actual hero image  
**Fix:** Add hero image section with appropriate brand image  
**Priority:** HIGH - visible page

### 2. ❌ CuratedProducts Component - 4 Unsplash URLs
**File:** `/components/CuratedProducts.tsx`  
**Lines:** 10, 19, 28, 37  
**Issue:** Product images still using Unsplash URLs  
**Current URLs:**
- Hair Cream: `https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&q=80`
- Gold Lust Shampoo: `https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80`
- Gentle Cleanser: `https://images.unsplash.com/photo-1556228578-dd3a24bef846?w=800&q=80`
- Nail Oil: `https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80`

**Decision:** REMOVE OR COMMENT OUT?
- User said "for later as we need a full shop for that"
- Options:
  1. Comment out entire `<CuratedProducts />` component from homepage
  2. Keep but replace images with brand images
  3. Hide section with CSS until ready

**Recommended:** Comment out from `page.tsx` for now

---

## 📋 Other Components to Check

### Homepage Components (page.tsx)
Current order:
1. ✅ HeroModern
2. ✅ ValueProposition
3. ✅ SearchBar
4. ✅ Services
5. ✅ CategoriesRow
6. ✅ ExperiencesPreview
7. ✅ GuidesPreview
8. ✅ JournalPreview
9. ❌ **CuratedProducts** ← NEEDS ATTENTION
10. ✅ Lookbook
11. ✅ ReviewsSnippet
12. ✅ FAQExpanded
13. ✅ BookingForm

---

## ✅ VERIFIED CORRECT

### About Page
- ✅ **HAS IMAGE** at line 291-296
- ✅ Uses `/brand-images/blog-lisbon-guide.png`
- ✅ Proper SEO alt text

### All Other Pages
- ✅ No more Unsplash URLs in `/app` directory
- ✅ All images use brand images

---

## 🎯 ACTION PLAN

**Step 1:** Comment out CuratedProducts from homepage (user said "for later")  
**Step 2:** Add hero image to Partnerships page  
**Step 3:** Re-commit and re-deploy  
**Step 4:** Continue with testing

---

**Status:** Discovered during user testing  
**Priority:** Fix before continuing Phase B testing  
**Blocker:** YES - visible on homepage and partnerships page

