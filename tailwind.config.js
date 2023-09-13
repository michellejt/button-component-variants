/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "logo-red": "#F7542E",
        "logo-dark": "#090F31",
        "sidebar-grey": "#FAFBFD",
        default: "#E0E0E0",
        "default-hover": "#AEAEAE",
        "default-outline": "#3D5AFE",
        "default-outline-hover": "rgba(41, 98, 255, 0.10)",
        secondary: "#455A64",
        "secondary-hover": "#1C313A",
        danger: "#D32F2F",
        "danger-hover": "#9A0007",
      },
      colors: {
        default: "#3F3F3F",
        "default-outline": "#3D5AFE",
      },
    },
  },
  plugins: [],
};
