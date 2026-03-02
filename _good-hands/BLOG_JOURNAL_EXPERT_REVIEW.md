# Blog & Journal — AI Expert Design Review

**Date:** February 27, 2026  
**Scope:** Readability, title colors, imagery, spacing, subtitles, alignment, design coherence  
**Pages Reviewed:** `/journal`, `/journal/[slug]`, `/journal/finding-calm-in-chiado`

---

## Executive Summary

The blog/journal section has solid editorial structure and follows the design system in most areas. Several inconsistencies, undefined design tokens, and one content error reduce polish. Priority fixes: add missing Tailwind colors (`harbor`, `shell`), fix author bio mismatch in Finding Calm in Chiado, and align hero gradients and content backgrounds across templates.

---

## 1. Readability

### Content Typography

| Element | Current | Assessment |
|--------|---------|------------|
| **Body (ArticleContent)** | `text-harbor text-lg leading-relaxed mb-6` | Good — 18px, 1.7 line height, adequate spacing |
| **Body (EditorialPost)** | Inherits `.editorial-content` (1.125rem, 1.7) | Slightly smaller than ArticleContent — **inconsistent** |
| **H2** | `text-3xl font-serif text-ink mt-12 mb-4` vs `.editorial-content h2` (clamp 2rem–2.5rem) | Both use serif; spacing differs between templates |
| **H3** | `text-2xl font-serif text-ink mt-8 mb-3` vs 1.5rem | Minor size variance |
| **Drop cap** | 4.5em, serif, float left | Good — editorial feel |
| **Blockquotes** | 1.25rem italic, gray-dark, gold left border | Good contrast and emphasis |

### Issues

1. **`text-harbor` undefined** — Tailwind config has no `harbor`; falls back or fails. Design doc says `#4a5568`. Add to `tailwind.config.ts`.
2. **Body font size split** — [slug] uses `text-lg` (18px), EditorialPost uses 1.125rem (18px) via prose — actually aligned; verify in browser.
3. **Excerpt vs body** — Excerpt at `text-xl` on [slug] vs body at `text-lg`; hierarchy is correct.
4. **Max line length** — `content-narrow` (800px) and `max-w-3xl` (768px) keep lines readable; good.

### Recommendations

- Add `harbor` and `shell` to Tailwind theme.
- Standardize body: `text-lg leading-relaxed` everywhere.
- Ensure blockquotes meet WCAG contrast (gray-dark on white/porcelain).

---

## 2. Title Color Matching

### Current Usage

| Page | Title Color | Background |
|------|-------------|------------|
| Journal index hero | `text-white` | Image + ink/60 gradient |
| [slug] article hero | Title in `text-ink` on white (below hero) | White |
| [slug] H1 | `text-ink` | White |
| Finding Calm hero | No overlay text; title in header below | White |
| Featured card H2 | `group-hover:text-gold` | White |
| Article grid H3 | `group-hover:text-gold` | White |
| Related articles H3 | `group-hover:text-gold` | White |

### Assessment

