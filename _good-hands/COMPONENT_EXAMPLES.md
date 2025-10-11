# Good Hands Component Examples

Quick reference guide for implementing common UI patterns using the Good Hands design system.

## Table of Contents

1. [Typography](#typography)
2. [Buttons](#buttons)
3. [Forms](#forms)
4. [Cards](#cards)
5. [Sections](#sections)
6. [Navigation](#navigation)
7. [Animations](#animations)

---

## Typography

### Headings

```tsx
{/* H1 - Hero headings (56px) */}
<h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold">
  Beauty in Good Hands
</h1>

{/* H2 - Section headings (40px) */}
<h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold">
  Signature Services
</h2>

{/* H3 - Subheadings (28px) */}
<h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-medium">
  Premium Hair Styling
</h3>

{/* H4 - Card titles, form labels (20px) */}
<h4 className="text-lg md:text-xl font-sans font-semibold">
  About Us
</h4>
```

### Body Text

```tsx
{/* Regular body text (16px, 1.6 line height) */}
<p className="text-base leading-relaxed text-ink">
  Your content here with proper line height for readability.
</p>

{/* Secondary text */}
<p className="text-base leading-relaxed text-harbor">
  Secondary or muted information.
</p>

{/* Small text / captions (14px) */}
<p className="text-sm text-harbor">
  Footnotes, captions, or small print.
</p>
```

---

## Buttons

### Primary Button

Gold background, ink text. Use for main CTAs.

```tsx
{/* Standard primary button */}
<button className="btn-primary">
  Book Now
</button>

{/* Full width primary button */}
<button className="btn-primary w-full">
  Submit Booking
</button>

{/* Primary button as link */}
<Link href="/services" className="btn-primary">
  View All Services
</Link>
```

### Secondary Button

Harbor border, transparent background. Use for secondary actions.

```tsx
{/* Standard secondary button */}
<button className="btn-secondary">
  Learn More
</button>

{/* Secondary button as link */}
<Link href="/about" className="btn-secondary">
  About Us
</Link>
```

### Button Group

```tsx
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <button className="btn-primary">
    Primary Action
  </button>
  <button className="btn-secondary">
    Secondary Action
  </button>
</div>
```

---

## Forms

### Complete Form Example

```tsx
<form onSubmit={handleSubmit} className="space-y-6">
  {/* Text Input */}
  <div>
    <label htmlFor="name" className="form-label">
      Full Name *
    </label>
    <input
      type="text"
      id="name"
      name="name"
      className="input-field"
      placeholder="Jane Doe"
      required
    />
  </div>

  {/* Email Input */}
  <div>
    <label htmlFor="email" className="form-label">
      Email Address *
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="input-field"
      placeholder="jane@example.com"
      required
    />
  </div>

  {/* Select Dropdown */}
  <div>
    <label htmlFor="service" className="form-label">
      Service Type *
    </label>
    <select
      id="service"
      name="service"
      className="input-field"
      required
    >
      <option value="">Select a service</option>
      <option value="hair">Hair Styling</option>
      <option value="nails">Nail Care</option>
      <option value="skincare">Skincare</option>
    </select>
  </div>

  {/* Textarea */}
  <div>
    <label htmlFor="message" className="form-label">
      Additional Details
    </label>
    <textarea
      id="message"
      name="message"
      rows={4}
      className="input-field resize-none"
      placeholder="Tell us more..."
    />
  </div>

  {/* Error State Example */}
  <div>
    <label htmlFor="phone" className="form-label">
      Phone Number *
    </label>
    <input
      type="tel"
      id="phone"
      name="phone"
      className="input-field input-error"
      required
    />
    <p className="error-message">
      <span>⚠</span>
      <span>Please enter a valid phone number</span>
    </p>
  </div>

  {/* Submit Button */}
  <button type="submit" className="btn-primary w-full">
    Submit Form
  </button>
</form>
```

---

## Cards

### Basic Card

```tsx
<div className="card">
  <h3 className="text-xl font-serif font-medium mb-2">
    Card Title
  </h3>
  <p className="text-harbor leading-relaxed">
    Card description with proper spacing and typography.
  </p>
</div>
```

### Card with Image

```tsx
<div className="card overflow-hidden p-0">
  <div className="relative h-48 overflow-hidden">
    <Image
      src="/path/to/image.jpg"
      alt="Descriptive alt text"
      fill
      className="object-cover card-image"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-serif font-medium mb-2">
      Card Title
    </h3>
    <p className="text-harbor leading-relaxed mb-4">
      Card description goes here.
    </p>
    <Link href="/details" className="text-gold hover:text-gold-dark transition-colors duration-150">
      Learn more →
    </Link>
  </div>
</div>
```

### Card Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => (
    <div key={item.id} className="card">
      <h3 className="text-xl font-serif font-medium mb-2">
        {item.title}
      </h3>
      <p className="text-harbor leading-relaxed">
        {item.description}
      </p>
    </div>
  ))}
</div>
```

### Service Card (Link with Hover Effect)

```tsx
<Link
  href="/service-details"
  className="group block bg-porcelain rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-250 focus-visible-ring"
>
  <div className="relative h-64 overflow-hidden">
    <Image
      src="/service-image.jpg"
      alt="Service name"
      fill
      className="object-cover card-image"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl md:text-2xl font-serif font-medium mb-2 group-hover:text-gold transition-colors duration-150">
      Service Name
    </h3>
    <p className="text-harbor text-base leading-relaxed mb-4">
      Service description
    </p>
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium text-harbor">From €80</span>
      <span className="text-gold group-hover:translate-x-1 transition-transform duration-150 inline-block">
        →
      </span>
    </div>
  </div>
</Link>
```

---

## Sections

### Standard Section

```tsx
<section className="section-padding bg-porcelain">
  <div className="container-custom">
    {/* Section content */}
  </div>
</section>
```

### Section with Centered Heading

```tsx
<section className="section-padding bg-white">
  <div className="container-custom">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
        Section Title
      </h2>
      <p className="text-harbor text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
        Section description that's centered and constrained to readable width.
      </p>
    </div>
    
    {/* Section content */}
  </div>
</section>
```

### Dark Section (High Contrast)

```tsx
<section className="section-padding bg-ink text-porcelain">
  <div className="container-custom">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
      Dark Section
    </h2>
    <p className="text-porcelain/90 leading-relaxed">
      Content on dark background with proper contrast.
    </p>
  </div>
</section>
```

---

## Navigation

### Navigation Link

```tsx
<Link
  href="/services"
  className="text-sm font-medium text-ink hover:text-gold transition-colors duration-150 focus-visible-ring"
>
  Services
</Link>
```

### Footer Links

```tsx
<Link
  href="/about"
  className="text-sm text-porcelain/70 hover:text-gold transition-colors duration-150 focus-visible-ring"
>
  About
</Link>
```

---

## Animations

### Fade In on Scroll

```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.25 }}
>
  {/* Content */}
</motion.div>
```

### Slide Up on Scroll

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.25 }}
>
  {/* Content */}
</motion.div>
```

### Scale In (Modal Entry)

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.95 }}
  transition={{ duration: 0.2 }}
  className="modal-panel"
