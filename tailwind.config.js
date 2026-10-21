/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#fafaf8',
        card: '#ffffff',
        subtle: '#f4f4f0',
        charcoal: {
          900: '#111215',
          800: '#1b1d22',
          700: '#2b2e36',
          600: '#4a4f5c',
          500: '#6c7280',
          400: '#9ea3ae',
          300: '#d0d3da',
        },
        border: {
          subtle: '#ebebe7',
          DEFAULT: '#e2e2dc',
          strong: '#cacac2',
        },
        cobalt: {
          DEFAULT: '#1d4ed8',
          hover: '#1e40af',
          light: '#eff6ff',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      }
    },
  },
  plugins: [],
}
