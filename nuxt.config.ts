export default defineNuxtConfig({
  /* htmlAttrs: {
    lang: "en",
  }, */
  /* head: {
    htmlAttrs: {
      lang: "en",
    },
  }, */
  // tailwindcss
  css: ["~/assets/css/tailwind.css", "~/assets/css/custom.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // sys
  extends: "@nuxt-themes/alpine",
});
