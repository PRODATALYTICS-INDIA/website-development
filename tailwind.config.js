/** Enable Tailwind opacity modifiers (e.g. bg-accent/10) with CSS custom properties. */
function withAlpha(variable) {
  return `color-mix(in srgb, var(${variable}) calc(<alpha-value> * 100%), transparent)`;
}

module.exports = {
  content: ["./pages/**/*.{html,js}", "./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors (CSS vars — flip with data-theme)
        primary: withAlpha("--color-primary"),
        secondary: withAlpha("--color-secondary"),
        accent: withAlpha("--color-accent"),

        // Background Colors
        background: withAlpha("--color-background"),
        surface: withAlpha("--color-surface"),

        // Text Colors
        "text-primary": withAlpha("--color-text-primary"),
        "text-secondary": withAlpha("--color-text-secondary"),

        // Status Colors
        success: withAlpha("--color-success"),
        warning: withAlpha("--color-warning"),
        error: withAlpha("--color-error"),

        // Border Colors
        border: withAlpha("--color-border"),
      },
      boxShadow: {
        card: "var(--shadow-card)",
        glow: "0 0 20px rgba(16, 185, 129, 0.2)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      transitionDuration: {
        fast: '200ms',
        normal: '300ms',
        slow: '400ms',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-in-out',
        'slide-up': 'slideUp 400ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}
