export default defineNuxtConfig({
  // tailwindcss
  css: ["~/src/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // sys
  extends: "@nuxt-themes/alpine",
});
