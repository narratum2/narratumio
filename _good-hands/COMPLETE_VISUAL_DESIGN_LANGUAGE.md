# Good Hands — Complete Visual Design Language
## The Single System for Perfect Visual Coherence

**Version:** 1.0  
**Date:** October 11, 2025  
**Status:** ACTIVE - All pages must follow this exactly

---

## 🎨 THE UNIFIED VISUAL SYSTEM

### Design Philosophy
"Elegant restraint meets Portuguese warmth"

**What This Means:**
- Generous white space (never cramped)
- Sophisticated typography (refined serif + clean sans)
- Muted, warm color palette (cream, sand, gold)
- High-quality imagery (natural light, Lisbon-specific)
- Subtle animations (smooth, never flashy)
- Editorial layout (magazine quality)

---

## 📐 LAYOUT SYSTEM

### Grid Structure
```
Desktop: 12-column grid, 32px gutters, max-width 1400px
Tablet:  8-column grid, 24px gutters, max-width 100%
Mobile:  4-column grid, 16px gutters, max-width 100%
```

### Spacing Scale (Use ONLY these values)
```css
xs:  8px   /* Tight spacing, icon gaps */
sm:  16px  /* Element spacing */
md:  24px  /* Component spacing */
lg:  32px  /* Section spacing (mobile) */
xl:  48px  /* Section spacing (tablet) */
2xl: 64px  /* Section spacing (desktop) */
3xl: 96px  /* Major section breaks */
4xl: 128px /* Hero sections */
```

### Section Padding (Consistent Everywhere)
```css
.section-padding {
  padding-top: 64px;    /* Mobile */
  padding-bottom: 64px;
}

@media (min-width: 768px) {
  padding-top: 96px;    /* Tablet */
  padding-bottom: 96px;
}

@media (min-width: 1024px) {
  padding-top: 128px;   /* Desktop */
  padding-bottom: 128px;
}
```

### Container Width
```css
.container-custom {
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 16px;   /* Mobile */
  padding-right: 16px;
}

@media (min-width: 640px) {
  padding-left: 24px;   /* Tablet */
  padding-right: 24px;
}

@media (min-width: 1024px) {
  padding-left: 32px;   /* Desktop */
  padding-right: 32px;
}
```

---

## ✍️ TYPOGRAPHY SYSTEM

### Font Family Rules

**Primary: Inter (Sans-Serif)**
- Usage: Body copy, navigation, buttons, forms, UI elements
- Weights: 400 (Regular), 500 (Medium), 600 (Semi-Bold)
- Line Height: 1.6 for body, 1.4 for UI

**Secondary: Playfair Display (Serif)**
- Usage: Headlines, section titles, quotes, brand moments
- Weights: 600 (Semi-Bold) only
- Line Height: 1.2 for headlines

### Type Scale (Fixed Sizes)

```css
/* DESKTOP */
H1 Hero:     text-6xl (60px)  font-serif  font-semibold  leading-tight
H1 Page:     text-5xl (48px)  font-serif  font-semibold  leading-tight
H2 Section:  text-4xl (36px)  font-serif  font-semibold  leading-snug
H3 Sub:      text-2xl (24px)  font-serif  font-semibold  leading-normal
H4 Small:    text-xl (20px)   font-serif  font-semibold  leading-normal

Body Large:  text-lg (18px)   font-sans   font-normal   leading-relaxed
Body:        text-base (16px) font-sans   font-normal   leading-relaxed
Small:       text-sm (14px)   font-sans   font-normal   leading-normal
Tiny:        text-xs (12px)   font-sans   font-normal   leading-normal

/* MOBILE (Automatically scales down) */
H1 Hero:     text-4xl (36px)
H1 Page:     text-3xl (30px)
H2 Section:  text-3xl (30px)
H3 Sub:      text-xl (20px)
H4 Small:    text-lg (18px)
```

### Text Colors (Semantic Usage)

```css
/* Headlines */
text-ink         #1a1a1a   /* All H1, H2, H3 */

/* Body Copy */
text-harbor      #4a5568   /* Primary body text */
text-harbor/70   rgba(74, 85, 104, 0.7)  /* Secondary text */

/* Accents */
text-gold        #d4af37   /* CTAs, highlights, hover states */
text-gold-light  #e6c862   /* Gold hover */

/* Dark Backgrounds */
text-porcelain   #fafaf9   /* Text on dark sections */
text-porcelain/80 rgba(250, 250, 249, 0.8) /* Muted on dark */
```

