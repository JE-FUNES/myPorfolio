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
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        pulseSlow: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.8 },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0%)", animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)" },
          "50%": { transform: "translateY(-10%)", animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)" },
        },
      },
      animation: {
        "pulse-delay-1s": "pulseSlow 2s infinite 1s", // Duración 2s, infinito, retraso 1s
        "pulse-delay-2s": "pulseSlow 2s infinite 2s", // Retraso de 2s
        "pulse-delay-3s": "pulseSlow 2s infinite 3s", // Retraso de 2s
        "bounce-slow": "bounceSlow 2s infinite",
        "bounce-slower": "bounceSlow 3s infinite",
        "fadeIn": 'fadeIn 1.5s ease-out forwards',
      },
      backgroundImage: {
        'bg-effect-1': "url('/src/assets/Image/bg-effect-1.webp')",
        'bg-effect-2': "url('/src/assets/Image/bg-effect-2.webp')",
        'bg-banner': "url('/src/assets/Image/project-banner-1.png')",
        'bg-video': "url('/src/assets/videos/videoCode.mp4')",
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