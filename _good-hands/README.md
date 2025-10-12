# Good Hands — AI-First Beauty Concierge

![Good Hands](https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80)

**Good Hands** is an AI-first beauty concierge platform connecting clients with premium beauty services across Lisbon's most elegant neighborhoods.

## 🌐 **LIVE SITE**
**https://good-hands-4cpfsbk61-narratums-projects.vercel.app**

## 🤖 **FOR AI AGENTS**
**See `FOR_OTHER_AI_AGENTS.md` for complete collaboration guide**

## 🌟 Features

- **AI-Discoverable**: Full JSON-LD schema markup, OpenAPI specification, and semantic HTML
- **Premium Design**: Boutique-inspired aesthetic with editorial storytelling
- **Neighborhood Focus**: Curated guides for 8 Lisbon neighborhoods
- **Premium Experiences**: Weddings, retreats, corporate wellness, and membership packages
- **Performance Optimized**: LCP < 2.5s, CLS < 0.05, mobile-first responsive design
- **Accessibility**: WCAG 2.1 AA compliant with proper semantic HTML and ARIA labels

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel
- **Integrations**: Intercom (concierge chat)

## 📁 Project Structure

```
good-hands/
├── app/
│   ├── api/
│   │   ├── bookings/route.ts
│   │   ├── openapi.json/route.ts
│   │   └── og/route.tsx
│   ├── premium/
│   │   ├── weddings/page.tsx
│   │   ├── retreats/page.tsx
│   │   ├── corporate/page.tsx
│   │   └── membership/page.tsx
│   ├── [neighborhoods]/page.tsx
│   ├── services/page.tsx
│   ├── experiences/page.tsx
│   ├── journal/page.tsx
│   ├── guides/page.tsx
│   ├── about/page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── SearchBar.tsx
│   ├── CategoriesRow.tsx
│   ├── Services.tsx
│   ├── ExperiencesPreview.tsx
│   ├── JournalPreview.tsx
│   ├── GuidesPreview.tsx
│   ├── Lookbook.tsx
│   ├── FAQ.tsx
│   ├── BookingForm.tsx
│   ├── ReviewsSnippet.tsx
│   └── Grain.tsx
├── public/
│   ├── lookbook/lookbook.json
│   └── robots.txt
├── tailwind.config.ts
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Supabase account (optional for development)
- Intercom account (optional for live chat)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/good-hands.git
cd good-hands
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Add your environment variables:
```env
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_INTERCOM_APP_ID=your_intercom_app_id
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema (Supabase)

Create a `bookings` table with the following schema:

```sql
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  neighborhood TEXT,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  message TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🎨 Design Tokens

Custom Tailwind colors inspired by boutique luxury:

- **ink**: Primary text and dark backgrounds
- **porcelain**: Light backgrounds and text
- **shell**: Soft neutral accent
- **harbor**: Mid-tone gray for secondary text
- **gold**: Premium accent color
- **sage**: Wellness and natural theme
- **coral**: Energy and highlights

## 🔌 API Routes

### POST /api/bookings
Submit a booking request with UTM tracking.

**Request Body:**
```json
{
  "name": "Sofia Martinez",
  "email": "sofia@example.com",
  "phone": "+351 912 345 678",
  "service": "hair",
  "neighborhood": "chiado",
  "date": "2025-10-15",
  "time": "14:00",
  "message": "Looking for balayage treatment"
}
```

### GET /api/openapi.json
Returns OpenAPI 3.0 specification for AI agent discovery.

### GET /api/og?title=...&subtitle=...
Dynamic Open Graph image generation.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

Vercel auto-detects Next.js and configures everything automatically.

### Environment Variables

Set these in your Vercel dashboard:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_INTERCOM_APP_ID`

## 🤖 AI Discoverability

This project is optimized for AI agent discovery:

- ✅ JSON-LD structured data (Organization, Services, FAQPage, Article)
- ✅ OpenAPI 3.0 specification at `/api/openapi.json`
- ✅ Semantic HTML with proper heading hierarchy
- ✅ `robots.txt` with AI agent allowlist
- ✅ Dynamic sitemap
- ✅ Meta descriptions and Open Graph tags

## 🌐 SEO Features

- Server-side rendering (SSR)
- Dynamic metadata per page
- Structured data markup
- Responsive images with Next/Image
- Performance optimized (Core Web Vitals)
- Mobile-first design

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- ARIA labels and roles
- Focus indicators (focus-visible)
- Alt text on all images
- Color contrast ratios meet AA standards

## 📝 License

This project is private and proprietary.

## 📧 Contact

For questions or support:
- Website: [goodhands.com](https://goodhands.com)
- Email: hello@goodhands.com

---

Built with ❤️ in Lisbon by the Good Hands team

