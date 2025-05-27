# Artifact → File Name Mapping

Copy content from each artifact and save with these exact filenames:

| Artifact Name | Save As | Location |
|--------------|---------|----------|
| **index-html** | `index.html` | Root folder |
| **styles-css** | `styles.css` | Root folder |
| **script-js** | `script.js` | Root folder |
| **legal-content-js** | `legal-content.js` | Root folder |
| **favicon-svg** | `favicon.svg` | Root folder |
| **robots-txt** | `robots.txt` | Root folder |
| **sitemap-xml** | `sitemap.xml` | Root folder |
| **manifest-json** | `manifest.json` | Root folder |
| **htaccess-security** | `.htaccess` | Root folder |
| **404-page** | `404.html` | Root folder |
| **narratum-thank-you** | `thank-you.html` | Root folder |
| **cname-file** | `CNAME` | Root folder (GitHub only) |

## Step-by-Step Download Process:

### 1. Create Your Main Folder
```
📁 narratum/
```

### 2. Download Each File
For each artifact listed above:
1. Click on the artifact
2. Copy all content (Ctrl+A, Ctrl+C)
3. Create new file with the "Save As" name
4. Paste content (Ctrl+V)
5. Save in the narratum folder

### 3. Create Assets Folder
```
📁 narratum/
  └── 📁 assets/
```

### 4. Create These Images (1200x630px recommended size)
- `og-image.jpg` - For social media sharing
- `twitter-image.jpg` - For Twitter cards
- `apple-touch-icon.png` - 180x180px
- `icon-192.png` - 192x192px
- `icon-512.png` - 512x512px

### 5. Before Uploading
⚠️ **IMPORTANT**: In `index.html`, find and replace:
```
YOUR_FORM_ID
```
With your actual Formspree form ID

## Final Structure Should Look Like:
```
📁 narratum/
  ├── 📄 index.html
  ├── 📄 styles.css
  ├── 📄 script.js
  ├── 📄 legal-content.js
  ├── 📄 favicon.svg
  ├── 📄 robots.txt
  ├── 📄 sitemap.xml
  ├── 📄 manifest.json
  ├── 📄 .htaccess
  ├── 📄 404.html
  ├── 📄 thank-you.html
  ├── 📄 CNAME (optional)
  └── 📁 assets/
      ├── 🖼️ og-image.jpg
      ├── 🖼️ twitter-image.jpg
      ├── 🖼️ apple-touch-icon.png
      ├── 🖼️ icon-192.png
      └── 🖼️ icon-512.png
```

## Total Files Needed:
- **11 code files** (12 with CNAME for GitHub)
- **5 image files** in assets folder
- **Total: 16-17 files**

## Quick Tips:
- The `.htaccess` file starts with a dot and might be hidden
- Make sure `thank-you.html` is spelled exactly like that
- All image files go in the `assets` folder, not root
- Double-check file extensions (.html not .htm, .js not .txt)

Ready to upload once you have all files!