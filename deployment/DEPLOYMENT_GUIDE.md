# PRODATALYTICS Website Deployment Guide

This guide explains how to deploy the PRODATALYTICS website to `prodatalytics.com`.

---

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Deployment Options](#deployment-options)
  - [Option 1: Traditional Web Hosting (cPanel, FTP)](#option-1-traditional-web-hosting-cpanel-ftp)
  - [Option 2: GitHub Pages](#option-2-github-pages)
  - [Option 3: Netlify](#option-3-netlify)
  - [Option 4: Vercel](#option-4-vercel)
  - [Option 5: AWS S3 + CloudFront](#option-5-aws-s3--cloudfront)
- [DNS Configuration](#dns-configuration)
- [SSL Certificate Setup](#ssl-certificate-setup)
- [Post-Deployment Checklist](#post-deployment-checklist)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before deploying, ensure you have:

1. ✅ **Domain purchased**: `prodatalytics.com`
2. ✅ **Node.js installed** (v14 or higher)
3. ✅ **npm installed** (v6 or higher)
4. ✅ **Web hosting account** (choose one of the options below)
5. ✅ **DNS access** to configure domain records

---

## Quick Start

### Step 1: Prepare Deployment Package

Run the deployment script:

```bash
./deployment/deploy.sh
```

This will:
- Install dependencies
- Build CSS
- Create a `deploy/` directory with all production files
- Generate deployment information

### Step 2: Choose Your Hosting Option

Select one of the deployment options below based on your needs and budget.

---

## Deployment Options

### Option 1: Traditional Web Hosting (cPanel, FTP)

**Best for**: Users familiar with traditional hosting, shared hosting accounts

#### Requirements:
- Web hosting account (e.g., Bluehost, HostGator, SiteGround)
- FTP/SFTP access credentials
- cPanel access (optional but recommended)

#### Steps:

1. **Run deployment script:**
   ```bash
   ./deployment/deploy.sh
   ```

2. **Upload files via FTP:**
   - Use FTP client (FileZilla, Cyberduck, or cPanel File Manager)
   - Connect to your hosting server
   - Upload all files from `deploy/` directory to:
     - `public_html/` (for main domain)
     - Or `public_html/prodatalytics.com/` (if using subdirectory)

3. **File structure on server:**
   ```
   public_html/
   ├── index.html
   ├── .htaccess
   ├── pages/
   ├── css/
   ├── js/
   ├── assets/
   └── public/
   ```

4. **Configure DNS** (see DNS Configuration section)

5. **Set up SSL** (see SSL Certificate Setup section)

#### Pros:
- ✅ Full control
- ✅ Familiar interface
- ✅ Usually includes email hosting

#### Cons:
- ❌ Manual uploads for updates
- ❌ Requires FTP knowledge

---

### Option 2: GitHub Pages

**Best for**: Free hosting, automatic deployments from Git

#### Requirements:
- GitHub account
- Git repository for the project

#### Steps:

1. **Create GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/prodatalytics-website.git
   git push -u origin main
   ```

2. **Configure GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
   - Save

3. **Update for GitHub Pages:**
   - GitHub Pages serves from root, so you may need to adjust paths
   - Or use a custom domain (see DNS Configuration)

4. **Custom domain setup:**
   - In repository Settings → Pages, add `prodatalytics.com`
   - Create `CNAME` file in root with content: `prodatalytics.com`
   - Configure DNS (see DNS Configuration)

#### Pros:
- ✅ Free
- ✅ Automatic deployments
- ✅ Version control integration

#### Cons:
- ❌ Public repository (unless using GitHub Pro)
- ❌ Limited server-side features

---

### Option 3: Netlify

**Best for**: Easy deployment, automatic SSL, CDN, free tier

#### Requirements:
- Netlify account (free tier available)
- GitHub/GitLab/Bitbucket repository (optional)

#### Steps:

1. **Run deployment script:**
   ```bash
   ./deployment/deploy.sh
   ```

2. **Deploy via Netlify Dashboard:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `deploy/` folder
   - Site will be live immediately

3. **Or deploy via Git:**
   - Connect your GitHub repository
   - Build command: `npm run build:css`
   - Publish directory: `deploy/` (or root if configured)
   - Deploy automatically on every push

4. **Custom domain:**
   - Go to Site settings → Domain management
   - Add custom domain: `prodatalytics.com`
   - Follow DNS instructions
   - SSL certificate is automatic (Let's Encrypt)

5. **Configure redirects:**
   Create `netlify.toml` in project root (Netlify requires it in root):
   ```toml
   [[redirects]]
     from = "/"
     to = "/pages/homepage.html"
     status = 200
   
   [[redirects]]
     from = "/*"
     to = "/pages/:splat.html"
     status = 200
   ```

#### Pros:
- ✅ Free tier available
- ✅ Automatic SSL
- ✅ Global CDN
- ✅ Easy deployments
- ✅ Form handling (if needed)

#### Cons:
- ❌ Limited server-side features
- ❌ Free tier has bandwidth limits

---

### Option 4: Vercel

**Best for**: Fast deployments, excellent performance, free tier

#### Requirements:
- Vercel account (free tier available)
- GitHub/GitLab/Bitbucket repository (optional)

#### Steps:

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   cd deploy
   vercel
   ```
   - Follow prompts
   - Choose production deployment

3. **Or deploy via Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Import your Git repository
   - Configure build settings:
     - Build Command: `npm run build:css`
     - Output Directory: `deploy`
   - Deploy

4. **Custom domain:**
   - Go to Project Settings → Domains
   - Add `prodatalytics.com`
   - Configure DNS
   - SSL is automatic

#### Pros:
- ✅ Free tier
- ✅ Excellent performance
- ✅ Automatic SSL
- ✅ Global CDN
- ✅ Easy Git integration

#### Cons:
- ❌ Limited server-side features
- ❌ Free tier has usage limits

---

### Option 5: AWS S3 + CloudFront

**Best for**: Scalability, enterprise needs, AWS ecosystem

#### Requirements:
- AWS account
- AWS CLI installed and configured
- Basic AWS knowledge

#### Steps:

1. **Create S3 bucket:**
   ```bash
   aws s3 mb s3://prodatalytics.com
   ```

2. **Configure bucket for static hosting:**
   ```bash
   aws s3 website s3://prodatalytics.com \
     --index-document index.html \
     --error-document index.html
   ```

3. **Upload files:**
   ```bash
   ./deploy.sh
   aws s3 sync deploy/ s3://prodatalytics.com --delete
   ```

4. **Set bucket policy** (make it publicly readable):
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [{
       "Sid": "PublicReadGetObject",
       "Effect": "Allow",
       "Principal": "*",
       "Action": "s3:GetObject",
       "Resource": "arn:aws:s3:::prodatalytics.com/*"
     }]
   }
   ```

5. **Create CloudFront distribution:**
   - Go to CloudFront console
   - Create distribution
   - Origin: S3 bucket
   - Enable HTTPS
   - Configure custom domain

6. **Configure DNS** to point to CloudFront

#### Pros:
- ✅ Highly scalable
- ✅ Global CDN
- ✅ Enterprise-grade
- ✅ Pay-as-you-go pricing

#### Cons:
- ❌ More complex setup
- ❌ Requires AWS knowledge
- ❌ Costs can add up

---

## DNS Configuration

To point `prodatalytics.com` to your hosting:

### For Traditional Hosting / Netlify / Vercel:

1. **Get your server IP or CNAME:**
   - Traditional hosting: Get IP from hosting provider
   - Netlify: Get CNAME from Netlify dashboard
   - Vercel: Get CNAME from Vercel dashboard

2. **Configure DNS records** (in your domain registrar or DNS provider):

   **Option A: A Record (for IP address)**
   ```
   Type: A
   Name: @ (or leave blank)
   Value: YOUR_SERVER_IP
   TTL: 3600 (or default)
   ```

   **Option B: CNAME (for hosting services)**
   ```
   Type: CNAME
   Name: @ (or leave blank)
   Value: your-site.netlify.app (or vercel domain)
   TTL: 3600
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: prodatalytics.com (or your hosting domain)
   TTL: 3600
   ```

3. **Wait for DNS propagation** (can take 24-48 hours, usually faster)

4. **Verify DNS:**
   ```bash
   dig prodatalytics.com
   nslookup prodatalytics.com
   ```

---

## SSL Certificate Setup

### Option 1: Let's Encrypt (Free, Recommended)

**For traditional hosting with SSH access:**

```bash
# Install Certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-apache

# Get certificate
sudo certbot --apache -d prodatalytics.com -d www.prodatalytics.com

# Auto-renewal is set up automatically
```

**For cPanel:**
- Use "SSL/TLS" → "Let's Encrypt" in cPanel
- Select domain and install

### Option 2: Hosting Provider SSL

Most hosting providers offer free SSL:
- Bluehost: Free SSL in cPanel
- SiteGround: Free SSL included
- HostGator: Free SSL available

### Option 3: Automatic SSL (Netlify/Vercel)

- **Netlify**: Automatic Let's Encrypt SSL
- **Vercel**: Automatic SSL certificates
- No manual configuration needed

---

## Post-Deployment Checklist

After deployment, verify:

- [ ] **Website loads**: `https://prodatalytics.com`
- [ ] **All pages accessible**:
  - [ ] Homepage
  - [ ] About
  - [ ] Services
  - [ ] Contact
- [ ] **SSL certificate active** (HTTPS works)
- [ ] **Images load correctly**
- [ ] **CSS styles applied** (check `css/main.css` loads)
- [ ] **JavaScript works** (navigation, forms, etc.)
- [ ] **Mobile responsive** (test on phone/tablet)
- [ ] **Forms submit** (if applicable)
- [ ] **404 page** (test non-existent URL)
- [ ] **Page speed** (use Google PageSpeed Insights)
- [ ] **SEO meta tags** (check page source)
- [ ] **Favicon displays**
- [ ] **Google Analytics** (if configured)

---

## Troubleshooting

### Issue: CSS not loading

**Solution:**
- Check file paths in HTML (should be `css/main.css`)
- Verify `css/main.css` exists in deployment
- Check browser console for 404 errors
- Clear browser cache

### Issue: Images not displaying

**Solution:**
- Verify `assets/` folder uploaded correctly
- Check image paths in HTML
- Ensure file permissions are correct (644 for files)

### Issue: 404 errors on pages

**Solution:**
- Check `.htaccess` file is uploaded
- Verify mod_rewrite is enabled (for Apache)
- Check file paths match exactly (case-sensitive on Linux)

### Issue: DNS not resolving

**Solution:**
- Wait 24-48 hours for propagation
- Check DNS records are correct
- Use `dig` or `nslookup` to verify
- Clear DNS cache: `sudo dscacheutil -flushcache` (macOS)

### Issue: SSL certificate errors

**Solution:**
- Verify SSL certificate is installed
- Check certificate expiration
- Ensure HTTPS redirect is configured
- Test with SSL Labs: https://www.ssllabs.com/ssltest/

---

## Updating the Website

### For Traditional Hosting:

1. Make changes locally
2. Run `./deployment/deploy.sh`
3. Upload new files via FTP
4. Clear CDN cache (if using)

### For Git-based Deployments (Netlify/Vercel):

1. Make changes locally
2. Commit and push to Git
3. Deployment happens automatically

---

## Support

For deployment issues:
1. Check this guide
2. Review hosting provider documentation
3. Check browser console for errors
4. Verify all files uploaded correctly

---

**Last Updated**: January 2025

