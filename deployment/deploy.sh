#!/bin/bash

# PRODATALYTICS Website Deployment Script
# This script prepares the website for deployment to prodatalytics.com

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
# Get the script directory and project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

DEPLOY_DIR="deploy"
DOMAIN="prodatalytics.com"

echo -e "${BLUE}🚀 PRODATALYTICS Website Deployment Script${NC}"
echo -e "${BLUE}===========================================${NC}"
echo ""

# Step 1: Check prerequisites
echo -e "${YELLOW}📋 Checking prerequisites...${NC}"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js first.${NC}"
    exit 1
fi

# Check if npm is installed
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

# Step 4: Create deployment directory
echo -e "${YELLOW}📁 Creating deployment directory...${NC}"
if [ -d "$DEPLOY_DIR" ]; then
    echo -e "${YELLOW}⚠️  Removing existing deployment directory...${NC}"
    rm -rf "$DEPLOY_DIR"
fi
mkdir -p "$DEPLOY_DIR"
echo -e "${GREEN}✅ Deployment directory created${NC}"
echo ""

# Step 5: Copy files to deployment directory
echo -e "${YELLOW}📋 Copying files to deployment directory...${NC}"

# Copy HTML files
cp index.html "$DEPLOY_DIR/"
cp -r pages "$DEPLOY_DIR/"

# Copy CSS (only main.css, not tailwind.css source)
mkdir -p "$DEPLOY_DIR/css"
cp css/main.css "$DEPLOY_DIR/css/"

# Copy JavaScript
cp -r js "$DEPLOY_DIR/"

# Copy assets
cp -r assets "$DEPLOY_DIR/"

# Copy public files
cp -r public "$DEPLOY_DIR/"

# Copy configuration files (if needed)
cp tailwind.config.js "$DEPLOY_DIR/" 2>/dev/null || true

echo -e "${GREEN}✅ Files copied${NC}"
echo ""

# Step 6: Create .htaccess for Apache (optional, for clean URLs)
echo -e "${YELLOW}⚙️  Creating .htaccess file...${NC}"
cat > "$DEPLOY_DIR/.htaccess" << 'EOF'
# PRODATALYTICS Website .htaccess

# Enable Rewrite Engine
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /

    # Redirect www to non-www (or vice versa - adjust as needed)
    # RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
    # RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

    # Force HTTPS (uncomment when SSL is configured)
    # RewriteCond %{HTTPS} off
    # RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

    # Redirect root to homepage
    RewriteRule ^$ pages/homepage.html [L]
    
    # Clean URLs for pages (optional)
    RewriteRule ^homepage$ pages/homepage.html [L]
    RewriteRule ^about$ pages/about.html [L]
    RewriteRule ^services$ pages/services.html [L]
    RewriteRule ^contact$ pages/contact.html [L]
</IfModule>

# Security Headers
<IfModule mod_headers.c>
    # Prevent clickjacking
    Header always set X-Frame-Options "SAMEORIGIN"
    
    # XSS Protection
    Header always set X-XSS-Protection "1; mode=block"
    
    # Prevent MIME type sniffing
    Header always set X-Content-Type-Options "nosniff"
    
    # Referrer Policy
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/html "access plus 1 day"
</IfModule>

# MIME Types
<IfModule mod_mime.c>
    AddType application/javascript js
    AddType text/css css
</IfModule>
EOF
echo -e "${GREEN}✅ .htaccess file created${NC}"
echo ""

# Step 7: Generate deployment summary
echo -e "${YELLOW}📊 Generating deployment summary...${NC}"
cat > "$DEPLOY_DIR/DEPLOYMENT_INFO.txt" << EOF
PRODATALYTICS Website Deployment Package
========================================

Generated: $(date)
Domain: $DOMAIN

Contents:
- index.html (entry point)
- pages/ (all HTML pages)
- css/main.css (compiled CSS)
- js/ (JavaScript files)
- assets/ (images and other assets)
- public/ (favicon, manifest)
- .htaccess (Apache configuration)

Deployment Instructions:
1. Upload all files in this directory to your web server
2. Ensure the root directory is set correctly
3. Configure DNS to point $DOMAIN to your server
4. Set up SSL certificate (Let's Encrypt recommended)
5. Test all pages and functionality

File Count:
- HTML files: $(find "$DEPLOY_DIR" -name "*.html" | wc -l | tr -d ' ')
- CSS files: $(find "$DEPLOY_DIR" -name "*.css" | wc -l | tr -d ' ')
- JS files: $(find "$DEPLOY_DIR" -name "*.js" | wc -l | tr -d ' ')
- Image files: $(find "$DEPLOY_DIR" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.gif" -o -name "*.webp" -o -name "*.svg" -o -name "*.ico" \) | wc -l | tr -d ' ')

Total size: $(du -sh "$DEPLOY_DIR" | cut -f1)
EOF
echo -e "${GREEN}✅ Deployment summary created${NC}"
echo ""

# Step 8: Final summary
echo -e "${GREEN}✅ Deployment package ready!${NC}"
echo ""
echo -e "${BLUE}📦 Deployment package location:${NC} $DEPLOY_DIR/"
echo ""
echo -e "${YELLOW}📝 Next steps:${NC}"
echo "  1. Review the files in the '$DEPLOY_DIR' directory"
echo "  2. Upload all files to your web hosting server"
echo "  3. Configure DNS for $DOMAIN"
echo "  4. Set up SSL certificate"
echo "  5. Test the website"
echo ""
echo -e "${BLUE}📚 For detailed deployment instructions, see:${NC}"
echo "  - deployment/DEPLOYMENT_GUIDE.md"
echo ""
echo -e "${GREEN}✨ Deployment preparation complete!${NC}"

