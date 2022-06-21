module.exports = {
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fill: ['hover', 'focus']
    },
  },
  plugins: [],
}
