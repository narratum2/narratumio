# 📐 Hero Text Readability - Contrast Fix

**Issue:** Picture and font on top needs to be well readable  
**Created:** October 11, 2025  
**Priority:** MEDIUM-HIGH  
**Status:** 🔴 Needs fixing

---

## 🚨 PROBLEM

Hero sections across the site have **poor text readability** due to:
1. Text overlaying images without sufficient contrast
2. Inconsistent overlay darkness
3. Light text on light parts of images
4. Different hero components using different approaches

---

## 📍 AFFECTED COMPONENTS

### 1. HeroModern (Homepage)
**File:** `/components/HeroModern.tsx`  
**Current:** Image with gradient overlay  
**Issue:** Text may not be readable on all image areas

### 2. Neighborhood Pages (8 pages)
**Files:** `/app/alfama/page.tsx`, `/app/chiado/page.tsx`, etc.  
**Current:** Hero images with text overlay  
**Issue:** Varying readability depending on image

### 3. Service Pages (5 pages)
**Files:** `/app/services/*/page.tsx`  
**Current:** Hero images with text overlay  
**Issue:** Some images too light for white text

### 4. Other Hero Sections
- About page
- Partnerships page
- Premium pages
- Journal pages

---

## 🎯 SOLUTION APPROACHES

### Option A: Stronger Overlay (RECOMMENDED) ⭐

Add consistent dark overlay across ALL hero images:

```typescript
{/* Image with strong overlay */}
<div className="absolute inset-0">
  <Image
    src="/image.jpg"
    alt="Hero"
    fill
    className="object-cover"
  />
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/50 to-ink/70" />
  {/* OR solid overlay */}
  <div className="absolute inset-0 bg-ink/60" />
</div>

{/* Text - now always readable */}
<div className="relative z-10 text-white">
  <h1>Always Readable</h1>
</div>
```

**Pros:**
- Simple, consistent
- Always readable
- Professional look
- Easy to implement

**Cons:**
- Darkens images (may reduce visual impact)

---

### Option B: Text Shadow + Overlay

Combine subtle overlay with strong text shadows:

```typescript
{/* Lighter overlay */}
<div className="absolute inset-0 bg-ink/40" />

{/* Text with strong shadow */}
<h1 className="text-white" style={{
  textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.5)'
}}>
  Readable Text
</h1>
```

**Pros:**
- Images more visible
- Text still readable
- More dynamic

**Cons:**
- Shadows can look heavy
- Less consistent across different images

---

### Option C: Backdrop Blur Box

Put text in a semi-transparent blurred box:

```typescript
<div className="bg-ink/80 backdrop-blur-sm rounded-lg p-8 max-w-2xl">
  <h1 className="text-white">
    Text in Box
  </h1>
  <p className="text-porcelain">
    Always readable, image still shows
  </p>
</div>
```

**Pros:**
- Very readable
- Modern aesthetic
- Image visible around box

**Cons:**
- Takes more space
- May not fit all designs

---

### Option D: Smart Overlay (Context-Aware)

Different overlay based on image brightness:

```typescript
{/* Light images get dark overlay */}
<div className="absolute inset-0 bg-ink/70" />

{/* Dark images get lighter overlay */}
<div className="absolute inset-0 bg-ink/30" />
```

**Pros:**
- Optimal for each image
- Best visual quality

**Cons:**
- Need to evaluate each image
- Not scalable
- Inconsistent

---

## 🎨 RECOMMENDED SOLUTION

### Standardize ALL Hero Overlays

**Apply to every hero section:**

```typescript
// Consistent overlay pattern
<section className="relative h-[70vh] flex items-center justify-center">
  {/* Image */}
  <div className="absolute inset-0">
    <Image
      src="/hero-image.jpg"
      alt="Hero"
      fill
      className="object-cover"
      priority
    />
    {/* CONSISTENT OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-br from-ink/70 via-ink/60 to-ink/70" />
  </div>

  {/* Content - ALWAYS READABLE */}
  <div className="relative z-10 text-center text-white container-custom">
    <h1 className="text-5xl md:text-7xl font-serif mb-6">
      Perfect Readability
    </h1>
    <p className="text-xl md:text-2xl text-porcelain mb-8">
      Subtitle always readable too
    </p>
  </div>
</section>
```

