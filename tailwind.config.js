/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      colors: {
        darkPrimary: "hsl(235, 21%, 11%)",
        lightPrimary: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
