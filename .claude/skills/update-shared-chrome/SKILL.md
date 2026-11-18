---
name: update-shared-chrome
description: Change the shared header, nav, mobile menu, theme toggle or footer across every PRODATALYTICS page. Use for adding/renaming nav links, footer edits, or logo markup changes.
---

# Update shared chrome

Header and footer are **generated**. Never hand-edit them in a page.

1. Edit the template: `scripts/chrome/header.html`, `footer.html` or `theme-toggle.html`. Placeholders: `{{ROOT}}` (path to site root), `{{PAGES}}` (path to `pages/`), `{{HOME}}`, plus active-state tokens (`{{D_*}}`, `{{M_*}}`, `{{RES_active}}`, `{{C_cur}}`). Active-link logic lives in `scripts/sync-chrome.py`.
2. A new nav item needs: template markup, an `active_key` / token entry in `sync-chrome.py`, and the page added to `sitemap.xml`.
3. Run `python3 scripts/sync-chrome.py` (rewrites all 17 chrome pages) and `git diff --stat` to confirm only header/footer changed.
4. If new classes were used, follow `edit-styles`.
5. `npm run check`, then smoke test one page per depth (root, `pages/`, `pages/*/`): mobile menu, Resources dropdown (mouse + keyboard), theme toggle.

**Ask the user first** for: floating quick-contact behaviour (still per-page markup), FormSubmit changes, footer legal/contact block changes.
