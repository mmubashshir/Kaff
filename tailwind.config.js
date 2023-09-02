/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(2rem, 17.5vw, 20rem)",
      },
      width: {
        small: "",
        medium: "24rem",
        large: "32rem",
        xLarge: "36rem",
        xxLarge: "48rem",
      },
      height: {
        small: "",
        medium: "24rem",
        large: "32rem",
        xLarge: "36rem",
        xxLarge: "48rem",
      },
    },
    colors: {
      "forest-green": "#15463a",
      "pine-green": "#0d2e26",
      "bread-cream": "#fbeee5",
      "biscotti-yellow": "#ffb91c",
      "rough-yellow": "#e49e05",
      hazelnut: "#724e01",
      white: "#ffffff",
    },
    fontFamily: {
      termina: ["Termina", "sans-serif"],
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
