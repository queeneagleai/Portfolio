import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette — near-black cosmic base, gold, sea green (was olive), cream
        ink: "#0B0B09",
        gold: {
          DEFAULT: "#E3BE55",
          deep: "#C9A034",
        },
        seagreen: {
          DEFAULT: "#2E8B77", // primary sea green accent (replaces olive)
          light: "#4FAE97",
          deep: "#1F6B5A",
        },
        cream: "#F3EEDD",
      },
      fontFamily: {
        display: ["Cinzel", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
