module.exports = {
  title: "Daniel Hsieh' blog",
  description: `A simple VuePress project deployed with github.`,
  head: [
    // ['link', {
    //   rel: 'stylesheet',
    //   href: `https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css`
    // }],
    // ['script', { src: `https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js` }],
    // ['script', { src: `https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js` }],
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
}