---

## 🎨 COLOR SYSTEM

### Background Colors (Layering System)

**Layer 1: Page Foundation**
```css
bg-porcelain     #fafaf9   /* Main page background */
```

**Layer 2: Section Alternation (Use in sequence)**
```css
Section 1: bg-white      #ffffff   /* White sections */
Section 2: bg-shell      #f8f4f0   /* Warm sections */
Section 3: bg-porcelain  #fafaf9   /* Subtle sections */

/* NEVER use same background twice in a row */
```

**Layer 3: Dark Sections (Use strategically)**
```css
bg-ink           #1a1a1a   /* Final CTAs, emphasis sections */
bg-gradient-to-br from-ink via-harbor to-ink  /* Premium feel */
```

**Layer 4: Cards & Modals**
```css
bg-white         #ffffff   /* Cards on colored backgrounds */
shadow-sm                  /* Subtle elevation */
shadow-lg                  /* Modal elevation */
```

### Color Usage Rules

**Gold (#d4af37) - Use Sparingly!**
- CTAs buttons (btn-gold)
- Accent underlines
- Active states
- Star ratings
- Price highlights
- **MAX 5% of page area**

**Ink (#1a1a1a) - Authority**
- Primary CTAs (btn-primary)
- Headlines
- Final section backgrounds
- Navigation on scroll

**Harbor (#4a5568) - Support**
- Body text
- Secondary elements
- Borders (harbor/20 = rgba)

**Porcelain/Shell - Warmth**
- Page backgrounds
- Section alternation
- Breathing room

---

## 🖼️ IMAGE SYSTEM

### Image Specifications

**Hero Images (Every Page)**
```
Dimensions: 2400px × 1600px minimum (3:2 ratio)
Format: WebP with JPG fallback
Quality: 85%
Loading: Priority (eager)
Overlay: bg-gradient-to-t from-ink/60 to-transparent
Alt Text: Descriptive, includes "Lisbon"
```

**Section Images (Supporting Content)**
```
Dimensions: 1200px × 800px (3:2 ratio)
Format: WebP with JPG fallback  
Quality: 80%
Loading: Lazy
Border Radius: rounded-lg (8px)
```

**Cards/Thumbnails**
```
Dimensions: 800px × 800px (1:1 ratio)
Format: WebP
Quality: 80%
Border Radius: rounded-lg (8px)
Hover: scale-105 transform
```

**Blog Post Featured**
```
Dimensions: 1400px × 900px (14:9 editorial ratio)
Format: WebP
Quality: 85%
```

### Image Treatment Rules

**ALWAYS:**
- Natural light (no harsh flash)
- Lisbon-identifiable (architecture, tiles, streets)
- Portuguese elements visible (azulejos preferred)
- People in natural moments (no forced poses)
- Warm color grading (slightly desaturated, film-like)

**NEVER:**
- Stock photo feel
- Generic spa imagery that could be anywhere
- Cold/blue tones
- Overly retouched
- Text overlays on images (use proper overlay layer)

### Image Layout Patterns

**Full-Width Hero**
```tsx
<div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
  <div className="absolute inset-0">
    <Image src="..." fill className="object-cover" priority />
    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
  </div>
  <div className="relative z-10 text-center text-white">
    {/* Content */}
  </div>
</div>
```

**Side-by-Side (50/50)**
```tsx
<div className="grid md:grid-cols-2 gap-12 items-center">
  <div className="relative h-[500px] rounded-lg overflow-hidden">
    <Image src="..." fill className="object-cover" />
  </div>
  <div>
    {/* Text content */}
  </div>
</div>
```

**Card Grid (Consistent)**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <div className="service-card">
      <div className="relative h-64 overflow-hidden">
        <Image src={item.image} fill className="object-cover" />
      </div>
      <div className="p-6">
        {/* Content */}
      </div>
    </div>
  ))}
</div>
```

---

## 🔘 BUTTON SYSTEM

### Button Hierarchy (Only 3 Types)

**Primary (Main Action)**
```tsx
<button className="btn-primary">
  Book Your Experience
</button>

