# PRODATALYTICS Codebase Index

Complete map of the repo for humans and AI assistants. Generated from a full read of every source file (2026-11-18). Update when structure changes. Rules live in [AGENTS.md](../AGENTS.md); Claude-specific entry point is [CLAUDE.md](../CLAUDE.md).

## 1. What this is

Static marketing site for **PRODATALYTICS INDIA PRIVATE LIMITED** (data science / ML / GenAI consulting, Kochi). Goal: credibility + consultation bookings. Live at `https://www.prodatalytics.com` via GitHub Pages (`main` = production, `CNAME` at root, DNS at Wix). No CMS, no backend, no framework.

## 2. Technology

| Layer | Detail |
|---|---|
| Markup | Hand-written multi-page HTML5; header/nav/footer **copy-pasted** into every page |
| Styling | Tailwind CSS 3.4. Source `css/tailwind.css` -> generated, committed `css/main.css` (Pages has no build step) |
| JS | Vanilla ES6, no bundler: `common.js`, `contact.js`, `insights.js` |
| Forms | FormSubmit POST to `hello@prodatalytics.com` (no JS interception) |
| Data | One JSON file: `data/insights-index.json` (client-side search) |
| Fonts | Inter + JetBrains Mono via Google Fonts |
| Theming | `data-theme="dark|light"` on `<html>`, persisted in `localStorage['pd-theme']`; tiny inline script in `<head>` prevents flash |
| Tooling | Only `tailwindcss` is a dependency. DhiWise tagger + injector were removed (2026-11-18). CI: `.github/workflows/check.yml`. |

## 3. Directory tree

```
index.html                 Live homepage (/)
pages/homepage.html        Redirect stub -> / (noindex, canonical /)
pages/services.html        6 anchored services sections
pages/products.html        Accelerators: APIs, dashboards, toolkits
pages/about.html           Story, approach, CTA
pages/contact.html         Consultation form, floating form, FAQ
pages/case-studies/        index.html (listing) + 5 detail pages
pages/insights/            index.html (search, tag chips, newsletter) + 5 articles
data/insights-index.json   Article metadata for search
css/tailwind.css           EDIT HERE
css/main.css               GENERATED (never hand-edit)
js/common.js js/contact.js js/insights.js
assets/images/logo/        9 PNG variants (names contain spaces)
public/                    favicon.ico, manifest.json, icon-192/512.png
assets/images/photos/      4 self-hosted stock JPEGs used on About and Services (lazy-loaded; replace with own visuals later)
assets/images/og-default.png   1200x630 social preview; logo/optimized/ = 512px header/footer logos
docs/                      SITE-MAP.md (URL→file map), content-templates.md, ToDoList.md, this index
plans/                     case-studies-insights.md (feature plan)
scripts/check-site.py      Read-only checker (links, index, sitemap, SEO meta, honeypots, chrome sync)
scripts/sync-chrome.py     Generates header/footer on 17 pages from scripts/chrome/{header,footer,theme-toggle}.html
sitemap.xml robots.txt 404.html   SEO/hosting files
.github/workflows/check.yml      CI
.cursor/rules/*.mdc        Cursor rules (5 files)
.claude/                   Claude Code skills, agents, settings
tailwind.config.js         Brand tokens (CSS-var backed colors), content globs
CNAME  package.json  .gitignore
```

## 4. Pages

URL → file → owner table with nav order and anchors: [SITE-MAP.md](SITE-MAP.md) (enforced by `npm run check`).

| File | Purpose / sections | Scripts | Forms |
|---|---|---|---|
| `index.html` | Hero, What we do, Products teaser, Selected work (3 cases), How we do it, floating quick-contact | common | `#quick-contact-form` -> `_next=https://www.prodatalytics.com/#thank-you` |
| `pages/homepage.html` | Redirect stub to `/` (meta refresh + canonical, noindex) | none | none |
| `pages/services.html` | `#consulting #ml-solutions #training #statistical-reporting #workshops #research` (+ `#consulting-details`, `#ml-details`), CTA | common | none |
| `pages/products.html` | `#apis` (`#document-intelligence #demand-forecasting #fraud-risk #knowledge-assistant`), `#dashboards` (`#executive-insights #clinical-dashboard #retail-dashboard`), `#toolkits` (`#llm-evaluation #data-quality`) | common | none |
| `pages/about.html` | Who we are, approach, CTA | common | none |
| `pages/contact.html` | `#consultation-form` (name, email, phone, company, role, service-interest, project-urgency, project-details), `#floating-contact-form`, `#thank-you` banner, FAQ accordion | common, contact | 2 FormSubmit forms, `_next=.../pages/contact.html#thank-you`, `_template=table` |
| `pages/case-studies/index.html` | Listing cards + CTA | common | none |
| `pages/case-studies/<slug>.html` | Challenge -> Approach -> Outcome | common | none |
| `pages/insights/index.html` | `#articles` (`#insights-search`, `#insights-tag-filters`, `#insights-results`, `#insights-empty`), `#newsletters` (5 series), `#newsletter-form`, `#newsletter-thanks` | common, insights | FormSubmit, `_next=.../pages/insights/index.html#newsletter-thanks` |
| `pages/insights/<slug>.html` | Long-form article, tag chips, related case link, CTA | common, insights | none |

