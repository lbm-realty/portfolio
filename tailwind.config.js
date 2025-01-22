/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        times: "Times New Roman"
      },
      colors: {
        darkBlue: "#ffe"
      }
    },
  },
  plugins: [],
}

