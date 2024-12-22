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
          text: '#1e5786',
          bg: '#f1ece4',
          primary: '#1e578640',
          // primary: '#d5a84e',
          secondary: '#f8eea6',


          // btn: '#1F2937',
          // btnTxt: '#E5E7EB',
          // bg: '#E5E7EB',
          // primary: '#1F2937',
          // text: '#111827',
          // accent: '#3B82F6',
          // secondaryAccent: '#10B981',
          // card: '#1F2937',
          // cardText: '#E5E7EB',
          // cardBorder: '#22C55E',
        },
        dark: {
          text: '#f1ece4',
          bg: '#1e5786',
          primary: '#f1ece440',
          // primary: '#d5a84e',
          secondary: '#f8eea6',

          // btn: '#E5E7EB',
          // btnTxt: '#1F2937',
          // bg: '#1F2937',
          // primary: '#E5E7EB',
          // text: '#D1D5DB',
          // accent: '#3B82F6',
          // secondaryAccent: '#10B981',
          // card: '#E5E7EB',
          // cardText: '#1F2937',
          // cardBorder: '#22C55E',
        },
      }

    },
  },
  plugins: [],
}

