const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],

  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif']
    },
    screens: {
      'sr': '600px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}

