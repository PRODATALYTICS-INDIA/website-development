## PRODATALYTICS Website – Client Overview & Navigation Guide

Last updated: January 2026  
Environment: Static website (HTML, CSS, JS)

This document gives an overview of all public pages on the PRODATALYTICS marketing site and explains how a typical visitor navigates between them. You can convert this document to PDF and share it with stakeholders as a visual and functional reference.

---

## 1. Entry Point & Global Navigation

**Landing entry (`index.html`)**
- When a user visits the root domain (for example `https://prodatalytics.com/`), they first hit `index.html`.
- This page briefly shows a “Welcome to PRODATALYTICS – Redirecting to homepage…” message and then **automatically redirects** to `pages/homepage.html` within about 100 ms.
- If JavaScript is disabled, an HTML `<meta http-equiv="refresh">` fallback still redirects to the homepage.

**Global header (common on main pages)**
- Present at the top of:
  - `pages/homepage.html`
  - `pages/services.html`
  - `pages/about.html`
  - `pages/contact.html`
- Contains:
  - **Logo**: Left side, using the white transparent logo.
  - **Primary navigation links (desktop)**:
    - **Home** → `homepage.html`
    - **Services** → `services.html`
    - **About** → `about.html`
    - **Contact** → `contact.html` (styled as a primary button)
  - **Mobile menu button**:
    - On small screens, a hamburger icon toggles a vertical menu with the same four links.

**Global footer (common on main pages)**
- Present at the bottom of homepage, services, about, and contact pages.
- Content:
  - **Logo** and social links (Twitter, LinkedIn, etc.).
  - **Contact info**: email, phone, availability, postal address.
  - **Copyright notice**: “© 2025 PRODATALYTICS INDIA PRIVATE LIMITED. All Rights Reserved.”

**Global CTAs (calls to action)**
- Most pages prominently encourage:
  - **“Connect with us” / “Schedule consultation” / contact-related CTAs** leading to `contact.html`.
  - **“Explore services” / “Know more about us”** CTAs leading to `services.html` or `about.html`.

---

## 2. Homepage – `pages/homepage.html`

**Purpose**
- Acts as the **primary marketing and overview page** for PRODATALYTICS.
- Communicates positioning: “Transforming data into actionable insights” and highlights core services and tools.

**Key sections**
- **Hero section**
  - Headline: “Transforming data into actionable insights”.
  - Prominent CTAs:
    - **“Connect with us”** → `contact.html`
    - **“Explore Services”** → `services.html`
    - **“Know more about us”** → `about.html`
  - Metrics row (projects delivered, ML models deployed, client satisfaction, 24/7 support).

- **Services preview**
  - Intro text (“What we do ?”) describing overall service philosophy.
  - **Cards linking into the detailed Services page using in‑page anchors** on `services.html`:
    - **Data science consulting** → `services.html#consulting`
    - **Product development** → `services.html#ml-solutions`
    - **Training and internship program** → `services.html#training`
    - **Statistical reporting** → `services.html#statistical-reporting`
    - **Workshops, masterclass & collaboration with academia** → `services.html#workshops`
    - **Continuous research and development** → `services.html#research`

- **How we do it – tools & technologies**
  - Describes categories of tools the team works with:
    - Open source tools (Python, RStudio, JASP, GitHub).
    - Analytical dashboards (Power BI, Tableau, Shiny, Streamlit).
    - Enterprise analytics tools (IBM SPSS, SAS).

- **Floating “Quick contact” widget**
  - Fixed small box in the bottom-right corner.
  - Contains a minimal email + message form.
  - Allows a visitor to send a quick message without leaving the page.

**Typical user journey starting from homepage**
1. User lands on `homepage.html` (via redirect from `index.html`).
2. From the **hero CTAs**:
   - To understand offerings → **“Explore Services”** → `services.html`.
   - To learn about the company’s story and methodology → **“Know more about us”** → `about.html`.
   - To get in touch → **“Connect with us”** → `contact.html`.
3. From the **services preview cards**, the user can deep‑link into specific service sections on the Services page (e.g., `services.html#consulting`).

**Snapshot suggestion**
- Capture a full‑width screenshot of `homepage.html` showing:
  - Header, hero with CTAs, and at least the start of the services preview cards.

---

## 3. Services Page – `pages/services.html`

**Purpose**
- Provides a **detailed breakdown of all core services** offered by PRODATALYTICS.
- Designed as a scrollable, section‑based page with internal anchors for easy navigation.

**Hero & navigation**
- Hero headline: “Empowering your business with data-driven solutions”.
- Shows the same support metrics as other pages (24/7 support, <2 hrs response, 100% confidential, free initial consultation).
- **Service navigation pills** below the hero:
  - Each pill is a button scrolling to a specific section using **in‑page anchors**:
    - **Data science consulting** → `#consulting`
    - **ML solutions** → `#ml-solutions`
    - **Training and internship program** → `#training`
    - **Statistical reporting** → `#statistical-reporting`
    - **Workshops & collaboration** → `#workshops`
    - **Research & development** → `#research`
  - On scroll, JavaScript highlights the pill corresponding to the section currently near the top of the viewport.

