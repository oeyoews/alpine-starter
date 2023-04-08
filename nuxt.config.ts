export default defineNuxtConfig({
  css: ["~/src/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  extends: "@nuxt-themes/alpine",
});
