module.exports = {
  title: "技術宅日常",
  description: `一些關於網頁開發技術記事`,
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
      { text: '個人作品集', link: '/portfolios/' },
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
        title: '文章列表',   // required
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
  ],
  seo: {
    siteTitle: (_, $site) => $site.title,
    title: $page => $page.title,
    description: $page => $page.frontmatter.description,
    author: (_, $site) => $site.themeConfig.author,
    tags: $page => $page.frontmatter.tags,
    twitterCard: _ => 'summary_large_image',
    type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
    url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
    image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
    publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
    modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
  }

}