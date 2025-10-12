#!/bin/bash

# Good Hands - Testing Commands
# Run these after configuration is complete

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Replace with your actual domain
DOMAIN="your-domain.vercel.app"

echo -e "${YELLOW}=== Good Hands Integration Testing ===${NC}\n"

# Test 1: Health Check
echo -e "${YELLOW}Test 1: Health Check${NC}"
echo "Testing: https://${DOMAIN}/api/admin/health"
curl -s "https://${DOMAIN}/api/admin/health" | jq '.' || echo -e "${RED}Failed${NC}"
echo -e "\n"

# Test 2: Booking Creation
echo -e "${YELLOW}Test 2: Create Test Booking${NC}"
curl -X POST "https://${DOMAIN}/api/bookings" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+351 912 345 678",
    "service": "Hair Styling",
    "date": "2025-01-25",
    "time": "14:00"
  }' | jq '.' || echo -e "${RED}Failed${NC}"
echo -e "\n"

# Test 3: Coupon Validation (if you have a test coupon)
echo -e "${YELLOW}Test 3: Validate Coupon (Optional)${NC}"
echo "Assuming you have a coupon 'WELCOME15'"
curl -X POST "https://${DOMAIN}/api/stripe/validate-coupon" \
  -H "Content-Type: application/json" \
  -d '{"code": "WELCOME15"}' | jq '.' || echo -e "${RED}Failed or coupon doesn't exist${NC}"
echo -e "\n"

# Test 4: List Coupons (admin)
echo -e "${YELLOW}Test 4: List Active Coupons${NC}"
curl -s "https://${DOMAIN}/api/stripe/validate-coupon" | jq '.' || echo -e "${RED}Failed${NC}"
echo -e "\n"

# Integration Test (requires admin key)
echo -e "${YELLOW}Test 5: Integration Tests (requires ADMIN_API_KEY)${NC}"
echo "Replace 'your-admin-key' with your actual key"
# curl -X POST "https://${DOMAIN}/api/admin/test-integrations" \
#   -H "x-admin-key: your-admin-key" \
#   -H "Content-Type: application/json" \
#   -d '{"integration": "all"}' | jq '.'
echo "Uncomment above lines and add your admin key to run"
echo -e "\n"

echo -e "${GREEN}=== Testing Complete ===${NC}"
echo -e "\nNext steps:"
echo "1. Check Notion for the test booking"
echo "2. Verify email was sent (if Customer.io configured)"
echo "3. Check Make.com execution history (if configured)"
echo "4. Try a test membership purchase on your site"