- **Consistency:** Headlines use `text-ink` (#1a1a1a) on light backgrounds. Correct.
- **Hero overlays:** Journal index has white text on gradient; [slug] has no hero title text — title appears in white header below. Different patterns.
- **Hover:** Gold on hover is consistent; good.
- **Category/eyebrow:** `text-gold` and `text-gold font-medium` used; aligns with accent usage.

### Issues

1. **[slug] hero** — Full-bleed image with gradient; no title overlay. Title is in a separate white section. Some users may expect hero + title overlay (like journal index).
2. **EditorialPost** — Title in header below hero with `text-5xl md:text-6xl lg:text-7xl`; no explicit color, inherits black/ink. Fine.

### Recommendations

- Document intended pattern: hero + gradient vs hero + title below.
- Consider adding a subtle title overlay on [slug] hero for consistency with journal index, or accept the split and document it.

---

## 3. Pictures & Backgrounds

### Image Usage

| Location | Image Source | Overlay | Alt Text |
|----------|--------------|---------|----------|
| Journal index hero | `/brand-images/blog-portuguese-beauty.png` | `from-ink/60 via-ink/50 to-ink/60` | Present |
| [slug] hero | `article.image` (varies) | `from-ink/80 to-transparent` (bottom) | Present |
| Finding Calm hero | Unsplash URL | `from-transparent via-transparent to-ink/60` | Present |
| Featured card | `featured.image` | None | Present |
| Article grid | `article.image` | None | Present |
| Related articles | `relatedArticle.image` | None | Present |

### Issues

1. **Gradient inconsistency** — Journal index: full gradient. [slug]: bottom-only gradient. Finding Calm: bottom gradient. Different treatments.
2. **Finding Calm** — Uses external Unsplash; others use local `/brand-images/`. Mixed sourcing.
3. **Image paths** — Articles reference `/brand-images/blog-*.png`; verify files exist (inventory suggests they do).
4. **Author avatar** — [slug] uses `bg-sand` for avatar circle; `sand` not in Tailwind config — may be undefined.
5. **CTA box** — `bg-white rounded-lg border border-gold/20` on `bg-porcelain`; good contrast.

### Recommendations

- Standardize hero overlay: either full gradient or bottom gradient across all blog templates.
- Replace Finding Calm Unsplash hero with a local brand image if possible.
- Add `sand` to Tailwind if used; otherwise switch to `bg-porcelain` or `bg-gray-200`.

---

## 4. Spacing & Section Rhythm

### Section Padding

- `.section-padding`: 128px desktop, 96px tablet, 64px mobile — consistent.
- `container-custom`: 48px/32px/24px horizontal padding — consistent.

### Blog-Specific Spacing

| Section | Padding | Notes |
|---------|---------|-------|
| Journal hero | `h-[60vh] min-h-[500px]` | Adequate |
| [slug] hero | `h-[60vh] min-h-[400px]` | Slightly shorter min |
| [slug] header | `py-12` | Good |
| [slug] content | `py-16` on porcelain | Good |
| Related articles | `py-16` | Good |
| CTA section | `py-16` | Good |
| EditorialPost header | `section-padding` | Good |
| EditorialPost content | `content-narrow editorial-content pb-24` | Good |
| CTA box (inline) | `mt-12 p-8` | Good |

### Issues

1. **[slug] article content** — `bg-porcelain py-16` with `max-w-3xl`; `ArticleContent` has `prose prose-lg` — Tailwind typography may add its own margins and conflict with `.editorial-content`.
2. **EditorialPost** — Uses `content-narrow` (800px) vs [slug] `max-w-4xl` (896px) for header and `max-w-3xl` (768px) for content. Two different content widths.
3. **Article grid cards** — `p-6`; excerpt `mb-3`; consistent.
4. **Related articles** — `h-48` for thumbnails; `gap-8`; consistent.

### Recommendations

- Unify content width: use `max-w-3xl` (768px) for all long-form blog content.
- Audit `prose` vs `.editorial-content` for margin/line-height clashes.

---

## 5. Subtitles & Alignment

### Subtitle Usage

| Page | Element | Class | Alignment |
|------|---------|-------|-----------|
| Journal index hero | Subtitle | `text-xl md:text-2xl text-porcelain/90 max-w-2xl mx-auto` | Center |
| Journal index featured | Category + date | `flex gap-3` | Left |
| Journal index grid | Category + date | `flex gap-3` | Left |
| [slug] header | Category, date, read time | `flex items-center gap-4` | Left |
| [slug] excerpt | `text-xl text-harbor` | Left |
| EditorialPost | Eyebrow | `text-sm uppercase tracking-wide text-gold` | Left |
| EditorialPost | Byline | `flex items-center gap-4 text-harbor text-sm` | Left |

### Assessment

- **Alignment:** Headers/excerpts left-aligned in content; hero subtitles centered. Consistent.
- **Hierarchy:** Eyebrow → title → byline/metadata → excerpt. Clear.
- **Font sizes:** Eyebrow `text-xs` or `text-sm`; dates `text-xs` or `text-sm`; excerpt `text-xl` or `text-lg`. Slightly inconsistent for metadata.
- **Global h1:** `text-align: center` in base styles — affects all h1s. Journal and [slug] titles may center unexpectedly; headers use `max-w-4xl`/`max-w-3xl` with default (left) alignment for child content.

### Issues

1. **Base h1 `text-align: center`** — Can conflict with editorial left-aligned headlines. Check if [slug] H1 and EditorialPost H1 are centered or left.
2. **Metadata alignment** — Category/date layout consistent; OK.
3. **"Latest Articles"** — `text-3xl font-serif mb-12`; no explicit alignment; likely left. Good.
4. **"Continue Reading"** — Same; good.

### Recommendations

- Override base h1 for article pages: `text-left` for editorial H1s.
- Standardize metadata: `text-xs uppercase tracking-wider text-gold` for category, `text-sm text-harbor` for date.

---

## 6. Design Coherence Across Site

### Journal vs Rest of Site

| Aspect | Journal | Services | About | Coherent? |
|--------|---------|----------|-------|-----------|
| Hero height | 60vh | 50–70vh | min-screen | Yes |
| Hero overlay | ink/60, ink/80 | ink/50 | gradient | Similar |
| Section padding | section-padding | section-padding | section-padding | Yes |
| Container | container-custom | container-custom | container-custom | Yes |
| Button styles | btn-gold, btn-primary | btn-primary | btn-gold | Yes |
| Typography | serif H, sans body | serif H | serif H | Yes |
| Backgrounds | white, shell, porcelain | white, shell | porcelain, white | Yes |
| Content width | max-w-5xl, 4xl, 3xl | max-w-4xl | max-w-4xl, 5xl | Slightly variable |

### Blog Internal Coherence

| Aspect | Journal Index | [slug] | Finding Calm |
|--------|--------------|--------|--------------|
| Template | Custom | Custom + ArticleContent | EditorialPost |
| Hero title | Over image | Below image | Below image |
| Content component | N/A | ArticleContent (markdown) | Raw JSX |
| CTA placement | N/A | Inline box + footer | Inline cta-section |
| Related articles | Grid on index | Section on article | Link to journal |

### Issues

1. **Three different content pipelines** — Index, [slug] with markdown, EditorialPost with JSX. Harder to maintain.
2. **CTA pattern** — [slug] has inline CTA box and full-width ink CTA; Finding Calm has inline cta-section and shell "More from Journal" section. Similar intent, different structure.
3. **Author display** — [slug] shows avatar + bio; EditorialPost and index show "By {author}" only. Mixed.
4. **Finding Calm author bio** — Bottom says "Maria Santos" while author prop is "Good Hands Team". **Content bug.**

### Recommendations

- Create shared `BlogArticleLayout` for consistent hero, header, content area, and CTA.
- Fix Finding Calm author bio to match "Good Hands Team".
- Standardize CTA: one inline CTA + one full-width section per article.

---

## 7. Pricing Display (If Applicable)

Journal content does not show pricing. Pricing appears on Services, Experiences, and neighborhood pages. No changes needed for blog pricing display.

---

## 8. Specific Fixes Summary

### Critical (Fix First)

1. **Add `harbor` and `shell` to Tailwind config** — Used widely; likely broken or inconsistent.
2. **Fix Finding Calm author bio** — Replace "Maria Santos" with "Good Hands Team" in the italic bio block.
3. **Add `sand` if used** — Or replace `bg-sand` (e.g. author avatar) with defined color.

### High

4. **Unify hero overlay pattern** — Choose bottom-only or full gradient for all blog heroes.
5. **Unify content width** — Use `max-w-3xl` for all article body content.
6. **Override base h1 alignment** — Use `text-left` for article H1s if editorial left-align is intended.
7. **Replace Finding Calm Unsplash hero** — Use local brand image.

### Medium

8. **Standardize body font size** — Ensure `text-lg` or 1.125rem consistently.
9. **Audit prose vs editorial-content** — Resolve margin/typography conflicts.
10. **Document hero + title pattern** — For index vs article vs EditorialPost.

---

## 9. Checklist for Future Articles

- [ ] Hero image: local brand asset, 16:9 or 3:2
- [ ] Hero overlay: match site standard (bottom or full)
- [ ] Title: `text-ink`, left-aligned for articles
- [ ] Excerpt: `text-xl text-harbor`, max-w-2xl
- [ ] Body: `text-lg leading-relaxed`, content width max-w-3xl
- [ ] Author: consistent avatar + bio or byline only
- [ ] CTA: inline box + full-width section
- [ ] Section padding: `section-padding`
- [ ] Background alternation: white / porcelain / shell as in design system

---

---

## 10. Implementation Status (Feb 27, 2026)

### Completed
- [x] Added `harbor`, `shell`, `sand` to Tailwind config
- [x] Fixed Finding Calm author bio (Maria Santos → Good Hands Team)
- [x] Added `--gold-dark` to :root in globals.css
- [x] Article H1 alignment: `text-left` on [slug] and EditorialPost
- [x] EditorialPost content width: `content-narrow` → `max-w-3xl mx-auto`
- [x] EditorialPost horizontal padding: `px-6 md:px-8 lg:px-12`
- [x] EditorialPostExample: author and bio updated to Good Hands Team

### Remaining (Medium/Low)
- [ ] Standardize hero gradients across journal pages
- [ ] Replace Finding Calm Unsplash hero with local brand image
- [ ] Audit prose vs editorial-content margin conflicts

---

**Review conducted by:** AI Expert Agent  
**Implementation:** Critical + quick wins applied.
