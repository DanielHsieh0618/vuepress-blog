module.exports = {
  title: "Daniel Hsieh' blog",
  description: `A simple VuePress project deployed with github.`,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guides/' },
    ],
    sidebar: [
      {
        title: 'tech',   // required
        // path: '/posts/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/posts/20210307_1_first_day', 'First Day']
        ]
      },
      {
        title: 'journals',   // required
        // path: '/posts/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/journals/20210307_1_first', 'First']
        ]
      },
    ]
  },
  dest: 'public',
}