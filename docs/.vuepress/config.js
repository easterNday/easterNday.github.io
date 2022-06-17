const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { searchPlugin } = require('@vuepress/plugin-search')
const { defaultTheme } = require('@vuepress/theme-default')
const { gitPlugin } = require('@vuepress/plugin-git')

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
      gitPlugin({
        createdTime: true,
        updatedTime: true,
        contributors: true
      })
    ]
  ],
}