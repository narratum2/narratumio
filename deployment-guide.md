# Narratum Website Deployment Guide

## 1. Form Setup (Formspree)

### Step 1: Create Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email

### Step 2: Create Your Form
1. Click "New Form" in dashboard
2. Name it "Narratum Contact"
3. Copy your form ID (looks like: `xyzabcde`)

### Step 3: Update Your Code
In `index.html`, find this line:
```html
<form id="contactForm" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Replace `YOUR_FORM_ID` with your actual form ID:
```html
<form id="contactForm" class="contact-form" action="https://formspree.io/f/xyzabcde" method="POST">
```

### Step 4: Configure Form Settings
In Formspree dashboard:
- Enable reCAPTCHA for spam protection
- Add `narratum.io` to allowed domains
- Set up email notifications
- Configure autoresponder (optional)

## 2. Security Features for Self-Hosting

### Essential Security Headers (.htaccess)
Create `.htaccess` file in root directory:

```apache
# Security Headers
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set X-XSS-Protection "1; mode=block"
Header set Referrer-Policy "strict-origin-when-cross-origin"
Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"

# Content Security Policy
Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://formspree.io"

# HTTPS Redirect
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]

# Prevent Directory Listing
Options -Indexes

# Block access to sensitive files
<FilesMatch "^\.">
    Order allow,deny
    Deny from all
</FilesMatch>

# Cache Control
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Gzip Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript
</IfModule>
```

### Additional Security Measures
1. **SSL Certificate**: Use Let's Encrypt for free SSL
2. **Rate Limiting**: Configure server-side rate limiting
3. **Regular Updates**: Keep server software updated
4. **Backup Strategy**: Daily automated backups
5. **Monitoring**: Set up uptime monitoring (UptimeRobot)

## 3. SEO Optimization Checklist

### Technical SEO
✅ **Already Implemented:**
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Semantic HTML5
- Mobile responsive
- Clean URL structure

### Additional SEO Enhancements Needed:

#### 1. Add Schema.org Markup
Add to `index.html` before closing `</body>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Narratum",
  "description": "Strategic infrastructure for transformative hospitality",
  "url": "https://narratum.io",
  "logo": "https://narratum.io/favicon.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "connect@narratum.io",
    "contactType": "customer service"
  },
  "founder": {
    "@type": "Person",
    "name": "Pascal Frey"
  },
  "areaServed": "Worldwide",
  "serviceType": ["Hospitality Consulting", "Experience Design", "Digital Transformation"]
}
</script>
```

#### 2. Create Additional Files

**robots.txt** (update existing):
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://narratum.io/sitemap.xml
```

**sitemap.xml** (update existing):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://narratum.io/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://narratum.io/thank-you</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

#### 3. Performance Optimization
- **Image Optimization**: Convert images to WebP format
- **Lazy Loading**: Already implemented for sections
- **Minification**: Minify CSS/JS before deployment
- **CDN**: Consider Cloudflare for global performance

#### 4. Content SEO Strategy
- **Target Keywords**: 
  - "hospitality infrastructure consulting"
  - "transformative hospitality design"
  - "luxury experience strategy"
  - "institutional hospitality systems"
- **Long-tail Keywords**: Focus on specific services
- **Local SEO**: Add location pages for key markets

#### 5. Analytics Setup
Add before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 4. Deployment Checklist

### Pre-Launch
- [ ] Replace all placeholder content
- [ ] Test form submissions
- [ ] Check all links
- [ ] Validate HTML/CSS
- [ ] Test on multiple devices
- [ ] Review console for errors
- [ ] Optimize images
- [ ] Minify code
- [ ] Set up SSL
- [ ] Configure backups

### Post-Launch
- [ ] Submit to Google Search Console
- [ ] Submit sitemap
- [ ] Set up Google Analytics
- [ ] Monitor Core Web Vitals
- [ ] Test form notifications
- [ ] Check security headers
- [ ] Set up monitoring alerts
- [ ] Create regular backup schedule

### Performance Targets
- **Lighthouse Score**: Aim for 90+ in all categories
- **Core Web Vitals**:
  - LCP: < 2.5s
  - FID: < 100ms
  - CLS: < 0.1
- **Page Load**: < 3 seconds on 3G

## 5. Maintenance Plan

### Weekly
- Check form submissions
- Review analytics
- Monitor uptime

### Monthly
- Update content
- Check for broken links
- Review security logs
- Test backups

### Quarterly
- Security audit
- Performance review
- SEO assessment
- Update dependencies