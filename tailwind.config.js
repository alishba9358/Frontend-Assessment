/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mediumslateblue: "#7b61ff",
        white: "#fff",
        "danger-main": "#e33e38",
        "text-gray": "#646464",
        "neutral-70-light-gray": "#757575",
        darkorchid: "rgba(131, 68, 219, 0.1)",
        "primary-main-hover": "#8344db",
        black: "#000",
        background: "#f8f9fb",
        focused: "#6590ff",
      },
      spacing: {},
      fontFamily: {
        "subheading-small": "Poppins",
        roboto: "Roboto",
      },
      borderRadius: {
        "8xs": "5px",
        "81xl": "100px",
        "10xs": "3px",
      },
    },
    fontSize: {
      sm: "14px",
      "3xs": "10px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
