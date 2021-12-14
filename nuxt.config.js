const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/troost_gardens/'
  }
} : {}

export default {
  ...routerBase,
  server: {
    port: 5000
  },
  mode: 'universal',
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,900;1,700&family=Turret+Road:wght@400&display=swap' }
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Mono|Alegreya|Turret+Road|Be+Vietnam&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
      { src: '~/assets/troost_gardens.sass', lang: 'sass' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-gtag.js',
    '~/plugins/vue-touch-events.js',
    '~/plugins/vue-dayjs.js',
],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/image',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    '~/modules/coffeescript',
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    babel: {
      presets({ isServer }) {
        const targets = isServer ? { node: 'current' } : { ie: 11 }
        return [
          [require.resolve('@nuxt/babel-preset-app'), { targets }]
        ]
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // config.module.rules.push({
      //   test: /\.(coffee)$/,
      //   use: [{ loader: 'coffee-loader' }]
      // })
    }
  },
  image: {
    domains: ['http://localhost:3000']
  },
}
