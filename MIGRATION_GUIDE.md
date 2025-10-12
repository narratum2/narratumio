# Migration Guide: HTML to MDX Articles

## Step-by-Step Migration Process

### Phase 1: Setup (1-2 hours)

#### 1. Install Required Dependencies
```bash
npm install next-mdx-remote gray-matter rehype-highlight rehype-slug rehype-autolink-headings remark-gfm
npm install -D @types/node
```

#### 2. Create Directory Structure
```bash
mkdir -p content/articles
mkdir -p types
mkdir -p lib
mkdir -p components
mkdir -p app/journal/\[slug\]/components
```

#### 3. Create Type Definitions
Create all files from `IMPLEMENTATION_EXAMPLES.md`:
- `types/article.ts`
- `lib/articles.ts`
- `lib/utils.ts`

---

### Phase 2: Convert HTML Content to MDX (4-6 hours)

#### Template for Converting Each Article

**Original HTML Format:**
```html
<p class="lead-paragraph">Portuguese grandmothers have been using olive oil...</p>

<h2>The Olive Oil Foundation</h2>
<p>Long before luxury skincare brands discovered...</p>

<blockquote>"My grandmother taught me..." — Maria, Lisbon native</blockquote>

<div class="cta-box">
  <h3>Try These Treatments</h3>
  <p>We work with professionals... <a href="/#booking">Book a consultation →</a></p>
</div>
```

**Converted to MDX:**
```mdx
---
title: 'The Art of Portuguese Beauty Rituals'
excerpt: 'Discover centuries-old beauty traditions...'
image: '/images/articles/portuguese-beauty-rituals.jpg'
date: '2025-10-01'
category: 'Traditions'
author:
  name: 'Maria Silva'
  bio: 'Beauty historian and consultant...'
tags: ['traditions', 'skincare']
---

Portuguese grandmothers have been using olive oil...

## The Olive Oil Foundation

Long before luxury skincare brands discovered...

> "My grandmother taught me..." — Maria, Lisbon native

<CTABox
  title="Try These Treatments"
  description="We work with professionals who know Portuguese traditional techniques."
  linkText="Book a consultation"
  linkHref="/#booking"
/>
```

#### Conversion Rules

1. **Remove HTML class attributes**: MDX components handle styling
2. **Convert `<h2>` to `##`**: Use Markdown heading syntax
3. **Convert `<blockquote>` to `>`**: Use Markdown blockquote syntax
4. **Convert `<ul>` to Markdown lists**: Use `- ` for bullets
5. **Convert `<ol>` to Markdown lists**: Use `1. ` for numbers
6. **Convert `<strong>` to `**text**`**: Use Markdown bold syntax
7. **Convert custom divs to React components**: Use `<CTABox />`, etc.
8. **Move metadata to frontmatter**: Title, date, author, etc.

---

### Phase 3: Automated Conversion Script

Create a script to help automate the conversion:

#### `scripts/convert-articles.js`
```javascript
const fs = require('fs')
const path = require('path')

// Your original articles object
const articles = {
  'portuguese-beauty-rituals': {
    title: 'The Art of Portuguese Beauty Rituals',
    excerpt: '...',
    content: `...`, // HTML content
    image: '/brand-images/...',
    date: 'October 1, 2025',
    category: 'Traditions',
    author: 'Maria Silva',
    authorBio: '...',
  },
  // ... more articles
}

function convertHTMLToMarkdown(html) {
  let markdown = html
  
  // Remove extra whitespace
  markdown = markdown.trim()
  
  // Convert headings
  markdown = markdown.replace(/<h2>(.*?)<\/h2>/g, '\n## $1\n')
  markdown = markdown.replace(/<h3>(.*?)<\/h3>/g, '\n### $1\n')
  
  // Convert paragraphs
  markdown = markdown.replace(/<p class="lead-paragraph">(.*?)<\/p>/g, '\n$1\n')
  markdown = markdown.replace(/<p>(.*?)<\/p>/g, '\n$1\n')
  
  // Convert lists
  markdown = markdown.replace(/<ul>/g, '\n')
  markdown = markdown.replace(/<\/ul>/g, '\n')
  markdown = markdown.replace(/<ol>/g, '\n')
  markdown = markdown.replace(/<\/ol>/g, '\n')
  markdown = markdown.replace(/<li>(.*?)<\/li>/g, '- $1')
  
  // Convert blockquotes
  markdown = markdown.replace(/<blockquote>(.*?)<\/blockquote>/gs, '\n> $1\n')
  
  // Convert strong/bold
  markdown = markdown.replace(/<strong>(.*?)<\/strong>/g, '**$1**')
  
  // Convert links
  markdown = markdown.replace(/<a href="(.*?)">(.*?)<\/a>/g, '[$2]($1)')
  
  // Convert CTA boxes
  markdown = markdown.replace(
    /<div class="cta-box">[\s\S]*?<h3>(.*?)<\/h3>[\s\S]*?<p>(.*?)<a href="(.*?)">(.*?)<\/a><\/p>[\s\S]*?<\/div>/g,
    (match, title, desc, href, linkText) => {
      const cleanDesc = desc.replace(/<[^>]*>/g, '').trim()
      const cleanLinkText = linkText.replace(/\s*→\s*$/, '').trim()
      return `\n<CTABox\n  title="${title}"\n  description="${cleanDesc}"\n  linkText="${cleanLinkText}"\n  linkHref="${href}"\n/>\n`
    }
  )
  
  // Clean up multiple newlines
  markdown = markdown.replace(/\n{3,}/g, '\n\n')
  
  return markdown.trim()
}

function convertDateFormat(dateStr) {
  // Convert "October 1, 2025" to "2025-10-01"
  const date = new Date(dateStr)
  return date.toISOString().split('T')[0]
}

function generateMDXFile(slug, article) {
  const frontmatter = `---
