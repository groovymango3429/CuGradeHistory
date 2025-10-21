/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clemson-orange': '#F56600',
        'clemson-purple': '#522D80',
        'clemson-gray': '#F2F2F2',
      },
      fontFamily: {
        'header': ['Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}