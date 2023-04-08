export default defineNuxtConfig({
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