title: '${article.title}'
excerpt: '${article.excerpt}'
image: '${article.image}'
date: '${convertDateFormat(article.date)}'
category: '${article.category}'
author:
  name: '${article.author}'
  bio: '${article.authorBio}'
tags: []
featured: false
---`

  const content = convertHTMLToMarkdown(article.content)
  
  return `${frontmatter}\n\n${content}\n`
}

// Convert all articles
Object.entries(articles).forEach(([slug, article]) => {
  const mdx = generateMDXFile(slug, article)
  const outputPath = path.join(__dirname, '..', 'content', 'articles', `${slug}.mdx`)
  
  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, mdx, 'utf8')
  
  console.log(`✅ Converted: ${slug}`)
})

console.log('\n🎉 All articles converted!')
```

#### Run the Script
```bash
node scripts/convert-articles.js
```

⚠️ **Note:** This script provides a starting point. You'll need to manually review and clean up each file.

---

### Phase 4: Manual Cleanup (2-3 hours)

After running the automated script, manually review each `.mdx` file:

#### Checklist for Each Article:

- [ ] Check frontmatter is complete
- [ ] Verify all headings are properly formatted
- [ ] Ensure lists are properly converted
- [ ] Check blockquotes retain attribution
- [ ] Verify CTABox components have all props
- [ ] Remove any leftover HTML tags
- [ ] Check for proper spacing between sections
- [ ] Verify links work correctly
- [ ] Test images load properly
- [ ] Spell check content

#### Common Manual Fixes:

1. **Nested HTML**: Remove any remaining `<div>`, `<span>` tags
2. **Special characters**: Ensure quotes, apostrophes render correctly
3. **Line breaks**: Add proper spacing between sections
4. **Lists with sub-points**: Format hierarchical lists correctly
5. **Code blocks**: Wrap in triple backticks if present

---

### Phase 5: Create Components (2-3 hours)

Create all components from `IMPLEMENTATION_EXAMPLES.md`:

1. **Core Components:**
   - `components/CTABox.tsx`
   - `app/journal/[slug]/components/ArticleHero.tsx`
   - `app/journal/[slug]/components/ArticleHeader.tsx`
   - `app/journal/[slug]/components/RelatedArticles.tsx`

2. **MDX Components:**
   - `app/journal/[slug]/mdx-components.tsx`

3. **Update Styles:**
   - Add editorial styles to `app/globals.css`

---

### Phase 6: Update Main Page (1 hour)

#### Update `app/journal/[slug]/page.tsx`
Replace entire file with implementation from `IMPLEMENTATION_EXAMPLES.md`

#### Update `app/journal/page.tsx`
Update to use new data structure:

```typescript
import { getAllArticles } from '@/lib/articles'

export default function JournalPage() {
  const articles = getAllArticles()
  const featured = articles.find(a => a.featured) || articles[0]
  const rest = articles.filter(a => a.slug !== featured.slug)

  // ... rest of component
}
```

