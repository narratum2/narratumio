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
    image: '/brand-images/blog-portuguese-beauty.jpg',
    date: 'October 1, 2025',
    category: 'Traditions',
    author: 'Good Hands Team',
    authorBio: 'Our editorial team knows Lisbon\'s beauty scene inside and out.',
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
    image: '/brand-images/blog-wedding-timeline.jpg',
    date: 'September 28, 2025',
    category: 'Weddings',
    author: 'Good Hands Team',
    authorBio: 'Our editorial team knows Lisbon\'s beauty scene inside and out.',
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
    image: '/brand-images/blog-lisbon-guide.jpg',
    date: 'September 25, 2025',
    category: 'City Guide',
    author: 'Good Hands Team',
    authorBio: 'Our editorial team knows Lisbon\'s beauty scene inside and out.',
    readTime: '4 min read',
    tags: ['Lisbon Guide', 'Hidden Gems', 'Local Favorites'],
  },
  'digital-nomad-beauty-lisbon': {
    title: 'Beauty & Wellness for Digital Nomads in Lisbon',
    excerpt: 'Your self-care guide to looking good and feeling great while working remotely in Portugal\'s sunniest capital.',
    content: `Living in Lisbon as a digital nomad is incredible -- affordable, beautiful, perfect weather. But finding a good hairstylist or skincare routine in a new city? That part is harder than finding fast WiFi.

## The Problem Nobody Talks About

You are new in Lisbon. You do not know who to trust. Your neck hurts from laptop work. Your skin looks terrible from screen time. You need a haircut but do not speak Portuguese. Every Google search returns 50 options with no way to tell who is actually good.

Here is the thing: Lisbon's beauty scene is better quality than the prices suggest. English is widely spoken. But booking culture is different -- more WhatsApp than apps. Walk-ins are still common. This is Mediterranean wellness culture, not New York efficiency.

## Build Your Routine: Month by Month

### Month 1: Discovery

Your first month is about finding your people. Budget 100-150 EUR for exploratory services.

- **Week 1:** Research. Join digital nomad Facebook groups and ask for recommendations
- **Week 2:** Book a haircut consultation and try one facial to assess your skin in Lisbon's climate
- **Week 3:** Purchase local skincare products your esthetician recommends
- **Week 4:** Evaluate. What felt essential? Which professionals do you want to return to?

### Months 2-3: Lock It In

Set up standing appointments:

- Haircut every 4-6 weeks (40-80 EUR)
- Facial every 4 weeks (60-120 EUR)
- Massage every 2-4 weeks (50-90 EUR)
- Gel manicure every 2-3 weeks (35-55 EUR)

**Monthly budget:** 250-400 EUR covers everything. That is less than most nomads spend on coffee.

## Solving Nomad-Specific Problems

### Laptop Posture

Working from cafes and Airbnb setups wreaks havoc on your body. Forward head posture, rounded shoulders, tension headaches -- sound familiar?

**What works:** Deep tissue massage focused on neck and shoulders (50-70 EUR, bi-weekly). Ask specifically for "therapeutic" massage. Some therapists now specialize in tech worker issues.

### Screen-Damaged Skin

Eight to twelve hours of daily screen exposure causes blue light damage, dark circles, and dull complexion.

**What works:** LED light therapy (red for collagen, blue for inflammation), oxygen facials for instant brightness, and vitamin C treatments for antioxidant protection. At home, SPF 50 is non-negotiable -- even indoors. Blue light is real.

### Travel-Weary Recovery

Frequent beach weekends and trips home leave your skin dehydrated and your hair damaged.

**What works:** Book a hydrating facial within 48 hours of arriving back. The lymphatic drainage reduces puffiness and brings back your glow immediately.

## Navigating Lisbon's Booking Culture

**How it is different from home:**

- Booking is often via WhatsApp or phone call, not apps
- Portuguese culture is more relaxed -- 5-10 minutes late is generally acceptable
- Lunch breaks are long (1-3pm) -- many places close
- Cash is still common at smaller salons
- Tipping 5-10% is appreciated but not mandatory

**Key phrases that help:**

"Fala ingles?" (Do you speak English?), "Tenho hora marcada" (I have an appointment), and "Quanto custa?" (How much?). But honestly, photos are the universal language.

## The Real Value of Self-Care Abroad

Beauty services are not frivolous expenses -- they are infrastructure for sustainable remote work. They create routine, enforce breaks from your laptop, and remind you that you are more than your screen.

Lisbon offers world-class services at prices that make regular self-care genuinely accessible. Take advantage.`,
    image: '/brand-images/blog-digital-nomad-beauty.jpg',
    date: 'February 12, 2026',
    category: 'Lifestyle',
    author: 'Good Hands Team',
    authorBio: 'Our editorial team knows Lisbon\'s beauty scene inside and out.',
    readTime: '6 min read',
    tags: ['Digital Nomads', 'Self-Care', 'Lisbon Lifestyle', 'Remote Work'],
  },
  'seasonal-beauty-lisbon': {
    title: 'Seasonal Beauty Guide: What Lisbon\'s Climate Does to Your Skin',
    excerpt: 'How 2,800 hours of annual sunshine, Atlantic salt air, and Mediterranean humidity affect your beauty routine -- season by season.',
    content: `Lisbon is not just another European city. It is a Mediterranean paradise with 300 days of sunshine, Atlantic breezes, and microclimates that shift from neighborhood to neighborhood. This unique environment significantly affects your hair, skin, and makeup needs throughout the year.

## Understanding the Climate

Lisbon sits at the confluence of two climate influences: Mediterranean (hot, dry summers) and Atlantic (moderate temperatures, persistent breeze). The result is 2,800+ hours of annual sunshine, humidity that hovers between 60-80%, and persistent winds that most beauty guides ignore entirely.

**What this means for you:**

- Higher risk of sun damage and hyperpigmentation year-round
- Salt air that dries skin and hair even if you never go to the beach
- Hard water with high mineral content that irritates sensitive skin
- White buildings that reflect additional UV -- you are getting exposure from all angles

## Spring (March-May): The Transition

**Hair:** Wind plus increasing sun equals frizz and early color fading. This is the perfect time for a keratin treatment -- it lasts 3-4 months, carrying you through summer. Start using UV protection spray on your part line.

**Skin:** Switch from rich winter creams to gel-creams or serums. Introduce SPF 50 now -- the sun is deceptively strong even in mild temperatures. A vitamin C serum under sunscreen prepares your skin for summer.

**Book now:** Chemical peel (early spring for glowing summer skin), keratin treatment, and a professional skin assessment.

## Summer (June-September): Survival Mode

**Hair:** Salt air, chlorine, intense sun, and 35C heat will damage, dry, and fade your hair if you are not careful. Pre-swim trick: wet your hair with fresh water before the ocean or pool -- it absorbs less salt and chlorine. Embrace air-dry textures and skip heat styling entirely.

**Skin:** SPF 50+ is non-negotiable. Reapply every 2 hours if outdoors. Keep it light -- hyaluronic acid serums, not heavy creams. After-sun care with aloe vera after beach days. And do not forget your decolletage -- it is the most commonly neglected area for sun damage.

**Makeup reality:** Everything melts. Switch to tinted SPF moisturizer instead of foundation. Waterproof everything. Lip stain over lipstick. Consider a lash lift so you can skip mascara entirely.

**Book now:** Monthly hydrating facials, LED light therapy (repairs damage without sun sensitivity), and express blowouts for events instead of home heat styling.

## Autumn (October-November): Repair Season

This is when you fix summer's damage. The lower UV makes it safe to use more aggressive treatments.

**Hair:** Deep repair with Olaplex or K18 treatments monthly. Cut damaged ends -- do not carry summer split ends into winter. This is THE season for major hair transformations: going darker, big cuts, color corrections.

**Skin:** Start retinol now (avoided during summer due to sun sensitivity). Book a series of chemical peels to fade sun spots. Microneedling with PRP addresses texture and fine lines. Rebuild your skin barrier before winter.

**Book now:** Full color transformation, series of chemical peels (2-3 treatments), microneedling, and a professional winter treatment plan.

## Winter (December-February): Nourish and Prepare

Lisbon's winter is nothing like Northern Europe -- humidity stays high, temperatures rarely drop below 8C, and you still get meaningful sun. The main challenges are rain-induced frizz and wind.

**Hair:** Anti-frizz products become essential. Weekly deep conditioning masks. Consider a Brazilian Blowout to rain-proof your hair through the wettest months.

**Skin:** Move to richer moisturizers and oils. Continue SPF -- UV is present even in winter. Add hydrating masks weekly. Pay attention to lip care -- Atlantic wind chaps lips faster than cold.

**Book now:** Deeply nourishing facials, paraffin wax treatments for hands and feet, and any aggressive corrective treatments you have been putting off.

## Year-Round Non-Negotiables

Five things every person living in Lisbon should maintain regardless of season:

1. **SPF 50, 365 days.** UV is present even in winter. Reflected light from white buildings adds exposure. Lisbon's hills increase altitude exposure.

2. **Antioxidant serum every morning.** Vitamin C or E under sunscreen. Protects against pollution and UV damage.

3. **Leave-in conditioner always.** Wind protection year-round. Lightweight formula for summer, richer for winter.

4. **Hydrating mist in your bag.** The humidity paradox -- air feels humid but can still dehydrate skin. Refresh throughout the day.

5. **Quality sunglasses.** Prevent squinting (reduces crow's feet) and protect the delicate eye area. Essential for sun-drenched Lisbon life.`,
    image: '/brand-images/blog-seasonal-beauty.jpg',
    date: 'January 20, 2026',
    category: 'Skincare',
    author: 'Good Hands Team',
    authorBio: 'Our editorial team knows Lisbon\'s beauty scene inside and out.',
    readTime: '7 min read',
    tags: ['Seasonal Beauty', 'Skincare', 'Lisbon Climate', 'Hair Care'],
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

