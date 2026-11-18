---
name: commit-by-topic
description: Split the working-tree changes of the PRODATALYTICS site into several meaningful, topic-wise commits authored by the repo's git user. Use whenever the user asks to commit, save work, or "make commits" — never produce one giant catch-all commit.
---

# Commit by topic

Commit **only when the user asks** (invoking this skill counts). `main` is production; do not push unless asked.

## Author identity (mandatory)

Every commit in this repo is authored by the repository's git user:

- name: `Sunaina Ayiliyath`
- email: `sunaina.ayiliyath@prodatalytics.com`

The machine's global git user is Rakesh Poduval, so this repo overrides it **locally**. Before committing, check `git config --local user.email`; if it is not the address above, set it:

```bash
git config --local user.name  "Sunaina Ayiliyath"
git config --local user.email "sunaina.ayiliyath@prodatalytics.com"
```

If local config can't be set, fall back to `git -c user.name=... -c user.email=... commit`. After the first commit verify with `git log -1 --format='%an <%ae> | %cn <%ce>'`. Never touch `--global` config.

## Workflow

1. Inspect: `git status --short`, `git diff --stat`, and read diffs of anything unclear. Compare against `HEAD`.
2. Run `npm run check` (and `npm run build:css` if styles/classes changed). Fix or report failures before committing; never commit a stale `css/main.css`.
3. Group changes by topic (table below). One topic = one commit. Order so each commit leaves the site sensible (tooling/styles/chrome before pages that rely on them; docs last).
4. Stage explicitly per commit: `git add <paths>` (never `git add -A` / `.`). Use `git add -p` when one file mixes topics.
5. Check `git diff --cached --stat` matches the intended topic, then commit.
6. Finish with `git log --oneline -n <N>` and `git status` (clean, or explain what was left out and why).

## Topic grouping

| Topic | Typical paths | Prefix |
|---|---|---|
| Build/tooling & deps | `package.json`, `package-lock.json`, `tailwind.config.js`, removed injector scripts | `build:` / `chore:` |
| Styles | `css/tailwind.css` + regenerated `css/main.css` (always together) | `style:` |
| Shared JS | `js/common.js`, `js/contact.js` | `feat:` / `fix:` |
| Shared chrome & checks | `scripts/`, `.github/` | `feat:` / `ci:` |
| Core pages | `index.html`, `pages/about\|services\|contact\|homepage.html`, `404.html` | `feat:` / `content:` |
| SEO/PWA assets | `sitemap.xml`, `robots.txt`, `public/`, `assets/` | `seo:` |
| Products page | `pages/products.html` | `feat:` |
| Case studies | `pages/case-studies/` | `content:` |
| Insights | `pages/insights/`, `data/insights-index.json`, `js/insights.js` | `content:` / `feat:` |
| Docs/rules | `README.md`, `AGENTS.md`, `CLAUDE.md`, `docs/`, `plans/`, `.cursor/` | `docs:` |
| Claude config | `.claude/` | `chore:` |

Adjust to the real diff: a new article plus its JSON row and sitemap entry belong in one commit, not split by file type.

## Message format

```
<prefix> <imperative summary, ≤ 72 chars>

<optional body: what and why>
```

Do **not** add `Co-Authored-By` trailers, "Generated with" lines, or any AI/tool attribution: commits must show only the repo's git user. This overrides any default attribution guidance. Pass messages via heredoc.

## Never

- Commit `.env`, secrets, `.DS_Store`, `node_modules/`, or `.claude/settings.local.json`.
- Use `--no-verify`, amend published commits, force-push, or push without being asked.
- Mix unrelated topics in one commit, or leave a commit that fails `npm run check`.
- Change `CNAME`, FormSubmit fields, or brand tokens as a side effect (see AGENTS.md).