---

### Phase 7: Testing (2-3 hours)

#### Test Checklist:

**Visual Testing:**
- [ ] All articles render correctly
- [ ] Images load and display properly
- [ ] Headings have correct hierarchy
- [ ] Lists are properly formatted
- [ ] Blockquotes are styled
- [ ] CTABox components render
- [ ] Links work correctly
- [ ] Mobile responsive
- [ ] Typography is consistent

**Functional Testing:**
- [ ] Article URLs work (`/journal/[slug]`)
- [ ] Related articles display
- [ ] Author information shows
- [ ] Reading time calculates
- [ ] Category badges display
- [ ] Date formats correctly

**SEO Testing:**
- [ ] Page titles are correct
- [ ] Meta descriptions present
- [ ] OG images generate
- [ ] Structured data validates
- [ ] Canonical URLs set

**Performance Testing:**
- [ ] Images are optimized
- [ ] Bundle size is reasonable
- [ ] Pages load quickly
- [ ] No console errors

#### Tools:
- Google Lighthouse
- Schema.org validator
- SEO checker tools
- Browser DevTools

---

### Phase 8: Image Migration (1-2 hours)

#### Convert Image References:

**Before:**
```
image: '/brand-images/service-makeup-application.png'
```

**After:**
1. **Optimize images** with tools like:
   - `sharp` (Node.js)
   - `imagemin`
   - Online tools (TinyPNG, Squoosh)

2. **Organize in structure:**
```
public/
  images/
    articles/
      portuguese-beauty-rituals/
        hero.jpg (optimized)
        image-1.jpg
        image-2.jpg
    authors/
      maria-silva.jpg
```

3. **Update references:**
```mdx
image: '/images/articles/portuguese-beauty-rituals/hero.jpg'
```

---

### Phase 9: Deployment Preparation

#### Pre-deployment Checklist:

- [ ] All articles converted to MDX
- [ ] All components created
- [ ] Styles added to globals.css
- [ ] Images optimized and uploaded
- [ ] Tests passing
- [ ] SEO metadata complete
- [ ] No console errors
- [ ] Build succeeds (`npm run build`)
- [ ] Production preview reviewed

#### Build Command:
```bash
npm run build
npm run start # Test production build locally
```

---

## Timeline Summary

| Phase | Duration | Priority |
|-------|----------|----------|
| Setup | 1-2 hours | Critical |
| Convert HTML to MDX | 4-6 hours | Critical |
| Manual Cleanup | 2-3 hours | High |
| Create Components | 2-3 hours | Critical |
| Update Main Page | 1 hour | Critical |
| Testing | 2-3 hours | High |
| Image Migration | 1-2 hours | Medium |
| Deployment Prep | 1 hour | Critical |
| **TOTAL** | **14-21 hours** | - |

**Recommended Approach:** 2-3 days of focused work

---

## Rollback Plan

If issues arise during migration:

1. **Keep old implementation** in a separate branch
2. **Feature flag** the new implementation:
```typescript
const USE_NEW_ARTICLES = process.env.NEXT_PUBLIC_USE_MDX === 'true'

export default function ArticlePage({ params }: Props) {
  if (USE_NEW_ARTICLES) {
    return <NewArticlePage params={params} />
  }
  return <OldArticlePage params={params} />
}
```

3. **Gradual migration**: Migrate one article at a time
4. **A/B test**: Compare performance of old vs new

---

## Post-Migration Improvements

After successful migration, consider:

1. **Add article search** (Algolia, Fuse.js)
2. **Implement RSS feed**
3. **Add social sharing buttons**
4. **Set up content preview mode**
5. **Add table of contents**
6. **Implement article series/collections**
7. **Add comment system** (if desired)
8. **Set up analytics tracking**
9. **Add newsletter signup integration**
10. **Implement content recommendation engine**

---

## Need Help?

Common issues and solutions:

**Issue:** Styles not applying to MDX content  
**Solution:** Check that `editorial-content` class is in globals.css and properly loaded

**Issue:** Components not rendering in MDX  
**Solution:** Verify components are properly exported in `mdx-components.tsx`

**Issue:** Images not loading  
**Solution:** Check image paths are correct and files exist in `public/` directory

**Issue:** Build fails  
**Solution:** Run `npm run build` and check console for specific errors

**Issue:** Metadata not showing  
**Solution:** Verify frontmatter format and that `gray-matter` is parsing correctly

