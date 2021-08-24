module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.ts", "./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
