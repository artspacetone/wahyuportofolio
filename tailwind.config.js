/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'cream-50': '#FCFCF9',
        'slate-900': '#13343B',
        'charcoal-700': '#1F2121',
        'charcoal-800': '#262828',
        'teal-300': '#32B8C6',
        'teal-400': '#2DA6B2',
        'teal-500': '#21808D',
        'teal-600': '#1D7480',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}