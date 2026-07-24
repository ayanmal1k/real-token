import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "Oswald", "sans-serif"],
        sans: ["var(--font-sans)", "Outfit", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          DEFAULT: "#D49E24",
          light: "#FFE599",
          dark: "#8C620A",
          deep: "#543A04",
        },
      },
      backgroundImage: {
        "gold-dark-text": "linear-gradient(180deg, #FFF6D1 0%, #EAA81D 35%, #C58B12 70%, #785204 100%)",
        "gold-dark-btn": "linear-gradient(180deg, #EAA81D 0%, #A37210 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
