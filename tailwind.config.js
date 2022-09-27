/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*liquid",
    "./assets/*liquid",
    "./layout/*liquid",
    "./sections/*liquid",
    "./snippets/*liquid",
    "./templates/*liquid",
    "./templates/**/*liquid"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}