/* Style */
.btn-primary {
  background: #1a1a1a (ink)
  color: #fafaf9 (porcelain)
  padding: 14px 28px
  border-radius: 4px
  font-weight: 500
  font-size: 16px
  hover: bg-ink-light, translateY(-2px), shadow-xl
}
```

**Secondary (Alternative Action)**
```tsx
<button className="btn-secondary">
  Learn More
</button>

/* Style */
.btn-secondary {
  background: transparent
  color: #1a1a1a (ink)
  border: 2px solid #1a1a1a
  padding: 12px 28px
  hover: bg-ink, color-porcelain
}
```

**Gold (Premium/Special)**
```tsx
<button className="btn-gold">
  Become a Member
</button>

/* Style */
.btn-gold {
  background: linear-gradient(135deg, #8B7355 0%, #d4af37 50%, #8B7355 100%)
  color: #fafaf9 (porcelain)
  padding: 14px 28px
  hover: translateY(-2px), shadow-xl
}
```

### Button Usage Rules

**Every Page Must Have:**
- 1 primary CTA in hero (above fold)
- 1 primary CTA at page end
- Optional secondary CTAs in sections

**Button Text Standards:**
```
✅ GOOD:
- "Match Me with a Professional"
- "Book Your Experience"
- "Explore Services in Chiado"
- "Schedule a Consultation"

❌ BAD:
- "Click Here"
- "Learn More" (too vague)
- "Submit"
- "Go"
```

---

## 📝 FORM SYSTEM

### Input Fields (Standardized)

**Text Input**
```tsx
<input 
  type="text"
  className="input-field"
  placeholder="Your full name"
/>

/* Style */
.input-field {
  width: 100%
  padding: 12px 16px
  background: white
  border: 1px solid rgba(74, 85, 104, 0.2)
  border-radius: 4px
  font-size: 16px
  transition: all 0.3s
  
  focus: {
    outline: none
    border-color: #d4af37
    ring: 2px rgba(212, 175, 55, 0.3)
    shadow-lg
  }
}
```

**Select Dropdown**
```tsx
<select className="select-field">
  <option>Choose service...</option>
</select>

/* Style */
.select-field {
  extends: .input-field
  appearance: none
  background-image: url(chevron-down.svg)
  background-position: right 12px center
  padding-right: 40px
}
```

**Textarea**
```tsx
<textarea 
  className="textarea-field"
  rows="4"
  placeholder="Tell us about your preferences..."
/>

/* Style */
.textarea-field {
  extends: .input-field
  min-height: 120px
  resize: vertical
}
```

### Label System
```tsx
<label className="flex items-center gap-2 text-sm font-medium text-ink mb-2">
  <Icon className="w-4 h-4" />
  Full Name
</label>
```

---

## 📄 PAGE STRUCTURE TEMPLATES

### Standard Page Template

```tsx
{/* Every page follows this structure */}

{/* 1. HERO - 60-70vh */}
<section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
  <Image /> {/* Hero image with overlay */}
  <div className="relative z-10 text-center text-white">
    <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-4">
      Page Title
    </h1>
    <p className="text-xl md:text-2xl text-porcelain/90">
      Compelling subtitle
    </p>
    <button className="btn-primary mt-8">Primary CTA</button>
  </div>
</section>

{/* 2. INTRO/CONTEXT - White background */}
<section className="section-padding bg-white">
  <div className="container-custom max-w-4xl">
    <div className="text-center mb-12">
      <span className="text-sm uppercase tracking-wider text-gold font-medium mb-4 block">
        Section Label
      </span>
      <h2 className="text-4xl md:text-5xl font-serif mb-6">
        Section Headline
      </h2>
      <p className="text-xl text-harbor">
        Supporting description
      </p>
    </div>
    {/* Content */}
  </div>
</section>

{/* 3. FEATURES/BENEFITS - Shell background */}
<section className="section-padding bg-shell">
  <div className="container-custom">
    {/* Grid of benefits */}
  </div>
</section>

{/* 4. VISUAL BREAK - Image + Text 50/50 */}
<section className="section-padding bg-white">
  <div className="container-custom">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Image + Text alternating */}
    </div>
  </div>
</section>

{/* 5. SOCIAL PROOF - Porcelain background */}
<section className="section-padding bg-porcelain">
  <div className="container-custom">
    {/* Testimonials/Reviews */}
  </div>
</section>

{/* 6. FAQ - Shell background */}
<section className="section-padding bg-shell">
  <div className="container-custom max-w-4xl">
    <FAQComponent />
  </div>
