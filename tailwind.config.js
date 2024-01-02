/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        101: "2.4rem",
        500: "38rem",
        400: "20.4rem",
        450: "25.4rem",
      },
      colors: {
        "light-orange": "#E59C44",
        "medium-orange": "#fca311",
        "dark-blue": "#14213d",
        "lightest-orange": "#fdf2e9",
        "medium-gray": "#333",
        "dirty-white": "#e5e5e5",
      },
      fontSize: {
        medium: "1.8rem",
        "5xl": [
          "3.25rem",
          {
            lineHeight: "1.05",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
      },
    },
  },
  plugins: [],
};
