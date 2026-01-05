# PRODATALYTICS Website - Project Documentation

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Folder Structure](#folder-structure)
- [Code File Summaries](#code-file-summaries)
- [Getting Started](#getting-started)
- [Build Process](#build-process)
- [Technologies Used](#technologies-used)
- [Development Guidelines](#development-guidelines)
- [Centralized Styling System](#centralized-styling-system)
- [Deployment](#deployment)
- [Recent Updates](#recent-updates)

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
│   ├── REVIEW_SUMMARY.md    # Code review and optimization summary
│   ├── STYLING_GUIDE.md     # Centralized styling system guide
│   ├── TESTING_GUIDE.md     # Testing documentation
│   └── TODOLIST.md          # Removed sections and future enhancements
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
├── deployment/              # Deployment scripts and documentation
│   ├── deploy.sh           # Production deployment script
│   ├── deploy-dev.sh       # Dev/staging deployment script
│   ├── DEPLOYMENT_GUIDE.md # Complete deployment instructions
│   ├── DEV_DEPLOYMENT_GUIDE.md # Dev deployment guide
│   └── QUICK_START_DEPLOY.md # Quick start guide
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
- **Purpose**: Tailwind CSS source file with custom styles and reusable component classes
- **Contents**:
  - Font imports (Inter, JetBrains Mono)
  - Tailwind directives (`@tailwind base`, `@tailwind components`, `@tailwind utilities`)
  - Custom CSS variables for colors, shadows, animations
  - **Reusable component classes** in `@layer components`:
    - Hero sections (`.hero-section`, `.hero-heading`, `.hero-content`, etc.)
    - CTA sections (`.cta-section`, `.cta-heading`, `.cta-buttons`, etc.)
    - Key indicators (`.key-indicators-grid`, `.key-indicator-value`, etc.)
    - Buttons (`.btn-primary`, `.btn-secondary`, `.btn-small`)
    - Cards (`.card`, `.card-hover`, `.card-title`, etc.)
    - Section headings and containers
    - Form elements (`.form-input`, `.form-label`, etc.)
    - Navigation components
  - Custom animations (`fadeIn`, `slideUp`)
- **Build**: Compiled to `main.css` via Tailwind CLI
- **See**: `documents/STYLING_GUIDE.md` for complete component documentation

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
  - `build` - Build CSS for production
  - `deploy` - Run deployment script
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

1. **Use component classes** from `@layer components` in `tailwind.css` for consistency
2. **Refer to `documents/STYLING_GUIDE.md`** for available component classes
3. **Use Tailwind utility classes** for one-off styling
4. **Custom styles** should be added to `css/tailwind.css` using `@layer`
5. **Run build** after modifying Tailwind config or source: `npm run build:css`
6. **Don't edit** `css/main.css` directly (it's generated)
7. **Add new component classes** to `@layer components` when patterns are repeated 2+ times

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

## 🎨 Centralized Styling System

The project uses a centralized styling system with reusable component classes defined in `css/tailwind.css`. This ensures consistency across all pages and reduces manual changes.

### Key Benefits
- **Consistency**: Same styling patterns across all pages
- **Maintainability**: Change once, update everywhere
- **Less Repetition**: No need to repeat long class strings
- **Documentation**: Complete guide in `documents/STYLING_GUIDE.md`

### Available Component Classes

#### Hero Sections
- `.hero-section` - Main hero container
- `.hero-overlay` - Dark background overlay
- `.hero-heading` - Hero heading with responsive sizing
- `.hero-content` - Content container

#### CTA Sections
- `.cta-section` - CTA section with accent background
- `.cta-heading` - CTA heading (centered, no-wrap)
- `.cta-buttons` - Button container

#### Buttons
- `.btn-primary` - Primary action button
- `.btn-secondary` - Secondary/outlined button
- `.btn-small` - Smaller button variant

#### Cards
- `.card` - Base card styling
- `.card-hover` - Card with hover effects
- `.card-title` - Card title styling

#### Key Indicators
- `.key-indicators-grid` - Grid for metrics/indicators
- `.key-indicator-value` - Large number display
- `.key-indicator-label` - Label text

### Usage Example

```html
<!-- Hero Section -->
<section class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-content">
        <h1 class="hero-heading">
            Title with <span class="hero-heading-accent">accent</span>
        </h1>
    </div>
</section>

<!-- CTA Section -->
<section class="cta-section">
    <div class="cta-container">
        <h2 class="cta-heading">Ready to collaborate with us ?</h2>
        <div class="cta-buttons">
            <a href="#" class="btn-primary">Connect with us</a>
            <a href="#" class="btn-secondary">Explore services</a>
        </div>
    </div>
</section>
```

**For complete documentation, see `documents/STYLING_GUIDE.md`**

---

## 🚀 Deployment

The website can be deployed to `prodatalytics.com` using various hosting options.

### 🎯 Quick Dev/Staging Deployment (For Client Review)

**Recommended: Netlify (Free, Easy, Fast)**

1. **Prepare for deployment:**
   ```bash
   ./deployment/deploy-dev.sh
   ```
   Or manually:
   ```bash
   npm install
   npm run build:css
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click **"Add new site"** → **"Deploy manually"**
   - Drag and drop your entire project folder
   - Your site will be live in ~30 seconds at a URL like: `https://random-name-12345.netlify.app`
   - Share this URL with your client for review

3. **For automatic deployments:**
   - Push code to GitHub
   - Connect GitHub repo to Netlify
   - Every push automatically deploys

**📚 Full dev deployment guide:** See `deployment/DEV_DEPLOYMENT_GUIDE.md`

---

### Production Deployment

1. **Prepare deployment package:**
   ```bash
   ./deployment/deploy.sh
   ```
   Or use npm:
   ```bash
   npm run deploy
   ```

2. **This creates a `deploy/` directory** with all production-ready files:
   - Compiled CSS
   - All HTML pages
   - JavaScript files
   - Assets and images
   - `.htaccess` for Apache servers
   - Deployment information

### Deployment Options

The website is a static site and can be deployed to:

1. **Traditional Web Hosting** (cPanel, FTP)
   - Upload `deploy/` folder contents to `public_html/`
   - Configure DNS
   - Set up SSL certificate

2. **Netlify** (Recommended for ease)
   - Drag and drop `deploy/` folder
   - Automatic SSL
   - Free tier available

3. **Vercel**
   - Deploy via CLI or Git integration
   - Automatic SSL
   - Free tier available

4. **GitHub Pages**
   - Push to GitHub repository
   - Enable Pages in settings
   - Free hosting

5. **AWS S3 + CloudFront**
   - Upload to S3 bucket
   - Configure CloudFront distribution
   - Enterprise-grade hosting

### Requirements

- ✅ Domain: `prodatalytics.com` (purchased)
- ✅ Node.js and npm (for building)
- ✅ Web hosting account (choose one option above)
- ✅ DNS access (to point domain to hosting)

### Detailed Instructions

**For complete deployment guide with step-by-step instructions for each hosting option, see:**
- 📚 `deployment/DEPLOYMENT_GUIDE.md`

The deployment guide includes:
- Detailed setup for each hosting option
- DNS configuration instructions
- SSL certificate setup
- Post-deployment checklist
- Troubleshooting guide

### Deployment Script Features

The `deployment/deploy.sh` script:
- ✅ Checks prerequisites (Node.js, npm)
- ✅ Installs dependencies
- ✅ Builds CSS for production
- ✅ Creates optimized deployment package
- ✅ Generates `.htaccess` for Apache
- ✅ Creates deployment summary
- ✅ Excludes development files

---

## 📝 Recent Updates

### Styling System (Latest)
- ✅ **Centralized component classes** added to `css/tailwind.css`
- ✅ **Styling guide** created in `documents/STYLING_GUIDE.md`
- ✅ **Reusable components** for hero sections, CTAs, buttons, cards, and more

### Page Updates
- ✅ **Hero sections** standardized across all pages (Homepage, Services, About, Contact)
- ✅ **Key indicators** added to hero sections (24/7 Support, Response Time, etc.)
- ✅ **CTA sections** standardized with consistent styling
- ✅ **Email updated** from `info@prodatalytics.com` to `hello@prodatalytics.com` across all pages
- ✅ **Content updates** to About page (company story, mission & values)
- ✅ **Section removals** documented in `documents/TODOLIST.md`

### Design Consistency
- ✅ **Text alignment** standardized (headings centered, descriptions left-aligned)
- ✅ **Dark overlay** added to hero sections for consistent appearance
- ✅ **Font sizing** optimized for readability and one-line display
- ✅ **Button styles** unified across all pages

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
| `deployment/deploy.sh` | Production deployment script |
| `deployment/deploy-dev.sh` | Dev/staging deployment script |
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

**Last Updated**: January 2025
**Version**: 1.1.0

### Changelog

#### v1.1.0 (January 2025)
- Added centralized styling system with reusable component classes
- Created comprehensive styling guide documentation
- Standardized hero sections across all pages
- Added key indicators to hero sections
- Unified CTA sections with consistent styling
- Updated contact email to hello@prodatalytics.com
- Improved design consistency and alignment
- Documented removed sections in TODOLIST.md

#### v1.0.0 (Initial Release)
- Initial website structure
- Basic pages and functionality
- Tailwind CSS integration
