# PRODATALYTICS Website

Professional website for PRODATALYTICS — a premium data science consulting firm. The site showcases services, company story, methodology, and contact options. Built with HTML, Tailwind CSS, and vanilla JavaScript; deployed via GitHub Pages.

---

## Table of Contents

- [Motivation & purpose](#motivation--purpose)
- [Quick start](#quick-start)
- [Important steps](#important-steps)
- [Project structure](#project-structure)
- [Site overview & navigation](#site-overview--navigation)
- [Styling system](#styling-system)
- [Testing the website](#testing-the-website)
- [Deployment (GitHub Pages)](#deployment-github-pages)
- [Next to-do's & future enhancements](#next-to-dos--future-enhancements)
- [File reference](#file-reference)
- [Technologies](#technologies)

---

## Motivation & purpose

**Why this website exists**

- **Client-facing presence** for PRODATALYTICS: data science consulting, ML solutions, training, and research-driven collaboration.
- **Conversion**: Guide visitors from awareness (homepage, services, about) to contact (consultation form, quick inquiry).
- **Credibility**: Company story, methodology, and clear service descriptions.
- **Maintainability**: Static site with centralized styling and simple deployment (GitHub Pages).

**Key features**

- Responsive, mobile-first layout
- SEO-friendly meta tags and semantic HTML
- Single global nav (Home, Services, About, Contact) and footer on all main pages
- Smooth scrolling, basic animations, form validation
- Dark theme with accent green; glassmorphic header

**Audience**

- Potential clients (businesses, institutions)
- Partners (academia, workshops)
- Candidates (internships, training)

---

## Quick start

```bash
git clone https://github.com/prodatalytics-india/website-development.git
cd website-development
npm install
npm run build:css
```

**Run locally (recommended for full behaviour e.g. forms):**

```bash
python3 -m http.server 8000
# Then open http://localhost:8000 (or http://localhost:8000/pages/homepage.html)
```

Or use **VS Code Live Server** (right-click `index.html` → “Open with Live Server”) or **Node**: `npx http-server -p 8000`.

---

## Important steps

### 1. Development

- **Edit styles:** Change `css/tailwind.css` or use Tailwind classes in HTML. Then:
  ```bash
  npm run build:css
  ```
- **Watch mode (auto-rebuild):**
  ```bash
  npm run dev
  ```
- **Do not edit** `css/main.css` — it is generated.

### 2. Testing

- Use a **local server** (see Quick start). Testing with `file://` can break forms and some behaviour.
- **Quick checks:** All nav links work; mobile menu toggles; contact form and floating “Quick contact” submit; FAQ toggles on contact page; no 404s for CSS/JS/images (check DevTools → Network).
- **Responsive:** Test desktop, tablet, and mobile widths (e.g. Chrome DevTools device toolbar).
- **Browsers:** Chrome/Edge, Firefox, Safari (desktop and mobile if possible).

### 3. Deployment

Deployment is **GitHub Pages** only. Full steps (push to GitHub, enable Pages, **CNAME** file, **DNS in Wix**) are in the [Deployment (GitHub Pages)](#deployment-github-pages) section below.

Summary: push to `prodatalytics-india/website-development`, enable Pages from branch `main` (root), set custom domain `www.prodatalytics.com`, add `CNAME` in repo, add DNS records in **Wix** (domain is purchased there), then Enforce HTTPS.

---

## Project structure

```
website-development/
├── index.html              # Entry point (root; serves homepage at www.prodatalytics.com/)
├── pages/
│   ├── homepage.html        # Main landing
│   ├── services.html        # Services detail + anchors
│   ├── about.html           # Company story, methodology
│   └── contact.html         # Consultation form, FAQ, contact info
├── css/
│   ├── tailwind.css         # Source (edit here)
│   └── main.css             # Compiled (generated)
├── js/
│   ├── common.js            # Mobile menu, smooth scroll, floating contact, etc.
│   └── contact.js           # Contact page forms, FAQ
├── assets/images/           # Logos, images
├── public/                  # Favicon, manifest
├── CNAME                    # Custom domain (www.prodatalytics.com)
├── package.json
└── tailwind.config.js
```

---

## Site overview & navigation

**Entry & main pages**

- **Root** (`/` or `index.html`): Serves the homepage in place (no redirect). Same content as `pages/homepage.html` so the live URL stays `https://www.prodatalytics.com/`.
- **Main pages:** Home, Services, About, Contact. Same header and footer on all.

**Header (all main pages)**

- Logo (left)
- **Home** → `index.html` / homepage  
- **Services** → `pages/services.html`  
- **About** → `pages/about.html`  
- **Contact** → `pages/contact.html` (primary CTA style)
- On small screens: hamburger opens the same links.

**Footer**

- Logo, social links (X, Instagram, LinkedIn), email, office address (Kochi), copyright.

**User journeys**

1. **Awareness → Services → Contact:** Homepage → “Explore Services” → services page → “Schedule Consultation” / CTAs → contact page.
2. **Awareness → About → Contact:** Homepage → “Know more about us” → about page → “Connect with us” → contact page.
3. **Direct contact:** “Contact” in header or any “Connect with us” CTA → contact page.

**Services page**

- In-page anchors: `#consulting`, `#ml-solutions`, `#training`, `#statistical-reporting`, `#workshops`, `#research`. Homepage service cards and the service nav pills link to these.

**Contact page**

- “Schedule consultation” form (FormSubmit → hello@prodatalytics.com), contact info, “Connect with us” social cards, FAQ toggles. Floating “Quick contact” box on homepage (and some other pages) for a short message.

---

## Styling system

**How it works**

- Reusable component classes live in `css/tailwind.css` under `@layer components`.
- `npm run build:css` (or `npm run dev`) compiles them into `css/main.css`. Use these classes in HTML for consistency.

**Main component classes**

| Purpose        | Classes |
|----------------|--------|
| Hero           | `.hero-section`, `.hero-overlay`, `.hero-content`, `.hero-heading`, `.hero-heading-accent` |
| Key metrics    | `.key-indicators-grid`, `.key-indicator-item`, `.key-indicator-value`, `.key-indicator-label` |
| CTA block      | `.cta-section`, `.cta-container`, `.cta-content`, `.cta-heading`, `.cta-description`, `.cta-buttons` |
| Buttons        | `.btn-primary`, `.btn-secondary`, `.btn-small` |
| Cards          | `.card`, `.card-hover`, `.card-icon-container`, `.card-icon`, `.card-title`, `.card-description` |
| Sections       | `.section`, `.section-alt`, `.section-container`, `.section-content`, `.section-heading`, `.section-heading-left`, `.section-description`, `.section-description-centered` |
| Forms          | `.form-label`, `.form-input`, `.form-select`, `.form-textarea` |
| Nav            | `.nav-link`, `.nav-link-active`, `.nav-button` |

**Adding or changing components**

1. Edit `css/tailwind.css` in the `@layer components` block (use `@apply` with Tailwind utilities).
2. Run `npm run build:css` (or use `npm run dev`).
3. Use the new class in the relevant HTML.

**Colors (Tailwind config)**

- Primary black; surface gray; accent emerald (`#10b981`); text primary/secondary; success/warning/error for states.

---

## Testing the website

**Start a local server**

- **Python:** `python3 -m http.server 8000` → `http://localhost:8000`
- **Node:** `npx http-server -p 8000`
- **VS Code:** Live Server extension → right-click `index.html` → Open with Live Server

**Checklist (high level)**

- [ ] Homepage, Services, About, Contact load; nav and footer present.
- [ ] Mobile menu opens/closes; all nav links go to the right page.
- [ ] Services in-page anchors work from homepage cards and from service pills.
- [ ] Contact form and floating “Quick contact” submit (FormSubmit); FAQ toggles work.
- [ ] No 404s for CSS, JS, images (DevTools → Network).
- [ ] Layout and text readable on desktop, tablet, and mobile.

**If CSS looks wrong**

- Run `npm run build:css` and reload. Ensure `css/main.css` exists and is linked in the page.

**If forms don’t submit**

- Use a real local server; `file://` will not handle form posts correctly.

---

## Deployment (GitHub Pages)

Deployment uses **GitHub Pages** only, configured via the GitHub UI. Custom domain **www.prodatalytics.com**; domain DNS is managed in **Wix**. No deploy scripts are used — push to GitHub and configure Pages in the repo settings.

**Repository:** [prodatalytics-india/website-development](https://github.com/prodatalytics-india/website-development) (already exists).

---

### Prerequisites

- GitHub account (access to **prodatalytics-india/website-development**)
- Domain **prodatalytics.com** — for this project the domain is purchased and managed in **Wix**

---

### Step 1: Push the site to GitHub

The repo **website-development** under **prodatalytics-india** already exists. In your project folder, add the remote (if not already set) and push:

```bash
git remote add origin https://github.com/prodatalytics-india/website-development.git
# If remote already exists: git remote set-url origin https://github.com/prodatalytics-india/website-development.git

git branch -M main
git push -u origin main
```

If starting from scratch in this folder: `git init`, `git add .`, `git commit -m "Initial commit"`, then the commands above.

---

### Step 2: Enable GitHub Pages (GitHub UI)

1. Open the repo on GitHub: [github.com/prodatalytics-india/website-development](https://github.com/prodatalytics-india/website-development).
2. Go to **Settings** → **Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or `master`)
   - **Folder:** `/ (root)`
   - Click **Save**.
4. Wait a minute or two. The site will be live at:
   - **https://prodatalytics-india.github.io/website-development/**

---

### Step 3: Assign a custom domain (CNAME + DNS in Wix)

To serve the site at **www.prodatalytics.com**:

#### 3.1 Set the custom domain in GitHub

1. In **Settings → Pages**, find **Custom domain**.
2. Enter **`www.prodatalytics.com`** (with www).
3. Click **Save**.

#### 3.2 Add a CNAME file in the repo

1. In the **root** of your repo, create a file named **`CNAME`** (no extension).
2. Put a single line in it: `www.prodatalytics.com`.
3. Commit and push:

```bash
git add CNAME
git commit -m "Add CNAME for custom domain"
git push origin main
```

#### 3.3 Add DNS records in Wix

The domain is purchased and managed in **Wix**. Add the DNS records there:

1. Log in to **Wix** → go to **Domains** (or your domain) in the dashboard.
2. Open **DNS settings** or **Manage DNS records** for the domain (e.g. prodatalytics.com).
3. Add:

**For www (www.prodatalytics.com):**

| Type  | Name / Host | Value / Points to                |
|-------|-------------|-----------------------------------|
| CNAME | `www`       | `prodatalytics-india.github.io`   |

**Optional – for apex (prodatalytics.com without www):**

| Type | Name / Host | Value / Points to   |
|------|-------------|---------------------|
| A    | `@`         | `185.199.108.153`   |
| A    | `@`         | `185.199.109.153`   |
| A    | `@`         | `185.199.110.153`   |
| A    | `@`         | `185.199.111.153`   |

Save the records. DNS can take a few minutes up to 48 hours to propagate.

#### 3.4 Enforce HTTPS

1. Back in GitHub **Settings → Pages**, wait until the custom domain shows **DNS check successful**.
2. When it appears, check **Enforce HTTPS**.

The site will be available at **https://www.prodatalytics.com** (and at **https://prodatalytics.com** if you added the A records).

---

### Deployment summary

| Step | Action |
|------|--------|
| 1 | Push code to GitHub |
| 2 | Enable Pages in GitHub UI: branch `main`, folder `/ (root)` |
| 3 | Custom domain: set in GitHub Pages, add **CNAME** file in repo, add **DNS records in Wix**, then Enforce HTTPS |

**Note:** `deploy.sh` and `deploy-dev.sh` are not used for this setup; deployment is done entirely via Git push and the GitHub Pages UI.

---

## Next to-do's & future enhancements

**Planned / future**

- **Client testimonials:** Add a testimonials section with real client quotes and permissions.
- **Content:** Sharpen service descriptions; expand team bios and internship curriculum.
- **Technical:** Analytics; form handling/back-end if needed; blog/news; image optimisation and lazy loading.
- **SEO:** Structured data (Schema.org), `sitemap.xml`, `robots.txt`, stronger meta descriptions.

**Completed**

- Logo integration, PRODATALYTICS naming, Kochi address, LinkedIn links, title/sentence case, Technologies & Tools copy.
- Centralized styling, responsive and mobile improvements, contact form simplification, social links (X, Instagram, LinkedIn), GitHub Pages deployment with CNAME and Wix DNS.

**Removed (for reference)**

- “Trusted by leading organizations” (homepage), “Ready to transform your data?” (homepage), “Meet our expert team” (about), client testimonial block (services), “Proven business impact” / ROI metrics (services). Can be re-added or repurposed later if needed.

---

## File reference

| File / folder        | Purpose |
|----------------------|--------|
| `index.html`        | Site root; homepage content so URL stays `/` |
| `pages/homepage.html` | Same content as root for legacy paths |
| `pages/services.html` | Services + anchor sections |
| `pages/about.html`  | Company story, methodology |
| `pages/contact.html`| Consultation form, FAQ, contact info |
| `css/tailwind.css`  | Tailwind + component source (edit here) |
| `css/main.css`     | Compiled CSS (generated) |
| `js/common.js`     | Shared: menu, scroll, floating contact, etc. |
| `js/contact.js`    | Contact forms, FAQ |
| `CNAME`            | Custom domain for GitHub Pages (see Deployment section above) |

---

## Technologies

- **HTML5** — Semantic markup
- **Tailwind CSS** — Utility-first CSS; custom theme in `tailwind.config.js`
- **JavaScript (ES6+)** — Vanilla JS; no framework
- **Fonts** — Inter (sans), JetBrains Mono (code)
- **Hosting** — GitHub Pages; domain DNS via Wix

---

## License

MIT

---

**Last updated:** January 2026
