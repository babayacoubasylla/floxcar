// client/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60a5fa',
          DEFAULT: '#2563eb',
          dark: '#1e40af',
        },
        secondary: {
          light: '#f472b6',
          DEFAULT: '#db2777',
          dark: '#9d174d',
        },
        accent: {
          light: '#fbbf24',
          DEFAULT: '#f59e42',
          dark: '#b45309',
        },
        background: '#f8fafc',
        surface: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        chic: '0 4px 24px 0 rgba(37,99,235,0.10)',
        card: '0 2px 8px 0 rgba(0,0,0,0.06)',
      },
      borderRadius: {
        xl: '1.25rem',
        chic: '2rem',
      },
    },
  },
  plugins: [],
}