#!/usr/bin/env node

/**
 * Admin API Key Generator for Good Hands
 * 
 * Generates a secure random API key for use with admin endpoints
 * Run: node admin-api-key-generator.js
 */

const crypto = require('crypto');

function generateAdminKey() {
  // Generate 32 random bytes (256 bits)
  const randomBytes = crypto.randomBytes(32);
  
  // Convert to base64url (URL-safe base64)
  const base64url = randomBytes
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
  
  return base64url;
}

console.log('\n=== Good Hands Admin API Key Generator ===\n');

const apiKey = generateAdminKey();

console.log('Your secure admin API key:\n');
console.log(`ADMIN_API_KEY=${apiKey}\n`);

console.log('Instructions:');
console.log('1. Copy the line above');
console.log('2. Add to Vercel Environment Variables');
console.log('3. Select: Production, Preview, Development');
console.log('4. Save and redeploy');
console.log('\nThis key will be required for:');
console.log('- POST /api/admin/test-integrations');
console.log('- Any future admin-only endpoints\n');

console.log('⚠️  IMPORTANT: Save this key securely!');
console.log('   You won\'t be able to retrieve it later.\n');

// Also generate a backup key
const backupKey = generateAdminKey();
console.log('Backup key (optional):\n');
console.log(`ADMIN_API_KEY_BACKUP=${backupKey}\n`);
console.log('===================================\n');

