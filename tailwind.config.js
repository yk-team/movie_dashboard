import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      black: "#000000",
      "light-grey": "rgb(203 213 225)",
    },
    fontFamily: {
      sans: ["Archivo", "sans-serif"],
    },
    fontSize: {
      s: "6px",
      xs: "8px",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.9rem",
      "4xl": "2.5rem",
      "5xl": "3rem",
    },
    extend: {},
  },
  plugins: [],
});
