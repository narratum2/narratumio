# ⚡ AI Quick Reference Guide

**Fast lookup for common operations and patterns**

---

## 🎨 Design System Tokens

### Colors (Copy-Paste Ready)
```tsx
// Backgrounds
className="bg-porcelain"        // #fafaf9 (main bg)
className="bg-shell"            // #f8f4f0 (soft accent bg)
className="bg-ink"              // #1a1a1a (dark sections)

// Text
className="text-ink"            // #1a1a1a (primary text)
className="text-harbor"         // #4a5568 (secondary text)
className="text-porcelain"      // #fafaf9 (text on dark)

// Accents
className="text-gold"           // #d4af37 (CTAs, luxury)
className="text-sage"           // #9caf88 (wellness)
className="text-coral"          // #f4a582 (energy)

// Borders
className="border-harbor/20"    // Subtle borders
className="border-stone"        // More visible borders
```

### Typography
```tsx
// Headlines
className="font-serif text-5xl font-bold"           // H1 (56px)
className="font-serif text-4xl font-semibold"      // H2 (40px)
className="font-serif text-3xl font-medium"        // H3 (28px)
className="font-sans text-xl font-semibold"        // H4 (20px)

// Body
className="font-sans text-base"                     // Body (16px)
className="font-sans text-sm text-harbor"          // Small (14px)

// Line Heights
className="leading-tight"       // 1.2 (headlines)
className="leading-relaxed"     // 1.6 (body)
```

### Spacing (8px Grid)
```tsx
// Padding
className="p-1"    // 4px
className="p-2"    // 8px
className="p-4"    // 16px
className="p-6"    // 24px
className="p-8"    // 32px
className="p-12"   // 48px
className="p-16"   // 64px
className="p-24"   // 96px

// Margins (same pattern)
className="mb-6"   // 24px bottom margin
className="mt-12"  // 48px top margin

// Section Padding
className="py-16 md:py-24 lg:py-32"  // Standard section
```

---

## 🧩 Component Patterns

### Button
```tsx
// Primary CTA
<button className="btn-primary">
  Book Now
</button>

// Secondary
<button className="btn-secondary">
  Learn More
</button>

// Gold Accent
<button className="px-6 py-3 bg-gold text-ink rounded-sm font-medium hover:bg-gold-dark transition">
  Reserve Your Spot
</button>
```

### Form Input
```tsx
<input 
  type="text"
  className="input-field"
  placeholder="Your name"
/>

// With gold focus ring
<input 
  className="w-full px-4 py-3 border border-harbor/20 rounded-sm focus:ring-2 focus:ring-gold focus:outline-none"
/>
```

### Card with Hover Effect
```tsx
<motion.div
  whileHover={{ y: -4 }}
  className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow"
>
  <h3 className="font-serif text-2xl mb-4">Service Name</h3>
  <p className="text-harbor">Description here</p>
</motion.div>
```

### Section Container
```tsx
<section className="section-padding bg-porcelain">
  <div className="container-custom">
    {/* Content */}
  </div>
</section>
```

---

## 🎬 Animation Patterns

### Fade In on Scroll
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

### Stagger Children
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: { transition: { staggerChildren: 0.1 } }
  }}
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Hover Lift
```tsx
<motion.div
  whileHover={{ y: -4 }}
  transition={{ duration: 0.2 }}
>
  {/* Card content */}
</motion.div>
```

---

## 📁 File Locations

### Pages
```
Homepage:        app/page.tsx
About:           app/about/page.tsx
Services:        app/services/page.tsx
Booking Form:    components/BookingForm.tsx
```

### Components
```
Navigation:      components/Navbar.tsx
Footer:          components/Footer.tsx
Hero:            components/Hero.tsx
FAQ:             components/FAQ.tsx
```

### Styles
```
Global CSS:      app/globals.css
Tailwind Config: tailwind.config.ts
```

### API
```
Bookings API:    app/api/bookings/route.ts
OpenAPI Spec:    app/api/openapi.json/route.ts
```

---

## 🔍 Common Search Patterns

### Find all buttons
```bash
grep -r "btn-primary\|btn-secondary" app/ components/
```

### Find hardcoded colors
```bash
grep -r "#[0-9a-f]\{6\}" app/ components/
```

### Find all images
```bash
grep -r "<Image\|<img" app/ components/
```

### Find spacing issues
```bash
grep -r "className.*m-[^0-9]" app/ components/
```

---

## ⚙️ Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start

# Lint code
npm run lint

# Deploy to Vercel
npx vercel --prod --yes
```

---

## 🐛 Common Fixes

### Fix spacing inconsistency
```tsx
// Before
<div className="mt-10 mb-5">

// After (use 8px grid)
<div className="mt-12 mb-6">
```

### Fix color outside system
```tsx
// Before
<div className="bg-[#f5f5f5]">

// After
<div className="bg-porcelain">
```

### Fix typography hierarchy
```tsx
// Before
<h2 className="text-2xl">

// After
<h2 className="font-serif text-4xl font-semibold">
```

### Add focus state
```tsx
// Before
<button className="px-6 py-3">

// After
<button className="px-6 py-3 focus:ring-2 focus:ring-gold focus:outline-none">
```

---

## 📐 Layout Patterns

### Two Column Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div>Column 1</div>
  <div>Column 2</div>
</div>
```

### Three Column Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <div key={item.id}>{item.content}</div>
  ))}
</div>
```

### Hero Section
```tsx
<section className="min-h-screen flex items-center justify-center bg-shell">
  <div className="container-custom text-center">
    <h1 className="font-serif text-6xl font-bold mb-6">
      Headline
    </h1>
    <p className="text-xl text-harbor mb-8">
      Subheadline
    </p>
    <button className="btn-primary">CTA</button>
  </div>
</section>
```

---

## 🎯 Quality Checklist

Before pushing code, verify:

- [ ] All spacing uses 8px grid (p-4, p-6, p-8, etc.)
- [ ] All colors from design system (no hardcoded hex)
- [ ] Typography follows hierarchy
- [ ] All buttons have focus states (gold ring)
- [ ] All images have alt text
- [ ] Mobile responsive (test at 375px)
- [ ] Animations are subtle (< 0.6s duration)
- [ ] No console errors
- [ ] Lighthouse score > 90

---

## 🚀 Quick Deploy

```bash
# Standard deploy flow
git add .
git commit -m "your message"
git push origin main
npx vercel --prod --yes
```

---

## 📊 Component Inventory

**15 Components:**
1. Navbar.tsx
2. Footer.tsx
3. Hero.tsx
4. SearchBar.tsx
5. CategoriesRow.tsx
6. Services.tsx
7. ExperiencesPreview.tsx
8. JournalPreview.tsx
9. GuidesPreview.tsx
10. Lookbook.tsx
11. FAQ.tsx
12. BookingForm.tsx
13. ReviewsSnippet.tsx
14. Grain.tsx

**30+ Pages:**
- Homepage + 4 main pages + 8 neighborhoods + 4 premium + API routes

---

## 💡 Pro Tips

1. **Always use design system classes** (never hardcode)
2. **Test mobile first** (most users are mobile)
3. **Add animations last** (functionality before flair)
4. **Use semantic HTML** (better for SEO and a11y)
5. **Optimize images** (use Next/Image component)
6. **Keep it simple** (restraint = sophistication)

---

**This guide is optimized for quick lookups during active development.**
