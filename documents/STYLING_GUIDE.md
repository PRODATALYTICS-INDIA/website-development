# PRODATALYTICS Styling Guide

This document provides guidelines for using centralized styling components across the website. Use these classes to maintain consistency and reduce manual changes.

## How It Works

All component classes are defined in `css/tailwind.css` under the `@layer components` section. When you run `npm run build:css` or `npm run watch:css`, these classes are compiled into `css/main.css` and can be used directly in your HTML.

**Important**: After adding or modifying component classes in `tailwind.css`, you must rebuild the CSS:
```bash
npm run build:css
# or for development with watch mode:
npm run watch:css
```

## Table of Contents
- [Hero Sections](#hero-sections)
- [Key Indicators](#key-indicators)
- [CTA Sections](#cta-sections)
- [Buttons](#buttons)
- [Cards](#cards)
- [Section Headings](#section-headings)
- [Form Elements](#form-elements)

---

## Hero Sections

### Basic Hero Section Structure
```html
<section class="hero-section">
    <!-- Dark Background Overlay -->
    <div class="hero-overlay"></div>
    
    <!-- Animated Background -->
    <div class="hero-animated-bg">
        <!-- Animated circles here -->
    </div>
    
    <!-- Data Visualization Background (optional) -->
    <div class="data-viz-bg">
        <!-- SVG visualization here -->
    </div>
    
    <div class="hero-content">
        <h1 class="hero-heading">
            Your heading with <span class="hero-heading-accent">accent text</span>
        </h1>
        <!-- Content here -->
    </div>
</section>
```

### Classes
- `.hero-section` - Main hero section container
- `.hero-overlay` - Dark background overlay (bg-black/40)
- `.hero-animated-bg` - Container for animated background elements
- `.hero-content` - Content container with proper spacing
- `.hero-heading` - Main hero heading (centered, responsive sizing)
- `.hero-heading-accent` - Accent color for highlighted text in headings

---

## Key Indicators

### Usage
```html
<div class="key-indicators-grid">
    <div class="key-indicator-item">
        <div class="key-indicator-value">24/7</div>
        <div class="key-indicator-label">IST Support</div>
    </div>
    <!-- More indicators -->
</div>
```

### Classes
- `.key-indicators-grid` - Grid container (2 cols mobile, 4 cols desktop)
- `.key-indicator-item` - Individual indicator container
- `.key-indicator-value` - Large number/value (accent color)
- `.key-indicator-label` - Label text below value

---

## CTA Sections

### Usage
```html
<section class="cta-section">
    <div class="cta-container">
        <div class="cta-content">
            <h2 class="cta-heading">Ready to collaborate with us ?</h2>
            <p class="cta-description">Your description text here.</p>
            <div class="cta-buttons">
                <a href="#" class="btn-primary">Primary Action</a>
                <a href="#" class="btn-secondary">Secondary Action</a>
            </div>
        </div>
    </div>
</section>
```

### Classes
- `.cta-section` - CTA section with accent background
- `.cta-container` - Container with padding
- `.cta-content` - Content wrapper (max-width constrained)
- `.cta-heading` - CTA heading (centered, no-wrap)
- `.cta-description` - Description paragraph
- `.cta-buttons` - Button container (flex, responsive)

---

## Buttons

### Usage
```html
<!-- Primary Button -->
<a href="#" class="btn-primary">Connect with us</a>

<!-- Secondary Button -->
<a href="#" class="btn-secondary">Explore services</a>

<!-- Small Button -->
<a href="#" class="btn-primary btn-small">Small Button</a>
```

### Classes
- `.btn-primary` - Primary action button (accent background, white text)
- `.btn-secondary` - Secondary button (outlined, surface background)
- `.btn-small` - Smaller button variant (use with btn-primary or btn-secondary)

---

## Cards

### Usage
```html
<div class="card card-hover">
    <div class="card-icon-container">
        <svg class="card-icon">...</svg>
    </div>
    <h3 class="card-title">Card Title</h3>
    <p class="card-description">Card description text.</p>
</div>
```

### Classes
- `.card` - Base card styling
- `.card-hover` - Adds hover scale effect
- `.card-icon-container` - Icon wrapper with accent background
- `.card-icon` - Icon styling
- `.card-title` - Standard card title
- `.card-title-large` - Larger card title (for feature cards)
- `.card-description` - Card description text

---

## Section Headings

### Usage
```html
<!-- Centered Heading -->
<h2 class="section-heading">Section Title</h2>
<p class="section-description-centered">Centered description text.</p>

<!-- Left-aligned Heading -->
<h2 class="section-heading-left">Section Title</h2>
<p class="section-description">Left-aligned description text.</p>
```

### Classes
- `.section-heading` - Centered section heading
- `.section-heading-left` - Left-aligned section heading
- `.section-description` - Left-aligned description
- `.section-description-centered` - Centered description with max-width

---

## Section Containers

### Usage
```html
<section class="section">
    <div class="section-container">
        <div class="section-content">
            <!-- Content here -->
        </div>
    </div>
</section>

<!-- Alternative background -->
<section class="section-alt">
    <!-- Same structure -->
</section>
```

### Classes
- `.section` - Standard section (py-20)
- `.section-alt` - Section with alternative background (bg-secondary/50)
- `.section-container` - Container with padding
- `.section-content` - Content wrapper (max-w-7xl)

### Container Widths
- `.container-constrained` - max-w-7xl (for wide content)
- `.container-medium` - max-w-4xl (for medium content)
- `.container-small` - max-w-2xl (for narrow content)

---

## Form Elements

### Usage
```html
<form>
    <label class="form-label">Field Label</label>
    <input type="text" class="form-input" />
    
    <label class="form-label">Select Field</label>
    <select class="form-select">
        <option>Option 1</option>
    </select>
    
    <label class="form-label">Textarea</label>
    <textarea class="form-textarea" rows="4"></textarea>
</form>
```

### Classes
- `.form-label` - Form field label
- `.form-input` - Text input styling
- `.form-select` - Select dropdown styling
- `.form-textarea` - Textarea styling

---

## Navigation

### Usage
```html
<a href="#" class="nav-link">Regular Link</a>
<a href="#" class="nav-link-active">Active Link</a>
<a href="#" class="nav-button">Button Link</a>
```

### Classes
- `.nav-link` - Regular navigation link
- `.nav-link-active` - Active navigation link (accent color)
- `.nav-button` - Navigation button (accent background)

---

## Color Utilities

### Accent Highlighting
Use `.text-accent-highlight` or `.hero-heading-accent` for accent-colored text:
```html
<span class="text-accent-highlight">highlighted text</span>
```

---

## Best Practices

1. **Always use component classes** instead of repeating utility classes
2. **Combine classes** when needed (e.g., `card card-hover`)
3. **Use semantic HTML** with appropriate component classes
4. **Maintain consistency** - if a pattern is used 2+ times, consider creating a component class
5. **Add new components to `tailwind.css`** under `@layer components` section
6. **Rebuild CSS** after adding/modifying components: `npm run build:css`

## Adding New Components

When you identify a repeated pattern:

1. **Add the component class** to `css/tailwind.css` in the `@layer components` section
2. **Use `@apply` directive** to compose from Tailwind utilities
3. **Document it** in this guide
4. **Rebuild CSS**: Run `npm run build:css` or `npm run watch:css`
5. **Use the class** across all pages where the pattern appears

Example:
```css
@layer components {
  .my-new-component {
    @apply bg-surface rounded-lg p-6 border border-border;
  }
}
```

---

## Migration Guide

When updating existing pages:
1. Replace repeated utility class combinations with component classes
2. Keep custom styling only when truly unique
3. Test responsive behavior after migration
4. Update this guide when adding new components

---

## Examples

### Complete Hero Section
```html
<section class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-animated-bg">
        <div class="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute top-40 right-20 w-24 h-24 bg-success/20 rounded-full blur-lg animate-pulse delay-1000"></div>
    </div>
    <div class="hero-content">
        <h1 class="hero-heading">
            Title with <span class="hero-heading-accent">accent</span>
        </h1>
        <div class="key-indicators-grid">
            <!-- Indicators here -->
        </div>
    </div>
</section>
```

### Complete CTA Section
```html
<section class="cta-section">
    <div class="cta-container">
        <div class="cta-content">
            <h2 class="cta-heading">Ready to collaborate with us ?</h2>
            <p class="cta-description">Description text here.</p>
            <div class="cta-buttons">
                <a href="contact.html" class="btn-primary">Connect with us</a>
                <a href="services.html" class="btn-secondary">Explore services</a>
            </div>
        </div>
    </div>
</section>
```

