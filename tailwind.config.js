/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "linkedin-blue": "#0074b1",
        "linkedin-lightBlue": "#0073b1",
        "linkedin-darkBlue": "#006097",
        "linkedin-gray": "#f3f2ef",
        "linkedin-lightGray": "#eef3f8",
        "linkedin-darkGray": "#666666",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      screens: {
        xs: "360px",
        sm: "480px",
        md: "640px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1200px",
      },
    },
  },
  plugins: [],
};
