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
        main: "#05AFF2", // Azulete
        primary: "#03738C", // Color primario
        secondary: "#05C7F2", // Amarillo"
        success: "#28A745",
        error: "#DC3545",
        warning: "#FFC107",
        info: "#17A2B8",
        tertiary: "#6F42C1",

        background: "#081B26", // Gris 900
        secondBackgrond: "#2F5266", //
        backgroundLight: "#081B50", // Gris 800
        customGrayAlt: "#797C86", // Otro gris
        customGrayAlt2: "#AFB0B6", // Un tercer gris
        customGray90: "#E4E4E6", // Gris claro
        lightGray: "#CACACE", // Gris claro
        lightPurple: "#D6D0FB", // Púrpura claro
        superGray: "#2F2F37", // Gris oscuro
        lightDark: "#1C1C21", // Otro color oscuro
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
