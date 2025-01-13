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
        main: "#4B4B4D", // Marrón oscuro para texto principal
        primary: "#D8C3A5", // Marrón claro
        secondary: "#F4EDE4", // Fondo claro
        accent: "#B4846C", // Marrón acento
        background: "#EFECE5", // Fondo general
        card: "#FAF8F5", // Fondo de tarjetas
        border: "#D6CCC2", // Bordes suaves
        shadow: "#B2A595", // Sombras suaves
        textPrimary: "#4B4B4D", // Texto principal
        textSecondary: "#6C6A6D", // Texto secundario
      },
      boxShadow: {
        "3d-soft":
          "6px 6px 12px rgba(178, 165, 149, 0.3), -4px -4px 8px rgba(255, 255, 255, 0.8)",
        "3d-deep":
          "8px 8px 16px rgba(178, 165, 149, 0.5), -6px -6px 12px rgba(255, 255, 255, 0.9)",
      },
      borderRadius: {
        card: "20px", // Bordes redondeados de tarjetas
        button: "25px", // Bordes redondeados de botones
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
