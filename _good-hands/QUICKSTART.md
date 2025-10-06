# Quick Start — Good Hands

Get Good Hands running locally in 5 minutes.

## Installation

```bash
# 1. Navigate to project
cd good-hands

# 2. Install dependencies
npm install

# 3. Copy environment template
cp .env.example .env.local

# 4. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## Development Mode

The app works in **mock mode** without Supabase:
- Booking form submissions log to console
- All features work for development
- Perfect for design and frontend work

## Add Supabase (Optional)

To enable real database:

1. Create project at [supabase.com](https://supabase.com)
2. Run SQL from `DEPLOYMENT.md` to create `bookings` table
3. Add credentials to `.env.local`:
```env
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJxxx...
```

## Add Intercom Chat (Optional)

1. Create workspace at [intercom.com](https://intercom.com)
2. Add App ID to `.env.local`:
```env
NEXT_PUBLIC_INTERCOM_APP_ID=abc123
```

## Project Structure

```
good-hands/
├── app/              # Pages & routes
├── components/       # React components
├── public/          # Static assets
└── styles/          # Global CSS
```

## Key Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Next Steps

- ✅ Customize content in pages
- ✅ Update images (replace Unsplash URLs)
- ✅ Add your branding colors in `tailwind.config.ts`
- ✅ Deploy to Vercel (see `DEPLOYMENT.md`)

## Need Help?

- 📖 Full docs: `README.md`
- 🚀 Deployment: `DEPLOYMENT.md`
- 💬 Questions: Check Next.js docs

Happy coding! 🎨

