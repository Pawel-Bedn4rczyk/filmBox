import webpack from 'webpack'
import colors from 'vuetify/lib/util/colors'
import i18n from './config/i18n'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - filmBox',
    title: 'filmBox',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/axios-accessor.ts', '@/plugins/snackbar.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  i18n: {
    defaultLocale: 'pl',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        nameEn: 'English',
        namePl: 'Angielski',
      },
      {
        code: 'pl',
        nameEn: 'Polish',
        namePl: 'Polski',
      },
    ],
    vueI18n: i18n,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://filmbox-e401b-default-rtdb.firebaseio.com/',
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    theme: {
      dark: true,
      options: { customProperties: true },
      themes: {
        light: {
          primary: colors.blue.darken2,
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
          filmContainerbg: '#ffffff',
          appBar: '#ffffff',
          boxTextColor: colors.blue.darken2,
          menuBg: '#ffffff',
        },
        dark: {
          primary: colors.indigo,
          secondary: '#424242',
          accent: '#FF4081',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
          filmContainerbg: '#1E1E1E',
          appBar: '#272727',
          boxTextColor: '#ffffff',
          menuBg: '#424242',
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        _: 'lodash',
      }),
    ],
  },
}
