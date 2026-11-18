---
name: add-case-study
description: Add a new case study to the PRODATALYTICS site (detail page under pages/case-studies/ plus listing card). Use when asked to add client work, a project story, or "selected work".
---

# Add a case study

1. Read the case-study brief in `docs/content-templates.md` and copy an existing page, e.g. `pages/case-studies/fraud-detection-financial-risk.html`, to `pages/case-studies/<slug>.html`.
2. Update title/meta/og/twitter (URL `https://www.prodatalytics.com/pages/case-studies/<slug>.html`), h1, and the Challenge -> Approach -> Outcome content. Never invent client names, logos or metrics; use anonymised, honest framing and flag any numbers as needing confirmation from the user.
3. Add a card to `pages/case-studies/index.html` mirroring the existing cards (the checker fails if a detail page has no linking card).
4. If it should be featured, ask the user before changing the "Selected work" teasers on `index.html` (`index.html` only; see `sync-homepage`).
5. Add the page `<url>` to `sitemap.xml` and the page path to `docs/SITE-MAP.md` and keep canonical + og:image tags.
6. Keep nested paths `../../`; keep chrome untouched.
7. Run `npm run check`, then smoke test with `python3 -m http.server 8000`.
8. Do not commit unless asked.
