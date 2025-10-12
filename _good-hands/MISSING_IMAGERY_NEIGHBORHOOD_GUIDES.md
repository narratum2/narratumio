# 🎨 Missing Imagery - Neighborhood Guides

**Issue Identified:** October 11, 2025  
**Priority:** HIGH - Affects user experience and brand consistency

---

## 📋 Problem

Neighborhood guide pages need **contextually appropriate imagery** that matches each area's character and description. Currently using generic beauty service images that don't represent the neighborhoods.

### Current State
Each neighborhood is using random brand images:
- **Chiado** → hero-salon-interior.png (generic salon)
- **Príncipe Real** → category-hair-styling.png (hair styling)
- **Baixa** → blog-lisbon-guide.png (generic Lisbon)
- **Avenida** → salon-detail.png (salon detail)
- **Alfama** → beauty-moment.png (beauty moment)
- **Belém** → category-wellness.png (wellness)
- **Sintra** → experience-wellness-retreat.png (retreat)
- **Cascais** → category-skincare.png (skincare)

---

## 🎯 What's Needed

### Neighborhood-Specific Editorial Photography

Each neighborhood needs **1-2 hero images** that capture:
1. **The neighborhood's character** (architecture, vibe, atmosphere)
2. **Luxury beauty context** (salon exteriors, elegant interiors, beauty moments IN that area)
3. **Brand aesthetic** (editorial, sophisticated, luxury, warm tones)

---

## 📸 Image Specifications by Neighborhood

### 1. Chiado
**Character:** Historic elegance, refined, cultural, sophisticated  
**Image needs:**
- Historic building façades with elegant shop fronts
- Boutique salon exterior on cobblestone street
- Refined interior with period details
**Style reference:** Classic European elegance, golden hour lighting

---

### 2. Príncipe Real
**Character:** Bohemian, trendy, garden district, design-forward  
**Image needs:**
- Tree-lined streets or garden views
- Modern boutique salon with plants/greenery
- Hip, artistic neighborhood vibe
**Style reference:** Contemporary chic, natural light, green accents

---

### 3. Baixa
**Character:** Grand boulevards, downtown, classic, accessible  
**Image needs:**
- Wide boulevards, historic downtown architecture
- Classic salon on main street
- Elegant but traditional feel
**Style reference:** Timeless elegance, urban sophistication

---

### 4. Avenida da Liberdade
**Character:** Luxury boulevard, high-end, Champs-Élysées style  
**Image needs:**
- Tree-lined luxury avenue
- High-end spa/salon entrance
- Premium, polished atmosphere
**Style reference:** Ultimate luxury, refined details, architectural grandeur

---

### 5. Alfama
**Character:** Historic, authentic, traditional, winding streets  
**Image needs:**
- Narrow cobblestone streets
- Traditional building exteriors
- Authentic, intimate neighborhood feel
**Style reference:** Warm, inviting, historic charm

---

### 6. Belém
**Character:** Riverside, historic monuments, serene, waterfront  
**Image needs:**
- River views, waterfront setting
- Peaceful, spa-like atmosphere
- Historic grandeur mixed with calm
**Style reference:** Tranquil elegance, water reflections, soft blues

---

### 7. Sintra
**Character:** Romantic, fairy-tale, nature, palace setting  
**Image needs:**
- Lush greenery, mystical atmosphere
- Retreat-style wellness setting
- Romantic, enchanted feel
**Style reference:** Dreamy, natural, luxury retreat aesthetic

---

### 8. Cascais
**Character:** Coastal, beach resort, upscale seaside  
**Image needs:**
- Ocean views, marina, coastal setting
- Beach club or seaside spa atmosphere
- Resort elegance
**Style reference:** Bright, airy, coastal luxury, blue and white tones

---

## 🎨 Photography Style Guide

**All images must maintain:**

### Technical Specs
- **Format:** High-res (minimum 2000px width)
- **Ratio:** 16:9 or 3:2 for heroes, 1:1 for cards
- **File type:** WebP (optimized) or PNG
- **Color:** Warm, editorial tones matching brand palette

### Aesthetic Requirements
- **Lighting:** Natural light, golden hour preferred
- **Mood:** Sophisticated, aspirational, inviting
- **Focus:** Sharp, editorial quality
- **Composition:** Clean, uncluttered, professional
- **Color palette:** Ink, porcelain, shell, harbor, gold tones

### Content Guidelines
- **No people** or only hands/subtle presence
- **No text** on images
- **No obvious branding** (unless Good Hands)
- **Authentic Lisbon locations** or convincing style matches

---

## 🔄 Temporary Solution

**Current approach:**
Using best available brand images as placeholders while maintaining site functionality.

**Impact:**
- ⚠️ Reduces contextual relevance
- ⚠️ Weakens neighborhood differentiation
- ⚠️ Doesn't fully convey area character
- ✅ Maintains brand consistency and quality
- ✅ Site remains functional

---

## 📦 Delivery Format

### For each neighborhood provide:
```
/public/brand-images/neighborhood-[name]-hero.png
/public/brand-images/neighborhood-[name]-card.png (optional)
```

### Example:
```
/public/brand-images/neighborhood-chiado-hero.png
/public/brand-images/neighborhood-principe-real-hero.png
/public/brand-images/neighborhood-baixa-hero.png
...etc
```

---

## 🎯 Next Steps

1. **Photographer briefing** - Share this doc with photographer
2. **Location scouting** - Identify specific salons/spas in each area
3. **Shoot schedule** - Coordinate across neighborhoods
4. **Image selection** - Review and approve finals
5. **Implementation** - Update code with new image paths
6. **QA** - Verify all pages render correctly

**Estimated Timeline:** 2-4 weeks (shooting + editing + approval)

---

## 📝 Code Implementation Notes

### Files to update once images ready:
- `/app/guides/page.tsx` - Lines 15, 22, 29, 36, 43, 50, 57, 64
- `/components/GuidesPreview.tsx` - If adding images to preview cards

### Current image references:
```typescript
{
  name: 'Chiado',
  image: '/brand-images/neighborhood-chiado-hero.png', // UPDATE THIS
}
```

---

**Status:** 🔴 Blocked - Awaiting photography  
**Owner:** TBD (Content/Photography team)  
**Tracking:** Link to project management tool

