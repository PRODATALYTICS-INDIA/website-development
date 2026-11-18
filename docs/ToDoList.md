# To-Do List

Open items from the 2026-11-18 site review. Everything else from that review is implemented (see `docs/CODEBASE-INDEX.md`). Run `npm run check` after each change.

## Needs owner input

- [ ] **Analytics** — choose a provider (e.g. Plausible, GA4) and supply the ID. Add the snippet to the page `<head>` (a shared template if possible), and add the provider's domain to any CSP if one is introduced. Ask-first item in `AGENTS.md`; update the doc after adding it. Goal: measure consultation-form conversions.
- [ ] **Booking CTA and lead magnet** — supply a Calendly or Cal.com URL, and the asset to offer (e.g. the AI readiness checklist). Add the booking link to the homepage, services and contact CTAs; add a gated or ungated download as a second conversion path.
- [ ] **Case-study credibility** — either add real, permissioned client metrics or testimonials, or approve labelling the five existing case studies "illustrative". Testimonials are an ask-first item in `AGENTS.md`.

## Content (owner will add)

- [ ] **New case studies** — use the `add-case-study` skill. Remember the listing card, `sitemap.xml` entry, canonical and `og:image` tags.
- [ ] **New and longer articles** — use the `add-insight-article` skill. Aim for 800–1,500 words with concrete examples (the current five are about 500 words). Remember the `data/insights-index.json` row, `sitemap.xml` entry and Article JSON-LD.

## Before shipping the current work

- [ ] Review the large uncommitted working tree on a feature branch and open a PR so CI (`.github/workflows/check.yml`) runs before merging to `main` (production).
- [ ] Browser check at ~375px, tablet and desktop, in dark and light themes: mobile menu, Resources dropdown (mouse and keyboard), theme toggle, wrapped hero/CTA headings, footer logos.
- [ ] Confirm the FormSubmit endpoint for `hello@prodatalytics.com` is still activated; submit one test from each form (contact, floating, homepage quick-contact, newsletter).
- [ ] Replace `assets/images/og-default.png` (currently the logo on black) with a designed social card when available.

## Nice to have

- [ ] Newsletter provider (Mailchimp or Buttondown) and an on-site issue archive, replacing the FormSubmit signup.
- [ ] Convert the logos to SVG if source artwork is available (current 512px PNGs are about 17KB each).
