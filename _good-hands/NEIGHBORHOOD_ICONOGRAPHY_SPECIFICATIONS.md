# 🎨 Neighborhood Iconography Specifications

**Project:** Good Hands - Neighborhood Guide Icons  
**Created:** October 11, 2025  
**Priority:** HIGH  
**Status:** 🔴 Needs custom design

---

## 📋 OVERVIEW

Each of the 8 Lisbon neighborhoods needs a **unique, custom-designed icon** that:
1. Represents the character and essence of that specific area
2. Follows a unified design style across all 8 icons
3. Works in gold color (#C9A961) on white backgrounds
4. Is sophisticated and boutique-appropriate (not playful/casual)
5. Is recognizable at small sizes (24px - 48px)

---

## 🎨 DESIGN REQUIREMENTS

### Technical Specifications
- **Format:** SVG (scalable vector)
- **Size:** 24x24px base, scalable to 48px
- **Stroke:** 1.5px consistent weight
- **Style:** Line art (not filled/solid)
- **Color:** Single color (gold #C9A961)
- **Complexity:** Simple, clean, minimal detail
- **Consistency:** All 8 icons should feel like a cohesive set

### Design Style
- **Aesthetic:** Sophisticated, editorial, boutique
- **Inspiration:** Luxury travel guides, boutique hotel signage
- **NOT:** Playful, cartoonish, emoji-like, generic
- **Reference:** Think Monocle magazine, Design Hotels iconography

---

## 🏛️ NEIGHBORHOOD-SPECIFIC ICON CONCEPTS

### 1. **Chiado** 
**Character:** Historic elegance, cultural district, theaters, refined  
**Icon Concept:**
- Historic theater facade outline
- Classical column with decorative capital
- Opera mask (theatrical heritage)
- Book/library (literary district)
- Ornate street lamp

**Best Option:** Classical column with elegant capital  
**Why:** Instantly recognizable, represents grandeur and history

---

### 2. **Príncipe Real**
**Character:** Bohemian, garden district, trendy, design-forward  
**Icon Concept:**
- Stylized tree in circular garden
- Cedar tree (iconic to the area)
- Garden pavilion outline
- Fountain with flowing water
- Art deco pattern

**Best Option:** Stylized cedar tree in circular frame  
**Why:** The giant cedar tree is THE landmark of Príncipe Real

---

### 3. **Baixa**
**Character:** Grand boulevards, downtown, Pombaline architecture, grid  
**Icon Concept:**
- Triumphal arch (Rua Augusta Arch)
- Grid pattern (Pombaline layout)
- Street grid from above
- Symmetrical facade
- Cobblestone pattern (calçada portuguesa)

**Best Option:** Simplified Rua Augusta Arch  
**Why:** Most iconic landmark, represents grandeur

---

### 4. **Avenida da Liberdade**
**Character:** Luxury boulevard, Champs-Élysées style, high-end shopping  
**Icon Concept:**
- Tree-lined avenue perspective
- Luxury shopping bag
- Art nouveau kiosk
- Monument (Restauradores Square)
- Palm tree line

**Best Option:** Tree-lined avenue in perspective  
**Why:** Captures the essence of the grand boulevard

---

### 5. **Alfama**
**Character:** Ancient, winding streets, fado music, authentic, traditional  
**Icon Concept:**
- Winding narrow street path
- Portuguese guitar (fado)
- Tram line ascending
- Castle walls/fortress
- Azulejo tile pattern

**Best Option:** Winding street path (meandering line)  
**Why:** Represents the maze-like authentic character

---

### 6. **Belém**
**Character:** Riverside, monuments, historic discoveries, waterfront  
**Icon Concept:**
- Belém Tower simplified
- Ship/caravel (Age of Discovery)
- River waves
- Monument to Discoveries outline
- Lighthouse

**Best Option:** Stylized Belém Tower  
**Why:** THE iconic landmark, universally recognized

---

### 7. **Sintra**
**Character:** Romantic, fairy-tale palaces, nature, mystical hills  
**Icon Concept:**
- Palace turret/spire
- Mountain outline with palace
- Castle crenellations
- Spiral tower (Pena Palace)
- Mystical forest trees

**Best Option:** Palace turret with mountain outline  
**Why:** Captures romantic palace-in-hills essence

---

### 8. **Cascais**
**Character:** Coastal, marina, beach resort, seaside elegance  
**Icon Concept:**
- Lighthouse by the sea
- Sailboat/yacht
- Wave and shoreline
- Marina pier
- Coastal fortress

**Best Option:** Lighthouse with wave  
**Why:** Quintessentially coastal, elegant, nautical

---

## 🎨 UNIFIED DESIGN LANGUAGE

### Common Elements Across All Icons:
1. **Line weight:** 1.5px consistent
2. **Detail level:** 3-5 main elements per icon
3. **Geometric base:** Each icon fits in 24x24px grid
4. **Style:** Outlined, not filled
5. **Sophistication:** Architectural/landmark focus, not abstract

### Style Consistency:
```
All icons should:
- Use clean, geometric lines
- Have similar visual weight
- Work well in a row together
- Feel cohesive as a set
- Be recognizable even without labels
```

---

## 📐 IMPLEMENTATION PLAN

### Phase 1: Design (External Designer)
1. **Brief designer** with this document
2. **Request:** Initial sketches for all 8 icons
3. **Review:** Ensure consistency and sophistication
4. **Refine:** Polish to final versions
5. **Deliver:** SVG files optimized

**Timeline:** 1-2 weeks  
**Deliverable:** 8 SVG files, each 24x24px base

---

### Phase 2: Implementation (Development)
1. **Create React components** for each icon
2. **Replace placeholder icons** in GuidesPreview.tsx
3. **Add icons to guides page** (app/guides/page.tsx)
4. **Ensure responsiveness** across devices
5. **Test visual consistency** across pages

**Timeline:** 1 day  
**Deliverable:** Icons implemented site-wide

---

## 📂 FILE STRUCTURE

### SVG Files Location:
```
/public/icons/neighborhoods/
  ├── chiado.svg
  ├── principe-real.svg
  ├── baixa.svg
  ├── avenida.svg
  ├── alfama.svg
  ├── belem.svg
  ├── sintra.svg
  └── cascais.svg
```

### React Component Structure:
```typescript
// In components/icons/NeighborhoodIcons.tsx
export const ChiadoIcon = () => (
  <svg className="w-8 h-8" stroke="currentColor" ...>
    {/* Custom SVG path */}
  </svg>
)

export const PrincipeRealIcon = () => (
  <svg className="w-8 h-8" stroke="currentColor" ...>
    {/* Custom SVG path */}
  </svg>
)
// ... etc for all 8
```

---

## 🎯 CURRENT PLACEHOLDER ICONS

**Status:** Using generic SVG icons from Heroicons  
**Problem:** Not neighborhood-specific, too generic  
**Solution:** Custom iconography per this spec

**Placeholder Icons Currently In Use:**
- Chiado: Building icon (generic)
- Príncipe Real: Globe icon (wrong)
- Baixa: Home icon (generic)
- Avenida: Star icon (wrong)
- Alfama: Map icon (generic)
- Belém: Calendar icon (wrong)
- Sintra: House icon (generic)
- Cascais: Network icon (wrong)

**These need replacement ASAP with custom designs**

---

## 💰 BUDGET & RESOURCES

### Option A: Commission Custom Icons
**Cost:** €200-500 for set of 8  
**Timeline:** 1-2 weeks  
**Quality:** High, exactly to spec  
**Recommended:** ⭐ YES

### Option B: Use Icon Library
**Cost:** Free - €50 (icon pack)  
**Timeline:** Immediate  
**Quality:** Medium, may not fit perfectly  
**Recommended:** Only as temp solution

### Option C: AI-Generated + Designer Polish
**Cost:** €100-200  
**Timeline:** 3-5 days  
**Quality:** Medium-High  
**Recommended:** If budget-conscious

---

## 📝 DESIGN BRIEF FOR DESIGNER

**Project:** 8 Custom Neighborhood Icons for Luxury Beauty Concierge  
**Brand:** Good Hands Lisbon  
**Style:** Sophisticated, editorial, boutique luxury

**Requirements:**
1. Create 8 unique line-art icons representing Lisbon neighborhoods
2. Each icon must be recognizable and neighborhood-specific
3. Unified design language across all 8 icons
4. SVG format, 1.5px stroke weight, single color
5. Simple enough to work at 24px, detailed enough to be interesting

**Deliverables:**
- 8 SVG files (optimized)
- Preview showing all 8 together
- Color variations (gold, ink, white)

**Timeline:** 1-2 weeks  
**Budget:** TBD

**References:**
- Brand design system: BRAND_DESIGN_SYSTEM.md
- Iconography concepts: This document
- Similar style: Monocle magazine, Design Hotels, boutique travel guides

---

## ✅ ACCEPTANCE CRITERIA

Icons are ready when they meet ALL criteria:

- [ ] All 8 neighborhoods have unique, recognizable icons
- [ ] Icons work together as a cohesive visual set
- [ ] Each icon is appropriate to its neighborhood's character
- [ ] Technical specs met (SVG, 1.5px stroke, scalable)
- [ ] Icons look sophisticated and luxury-appropriate
- [ ] Icons work in gold color (#C9A961)
- [ ] Icons readable at 24px and clear at 48px
- [ ] No emojis, no generic placeholder icons
- [ ] Designer deliverables include usage guidelines

---

## 🚀 NEXT STEPS

1. **Immediate:** Commission designer or find icon solution
2. **This Week:** Receive initial icon concepts
3. **Next Week:** Finalize icons and implement
4. **Testing:** Verify icons across all devices
5. **Launch:** Deploy updated neighborhood guides

---

**Status:** 🔴 Awaiting icon design commission  
**Owner:** Design team / External designer  
**Timeline:** 1-2 weeks design + 1 day implementation  
**Priority:** HIGH (affects user experience and brand perception)

