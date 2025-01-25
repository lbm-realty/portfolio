/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        times: "Times New Roman"
      },
      boxShadow: {
        custom: '0 4px 6px 1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      colors: {
        offWhite: "#f4f1eb"
      }
    },
  },
  plugins: [],
}