</section>

{/* 7. FINAL CTA - Dark background */}
<section className="section-padding bg-ink text-white text-center">
  <div className="container-custom">
    <h2 className="text-4xl md:text-5xl font-serif mb-6">
      Final Compelling Message
    </h2>
    <p className="text-xl text-porcelain/80 mb-8">
      Supporting text
    </p>
    <button className="btn-primary">Primary CTA</button>
  </div>
</section>
```

---

## 📰 BLOG POST LAYOUT

### Editorial Blog Template

```tsx
{/* Header */}
<article className="pt-20">
  {/* Hero Image */}
  <div className="relative h-[50vh] mb-12">
    <Image src={featuredImage} fill className="object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
  </div>

  {/* Article Header */}
  <header className="container-custom max-w-3xl mb-12">
    <div className="flex items-center gap-4 text-sm text-harbor mb-4">
      <span>Category</span>
      <span>·</span>
      <time>October 11, 2025</time>
      <span>·</span>
      <span>8 min read</span>
    </div>
    
    <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
      Article Headline That Promises Value
    </h1>
    
    <p className="text-2xl text-harbor font-light leading-relaxed">
      Compelling lead paragraph that hooks the reader and summarizes
      the main benefit they'll get from this article.
    </p>
  </header>

  {/* Article Body */}
  <div className="container-custom max-w-3xl editorial-content pb-16">
    <h2>Section Headline</h2>
    <p>Body paragraph with generous line height (1.75)...</p>
    
    {/* Pull Quote */}
    <blockquote className="editorial-quote">
      "Insightful quote that reinforces the main point."
    </blockquote>
    
    {/* Image with Caption */}
    <figure className="my-12">
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <Image src={supportingImage} fill className="object-cover" />
      </div>
      <figcaption className="text-sm text-harbor/70 mt-3 text-center">
        Image caption with context
      </figcaption>
    </figure>
    
    <h3>Sub-section</h3>
    <ul>
      <li>List item with custom bullet</li>
    </ul>
    
    {/* CTA Section */}
    <div className="cta-section">
      <h3>Ready to Book?</h3>
      <p>Connect with our concierge for personalized recommendations</p>
      <button className="btn-primary mt-4">Match Me with a Professional</button>
    </div>
  </div>
</article>
```

### Blog Typography

```css
.editorial-content {
  font-size: 18px;
  line-height: 1.75;
  color: #4a5568;
}

.editorial-content h2 {
  font-size: 36px;
  font-family: 'Playfair Display';
  color: #1a1a1a;
  margin-top: 48px;
  margin-bottom: 24px;
  line-height: 1.3;
}

.editorial-content h3 {
  font-size: 24px;
  font-family: 'Playfair Display';
  color: #1a1a1a;
  margin-top: 32px;
  margin-bottom: 16px;
}

.editorial-content p {
  margin-bottom: 24px;
}

.editorial-content ul {
  margin: 24px 0;
  padding-left: 0;
}

.editorial-content li {
  padding-left: 24px;
  position: relative;
  margin-bottom: 12px;
}

.editorial-content li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: #d4af37;
}

.editorial-quote {
  border-left: 4px solid #d4af37;
  padding-left: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  margin: 32px 0;
  font-style: italic;
  font-size: 24px;
  line-height: 1.5;
  color: #4a5568;
}
```

---

## 🎴 CARD COMPONENTS

### Service Card (Consistent Design)

```tsx
<div className="service-card group">
  {/* Image Container */}
  <div className="relative h-64 overflow-hidden">
    <Image 
      src={image}
      fill
      className="object-cover transition-transform duration-600 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
  
  {/* Content */}
  <div className="p-6">
    <div className="flex items-start justify-between mb-3">
      <CustomIcon className="w-8 h-8 text-gold" />
      <span className="text-sm font-medium text-harbor">From €XX</span>
    </div>
    
    <h3 className="text-2xl font-serif font-semibold text-ink mb-2">
      Service Title
    </h3>
    
    <p className="text-harbor mb-4">
      Brief description of the service benefit
    </p>
    
    <button className="btn-secondary w-full group-hover:btn-primary transition-all">
      View Details
    </button>
  </div>
</div>

