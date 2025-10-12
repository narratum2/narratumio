// Article data separated from component logic
// This should eventually come from a CMS (Notion, Contentful, etc.)

export interface Article {
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  category: string
  author: string
  authorBio: string
  readTime?: string
  tags?: string[]
}

export const articles: Record<string, Article> = {
  'portuguese-beauty-rituals': {
    title: 'The Art of Portuguese Beauty Rituals',
    excerpt: 'Discover centuries-old beauty traditions from Portugal that modern experts still swear by.',
    content: `Portuguese grandmothers have been using olive oil, rose water, and sea salt for centuries. Not because of marketing trends. Because they work.

## The Olive Oil Foundation

Long before luxury skincare brands discovered the power of olive oil, Portuguese grandmothers were using it as a daily beauty essential. Extra virgin olive oil, rich in antioxidants and vitamins, serves as a cleanser, moisturizer, and hair treatment.

> "My grandmother taught me to massage warm olive oil into my scalp every Sunday. At 65, her hair is still thick and shiny." — Maria, Lisbon native

### Modern Application

Today's Portuguese beauty professionals have refined these traditions. At salons across Chiado and Príncipe Real, you'll find treatments combining cold-pressed olive oil with modern techniques—hot oil scalp massages that stimulate growth while deeply nourishing.

## Rose Water Tonics

Portuguese rose water, distilled from blooms grown in the Alentejo region, has been a skincare staple since the 16th century. Its anti-inflammatory properties make it perfect for Lisbon's summer sun.

**How to use it:** After cleansing, mist rose water over your face. Follow with your regular moisturizer. The tonic balances pH and preps skin for better product absorption.

## Sea Salt Scrubs

Living beside the Atlantic Ocean, Portuguese women discovered that sea salt mixed with olive oil creates the perfect body exfoliant. The minerals in Portuguese sea salt—harvested from salt pans in Aveiro and the Algarve—are particularly beneficial for skin health.

### DIY Portuguese Salt Scrub

- ½ cup Portuguese sea salt (coarse)
- ¼ cup extra virgin olive oil
- 10 drops lavender essential oil
- Zest of 1 lemon

Mix ingredients and use once weekly on damp skin before showering.

## The Azulejo Facial Massage

Inspired by the flowing patterns of Portuguese azulejo tiles, this facial massage technique uses upward and outward strokes to promote lymphatic drainage and natural lifting. Several spas in Alfama now offer this signature treatment.

## Modern Takes

The best professionals in Lisbon take these old methods and refine them with modern techniques. No pseudoscience. No miracle claims. Just proven ingredients that have worked for generations.`,
    image: '/brand-images/blog-portuguese-beauty.png',
    date: 'October 1, 2025',
    category: 'Traditions',
    author: 'Maria Silva',
    authorBio: 'Maria is a beauty historian and consultant specializing in Portuguese traditional beauty practices.',
    readTime: '5 min read',
    tags: ['Portuguese Beauty', 'Natural Ingredients', 'Traditional Methods'],
  },
  'wedding-beauty-timeline': {
    title: 'Wedding Beauty Timeline: 6 Months to I Do',
    excerpt: 'A comprehensive guide to preparing your beauty routine for the big day.',
    content: `Planning a wedding in Lisbon? Your beauty preparation timeline is just as important as choosing your venue. Here's your month-by-month guide to looking radiant on your big day.

## 6 Months Before: The Foundation

### Schedule Your Skin Consultation

Meet with a dermatologist or esthetician for a comprehensive skin analysis. This is when you'll develop your pre-wedding skincare routine.

- **Book facials:** Schedule monthly treatments leading up to your wedding
- **Address concerns:** Start treating acne, hyperpigmentation, or texture issues
- **Establish routine:** Commit to a daily regimen that works for your skin

### Research Hair & Makeup Artists

In Lisbon's competitive bridal market, top artists book 6-12 months in advance. Start researching and reach out for consultations.

## 4-5 Months Before: Trial Runs Begin

### Hair Styling Trial

Book your first hair trial. Bring inspiration photos, your veil or hair accessories, and photos of your dress neckline. Try at least 2-3 styles.

> "The first trial is rarely the final look. Give yourself time to experiment and adjust." — Sofia, Bridal Hair Specialist

### Start Hair Treatments

If you're planning to color, highlight, or treat your hair, begin the process now. This allows time for adjustments and healthy hair recovery.

## 3 Months Before: Makeup Trial

### Your First Makeup Trial

Schedule this for mid-morning so you can wear the look all day and see how it photographs. Take photos in different lighting.

**What to bring:**
- Inspiration photos (but be realistic)
- A photo of your dress
- Your jewelry if you've chosen it
- A white shirt (to avoid staining your clothes)

### Nail Care Begins

Start regular manicures to strengthen nails and perfect your shape. If you bite your nails, now's the time to stop.

## 2 Months Before: Refinements

### Final Hair & Makeup Trials

Make any last adjustments. This is your final chance to change direction before the wedding.

### Body Treatments

Begin any body treatments you're planning—spray tans, body scrubs, massage packages.

## 1 Month Before: Final Polish

### Last Facial

Schedule your final professional facial 2-3 weeks before the wedding. Nothing new or aggressive this close to the day.

### Final Hair Color

Get your color done 1-2 weeks before the wedding. This ensures it's fresh but has time to settle and soften.

## 1 Week Before: Gentle Maintenance

- Get a manicure and pedicure
- Do a gentle at-home facial
- Get plenty of sleep
- Stay hydrated
- Avoid trying new products

## Wedding Day

Trust your team. You've prepared, you've practiced, and you're ready. Enjoy the process of being pampered and transformed.`,
    image: '/brand-images/blog-wedding-timeline.png',
    date: 'September 28, 2025',
    category: 'Weddings',
    author: 'Sofia Martins',
    authorBio: 'Sofia specializes in bridal beauty coordination and has helped over 200 Lisbon brides prepare for their big day.',
    readTime: '7 min read',
    tags: ['Wedding Beauty', 'Bridal Timeline', 'Beauty Planning'],
  },
  'lisbon-hidden-gems': {
    title: "Lisbon's Hidden Beauty Gems",
    excerpt: "Our editors share their favorite under-the-radar salons and spas across the city.",
    content: `The best beauty experiences in Lisbon aren't always the ones with Instagram-perfect storefronts. Here are the hidden gems locals don't want tourists to discover.

## Casa da Beleza, Mouraria

Tucked in a residential building, this family-run salon has been operating for three generations. No website, no social media—just exceptional haircuts and the warmest welcome in the city.

**What to book:** Classic cut with Maria (she's been cutting hair for 40 years)  
**Price range:** €30-50  
**How to book:** Call ahead in Portuguese, or have your concierge arrange it

## Banho Turco, Intendente

One of Lisbon's last traditional Turkish baths, hidden behind an unmarked door. The ritual includes steam, exfoliation, and massage—exactly as it's been done for centuries.

**What to book:** Full hammam experience  
**Price range:** €45  
**Insider tip:** Go on weekday mornings for a quieter experience

## Atelier de Unhas, Graça

This tiny nail studio overlooks the Tagus. The owner, Beatriz, trained in Paris and Tokyo before returning to Lisbon. Her nail art is quietly legendary among fashion insiders.

**What to book:** Gel manicure with custom art  
**Price range:** €35-60  
**How to find:** Look for the blue door next to the pastelaria

## Verde Spa, Belém

In a converted monastery garden, this spa specializes in treatments using Portuguese plants and herbs. Their signature facial uses ingredients sourced from local quinta gardens.

**What to book:** Portuguese Botanical Facial  
**Price range:** €120  
**Why it's special:** The garden courtyard between treatments

## These aren't for everyone

These places don't speak much English. They don't have credit card machines. They don't take online bookings. That's exactly why they're special—and why we help arrange them for our clients who want authentic Lisbon beauty experiences.`,
    image: '/brand-images/blog-lisbon-guide.png',
    date: 'September 25, 2025',
    category: 'City Guide',
    author: 'Good Hands Team',
    authorBio: 'Our editorial team knows Lisbon\'s beauty scene inside and out.',
    readTime: '4 min read',
    tags: ['Lisbon Guide', 'Hidden Gems', 'Local Favorites'],
  },
}

export function getArticle(slug: string): Article | null {
  return articles[slug] || null
}

export function getAllArticles(): Array<{ slug: string } & Article> {
  return Object.entries(articles).map(([slug, article]) => ({
    slug,
    ...article,
  }))
}

export function getRelatedArticles(currentSlug: string, limit: number = 3): Array<{ slug: string } & Article> {
  return getAllArticles()
    .filter(article => article.slug !== currentSlug)
    .slice(0, limit)
}

