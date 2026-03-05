/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#070B14',
        'bg-secondary': '#0C1220',
        'bg-card': '#101829',
        'bg-elevated': '#162033',
        'text-primary': '#F6F7FB',
        'text-muted': '#95A0B8',
        'text-soft': '#66728C',
        'accent-from': '#FF7A59',
        'accent-to': '#F4C95D',
        'accent-soft': '#7CE0C3',
        'border-soft': '#243149',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
