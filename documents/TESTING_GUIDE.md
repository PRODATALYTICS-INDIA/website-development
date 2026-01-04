# Website Testing Guide

## Quick Start - Testing the Website

### Method 1: Direct File Opening (Simplest)

1. **Open the homepage directly:**
   ```bash
   # On macOS/Linux:
   open pages/homepage.html
   
   # Or navigate to the file in Finder and double-click
   ```

2. **Or open index.html:**
   ```bash
   open index.html
   ```

**Note:** Some features may not work perfectly with `file://` protocol (like form submissions). Use a local server for full functionality.

---

### Method 2: Using Python HTTP Server (Recommended)

1. **Navigate to project root:**
   ```bash
   cd /Users/rakesh_poduval/repositories/prodatalytics-repos/website-development
   ```

2. **Start a local server:**
   
   **Python 3:**
   ```bash
   python3 -m http.server 8000
   ```
   
   **Python 2 (if Python 3 not available):**
   ```bash
   python -m SimpleHTTPServer 8000
   ```

3. **Open in browser:**
   - Go to: `http://localhost:8000`
   - Or: `http://localhost:8000/pages/homepage.html`

4. **Stop the server:**
   - Press `Ctrl + C` in the terminal

---

### Method 3: Using Node.js http-server (If Node.js is installed)

1. **Install http-server globally (one-time):**
   ```bash
   npm install -g http-server
   ```

2. **Start server:**
   ```bash
   http-server -p 8000
   ```

3. **Open in browser:**
   - Go to: `http://localhost:8000`

---

### Method 4: Using VS Code Live Server Extension

1. **Install Live Server extension** in VS Code
2. **Right-click on `index.html`** or any HTML file
3. **Select "Open with Live Server"**
4. Browser will open automatically with auto-reload

---

## Testing Checklist

### ✅ Basic Functionality

- [ ] **Homepage loads correctly**
  - URL: `http://localhost:8000/pages/homepage.html`
  - Check: Hero section, navigation, footer

- [ ] **Navigation works**
  - Click all menu items
  - Check mobile menu (resize browser to mobile width)
  - Verify active page highlighting

- [ ] **All pages accessible:**
  - Homepage: `/pages/homepage.html`
  - About: `/pages/about.html`
  - Services: `/pages/services.html`
  - Contact: `/pages/contact.html`
  - Internship: `/pages/internship_program.html`
  - Thank You: `/pages/thank_you_internship.html`

### ✅ Design & Styling

- [ ] **CSS loads correctly**
  - Check browser DevTools → Network tab
  - Verify `main.css` loads without errors
  - No 404 errors for CSS files

