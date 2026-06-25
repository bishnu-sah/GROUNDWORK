/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F7F4',
        primary: '#111111',
        secondary: '#6B6B6B',
        border: '#E5E5E5',
        buttonBlack: '#111111',
        buttonText: '#FFFFFF',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"Space Grotesk"', 'sans-serif'],
      },
      maxWidth: {
        'page': '1440px',
      }
    },
  },
  plugins: [],
}
