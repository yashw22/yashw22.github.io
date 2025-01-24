/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      dropShadow: {
        'light': '4px 4px 6px rgba(255, 255, 255, 0.3)',
        'dark': '4px 4px 6px rgba(0, 0, 0, 0.5)',
      },

      colors: {
        warning: '#F97316',
        success: '#22C55E',
        error: '#EF4444',

        light: {
          text: '#384448',
          bg: '#f1ece4',
          primary: '#38444840',
          // primary: '#d5a84e',
          secondary: '#f8eea6',

        },
        dark: {
          text: '#f1ece4',
          bg: '#384448',
          primary: '#f1ece440',
          // primary: '#d5a84e',
          secondary: '#f8eea6',
        },
      }

    },
  },
  plugins: [],
}

