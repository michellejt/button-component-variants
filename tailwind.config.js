/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: [
        "0.75rem",
        {
          fontWeight: "500",
        },
      ],
      "2xl": [
        "1.75rem",
        {
          fontWeight: "500",
        },
      ],
    },
    extend: {
      backgroundColor: {
        "logo-red": "#F7542E",
        "logo-dark": "#090F31",
        "sidebar-grey": "#FAFBFD",
        default: "#E0E0E0",
        disabled: "#9E9E9E",
        "default-hover": "#AEAEAE",
        primary: "#2962FF",
        "primary-dark": "#3F3F3F",
        "secondary-dark": "#1C313A",
        "danger-dark": "#9A0007",
        "primary-opacity": "rgba(41, 98, 255, 0.10)",
        "outline-hover": "rgba(41, 98, 255, 0.10)",
        secondary: "#455A64",
        "secondary-hover": "#1C313A",
        danger: "#D32F2F",
        "danger-hover": "#9A0007",
      },
      colors: {
        default: "#3F3F3F",
        primary: "#3D5AFE",
        "gray-1": "#333;",
        "gray-2": "#4F4F4F",
      },
      spacing: {
        "50px": "50px",
      },
    },
  },
  plugins: [],
};
