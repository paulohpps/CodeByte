// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    '~/plugins/font-awesome.ts',
  ],
  css: [
    'bootstrap/dist/css/bootstrap.css',
    "@fortawesome/fontawesome-svg-core/styles.css",
  ]
})
