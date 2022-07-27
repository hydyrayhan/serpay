require('dotenv').config({
  path: './config/config.env',
})
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    host: process.env.HOST || 'localhost', //0.0.0.0
    port: process.env.PORT || 3000, //3000
  },
  env:{
    socketUrl: process.env.SERVER_URL,
  },
  publicRuntimeConfig:{
    url:process.env.SERVER_URL || 'http://localhost:4000',
  },
  head: {
    title: 'serpay',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/scss/main.scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-awesome-swiper'},
    { src: '~/plugins/v-click-outside'},
  ],

  // loading: '~/components/Loading.vue',

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],
  moment: {
    defaultLocale: 'tm',
    locales: ['ru', 'tm'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    'cookie-universal-nuxt',
    [
      '@nuxtjs/i18n',
      {
        strategy: 'no_prefix',
        locales: [
          {
            code: 'tm',
            file: 'tm-TM.js',
            name: 'TM',
          },
          {
            code: 'ru',
            file: 'ru-RU.js',
            name: 'RU',
          },
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'tm',
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.SERVER_URL || 'http://localhost:5000',
  },
  // pwa: {
  //   manifest: {
  //     lang: 'en',
  //   },
  //   icon:{
  //     fileName:'logo.png'
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
