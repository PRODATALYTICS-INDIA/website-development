# Dev/Staging Deployment Guide - Netlify

This guide will help you deploy a **dev/staging version** of the PRODATALYTICS website to Netlify for client review before going live on `prodatalytics.com`.

---

## 🎯 Quick Start (5 minutes)

### Option 1: Deploy via Netlify Dashboard (Recommended for First Time)

1. **Prepare your code:**
   ```bash
   # Make sure you're in the project root
   cd /path/to/website-development
   
   # Build CSS (if not already built)
   npm install
   npm run build:css
   ```

2. **Create a Netlify account:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub (recommended) or email

3. **Deploy manually:**
   - Log in to Netlify
   - Click **"Add new site"** → **"Deploy manually"**
   - Drag and drop your entire project folder (or just the root directory)
   - Wait for deployment (usually 30-60 seconds)
   - Your site will be live at: `https://random-name-12345.netlify.app`

4. **Share the URL with your client:**
   - Copy the Netlify URL (e.g., `https://prodatalytics-dev.netlify.app`)
   - Share it with your client for review

---

### Option 2: Deploy via Git (Recommended for Updates)

This method automatically deploys when you push to GitHub.

1. **Push your code to GitHub:**
   ```bash
   # If not already a git repo
   git init
   git add .
   git commit -m "Initial commit - dev version"
   
   # Create a GitHub repository and push
   git remote add origin https://github.com/yourusername/prodatalytics-website.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click **"Add new site"** → **"Import an existing project"**
   - Choose **GitHub** and authorize Netlify
   - Select your repository
   - Configure build settings:
     - **Build command:** `npm install && npm run build:css`
     - **Publish directory:** `.` (root directory)
   - Click **"Deploy site"**

3. **Automatic deployments:**
   - Every time you push to `main` branch, Netlify will automatically rebuild and deploy
   - You'll get a preview URL for each deployment

---

## 🔧 Configuration

The project includes `netlify.toml` in the root directory (required by Netlify) which automatically configures:
- ✅ Build command (CSS compilation)
- ✅ Redirect rules (root → homepage)
- ✅ Security headers
- ✅ Caching for static assets
- ✅ 404 error handling

**No additional configuration needed!** Just deploy and it works.

---

## 📝 Customizing the Dev Site Name

### Change the Netlify Site Name:

1. Go to **Site settings** → **General** → **Site details**
2. Click **"Change site name"**
3. Enter a name like: `prodatalytics-dev` or `prodatalytics-staging`
4. Your URL will be: `https://your-chosen-name.netlify.app`

### Add a Custom Domain (Optional):

If you want a custom dev domain (e.g., `dev.prodatalytics.com`):

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `dev.prodatalytics.com`)
4. Follow DNS instructions:
   - Add a CNAME record pointing to your Netlify site
   - Netlify will provide the exact DNS value
5. SSL certificate is **automatically** configured (free)

---

## 🔄 Updating the Dev Site

### If using Git deployment:
```bash
# Make your changes
git add .
git commit -m "Update homepage content"
git push origin main
# Netlify automatically deploys in ~1-2 minutes
```

### If using manual deployment:
1. Make your changes locally
2. Run `npm run build:css` (if you changed CSS)
3. Go to Netlify dashboard
4. Click **"Deploys"** → **"Trigger deploy"** → **"Deploy site"**
5. Or drag and drop the folder again

---

## ✅ Testing Checklist

Before sharing with client, verify:

- [ ] **Homepage loads:** Root URL redirects to homepage
- [ ] **All pages accessible:**
  - [ ] Homepage (`/pages/homepage.html`)
  - [ ] About (`/pages/about.html`)
  - [ ] Services (`/pages/services.html`)
  - [ ] Contact (`/pages/contact.html`)
- [ ] **CSS styles applied:** Check that Tailwind CSS is working
- [ ] **Images load:** Logo and other images display correctly
- [ ] **JavaScript works:** Navigation, mobile menu, forms
- [ ] **Mobile responsive:** Test on phone/tablet
- [ ] **Forms submit:** Contact form works (FormSubmit integration)
- [ ] **HTTPS enabled:** URL should be `https://` (automatic on Netlify)

---

## 🚀 Moving to Production (prodatalytics.com)

Once client approves:

1. **Keep dev site running** (for future staging)
2. **Create a new Netlify site** for production, OR
3. **Add custom domain** to existing site:
   - Go to **Site settings** → **Domain management**
   - Add `prodatalytics.com` and `www.prodatalytics.com`
   - Configure DNS at your domain registrar:
     - Add CNAME record: `prodatalytics.com` → `your-site.netlify.app`
     - Add CNAME record: `www.prodatalytics.com` → `your-site.netlify.app`
   - SSL certificate is **automatically** configured

4. **Update meta tags** in HTML files if needed (OG tags, etc.)

---

## 🐛 Troubleshooting

### Issue: CSS not loading
**Solution:**
- Make sure you ran `npm run build:css` before deploying
- Check Netlify build logs for errors
- Verify `css/main.css` exists in the deployed files

### Issue: 404 errors
**Solution:**
- Check `netlify.toml` exists in the project root directory (Netlify requires it in root)
- Verify redirect rules are correct
- Check Netlify build logs

### Issue: Images not displaying
**Solution:**
- Verify `assets/` folder is included in deployment
- Check image paths in HTML (should be relative paths like `../assets/...`)

### Issue: Build fails
**Solution:**
- Check Netlify build logs (click on failed deployment)
- Verify `package.json` has correct build script
- Make sure all dependencies are in `package.json`

---

## 📊 Netlify Free Tier Limits

- ✅ **100 GB bandwidth/month** (plenty for a marketing site)
- ✅ **300 build minutes/month** (more than enough)
- ✅ **Unlimited sites**
- ✅ **Automatic SSL**
- ✅ **Global CDN**

**For a client review site, the free tier is more than sufficient!**

---

## 🔗 Useful Links

- [Netlify Dashboard](https://app.netlify.com)
- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Status](https://www.netlifystatus.com)

---

## 📞 Support

If you encounter issues:
1. Check Netlify build logs (in dashboard)
2. Review this guide
3. Check [Netlify Community](https://answers.netlify.com)

---

**Last Updated:** January 2025

