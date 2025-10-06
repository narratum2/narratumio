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
        ink: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          lighter: '#404040',
        },
        porcelain: {
          DEFAULT: '#fafaf9',
          dark: '#f5f5f4',
          darker: '#e7e5e4',
        },
        shell: {
          DEFAULT: '#f8f4f0',
          dark: '#f0ebe5',
          darker: '#e8e0d8',
        },
        harbor: {
          DEFAULT: '#4a5568',
          light: '#718096',
          dark: '#2d3748',
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#e6c862',
          dark: '#b8941f',
        },
        sage: {
          DEFAULT: '#9caf88',
          light: '#b8c9a8',
          dark: '#7d9268',
        },
        coral: {
          DEFAULT: '#f4a582',
          light: '#f8c0a6',
          dark: '#e88760',
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

