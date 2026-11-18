---
name: verify-site
description: Run the PRODATALYTICS pre-ship verification (checker script, CSS build state, local server smoke test). Use before saying work is done or before any commit/push.
---

# Verify site

There is no test runner. Work through this checklist and report results honestly:

1. `npm run check` — 0 errors and 0 warnings (links, index<->files, sitemap, canonical/og:image, honeypots, chrome sync).
2. If styles/classes changed: `npm run build:css`, confirm `css/main.css` changed and there are no stray HTML diffs.
3. `python3 -m http.server 8000` (in the background; never `file://`). Use `curl -sI` to confirm 200 for `/`, `/pages/services.html`, `/pages/products.html`, `/pages/about.html`, `/pages/contact.html`, `/pages/case-studies/`, `/pages/insights/`, `/data/insights-index.json`, `/css/main.css`, `/js/common.js`, `/sitemap.xml`, `/robots.txt`. Stop the server afterwards.
4. For UI changes, look in a browser at nav, mobile menu, Resources dropdown, theme toggle, forms and footer on every touched depth.
5. Confirm untouched: `CNAME`, FormSubmit action/`_next`/`_subject`/email, footer legal block, logos, brand tokens.
6. `git status` / `git diff --stat` to confirm scope. Do not commit unless asked.
