# 🎯 Action Plan - User Feedback Summary (October 11, 2025)

**Created:** October 11, 2025  
**Source:** User comments during testing session  
**Priority:** HIGH - Address before final launch

---

## 📝 ISSUES IDENTIFIED

### 1. 🖼️ **Neighborhood Guides - Wrong Imagery**
**Status:** ⚠️ DOCUMENTED  
**Issue:** Guide pages using generic beauty images that don't match neighborhood descriptions  
**What's needed:** Contextually appropriate images for each neighborhood:
- Chiado → Historic elegance
- Príncipe Real → Bohemian, garden district
- Baixa → Grand boulevards
- Avenida → Luxury shopping
- Alfama → Ancient streets
- Belém → Riverside
- Sintra → Romantic hills
- Cascais → Coastal elegance

**Action:** Created `MISSING_IMAGERY_NEIGHBORHOOD_GUIDES.md` with full specifications

---

### 2. ✍️ **Blog Author Attribution**
**Status:** 🔴 TODO  
**Issue:** Blog posts need consistent author attribution  
**Required:** All blog posts should show "Good Hands Team" as author  

**Files to update:**
- `/app/journal/[slug]/page.tsx` - Dynamic blog template
- `/app/journal/finding-calm-in-chiado/page.tsx` - Individual posts

**Current state:** Various authors (Maria Santos, Sofia Martins, etc.)  
**Target state:** "Good Hands Team" for all posts

---

### 3. 📊 **CRM System for Blog Management**
**Status:** 🔴 PLANNING NEEDED  
**Question:** Which CRM will manage blog content?

**Options to evaluate:**
1. **Notion** (already in stack)
   - ✅ Already using for other content
   - ✅ Easy for non-technical team
   - ✅ API available
   - ❌ Not traditional CMS

2. **Contentful / Sanity**
   - ✅ Purpose-built for content
   - ✅ Great editing experience
   - ❌ Additional service/cost

3. **Keep Static (Current)**
   - ✅ No additional tools
   - ✅ Fast performance
   - ❌ Requires developer for updates

**Recommended:** Notion (already in stack, team familiar)

**Integration needed:**
- Notion database for blog posts
- API route to fetch from Notion
- Update `/app/journal/[slug]/page.tsx` to pull from Notion

---

### 4. 🔘 **"Book Now" Button Not Working**
**Status:** 🔴 CRITICAL - FIX NOW  
**Issue:** Book Now buttons not scrolling to booking form  
**Impact:** Users cannot book services

**Expected behavior:** Click "Book Now" → Smooth scroll to `#booking` section  
**Current behavior:** Button not functioning

**Files to check:**
- All pages with "Book Now" CTAs
- Navbar
- Hero sections
- Service pages
- Neighborhood pages

**Potential causes:**
- Missing scroll behavior
- Incorrect anchor link
- JavaScript not loading
- Fixed navigation offset issue

---

### 5. 🎨 **Design Improvements Already Made**
**Status:** ✅ COMPLETE (deployed)
- Replaced emojis with sophisticated SVG icons
- Reordered homepage (Services before ValueProposition)
- Fixed FAQ box size and design
- Fixed overlapping layout issues
- Removed CuratedProducts component
- Added hero to Partnerships page

---

## 🚨 IMMEDIATE ACTION ITEMS (Priority Order)

### CRITICAL (Fix Today)
1. **Fix "Book Now" button functionality** 🔴
   - Test all CTAs site-wide
   - Verify scroll-to-booking works
   - Check mobile behavior

### HIGH (This Week)
2. **Update blog author attribution** ⚠️
   - Change all posts to "Good Hands Team"
   - Update author bio
   - Check consistency

3. **Decide on CRM/Blog Management** ⚠️
   - Choose system (recommend Notion)
   - Plan integration
   - Document workflow

### MEDIUM (Next Sprint)
4. **Neighborhood imagery** ⚠️
   - Commission photography
   - Brief photographer
   - Shoot schedule

---

## 📂 FILES REQUIRING IMMEDIATE ATTENTION

### 1. Blog Author Updates
```
/app/journal/[slug]/page.tsx
/app/journal/finding-calm-in-chiado/page.tsx
```

### 2. Book Now Button Investigation
```
/components/Navbar.tsx
/components/Hero.tsx
/components/HeroModern.tsx
/components/BookingForm.tsx
All neighborhood pages (8)
All service pages (5)
```

### 3. CRM Integration (Future)
```
/lib/notion.ts (already exists)
/app/api/blog/route.ts (create new)
/app/journal/[slug]/page.tsx (modify to fetch from Notion)
```

---

## 🔄 WORKFLOW RECOMMENDATIONS

### Blog Content Management
**Option A: Notion-based (Recommended)**
1. Create "Blog Posts" database in Notion
2. Team writes in Notion
3. API fetches published posts
4. Site displays dynamically

**Option B: Static (Current)**
1. Developer creates MD or TSX files
2. Content hardcoded in code
3. Requires deployment for changes

---

## 📊 TRACKING

### Issues Status:
- 🔴 **Critical:** 1 (Book Now button)
- ⚠️ **High:** 2 (Blog author, CRM decision)
- 📝 **Medium:** 1 (Neighborhood imagery)
- ✅ **Complete:** 5 (Design improvements)

### Blockers:
- **Book Now button:** No blockers - fix immediately
- **Blog author:** No blockers - straightforward update
- **CRM decision:** Needs stakeholder input
- **Neighborhood imagery:** Needs photography budget/schedule

---

## 🎯 NEXT STEPS

1. **Right Now:**
   - Fix Book Now button (CRITICAL)
   - Commit and deploy fix

2. **Today:**
   - Update blog authors to "Good Hands Team"
   - Test all CTAs work correctly
   - Deploy updates

3. **This Week:**
   - Decide on CRM/blog system
   - Document integration plan
   - Plan photography shoot

4. **Next Week:**
   - Implement chosen CRM integration
   - Commission neighborhood photography
   - Final testing round

---

## 📞 QUESTIONS FOR USER

1. **CRM System:** Prefer Notion or separate CMS?
2. **Blog Management:** Who will manage blog content day-to-day?
3. **Photography:** Budget/timeline for neighborhood shoots?
4. **Priority:** Focus on Book Now fix first, then blog updates?

---

**Document Owner:** AI Development Team  
**Last Updated:** October 11, 2025  
**Status:** 🔄 In Progress - Addressing critical issues first

