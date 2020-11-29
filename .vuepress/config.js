const twemoji = require('twemoji')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'dt.in.th',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Thai Pangsakulyanont’s web site',

  patterns: ['**/*.md', '**/*.vue', '!README.md'],

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#353433' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,700;1,400;1,700&display=swap'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADABAMAAACg8nE0AAAAGFBMVEUAAADd/3' +
          'XZ/3LY/XHY/XDX/XDX/HDX/HBGVehjAAAAB3RSTlMAFThdhLvo4ZXzLQAAArdJREFUeAHs18Fu00AQxnHHCe' +
          'GaA9DrSgi4Wgjo1YhSrgWwfI1L5b3S1t7v9TnshZWIs/buXygovwfw1DPzTdwi2urlVdP3Ut83V293RWblu8' +
          'bqD675ZHI+/rP+4ocBHk+UeG91kPue/udfa9Jd4ks8szrCfUxqjyIktOmDovwsllldK9Ldjn2+r8A931cA+p' +
          '82h1ea6dvM/ddss/KwtprNVTMG3GqBMX7Qr7XIbRFpo4VqskG+SVyDvFu0QbFNapVgLI56riRfYyeMzfmFEn' +
          'XFpNIqkTPUikataqkMDPUCEa+wssrA7bgV8jomAxFZeKJMboArFBiBMxpzVN8omwdsRyc21Y+YHPMXZTQQZy' +
          'hggBQHOiYEE1FYK7OK7ZDUcTvkDeAOeQZI2UTWLpXd4+E7BNyjjQA1t6Rexy2pN4QjQIewkdghbIXYkykIk2' +
          'CFcMCpDlXcIQrP0YUg92DMgqhZCZ1yKYzBchxkeSvMHstxkOVWmJFdIsnBSyQZdomkGrpEwTV6KtAv/78f5w' +
          'E6dcG5ayU2CEKhMfBBWAtVsTmTajZn0g1fYCvUvrgQ6p68FP5WXAr1yJ4iaeALtEKNfAErlDte4FxAsP+ggB' +
          'Xr32/RucDpX9PT/0Xjf/Txzxb8wwv/dDz9r+vftdyBAAAAAMIwf+tRDKP66wGkR6geAnuM/UG8Vwm9DOl1Ti' +
          '+keqXWS8Fea/5idlbLvRzv9X4fKPbE8keiP3P9oe5PjX8s/XPvH6z/5N6hgY49fHCjoycdnun4zweYOoLVIb' +
          'KPwXWQr6OIH6bsOGgHWj+S26HijkV/sLuj6R+u73pAFxy+otElk6/JdNHnq0pXtgq6WBDetrLXpcOtTXbx86' +
          'urX779+vAXoL/C/SX0r9H/I4B/ZfDPGP6dxD/E+Jce/5Tk36r8Y5h/bfPPefq9EI9VRTu5xbU5AAAAAElFTkSuQmCC'
      }
    ],
    [
      'link',
      { rel: 'webmention', href: 'https://webmention.io/dt.in.th/webmention' }
    ],
    ['link', { rel: 'pingback', href: 'https://webmention.io/dt.in.th/xmlrpc' }]
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
    editLinks: true,
    search: false,
    docsDir: '',
    editLinkText: '',
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/dtinth'
      },
      {
        text: 'YouTube',
        link: 'https://dt.in.th/go/youtube'
      }
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
  plugins: [
    '@vuepress/plugin-back-to-top',
    [
      '@vuepress/plugin-medium-zoom',
      {
        selector:
          '.theme-default-content :not(a) > img:not([data-zoomable="false"]):not(.emoji)'
      }
    ],
    ['@vuepress/google-analytics', { ga: 'UA-4343503-1' }],
    (pluginOptions, context) => ({
      name: 'dtinth',
      extendPageData: $page => {
        const match = String($page.path).match(
          /^\/([a-zA-Z0-9][a-zA-Z0-9_.-]*)\.html$/
        )
        const existingOgImage = ($page.frontmatter.meta || []).find(
          m => m.property === 'og:image'
        )
        if (match && !existingOgImage) {
          if (!$page.frontmatter.meta) {
            $page.frontmatter.meta = []
          }
          const screenshotVersion = $page.frontmatter.screenshotVersion || 1
          const screenshotUrl = `https://ss.dt.in.th/api/screenshots/dt.in.th-${match[1]}.png?v=${screenshotVersion}`
          $page.frontmatter.meta.push({
            property: 'og:image',
            content: screenshotUrl
          })
        }
      }
    })
  ],

  postcss: {
    plugins: [
      require('autoprefixer'),
      require('postcss').plugin('postcss-screaming', () => css => {
        css.walkDecls(decl => {
          if (!decl.prop.startsWith('--')) decl.prop = decl.prop.toUpperCase()
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
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'))
      md.renderer.render = (original =>
        function() {
          return twemoji.parse(original.apply(this, arguments))
        })(md.renderer.render)
    }
  }
}
