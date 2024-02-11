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
        "hero-1": "url('/hero1.webp')",
        "hero-short": "url('/hero-short.webp')",
        "img-boisko": "url('/img-boisko.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
