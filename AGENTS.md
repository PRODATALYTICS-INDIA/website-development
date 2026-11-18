# AGENTS.md — PRODATALYTICS website

Instructions for AI agents working on this repository. Human docs: [README.md](README.md). Cursor rules: [`.cursor/rules/`](.cursor/rules/).

## Role

You maintain and extend this static marketing site. Match existing patterns. Optimize for credibility, clear services, and conversion to consultation — not for inventing new architecture.

Treat **`main` as production**. Live site: `https://www.prodatalytics.com` (GitHub Pages + `CNAME`).

## Commands

| Command | Purpose |
|---------|---------|
| `npm run check` | `check-site.py` (links, index, sitemap, canonical/og:image, honeypots) + chrome sync check |
| `python3 scripts/sync-chrome.py` | Regenerate header/footer on all chrome pages from `scripts/chrome/` |
| `npm run build:css` | Regenerate `css/main.css` from `css/tailwind.css` (required after style/class changes; Pages has **no** build step) |
| `npm run dev` / `npm run watch:css` | Watch and rebuild CSS while iterating |
| `python3 -m http.server 8000` | Local smoke test at `http://localhost:8000` — never use `file://` |

## Stack

| Layer | Reality |
|-------|---------|
| Markup | Static multi-page HTML5 — **not** React, Next.js, Vue, or SPA |
| Styles | Tailwind CSS 3.4; source `css/tailwind.css` → generated `css/main.css` |
| Scripts | Vanilla JS: `js/common.js`, `js/contact.js`, `js/insights.js` |
| Content | Hardcoded in HTML — **no CMS**, no API, no env-driven copy |
| Deploy | Push to `main` → GitHub Pages (root). DNS for the domain is in **Wix** |
| Forms | [FormSubmit](https://formsubmit.co) → `hello@prodatalytics.com` |

Do **not** invent an `app/`, `src/components/`, or framework router. Match existing patterns.

## Project map

```
index.html                 # Live homepage at /
pages/homepage.html        # Redirect stub → ../index.html (canonical /); NOT a content page
pages/services.html        # Anchors: #consulting #ml-solutions #training #statistical-reporting #workshops #research
pages/products.html        # Product accelerators (APIs, dashboards, toolkits)
pages/about.html
pages/contact.html         # FormSubmit + FAQ
pages/case-studies/        # Listing + case detail pages
pages/insights/            # Articles listing (search) + article pages + newsletter signup
data/insights-index.json   # Searchable article metadata — add a row when adding an article
docs/content-templates.md  # Case / article / newsletter briefs
scripts/                   # check-site.py (verifier), sync-chrome.py + chrome/ templates (header, footer, theme toggle)
sitemap.xml robots.txt 404.html  # SEO/hosting files (add new pages to sitemap.xml)
.github/workflows/check.yml     # CI: CSS freshness + check-site.py
css/tailwind.css           # EDIT styles here
css/main.css               # GENERATED — do not hand-edit
js/common.js               # Menu, scroll, floating contact stub, shared UI
js/contact.js              # Contact forms, FAQ, FormSubmit UX
js/insights.js             # Insights search/filter + newsletter thanks hash
tailwind.config.js         # Brand tokens / content globs (includes pages/**)
CNAME                      # www.prodatalytics.com — do not casually change
plans/                     # Human-readable feature plans (not deployed logic)
```

**Add an insight:** new HTML under `pages/insights/` + one row in `data/insights-index.json` + `<url>` in `sitemap.xml`.  
**Add a case study:** new HTML under `pages/case-studies/` + listing card on `pages/case-studies/index.html`.  
**Shared chrome** on nested pages uses `../../` for assets.

## Boundaries

**Always**

- Edit `css/tailwind.css` (not `css/main.css`); run `npm run build:css` after style/class changes
- Homepage content lives **only** in `index.html`; `pages/homepage.html` is a noindex redirect stub — leave it alone
- Edit shared header/nav/footer in `scripts/chrome/*.html`, then run `python3 scripts/sync-chrome.py` (writes all 17 chrome pages; CI runs `--check`). Never hand-edit header/footer in a page. The floating contact block is still per-page
- Prefer existing `@layer components` classes (`.btn-primary`, `.card`, `.section-*`, `.form-*`, `.nav-*`, etc.)

**Ask first**

- Changing floating quick-contact behavior (may be alert-only vs FormSubmit — product decision)
- Major FormSubmit / `_next` / thank-you UX changes
- Reintroducing removed marketing blocks (testimonials, ROI strips, “trusted by”)
- Adding analytics, third-party scripts, or new npm dependencies

**Never**

- Hand-edit `css/main.css`
- Casually change `CNAME`, brand color tokens, logos in active use, legal/contact footer blocks, or FormSubmit action / `_next` / `_subject` / `hello@prodatalytics.com`
- Invent React / `app/` / framework routers
- Drive-by refactors unrelated to the ask
- Commit secrets or API keys

## Style examples

Prefer component classes over utility sprawl:

```html
<!-- Good -->
<a href="pages/contact.html" class="btn-primary">Book a consultation</a>

<!-- Bad — reinventing the button -->
<a href="pages/contact.html" class="inline-flex px-6 py-3 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600">Book a consultation</a>
```

Vanilla JS — init on `DOMContentLoaded`, keep shared logic in `common.js`:

```javascript
// Good
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSmoothScrolling();
});

// Bad — frameworks or bundlers
import { createApp } from 'vue';
```

## Verification

There is **no automated test runner**. Verification is local smoke + checklist:

- [ ] CSS rebuilt and `css/main.css` updated if styles/classes changed
- [ ] Relative paths correct for root (`index.html`), `pages/*`, and nested `pages/*/*`
- [ ] Nav + mobile menu + footer checked on touched pages
- [ ] Contact / floating forms still behave as intended (no accidental FormSubmit breakage)
- [ ] No 404s for CSS, JS, images
- [ ] Brand/domain/`CNAME` untouched unless explicitly requested
- [ ] Scope limited — no drive-by refactors unrelated to the ask

## Git

- Commit or push **only when the user asks**
- Include regenerated `css/main.css` with any style/class change
- `main` is production — ship only when verification above passes

## Where to look next

| Need | Source |
|------|--------|
| Deploy, DNS, styling catalog, test checklist | [README.md](README.md) |
| Always-on + file-scoped agent rules | [`.cursor/rules/`](.cursor/rules/) |
