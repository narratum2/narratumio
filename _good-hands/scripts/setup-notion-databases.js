#!/usr/bin/env node

/**
 * Notion Database Setup Script for Good Hands
 * 
 * This script automatically creates all required Notion databases
 * with proper schemas, properties, and relations.
 * 
 * Prerequisites:
 * 1. Create a Notion account
 * 2. Create an integration at: https://www.notion.so/my-integrations
 * 3. Get your integration token (starts with "secret_")
 * 4. Create a parent page in your workspace to hold the databases
 * 5. Share that page with your integration
 * 
 * Usage:
 * node scripts/setup-notion-databases.js
 */

const https = require('https');

// Configuration
const NOTION_API_VERSION = '2022-06-28';
let NOTION_TOKEN = process.env.NOTION_API_KEY;
let PARENT_PAGE_ID = process.env.NOTION_PARENT_PAGE_ID;

// Color-coded console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Notion API request helper
function notionRequest(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.notion.com',
      path: path,
      method: method,
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': NOTION_API_VERSION,
        'Content-Type': 'application/json',
      },
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(parsed);
          } else {
            reject(new Error(`Notion API Error: ${parsed.message || body}`));
          }
        } catch (e) {
          reject(new Error(`Failed to parse response: ${body}`));
        }
      });
    });

    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

