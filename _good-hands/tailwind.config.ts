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
        black: '#1a1a1a',
        white: '#ffffff',
        'off-white': '#f5f5f5',
        gold: {
          DEFAULT: '#c9a961',
          dark: '#b89748',
        },
        'gray-light': '#e5e5e5',
        'gray-medium': '#999999',
        'gray-dark': '#4a4a4a',
        // Keep legacy colors for backward compatibility
        ink: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          lighter: '#404040',
        },
        porcelain: {
          DEFAULT: '#f8f6f3',
          dark: '#f5f5f4',
          darker: '#e7e5e4',
        },
        sage: {
          DEFAULT: '#a8b5a5',
          light: '#b8c9a8',
          dark: '#7d9268',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
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
    },
  },
  plugins: [],
}
export default config

