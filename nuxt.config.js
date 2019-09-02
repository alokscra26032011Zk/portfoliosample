module.exports = {
  loading: false,
  head: {
    titleTemplate: '%s - Alok Kumar',
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'ie=edge'
      },
      {
        hid: 'theme',
        name: 'theme-color',
        content: '#0076FF'
      },
      {
        name: 'description',
        content: 'Interior Designer and UI/UX . Dreams in HTML, CSS and Javascript, lives in Bangalore, India. Helps other people build digital products.'
      },
      {
        name: 'keywords',
        content: 'interaction design, ux design, frontend, gent, belgium, simon, wuyts'
      },
      {
        property: 'og:title',
        content: 'Alok Kumar - Interaction Designer'
      },
      {
        property: 'og:description',
        content: 'Interior Designer and UI/UX. Dreams in HTML, CSS and Javascript, lives in Bangalore, India. Helps other people build digital products.'
      },
      {
        hid: 'image',
        property: 'og:image',
        content: 'https://www.simonwuyts.com/images/social.png'
      },
      {
        hid: 'url',
        property: 'og:url',
        content: 'https://www.simonwuyts.com/'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:image:alt',
        content: 'Simon Wuyts - Interaction Designer'
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicons/favicon-16.png',
        sizes: '16x16'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicons/favicon-32.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicons/favicon-64.png',
        sizes: '64x64'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicons/favicon-96.png',
        sizes: '96x96'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicons/favicon-120.png',
        sizes: '120x120'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicons/favicon-156.png',
        sizes: '156x156'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicons/favicon-167.png',
        sizes: '167x167'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicons/favicon-180.png',
        sizes: '180x180'
      },
      {
        rel: 'apple-touch-icon',
        href: '/images/favicons/favicon-120.png'
      },
    ]
  },
  css: [
    {
      src: '~/css/reset.scss',
      lang: 'scss'
    }
  ],
  build: {
    vendor: [
      'vue-i18n'
    ]
  },
  router: {
    middleware: 'i18n'
  },
  plugins: [
    '~/plugins/i18n.js',
    {
      src: '~/plugins/typekit.js',
      ssr: false
    }
  ],
  modules: [
    '@nuxtjs/sitemap',
    [
      'nuxt-matomo',
      {
        matomoUrl: '//analytics.simonwuyts.com/',
        siteId: 1
      }
    ]
  ],
  generate: {
    routes: [
      '/nl/',
      '/nl/services',
      '/nl/work',
      '/nl/work/bedrock',
      '/nl/work/gva-archief',
      '/nl/work/kempenkuur',
      '/nl/work/portfolio',
      '/nl/about',
      '/nl/contact'
    ]
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.simonwuyts.com',
    generate: true,
    routes: [
      '/nl/',
      '/nl/services',
      '/nl/work',
      '/nl/work/bedrock',
      '/nl/work/gva-archief',
      '/nl/work/kempenkuur',
      '/nl/work/portfolio',
      '/nl/about',
      '/nl/contact'
    ]
  }
}
