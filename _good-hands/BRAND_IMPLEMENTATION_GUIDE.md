# 🎨 Good Hands — Brand Implementation Guide

**Developer:** Marco (Frontend)  
**Date:** January 11, 2025  
**Status:** Ready for Implementation

---

## 🎯 Quick Start

This guide helps developers implement the Good Hands brand design system. All specifications are in the [BRAND_DESIGN_SYSTEM.md](./BRAND_DESIGN_SYSTEM.md) document.

---

## 📋 Implementation Checklist

### ✅ Phase 1: Typography (30 minutes)

#### 1. Install Inter Font

**Option A: Google Fonts (Recommended)**

Update `app/layout.tsx`:

```typescript
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      {/* ... */}
    </html>
  )
}
```

**Option B: Self-hosted**

Download Inter from: https://rsms.me/inter/  
Place in `/public/fonts/`

Update `globals.css`:

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Variable.woff2') format('woff2');
  font-weight: 100 900;
  font-display: swap;
}
```

#### 2. Update Tailwind Config

Update `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
  serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
},
```

#### 3. Update globals.css

Replace font stack:

```css
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;
}
```

---

### ✅ Phase 2: Logo Implementation (20 minutes)

#### 1. Add Logo to Navbar

Update `components/Navbar.tsx`:

**Option A: SVG Logo (Better)**

```tsx
import Image from 'next/image'

<Link href="/" className="flex items-center gap-2 focus-visible-ring">
  <Image 
    src="/brand-assets/logo/logo-primary.svg"
    alt="Good Hands"
    width={180}
    height={40}
    priority
  />
</Link>
```

**Option B: Text with Styled Component**

```tsx
<Link href="/" className="flex flex-col items-start focus-visible-ring">
  <span className="text-2xl font-serif font-semibold text-ink tracking-tight">
    Good Hands
  </span>
  <svg width="80" height="4" viewBox="0 0 80 4" className="mt-1">
    <path d="M 0 2 Q 40 4, 80 2" stroke="#d4af37" strokeWidth="2" fill="none"/>
  </svg>
</Link>
```

#### 2. Add Favicon

Replace `/public/favicon.ico` with `/brand-assets/logo/logo-icon.svg`

Update `app/layout.tsx`:

```tsx
<head>
  <link rel="icon" href="/brand-assets/logo/logo-icon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/brand-assets/logo/logo-icon.svg" />
</head>
```

---

### ✅ Phase 3: Color System Enhancement (15 minutes)

#### Update Tailwind Config

Add new color variants to `tailwind.config.ts`:

```typescript
colors: {
  ink: {
    DEFAULT: '#1a1a1a',
    light: '#2d2d2d',
    lighter: '#404040',
  },
  porcelain: {
    DEFAULT: '#fafaf9',
    dark: '#f5f5f4',
    darker: '#e7e5e4',
  },
  shell: {
    DEFAULT: '#f8f4f0',
    dark: '#f0ebe5',
    darker: '#e8e0d8',
  },
  harbor: {
    DEFAULT: '#4a5568',
    light: '#718096',
    dark: '#2d3748',
  },
  gold: {
    DEFAULT: '#d4af37',
    light: '#e6c862',
    dark: '#b8941f',
  },
  sage: {
    DEFAULT: '#9caf88',
    light: '#b8c9a8',
    dark: '#7d9268',
  },
  coral: {
    DEFAULT: '#f4a582',
    light: '#f8c0a6',
    dark: '#e88760',
  },
},
```

---

### ✅ Phase 4: Component Updates (45 minutes)

#### 1. Enhanced Button Styles

Update `globals.css`:

```css
.btn-primary {
  @apply px-7 py-3.5 bg-ink text-porcelain rounded font-medium text-base 
         transition-all duration-300 hover:bg-ink-light 
         hover:-translate-y-0.5 hover:shadow-xl 
         focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2
         active:translate-y-0;
}

.btn-secondary {
  @apply px-7 py-3 bg-transparent text-ink border-2 border-ink rounded font-medium 
         transition-all duration-300 hover:bg-ink hover:text-porcelain 
         focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2;
}

