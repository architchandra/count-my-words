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
      grey: colors.zinc[100],
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '1280px',
      },
    },
    extend: {},
  },
  plugins: [],
}
