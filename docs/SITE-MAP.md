# Site map → codebase

Single source of truth for "I see this on the live site — where is it in the repo?". Live site: `https://www.prodatalytics.com`. `npm run check` fails if a URL in `sitemap.xml` is missing here, or if a page path listed here does not exist.

Related: [CODEBASE-INDEX.md](CODEBASE-INDEX.md) (file-by-file detail), [AGENTS.md](../AGENTS.md) (rules), [content-templates.md](content-templates.md) (briefs).

## 1. Navigation tree (matches the header, in order)

```
Home ................ /                                   index.html
Services ............ /pages/services.html               pages/services.html
  #consulting #ml-solutions #training #statistical-reporting #workshops #research
Products ............ /pages/products.html               pages/products.html
  #apis (#document-intelligence #demand-forecasting #fraud-risk #knowledge-assistant)
  #dashboards (#executive-insights #clinical-dashboard #retail-dashboard)
  #toolkits (#llm-evaluation #data-quality)
Resources (dropdown)
  Case Studies ...... /pages/case-studies/index.html      pages/case-studies/index.html
    clinical-trial-patient-recruitment                    pages/case-studies/clinical-trial-patient-recruitment.html
    enterprise-ai-knowledge-assistant                     pages/case-studies/enterprise-ai-knowledge-assistant.html
    fraud-detection-financial-risk                        pages/case-studies/fraud-detection-financial-risk.html
    renewable-energy-grid-optimization                    pages/case-studies/renewable-energy-grid-optimization.html
    retail-demand-customer-intelligence                   pages/case-studies/retail-demand-customer-intelligence.html
  Insights .......... /pages/insights/index.html          pages/insights/index.html
    #articles #newsletters #newsletter-form
    ai-chatbots-to-ai-agents-2026                         pages/insights/ai-chatbots-to-ai-agents-2026.html
    why-enterprise-ai-projects-fail                       pages/insights/why-enterprise-ai-projects-fail.html
    rag-enterprise-knowledge-management                   pages/insights/rag-enterprise-knowledge-management.html
    predictive-analytics-alongside-genai                  pages/insights/predictive-analytics-alongside-genai.html
    ai-readiness-assessment                               pages/insights/ai-readiness-assessment.html
About ............... /pages/about.html                  pages/about.html
Contact (CTA) ....... /pages/contact.html                pages/contact.html
  #consultation-form #floating-contact-form #thank-you #faq-1..5
```

Not in the nav or sitemap: `pages/homepage.html` (noindex redirect stub to `/`; leave alone), `404.html`.

## 2. Page table

| Page | File | Page JS | Data / forms | Edit via |
|---|---|---|---|---|
| Home | `index.html` | common | `#quick-contact-form` (FormSubmit) | `sync-homepage` skill |
| Services | `pages/services.html` | common | none | HTML; styles via `edit-styles` |
| Products | `pages/products.html` | common | none | HTML |
| About | `pages/about.html` | common | none | HTML |
| Contact | `pages/contact.html` | common, contact | 2 FormSubmit forms, FAQ | HTML; JS in `js/contact.js` |
| Case studies list | `pages/case-studies/index.html` | common | cards link each detail page | `add-case-study` skill |
| Case study detail | `pages/case-studies/<slug>.html` | common | none | `add-case-study` skill |
| Insights list | `pages/insights/index.html` | common, insights | `data/insights-index.json`, newsletter FormSubmit | `add-insight-article` skill |
| Insight article | `pages/insights/<slug>.html` | common, insights | one row in `data/insights-index.json` | `add-insight-article` skill |

## 3. Where do I change…?

| To change | Go to |
|---|---|
| Header, nav, mobile menu, footer, theme toggle | `scripts/chrome/*.html`, then `python3 scripts/sync-chrome.py` (`update-shared-chrome` skill) |
| Styles / classes | `css/tailwind.css`, then `npm run build:css` (never hand-edit `css/main.css`) |
| Menu, scroll, floating contact, theme | `js/common.js` |
| Contact validation, FAQ | `js/contact.js` |
| Insights search / filters | `js/insights.js` + `data/insights-index.json` |
| Add a page | new HTML, plus `sitemap.xml`, this file, canonical + og:image, `_honey` on any form |
| Brand tokens, Tailwind content globs | `tailwind.config.js` |

## 4. Site-level files

| File | Purpose |
|---|---|
| `sitemap.xml`, `robots.txt` | SEO; every indexable page must be in the sitemap |
| `404.html` | GitHub Pages not-found page |
| `CNAME` | Custom domain; do not change casually |
| `public/` | favicon, `manifest.json`, PWA icons |
| `assets/images/` | logos (`logo/`, `logo/optimized/`), `photos/` (self-hosted stock photos for About and Services), `og-default.png` |
| `scripts/check-site.py` | Verifier behind `npm run check` |
| `.github/workflows/check.yml` | CI: CSS freshness + checker |
| `.claude/`, `.cursor/rules/` | Agent skills and rules |
| `docs/`, `plans/` | Documentation and feature plans (not deployed logic) |
