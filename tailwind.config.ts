import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0F',
        'background-light': '#f8f7f5',
        'accent-start': '#F97316',
        'accent-end': '#FDBA74',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #F97316 0%, #FDBA74 100%)',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(0, 0, 0, 0.25)',
        'soft-lg': '0 8px 40px rgba(0, 0, 0, 0.35)',
        'glow-orange': '0 0 40px rgba(249, 115, 22, 0.15)',
      },
      borderRadius: {
        'card': '1rem',
        'card-lg': '1.5rem',
      },
    },
  },
  plugins: [],
}
export default config
