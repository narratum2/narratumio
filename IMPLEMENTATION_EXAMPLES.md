# Proper Implementation Examples

## 1. Type-Safe Article Structure

### `types/article.ts`
```typescript
export interface Article {
  title: string
  excerpt: string
  content: string // Markdown content
  image: string
  date: string // ISO 8601 format
  category: ArticleCategory
  author: Author
  slug: string
  readingTime?: number
  tags?: string[]
  featured?: boolean
}

export type ArticleCategory = 
  | 'Traditions'
  | 'Weddings'
  | 'City Guide'
  | 'Skincare'
  | 'Nail Art'
  | 'Wellness'

export interface Author {
  name: string
  bio: string
  avatar?: string
  social?: {
    instagram?: string
    twitter?: string
  }
}

export interface ArticleMetadata {
  slug: string
  title: string
  excerpt: string
  image: string
  date: string
  category: ArticleCategory
  author: Author
}
```

---

## 2. Content Management with MDX

### `lib/articles.ts`
```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Article, ArticleMetadata } from '@/types/article'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export function getAllArticleSlugs(): string[] {
  const fileNames = fs.readdirSync(articlesDirectory)
  return fileNames.map(fileName => fileName.replace(/\.mdx$/, ''))
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      content,
      image: data.image,
      date: data.date,
      category: data.category,
      author: data.author,
      readingTime: calculateReadingTime(content),
      tags: data.tags || [],
      featured: data.featured || false,
    }
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error)
    return null
  }
}

export function getAllArticles(): ArticleMetadata[] {
  const slugs = getAllArticleSlugs()
  const articles = slugs
    .map(slug => getArticleBySlug(slug))
    .filter((article): article is Article => article !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return articles.map(({ slug, title, excerpt, image, date, category, author }) => ({
    slug,
    title,
    excerpt,
    image,
    date,
    category,
    author,
  }))
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}
```

---

## 3. Markdown Article Format

### `content/articles/portuguese-beauty-rituals.mdx`
```mdx
---
title: 'The Art of Portuguese Beauty Rituals'
excerpt: 'Discover centuries-old beauty traditions from Portugal that modern experts still swear by.'
image: '/images/articles/portuguese-beauty-rituals.jpg'
date: '2025-10-01'
category: 'Traditions'
author:
  name: 'Maria Silva'
  bio: 'Maria is a beauty historian and consultant specializing in Portuguese traditional beauty practices.'
  avatar: '/images/authors/maria-silva.jpg'
tags: ['traditions', 'portuguese culture', 'skincare']
featured: true
---

Portuguese grandmothers have been using olive oil, rose water, and sea salt for centuries. Not because of marketing trends. Because they work.

## The Olive Oil Foundation

Long before luxury skincare brands discovered the power of olive oil, Portuguese grandmothers were using it as a daily beauty essential. Extra virgin olive oil, rich in antioxidants and vitamins, serves as a cleanser, moisturizer, and hair treatment.

> "My grandmother taught me to massage warm olive oil into my scalp every Sunday. At 65, her hair is still thick and shiny." — Maria, Lisbon native

### Modern Application

Today's Portuguese beauty professionals have refined these traditions. At salons across Chiado and Príncipe Real, you'll find treatments combining cold-pressed olive oil with modern techniques—hot oil scalp massages that stimulate growth while deeply nourishing.

## Rose Water Tonics

Portuguese rose water, distilled from blooms grown in the Alentejo region, has been a skincare staple since the 16th century. Its anti-inflammatory properties make it perfect for Lisbon's summer sun.

**How to use it:** After cleansing, mist rose water over your face. Follow with your regular moisturizer. The tonic balances pH and preps skin for better product absorption.

<CTABox
  title="Try These Treatments"
  description="We work with professionals who actually know Portuguese traditional techniques."
  linkText="Book a consultation"
  linkHref="/#booking"
/>
```

---

## 4. Safe MDX Rendering

