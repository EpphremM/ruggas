import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  plugins: ["@/plugins/rellax.client"],
  modules: ["lenis/nuxt", "@nuxtjs/google-fonts"],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      Anton: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
