/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        rb: ["RB", "sans-serif"],
      },
      colors: {
        mainTheme: "#000000",
        grayPalette: {
          100: "#f5f5f5",
          300: "#D9D9D9",
        },
        primary: {
          100: "#d2e8f4",
          200: "#a4d0ea",
          300: "#77b9df",
          400: "#49a1d4",
          500: "#2b84b8",
          600: "#236b95",
          700: "#1685be",
          800: "#116693",
          900: "#1a5070",
        },
      },
    },
  },
  plugins: [],
};
