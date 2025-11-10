/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'cloudflare-blue': '#0ea5e9',
        'error-red': '#ef4444',
        'success-green': '#84cc16',
        'gray-light': '#f3f4f6',
        'gray-medium': '#9ca3af',
        'gray-dark': '#374151'
      },
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}