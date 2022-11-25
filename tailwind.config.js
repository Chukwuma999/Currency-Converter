module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      dark: '#00223A',
      darker: '#001B2F',
      white: '#fff',
      darkWhite: '#F7F7F7',
      blue: '#A4EBF3',
      darkBlue: '#00B0D7'

    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
