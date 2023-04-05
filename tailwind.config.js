/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./**/*.{html,js}"],
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#CB3066",
        secondary: "#16BFFD",
        dark: "#333333",
        white: "#F7F7F7",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

