import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A2C80", // Color primario cambiar
        background: "#111827", // Gris 900
        backgroundLight: "#1f2937", // Gris 800
        customGrayAlt: "#797C86", // Otro gris
        customGrayAlt2: "#AFB0B6", // Un tercer gris
        customGray90: "#E4E4E6", // Gris claro
        lightGray: "#CACACE", // Gris claro
        lightPurple: "#D6D0FB", // Púrpura claro
        superGray: "#2F2F37", // Gris oscuro
        lightDark: "#1C1C21", // Otro color oscuro
        textColorIm: "#FFD700", // Color para "I’m"
        textColorName: "#00BFFF", // Color para el nombre
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
