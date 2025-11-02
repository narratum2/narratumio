#!/usr/bin/env node
/**
 * Image Generation Script for Good Hands Website
 * 
 * This script helps manage and generate images for the Good Hands website.
 * Uses prompts from BRAND_PHOTOGRAPHY_PROMPTS.md to generate consistent brand imagery.
 * 
 * Usage:
 *   node generate-images.js --list          # List all needed images
 *   node generate-images.js --check         # Check which images are missing
 *   node generate-images.js --generate <image-name>  # Generate specific image
 */

const fs = require('fs');
const path = require('path');

const BRAND_COLORS = {
  porcelain: '#f8f6f3',
  sage: '#a8b5a5',
  gold: '#c9a961',
  taupe: '#d4af37'
};

const IMAGE_SPECS = {
  hero: { width: 1920, height: 1080, format: 'png' },
  card: { width: 800, height: 600, format: 'png' },
  thumbnail: { width: 400, height: 400, format: 'png' },
  blog: { width: 1200, height: 630, format: 'png' }
};

// Images that exist
const EXISTING_IMAGES = [
  'hero-salon-interior.png',
  'beauty-moment.png',
  'blog-lisbon-guide.png',
  'blog-portuguese-beauty.png',
  'blog-wedding-timeline.png',
  'category-hair-styling.png',
  'category-makeup.png',
  'category-skincare.png',
  'category-weddings.png',
  'category-wellness.png',
  'experience-bridal-beauty.png',
  'experience-corporate-wellness.png',
  'experience-wellness-retreat.png',
  'salon-detail.png',
  'service-facial-treatment.png',
  'service-makeup-application.png',
  'service-nail-art.png'
];

// Images that are needed (based on site requirements)
const NEEDED_IMAGES = {
  'neighborhood-alfama.png': {
    description: 'Historic Alfama neighborhood in Lisbon - narrow cobblestone streets, traditional tiles, warm authentic feel',
    spec: 'hero',
    prompt: 'Lisbon historic Alfama neighborhood, narrow cobblestone streets, traditional Portuguese tiles, warm authentic atmosphere, soft natural lighting, muted colors with sage green accents, editorial style'
  },
  'neighborhood-chiado.png': {
    description: 'Bohemian chic Chiado district - arts and culture scene, sophisticated casual atmosphere',
    spec: 'hero',
    prompt: 'Lisbon Chiado district, bohemian chic atmosphere, arts and culture, sophisticated casual setting, pastel buildings, soft natural light, editorial style with sage accents'
  },
  'neighborhood-principe-real.png': {
    description: 'Garden district Príncipe Real - trendy upscale area with green spaces',
    spec: 'hero',
    prompt: 'Lisbon Príncipe Real garden district, trendy upscale neighborhood, green spaces, elegant setting, natural lighting, muted colors with gold accents'
  },
  'neighborhood-baixa.png': {
    description: 'Grand neoclassical Baixa district - busy central downtown area',
    spec: 'hero',
    prompt: 'Lisbon Baixa district, grand neoclassical architecture, busy central downtown, vibrant professional atmosphere, warm natural light, editorial style'
  },
  'neighborhood-belem.png': {
    description: 'Riverside Belém - historical monuments, serene cultural atmosphere',
    spec: 'hero',
    prompt: 'Lisbon Belém riverside, historical monuments in background, serene cultural atmosphere, Tagus River, soft natural lighting, muted colors'
  },
  'neighborhood-cascais.png': {
    description: 'Coastal Cascais - beach town luxury, fresh airy atmosphere',
    spec: 'hero',
    prompt: 'Cascais coastal town Portugal, beach luxury, fresh airy atmosphere, coastal elegance, natural daylight, sage green and gold accents'
  },
  'neighborhood-sintra.png': {
    description: 'Fairytale Sintra - palaces, mystical forests, romantic magical setting',
    spec: 'hero',
    prompt: 'Sintra Portugal, fairytale palaces, mystical forests, romantic magical setting, soft natural light, editorial style with muted colors'
  },
  'neighborhood-avenida.png': {
    description: 'Avenida da Liberdade - elegant boulevard, luxury shopping atmosphere',
    spec: 'hero',
    prompt: 'Lisbon Avenida da Liberdade, elegant boulevard, luxury shopping atmosphere, sophisticated upscale setting, natural lighting, editorial style'
  },
  'category-nails.png': {
    description: 'Luxury nail services - professional manicure setting, elegant nail art',
    spec: 'card',
    prompt: 'Luxury nail salon, professional manicure setting, elegant nail art on hands, marble surface, sage green accents, porcelain background, natural lighting, editorial style'
  },
  'service-mens-grooming.png': {
    description: 'Men\'s grooming services - modern barbershop aesthetic, professional male grooming',
    spec: 'card',
    prompt: 'Modern barbershop, professional male grooming, sophisticated masculine setting, neutral colors with gold accents, natural lighting, editorial style'
  },
  'blog-seasonal-beauty.png': {
    description: 'Seasonal beauty guide - Lisbon seasonal beauty trends',
    spec: 'blog',
    prompt: 'Seasonal beauty products arranged on porcelain tray, Lisbon setting, sage green accents, natural lighting, editorial style'
  }
};