---

## 🔧 IMPLEMENTATION CHECKLIST

### Files to Update:

**Homepage:**
- [ ] `/components/HeroModern.tsx`

**Neighborhood Pages (8):**
- [ ] `/app/alfama/page.tsx`
- [ ] `/app/avenida/page.tsx`
- [ ] `/app/baixa/page.tsx`
- [ ] `/app/belem/page.tsx`
- [ ] `/app/cascais/page.tsx`
- [ ] `/app/chiado/page.tsx`
- [ ] `/app/principe-real/page.tsx`
- [ ] `/app/sintra/page.tsx`

**Service Pages (5):**
- [ ] `/app/services/hair/page.tsx`
- [ ] `/app/services/makeup/page.tsx`
- [ ] `/app/services/nails/page.tsx`
- [ ] `/app/services/skincare/page.tsx`
- [ ] `/app/services/wellness/page.tsx`

**Other Pages:**
- [ ] `/app/about/page.tsx`
- [ ] `/app/partnerships/page.tsx`
- [ ] `/app/experiences/page.tsx`
- [ ] `/app/guides/page.tsx`
- [ ] `/app/journal/page.tsx`
- [ ] Any premium pages with heroes

---

## 📐 OVERLAY SPECIFICATIONS

### Gradient Overlay (Recommended)
```css
background: linear-gradient(
  to bottom right,
  rgba(26, 26, 26, 0.7),    /* ink/70 top-left */
  rgba(26, 26, 26, 0.6),    /* ink/60 center */
  rgba(26, 26, 26, 0.7)     /* ink/70 bottom-right */
)
```

### Solid Overlay (Alternative)
```css
background: rgba(26, 26, 26, 0.65);  /* ink/65 */
```

### Text Colors on Dark Overlay
```
Heading: text-white (#ffffff)
Subtext: text-porcelain (#fafaf9) or text-white/90
Body: text-porcelain/80
```

---

## ✅ ACCEPTANCE CRITERIA

Hero text is readable when:

- [ ] All headings clearly legible on any image
- [ ] Subtitles and body text readable
- [ ] Consistent overlay darkness across site
- [ ] Works on mobile (tested)
- [ ] Works on desktop (tested)
- [ ] No accessibility issues (WCAG AA contrast)
- [ ] Professional appearance maintained
- [ ] Images still visible through overlay

---

## 🎯 WCAG CONTRAST REQUIREMENTS

**Minimum Contrast Ratios:**

- **Large text (24px+):** 3:1 minimum
- **Normal text (< 24px):** 4.5:1 minimum
- **Our target:** 7:1 (AAA level)

**With ink/70 overlay:**
- White text on overlay: ~12:1 ratio ✅
- Well above WCAG AAA requirement

---

## 🚀 IMPLEMENTATION TIMELINE

**Phase 1:** Fix critical pages (1-2 hours)
- Homepage hero
- Top 3 service pages
- Top 3 neighborhood pages

**Phase 2:** Fix all remaining pages (1-2 hours)
- All service pages
- All neighborhood pages
- Other pages with heroes

**Phase 3:** QA & Polish (30 min)
- Test across devices
- Check all overlays consistent
- Verify readability
- Final adjustments

**Total:** 3-4 hours

---

## 📊 BEFORE/AFTER

### Before (PROBLEM):
```
Text ────┐
         ↓
─────────────────
│   Light Area  │ ← Text hard to read
│               │
│  Dark Area    │ ← Text OK here
─────────────────
     Image
```

### After (SOLUTION):
```
Text ────┐
         ↓
─────────────────
│ ▓▓▓▓▓▓▓▓▓▓▓▓ │ ← Consistent overlay
│ ▓▓▓▓▓▓▓▓▓▓▓▓ │ ← Always readable
│ ▓▓▓▓▓▓▓▓▓▓▓▓ │
─────────────────
 Image (slightly
  dimmed but 
  still visible)
```

---

**Status:** 🔴 To Do - Added to task list  
**Priority:** MEDIUM-HIGH (affects UX but not blocking)  
**Owner:** Development team  
**Timeline:** Can be done in parallel with booking modal