>
  {/* Modal content */}
</motion.div>
```

### Staggered Children

```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.25, delay: index * 0.1 }}
  >
    {/* Item content */}
  </motion.div>
))}
```

---

## Modal/Popup

### Modal Structure

```tsx
import { motion, AnimatePresence } from 'framer-motion'

<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="modal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-serif font-semibold mb-4">
          Modal Title
        </h2>
        <p className="text-harbor leading-relaxed mb-6">
          Modal content goes here.
        </p>
        <div className="flex gap-4 justify-end">
          <button onClick={onClose} className="btn-secondary">
            Cancel
          </button>
          <button onClick={onConfirm} className="btn-primary">
            Confirm
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
```

---

## Utilities

### Focus Visible Ring

Add to any interactive element:

```tsx
<button className="... focus-visible-ring">
  Click me
</button>
```

### Text Balance

For better text wrapping in headings:

```tsx
<h1 className="... text-balance">
  Long heading that needs better wrapping
</h1>
```

### Responsive Spacing

```tsx
{/* Mobile: p-4, Tablet: p-6, Desktop: p-8 */}
<div className="p-4 md:p-6 lg:p-8">
  Content
</div>

{/* Responsive margin */}
<div className="mt-8 md:mt-12 lg:mt-16">
  Content
</div>
```

### Responsive Grid

```tsx
{/* 1 column on mobile, 2 on tablet, 3 on desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

---

## Color Usage Examples

### Backgrounds

```tsx
<div className="bg-porcelain">Light background</div>
<div className="bg-ink">Dark background</div>
<div className="bg-white">White background</div>
<div className="bg-gold">Gold accent background</div>
```

### Text Colors

```tsx
<p className="text-ink">Primary text</p>
<p className="text-harbor">Secondary text</p>
<p className="text-gold">Accent text</p>
<p className="text-porcelain">Light text on dark bg</p>
<p className="text-rose">Error text</p>
<p className="text-sage">Success text</p>
```

### Borders

```tsx
<div className="border border-stone">Subtle border</div>
<div className="border-t border-stone/20">Top border with opacity</div>
```

---

## Best Practices

1. **Always use design system classes** - Avoid custom CSS
2. **Maintain consistent spacing** - Use the 8px grid (p-4, p-6, p-8, etc.)
3. **Keep animations subtle** - 150-250ms duration, no bouncing
4. **Use gold sparingly** - Only for CTAs and key interactive elements
5. **Ensure proper contrast** - Especially on dark backgrounds
6. **Mobile-first approach** - Stack vertically on mobile, side-by-side on desktop
7. **Add focus states** - Use `focus-visible-ring` on all interactive elements
8. **Optimize images** - Use Next.js `<Image>` with proper sizing

---

*Last Updated: 2025-10-11*
