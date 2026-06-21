export default {
  title: 'JDMO Docs',
  description: 'Documentation for Just Dance Melody Online.',
  base: '/public-docs/',

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'GitHub', link: 'https://github.com/jdmo-tech/public-docs' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Configuration', link: '/guide/configuration' },
        ]
      },
      {
        text: 'Going Further',
        items: [
          { text: 'FAQ', link: '/guide/faq' },
        ]
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 JDMO Team'
    },

    search: {
      provider: 'local'
    }
  }
}
