/**
 * Contact page specific JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    const floatingEmail = document.getElementById('floating-email');
    
    // Form validation enhancement
    document.querySelectorAll('input[required], textarea[required], select[required]').forEach(field => {
        field.addEventListener('blur', () => {
            if (!field.value.trim()) {
                field.classList.add('border-error');
            } else {
                field.classList.remove('border-error');
            }
        });

        field.addEventListener('input', () => {
            if (field.value.trim()) {
                field.classList.remove('border-error');
            }
        });
    });

    // Email validation
    document.querySelectorAll('input[type="email"]').forEach(emailField => {
        emailField.addEventListener('blur', () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailField.value && !emailRegex.test(emailField.value)) {
                emailField.classList.add('border-error');
            } else {
                emailField.classList.remove('border-error');
            }
        });
    });

    // Auto-hide floating email after 30 seconds
    if (floatingEmail) {
        setTimeout(() => {
            if (floatingEmail.style.display !== 'none') {
                floatingEmail.style.opacity = '0.7';
            }
        }, 30000);

        // Show floating email on scroll
        let scrollTimer = null;
        window.addEventListener('scroll', () => {
            if (scrollTimer !== null) {
                clearTimeout(scrollTimer);
            }
            
            scrollTimer = setTimeout(() => {
                if (window.scrollY > 1000 && floatingEmail) {
                    floatingEmail.style.opacity = '1';
                }
            }, 150);
        });
    }

    // Form submission handlers
    const forms = [
        'consultation-form',
        'floating-contact-form'
    ];

    forms.forEach(formId => {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', (e) => {
                const submitBtn = form.querySelector('button[type="submit"]');
                if (submitBtn) {
                    const originalText = submitBtn.textContent;
                    
                    submitBtn.textContent = 'Sending...';
                    submitBtn.disabled = true;
                    
                    // Re-enable after 3 seconds (in case of issues)
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }, 3000);
                }
            });
        }
    });

    // FAQ Toggle functionality
    document.querySelectorAll('.faq-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const content = document.getElementById(targetId);
            const icon = button.querySelector('svg');
            
            if (content && icon) {
                // Toggle content visibility
                content.classList.toggle('hidden');
                
                // Rotate icon
                if (content.classList.contains('hidden')) {
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    icon.style.transform = 'rotate(180deg)';
                }
            }
        });
    });
});

