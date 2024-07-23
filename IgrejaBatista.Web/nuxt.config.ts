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
    jwt_cript_key: "",
    jwt_expire: "",
    public: {
      cookie_expire: "",
      open_path: ""
    }
  },
  $development: {
    runtimeConfig: {
      jwt_cript_key: "development",
      jwt_expire: "18800000",
      public: {
        open_path: "/,/login",
        cookie_expire: "18800000"
      }
    }
  },
  modules: [
    "@nuxt/ui",
    "@dargmuesli/nuxt-cookie-control",
    "@nuxtjs/html-validator",
    "@samk-dev/nuxt-vcalendar",
    "@pinia/nuxt",
    "nuxt-laravel-precognition"
  ],
  components: [{
    path: '~/components'
  }],
  pinia: {
    storesDirs: ["./stores/**"]
  }
})