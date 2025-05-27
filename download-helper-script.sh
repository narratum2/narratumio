#!/bin/bash

# Narratum Website Setup Script
# This creates the folder structure for you

echo "Creating Narratum website structure..."

# Create main directory
mkdir -p narratum
cd narratum

# Create assets directory
mkdir -p assets

# Create placeholder files
touch index.html
touch styles.css
touch script.js
touch legal-content.js
touch favicon.svg
touch robots.txt
touch sitemap.xml
touch manifest.json
touch .htaccess
touch 404.html
touch thank-you.html

# Create image placeholders
touch assets/og-image.jpg
touch assets/twitter-image.jpg
touch assets/apple-touch-icon.png
touch assets/icon-192.png
touch assets/icon-512.png

echo "✅ Folder structure created!"
echo ""
echo "📁 narratum/"
echo "  ├── 📄 index.html"
echo "  ├── 📄 styles.css"
echo "  ├── 📄 script.js"
echo "  ├── 📄 legal-content.js"
echo "  ├── 📄 favicon.svg"
echo "  ├── 📄 robots.txt"
echo "  ├── 📄 sitemap.xml"
echo "  ├── 📄 manifest.json"
echo "  ├── 📄 .htaccess"
echo "  ├── 📄 404.html"
echo "  ├── 📄 thank-you.html"
echo "  └── 📁 assets/"
echo "      ├── 🖼️ og-image.jpg"
echo "      ├── 🖼️ twitter-image.jpg"
echo "      ├── 🖼️ apple-touch-icon.png"
echo "      ├── 🖼️ icon-192.png"
echo "      └── 🖼️ icon-512.png"
echo ""
echo "Next steps:"
echo "1. Copy content from each artifact into the corresponding file"
echo "2. Replace YOUR_FORM_ID in index.html"
echo "3. Create actual images to replace placeholders in assets/"
echo "4. Upload everything to your hosting"
echo ""
echo "Happy launching! 🚀"