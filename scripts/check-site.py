#!/usr/bin/env python3
"""Static-site sanity checks for the PRODATALYTICS website (stdlib only).

Run from repo root:  python3 scripts/check-site.py
Checks: (1) local href/src targets exist, (2) data/insights-index.json rows <-> article files,
(3) pages/homepage.html is a redirect stub, (4) every content page loads common.js and has canonical + og:image,
(5) FormSubmit target + honeypot, (6) sitemap.xml lists every page, (7) shared chrome is in sync.
Exit code 1 if any error. Read-only; never modifies files.
"""
import json, re, subprocess, sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parent.parent
PAGES = [ROOT / "index.html", ROOT / "404.html", *sorted((ROOT / "pages").rglob("*.html"))]
errors, warns = [], []


class Refs(HTMLParser):
    def __init__(self):
        super().__init__()
        self.refs = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        for k in ("href", "src"):
            if a.get(k):
                self.refs.append((tag, a[k]))


for page in PAGES:
    p = Refs()
    text = page.read_text(encoding="utf-8")
    p.feed(text)
    rel = page.relative_to(ROOT)
    for tag, ref in p.refs:
        u = urlparse(ref)
        if u.scheme or ref.startswith(("#", "mailto:", "tel:", "//")):
            continue
        if u.path.startswith("/"):
            target = (ROOT / unquote(u.path).lstrip("/")).resolve()
            if u.path == "/":
                continue
        else:
            target = (page.parent / unquote(u.path)).resolve() if u.path else page
        if u.path and not target.exists():
            errors.append(f"{rel}: broken <{tag}> -> {ref}")
    is_stub = rel.as_posix() == "pages/homepage.html"
    is_404 = rel.as_posix() == "404.html"
    if is_stub:
        if 'http-equiv="refresh"' not in text or 'rel="canonical"' not in text:
            errors.append(f"{rel}: redirect stub must keep meta refresh + canonical")
    elif not is_404:
        for needle, label in (("common.js", "js/common.js"), ('rel="canonical"', "canonical link"),
                              ('property="og:image"', "og:image"), ("</header>", "header")):
            if needle not in text:
                errors.append(f"{rel}: missing {label}")
        if "dhws" in text:
            errors.append(f"{rel}: legacy DhiWise script still referenced")
    for fm in re.finditer(r"<form\b[^>]*formsubmit\.co.*?</form>", text, re.S):
        if "_honey" not in fm.group(0):
            errors.append(f"{rel}: FormSubmit form without _honey honeypot")
    for m in re.finditer(r'action="(https://formsubmit\.co/[^"]+)"', text):
        if m.group(1) != "https://formsubmit.co/hello@prodatalytics.com":
            errors.append(f"{rel}: unexpected FormSubmit target {m.group(1)}")

# insights index <-> files
idx = json.loads((ROOT / "data/insights-index.json").read_text(encoding="utf-8"))
ins = ROOT / "pages/insights"
listed = set()
for row in idx:
    for k in ("slug", "title", "date", "excerpt", "tags", "href"):
        if k not in row:
            errors.append(f"insights-index: {row.get('slug', '?')} missing '{k}'")
    listed.add(row.get("href"))
    if not (ins / row.get("href", "")).exists():
        errors.append(f"insights-index: href not found {row.get('href')}")
for f in ins.glob("*.html"):
    if f.name != "index.html" and f.name not in listed:
        errors.append(f"insights: {f.name} not in data/insights-index.json")

# case studies listed on the listing page
cs = ROOT / "pages/case-studies"
listing = (cs / "index.html").read_text(encoding="utf-8")
for f in cs.glob("*.html"):
    if f.name != "index.html" and f.name not in listing:
        errors.append(f"case-studies/index.html: no card linking {f.name}")

# sitemap covers every indexable page
sm = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
for page in PAGES:
    rel = page.relative_to(ROOT).as_posix()
    if rel in ("404.html", "pages/homepage.html", "index.html"):
        continue
    if f"https://www.prodatalytics.com/{rel}" not in sm:
        errors.append(f"sitemap.xml: missing {rel}")

# shared chrome generated from scripts/chrome/*
r = subprocess.run([sys.executable, str(ROOT / "scripts/sync-chrome.py"), "--check"], capture_output=True, text=True)
if r.returncode:
    errors.append("shared chrome out of sync: " + r.stdout.strip().replace("\n", "; "))

for w in warns:
    print("WARN ", w)
for e in errors:
    print("ERROR", e)
print(f"\n{len(PAGES)} pages checked, {len(errors)} error(s), {len(warns)} warning(s)")
sys.exit(1 if errors else 0)
