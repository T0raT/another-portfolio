import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gruv: {
          "bg0-h": "#1d2021",
          bg: "#282828",
          bg0: "#282828",
          bg1: "#3c3836",
          fg0: "#fbf1c7",
          fg1: "#ebdbb2",
          gray: "#a89984",
          red: "cc241d",
          green: "#98971a",
          yellow: "#d79921",
        },
      },
    },
  },
  plugins: [],
};
export default config;
