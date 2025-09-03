import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class", 
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#EF4444",
      },
    },
  },
  plugins: [],
}

export default config
