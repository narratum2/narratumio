# Design System V2 - Sophisticated Luxury

## Key Issues Identified:
1. **Typography**: Too heavy, lacks hierarchy, poor readability
2. **Buttons**: Overly rounded, gradient effects look cheap, poor hover states
3. **Layout**: Cramped, poor spacing, inconsistent grid
4. **Scrolling**: Z-index conflicts, sticky elements overlapping, modal issues
5. **Color Usage**: Gold overused, lacks sophistication
6. **Overall**: Feels amateur, not luxury

## Design Hotels.com Analysis:
### What They Do Right:
- **Typography**: Clean sans-serif primary (GT America/similar), elegant serif for accents
- **Spacing**: Generous white space, breathable layouts
- **Buttons**: Minimal, understated, subtle hover states (no gradients!)
- **Navigation**: Clean, fixed on scroll, doesn't compete with content
- **Colors**: Mostly black/white/gray, color used VERY sparingly
- **Layout**: Grid-based, asymmetric but balanced
- **Images**: Full-bleed, high quality, editorial style

## New Design Principles:
1. **Less is More**: Remove visual noise
2. **Sophistication Through Restraint**: Don't show off
3. **Hierarchy Through Space**: Not size/color
4. **Subtle Interactions**: Slow, purposeful animations
5. **Editorial Quality**: Magazine-level polish

## Implementation Plan:

### 1. Typography System (Refined)
```
Primary: Inter (NOT bold - use 400/500 weights mostly)
- Body: 16px/400, line-height 1.7
- Small: 14px/400, line-height 1.6
- Large: 18px/400, line-height 1.7

Headings: Mix of Inter + Playfair
- H1: Playfair Display, 48-64px, 400 weight, tight tracking
- H2: Inter, 32-40px, 500 weight, -0.01em tracking
- H3: Inter, 24-28px, 500 weight
- H4: Inter, 18-20px, 600 weight, uppercase, 0.05em tracking

NO BOLD EVERYWHERE - use weight purposefully
```

### 2. Button System (Minimal)
```
Primary: Black bg, white text, NO RADIUS, subtle hover
Secondary: White bg, black border, NO RADIUS
Tertiary: Underline only, arrow on hover

NO GRADIENTS
NO SHADOWS (unless very subtle on hover)
NO ROUNDED CORNERS
```

### 3. Color Palette (Disciplined)
```
Primary: 
- Black: #1a1a1a (not pure black)
- White: #ffffff
- Off-white: #f5f5f5

Accents (USE SPARINGLY):
- Gold: #c9a961 (more muted than current)
- Used for: Small details, hover states, small accents ONLY

Grays:
- Light: #e5e5e5
- Medium: #999999
- Dark: #4a4a4a
```

### 4. Layout Grid
```
Desktop: 12-column grid, 80px gutters
Tablet: 8-column grid, 40px gutters
Mobile: 4-column grid, 20px gutters

Max width: 1440px
Content width: 1200px
Narrow content: 800px
```

### 5. Spacing Scale (8pt system)
```
4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192
```

### 6. Z-Index System
```
- Base: 1
- Dropdown: 10
- Sticky: 100
- Fixed Nav: 1000
- Overlay/Modal: 9000
- Popover: 9999
```

