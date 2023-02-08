/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#90ee02",
        secondary: "#6002ee",
        "just-black": "#000000",
        "space-grey": "#131313",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
