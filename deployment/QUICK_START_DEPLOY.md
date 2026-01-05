# 🚀 Quick Start: Deploy Dev Version to Netlify

**Goal:** Get your website live on Netlify in **5 minutes** for client review.

---

## Step 1: Prepare Your Code (2 minutes)

```bash
# Make sure you're in the project root
cd /path/to/website-development

# Install dependencies and build CSS
npm install
npm run build:css
```

Or use the quick script:
```bash
./deployment/deploy-dev.sh
```

---

## Step 2: Deploy to Netlify (3 minutes)

### Option A: Manual Deploy (Easiest for first time)

1. **Go to Netlify:**
   - Visit [netlify.com](https://netlify.com)
   - Sign up with GitHub (recommended) or email (free)

2. **Deploy:**
   - Click **"Add new site"** → **"Deploy manually"**
   - Drag and drop your **entire project folder** into the upload area
   - Wait ~30-60 seconds
   - **Done!** Your site is live at: `https://random-name-12345.netlify.app`

3. **Share with client:**
   - Copy the Netlify URL
   - Share it with your client

### Option B: Git Deploy (Best for updates)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/prodatalytics-website.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click **"Add new site"** → **"Import an existing project"**
   - Choose **GitHub** and authorize
   - Select your repository
   - Build settings:
     - **Build command:** `npm install && npm run build:css`
     - **Publish directory:** `.` (root)
   - Click **"Deploy site"**

3. **Automatic updates:**
   - Every time you push to GitHub, Netlify automatically redeploys
   - You get a new preview URL for each deployment

---

## Step 3: Customize Site Name (Optional)

1. Go to **Site settings** → **General** → **Site details**
2. Click **"Change site name"**
3. Enter: `prodatalytics-dev` or `prodatalytics-staging`
4. Your URL becomes: `https://prodatalytics-dev.netlify.app`

---

## ✅ Verify It Works

Check these before sharing with client:

- [ ] Homepage loads: `https://your-site.netlify.app`
- [ ] All pages accessible (Home, About, Services, Contact)
- [ ] CSS styles applied (Tailwind working)
- [ ] Images load correctly
- [ ] Navigation works
- [ ] Forms submit (contact form)
- [ ] Mobile responsive

---

## 🔄 Update the Site

### If using Git:
```bash
git add .
git commit -m "Update content"
git push origin main
# Netlify auto-deploys in ~1-2 minutes
```

### If using manual deploy:
1. Make changes locally
2. Run `npm run build:css` (if CSS changed)
3. Drag and drop folder again in Netlify

---

## 🚀 Moving to Production (Later)

Once client approves:

1. **Keep dev site** (for future staging)
2. **Add custom domain** to Netlify site:
   - Site settings → Domain management
   - Add `prodatalytics.com`
   - Configure DNS at your domain registrar
   - SSL is **automatic** (free)

---

## 📚 Need More Help?

- **Full guide:** `deployment/DEV_DEPLOYMENT_GUIDE.md`
- **Netlify docs:** [docs.netlify.com](https://docs.netlify.com)
- **Troubleshooting:** Check Netlify build logs in dashboard

---

**That's it! Your dev site is live and ready for client review! 🎉**

