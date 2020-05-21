
export default {
  mode: 'universal',
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
    script: [
      { src: "/main.js", body: false },
      { src: "/wp-content/cache/minify/eff97.js", body: false },
      { src: "/wp-content/cache/minify/f1253.js", body: false },
      { src: "/wp-content/cache/minify/864c2.js", body: false },
      { src: "/wp-content/cache/minify/0fef6.js", body: true },
      { src: '/_toolbar/assets/js/rbt-modules.js', body: true },
      { src: "/wp-content/cache/minify/6d18f.js", body: true },

      { src: "/wp-content/cache/minify/3c2c7.js", body: true },
      { src: "/wp-content/cache/minify/5972c.js", body: true },
      { src: "/wp-content/cache/minify/7e461.js", body: true },
      { src: '//maps.googleapis.com/maps/api/js?key=AIzaSyBHSkprO2V06WpTu7rWOgF5WmILiIj6jBQ', body: true },

      { src: "/wp-content/cache/minify/849f0.js", body: true },

      { src: "/wp-content/cache/minify/34e10.js", body: true },
      { src: "/wp-content/cache/minify/97206.js", body: true }




    ],
    link: [
      { rel: "stylesheet", href: "/style.css" },
      { rel: "stylesheet", href: "/wp-content/cache/minify/7de6a.css" },

      { rel: 'stylesheet', href: '/_toolbar/assets/css/rbt-modules.css' },

      { rel: "stylesheet", href: "/wp-content/cache/minify/c138f.css" },

      { rel: "stylesheet", href: "/wp-content/cache/minify/debf6.css" },

      { rel: "stylesheet", href: "/wp-content/cache/minify/5656c.css" },

      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CPoppins%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CPoppins%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;subset=latin%2Clatin-ext'
      }
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
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
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
