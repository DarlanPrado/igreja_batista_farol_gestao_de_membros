// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': {
      redirect: {
        to: '/login'
      }
    }
  },
  runtimeConfig: {
    dbHost: '',
    dbDatabase: '',
    dbuser: '',
    dbPassword: '',
    dbPort: ''
  },
  modules: [
    "@nuxt/ui",
    "@dargmuesli/nuxt-cookie-control",
    "@nuxtjs/html-validator"
  ],
  // "@pinia/nuxt"
  components: [{
    path: '~/components'
  }]
})