**Service sections (anchor blocks)**
- **Data science consulting (`#consulting`)**
  - Describes strategic consulting, analytics implementation, and performance optimization.
  - Includes a stats overlay over an illustrative dashboard image.
  - Links:
    - **“Schedule Consultation”** → `contact.html`
    - **“View Technical Details”** (button) toggles a collapsible **Technical specifications** panel:
      - Technology stack (Python, R, SQL, Spark, Tableau/Power BI, cloud platforms, Docker/Kubernetes).
      - Methodology (CRISP-DM, Agile, CI/CD, data governance).

- **Machine learning solutions (`#ml-solutions`)**
  - Emphasizes custom ML models, NLP, and computer vision.
  - Includes a visual showing “97.3% Model Accuracy”.
  - Buttons:
    - **“Discuss ML Project”** → `contact.html`
    - **“View ML Stack”** → toggles a **ML Technology Stack** panel (frameworks, MLOps, cloud platforms).

- **Training and internship program (`#training`)**
  - Outlines corporate training, 12‑week internship programs, and certification offerings.
  - Contains stats on students trained, placement rate, and fee.
  - Main CTA: **“Corporate Training Inquiry”** → `contact.html`.

- **Statistical reporting (`#statistical-reporting`)**
  - Focuses on advanced statistical analysis, dashboards, and expert consultation.
  - Main CTA: **“Get Statistical Consultation”** → `contact.html`.

- **Workshops, masterclass & collaboration with academia (`#workshops`)**
  - Highlights hands-on workshops, masterclass programs, and university partnerships.
  - Main CTA: **“Schedule Workshop”** → `contact.html`.

- **Continuous research and development (`#research`)**
  - Emphasizes ongoing R&D, technology innovation, and thought leadership.
  - CTA: **“Learn About Our Research”** → `about.html`.

**Additional CTAs & footer**
- Closing CTA: “Ready to collaborate with us ?”
  - **Connect with us** → `contact.html`
  - **Know more about us** → `about.html`
- Footer repeats company & contact info.

**Typical navigation flows**
- From homepage:
  - Clicking a **service preview card** jumps directly to the matching section, e.g. `services.html#training`.
- Within Services page:
  - Clicking any **pill** in the service nav scrolls to the corresponding section.
  - From each section, CTAs route the user primarily to `contact.html` to initiate engagement.

**Snapshot suggestion**
- Capture **two screenshots**:
  1. Top of the page: hero + service navigation pills.
  2. Example service section (e.g., Data science consulting) including its CTA and any expanded technical details.

---

## 4. About Page – `pages/about.html`

**Purpose**
- Shares the **company story, mission, values, and methodology**, providing credibility and context for potential clients.

**Key sections**
- **Hero section**
  - Headline: “Building sustainable data science ecosystems”.
  - Metrics: 24/7 IST support, <2 hrs response, 100% confidential, free initial consultation.

- **“Who are we ?”**
  - Explains the team composition (data scientists, ML engineers, business strategists).
  - Two large cards:
    - **Our story**
      - Founded in 2024.
      - Focus on bridging the gap between data potential and real‑world impact.
      - Mentions products (automated analytics, ML, CV systems, APIs, dashboards) and capability building (workshops, academic collaborations).
      - Includes a photo of team collaboration and a “95% Client Satisfaction” highlight.
    - **Our mission & values**
      - Covers accessibility of advanced data science, impact‑oriented approach, and commitment to knowledge sharing and inclusivity.
      - Includes a supporting image illustrating innovation.

- **“What’s our approach ?” – Methodology**
  - Structured 4‑step lifecycle:
    1. **Discovery & Assessment**
       - Business objective mapping, data quality assessment, infrastructure review.
    2. **Strategy & Planning**
       - Project roadmap, success metrics, technology stack selection.
    3. **Development & Implementation**
       - Agile development, stakeholder reviews, QA.
    4. **Deployment & knowledge transfer**
       - Production deployment, training, and ongoing monitoring.
  - Each step is visually supported with simple diagrams/graphics.

- **Closing CTA**
  - “Ready to collaborate with us ?”
  - CTAs:
    - **“Connect with us”** → `contact.html`
    - **“Explore services”** → `services.html`

**Typical navigation flows**
- From the top navigation on any page, a user selects **About** → `about.html`.
- From the About page, they typically:
  - Move to **Services** to see offerings.
  - Move to **Contact** to schedule a consultation after reading the story and methodology.

**Snapshot suggestion**
- One screenshot covering:
  - Hero title.
  - “Who are we ?” heading.
  - At least part of one card (e.g., “Our story”).

---

## 5. Contact Page – `pages/contact.html`

**Purpose**
- Primary **conversion page** where visitors schedule consultations or send inquiries via multiple contact methods.

