export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@nuxt/image', '@nuxtseo/module', '@nuxtjs/critters', 'nuxt-og-image', '@nuxt/content'],
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  app: {
    baseURL: '/',
  },
  critters: {
    config: {
      preload: 'swap',
    },
  },
  image: {
    dir: 'assets/img',
    format: ['webp, png, jpg']
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  site: {
    defaultLocale: 'ko',
    identity: {
      type: 'Corporation',
    }
  },
  seo: {
    redirectToCanonicalSiteUrl: true,
    splash: true
  },
});