.btn-gold {
  @apply px-7 py-3.5 text-porcelain rounded font-medium text-base
         transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl
         focus:outline-none focus:ring-2 focus:ring-gold-light focus:ring-offset-2;
  background: linear-gradient(135deg, #8B7355 0%, #d4af37 50%, #8B7355 100%);
}
```

#### 2. Enhanced Card Styles

```css
.service-card {
  @apply bg-white rounded-lg overflow-hidden shadow-sm
         transition-all duration-400;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover {
  @apply -translate-y-2 shadow-2xl;
}

.service-card img {
  @apply transition-transform duration-600;
}

.service-card:hover img {
  @apply scale-110;
}
```

#### 3. Enhanced Form Inputs

```css
.input-field {
  @apply w-full px-4 py-3 bg-white border border-harbor/20 rounded 
         text-ink text-base placeholder-harbor/60
         transition-all duration-300
         focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold;
}

.input-field:focus {
  @apply shadow-lg;
}

.textarea-field {
  @apply input-field min-h-[120px] resize-y;
}

.select-field {
  @apply input-field appearance-none bg-no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%234a5568' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-position: right 12px center;
  padding-right: 40px;
}
```

---

### ✅ Phase 5: Animation System (30 minutes)

#### Add to globals.css:

```css
/* Smooth page transitions */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
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

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Utility classes */
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out;
}

.animate-scale-in {
  animation: scaleIn 0.6s ease-out;
}

/* Stagger children animations */
.stagger-children > * {
  animation: fadeInUp 0.8s ease-out backwards;
}

.stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
.stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
.stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
.stagger-children > *:nth-child(4) { animation-delay: 0.4s; }
.stagger-children > *:nth-child(5) { animation-delay: 0.5s; }
```

#### Usage in Components:

```tsx
<div className="animate-fade-in-up">
  <h1>Your Heading</h1>
</div>

<div className="stagger-children grid grid-cols-3 gap-6">
  <Card />
  <Card />
  <Card />
</div>
```

---

### ✅ Phase 6: Icon System (15 minutes)

Lucide React is already installed. Usage examples:

```tsx
import { 
  Scissors, // Hair
  Heart, // Spa
  Palette, // Makeup
  Sparkles, // Nails
  Leaf, // Wellness
  Calendar,
  MapPin,
  Phone,
  Mail,
  Search,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'

// Standard size
<Scissors className="w-6 h-6 text-ink" />

// Small
<Calendar className="w-4 h-4 text-harbor" />

// Large with color
<Heart className="w-8 h-8 text-coral" />

// With hover
<button className="group">
  <ChevronRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" />
</button>
```

---

## 🎨 Component Examples

### Hero Section

```tsx
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-shell to-porcelain">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image 
          src="/images/hero-lisbon.jpg"
          alt="Lisbon beauty"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-custom text-center z-10">
        <h1 className="font-serif text-6xl md:text-7xl font-semibold text-ink mb-6 animate-fade-in-up">
          Finding the Right Beauty<br />
          Professional Shouldn't Be<br />
          This Hard
        </h1>
        <p className="text-xl md:text-2xl text-harbor max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          We navigate Lisbon's beauty scene so you don't have to
        </p>
        <div className="flex gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button className="btn-primary">
            Match Me with a Professional
          </button>
          <button className="btn-secondary">
            Browse Services
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-harbor" />
      </div>
    </section>
  )
}
```

### Service Card

```tsx
interface ServiceCardProps {
  title: string
  description: string
  price: string
  image: string
  icon: LucideIcon
}

