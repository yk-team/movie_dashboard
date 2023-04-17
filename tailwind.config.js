import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px"
    },
    fontFamily: {
      sans: ["Archivo", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
});