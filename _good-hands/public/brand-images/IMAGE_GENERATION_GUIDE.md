# 🎨 Image Generation Guide for Good Hands Website

**Last Updated:** January 2025  
**Purpose:** Guide for generating and managing brand images using AI image generation tools

---

## 🚀 Quick Start

### Check Missing Images
```bash
cd public/brand-images
node generate-images.js --check
```

### Get Prompt for Specific Image
```bash
node generate-images.js --generate neighborhood-alfama.png
```

### List All Images
```bash
node generate-images.js --list
```

---

## 📋 Available Script Commands

### `--check`
Shows which images are missing from the site.

**Output:**
- Lists missing images
- Shows description and specs for each

### `--generate <image-name>`
Generates a detailed prompt for creating a specific image.

**Usage:**
```bash
node generate-images.js --generate neighborhood-alfama.png
node generate-images.js --generate category-nails.png
```

**Output:**
- Detailed generation prompt
- Style guidelines
- Dimension specifications
- Instructions for saving

### `--list`
Shows all existing images and needed images with status.

---

## 🖼️ Images Needed (11 Missing)

### Neighborhood Pages (8 images)
1. `neighborhood-alfama.png` - Historic Alfama district
2. `neighborhood-chiado.png` - Bohemian Chiado
3. `neighborhood-principe-real.png` - Garden district
4. `neighborhood-baixa.png` - Downtown Baixa
5. `neighborhood-belem.png` - Riverside Belém
6. `neighborhood-cascais.png` - Coastal Cascais
7. `neighborhood-sintra.png` - Fairytale Sintra
8. `neighborhood-avenida.png` - Avenida da Liberdade

### Service Categories (2 images)
9. `category-nails.png` - Luxury nail services
10. `service-mens-grooming.png` - Men's grooming services

### Blog Content (1 image)
11. `blog-seasonal-beauty.png` - Seasonal beauty guide

---

## 🎨 Brand Style Guidelines

All generated images must follow these guidelines:

### Color Palette
- **Porcelain:** `#f8f6f3` (off-white backgrounds)
- **Sage Green:** `#a8b5a5` (accent color)
- **Gold:** `#c9a961` (highlights)
- **Taupe:** Warm neutral tones

### Lighting
- Soft natural daylight (golden hour or overcast)
- No harsh shadows
- No colored lighting
- Warm undertones preferred

### Composition
- Shallow depth-of-field (background blur)
- Rule of thirds
- Negative space for text overlays
- Natural camera angles (eye-level or slightly above)

### Mood
- Candid and relaxed
- Effortlessly sophisticated
- Subjects appear genuinely engaged
- Minimal props and backgrounds

### Technical Specs
- **Hero images:** 1920x1080px
- **Card images:** 800x600px
- **Thumbnails:** 400x400px
- **Blog images:** 1200x630px
- **Format:** PNG (will convert to WebP later)
- **Quality:** High resolution, matte finish

---

## 🛠️ Image Generation Workflow

### Step 1: Check What's Needed
```bash
node generate-images.js --check
```

### Step 2: Get Generation Prompt
```bash
node generate-images.js --generate <image-name>
```

### Step 3: Generate Image
Use the prompt with your preferred AI image generation tool:
- **Google Gemini** (recommended - already used for 16 images)
- **DALL-E 3** (OpenAI)
- **Midjourney**
- **Stable Diffusion**

### Step 4: Save Image
1. Download generated image
2. Save to `/public/brand-images/` directory
3. Use exact filename from the script (e.g., `neighborhood-alfama.png`)
4. Ensure dimensions match specifications

### Step 5: Update Components
Update the relevant page/component to use the new image:
```tsx
<Image
  src="/brand-images/neighborhood-alfama.png"
  alt="Historic Alfama neighborhood in Lisbon..."
  fill
  className="object-cover"
/>
```

---

## 📝 Generation Prompts

The script automatically generates prompts that include:
1. **Description** - What the image should show
2. **Location context** - Lisbon/Portugal specific details
3. **Style guidelines** - Brand colors, lighting, mood
4. **Technical specs** - Dimensions and format

Example output:
```
Lisbon historic Alfama neighborhood, narrow cobblestone streets, 
traditional Portuguese tiles, warm authentic atmosphere, soft natural 
lighting, muted colors with sage green accents, editorial style

Style Guidelines:
- Color Palette: Porcelain (#f8f6f3), Sage Green (#a8b5a5), Gold (#c9a961)
- Lighting: Soft natural daylight
- Composition: Shallow depth-of-field, rule of thirds
- Mood: Candid, relaxed, effortlessly sophisticated
```

---

## ✅ Current Status

### Existing Images (17)
- ✅ All hero and category images
- ✅ All premium experience images
- ✅ Blog images (3)
- ✅ Service detail images

### Missing Images (11)
- ❌ 8 neighborhood-specific images
- ❌ 2 service category images (nails, men's grooming)
- ❌ 1 blog image (seasonal beauty)

---

## 🔄 Integration After Generation

Once you generate an image:

1. **Save to correct location:**
   ```
   /public/brand-images/<image-name>
   ```

2. **Update the relevant page:**
   - Neighborhood pages: `/app/<neighborhood>/page.tsx`
   - Service pages: `/app/services/<service>/page.tsx`
   - Blog: `/app/journal/[slug]/page.tsx`

3. **Add proper alt text:**
   ```tsx
   alt="[Description] - Good Hands [service/neighborhood] in Lisbon"
   ```

4. **Test on page:**
   - Verify image loads correctly
   - Check responsive behavior
   - Verify alt text accessibility

---

## 🎯 Priority Order

### High Priority (Do First)
1. `neighborhood-alfama.png` - Alfama page needs Lisbon-specific image
2. `neighborhood-chiado.png` - Chiado page needs local imagery
3. `category-nails.png` - Nail services need dedicated category image

### Medium Priority
4. Remaining neighborhood images (5 more)
5. `service-mens-grooming.png` - Men's services category

### Low Priority
6. `blog-seasonal-beauty.png` - Blog content enhancement

---

## 📚 Related Documentation

- `BRAND_PHOTOGRAPHY_PROMPTS.md` - Detailed prompts for all image types
- `PHOTOGRAPHY_INVENTORY.md` - Complete image inventory
- `BRAND_DESIGN_SYSTEM.md` - Brand guidelines
- `replace-images.sh` - Script for replacing old images

---

## 💡 Tips for Image Generation

1. **Be specific** - Include location, lighting, and mood details
2. **Use brand colors** - Reference porcelain, sage, gold in prompts
3. **Lisbon context** - Include Portuguese/Lisbon specific details
4. **Editorial style** - Request magazine-style photography
5. **Negative space** - Remember to leave room for text overlays

---

**Script Location:** `/public/brand-images/generate-images.js`  
**Ready to use!** Run `node generate-images.js --help` for usage instructions.
