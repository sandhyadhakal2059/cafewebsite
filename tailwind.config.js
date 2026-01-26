/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
      },
      colors: {
        primary: "#c28e5c",
        secondary: "#854d3d",
        brandDark: "#4a1e1b",
      },
      keyframes: {
        flipXY: {
          "0%": { transform: "rotateX(90deg) rotateY(90deg)", opacity: "0" },
          "100%": { transform: "rotateX(0deg) rotateY(0deg)", opacity: "1" },
        },
      },
      animation: {
        "flip-xy": "flipXY 1s ease-out forwards",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
