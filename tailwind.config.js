/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Sora", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1230px",
    },
    extend: {
      backgroundImage: {
        'bg-effect-1': "url('/src/assets/Image/bg-effect-1.png')",
        'bg-effect-2': "url('/src/assets/Image/bg-effect-2.png')",
      },
      boxShadow: {
        'black': '6px 6px 0px -1px rgba(15, 23, 42, 1)',
        'gray': '5px 5px 0px 0px rgba(15, 23, 42, 1)',
        'yellow': '5px 5px 0px 0px rgba(202, 138, 4, 1)',


      }
    },
    plugins: [],
  },
};