// Database schemas
const databases = {
  bookings: {
    name: '📅 Bookings',
    description: 'Customer booking requests and appointments',
    properties: {
      'Name': { type: 'title', title: {} },
      'Email': { type: 'email', email: {} },
      'Phone': { type: 'phone_number', phone_number: {} },
      'Service': { 
        type: 'select',
        select: {
          options: [
            { name: 'Hair Styling', color: 'blue' },
            { name: 'Hair Color', color: 'purple' },
            { name: 'Spa & Massage', color: 'green' },
            { name: 'Facial Treatment', color: 'pink' },
            { name: 'Makeup', color: 'red' },
            { name: 'Nails (Manicure)', color: 'orange' },
            { name: 'Nails (Pedicure)', color: 'yellow' },
            { name: 'Wellness', color: 'default' },
          ]
        }
      },
      'Neighborhood': {
        type: 'select',
        select: {
          options: [
            { name: 'Chiado', color: 'blue' },
            { name: 'Príncipe Real', color: 'purple' },
            { name: 'Baixa', color: 'green' },
            { name: 'Avenida', color: 'pink' },
            { name: 'Alfama', color: 'red' },
            { name: 'Belém', color: 'orange' },
            { name: 'Sintra', color: 'yellow' },
            { name: 'Cascais', color: 'gray' },
          ]
        }
      },
      'Date': { type: 'date', date: {} },
      'Time': { type: 'rich_text', rich_text: {} },
      'Status': {
        type: 'status',
        status: {
          options: [
            { name: 'New', color: 'blue' },
            { name: 'Confirmed', color: 'green' },
            { name: 'In Progress', color: 'yellow' },
            { name: 'Completed', color: 'green' },
            { name: 'Cancelled', color: 'red' },
          ],
          groups: [
            { name: 'To Do', option_ids: [] },
            { name: 'In Progress', option_ids: [] },
            { name: 'Complete', option_ids: [] },
          ]
        }
      },
      'Message': { type: 'rich_text', rich_text: {} },
      'Price': { type: 'number', number: { format: 'euro' } },
      'UTM Source': { type: 'rich_text', rich_text: {} },
      'UTM Medium': { type: 'rich_text', rich_text: {} },
      'UTM Campaign': { type: 'rich_text', rich_text: {} },
      'Created': { type: 'created_time', created_time: {} },
    }
  },

  customers: {
    name: '👥 Customers',
    description: 'Customer database with booking history and preferences',
    properties: {
      'Name': { type: 'title', title: {} },
      'Email': { type: 'email', email: {} },
      'Phone': { type: 'phone_number', phone_number: {} },
      'Member Type': {
        type: 'select',
        select: {
          options: [
            { name: 'None', color: 'gray' },
            { name: 'Gold (€49/mo)', color: 'yellow' },
            { name: 'Platinum (€129/mo)', color: 'blue' },
          ]
        }
      },
      'Total Bookings': { type: 'number', number: { format: 'number' } },
      'Total Spent': { type: 'number', number: { format: 'euro' } },
      'Lifetime Value': { type: 'number', number: { format: 'euro' } },
      'First Booking': { type: 'date', date: {} },
      'Last Booking': { type: 'date', date: {} },
      'Preferred Services': { type: 'multi_select', multi_select: { options: [] } },
      'Preferred Neighborhood': { type: 'rich_text', rich_text: {} },
      'Notes': { type: 'rich_text', rich_text: {} },
      'Tags': {
        type: 'multi_select',
        multi_select: {
          options: [
            { name: 'VIP', color: 'red' },
            { name: 'Regular', color: 'green' },
            { name: 'Hotel Guest', color: 'blue' },
            { name: 'Local', color: 'purple' },
            { name: 'Tourist', color: 'orange' },
          ]
        }
      },
      'Created': { type: 'created_time', created_time: {} },
    }
  },

  memberships: {
    name: '💎 Memberships',
    description: 'Active membership subscriptions and benefits tracking',
    properties: {
      'Customer Name': { type: 'title', title: {} },
      'Email': { type: 'email', email: {} },
      'Membership Type': {
        type: 'select',
        select: {
          options: [
            { name: 'Gold (€49/mo)', color: 'yellow' },
            { name: 'Platinum (€129/mo)', color: 'blue' },
          ]
        }
      },
      'Status': {
        type: 'status',
        status: {
          options: [
            { name: 'Active', color: 'green' },
            { name: 'Cancelled', color: 'red' },
            { name: 'Expired', color: 'gray' },
            { name: 'Trial', color: 'blue' },
          ]
        }
      },
      'Start Date': { type: 'date', date: {} },
      'Renewal Date': { type: 'date', date: {} },
      'Monthly Price': { type: 'number', number: { format: 'euro' } },
      'Discount': { type: 'number', number: { format: 'percent' } },
      'Stripe Customer ID': { type: 'rich_text', rich_text: {} },
      'Stripe Subscription ID': { type: 'rich_text', rich_text: {} },
      'Total Revenue': { type: 'number', number: { format: 'euro' } },
      'Months Active': { type: 'number', number: { format: 'number' } },
      'Benefits Used': { type: 'rich_text', rich_text: {} },
      'Created': { type: 'created_time', created_time: {} },
    }
  },

  professionals: {
    name: '✂️ Beauty Professionals',
    description: 'Vetted beauty professionals network',
    properties: {
      'Name': { type: 'title', title: {} },
      'Specialties': {
        type: 'multi_select',
        multi_select: {
          options: [
            { name: 'Hair Styling', color: 'blue' },
            { name: 'Hair Color', color: 'purple' },
            { name: 'Massage', color: 'green' },
            { name: 'Facials', color: 'pink' },
            { name: 'Makeup', color: 'red' },
            { name: 'Nails', color: 'orange' },
            { name: 'Wellness', color: 'yellow' },
          ]
        }
      },
      'Neighborhood': {
        type: 'select',
        select: {
          options: [
            { name: 'Chiado', color: 'blue' },
            { name: 'Príncipe Real', color: 'purple' },
            { name: 'Baixa', color: 'green' },
            { name: 'Avenida', color: 'pink' },
            { name: 'Alfama', color: 'red' },
            { name: 'Belém', color: 'orange' },
            { name: 'Sintra', color: 'yellow' },
            { name: 'Cascais', color: 'gray' },
          ]
        }
      },
      'Email': { type: 'email', email: {} },
      'Phone': { type: 'phone_number', phone_number: {} },
      'Rating': { type: 'number', number: { format: 'number' } },
      'Total Bookings': { type: 'number', number: { format: 'number' } },
      'Status': {
        type: 'select',
        select: {
          options: [
            { name: 'Active', color: 'green' },
            { name: 'Inactive', color: 'gray' },
            { name: 'Pending', color: 'yellow' },
          ]
        }
      },
      'Languages': { type: 'multi_select', multi_select: { options: [] } },
      'Availability': { type: 'rich_text', rich_text: {} },
      'Notes': { type: 'rich_text', rich_text: {} },
      'Created': { type: 'created_time', created_time: {} },
    }
  },

  hotelPartners: {
    name: '🏨 Hotel Partners',
    description: 'Luxury hotel partnerships and B2B relationships',
    properties: {
      'Hotel Name': { type: 'title', title: {} },
      'Contact Person': { type: 'rich_text', rich_text: {} },
      'Email': { type: 'email', email: {} },
      'Phone': { type: 'phone_number', phone_number: {} },
      'Neighborhood': {
        type: 'select',
        select: {
          options: [
            { name: 'Chiado', color: 'blue' },
            { name: 'Príncipe Real', color: 'purple' },
            { name: 'Baixa', color: 'green' },
            { name: 'Avenida', color: 'pink' },
            { name: 'Alfama', color: 'red' },
            { name: 'Belém', color: 'orange' },
            { name: 'Sintra', color: 'yellow' },
            { name: 'Cascais', color: 'gray' },
          ]
        }
      },
      'Status': {
        type: 'status',
        status: {
          options: [
            { name: 'Active', color: 'green' },
            { name: 'Negotiating', color: 'yellow' },
            { name: 'Inactive', color: 'gray' },
            { name: 'Prospecting', color: 'blue' },
          ]
        }
      },
      'Commission Rate': { type: 'number', number: { format: 'percent' } },
      'Contract Start': { type: 'date', date: {} },
      'Contract End': { type: 'date', date: {} },
      'Total Bookings': { type: 'number', number: { format: 'number' } },
      'Total Revenue': { type: 'number', number: { format: 'euro' } },
      'Coupon Code': { type: 'rich_text', rich_text: {} },
      'Notes': { type: 'rich_text', rich_text: {} },
      'Website': { type: 'url', url: {} },
      'Created': { type: 'created_time', created_time: {} },
    }
  }
};

