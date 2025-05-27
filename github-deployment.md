# Narratum Website - GitHub Deployment Guide

## Complete File Structure

Your GitHub repository should have this structure:

```
narratum-website/
├── index.html
├── styles.css
├── script.js
├── legal-content.js
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── manifest.json
├── .htaccess
├── README.md
└── assets/
    ├── og-image.jpg (1200x630px)
    ├── twitter-image.jpg (1200x600px)
    ├── apple-touch-icon.png (180x180px)
    ├── icon-192.png (192x192px)
    └── icon-512.png (512x512px)
```

## Step-by-Step Deployment

### 1. Prepare Your Files

1. **Update Form ID**: In `index.html`, replace `YOUR_FORM_ID` with your actual Formspree form ID
2. **Create Image Assets**:
   - Use your logo/brand imagery for social media cards
   - Ensure og-image.jpg is 1200x630px for optimal Facebook/LinkedIn display
   - Create app icons from your favicon.svg

### 2. GitHub Setup

```bash
# Initialize repository
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit - Narratum website"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/narratum-website.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository Settings
2. Scroll to "Pages" section
3. Source: Deploy from a branch
4. Branch: main / root
5. Save

### 4. Custom Domain Setup (if using narratum.io)

1. In repository, create `CNAME` file with content:
   ```
   narratum.io
   ```

2. Configure DNS at your domain registrar:
   - A record: `185.199.108.153`
   - A record: `185.199.109.153`
   - A record: `185.199.110.153`
   - A record: `185.199.111.153`
   - CNAME record: `www` pointing to `yourusername.github.io`

### 5. Security Configuration

Since GitHub Pages doesn't support .htaccess, implement these alternatives:

1. **Create 404.html** for custom error page:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>404 - Page Not Found | Narratum</title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center;">
        <div>
            <h1 style="font-family: var(--font-serif); font-size: 96px; color: var(--accent-gold);">404</h1>
            <p style="font-size: 24px; color: var(--text-secondary); margin: 20px 0;">Page not found</p>
            <a href="/" style="color: var(--accent-gold); text-decoration: none;">Return Home</a>
        </div>
    </div>
</body>
</html>
```

2. **Security Headers via Cloudflare** (recommended):
   - Use Cloudflare (free tier) for your domain
   - Add these Page Rules:
     - Always Use HTTPS
     - Auto Minify (JS, CSS, HTML)
     - Browser Cache TTL: 1 month

### 6. Pre-Launch Checklist

- [ ] Form tested and working
- [ ] All links verified
- [ ] Images optimized (use TinyPNG)
- [ ] Mobile responsive tested
- [ ] Analytics code added
- [ ] Social media cards tested (use Facebook Debugger)
- [ ] SSL certificate active
- [ ] Legal pages accessible
- [ ] Color themes working
- [ ] Audio feature tested

### 7. Post-Launch

1. Submit to Google Search Console
2. Submit sitemap.xml
3. Test page speed (aim for 90+ on PageSpeed Insights)
4. Monitor form submissions
5. Set up uptime monitoring

## File Validation Commands

```bash
# Validate HTML
npx html-validate index.html

# Check for broken links
npx broken-link-checker https://narratum.io

# Test responsiveness
npx viewport-testing https://narratum.io
```

## Quick Fixes

### If form doesn't work:
1. Check Formspree dashboard for correct form ID
2. Ensure domain is whitelisted in Formspree
3. Test without ad blockers

### If styles look broken:
1. Hard refresh (Ctrl+Shift+R)
2. Check console for errors
3. Ensure all font files load

### If GitHub Pages shows 404:
1. Wait 10 minutes for DNS propagation
2. Check CNAME file exists
3. Verify repository is public

## Updates and Maintenance

For updates:
```bash
git add .
git commit -m "Update: description of changes"
git push
```

Changes will be live within 5-10 minutes.

## Support Resources

- GitHub Pages Docs: https://docs.github.com/pages
- Formspree Support: https://help.formspree.io
- Cloudflare Setup: https://developers.cloudflare.com
- DNS Checker: https://dnschecker.org

## Emergency Contacts

Keep these handy:
- Domain Registrar Support
- Formspree Support: support@formspree.io
- GitHub Support: https://support.github.com