export default function ServiceCard({ title, description, price, image, icon: Icon }: ServiceCardProps) {
  return (
    <div className="service-card group">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image 
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <Icon className="w-8 h-8 text-gold" />
          <span className="text-sm font-medium text-harbor">From {price}</span>
        </div>
        <h3 className="font-serif text-2xl font-semibold text-ink mb-2">
          {title}
        </h3>
        <p className="text-harbor mb-4">
          {description}
        </p>
        <button className="btn-secondary w-full group-hover:btn-primary">
          View Details
          <ChevronRight className="inline-block w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}
```

### Booking Form

```tsx
'use client'

import { useState } from 'react'
import { Calendar, MapPin, User, Mail, Phone, MessageSquare } from 'lucide-react'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    neighborhood: '',
    date: '',
    message: '',
  })

  return (
    <form className="max-w-2xl mx-auto space-y-6">
      {/* Name */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-ink mb-2">
          <User className="w-4 h-4" />
          Full Name
        </label>
        <input 
          type="text"
          className="input-field"
          placeholder="Sofia Martinez"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      {/* Email */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-ink mb-2">
          <Mail className="w-4 h-4" />
          Email Address
        </label>
        <input 
          type="email"
          className="input-field"
          placeholder="sofia@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      {/* Phone */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-ink mb-2">
          <Phone className="w-4 h-4" />
          Phone Number
        </label>
        <input 
          type="tel"
          className="input-field"
          placeholder="+351 912 345 678"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      {/* Service Selection */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-ink mb-2">
          <Sparkles className="w-4 h-4" />
          Service Type
        </label>
        <select 
          className="select-field"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        >
          <option value="">Select a service...</option>
          <option value="hair">Hair Styling & Coloring</option>
          <option value="spa">Spa & Massage</option>
          <option value="makeup">Makeup Artistry</option>
          <option value="nails">Nail Services</option>
          <option value="wellness">Wellness & Meditation</option>
        </select>
      </div>

      {/* Neighborhood */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-ink mb-2">
          <MapPin className="w-4 h-4" />
          Preferred Neighborhood
        </label>
        <select 
          className="select-field"
          value={formData.neighborhood}
          onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
        >
          <option value="">Any neighborhood...</option>
          <option value="chiado">Chiado</option>
          <option value="principe-real">Príncipe Real</option>
          <option value="alfama">Alfama</option>
          <option value="baixa">Baixa</option>
          <option value="belem">Belém</option>
          <option value="cascais">Cascais</option>
        </select>
      </div>

      {/* Date */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-ink mb-2">
          <Calendar className="w-4 h-4" />
          Preferred Date
        </label>
        <input 
          type="date"
          className="input-field"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </div>

      {/* Message */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-ink mb-2">
          <MessageSquare className="w-4 h-4" />
          Additional Notes
        </label>
        <textarea 
          className="textarea-field"
          placeholder="Tell us about your style preferences, any specific requests, or questions..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      {/* Submit */}
      <button type="submit" className="btn-gold w-full">
        <Calendar className="inline-block w-5 h-5 mr-2" />
        Request Your Match
      </button>

      <p className="text-sm text-harbor text-center">
        Our concierge will respond within 2 hours with personalized professional recommendations
      </p>
    </form>
  )
}
```

---

## 🚀 Testing Checklist

After implementation:

- [ ] Test logo displays correctly on light/dark backgrounds
- [ ] Verify Inter font loads properly
- [ ] Check all color combinations for contrast (WCAG AA)
- [ ] Test button hover states
- [ ] Verify card animations are smooth (60fps)
- [ ] Test form inputs on all browsers
- [ ] Check mobile responsive behavior
- [ ] Verify icons render correctly
- [ ] Test animations on slower devices
- [ ] Check print styles (if applicable)

---

## 📱 Mobile Considerations

### Responsive Typography

```css
/* Mobile first, then scale up */
h1 { 
  @apply text-4xl md:text-6xl lg:text-7xl; 
}

h2 { 
  @apply text-3xl md:text-4xl lg:text-5xl; 
}

body { 
  @apply text-base md:text-lg; 
}
```

### Touch Targets

```css
/* Minimum 48px for touch targets */
.btn, .input-field, .nav-link {
  min-height: 48px;
  min-width: 48px;
}
```

### Mobile Navigation

```tsx
// Already implemented in Navbar.tsx
// Ensure touch-friendly spacing and sizing
```

---

## ⚡ Performance Optimization

### Font Loading

```tsx
// Use font-display: swap for better performance
const inter = Inter({ 
  display: 'swap', // Shows fallback first, then swaps
  preload: true,   // Preload font files
  subsets: ['latin'],
})
```

### Image Optimization

```tsx
// Always use Next/Image
<Image 
  src="/path/to/image.jpg"
  alt="Description"
  width={1200}
  height={800}
  quality={85} // Good balance
  placeholder="blur" // Better UX
  loading="lazy" // Except hero images
/>
```

### Animation Performance

```css
/* Use GPU-accelerated properties only */
/* ✅ Good: transform, opacity */
/* ❌ Bad: width, height, margin, padding */

.animate-smooth {
  will-change: transform, opacity; /* Hint to browser */
  transform: translateZ(0); /* Force GPU acceleration */
}
```

---

## 🐛 Common Issues & Solutions

### Issue: Fonts not loading

**Solution:**
```tsx
// Make sure fonts are imported in layout.tsx
// Check that className is applied to <html> tag
<html className={`${inter.variable} ${playfair.variable}`}>
```

### Issue: Colors not working

**Solution:**
```bash
# Rebuild Tailwind
npm run dev

# Or clear cache
rm -rf .next
npm run dev
```

### Issue: Animations janky on mobile

**Solution:**
```css
/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📚 Resources

- **Brand Design System:** [BRAND_DESIGN_SYSTEM.md](./BRAND_DESIGN_SYSTEM.md)
- **Inter Font:** https://rsms.me/inter/
- **Lucide Icons:** https://lucide.dev/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Next.js Fonts:** https://nextjs.org/docs/pages/building-your-application/optimizing/fonts

---

## 🎯 Next Steps

1. Complete Phase 1-3 (Typography, Logo, Colors) — Foundation
2. Test on multiple devices and browsers
3. Update remaining components (Phase 4)
4. Add animations (Phase 5)
5. Replace placeholder images with brand photography
6. A/B test button variations
7. Monitor Core Web Vitals

---

**Questions?** Ask Marco (Frontend Lead)  
**Last Updated:** January 11, 2025

---

*Happy coding! ✋*