**Key sections**
- **Hero section**
  - Headline: “Let’s turn your data into meaningful insights—together.”
  - Same set of reliability metrics (24/7, <2 hrs response, etc.).

- **Main consultation form**
  - Large form titled **“Schedule consultation”**.
  - Implemented via **FormSubmit** to send submissions to `hello@prodatalytics.com`.
  - Key fields:
    - First/Last name, email, phone.
    - Company/organization and role.
    - Service interest (data science consulting, ML solutions, training, multiple services, or “Not Sure – Need Guidance”).
    - Optional budget range & timeline.
    - Project details text area.
    - Preferred contact method (email, phone, video call).
  - Submit button: **“Schedule Free Consultation”**.
  - After submission, users are redirected to a `thank_you.html` page configured via FormSubmit (`_next` parameter).

- **Direct contact info card**
  - Shows:
    - Email (hello@prodatalytics.com) with expected response time.
    - Phone number and 24/7 availability.
    - Full office address.
    - Business hours (24/7 support, emergency consultations).

- **Quick inquiry form**
  - Smaller form titled **“Quick inquiry”**.
  - Takes only name, email, and short message.
  - Also posts to `hello@prodatalytics.com` via FormSubmit.

- **Social media & additional contact**
  - “Connect with us” section with cards for:
    - LinkedIn (live link).
    - Twitter, WhatsApp, Instagram, Facebook (placeholders or future links).

- **FAQ section**
  - Collapsible FAQs explaining:
    - How quickly projects can start.
    - What’s included in the free consultation.
    - International client support.
    - Industry specializations.
    - Data security & confidentiality practices.

- **Floating “Quick contact” widget**
  - Similar to the homepage:
    - A compact email/message form in the bottom‑right corner.

**Typical navigation flows**
- From any page, **Contact** in the header navigates here.
- From major CTAs across the site (homepage, services, about), the user is directed to `contact.html` to:
  - Submit the full consultation form, or
  - Use the smaller quick inquiry form, or
  - Use the floating email widget.

**Snapshot suggestion**
- Ideally two screenshots:
  1. Top portion showing hero and top of the “Schedule consultation” form.
  2. Lower portion showing direct contact info and “Quick inquiry” form (or the FAQ section).

---

## 6. How All Pages Connect – High-Level User Journeys

**Top‑level pages**
- `index.html` → auto-redirects to `pages/homepage.html`.
- Main navigable pages:
  - `pages/homepage.html`
  - `pages/services.html`
  - `pages/about.html`
  - `pages/contact.html`

**Header-based navigation (desktop & mobile)**
- Consistently available across all main pages:
  - **Home** → `homepage.html`
  - **Services** → `services.html`
  - **About** → `about.html`
  - **Contact** → `contact.html`
- On mobile, the hamburger menu reveals the same options in a stacked layout.

**Primary flows for a new visitor**
1. **Awareness → Explore services → Contact**
   - Land on homepage → click **“Explore Services”** → review sections on `services.html` → click a CTA (e.g., “Schedule Consultation”) → `contact.html`.
2. **Awareness → Understand credibility → Contact**
   - Land on homepage → click **“Know more about us”** → read story on `about.html` → click **“Connect with us”** → `contact.html`.
3. **Direct contact from any page**
   - User clicks **“Contact”** in the global header, or a prominent CTA, and reaches `contact.html`.

**Anchor-based micro‑navigation on Services page**
- Internal navigation using anchors (`#consulting`, `#ml-solutions`, etc.) allows quickly jumping between service segments.
- Home page cards and service nav pills both leverage these anchors, providing deep links for marketing campaigns or client demos.

---

## 7. Creating the PDF with Page Snapshots

To produce a polished PDF you can share with clients (including visual snapshots of each page), there are two simple approaches:

**Option A – Print to PDF from your browser (recommended, no extra tools)**
1. Open this file (`documents/CLIENT_SITE_GUIDE.md`) in a markdown viewer or GitHub-style UI and copy it into a Word/Google Docs document.
2. In a browser, visit each page:
   - Root (redirects to homepage), `pages/homepage.html`, `pages/services.html`, `pages/about.html`, `pages/contact.html`.
3. For each page, take a screenshot:
   - On macOS: `Cmd + Shift + 4` (or use `Cmd + Shift + 5` for window capture).
4. Insert the screenshots into your Word/Google Docs document in the locations indicated by the “Snapshot suggestion” notes.
5. Export from Word/Google Docs as **PDF** (e.g., *File → Download → PDF* in Google Docs, or *File → Save as PDF* in Word).

**Option B – Use a dedicated PDF or screenshot tool**
- Use tools such as:
  - A full-page screenshot browser extension, or
  - A documentation tool that supports markdown → PDF with embedded images.
- Add the screenshots as images below each relevant section, then export to PDF.

Either path will give you a **client-ready PDF** that combines:
- Clear explanations of each page and its purpose,
- A map of how users navigate through the site,
- And visual snapshots of the actual UI.


