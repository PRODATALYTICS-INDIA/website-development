# PRODATALYTICS Website - Project Documentation

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Folder Structure](#folder-structure)
- [Code File Summaries](#code-file-summaries)
- [Getting Started](#getting-started)
- [Build Process](#build-process)
- [Technologies Used](#technologies-used)
- [Development Guidelines](#development-guidelines)

---

## 🎯 Project Overview

PRODATALYTICS is a professional website for a premium data science consulting firm. The website showcases services, team information, internship programs, and provides contact functionality. Built with modern web technologies focusing on performance, SEO, and user experience.

**Key Features:**
- Responsive design (mobile-first approach)
- SEO optimized with meta tags
- Accessible navigation
- Smooth scrolling and animations
- Form validation
- Modern glassmorphic design

---

## 📁 Folder Structure

```
website-development/
├── assets/                    # Static assets directory
│   └── images/               # Image files (logos, graphics, etc.)
│
├── css/                      # Stylesheets directory
│   ├── main.css             # Compiled Tailwind CSS (generated file)
│   └── tailwind.css         # Tailwind CSS source file with custom styles
│
├── documents/                # Documentation files (excluded from build)
│   ├── README.md            # This file - project documentation
│   └── REVIEW_SUMMARY.md    # Code review and optimization summary
│
├── js/                       # JavaScript files directory
│   ├── common.js            # Shared functionality across all pages
│   └── contact.js           # Contact page specific functionality
│
├── pages/                    # HTML pages directory
│   ├── homepage.html        # Main landing page
│   ├── about.html           # About us page (team, methodology)
│   ├── services.html        # Services overview page
│   ├── contact.html         # Contact page with forms
│   ├── internship_program.html  # Internship program details
│   └── thank_you_internship.html # Thank you page after internship application
│
├── public/                   # Public assets directory
│   ├── favicon.ico          # Website favicon
│   └── manifest.json        # PWA manifest file
│
├── .gitignore               # Git ignore rules (excludes .md files from build)
├── index.html               # Entry point (redirects to homepage)
├── package.json             # NPM dependencies and scripts
└── tailwind.config.js       # Tailwind CSS configuration
```

---

## 📄 Code File Summaries

### Root Files

#### `index.html`
- **Purpose**: Entry point of the website
- **Functionality**: 
  - Redirects users to `pages/homepage.html` after 100ms
  - Displays a loading spinner during redirect
  - Includes fallback `<noscript>` tag for non-JS browsers
- **Dependencies**: `css/main.css`

---

### CSS Files (`css/`)

#### `tailwind.css`
- **Purpose**: Tailwind CSS source file with custom styles
- **Contents**:
  - Font imports (Inter, JetBrains Mono)
  - Tailwind directives (`@tailwind base`, `@tailwind components`, `@tailwind utilities`)
  - Custom CSS variables for colors, shadows, animations
  - Custom utility classes (`.btn-primary`, `.btn-secondary`, `.card`, `.input-field`)
  - Custom animations (`fadeIn`, `slideUp`)
- **Build**: Compiled to `main.css` via Tailwind CLI

#### `main.css`
- **Purpose**: Compiled Tailwind CSS output
- **Generated**: Created by running `npm run build:css`
- **Usage**: Linked in all HTML pages
- **Note**: This file is generated and should not be edited directly

---

### JavaScript Files (`js/`)

#### `common.js`
- **Purpose**: Shared JavaScript functionality used across all pages
- **Functions**:
  - `initMobileMenu()` - Toggles mobile navigation menu
  - `initSmoothScrolling()` - Enables smooth scrolling for anchor links
  - `initHeaderScrollEffect()` - Adds background opacity to header on scroll
  - `initFloatingEmail()` - Manages floating contact box (show/hide, form submission)
  - `initExpandableBios()` - Handles expandable team member bios on about page
  - `initScrollAnimations()` - Uses Intersection Observer for fade-in animations
- **Initialization**: All functions are called on `DOMContentLoaded` event
- **Usage**: Included in all HTML pages via `<script src="../js/common.js"></script>`

#### `contact.js`
- **Purpose**: Contact page specific functionality
- **Functionality**:
  - Form validation (required fields, email format)
  - Real-time field validation on blur/input events
  - Form submission handling with loading states
  - FAQ toggle functionality (expand/collapse)
  - Floating email box scroll behavior
- **Usage**: Only included in `pages/contact.html` (along with `common.js`)

---

### HTML Pages (`pages/`)

#### `homepage.html`
- **Purpose**: Main landing page
- **Sections**:
  - Hero section with CTAs
  - Services preview
  - Client trust bar
  - CTA section
  - Floating email contact box
- **Scripts**: `common.js`

#### `about.html`
- **Purpose**: Company information page
- **Sections**:
  - Company story
  - Mission & values
  - Team members (with expandable bios)
  - Methodology (4-step process)
- **Scripts**: `common.js` (includes expandable bio functionality)

#### `services.html`
- **Purpose**: Detailed services information
- **Sections**:
  - Service categories
  - Detailed service descriptions
  - Pricing/package information
- **Scripts**: `common.js`

#### `contact.html`
- **Purpose**: Contact and inquiry forms
- **Sections**:
  - Multiple contact forms (consultation, quick inquiry, internship inquiry)
  - FAQ section
  - Contact information
  - Floating contact box
- **Scripts**: `common.js`, `contact.js`

#### `internship_program.html`
- **Purpose**: Internship program details and application
- **Sections**:
  - Program overview
  - Curriculum details
  - Application form
  - Benefits and outcomes
- **Scripts**: `common.js`

#### `thank_you_internship.html`
- **Purpose**: Confirmation page after internship application
- **Sections**:
  - Success message
  - Next steps information
  - Timeline expectations
- **Scripts**: `common.js`

---

### Configuration Files

#### `tailwind.config.js`
- **Purpose**: Tailwind CSS configuration
- **Configurations**:
  - Content paths (where to scan for classes)
  - Custom color palette (primary, secondary, accent, etc.)
  - Custom font families (Inter, JetBrains Mono)
  - Custom animations and keyframes
  - Custom spacing and border radius values
  - Box shadows and transitions
- **Content Sources**: 
  - `./pages/*.{html,js}`
  - `./index.html`
  - `./js/**/*.js`

#### `package.json`
- **Purpose**: NPM package configuration
- **Scripts**:
  - `build:css` - Build CSS once
  - `watch:css` - Build CSS and watch for changes
  - `dev` - Alias for `watch:css`
- **Dependencies**: Tailwind CSS plugins and utilities
- **Dev Dependencies**: Tailwind CSS and related plugins

#### `.gitignore`
- **Purpose**: Git ignore rules
- **Excludes**:
  - `node_modules/`
  - Build outputs (`dist/`, `build/`)
  - Environment files
  - IDE files
  - OS files
  - Log files
- **Note**: `css/main.css` is kept in repo for deployment, but `.md` files in `documents/` are excluded from build process

---

### Public Assets (`public/`)

#### `favicon.ico`
- **Purpose**: Website favicon
- **Usage**: Referenced in all HTML pages via `<link rel="icon">`

#### `manifest.json`
- **Purpose**: PWA manifest for progressive web app features
- **Contents**: App name, icons, theme colors, display mode
- **Usage**: Referenced in all HTML pages via `<link rel="manifest">`

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd website-development
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build CSS**
   ```bash
   npm run build:css
   ```

4. **Start development server** (watch mode)
   ```bash
   npm run dev
   ```

### Development Workflow

1. Make changes to HTML files in `pages/`
2. Modify styles in `css/tailwind.css` or use Tailwind classes directly
3. Update JavaScript in `js/` folder
4. CSS will auto-compile if using `npm run dev`
5. Test changes in browser

---

## 🔨 Build Process

### CSS Build

The CSS build process uses Tailwind CLI to compile `tailwind.css` into `main.css`:

```bash
npm run build:css
```

**Process:**
1. Runs `@dhiwise/component-tagger` (component tagging tool)
2. Compiles Tailwind CSS from `css/tailwind.css` to `css/main.css`
3. Only includes CSS classes actually used in HTML/JS files (purge)

### Build Exclusions

**Markdown files are excluded from build:**
- All `.md` files are in `documents/` folder
- Tailwind config only scans HTML and JS files (not `.md`)
- `.gitignore` ensures documentation doesn't interfere with build
- Build process only processes: `pages/*.html`, `index.html`, `js/**/*.js`

### Production Build

For production deployment:

1. **Build CSS**
   ```bash
   npm run build:css
   ```

2. **Verify build output**
   - Check `css/main.css` exists and is updated
   - Ensure all HTML files reference correct paths

3. **Deploy**
   - Upload all files except:
     - `node_modules/`
     - `documents/` (documentation only)
     - Source files (keep only compiled `main.css`)

---

## 🛠 Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **JavaScript (ES6+)** - Vanilla JS (no frameworks)
- **Fonts**:
  - Inter (sans-serif) - Primary font
  - JetBrains Mono (monospace) - Code font

### Tailwind Plugins
- `@tailwindcss/forms` - Form styling
- `tailwindcss-animate` - Animation utilities
- `tailwindcss-elevation` - Elevation/shadow utilities
- `tailwindcss-fluid-type` - Responsive typography
- `@tailwindcss/aspect-ratio` - Aspect ratio utilities
- `@tailwindcss/container-queries` - Container query support
- `@tailwindcss/typography` - Typography plugin

---

## 📝 Development Guidelines

### CSS Guidelines

1. **Use Tailwind utility classes** for styling
2. **Custom styles** should be added to `css/tailwind.css` using `@layer`
3. **Run build** after modifying Tailwind config or source
4. **Don't edit** `css/main.css` directly (it's generated)

### JavaScript Guidelines

1. **Shared functionality** goes in `js/common.js`
2. **Page-specific functionality** should be in separate files (e.g., `js/contact.js`)
3. **Use ES6+ syntax**
4. **Ensure scripts load** before DOM manipulation (use `DOMContentLoaded`)
5. **Check for element existence** before manipulating (defensive coding)

### HTML Guidelines

1. **Use semantic HTML5** elements
2. **Include proper meta tags** for SEO
3. **Ensure all images** have alt attributes
4. **Use relative paths** for internal links
5. **Include favicon and manifest** links in all pages

### File Naming Conventions

- **HTML files**: `snake_case.html` (e.g., `internship_program.html`)
- **JavaScript files**: `camelCase.js` (e.g., `common.js`, `contact.js`)
- **CSS files**: `kebab-case.css` (e.g., `main.css`, `tailwind.css`)

### Code Organization

- **Keep related code together**
- **Separate concerns** (HTML structure, CSS styling, JS behavior)
- **Use consistent indentation** (2 spaces)
- **Comment complex logic**

---

## 🔍 File Purpose Quick Reference

| File/Folder | Purpose |
|------------|---------|
| `index.html` | Entry point, redirects to homepage |
| `pages/homepage.html` | Main landing page |
| `pages/about.html` | Company information and team |
| `pages/services.html` | Services details |
| `pages/contact.html` | Contact forms and information |
| `pages/internship_program.html` | Internship program details |
| `pages/thank_you_internship.html` | Application confirmation |
| `css/tailwind.css` | Tailwind source (edit this) |
| `css/main.css` | Compiled CSS (generated) |
| `js/common.js` | Shared functionality |
| `js/contact.js` | Contact page specific code |
| `tailwind.config.js` | Tailwind configuration |
| `package.json` | Dependencies and scripts |
| `documents/` | Documentation (excluded from build) |

---

## 📚 Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [HTML5 Semantic Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [JavaScript Best Practices](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

---

## 📄 License

MIT

---

## 👥 Contact

For questions or issues regarding this project, please contact the development team.

---

**Last Updated**: 2025
**Version**: 1.0.0
