export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',
  plugins: [
    { src: '~/plugins/analytics.client.js', mode: 'client' },
  ],
  modules: [
    '@nuxthq/studio',
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ]
})
