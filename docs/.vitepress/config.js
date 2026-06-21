export default {
  title: 'My App Docs',
  description: 'Everything your users need to get up and running.',
  base: '/docs-site/', // 🔁 Change this to /your-repo-name/

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'GitHub', link: 'https://github.com/your-org/docs-site' }
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
      copyright: 'Copyright © 2025 Your Company'
    },

    search: {
      provider: 'local'
    }
  }
}
