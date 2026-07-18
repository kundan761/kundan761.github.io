/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        display: ['Inter', 'sans-serif'], // Assuming 'Inter' for display, similar to the original design
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          surface: 'var(--bg-surface)',
          surface2: 'var(--bg-surface-2)',
          card: 'var(--bg-card)',
          cardHover: 'var(--bg-card-hover)',
        },
        border: {
          DEFAULT: 'var(--border)',
          accent: 'var(--border-accent)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          light: 'var(--accent-light)',
          dark: 'var(--accent-dark)',
          glow: 'var(--accent-glow)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          grey: '#9B9DA4'
        },
        primary: 'var(--accent)',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '20px',
        xl: '28px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.4)',
        accent: '0 0 30px rgba(249,115,22,0.2)',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'pulse-green': 'pulse-green 2s ease-in-out infinite',
        'wiggle': 'wiggle 2.5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-green': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34,197,94,0.4)' },
          '50%': { boxShadow: '0 0 0 5px rgba(34,197,94,0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(15deg)' },
        }
      }
    },
  },
  plugins: [],
}
