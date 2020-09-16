module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'dt.in.th',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Thai Pangsakulyanont’s web site',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#353433' }]
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/dtinth/dt.in.th',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    nav: [
      // {
      //   text: 'Guide',
      //   link: '/guide/',
      // },
      // {
      //   text: 'Config',
      //   link: '/config/'
      // },
      // {
      //   text: 'VuePress',
      //   link: 'https://v1.vuepress.vuejs.org'
      // }
    ],
    sidebar: {
      // '/guide/': [
      //   {
      //     title: 'Guide',
      //     collapsable: false,
      //     children: [
      //       '',
      //       'using-vue',
      //     ]
      //   }
      // ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],

  postcss: {
    plugins: [
      require('autoprefixer'),
      require('postcss').plugin('postcss-screaming', () => css => {
        css.walkDecls(decl => {
          decl.prop = decl.prop.toUpperCase()
        })
      })
    ]
  },
  configureWebpack: (config, isServer) => {
    const TerserPlugin = require('terser-webpack-plugin')
    if (!config.optimization) {
      config.optimization = {}
    }
    config.optimization.minimizer = [
      new TerserPlugin({ terserOptions: { output: { semicolons: false } } })
    ]
  }
}
