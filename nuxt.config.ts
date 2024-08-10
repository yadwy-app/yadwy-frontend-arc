// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: [
		"@nuxtjs/tailwindcss",
		"shadcn-nuxt",
		"@nuxtjs/i18n",
		"@nuxt/icon",
		"@nuxt/image",
	],
	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: "",
		/**
		 * Directory that the component lives in.
		 * @default.vue "./components/ui"
		 */
		componentDir: "./components/ui",
	},
	i18n: {
		defaultLocale: "ar",
		locales: ["en", "ar"],
	},
	alias: {
		"@": resolve(__dirname, "./"),
	},
});
