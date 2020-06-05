const { fontSize } = require('tailwindcss/defaultTheme')


module.exports = {
  purge: [],
  theme: {
    fontSize: {
      ...fontSize,
          '7xl': '5rem',
          '8xl': '6rem',
          '9xl': '9rem',
          },
    maxWidth: {
        '7xl': '78rem',
          },
    extend: {},
  },
  variants: {},
  plugins: [],
}
