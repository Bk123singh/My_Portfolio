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
          600: '#3d424d',
          500: '#4b5262', // WCAG AA 6.8:1 on #ffffff
          400: '#596070', // WCAG AA 5.4:1 on #ffffff
          300: '#7e8594',
        },
        border: {
          subtle: '#ebebe7',
          DEFAULT: '#e2e2dc',
          strong: '#cacac2',
        },
        cobalt: {
          DEFAULT: '#1d4ed8', // 5.8:1 on #ffffff
          hover: '#1e40af',   // 8.2:1 on #ffffff
          light: '#eff6ff',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
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