- [ ] **Colors and themes**
  - Dark background (#111111)
  - Accent color (emerald green #10b981)
  - Text colors are readable

- [ ] **Fonts load**
  - Inter font for body text
  - JetBrains Mono for code (if any)

- [ ] **Animations work**
  - Smooth scrolling
  - Fade-in animations on scroll
  - Hover effects on buttons/links

### ✅ Responsive Design

- [ ] **Desktop view** (1920x1080 or larger)
  - Layout looks good
  - Navigation is horizontal
  - Content is well-spaced

- [ ] **Tablet view** (768px - 1024px)
  - Resize browser to tablet width
  - Check: `Cmd + Option + I` (Chrome DevTools)
  - Or: `F12` → Toggle device toolbar
  - Navigation adapts correctly

- [ ] **Mobile view** (320px - 767px)
  - Mobile menu appears
  - Content stacks vertically
  - Text is readable
  - Buttons are touch-friendly

### ✅ Interactive Features

- [ ] **Mobile menu toggle**
  - Click hamburger menu icon
  - Menu opens/closes smoothly

- [ ] **Smooth scrolling**
  - Click anchor links (if any)
  - Page scrolls smoothly to target

- [ ] **Header scroll effect**
  - Scroll down page
  - Header background becomes more opaque

- [ ] **Floating email box** (homepage)
  - Appears on homepage
  - Can be closed
  - Form submission works

- [ ] **Expandable bios** (about page)
  - Click "View Full Bio" buttons
  - Bios expand/collapse

- [ ] **Form validation** (contact page)
  - Try submitting empty form
  - Check required field validation
  - Email format validation

- [ ] **FAQ toggles** (contact page)
  - Click FAQ questions
  - Answers expand/collapse

### ✅ Browser Compatibility

Test in multiple browsers:
- [ ] **Chrome/Edge** (Chromium)
- [ ] **Firefox**
- [ ] **Safari** (macOS)
- [ ] **Mobile Safari** (iOS)
- [ ] **Chrome Mobile** (Android)

---

## Testing Tools & Browser DevTools

### Chrome DevTools (Recommended)

1. **Open DevTools:**
   - `Cmd + Option + I` (macOS)
   - `F12` or `Ctrl + Shift + I` (Windows/Linux)

2. **Responsive Design Mode:**
   - `Cmd + Shift + M` (macOS)
   - `Ctrl + Shift + M` (Windows/Linux)
   - Test different device sizes

3. **Console Tab:**
   - Check for JavaScript errors
   - Look for red error messages

4. **Network Tab:**
   - Check if all files load
   - Verify CSS and JS files load correctly
   - Check for 404 errors

5. **Elements Tab:**
   - Inspect HTML structure
   - Check CSS styles applied
   - Test CSS changes in real-time

### Firefox DevTools

- Similar to Chrome DevTools
- `F12` to open
- Responsive Design Mode: `Cmd + Option + M`

### Safari Web Inspector

- Enable in Safari Preferences → Advanced
- `Cmd + Option + I` to open

---

## Common Issues & Solutions

### Issue: CSS not loading / Styles look broken

**Solution:**
1. Rebuild CSS:
   ```bash
   npm run build:css
   ```
2. Check browser console for errors
3. Verify `css/main.css` exists and has content

### Issue: JavaScript not working

**Solution:**
1. Check browser console for errors
2. Verify `js/common.js` and `js/contact.js` exist
3. Check file paths in HTML (should be `../js/common.js` for pages)

### Issue: Images not loading

**Solution:**
1. Check image paths in HTML
2. Verify images exist in `assets/images/` folder
3. Check browser console for 404 errors

### Issue: Forms not submitting

**Solution:**
1. Must use local server (not `file://` protocol)
2. Check form action URLs
3. Verify form validation JavaScript is working

### Issue: Fonts not loading

**Solution:**
1. Check internet connection (fonts load from Google Fonts CDN)
2. Verify font links in HTML `<head>`
3. Check browser console for network errors

---

## Performance Testing

### Check Page Load Speed

1. **Chrome DevTools → Network Tab:**
   - Refresh page
   - Check load time
   - Look for slow-loading resources

2. **Lighthouse (Chrome DevTools):**
   - Open DevTools → Lighthouse tab
   - Run audit for:
     - Performance
     - Accessibility
     - Best Practices
     - SEO

### Check File Sizes

```bash
# Check CSS file size
ls -lh css/main.css

# Check HTML file sizes
ls -lh pages/*.html

# Check JS file sizes
ls -lh js/*.js
```

---

## Quick Test Commands

### Start Local Server (Python)
```bash
cd /Users/rakesh_poduval/repositories/prodatalytics-repos/website-development
python3 -m http.server 8000
```

### Rebuild CSS (if changes made)
```bash
npm run build:css
```

### Watch CSS for changes (auto-rebuild)
```bash
npm run dev
```

### Open in Browser (macOS)
```bash
open http://localhost:8000/pages/homepage.html
```

---

## Recommended Testing Workflow

1. **Start local server:**
   ```bash
   python3 -m http.server 8000
   ```

2. **Open homepage:**
   - Go to `http://localhost:8000/pages/homepage.html`

3. **Test navigation:**
   - Click through all menu items
   - Test mobile menu (resize browser)

4. **Test responsive design:**
   - Use browser DevTools responsive mode
   - Test mobile, tablet, desktop sizes

5. **Test interactive features:**
   - Forms, buttons, animations
   - Check console for errors

6. **Test in multiple browsers:**
   - Chrome, Firefox, Safari

---

## Next Steps

After testing, if you find issues:
1. Note the issue and page where it occurs
2. Check browser console for errors
3. Verify file paths and references
4. Rebuild CSS if styling issues: `npm run build:css`

---

**Happy Testing! 🚀**

