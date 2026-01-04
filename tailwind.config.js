module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#000000", // black - Authoritative foundation, technical sophistication
        secondary: "#1a1a1a", // gray-900 - Subtle depth, content separation
        accent: "#10b981", // emerald-500 - Growth focus, conversion clarity
        
        // Background Colors
        background: "#111111", // gray-950 - Professional canvas, reduced eye strain
        surface: "#2a2a2a", // gray-800 - Card elevation, content grouping
        
        // Text Colors
        "text-primary": "#ffffff", // white - Maximum readability, clear hierarchy
        "text-secondary": "#a1a1aa", // gray-400 - Supporting information, visual rest
        
        // Status Colors
        success: "#059669", // emerald-600 - Positive confirmation, completed actions
        warning: "#f59e0b", // amber-500 - Important notices, attention without alarm
        error: "#ef4444", // red-500 - Clear problem indication, helpful guidance
        
        // Border Colors
        border: "#2a2a2a", // gray-800 - Minimal borders for form inputs and divisions
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
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        glow: '0 0 20px rgba(16, 185, 129, 0.2)',
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