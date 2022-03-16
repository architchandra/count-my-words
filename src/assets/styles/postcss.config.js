module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: { config: './src/assets/styles/tailwind.config.js' },
    autoprefixer: {},
  },
}
