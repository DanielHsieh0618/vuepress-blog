module.exports = {
  title: "Daniel Hsieh' blog",
  description: `A simple VuePress project deployed with github.`,
  head: [
    ['link', { rel: 'icon', href: '/icon-192x192.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon-192x192.png' }],
    ['link', { rel: 'mask-icon', href: '/icon-256x256.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icon-192x192.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    nav: [
      { text: '部落格', link: '/posts/' },
      // { text: 'Guide', link: '/guides/' },
      { text: '作品集', link: '/portfolios/' },
    ],
    sidebar: [
      // {
      //   title: 'tech',   // required
      //   path: '/tech/',      // optional, link of the title, which should be an absolute path and must exist
      //   collapsable: true, // optional, defaults to true
      //   //sidebarDepth: 1    // optional, defaults to 1
      //   children: [
      //     ['/tech/20210307_1_first_day', 'First Day']
      //   ]
      // },
      {
        title: 'Blog',   // required
        path: '/posts/',      // optional, link of the title, which should be an absolute path and must exist
        //collapsable: true, // optional, defaults to true
        //sidebarDepth: 1,    // optional, defaults to 1
        // children: [
        //   ['/posts/20210307_1_first_day', 'First Day']
        // ]
      },
    ]
  },
  dest: 'public',
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }]
  ]
}