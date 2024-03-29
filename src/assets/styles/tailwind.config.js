const colors = require('tailwindcss/colors');



module.exports = {
  content: [
    './src/components/**/*.js',
    './public/index.html',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.stone[700],
      'light-grey': colors.stone[50],
      grey: colors.stone[200],
      'dark-grey': colors.stone[300],
      'darker-grey': colors.stone[400],
      orange: colors.amber[500],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        '2xl': '3rem',
      },
      screens: {
        sm: '768px',
        '2xl': '1024px',
      },
    },
    extend: {},
  },
  plugins: [],
}
