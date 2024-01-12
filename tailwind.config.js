/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const { colors } = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-gray-primary": "#DC3F3D",
        yellow: {
          ...colors.yellow,
          400: "#fd7014",
        },
        blue: {
          ...colors.blue,
          400: "#37809E",
        },
        red: {
          ...colors.red,
          400: "#DC3F3D",
        },
        gray: {
          ...colors.gray,
          400: "#484848",
          800: "#D8D8E3",
        },
      },
    },
  },
  plugins: [],
};
