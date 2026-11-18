#!/usr/bin/env python3
"""Regenerate the shared header + footer on every chrome page from scripts/chrome/*.html.

  python3 scripts/sync-chrome.py          # rewrite pages in place
  python3 scripts/sync-chrome.py --check  # exit 1 if any page is out of sync (used by CI)

Chrome pages: index.html, pages/*.html (except the homepage.html redirect stub),
pages/case-studies/*.html, pages/insights/*.html. Edit the templates, not the pages.
Placeholders: {{ROOT}} path to site root, {{PAGES}} path to pages/, {{HOME}} home link.
"""
import re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
T = ROOT / "scripts/chrome"
HEADER = (T / "header.html").read_text(encoding="utf-8").rstrip("\n")
FOOTER = (T / "footer.html").read_text(encoding="utf-8").rstrip("\n")
TOGGLE = (T / "theme-toggle.html").read_text(encoding="utf-8").rstrip("\n").splitlines()

NAV = "text-text-secondary hover:text-accent transition-colors duration-300"
ACT = "text-accent font-medium"


def indent(lines, pad):
    return ("\n" + pad).join(lines)


def active_key(rel):
    if rel == "index.html":
        return "home"
    parts = rel.split("/")
    if len(parts) == 3:
        return "cases" if parts[1] == "case-studies" else "insights"
    return parts[1].replace(".html", "")


def render_header(rel):
    depth = rel.count("/")
    root = ["", "../", "../../"][depth]
    pages = ["pages/", "", "../"][depth]
    home = f"{root}index.html" if depth else "index.html"
    key = active_key(rel)
    toggle_d = indent(TOGGLE, " " * 20)
    toggle_m = toggle_d.replace('class="theme-toggle"', 'class="theme-toggle self-start mb-2"', 1)
    rep = {
        "ROOT": root, "PAGES": pages, "HOME": home,
        "TOGGLE": toggle_d, "TOGGLE_MOBILE": toggle_m,
        "RES_active": " is-active" if key in ("cases", "insights") else "",
        "M_cases": ' class="is-active"' if key == "cases" else "",
        "M_insights": ' class="is-active"' if key == "insights" else "",
        "C_cur": ' aria-current="page"' if key == "contact" else "",
    }
    for k in ("home", "services", "products", "about"):
        rep[f"D_{k}"] = ACT if key == k else NAV
        rep[f"M_{k}_cls"] = f"{ACT} py-3 block" if key == k else f"{NAV} py-3 block"
    out = HEADER
    for k, v in rep.items():
        out = out.replace("{{" + k + "}}", v)
    # keep TOGGLE (mobile-controls copy) un-indented-mismatch simple
    out = re.sub(r"\{\{[A-Za-z_]+\}\}", "?", out)
    return out


def render_footer(rel):
    depth = rel.count("/")
    root = ["", "../", "../../"][depth]
    home = f"{root}index.html" if depth else "index.html"
    return FOOTER.replace("{{ROOT}}", root).replace("{{HOME}}", home)


def pages():
    yield ROOT / "index.html"
    for p in sorted((ROOT / "pages").rglob("*.html")):
        if p.name == "homepage.html":
            continue
        yield p


def main():
    check = "--check" in sys.argv
    bad = 0
    for p in pages():
        rel = p.relative_to(ROOT).as_posix()
        text = p.read_text(encoding="utf-8")
        new = re.sub(r"<header\b.*?</header>", lambda m: render_header(rel), text, count=1, flags=re.S)
        new = re.sub(r"<footer\b.*?</footer>", lambda m: render_footer(rel), new, count=1, flags=re.S)
        if new != text:
            bad += 1
            if check:
                print(f"out of sync: {rel}")
            else:
                p.write_text(new, encoding="utf-8")
                print(f"updated: {rel}")
    if check and bad:
        print(f"{bad} page(s) out of sync — run: python3 scripts/sync-chrome.py")
        sys.exit(1)
    print("chrome in sync" if not bad or check else f"{bad} page(s) updated")


if __name__ == "__main__":
    main()
