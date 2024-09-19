import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        waterAnimation: "waterAnimation 5s ease-in-out infinite",
      },
      keyframes: {
        waterAnimation: {
          "0%": {
            transform: "translate(0, 0)",
          },
          "25%": {
            transform: "translate(30px, 15px)",
          },
          "50%": {
            transform: "translate(60px, 30px)",
          },
          "75%": {
            transform: "translate(30px, 15px)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
