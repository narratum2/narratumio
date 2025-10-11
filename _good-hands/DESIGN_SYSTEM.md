# Good Hands Design System Implementation

This document describes the implemented design system for the Good Hands website, based on the comprehensive design guidelines.

## ✅ Implementation Status

All core design guidelines have been implemented in the codebase.

---

## 🎨 Color Palette

All colors are defined in `tailwind.config.ts` and as CSS variables in `globals.css`.

### Color Variables

| Variable | Hex | Tailwind Class | Usage |
|----------|-----|----------------|-------|
| `--porcelain` | `#f8f6f3` | `bg-porcelain`, `text-porcelain` | Primary background, light surfaces |
| `--ink` | `#2c2c2c` | `bg-ink`, `text-ink` | Primary text, dark backgrounds |
| `--gold` | `#d4af37` | `bg-gold`, `text-gold` | CTA buttons, accents, focus states |
| `--harbor` | `#4a5568` | `bg-harbor`, `text-harbor` | Secondary text, muted surfaces |
| `--stone` | `#8b8680` | `border-stone`, `text-stone` | Borders, subtle dividers |
| `--sage` | `#a8b5a5` | `bg-sage`, `text-sage` | Wellness highlights, success states |
| `--rose` | `#d4a5a5` | `bg-rose`, `text-rose` | Error states, occasional accent |

### Usage Guidelines
- Light backgrounds (porcelain) for most sections
- Dark backgrounds (ink) for high-contrast sections (testimonials, footers)
- Gold used sparingly for CTAs and interactive elements
- Minimum 4.5:1 contrast ratio maintained for accessibility

---

## 📝 Typography

### Fonts
- **Serif**: Playfair Display (headings)
- **Sans**: Inter (body copy)

Both fonts are imported via Google Fonts in `globals.css`.

### Typography Hierarchy

| Element | Font | Size | Line Height | Weight | Tailwind Classes |
|---------|------|------|-------------|--------|------------------|
| H1 | Serif | 56px (3.5rem) | 1.1 | 700 | `text-7xl font-serif font-bold` |
| H2 | Serif | 40px (2.5rem) | 1.2 | 600 | `text-5xl font-serif font-semibold` |
| H3 | Serif | 28px (1.75rem) | 1.3 | 500 | `text-3xl font-serif font-medium` |
| H4 | Sans | 20px (1.25rem) | 1.4 | 600 | `text-xl font-sans font-semibold` |
| Body | Sans | 16px (1rem) | 1.6 | 400 | `text-base leading-relaxed` |
| Small | Sans | 14px (0.875rem) | 1.5 | 400 | `text-sm` |

### Implementation
```css
/* Automatically applied to all headings */
h1 { @apply font-serif text-7xl font-bold leading-tight; }
h2 { @apply font-serif text-5xl font-semibold leading-tight; }
h3 { @apply font-serif text-3xl font-medium leading-snug; }
h4 { @apply font-sans text-xl font-semibold leading-normal; }
```

---

## 📏 Layout & Spacing

### 8px Grid System

All spacing follows an 8px base unit for consistency and rhythm.

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| xs | 4px | `p-xs` | Fine adjustments, icon spacing |
| sm | 8px | `p-sm` | Small gaps between elements |
| md | 16px | `p-md` | Standard card padding |
| lg | 24px | `p-lg` | Gutter spacing between sections |
| xl | 32px | `p-xl` | Padding around major sections |
| 2xl | 48px | `p-2xl` | Hero area padding |
| 3xl | 64px | `p-3xl` | Large vertical separations |

### Container & Section Padding
```css
.container-custom {
  @apply mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl;
}

.section-padding {
  @apply py-16 md:py-24 lg:py-32;
}
```

---

## 🧩 Components

### Buttons

#### Primary Button (`.btn-primary`)
- Gold background, ink text
- Hover: darker gold + 2px upward lift
- 150ms transition duration
```html
<button class="btn-primary">Book Now</button>
```

#### Secondary Button (`.btn-secondary`)
- Harbor border, transparent background
- Hover: filled with harbor, text becomes porcelain
- 150ms transition duration
```html
<button class="btn-secondary">Learn More</button>
```

Both buttons include:
- `focus:ring-2 focus:ring-gold` for accessibility
- Rounded corners (`rounded-md`)
- Semibold font weight

### Form Elements

#### Input Fields (`.input-field`)
- White background with stone border
- Focus: gold ring outline
- Border radius: `rounded-md`
- Padding: `px-3 py-3`

```html
<input type="text" class="input-field" />
```

#### Labels (`.form-label`)
```html
<label class="form-label">Full Name</label>
```

#### Error States
```html
<input type="text" class="input-field input-error" />
<p class="error-message">This field is required</p>
```

### Cards (`.card`)

Cards include:
- Rounded corners (`rounded-lg`)
- Subtle shadow (`shadow-md`)
- Padding: `p-6`
- Hover effect: lift by 4px + shadow increase
- Image scales to 1.03 on hover

```html
<div class="card">
  <img src="..." class="card-image" alt="..." />
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>
```

### Modals

```html
<div class="modal-overlay">
  <div class="modal-panel">
    <!-- Modal content -->
  </div>
</div>
```

- Overlay: dark with 60% opacity backdrop blur
- Panel: porcelain background, rounded corners
- Animates with scale-in effect (0.95 → 1.0)

