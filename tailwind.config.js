/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors: {
        warning: '#F97316',
        success: '#22C55E',
        error: '#EF4444',
        light: {
          btn: '#1F2937',
          btnTxt: '#E5E7EB',
          bg: '#E5E7EB',
          primary: '#1F2937',
          text: '#111827',
          accent: '#3B82F6',
          secondaryAccent: '#10B981',
        },
        dark: {
          btn: '#E5E7EB',
          btnTxt: '#1F2937',
          bg: '#1F2937',
          primary: '#E5E7EB',
          text: '#D1D5DB',
          accent: '#3B82F6',
          secondaryAccent: '#10B981',
        },
      }

    },
  },
  plugins: [],
}

