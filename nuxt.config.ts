import site from "./site";
import { nodePolyfills } from 'vite-plugin-node-polyfills'
const { name, description, url, keywords, defaultLocale, identity, trailingSlash, titleSeparator } = site;

export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@nuxt/image", "@nuxtjs/seo", "@nuxtjs/critters", "@nuxtjs/sitemap"],
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  app: {
    baseURL: "/",
  },
  critters: {
    config: {
      preload: "swap",
    },
  },
  image: {
    dir: "public",
    format: ["webp, png, jpg"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    plugins: [
      nodePolyfills(),
    ],
  },
  site: {
    url,
    name,
    keywords,
    description,
    defaultLocale,
    identity,
    trailingSlash,
    titleSeparator,
  },
  robots: {
    blockNonSeoBots: true,
  },
  seo: {
    redirectToCanonicalSiteUrl: true,
    splash: true,
  },
  ogImage: {
    enabled: false,
  },
});
