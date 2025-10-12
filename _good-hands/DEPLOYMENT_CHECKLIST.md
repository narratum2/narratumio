# 🚀 AI SEO Deployment Checklist
## Make Good Hands Live and Discoverable by AI Agents

**Date:** January 11, 2025  
**Goal:** Deploy all AI SEO implementations and verify they're working

---

## ✅ PRE-DEPLOYMENT CHECKS

### 1. Verify All Files Exist

```bash
# Run this in your terminal to verify files:
cd /Users/pascalfrey/Repo/narratumio/_good-hands

# Check technical files
ls -la app/layout.tsx
ls -la public/openapi.json
ls -la app/ai-assistant-info/page.tsx
ls -la app/faq/page.tsx
ls -la app/guides/lisbon-beauty-complete-guide-2025/page.tsx

# Check documentation
ls -la WEEK_1_IMPLEMENTATION_COMPLETE.md
ls -la REVIEW_GENERATION_SETUP_GUIDE.md
ls -la AI_AGENT_SEO_MASTERPLAN_2025.md
ls -la AI_SEO_QUICK_START_GUIDE.md
ls -la EXECUTIVE_SUMMARY_AI_SEO_2025.md
```

**Expected:** All files should exist ✅

---

### 2. Check for TypeScript/Build Errors

```bash
# Build the project to check for errors
npm run build
# or
yarn build
# or
pnpm build
```

**Expected:** Build should complete successfully without errors

**If errors:** Fix any TypeScript issues before deploying

---

### 3. Test Locally

```bash
# Start dev server
npm run dev
# or
yarn dev
# or
pnpm dev
```

**Test these URLs:**
- ✅ http://localhost:3000
- ✅ http://localhost:3000/ai-assistant-info
- ✅ http://localhost:3000/faq
- ✅ http://localhost:3000/guides/lisbon-beauty-complete-guide-2025
- ✅ http://localhost:3000/openapi.json (should return JSON)

**Expected:** All pages load without errors

---

## 🚀 DEPLOYMENT STEPS

### Step 1: Commit Changes

```bash
cd /Users/pascalfrey/Repo/narratumio/_good-hands

# Check what changed
git status

# Add all new files
git add app/layout.tsx
git add public/openapi.json
git add app/ai-assistant-info/
git add app/faq/
git add app/guides/lisbon-beauty-complete-guide-2025/
git add *.md

# Commit with descriptive message
git commit -m "Implement AI SEO strategy: schema markup, OpenAPI spec, AI info page, FAQ, ultimate guide"

# Push to repository
git push origin main
```

---

### Step 2: Deploy to Vercel (or your host)

**If using Vercel:**

```bash
# Deploy from terminal
vercel --prod

# Or push to GitHub/GitLab and Vercel auto-deploys
git push origin main
```

**Monitor deployment:**
- Go to Vercel dashboard
- Watch deployment logs
- Wait for "Ready" status

**Expected:** Deployment succeeds without errors

---

### Step 3: Verify Production URLs

Once deployed, test these URLs on your live site:

```
✅ https://goodhands.com/ai-assistant-info
✅ https://goodhands.com/faq
✅ https://goodhands.com/guides/lisbon-beauty-complete-guide-2025
✅ https://goodhands.com/openapi.json
```

**Expected:** All pages load correctly in production

---

## 🔍 POST-DEPLOYMENT VALIDATION

### 1. Schema Markup Validation

**Google Rich Results Test:**
1. Go to: https://search.google.com/test/rich-results
2. Enter: https://goodhands.com
3. Click "Test URL"

**Expected Results:**
- ✅ BeautySalon schema detected
- ✅ ProfessionalService schema detected
- ✅ HowTo schema detected
- ✅ No errors
- ✅ Some warnings are OK (e.g., missing optional fields)

**Also test:**
- https://goodhands.com/faq (FAQPage schema)
- https://goodhands.com/guides/lisbon-beauty-complete-guide-2025 (Article schema)

---

### 2. OpenAPI Spec Validation

**Test the OpenAPI spec:**

```bash
# In browser, go to:
https://goodhands.com/openapi.json

# Should return valid JSON
# Copy the JSON and validate at:
https://editor.swagger.io
```

**Expected:** Valid OpenAPI 3.0 spec with no errors

---

### 3. Mobile Responsiveness

**Test on mobile devices:**
- Open https://goodhands.com/ai-assistant-info on phone
- Open https://goodhands.com/faq on phone
- Open ultimate guide on phone

**Expected:** All pages are readable and functional on mobile

---

### 4. Page Speed

**Test with PageSpeed Insights:**
1. Go to: https://pagespeed.web.dev
2. Test each new page
3. Target: 90+ score on mobile and desktop

**If slow:** 
- Optimize images
- Check for heavy JavaScript
- Enable caching

---

## 🔎 SEARCH ENGINE SUBMISSION

### 1. Update Sitemap

**Check your sitemap includes new pages:**

