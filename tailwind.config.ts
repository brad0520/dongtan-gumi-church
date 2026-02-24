import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0284C7",
          light: "#38BDF8",
          dark: "#0369A1",
        },
        secondary: {
          DEFAULT: "#334155",
          light: "#64748B",
          dark: "#1E293B",
        },
        warm: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
        },
        cream: "#F8FBFF",
        brown: {
          50: "#F0F7FF",
          100: "#E0EEFF",
          200: "#BFDBFE",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E3A5F",
        },
      },
      fontFamily: {
        sans: ["Pretendard", "system-ui", "sans-serif"],
        serif: ["Noto Serif KR", "Georgia", "Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
