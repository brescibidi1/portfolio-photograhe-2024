// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@unocss/nuxt',
    'nuxt-swiper',
  ],
  css: ['@/assets/styles/app.css', '@/assets/styles/demo.css'],
  routeRules: { '/**': { headers: { 'X-Robots-Tag': 'noindex, follow' } } },
  nitro: { prerender: { routes: ['/', '/about', '/portfolio', '/contact', '/en', '/en/about', '/en/portfolio', '/en/contact'], failOnError: true } },
  icon: { serverBundle: { collections: ['ri'] } },
  i18n: {
    customRoutes: 'config',
    debug: false,
    vueI18n: './i18n.config.ts',
    defaultLocale: 'fr',
    locales: [
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'Français' },
    ],
  },
})