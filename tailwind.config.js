/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{php,html,js,jsx,ts,tsx,vue}",
    "./resources/**/*.{php,html,js,jsx,ts,tsx,vue}",
    "./node_modules/@left4code/tw-starter/**/*.js",
    // ".//*.html",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      primary: ["Sora", "sans-serif"],
    },
    container: {
      center: true,
      padding: "0.5rem",
    },
    screens: {
      sm: "360px",
      md: "820px",
      lg: "1230px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        'bg-effect-1': "url('/src/assets/Image/bg-effect-1.webp')",
        'bg-effect-2': "url('/src/assets/Image/bg-effect-2.webp')",
      },
      boxShadow: {
        'black': '6px 6px 0px -1px rgba(15, 23, 42, 1)',
        'gray': '5px 5px 0px 0px rgba(15, 23, 42, 1)',
        'yellow': '5px 5px 0px 0px rgba(202, 138, 4, 1)',


      },
      colors: {

        verdeFluo: {
          500: "#00ff7f",
        },
        slate: {
          900: "#0f172a",
        },
        white: {
          DEFAULT: "#ffffff",
        },
        verdeFluo: {
          500: "#00ff7f",
        },
        fuchsia: {
          300: "#ff00ff",
        },
        
        
      },
    },
    plugins: [],
  },
};