Case studies: `clinical-trial-patient-recruitment`, `enterprise-ai-knowledge-assistant`, `fraud-detection-financial-risk`, `renewable-energy-grid-optimization`, `retail-demand-customer-intelligence`.
Insights (slug = file = index row): `ai-chatbots-to-ai-agents-2026`, `why-enterprise-ai-projects-fail`, `rag-enterprise-knowledge-management`, `predictive-analytics-alongside-genai`, `ai-readiness-assessment`.

## 5. Shared chrome (generated on 17 pages)

Edit `scripts/chrome/*.html`, run `python3 scripts/sync-chrome.py`; CI/`npm run check` fails if pages drift. Floating contact block is still per-page.

- `<head>`: inline theme script, meta/OG/Twitter, favicon + manifest, `main.css`, Google Fonts.
- `<header class="site-header fixed ...">`: logo (dark + light `<img>` swapped by `.logo-dark/.logo-light`), desktop nav, theme toggle, mobile menu button, `#mobile-menu`.
- Nav order: **Home · Services · Products · Resources (dropdown: Case Studies, Insights) · About · Contact** (Contact styled as CTA button). Dropdown uses `.nav-dropdown`, `.is-active` marks current section.
- `<footer class="bg-primary">`: logo, social (X, LinkedIn, Instagram), email, registered address, copyright 2026.
- Scripts at end of body (`common.js`, plus page-specific).
- Path prefixes: root `css/…`; `pages/*` `../`; `pages/*/*` `../../`. Nested pages link Home to `../../index.html`.

## 6. CSS system (`css/tailwind.css`)

- Tokens as CSS variables in `:root, html[data-theme="dark"]` and `html[data-theme="light"]`; `tailwind.config.js` maps them to colors using `color-mix` so opacity modifiers (`bg-accent/10`) work.
- Brand: accent `#10b981`, dark canvas `#111111`, surface `#2a2a2a`, text `#fff` / `#a1a1aa`; light: bg `#fafafa`, surface `#fff`.
- `@layer components`: buttons (`btn-primary/secondary/small`), hero (`hero-*`), theme chrome (`site-header`, `logo-*`, `theme-toggle`), key indicators, CTA (`cta-*`), cards (`card`, `card-hover`, `card-icon*`, `card-title*`, `card-description`), sections (`section`, `section-alt`, `section-container`, `section-content`, `section-heading*`, `section-description*`), forms (`form-input/label/textarea/select`), nav (`nav-link*`, `nav-button`, `nav-dropdown*`), containers, insights (`tag-chip*`, `series-card`, `newsletter-block`, `content-prose`), legacy (`input-field`, `text-accent-hover`).
- Utilities: `text-gradient`, `shadow-glow`, `animate-fade-in`, `animate-slide-up`. Safe-area padding for footer / `#floating-email`.
- Tailwind `content` globs: `pages/**`, `index.html`, `js/**` — classes must appear there to survive the build (JS-generated class strings in `js/` are covered).

## 7. JavaScript

| File | Functions |
|---|---|
| `js/common.js` | theme (`getStoredTheme`, `applyTheme`, `initThemeToggle`), `initMobileMenu`, `initNavDropdowns`, `initSmoothScrolling` (preventDefaults `a[href^="#"]`), `initHeaderScrollEffect` (`.is-scrolled` > 100px), `initFloatingEmail` (close button + "Sending..." UX, does not block POST), `initThankYouBanner`, `initScrollAnimations`. All on DOMContentLoaded. |
| `js/contact.js` | `#thank-you` banner, blur/input validation (`border-error`), email regex, submit button UX, floating-email opacity, `.faq-toggle` accordion. |
| `js/insights.js` | IIFE: newsletter-thanks hash, fetch `../../data/insights-index.json`, search (title+excerpt+tags, 200ms debounce), tag chips, renders cards via `innerHTML` (index data is trusted/first-party). |

Known overlap: Submit UX + `#thank-you` live only in `common.js`; `contact.js` = validation, FAQ, floating-email opacity.

## 8. Data

`data/insights-index.json` — array of `{slug, title, date (YYYY-MM-DD), excerpt, tags[], href}`; `href` is relative to `pages/insights/`. Sorted by date desc at runtime.

## 9. Known hazards / quirks

1. `npm run build:css` is plain Tailwind; CI rejects a stale `css/main.css`.
2. Footer contact block, FormSubmit endpoints, `CNAME`, brand tokens are protected (see AGENTS.md).
3. Homepage content exists only in `index.html`.
4. Logo filenames contain spaces — keep as-is in `src` attributes.
5. Hero/CTA headings are `md:whitespace-nowrap` (wrap on mobile).
6. Not yet done (need owner input): analytics, booking link, real testimonials/metrics, longer articles.
7. Working tree currently has many uncommitted changes (main = production): do not commit/push unless asked.

## 10. Where to find things

| Need | File |
|---|---|
| Rules/boundaries | `AGENTS.md`, `.cursor/rules/` |
| Deploy/DNS how-to | `README.md` |
| Article/case/newsletter briefs | `docs/content-templates.md` |
| Feature history | `plans/case-studies-insights.md` |
| Claude workflows | `.claude/skills/*/SKILL.md` |
