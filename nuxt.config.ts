export default defineNuxtConfig({
  // tailwindcss
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // sys
  extends: "@nuxt-themes/alpine",
});
