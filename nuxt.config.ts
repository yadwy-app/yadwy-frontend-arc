// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "node:path";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/i18n",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  i18n: {
    defaultLocale: "ar",
    locales: ["en", "ar"],
  },
  alias: {
    "@": resolve(__dirname, "./"),
  },
  googleFonts: {
    families: {
      Lexend: [400, 600, 700],
    },
    display: "swap",
  },
});
