# Narratum Website - Complete File Package

## All Files You Need (Copy These Exactly)

### 1. Root Directory Files

#### index.html
- **Source**: Copy from artifact "index-html"
- **Note**: Remember to replace YOUR_FORM_ID with your actual Formspree ID

#### styles.css
- **Source**: Copy from artifact "styles-css"

#### script.js
- **Source**: Copy from artifact "script-js"

#### legal-content.js
- **Source**: Copy from artifact "legal-content-js"

#### favicon.svg
- **Source**: Copy from artifact "favicon-svg"

#### robots.txt
- **Source**: Copy from artifact "robots-txt"

#### sitemap.xml
- **Source**: Copy from artifact "sitemap-xml"

#### manifest.json
- **Source**: Copy from artifact "manifest-json"

#### .htaccess
- **Source**: Copy from artifact "htaccess-security"
- **Important**: This file starts with a dot (.) and may be hidden on Mac/Linux

#### 404.html
- **Source**: Copy from artifact "404-page"

#### thank-you.html
- **Source**: Copy from artifact "narratum-thank-you"
- **Note**: Save this as "thank-you.html" (not narratum-thank-you.html)

#### CNAME (only if using GitHub Pages)
- **Source**: Copy from artifact "cname-file"
- **Note**: Only needed for GitHub Pages custom domain

### 2. Assets Folder (Create These)

Create a folder called `assets` and add these images:

#### Images You Need to Create:
1. **og-image.jpg**
   - Size: 1200 x 630 pixels
   - Purpose: Facebook/LinkedIn sharing
   - Suggestion: Use your logo on dark background with tagline

2. **twitter-image.jpg**
   - Size: 1200 x 600 pixels
   - Purpose: Twitter/X sharing
   - Suggestion: Similar to og-image but slightly different dimensions

3. **apple-touch-icon.png**
   - Size: 180 x 180 pixels
   - Purpose: iOS home screen icon
   - Suggestion: Your favicon on solid background

4. **icon-192.png**
   - Size: 192 x 192 pixels
   - Purpose: Android PWA icon
   - Suggestion: Same as apple-touch-icon

5. **icon-512.png**
   - Size: 512 x 512 pixels
   - Purpose: Android PWA splash screen
   - Suggestion: High-res version of your icon

## Final Folder Structure:

```
narratum/
├── index.html
├── styles.css
├── script.js
├── legal-content.js
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── manifest.json
├── .htaccess
├── 404.html
├── thank-you.html
├── CNAME (optional - only for GitHub)
│
└── assets/
    ├── og-image.jpg (create this)
    ├── twitter-image.jpg (create this)
    ├── apple-touch-icon.png (create this)
    ├── icon-192.png (create this)
    └── icon-512.png (create this)
```

## Download Steps:

1. **Create a folder** on your computer called "narratum"

2. **Copy each artifact** content and save with the exact filename listed above

3. **Create assets folder** inside narratum folder

4. **Create the 5 images** using your design software or Canva

5. **Important edits** before uploading:
   - In index.html: Replace YOUR_FORM_ID
   - Check all files are named correctly
   - Ensure .htaccess file is included

## Quick Image Creation with Canva:

1. Go to canva.com
2. Create designs with these exact dimensions:
   - Custom size: 1200x630px for og-image
   - Custom size: 1200x600px for twitter-image
   - Custom size: 180x180px for apple-touch-icon
   - Custom size: 192x192px for icon-192
   - Custom size: 512x512px for icon-512

3. Use:
   - Background: #0a1520 (your dark blue)
   - Logo/Text: #fbbf24 (your gold)
   - Include "NARRATUM" and tagline for social images
   - Just logo for icon images

## Upload Checklist:

- [ ] All 11 text files copied and named correctly
- [ ] Assets folder created
- [ ] 5 images created and added to assets folder
- [ ] YOUR_FORM_ID replaced in index.html
- [ ] .htaccess file included (may be hidden)
- [ ] Total: 16 files (11 in root + 5 in assets)

## Verification After Upload:

1. Visit yoursite.com - Homepage should load
2. Visit yoursite.com/404test - Should show custom 404 page
3. Try submitting form - Should redirect to thank-you page
4. Click legal links in footer - Should open popups
5. Test color themes - All 6 should work
6. Share on social media - Preview images should appear

## Common Issues:

**Site shows "Index of /"**: index.html not uploaded or named wrong
**Form doesn't work**: Check Formspree ID is correct
**No styles**: styles.css not uploaded or path is wrong
**404 page not styled**: Check 404.html links to /styles.css with forward slash
**.htaccess not working**: Check if hosting supports Apache/htaccess files