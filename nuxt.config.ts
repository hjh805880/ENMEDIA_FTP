import site from "./site";
const { name, description, url, keywords, defaultLocale, identity, trailingSlash, titleSeparator } = site;

export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@nuxt/image", "@nuxtjs/seo", "@nuxtjs/critters", "@nuxtjs/sitemap"],
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  app: {
    baseURL: "/",
  },
  runtimeConfig: {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
  },
  routeRules: {
    '/admin/**': {
      robots: false
    },
    '/api/data': {
      cors: true,
    },
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
  sitemap: {
    exclude: ['/admin/**'],
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
