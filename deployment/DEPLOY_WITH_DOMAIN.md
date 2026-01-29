# Deploy PRODATALYTICS with prodatalytics.com

You have the domain **prodatalytics.com**. Follow these steps to go live.

---

## Option A: Netlify (recommended)

Netlify gives you free HTTPS, a global CDN, and automatic builds. Your project already has `netlify.toml` configured.

### 1. Put your code on GitHub (if not already)

```bash
cd /path/to/website-development
git init
git add .
git commit -m "Initial commit - PRODATALYTICS website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/prodatalytics-website.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username. Create the repo on GitHub first (github.com → New repository).

### 2. Deploy on Netlify

1. Go to **https://app.netlify.com** and sign in (or sign up with GitHub).
2. Click **Add new site** → **Import an existing project**.
3. Choose **GitHub** and authorize Netlify. Select your `prodatalytics-website` (or whatever you named the repo).
4. Netlify will read `netlify.toml` from your repo. Confirm:
   - **Build command:** `npm install && npm run build:css`
   - **Publish directory:** `.` (root)
5. Click **Deploy site**. Wait for the build to finish.
6. Your site will be live at `https://random-name-123.netlify.app`. You can rename this in **Site settings → General → Change site name** (e.g. `prodatalytics`).

### 3. Add your domain (prodatalytics.com)

1. In Netlify: **Site configuration** → **Domain management** (or **Domain settings**).
2. Click **Add custom domain** or **Add domain alias**.
3. Enter **prodatalytics.com** and follow the prompts.
4. Netlify will show you how to point your domain. Choose one:

#### Option 3a: Use Netlify DNS (easiest)

1. In **Domain management**, click **Verify** / **Set up Netlify DNS** for `prodatalytics.com`.
2. Netlify will give you **nameservers** (e.g. `dns1.p01.nsone.net`, `dns2.p01.nsone.net`).
3. Log in to where you bought the domain (GoDaddy, Namecheap, Google Domains, etc.).
4. Find **DNS** or **Nameservers** and **change nameservers** to the ones Netlify gave you.
5. Save. Propagation can take from a few minutes up to 24–48 hours.
6. Back in Netlify, **Verify DNS** or **Enable HTTPS**. Netlify will issue a free SSL certificate.

#### Option 3b: Keep your current DNS provider

If you don’t want to change nameservers, add these records at your domain registrar:

| Type  | Name | Value / Target                    |
|-------|------|------------------------------------|
| A     | `@`  | `75.2.60.5`                        |
| CNAME | `www`| `YOUR_SITE_NAME.netlify.app`       |

Replace `YOUR_SITE_NAME` with your actual Netlify site name (e.g. `prodatalytics`).  
For the **apex (root) A record**, use the IP Netlify shows in **Domain management** (it may be the one above; always confirm in the Netlify UI).

### 4. HTTPS

- Netlify will automatically request and renew an SSL certificate (Let’s Encrypt) once DNS is correct.
- In **Domain management** you can enable **Force HTTPS** so `http://` redirects to `https://`.

---

## Option B: Deploy without Git (drag and drop)

1. **Build locally:**
   ```bash
   npm install
   npm run build:css
   ```
2. Go to **https://app.netlify.com** → **Add new site** → **Deploy manually**.
3. **Drag and drop** the entire `website-development` folder (the one that contains `pages/`, `css/`, `netlify.toml`, etc.).
4. After the site is live, add the domain as in **Option A, step 3** above.

Note: With manual deploy, future updates require running the build again and dragging the folder again. Connecting GitHub (Option A) gives you automatic deploys on every push.

---

## After deployment

- **Homepage:** `https://prodatalytics.com` (or `https://prodatalytics.com/` — Netlify will serve `/pages/homepage.html` via your existing redirect).
- **Other pages:**  
  `https://prodatalytics.com/pages/about.html`,  
  `https://prodatalytics.com/pages/services.html`,  
  `https://prodatalytics.com/pages/contact.html`
- Check forms (e.g. contact) and links. Update any hardcoded URLs if you had used a different domain before.

---

## Where you bought the domain

- **GoDaddy:** Domains → your domain → **Manage DNS** or **Change nameservers**.
- **Namecheap:** Domain List → Manage → **Nameservers** or **Advanced DNS**.
- **Google Domains / Cloudflare:** DNS or Nameservers section.
- **Other:** Look for “DNS”, “Nameservers”, or “Manage domain”.

If you tell me the registrar name (e.g. GoDaddy, Namecheap), I can give exact click-by-click steps for that provider.
