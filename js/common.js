/**
 * Common JavaScript functionality for PRODATALYTICS website
 */

// Mobile menu toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Header scroll effect
function initHeaderScrollEffect() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('bg-black/40');
            } else {
                header.classList.remove('bg-black/40');
            }
        }
    });
}

// Floating email contact box
function initFloatingEmail() {
    const floatingEmail = document.getElementById('floating-email');
    const closeFloating = document.getElementById('close-floating');
    const quickContactForm = document.getElementById('quick-contact-form');

    if (closeFloating && floatingEmail) {
        closeFloating.addEventListener('click', () => {
            floatingEmail.style.display = 'none';
        });
    }

    if (quickContactForm) {
        quickContactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We\'ll get back to you soon.');
            quickContactForm.reset();
            if (floatingEmail) {
                floatingEmail.style.display = 'none';
            }
        });
    }
}

// Expandable team bios
function initExpandableBios() {
    const expandBioButtons = document.querySelectorAll('.expand-bio');
    
    expandBioButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const bioElement = document.getElementById(targetId);
            
            if (bioElement) {
                if (bioElement.classList.contains('hidden')) {
                    bioElement.classList.remove('hidden');
                    button.textContent = 'Hide Bio ↑';
                } else {
                    bioElement.classList.add('hidden');
                    button.textContent = 'View Full Bio →';
                }
            }
        });
    });
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
    initMobileMenu();
    initSmoothScrolling();
    initHeaderScrollEffect();
    initFloatingEmail();
    initExpandableBios();
    initScrollAnimations();
});

