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
          DEFAULT: "#D97706",
          light: "#F59E0B",
          dark: "#B45309",
        },
        secondary: {
          DEFAULT: "#44403C",
          light: "#78716C",
          dark: "#292524",
        },
        warm: {
          50: "#FFFBF5",
          100: "#FEF3C7",
          200: "#FDE68A",
        },
        cream: "#FFFDF7",
        brown: {
          50: "#FAF5F0",
          100: "#F5EDDF",
          200: "#E8D5BD",
          600: "#78553A",
          700: "#5C3D27",
          800: "#3E2614",
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
