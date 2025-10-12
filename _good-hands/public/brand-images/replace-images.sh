#!/bin/bash
# Replace old brand images with new Gemini versions

cd "$(dirname "$0")"

echo "Replacing brand images with Gemini versions..."

cp -f gemini/Gemini_Generated_Image_5ohs8g5ohs8g5ohs.png blog-lisbon-guide.png
cp -f gemini/Gemini_Generated_Image_tqgy7qtqgy7qtqgy.png beauty-moment.png
cp -f gemini/Gemini_Generated_Image_si847qsi847qsi84.png category-makeup.png
cp -f gemini/Gemini_Generated_Image_nk9qe7nk9qe7nk9q.png category-skincare.png
cp -f gemini/Gemini_Generated_Image_n7l5y6n7l5y6n7l5.png experience-wellness-retreat.png
cp -f gemini/Gemini_Generated_Image_k6g8ajk6g8ajk6g8.png hero-salon-interior.png
cp -f gemini/Gemini_Generated_Image_hlzpj0hlzpj0hlzp.png category-weddings.png
cp -f gemini/Gemini_Generated_Image_gstjj0gstjj0gstj.png category-wellness.png
cp -f gemini/Gemini_Generated_Image_xdtkw6xdtkw6xdtk.png experience-bridal-beauty.png
cp -f gemini/Gemini_Generated_Image_nwe034nwe034nwe0.png experience-corporate-wellness.png
cp -f gemini/Gemini_Generated_Image_gdzeeogdzeeogdze.png service-facial-treatment.png
cp -f gemini/Gemini_Generated_Image_prln3nprln3nprln.png salon-detail.png
cp -f gemini/Gemini_Generated_Image_j17nd0j17nd0j17n.png category-hair-styling.png
cp -f gemini/Gemini_Generated_Image_tecjhttecjhttecj.png service-makeup-application.png
cp -f gemini/Gemini_Generated_Image_fpi0k2fpi0k2fpi0.png blog-portuguese-beauty.png
cp -f gemini/Gemini_Generated_Image_gn5pzdgn5pzdgn5p.png blog-wedding-timeline.png

echo "✅ All 16 images replaced successfully!"
echo "Files updated:"
ls -lh *.png | awk '{print "  -", $9, "("$5")"}'