/* Styles */
.service-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}
```

---

## 🪟 MODAL/POPUP SYSTEM

### Modal Design (Consistent)

```tsx
<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
  {/* Overlay */}
  <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" />
  
  {/* Modal */}
  <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
    {/* Header */}
    <div className="sticky top-0 bg-white border-b border-harbor/10 p-6 flex items-center justify-between">
      <h2 className="text-2xl font-serif font-semibold">Modal Title</h2>
      <button className="p-2 hover:bg-shell rounded-full transition-colors">
        <CloseIcon className="w-6 h-6" />
      </button>
    </div>
    
    {/* Content */}
    <div className="p-6">
      {/* Modal content */}
    </div>
    
    {/* Footer (Optional) */}
    <div className="border-t border-harbor/10 p-6 flex gap-3 justify-end">
      <button className="btn-secondary">Cancel</button>
      <button className="btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

---

## ✨ ANIMATION SYSTEM

### Animation Principles
- **Duration:** 300-600ms (smooth, not slow)
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Trigger:** On scroll (intersection observer)
- **Subtlety:** Gentle, refined (never bouncy or flashy)

### Standard Animations

**Fade In Up (Default)**
```css
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Stagger Children (For Grids)**
```css
.stagger-children > * {
  animation: fadeInUp 0.8s ease-out backwards;
}

.stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
.stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
.stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
```

**Hover States**
```css
/* Cards */
.service-card:hover {
  transform: translateY(-8px);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Buttons */
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(26, 26, 26, 0.2);
}

/* Images */
.service-card:hover img {
  transform: scale(1.1);
  transition: transform 0.6s ease;
}
```

---

## 🎯 CONSISTENCY CHECKLIST

### Before Publishing Any Page:

**✅ Layout**
- [ ] Uses section-padding on all sections
- [ ] Container-custom for all content
- [ ] Background colors alternate (never same twice)
- [ ] Hero is 60-70vh height
- [ ] Max-width respected (1400px)

**✅ Typography**
- [ ] Headlines use font-serif font-semibold
- [ ] Body text uses font-sans font-normal
- [ ] Text colors: ink for headlines, harbor for body
- [ ] Line heights: tight (1.2) for headlines, relaxed (1.6) for body
- [ ] Type scale followed exactly

**✅ Images**
- [ ] Hero image present (2400×1600)
- [ ] 3+ supporting images throughout
- [ ] All images show Lisbon/Portuguese elements
- [ ] Proper aspect ratios maintained
- [ ] Alt text descriptive and includes location
- [ ] Lazy loading on all but hero

**✅ Buttons**
- [ ] At least 1 btn-primary in hero
- [ ] At least 1 btn-primary at page end
- [ ] Button text is action-oriented and specific
- [ ] No generic "Learn More" or "Click Here"

**✅ Spacing**
- [ ] Uses spacing scale values only
- [ ] Generous white space (never cramped)
- [ ] Breathing room around content
- [ ] Mobile padding sufficient (16px minimum)

**✅ Colors**
- [ ] Gold used sparingly (<5% of page)
- [ ] Backgrounds alternate properly
- [ ] Text contrast meets WCAG AA
- [ ] Dark sections have proper text color

**✅ Content**
- [ ] Headline above fold
- [ ] Clear value proposition
- [ ] Lisbon-specific details
- [ ] No placeholder text
- [ ] Brand voice consistent
- [ ] Clear next action (CTA)

---

## 🚀 IMPLEMENTATION ORDER

### Phase 1: Foundation (Do First)
1. Verify globals.css has all base styles
2. Ensure Tailwind config has brand colors
3. Confirm fonts loading properly
4. Test section-padding on one page

### Phase 2: Templates (Do Second)
1. Create reusable components for:
   - Hero sections
   - Section headers
   - Card grids
   - CTAs
2. Test templates on 2-3 pages

### Phase 3: Systematic Rollout (Do Third)
1. Apply to all service pages
2. Apply to all neighborhood pages
3. Apply to blog posts
4. Apply to premium pages

### Phase 4: Polish (Do Last)
1. Add animations
2. Fine-tune spacing
3. Optimize images
4. Accessibility audit

---

## 🎨 FINAL PRINCIPLE

**"If it doesn't follow this system exactly, it's wrong."**

This document is the law. No exceptions. No variations.

Every page should feel like it was designed by the same person on the same day using the same system.

**That's coherence.**

---

*Good Hands Visual Design Language v1.0*


