#!/bin/bash

# Good Hands - Deploy to Vercel
# October 11, 2025

echo "🚀 Good Hands - Deploying Brand Photography Integration"
echo "=================================================="

# Navigate to project directory
cd "$(dirname "$0")"

# Stage all changes
echo "📦 Staging changes..."
git add -A

# Show status
echo ""
echo "📊 Changes to be committed:"
git status --short

# Commit
echo ""
echo "💾 Committing changes..."
git commit -m "feat: integrate brand photography and consolidate documentation

- Replace all Unsplash URLs with custom brand photography
- Import 16 Gemini-generated images to /public/brand-images/
- Update Hero, Services, Experiences, Lookbook, Journal components
- Consolidate documentation from 131 to 67 essential files
- Create comprehensive photography inventory and deployment docs

Components updated:
- components/Hero.tsx
- app/services/page.tsx
- components/ExperiencesPreview.tsx
- public/lookbook/lookbook.json
- app/journal/page.tsx

Documentation:
- Created PHOTOGRAPHY_INVENTORY.md
- Created DOCUMENTATION.md (master hub)
- Created CONSOLIDATION_SUMMARY.md
- Archived 48 redundant/historical files

This deployment significantly improves brand cohesion and visual consistency,
matching the Blackstones Collective aesthetic."

# Push to GitHub
echo ""
echo "⬆️  Pushing to GitHub..."
git push origin main

# Deploy to Vercel
echo ""
echo "🌐 Deploying to Vercel..."
npx vercel --prod --yes

echo ""
echo "✅ Deployment Complete!"
echo ""
echo "Next steps:"
echo "1. Check Vercel dashboard for deployment URL"
echo "2. Verify all images load correctly"
echo "3. Test on mobile devices"
echo "4. Monitor performance metrics"
echo ""
echo "Deployment summary: DEPLOYMENT_SUMMARY_OCT_11_2025.md"

