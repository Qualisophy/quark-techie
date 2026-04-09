/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Colores Corporativos del Dossier
        primary: "#F3C864",
        secondary: "#5B7B7B",
        dark: "#191919",
        white: "#FFFFFF",

        // Colores de estado (Adaptados para contrastar en fondo oscuro)
        state: {
          success: "#4ADE80",
          error: "#F87171",
          warning: "#FBBF24",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        // Tamaños exactos del Dossier
        "h1-brand": "74px",
        "h2-brand": "47px",
        "h3-brand": "40px",
        "h4-brand": "34px",
        "lg-brand": "24px",
        "base-brand": "21px",
      },
    },
  },
  plugins: [],
};
