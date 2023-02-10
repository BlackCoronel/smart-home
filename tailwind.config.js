
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                teal: colors.teal,
                cyan: colors.cyan,
            },
        },
    },
  plugins: [
      require("@tailwindcss/forms"),
      require('@tailwindcss/aspect-ratio'),
  ],
}
