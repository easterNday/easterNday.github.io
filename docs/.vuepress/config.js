const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { searchPlugin } = require('@vuepress/plugin-search')
const { defaultTheme } = require('@vuepress/theme-default')
const { shikiPlugin } = require('@vuepress/plugin-shiki')


module.exports = {
  base: '/',
  lang: 'zh-CN',
  title: 'DogDay',
  description: '一个人只要败的漂亮，走的洒脱。那败又何妨，走又何妨。',
  head: [
    [
      "link",
      { rel: "stylesheet", type: "text/css", href: "/css/font.css" },
    ],
  ],
  theme: defaultTheme({
    logo: "/assets/logo.svg",
    repo: 'https://github.com/easterNday/easterNday.github.io',
    editLink : true,
    editLinkText : '编辑此页',
    docsRepo: 'https://github.com/easterNday/easterNday.github.io',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',
    displayAllHeaders: true,
    navbar: [
      /*
      { text: 'Github', link: 'https://github.com/easterNday/easterNday.github.io' },
      */
    ],
  }),
  plugins: [
    [
      mediumZoomPlugin(),
      backToTopPlugin(),
      searchPlugin(),
      shikiPlugin({
        theme:'material-palenight'
      })
    ]
  ],
}