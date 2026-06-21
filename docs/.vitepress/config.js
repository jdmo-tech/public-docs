export default {
  title: 'JDMO Docs',
  description: 'Documentation for Just Dance Melody Online.',
  base: '/',

  themeConfig: {
    logo: '/icon.png',

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
          { text: 'Game, Platform & Feature Support Matrix', link: '/guide/matrix' },
        ]
      },
      {
        text: 'How to play?',
        items: [
          { text: 'Wii U', link: '/guide/how-to-play/wiiu' },
          { text: 'PC (Crack)', link: '/guide/how-to-play/pc-crack' },
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
