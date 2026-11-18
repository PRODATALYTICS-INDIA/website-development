# Improvement ideas

Source: Miro board "PRODATALYTICS Website Design", frame "8. Improvement opportunities" (read 2026-11-18). Dot votes were not readable, so the order is by theme, not priority.

Status key: **Ready** = can be done now. **Needs input** = blocked on content, assets or a decision. **Ask first** = touches an AGENTS.md "Ask first" area.

## Credibility and content

| # | Task | Status | Notes |
|---|---|---|---|
| 1 | Add client logos or permissioned testimonials | Ask first, needs input | Needs client permission. AGENTS.md: ask before reintroducing testimonials or "trusted by" blocks. |
| 2 | Add real outcome numbers to case studies | Needs input | Needs client approval for each figure. Case studies are directional only for now. |
| 3 | Add a team page with founder bios and photos | Needs input | New page: `sitemap.xml`, `docs/SITE-MAP.md`, canonical + og:image, nav change in `scripts/chrome/`. Needs bios and photos. |
| 4 | Write deeper articles (800 to 1,500 words) | Ready (needs topic) | Use the `add-insight-article` skill; add a row in `data/insights-index.json`. |

## Conversion

| # | Task | Status | Notes |
|---|---|---|---|
| 5 | Add analytics to measure form conversions | Ask first | Third-party script. Tool choice needed. |
| 6 | Put a booking link beside every CTA | Needs input | Needs a booking URL (Calendly, Cal.com or similar). |
| 7 | Build an AI readiness checklist as a lead magnet | Ask first | Base it on the `ai-readiness-assessment` article. Email collection touches FormSubmit. |
| 8 | Use a real newsletter tool with an archive | Ask first | Today the site only collects signups through FormSubmit. |

## Visual polish

| # | Task | Status | Notes |
|---|---|---|---|
| 9 | Use our own visuals instead of stock photos | Needs input | Needs design assets. |
| 10 | Fix heading spacing, "like What we do ?" | Needs input | Ambiguous: which headings? |
| 11 | Design a social share card | Needs input | Replaces `assets/images/og-default.png` (1200x630). |
| 12 | Switch to SVG logos | Needs input | Logos are protected in AGENTS.md. Needs SVG sources. |

## Tech and SEO

| # | Task | Status | Notes |
|---|---|---|---|
| 13 | Give each service its own page | Needs input | Six new pages: URLs, sitemap and nav all change. Best done as a separate project. |
| 14 | Move the floating contact into shared chrome | Ask first | Floating-contact behavior is a product decision per AGENTS.md. |
| 15 | Update the README nav to match the site | Done (2026-11-19) | README feature list now lists the full nav. |
| 16 | Self-host images with lazy loading | Done (2026-11-19) | 8 hotlinked Unsplash/Pexels/Pixabay images on About and Services now load from `assets/images/photos/` with width/height, `loading="lazy"` and no third-party fallbacks. Still stock photos: see #9. |

## Your ideas

_Add new ideas here._
