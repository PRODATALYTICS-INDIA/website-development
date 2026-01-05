#!/bin/bash

# Quick Dev Deployment Script for Netlify
# This script prepares the site for Netlify deployment

set -e  # Exit on any error

# Get the script directory and project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 PRODATALYTICS Dev Deployment Preparation${NC}"
echo -e "${BLUE}===========================================${NC}"
echo ""

# Step 1: Check prerequisites
echo -e "${YELLOW}📋 Checking prerequisites...${NC}"

if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js first.${NC}"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed. Please install npm first.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Prerequisites check passed${NC}"
echo ""

# Step 2: Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install
echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

# Step 3: Build CSS
echo -e "${YELLOW}🎨 Building CSS...${NC}"
npm run build:css
echo -e "${GREEN}✅ CSS build completed${NC}"
echo ""

# Step 4: Verify netlify.toml exists (must be in root for Netlify)
echo -e "${YELLOW}⚙️  Checking Netlify configuration...${NC}"
if [ ! -f "netlify.toml" ]; then
    echo -e "${YELLOW}⚠️  netlify.toml not found in root directory.${NC}"
    echo -e "${YELLOW}    Note: netlify.toml must be in project root for Netlify to detect it.${NC}"
else
    echo -e "${GREEN}✅ Netlify configuration found${NC}"
fi
echo ""

# Step 5: Final summary
echo -e "${GREEN}✅ Dev deployment preparation complete!${NC}"
echo ""
echo -e "${BLUE}📝 Next steps:${NC}"
echo ""
echo "  Option 1: Deploy via Netlify Dashboard"
echo "  1. Go to https://netlify.com and sign up/login"
echo "  2. Click 'Add new site' → 'Deploy manually'"
echo "  3. Drag and drop this entire folder"
echo "  4. Your site will be live in ~30 seconds!"
echo ""
echo "  Option 2: Deploy via Git (Recommended)"
echo "  1. Push this code to GitHub"
echo "  2. In Netlify, click 'Add new site' → 'Import an existing project'"
echo "  3. Connect your GitHub repository"
echo "  4. Build settings:"
echo "     - Build command: npm install && npm run build:css"
echo "     - Publish directory: . (root)"
echo "  5. Click 'Deploy site'"
echo ""
echo -e "${BLUE}📚 For detailed instructions, see:${NC}"
echo "  - deployment/DEV_DEPLOYMENT_GUIDE.md"
echo ""
echo -e "${GREEN}✨ Ready to deploy!${NC}"

