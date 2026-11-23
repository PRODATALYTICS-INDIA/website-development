/**
 * Common JavaScript functionality for PRODATALYTICS website
 */

const THEME_STORAGE_KEY = 'pd-theme';

const THEME_CHOICES = ['light', 'auto', 'dark'];
const THEME_DEFAULT = 'light';

function getStoredTheme() {
    try {
        const stored = localStorage.getItem(THEME_STORAGE_KEY);
        if (THEME_CHOICES.indexOf(stored) !== -1) return stored;
    } catch (e) {
        /* ignore */
    }
    return THEME_DEFAULT;
}

function resolveTheme(choice) {
    if (choice === 'auto') {
        const dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return dark ? 'dark' : 'light';
    }
    return choice === 'dark' ? 'dark' : 'light';
}

function applyTheme(choice) {
    const pref = THEME_CHOICES.indexOf(choice) !== -1 ? choice : THEME_DEFAULT;
    document.documentElement.setAttribute('data-theme', resolveTheme(pref));
    try {
        localStorage.setItem(THEME_STORAGE_KEY, pref);
    } catch (e) {
        /* ignore */
    }
    syncThemeToggles(pref);
}

function syncThemeToggles(pref) {
    document.querySelectorAll('[data-theme-choice]').forEach((btn) => {
        btn.setAttribute('aria-pressed', btn.dataset.themeChoice === pref ? 'true' : 'false');
    });
}

function initThemeToggle() {
    applyTheme(getStoredTheme());

    document.querySelectorAll('[data-theme-choice]').forEach((btn) => {
        btn.addEventListener('click', () => applyTheme(btn.dataset.themeChoice));
    });

    // In Auto mode, follow live changes to the system theme
    if (window.matchMedia) {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = () => {
            if (getStoredTheme() === 'auto') applyTheme('auto');
        };
        if (mq.addEventListener) mq.addEventListener('change', onChange);
        else if (mq.addListener) mq.addListener(onChange);
    }
}

// Mobile menu toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        const setMenuOpen = (open) => {
            mobileMenu.classList.toggle('hidden', !open);
            mobileMenuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        };

        mobileMenuBtn.addEventListener('click', () => {
            setMenuOpen(mobileMenu.classList.contains('hidden'));
        });

        // Close menu when a nav link is clicked (same page or navigation)
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                setMenuOpen(false);
            });
        });

        // Close menu when clicking outside (not on button or menu)
        document.addEventListener('click', (e) => {
            if (mobileMenu.classList.contains('hidden')) return;
            if (mobileMenuBtn.contains(e.target) || mobileMenu.contains(e.target)) return;
            setMenuOpen(false);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                setMenuOpen(false);
                mobileMenuBtn.focus();
            }
        });
    }
}

// Resources dropdown (Case Studies + Insights)
function initNavDropdowns() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    if (!dropdowns.length) return;

    const closeAll = (except) => {
        dropdowns.forEach((dropdown) => {
            if (except && dropdown === except) return;
            const trigger = dropdown.querySelector('.nav-dropdown-trigger');
            const menu = dropdown.querySelector('.nav-dropdown-menu');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
            if (menu) menu.classList.add('hidden');
        });
    };

    dropdowns.forEach((dropdown) => {
        const trigger = dropdown.querySelector('.nav-dropdown-trigger');
        const menu = dropdown.querySelector('.nav-dropdown-menu');
        if (!trigger || !menu) return;

        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const open = trigger.getAttribute('aria-expanded') === 'true';
            closeAll();
            if (!open) {
                trigger.setAttribute('aria-expanded', 'true');
                menu.classList.remove('hidden');
            }
        });
    });

    dropdowns.forEach((dropdown) => {
        const trigger = dropdown.querySelector('.nav-dropdown-trigger');
        const menu = dropdown.querySelector('.nav-dropdown-menu');
        if (!trigger || !menu) return;
        const items = () => Array.from(menu.querySelectorAll('a'));

        trigger.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                closeAll();
                trigger.setAttribute('aria-expanded', 'true');
                menu.classList.remove('hidden');
                const first = items()[0];
                if (first) first.focus();
            }
        });

        menu.addEventListener('keydown', (e) => {
            const list = items();
            const i = list.indexOf(document.activeElement);
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                list[(i + 1) % list.length].focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                list[(i - 1 + list.length) % list.length].focus();
            }
        });
    });

    document.addEventListener('click', () => closeAll());
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        const openTrigger = document.querySelector('.nav-dropdown-trigger[aria-expanded="true"]');
        closeAll();
        if (openTrigger) openTrigger.focus();
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hash = this.getAttribute('href');
            if (!hash || hash === '#') return;
            let target = null;
            try {
                target = document.querySelector(hash);
            } catch (err) {
                return;
            }
            if (!target) return;
            e.preventDefault();
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            target.scrollIntoView({
                behavior: reduceMotion ? 'auto' : 'smooth',
                block: 'start'
            });
        });
    });
}

// Header scroll effect
function initHeaderScrollEffect() {
    const header = document.querySelector('header.site-header') || document.querySelector('header');
    if (!header) return;

    const update = () => {
        if (window.scrollY > 100) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
}

// Floating email contact box (FormSubmit posts; do not intercept submit)
function initFloatingEmail() {
    const floatingEmail = document.getElementById('floating-email');
    const closeFloating = document.getElementById('close-floating');

    if (closeFloating && floatingEmail) {
        closeFloating.addEventListener('click', () => {
            floatingEmail.style.display = 'none';
        });
    }

    // Brief submit UX for homepage/contact floating forms that use FormSubmit
    ['quick-contact-form', 'floating-contact-form', 'consultation-form'].forEach((formId) => {
        const form = document.getElementById(formId);
        if (!form || !form.getAttribute('action')) return;

        form.addEventListener('submit', () => {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (!submitBtn) return;
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 3000);
        });
    });
}

// Show thank-you banner after FormSubmit redirect (#thank-you)
function initThankYouBanner() {
    const thankYouBanner = document.getElementById('thank-you');
    if (thankYouBanner && window.location.hash === '#thank-you') {
        thankYouBanner.classList.remove('hidden');
    }
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe elements that should animate
    document.querySelectorAll('.group, .space-y-12 > div').forEach(el => {
        observer.observe(el);
    });
}

// Initialize all common functionality
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initMobileMenu();
    initNavDropdowns();
    initSmoothScrolling();
    initHeaderScrollEffect();
    initFloatingEmail();
    initThankYouBanner();
    initScrollAnimations();
});