// Create a database
async function createDatabase(key, schema) {
  log(`\n📦 Creating database: ${schema.name}...`, 'blue');
  
  try {
    const database = await notionRequest('POST', '/v1/databases', {
      parent: { page_id: PARENT_PAGE_ID },
      title: [
        {
          type: 'text',
          text: { content: schema.name }
        }
      ],
      description: [
        {
          type: 'text',
          text: { content: schema.description }
        }
      ],
      properties: schema.properties
    });

    log(`✅ Created: ${schema.name}`, 'green');
    log(`   Database ID: ${database.id}`, 'yellow');
    return { key, id: database.id, name: schema.name };
  } catch (error) {
    log(`❌ Failed to create ${schema.name}: ${error.message}`, 'red');
    throw error;
  }
}

// Prompt for input
function prompt(question) {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
    readline.question(question, (answer) => {
      readline.close();
      resolve(answer.trim());
    });
  });
}

// Main setup function
async function setupNotionDatabases() {
  log('\n🚀 Good Hands - Notion Database Setup\n', 'blue');
  log('════════════════════════════════════════════════════\n', 'blue');

  // Get Notion token
  if (!NOTION_TOKEN) {
    log('📝 Step 1: Get your Notion Integration Token', 'yellow');
    log('   1. Go to: https://www.notion.so/my-integrations', 'reset');
    log('   2. Click "New integration"', 'reset');
    log('   3. Name it "Good Hands Integration"', 'reset');
    log('   4. Copy the "Internal Integration Token"\n', 'reset');
    
    NOTION_TOKEN = await prompt('Enter your Notion Integration Token: ');
    
    if (!NOTION_TOKEN || !NOTION_TOKEN.startsWith('secret_')) {
      log('\n❌ Invalid token format. Token should start with "secret_"', 'red');
      process.exit(1);
    }
  }

  // Get parent page ID
  if (!PARENT_PAGE_ID) {
    log('\n📝 Step 2: Get your Parent Page ID', 'yellow');
    log('   1. Create a new page in Notion called "Good Hands CRM"', 'reset');
    log('   2. Share this page with your integration:', 'reset');
    log('      - Click "..." in top right', 'reset');
    log('      - Click "Connections"', 'reset');
    log('      - Find "Good Hands Integration" and connect it', 'reset');
    log('   3. Copy the page ID from the URL:', 'reset');
    log('      URL: https://notion.so/workspace/PAGE_ID?v=...', 'reset');
    log('      (It\'s the 32-character string after your workspace name)\n', 'reset');
    
    PARENT_PAGE_ID = await prompt('Enter your Parent Page ID: ');
    
    // Remove dashes if present
    PARENT_PAGE_ID = PARENT_PAGE_ID.replace(/-/g, '');
    
    if (PARENT_PAGE_ID.length !== 32) {
      log('\n❌ Invalid page ID. Should be 32 characters.', 'red');
      process.exit(1);
    }
  }

  log('\n✅ Configuration complete!', 'green');
  log('\n🔨 Creating databases...', 'blue');
  log('════════════════════════════════════════════════════\n', 'blue');

  const results = [];

  // Create all databases
  for (const [key, schema] of Object.entries(databases)) {
    try {
      const result = await createDatabase(key, schema);
      results.push(result);
      // Wait a bit between requests
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      log(`\n❌ Setup failed: ${error.message}`, 'red');
      process.exit(1);
    }
  }

  // Success summary
  log('\n════════════════════════════════════════════════════', 'green');
  log('✅ ALL DATABASES CREATED SUCCESSFULLY!', 'green');
  log('════════════════════════════════════════════════════\n', 'green');

  log('📋 Database IDs (add these to your .env file):\n', 'yellow');
  
  console.log('# Notion Configuration');
  console.log(`NOTION_API_KEY=${NOTION_TOKEN}`);
  results.forEach(db => {
    const envKey = `NOTION_${db.key.toUpperCase()}_DATABASE_ID`;
    console.log(`${envKey}=${db.id}`);
  });

  log('\n📝 Next Steps:', 'blue');
  log('1. Copy the environment variables above', 'reset');
  log('2. Add them to your .env.local file', 'reset');
  log('3. Add them to Vercel: vercel env add NOTION_API_KEY', 'reset');
  log('4. Redeploy your application', 'reset');
  log('5. Test the Notion integration!\n', 'reset');

  log('🎉 Notion setup complete! Your CRM is ready.', 'green');
}

// Run the setup
setupNotionDatabases().catch(error => {
  log(`\n❌ Setup failed: ${error.message}`, 'red');
  process.exit(1);
});

