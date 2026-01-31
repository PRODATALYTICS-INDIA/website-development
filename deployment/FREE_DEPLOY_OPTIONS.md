# Free deployment options for prodatalytics.com

All of these support **custom domains** (prodatalytics.com) and **free HTTPS** at no cost.

------------------------------------------------------------------------

## Option 1: GitHub Pages (fully free)

**Cost:** Free. No bandwidth or build limits for public repos. Custom domain + SSL included.

### Steps

1.  **Push your site to GitHub** (if not already):

    ``` bash
    git init
    git add .
    git commit -m "Initial commit"
    git remote add origin https://github.com/YOUR_USERNAME/prodatalytics-website.git
    git push -u origin main
    ```

2.  **Enable GitHub Pages:**

    -   Open your repo on GitHub → **Settings** → **Pages** (left sidebar).
    -   Under **Build and deployment**:
        -   **Source:** Deploy from a branch
        -   **Branch:** `main` (or `master`) → **/ (root)** → Save.
    -   After a minute, the site is live at `https://YOUR_USERNAME.github.io/prodatalytics-website/`.

3.  **Add custom domain:**

    -   In **Pages** settings, under **Custom domain**, type: `prodatalytics.com` → Save.
    -   GitHub will show a DNS checklist. Add these records at your **domain registrar** (where you bought prodatalytics.com):

    | Type  | Name  | Value                     |
    |-------|-------|---------------------------|
    | A     | `@`   | `185.199.108.153`         |
    | A     | `@`   | `185.199.109.153`         |
    | A     | `@`   | `185.199.110.153`         |
    | A     | `@`   | `185.199.111.153`         |
    | CNAME | `www` | `YOUR_USERNAME.github.io` |

    (Use your actual GitHub username for the CNAME.)

    -   Back in GitHub Pages, wait until it says **DNS check successful**, then enable **Enforce HTTPS**.

4.  **Build CSS before each deploy (optional):**\
    GitHub Pages does not run `npm run build:css` by default. Either:

    -   Run `npm run build:css` locally and commit the updated `css/main.css` before pushing, or
    -   Use GitHub Actions to build on push (see below).

### Optional: Auto-build CSS with GitHub Actions

Create `.github/workflows/deploy.yml` in your repo:

``` yaml
name: Build and deploy
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build:css
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .
```

Then in repo **Settings → Pages**, set **Source** to **GitHub Actions**. Pushes to `main` will build CSS and deploy.

------------------------------------------------------------------------

## Option 2: Cloudflare Pages (free, generous limits)

**Cost:** Free. Unlimited bandwidth, 500 builds/month. Custom domains + SSL included.

### Steps

1.  **Push your code to GitHub** (same as above).

2.  **Create a Cloudflare account:**\
    Go to [dash.cloudflare.com](https://dash.cloudflare.com) and sign up (free).

3.  **Create a Pages project:**

    -   **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
    -   Choose **GitHub** and authorize, then select your `prodatalytics-website` repo.

4.  **Build settings:**

    -   **Framework preset:** None (or “Direct Upload” if you prefer).
    -   **Build command:** `npm install && npm run build:css`
    -   **Build output directory:** `/` (root)
    -   Click **Save and Deploy**.

5.  **Add custom domain:**

    -   In your Pages project → **Custom domains** → **Set up a custom domain**.
    -   Enter `prodatalytics.com` and `www.prodatalytics.com`.
    -   If your domain is **on Cloudflare**: DNS is updated automatically.
    -   If your domain is **elsewhere**: Cloudflare will show the CNAME (and/or A record) to add at your registrar. Add them, then Cloudflare will issue free SSL.

------------------------------------------------------------------------

## Option 3: Vercel (free hobby tier)

**Cost:** Free for personal/hobby use. Custom domain + SSL. Bandwidth and build limits on free tier.

1.  Go to [vercel.com](https://vercel.com) → Sign in with **GitHub**.
2.  **Add New** → **Project** → Import your repo.
3.  **Build command:** `npm run build:css` (or leave default if it detects nothing).
4.  **Output directory:** `.` (root). Deploy.
5.  **Settings** → **Domains** → Add `prodatalytics.com` and `www.prodatalytics.com`. Follow DNS instructions at your registrar.

------------------------------------------------------------------------

## Summary

| Option               | Cost               | Custom domain | SSL | Best if you want…        |
|-------------|-------------|-------------|-------------|---------------------|
| **GitHub Pages**     | Free               | Yes           | Yes | Simple, no extra account |
| **Cloudflare Pages** | Free               | Yes           | Yes | High limits, fast CDN    |
| **Vercel**           | Free (tier limits) | Yes           | Yes | Quick Git-based deploys  |

**Recommendation:** Use **GitHub Pages** if you already use GitHub (easiest), or **Cloudflare Pages** if you want more bandwidth and a single place for DNS + hosting.

------------------------------------------------------------------------

## Note on Netlify

Netlify’s **free tier** (100GB bandwidth, 300 build min/month) is often enough for a small site. If you hit limits or need more, the options above are fully free alternatives.