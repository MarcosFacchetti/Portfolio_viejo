const colors = require('tailwindcss/colors');

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        orange: colors.orange,
      },
      fontFamily: {
        'Montserrat-LightItalic': ['Montserrat-LightItalic', 'serif'],
      },
    },
  },
  variants: {
    extend: {
      colors: {
        navy: {
          500: "#050532",
        },
      },
    },
  },
  plugins: [],
};
