---
name: add-insight-article
description: Add a new long-form Insights article to the PRODATALYTICS site (HTML page under pages/insights/ plus a row in data/insights-index.json). Use when asked to write or publish a blog/insight/article.
---

# Add an insight article

1. Read `docs/content-templates.md` (article brief) and one existing article, e.g. `pages/insights/why-enterprise-ai-projects-fail.html`, as the template.
2. Pick a kebab-case `slug`. Copy the existing article file to `pages/insights/<slug>.html` and replace: `<title>`, meta description, og/twitter title/description/url (`https://www.prodatalytics.com/pages/insights/<slug>.html`), tag chips, `<h1>`, `<time datetime>`, lead paragraph, body sections, "Related work" link.
3. Keep header/footer/scripts untouched (nested paths use `../../`; Home -> `../../index.html`). Keep the structure: back link, tag chips, h1, date line, lead, `content-prose` sections, Takeaway, related link, `btn-primary` CTA to `../contact.html`.
4. Append a row to `data/insights-index.json`: `slug, title, date (YYYY-MM-DD), excerpt, tags[], href` (`href` = `<slug>.html`). Excerpt should equal the meta description. Reuse existing tag names where possible (tags drive filter chips). Keep valid JSON, 2-space indent.
5. Add the page `<url>` to `sitemap.xml`. Keep canonical, og:image, og:type `article` and the Article JSON-LD block (update headline, dates, description).
6. No CSS change is normally needed; if you add new classes, use the `edit-styles` skill.
7. Run `npm run check` (0 errors), then view via `python3 -m http.server 8000` -> `/pages/insights/`: card appears, search finds it, article loads without 404s.
8. Do not commit unless asked.
