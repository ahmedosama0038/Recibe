
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Brush Script MT"', 'cursive'],
        ahmed: ['Pacifico', 'cursive'],
      },
      colors: {
        gren: '#059669',
      },
    },
  },
  plugins: [],
}