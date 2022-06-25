/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      // sm: "640px",
      // // => @media (min-width: 640px) { ... }

      // md: "768px",
      // // => @media (min-width: 768px) { ... }

      // lg: "1024px",
      // // => @media (min-width: 1024px) { ... }

      // xl: "1280px",
      // // => @media (min-width: 1280px) { ... }

      "2xl": "600px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      colors: {
        // check background
        checkFrom: "hsl(192, 100%, 67%)",
        checkTo: "hsl(280, 87%, 65%)",

        // dark theme
        darkPrimary: "hsl(235, 21%, 11%)",
        darkSecondary: "hsl(235, 24%, 19%)",
        darkBorder: "hsl(237, 14%, 26%)",
        darkText1: "hsl(234, 39%, 85%)",
        darkText2: "hsl(234, 11%, 52%)",

        // light theme
        lightPrimary: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
