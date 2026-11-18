---
name: edit-styles
description: Change styling for the PRODATALYTICS site (Tailwind source, component classes, theme tokens) and rebuild css/main.css. Use for any visual/class change.
---

# Edit styles

1. Prefer existing component classes (`.btn-primary`, `.card`, `.section-*`, `.form-*`, `.nav-*`, `.tag-chip`...). Catalogue: `docs/CODEBASE-INDEX.md` section 6. Add new reusable styles with `@apply` inside `@layer components` in `css/tailwind.css`.
2. Never edit `css/main.css`. Never change brand tokens (accent `#10b981`, canvas `#111111`) without an explicit request. Colors must work in both `data-theme` dark and light, so use token classes (`bg-surface`, `text-text-secondary`), not hard-coded hex.
3. Rebuild: `npm run build:css` (run `npm install` first if `node_modules` is missing). It is plain Tailwind; CI fails if `css/main.css` is stale.
4. Commit-ready means `css/main.css` is regenerated alongside the source change.
5. Verify at mobile (~375px), tablet and desktop widths, in dark and light themes; `whitespace-nowrap` headings can overflow on mobile.