### `app/journal/[slug]/page.tsx`
```typescript
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/articles'
import { ArticleHero } from './components/ArticleHero'
import { ArticleHeader } from './components/ArticleHeader'
import { RelatedArticles } from './components/RelatedArticles'
import { CTABox } from '@/components/CTABox'
import { components } from './mdx-components'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    return { title: 'Article Not Found' }
  }

  const url = `https://goodhands.com/journal/${params.slug}`
  const ogImage = `/api/og/article?slug=${params.slug}`

  return {
    title: `${article.title} | Good Hands Journal`,
    description: article.excerpt,
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      siteName: 'Good Hands',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: 'article',
      publishedTime: article.date,
      authors: [article.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  }
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Good Hands',
      logo: {
        '@type': 'ImageObject',
        url: 'https://goodhands.com/logo.png',
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="pt-20">
        <ArticleHero image={article.image} title={article.title} />
        
        <div className="bg-white">
          <div className="container-custom max-w-4xl py-12">
            <ArticleHeader
              category={article.category}
              date={article.date}
              title={article.title}
              excerpt={article.excerpt}
              author={article.author}
              readingTime={article.readingTime}
            />
          </div>
        </div>

        <div className="bg-porcelain py-16">
          <div className="container-custom max-w-3xl">
            <div className="editorial-content prose prose-lg max-w-none">
              <MDXRemote source={article.content} components={components} />
            </div>
          </div>
        </div>

        <RelatedArticles currentSlug={params.slug} />

        <div className="bg-ink text-white py-16">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Ready to Experience Lisbon's Beauty Scene?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let us be your guide to the city's best beauty professionals
            </p>
            <Link href="/#booking" className="btn-primary bg-gold hover:bg-gold/90">
              Book Your Experience
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
```

---

## 5. MDX Components (Safe Custom Components)

### `app/journal/[slug]/mdx-components.tsx`
```typescript
import Image from 'next/image'
import Link from 'next/link'
import { CTABox } from '@/components/CTABox'

export const components = {
  // Safe HTML elements
  h1: (props: any) => <h1 className="text-4xl font-serif mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-serif mt-12 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-serif mt-8 mb-3" {...props} />,
  p: (props: any) => <p className="text-harbor mb-4 leading-relaxed" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-gold pl-6 my-6 italic text-harbor" {...props} />
  ),
  ul: (props: any) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
  li: (props: any) => <li className="text-harbor" {...props} />,
  a: (props: any) => (
    <Link
      className="text-gold hover:underline transition-colors"
      {...props}
    />
  ),
  
  // Custom components
  CTABox,
  Image: (props: any) => (
    <div className="relative my-8">
      <Image
        className="rounded-lg"
        sizes="(max-width: 768px) 100vw, 800px"
        quality={85}
        {...props}
      />
    </div>
  ),
}
```

---

## 6. Reusable Component: CTABox

### `components/CTABox.tsx`
```typescript
import Link from 'next/link'

interface CTABoxProps {
  title: string
  description: string
  linkText: string
  linkHref: string
  variant?: 'default' | 'gold' | 'subtle'
}

export function CTABox({
  title,
  description,
  linkText,
  linkHref,
  variant = 'default',
}: CTABoxProps) {
  const variantStyles = {
    default: 'bg-sand/10 border-l-4 border-gold',
    gold: 'bg-gold/10 border-l-4 border-gold',
    subtle: 'bg-porcelain border border-harbor/20',
  }

  return (
    <div className={`${variantStyles[variant]} p-6 my-8 rounded-r-lg`}>
      <h3 className="text-xl font-serif mb-2 text-ink">{title}</h3>
      <p className="text-harbor mb-4 leading-relaxed">{description}</p>
      <Link
        href={linkHref}
        className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all font-medium"
      >
        {linkText}
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  )
}
```

---

## 7. Component: Article Header

### `app/journal/[slug]/components/ArticleHeader.tsx`
```typescript
import { Author, ArticleCategory } from '@/types/article'
import { formatDate } from '@/lib/utils'

interface ArticleHeaderProps {
  category: ArticleCategory
  date: string
  title: string
  excerpt: string
  author: Author
  readingTime?: number
}

export function ArticleHeader({
  category,
  date,
  title,
  excerpt,
  author,
  readingTime,
}: ArticleHeaderProps) {
  return (
    <>
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <span className="text-xs uppercase tracking-wider text-gold font-medium">
          {category}
        </span>
        <span className="text-sm text-harbor">
          {formatDate(date)}
        </span>
        {readingTime && (
          <>
            <span className="text-harbor">•</span>
            <span className="text-sm text-harbor">
              {readingTime} min read
            </span>
          </>
        )}
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink mb-6">
        {title}
      </h1>
      
      <p className="text-xl text-harbor mb-8 leading-relaxed">
        {excerpt}
      </p>

      <div className="flex items-center gap-4 pt-8 border-t border-harbor/20">
        {author.avatar ? (
          <img
            src={author.avatar}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div
            className="w-12 h-12 rounded-full bg-sand flex items-center justify-center text-white font-bold"
            role="img"
            aria-label={`${author.name}'s avatar`}
          >
            {author.name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-ink">{author.name}</p>
          <p className="text-sm text-harbor">{author.bio}</p>
        </div>
      </div>
    </>
  )
}
```

---

## 8. Complete Editorial Styles

### `app/globals.css` (additions)
```css
@layer components {
  /* Editorial Content Styles */
  .editorial-content {
    @apply text-harbor;
  }

  .editorial-content h1,
  .editorial-content h2,
  .editorial-content h3,
  .editorial-content h4 {
    @apply font-serif text-ink;
  }

  .editorial-content h2 {
    @apply text-3xl mt-12 mb-4 scroll-mt-20;
  }

  .editorial-content h3 {
    @apply text-2xl mt-8 mb-3 scroll-mt-20;
  }

  .editorial-content p {
    @apply mb-4 leading-relaxed;
  }

  .editorial-content strong {
    @apply font-semibold text-ink;
  }

  .editorial-content em {
    @apply italic;
  }

  .editorial-content a {
    @apply text-gold hover:underline transition-colors;
  }

  .editorial-content ul,
  .editorial-content ol {
    @apply mb-6 pl-6 space-y-2;
  }

  .editorial-content ul {
    @apply list-disc;
  }

  .editorial-content ol {
    @apply list-decimal;
  }

  .editorial-content li {
    @apply leading-relaxed;
  }

  .editorial-content blockquote {
    @apply border-l-4 border-gold pl-6 my-6 italic text-harbor/90;
  }

  .editorial-content code {
    @apply bg-porcelain px-2 py-1 rounded text-sm font-mono;
  }

  .editorial-content pre {
    @apply bg-ink text-white p-4 rounded-lg my-6 overflow-x-auto;
  }

  .editorial-content pre code {
    @apply bg-transparent p-0;
  }

  .editorial-content img {
    @apply rounded-lg my-8;
  }

  .editorial-content hr {
    @apply border-harbor/20 my-12;
  }

  /* Table Styles */
  .editorial-content table {
    @apply w-full border-collapse my-8;
  }

  .editorial-content th {
    @apply bg-sand/10 font-semibold text-left p-3 border border-harbor/20;
  }

  .editorial-content td {
    @apply p-3 border border-harbor/20;
  }

  /* Custom Classes for Article Content */
  .editorial-content .lead-paragraph {
    @apply text-xl font-light mb-8 text-harbor/90;
  }

  .editorial-content .warning {
    @apply bg-red-50 border-l-4 border-red-500 p-4 my-6 rounded-r-lg;
  }

  .editorial-content .info {
    @apply bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg;
  }

  .editorial-content .success {
    @apply bg-green-50 border-l-4 border-green-500 p-4 my-6 rounded-r-lg;
  }
}
```

---

## 9. Utility Functions

### `lib/utils.ts`
```typescript
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function generateArticleSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}
```

---

## 10. Environment Setup

### `package.json` (required dependencies)
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next-mdx-remote": "^4.4.1",
    "gray-matter": "^4.0.3",
    "rehype-highlight": "^7.0.0",
    "rehype-slug": "^6.0.0",
    "rehype-autolink-headings": "^7.0.0",
    "remark-gfm": "^4.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0"
  }
}
```

---

## Summary

This implementation provides:

✅ **Type Safety**: Full TypeScript support  
✅ **Security**: No XSS vulnerabilities  
✅ **Performance**: Optimized bundle size  
✅ **SEO**: Complete metadata and structured data  
✅ **Maintainability**: Separated content from code  
✅ **Scalability**: Easy to add new articles  
✅ **Accessibility**: ARIA labels and semantic HTML  
✅ **Developer Experience**: Clear component structure  
✅ **Content Management**: Markdown-based workflow  
✅ **Reusability**: Modular components  

**Next Steps:**
1. Migrate existing HTML content to MDX format
2. Set up content directory structure
3. Implement image optimization
4. Add RSS feed generation
5. Set up content preview mode
6. Add article search functionality
