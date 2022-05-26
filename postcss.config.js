module.exports = {
  // plugins: [
  //   require('postcss-import'),
  //   require('tailwindcss/nesting'),
  //   require('tailwindcss'),
  //   require('autoprefixer'),
  //   require('cssnano')({
  //     preset: 'default',
  //   }),
  // ]

  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: 'default'
    }
  }
}