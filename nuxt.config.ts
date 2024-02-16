export default defineNuxtConfig({
  devtools: { enabled: true },
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',
  modules: [
    'nuxt-gtag',
    '@nuxthq/studio',
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ],
  gtag: {
    id: 'G-G84EVVEQYM'
  }
})
