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

      Lexend: [400, 600, 700], // in En
      Lalezar: [400, 500, 700],// in Ar
    },
    display: "swap",
    prefetch: true, // Prefetch the fonts
    preconnect: true, // Preconnect to the Google Fonts domain
    preload: true, // Preload the fonts
  },
  runtimeConfig: {
    public: {
      WHATSAPP_NUMBER: process.env.WHATSAPP_NUMBER,
      WHATSAPP_LINK: process.env.WHATSAPP_LINK,
    }
  }
});
