/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./**/*.{html,js}"],
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: {
        // padding: '1.5rem',
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "3rem",
        lg: "4.5rem",
        screens: {
          sm: "428px",
          md: "744px",
          lg: "1440px",
        },
      },
    },

    extend: {
      colors: {
        primary: "#CB3066",
        secondary: "#16BFFD",
        dark: "#333333",
        white: {
          001: "#fdfcfc",
          100: "#fafafa",
          200: "#f3f3f3",
          300: "#F7F7F7",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
