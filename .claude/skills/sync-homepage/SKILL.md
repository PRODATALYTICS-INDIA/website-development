---
name: sync-homepage
description: Edit PRODATALYTICS homepage content. Use whenever homepage copy, sections or the quick-contact form change.
---

# Homepage

Homepage content lives **only** in `index.html` (live `/`). `pages/homepage.html` is a noindex redirect stub with a canonical to `/` — do not copy content into it.

Steps: edit `index.html` body content (header/footer come from `scripts/chrome/`), keep the quick-contact form's FormSubmit email/fields/`_subject`/`_next` (`https://www.prodatalytics.com/#thank-you`) and its `_honey` field, run `npm run check`. Do not reintroduce removed blocks (testimonials, ROI strips, "trusted by") without asking.
