# CLAUDE.md

@AGENTS.md

Everything in AGENTS.md applies (stack, boundaries, verification, git rules). This file adds Claude Code specifics.

## Orientation
- Full file-by-file map: @docs/CODEBASE-INDEX.md
- Content briefs: @docs/content-templates.md
- Cursor rules in `.cursor/rules/` are authoritative for paths, forms and JS ownership.

## Skills (`.claude/skills/`)
| Skill | Use when |
|---|---|
| `add-insight-article` | Publishing a new article (HTML + `data/insights-index.json`) |
| `add-case-study` | Adding a case study page + listing card |
| `update-shared-chrome` | Any header/nav/footer change (edit `scripts/chrome/`, run sync-chrome) |
| `sync-homepage` | Editing homepage content (only `index.html`; `homepage.html` is a redirect stub) |
| `edit-styles` | Any CSS / Tailwind / class change |
| `verify-site` | Before declaring work done: build, checker, local smoke test |
| `commit-by-topic` | User asks to commit: split changes into topic-wise commits as `sunaina.ayiliyath@prodatalytics.com` |

Subagent: `site-reviewer` (read-only pre-ship review against AGENTS.md boundaries).

## Working rules
- Run `npm run check` after any HTML/JSON change (must be 0 errors, 0 warnings).
- Never edit `css/main.css`; after class/style changes run `npm run build:css` (pure Tailwind now; the DhiWise tagger was removed).
- New page → also add it to `sitemap.xml`, give it canonical + og:image meta, and a `_honey` field on any FormSubmit form.
- Match existing copy tone: confident, practical, consulting-grade. Use sentence/title case as seen on the page you edit.
- Do not commit or push unless asked. `main` is production.
- Ask before touching anything in AGENTS.md "Ask first".