// Function to check which images are missing
function checkMissingImages() {
  const imagesDir = path.join(__dirname);
  const missing = [];
  
  for (const [filename, config] of Object.entries(NEEDED_IMAGES)) {
    const filepath = path.join(imagesDir, filename);
    if (!fs.existsSync(filepath)) {
      missing.push({ filename, ...config });
    }
  }
  
  return missing;
}

// Function to list all image requirements
function listAllImages() {
  console.log('📸 EXISTING IMAGES:');
  console.log('='.repeat(50));
  EXISTING_IMAGES.forEach(img => {
    const filepath = path.join(__dirname, img);
    const exists = fs.existsSync(filepath);
    console.log(`${exists ? '✅' : '❌'} ${img}`);
  });
  
  console.log('\n📋 NEEDED IMAGES:');
  console.log('='.repeat(50));
  const missing = checkMissingImages();
  if (missing.length === 0) {
    console.log('✅ All needed images exist!');
  } else {
    missing.forEach(({ filename, description, spec }) => {
      console.log(`❌ ${filename}`);
      console.log(`   Description: ${description}`);
      console.log(`   Spec: ${IMAGE_SPECS[spec].width}x${IMAGE_SPECS[spec].height} ${IMAGE_SPECS[spec].format.toUpperCase()}\n`);
    });
  }
}

// Function to generate prompt for an image
function getPromptForImage(imageName) {
  const config = NEEDED_IMAGES[imageName];
  if (!config) {
    throw new Error(`Image ${imageName} not found in needed images list`);
  }
  
  const basePrompt = config.prompt;
  const styleGuide = `
Style Guidelines:
- Color Palette: Porcelain (#f8f6f3), Sage Green (#a8b5a5), Gold (#c9a961), Warm Taupe
- Lighting: Soft natural daylight (golden hour or overcast), no harsh shadows
- Composition: Shallow depth-of-field, rule of thirds, negative space for text overlays
- Mood: Candid, relaxed, effortlessly sophisticated
- Finish: High resolution, matte look, subtle contrast, no heavy filters
- Location Context: Lisbon, Portugal (where relevant)`;

  return `${basePrompt}\n\n${styleGuide}`;
}

// Main CLI interface
function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case '--list':
      listAllImages();
      break;
      
    case '--check':
      const missing = checkMissingImages();
      console.log(`\n📊 Status: ${missing.length} images missing\n`);
      if (missing.length > 0) {
        console.log('Missing images:');
        missing.forEach(({ filename }) => console.log(`  - ${filename}`));
      }
      break;
      
    case '--generate':
      const imageName = args[1];
      if (!imageName) {
        console.error('Error: Please specify image name');
        console.log('Usage: node generate-images.js --generate <image-name>');
        process.exit(1);
      }
      
      if (!NEEDED_IMAGES[imageName]) {
        console.error(`Error: ${imageName} is not in the needed images list`);
        console.log('\nAvailable images to generate:');
        Object.keys(NEEDED_IMAGES).forEach(name => console.log(`  - ${name}`));
        process.exit(1);
      }
      
      const prompt = getPromptForImage(imageName);
      console.log('🎨 GENERATION PROMPT:');
      console.log('='.repeat(50));
      console.log(prompt);
      console.log('\n📝 INSTRUCTIONS:');
      console.log('1. Use the prompt above in your image generation tool (Gemini, DALL-E, Midjourney, etc.)');
      console.log(`2. Save the generated image as: ${imageName}`);
      console.log(`3. Place it in: ${__dirname}`);
      console.log(`4. Dimensions: ${IMAGE_SPECS[NEEDED_IMAGES[imageName].spec].width}x${IMAGE_SPECS[NEEDED_IMAGES[imageName].spec].height}`);
      break;
      
    case '--help':
    default:
      console.log(`
🎨 Good Hands Image Generation Script

Usage:
  node generate-images.js --list              List all existing and needed images
  node generate-images.js --check             Check which images are missing
  node generate-images.js --generate <name>   Get prompt for specific image
  node generate-images.js --help              Show this help

Examples:
  node generate-images.js --list
  node generate-images.js --check
  node generate-images.js --generate neighborhood-alfama.png
      `);
      break;
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  EXISTING_IMAGES,
  NEEDED_IMAGES,
  IMAGE_SPECS,
  BRAND_COLORS,
  checkMissingImages,
  getPromptForImage
};