Go to: https://goodhands.com/sitemap.xml

**Should include:**
```xml
<url>
  <loc>https://goodhands.com/ai-assistant-info</loc>
  <lastmod>2025-01-11</lastmod>
  <priority>0.9</priority>
</url>
<url>
  <loc>https://goodhands.com/faq</loc>
  <lastmod>2025-01-11</lastmod>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://goodhands.com/guides/lisbon-beauty-complete-guide-2025</loc>
  <lastmod>2025-01-11</lastmod>
  <priority>0.9</priority>
</url>
```

**If missing:** Update your sitemap generation to include new pages

---

### 2. Submit to Google Search Console

1. Go to: https://search.google.com/search-console
2. Select your property (goodhands.com)
3. Go to "Sitemaps" in left menu
4. Enter: https://goodhands.com/sitemap.xml
5. Click "Submit"

**Also submit individual URLs:**
1. Go to "URL Inspection"
2. Enter each new URL
3. Click "Request Indexing"

**Submit these:**
- https://goodhands.com/ai-assistant-info
- https://goodhands.com/faq
- https://goodhands.com/guides/lisbon-beauty-complete-guide-2025

**Expected:** "Indexing requested" confirmation

---

### 3. Submit to Bing Webmaster Tools

1. Go to: https://www.bing.com/webmasters
2. Add/verify your site if not already
3. Go to "Sitemaps"
4. Submit: https://goodhands.com/sitemap.xml
5. Also use "URL Submission" tool for new pages

---

## 🤖 AI AGENT TESTING

### Test 1: ChatGPT Discovery

**Open ChatGPT and ask:**

```
"Tell me about Good Hands beauty service in Lisbon"
```

**Expected responses:**
- ❓ Might not know yet (normal if just deployed)
- ✅ Eventually: Basic info about Good Hands
- ✅ Goal: Accurate description with services and pricing

**Document the response for baseline.**

---

### Test 2: Perplexity AI

**Go to perplexity.ai and ask:**

```
"What is Good Hands beauty concierge in Lisbon?"
```

**Expected:**
- Perplexity is faster to index new content
- Should find your site within 1-2 weeks
- Will cite sources if it mentions Good Hands

**Document the response.**

---

### Test 3: Claude

**Ask Claude (Anthropic):**

```
"I'm visiting Lisbon and need beauty services. Tell me about Good Hands."
```

**Expected:**
- Might not know immediately
- Test again in 2-4 weeks
- Goal: Recommendations with details

---

### Test 4: Google SGE (if available)

**Google search with AI mode:**

```
"best beauty concierge service lisbon"
```

**Expected:**
- Google SGE may highlight Good Hands in AI overview
- Check if your content is cited

---

## 📊 MONITORING SETUP

### 1. Google Analytics

**Set up custom events:**

1. Go to Google Analytics
2. Create custom dimension: "traffic_source_ai"
3. Track visitors from:
   - chat.openai.com
   - perplexity.ai
   - claude.ai
   - you.com

**Goal:** Track AI-driven traffic separately

---

### 2. Search Console Monitoring

**Weekly checks:**
- Impressions for new pages
- Click-through rates
- Search queries triggering your pages
- Any crawl errors

---

### 3. Schema Monitoring

**Use Schema Markup Validator weekly:**
- https://validator.schema.org

**Test your homepage and new pages**

**Watch for:**
- Errors (fix immediately)
- Warnings (address if important)
- New schema types to add

---

## 📋 OPERATIONAL TASKS (Next Steps)

### Week 1-2: Review Platform Setup

**Follow guide:** `REVIEW_GENERATION_SETUP_GUIDE.md`

1. **Day 1-2:** Claim Google Business Profile
2. **Day 3:** Claim TripAdvisor
3. **Day 4:** Set up Trustpilot
4. **Day 5:** Claim Yelp
5. **Day 6-7:** Send first 10 review requests

**Goal:** 10+ reviews by end of Week 2

---

### Week 2-3: Review Generation Campaign

1. Email 30 past happy clients
2. Follow up after 7 days
3. Respond to all reviews within 24 hours
4. Track: How many reviews received?

**Goal:** 30+ reviews by end of Week 3

---

### Week 3-4: SEO Tools Setup

**Semrush Enterprise AIO:**
1. Sign up for trial: https://semrush.com
2. Add goodhands.com as project
3. Set up position tracking for 25 keywords
4. Enable brand monitoring
5. Configure weekly reports

**Surfer SEO:**
1. Sign up: https://surferseo.com
2. Run Content Audit on all pages
3. Optimize top 10 pages
4. Create content brief for next ultimate guide

**Goal:** Tools configured and first optimizations made

---

### Week 4: Comprehensive AI Test

**Test 20 queries across all AI platforms:**

