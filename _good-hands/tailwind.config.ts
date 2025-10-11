import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        porcelain: {
          DEFAULT: '#f8f6f3',
          dark: '#f0ebe5',
          darker: '#e8e0d8',
        },
        ink: {
          DEFAULT: '#2c2c2c',
          light: '#404040',
          lighter: '#525252',
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#e6c862',
          dark: '#b8941f',
        },
        harbor: {
          DEFAULT: '#4a5568',
          light: '#718096',
          dark: '#2d3748',
        },
        stone: {
          DEFAULT: '#8b8680',
          light: '#a8a39e',
          dark: '#6e6964',
        },
        sage: {
          DEFAULT: '#a8b5a5',
          light: '#c2cebf',
          dark: '#8e9c8b',
        },
        rose: {
          DEFAULT: '#d4a5a5',
          light: '#e6c8c8',
          dark: '#c28282',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      fontSize: {
        // Body and small text
        'xs': ['0.75rem', { lineHeight: '1.5' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.5' }],     // 14px - Small/captions
        'base': ['1rem', { lineHeight: '1.6' }],       // 16px - Body text
        'lg': ['1.125rem', { lineHeight: '1.6' }],     // 18px
        'xl': ['1.25rem', { lineHeight: '1.4' }],      // 20px - H4
        // Headings
        '2xl': ['1.5rem', { lineHeight: '1.3' }],      // 24px
        '3xl': ['1.75rem', { lineHeight: '1.3' }],     // 28px - H3
        '4xl': ['2rem', { lineHeight: '1.2' }],        // 32px
        '5xl': ['2.5rem', { lineHeight: '1.2' }],      // 40px - H2
        '6xl': ['3rem', { lineHeight: '1.1' }],        // 48px
        '7xl': ['3.5rem', { lineHeight: '1.1' }],      // 56px - H1
        '8xl': ['4rem', { lineHeight: '1.1' }],        // 64px
        '9xl': ['4.5rem', { lineHeight: '1.1' }],      // 72px
      },
      spacing: {
        // 8px grid system
        'xs': '4px',    // 0.5 (fine adjustments)
        'sm': '8px',    // 1 (small gaps)
        'md': '16px',   // 2 (standard card padding)
        'lg': '24px',   // 3 (gutter spacing)
        'xl': '32px',   // 4 (section padding)
        '2xl': '48px',  // 6 (hero padding)
        '3xl': '64px',  // 8 (large separations)
      },
      animation: {
        'fade-in': 'fadeIn 250ms ease-in-out',
        'scale-in': 'scaleIn 250ms ease-in-out',
        'slide-up': 'slideUp 250ms ease-out',
        'slide-in': 'slideIn 250ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      transitionDuration: {
        '150': '150ms',  // Button hover states
        '200': '200ms',  // Modal animations
        '250': '250ms',  // Section reveals
        '300': '300ms',  // Default
      },
      scale: {
        '103': '1.03',  // Card hover image scale
      },
    },
  },
  plugins: [],
}
export default config

