// import type { Config } from "tailwindcss";

// const config = {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//     "./app/**/*.{ts,tsx}",
//     "./src/**/*.{ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         main: "#1F375B", // Azul oscuro
//         primary: "#05C7F2", // Color azuk claro
//         darkPrimary: "#049AC0",
//         secondary: "#F7AF6D", // Amarillo"
//         success: "#28A745",
//         error: "#FF0D06",
//         warning: "#FFC107",
//         info: "#17A2B8",
//         tertiary: "#6F42C1",
//         Darktxt: "black",

//         background: "#EAF2FB", // Gris muy claro
//         secondBackgrond: "#D5E4F6", //
//         backgroundLight: "#E0EAF8", // Gris 800
//         customGrayAlt: "#797C86", // Otro gris
//         customGrayAlt2: "#AFB0B6", // Un tercer gris
//         customGray90: "#E4E4E6", // Gris claro
//         lightGray: "#CACACE", // Gris claro
//         lightPurple: "#D6D0FB", // Púrpura claro
//         superGray: "#2F2F37", // Gris oscuro
//         lightDark: "#1C1C21", // Otro color oscuro
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config;

// export default config;
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
        subtle: "0 4px 15px rgba(178, 165, 149, 0.3)", // Sombra sutil
        deep: "0 6px 20px rgba(178, 165, 149, 0.5)", // Sombra profunda
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
