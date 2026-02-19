import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050508",
        violet: {
          500: "#8A2BE2"
        },
        teal: {
          500: "#008080",
          400: "#11B8B8"
        }
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 20% 20%, rgba(17,184,184,0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(138,43,226,0.18), transparent 45%)"
      },
      boxShadow: {
        glow: "0 0 60px rgba(17,184,184,0.18)"
      }
    }
  },
  plugins: []
};

export default config;