---

## 🎬 Motion & Interactions

### Animation Timing
- **Section reveals**: 250ms (fade-in, scale-in)
- **Button hovers**: 150ms
- **Modal animations**: 200ms

### Available Animations
```css
.animate-fade-in    /* Opacity 0 → 1 over 250ms */
.animate-scale-in   /* Scale 0.95 → 1.0 + fade over 250ms */
.animate-slide-up   /* Translate Y + fade over 250ms */
.animate-slide-in   /* Translate X + fade over 250ms */
```

### Hover Effects
- Cards: lift 4px + scale image 1.03×
- Buttons: darken + lift 2px
- Links: color change to gold

All animations respect `prefers-reduced-motion` settings.

---

## ♿ Accessibility

### Focus States
All interactive elements have visible focus indicators:
```css
.focus-visible-ring {
  @apply focus-visible:outline-none focus-visible:ring-2 
         focus-visible:ring-gold focus-visible:ring-offset-2;
}
```

### Color Contrast
- All text meets WCAG 2.1 AA standards (4.5:1 minimum)
- Gold on ink: ✅ Sufficient contrast
- Ink on porcelain: ✅ Sufficient contrast
- Harbor on porcelain: ✅ Sufficient contrast

### Semantic HTML
- Form labels bound to inputs via `for` and `id`
- Proper heading hierarchy
- Alt text for all images
- ARIA labels where needed

---

## 📱 Responsive Design

### Breakpoints (Tailwind defaults)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Mobile-First Approach
```html
<!-- Stack vertically on mobile, side-by-side on desktop -->
<div class="flex flex-col md:flex-row gap-4">
  ...
</div>

<!-- Smaller padding on mobile -->
<section class="p-4 md:p-8 lg:p-12">
  ...
</section>
```

### Typography Scaling
```html
<h1 class="text-4xl md:text-6xl lg:text-7xl">
  Responsive Heading
</h1>
```

---

## 📂 File Organization

### Component Naming
- PascalCase for React components: `ServiceCard.tsx`, `Navbar.tsx`
- Components directory: `_good-hands/components/`
- Page layouts: `_good-hands/app/`

### Asset Management
- Media files: `public/brand-assets/`
- Use WebP format for images
- Provide multiple sizes for responsive images
- Use Next.js `<Image>` component with `priority` for above-fold images

---

## 🎯 Implementation Checklist

- ✅ Color palette configured in Tailwind
- ✅ CSS variables defined for colors
- ✅ Inter & Playfair Display fonts loaded
- ✅ Typography hierarchy implemented
- ✅ 8px spacing grid system
- ✅ Button components styled
- ✅ Form input styles with focus states
- ✅ Card component with hover effects
- ✅ Modal/popup styles
- ✅ Animation timing optimized (250ms/150ms)
- ✅ Accessibility focus states
- ✅ Responsive design utilities

---

## 🚀 Usage Examples

### Creating a New Section

```tsx
export default function NewSection() {
  return (
    <section className="section-padding bg-porcelain">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
        >
          <h2 className="text-5xl font-serif font-semibold mb-8 text-center">
            Section Title
          </h2>
          <p className="text-base leading-relaxed text-harbor max-w-3xl mx-auto text-center">
            Section description with proper line height and spacing.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
```

### Creating a Card Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => (
    <div key={item.id} className="card">
      <Image
        src={item.image}
        alt={item.alt}
        width={400}
        height={300}
        className="card-image w-full h-48 object-cover rounded-t-lg"
      />
      <h4 className="text-xl font-semibold mt-4 mb-2">{item.title}</h4>
      <p className="text-harbor leading-relaxed">{item.description}</p>
    </div>
  ))}
</div>
```

### Creating a Form

```tsx
<form onSubmit={handleSubmit}>
  <div className="mb-6">
    <label htmlFor="name" className="form-label">
      Full Name *
    </label>
    <input
      type="text"
      id="name"
      name="name"
      className="input-field"
      required
    />
  </div>
  
  <button type="submit" className="btn-primary w-full">
    Submit
  </button>
</form>
```

---

## 🧪 Testing

### Performance
- Run Lighthouse audits regularly
- Target: 90+ performance score on desktop and mobile
- Optimize images (WebP format, lazy loading)

### Accessibility
- Test keyboard navigation
- Verify focus indicators are visible
- Check color contrast with tools
- Test with screen readers

### Browser Testing
- Chrome, Safari, Firefox, Edge
- Test on iOS and Android devices
- Verify responsive breakpoints

---

## 📚 References

- **Tailwind Config**: `_good-hands/tailwind.config.ts`
- **Global Styles**: `_good-hands/app/globals.css`
- **Layout**: `_good-hands/app/layout.tsx`
- **Components**: `_good-hands/components/`

---

## 💡 Best Practices

1. **Always use design system classes** rather than custom CSS
2. **Maintain the 8px spacing grid** for all layouts
3. **Use semantic HTML** for better accessibility
4. **Optimize images** before adding to the project
5. **Test on multiple devices** before deploying
6. **Keep animations subtle** - luxury, not playful
7. **Use gold sparingly** - only for CTAs and key interactions
8. **Maintain proper contrast** for all text

---

*Last Updated: 2025-10-11*
*Design System Version: 1.0*
