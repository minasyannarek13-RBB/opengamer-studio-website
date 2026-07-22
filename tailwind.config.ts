import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050608",
        panel: "#0d1117",
        line: "rgba(255,255,255,0.1)",
        graphite: "#11151c",
        cobalt: "#2563eb",
        cyan: "#38bdf8",
        emerald: "#2ee6a6"
      },
      fontFamily: {
        sans: ["Inter", "Space Grotesk", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(37, 99, 235, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
