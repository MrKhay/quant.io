// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  devServer: {
    port: 4041,
  },

  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxt/icon",
    "@primevue/nuxt-module",
  ],
  primevue: {
    directives: {
      include: ["Tooltip"],
    },
    importTheme: { from: "@/theme/primevue-theme.ts" },
  },
  icon: {
    clientBundle: {
      scan: {
        globInclude: ["components/**/*.vue" /* ... */],
        globExclude: ["node_modules", "dist" /* ... */],
      },
    },
  },
  css: ["~/assets/css/base.css", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      "Space+Grotesk": [300, 400, 500, 600, 700],
    },
    display: "swap",
  },
});