**Sample queries:**
1. "Best beauty services in Lisbon"
2. "Luxury beauty concierge Portugal"
3. "Hair salon recommendations Lisbon"
4. "Where to get spa treatment in Lisbon"
5. "Good Hands beauty review"
6. "How much does Good Hands cost?"
7. "Beauty services in Chiado Lisbon"
8. "Makeup artist for wedding Lisbon"
9. "Is Good Hands worth it?"
10. "Alternative to Good Hands Lisbon"

**Document:**
- Which queries return Good Hands?
- Position (1st, 2nd, 3rd mention?)
- Accuracy of information
- Competitors mentioned

**Create baseline report**

**Goal:** Establish baseline AI mention rate (target: 10-15%)

---

## 🎯 SUCCESS CRITERIA

### Technical Deployment ✅
- [ ] All files deployed without errors
- [ ] All URLs accessible
- [ ] Schema markup validates
- [ ] OpenAPI spec is valid
- [ ] Mobile responsive
- [ ] Page speed 90+

### Search Engine Submission ✅
- [ ] Sitemap submitted to Google
- [ ] Sitemap submitted to Bing
- [ ] Individual URLs requested for indexing
- [ ] No crawl errors in Search Console

### AI Discoverability ✅
- [ ] Tested in ChatGPT (documented baseline)
- [ ] Tested in Perplexity (documented baseline)
- [ ] Tested in Claude (documented baseline)
- [ ] Monitoring set up for AI traffic

### Operational Setup ✅
- [ ] Review platforms claimed
- [ ] Review request emails sent
- [ ] First 10+ reviews collected
- [ ] SEO tools configured

---

## 🚨 TROUBLESHOOTING

### Issue: Schema Errors

**Solution:**
1. Use Google Rich Results Test to see specific errors
2. Fix in `app/layout.tsx` or relevant page
3. Redeploy
4. Re-validate

---

### Issue: Pages Not Indexing

**Solution:**
1. Check robots.txt allows crawling
2. Check sitemap includes URLs
3. Manually request indexing in Search Console
4. Wait 1-2 weeks (indexing takes time)

---

### Issue: AI Agents Don't Know About Good Hands

**Solution:**
- **Expected in first 2-4 weeks**
- AI models update periodically (not real-time)
- Keep building authority (reviews, press, links)
- Test again in 30 days
- Focus on content creation in meantime

---

### Issue: Build Errors on Deployment

**Solution:**
1. Check error logs in Vercel/hosting platform
2. Common issues:
   - TypeScript errors: Fix type definitions
   - Missing dependencies: Run `npm install`
   - Environment variables: Verify all set correctly
3. Test locally with `npm run build` first
4. Fix errors and redeploy

---

## 📈 EXPECTED TIMELINE

### Week 1 (Now):
- ✅ Technical implementation complete
- ✅ Deployed to production
- ✅ Schema markup validated
- → AI agents beginning to crawl

### Week 2-3:
- Schema indexed by search engines
- AI agents may start mentioning Good Hands
- First 20+ reviews collected
- → **Target: 5-10% AI mention rate**

### Week 4-6:
- More content indexed
- Authority building (reviews, press)
- AI agents cite Good Hands more frequently
- → **Target: 15-25% AI mention rate**

### Month 2-3:
- Established authority
- 50+ reviews across platforms
- Press mentions beginning
- → **Target: 30-50% AI mention rate**

### Month 6:
- Market leader positioning
- 100+ reviews, 4.9+ average
- Multiple press features
- → **Target: 70-80% AI mention rate**

---

## 🎉 CELEBRATION CHECKPOINTS

- ✅ **Deployment Complete:** Celebrate! 🎊
- ✅ **First AI Mention:** Document and share with team
- ✅ **10 Reviews:** Post on social media
- ✅ **First Press Feature:** Announce to clients
- ✅ **30% AI Mention Rate:** Major milestone!
- ✅ **First AI-Driven Booking:** Track and celebrate

---

## 📞 SUPPORT RESOURCES

**Technical Issues:**
- Vercel Support: https://vercel.com/support
- Next.js Docs: https://nextjs.org/docs

**SEO Issues:**
- Google Search Console Help: https://support.google.com/webmasters
- Schema.org Docs: https://schema.org

**AI Platform Issues:**
- OpenAI Platform: https://platform.openai.com
- Anthropic Claude: https://anthropic.com

---

## ✅ FINAL DEPLOYMENT CHECKLIST

**Before you close this document, confirm:**

- [ ] All files committed to git
- [ ] Changes pushed to repository
- [ ] Deployed to production successfully
- [ ] All new URLs accessible
- [ ] Schema markup validates
- [ ] Sitemap submitted to search engines
- [ ] AI baseline test completed
- [ ] Review platforms claimed
- [ ] First review requests sent
- [ ] Monitoring dashboard set up
- [ ] Team notified of deployment

---

**🚀 DEPLOYMENT COMPLETE! Good Hands is now live and ready for AI discovery!**

---

*Checklist created: January 11, 2025*  
*Next review: 7 days after deployment*  
*Next major milestone: 30 days (first comprehensive AI test)*

