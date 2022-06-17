const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { searchPlugin } = require('@vuepress/plugin-search')
const { defaultTheme } = require('@vuepress/theme-default')
const { gitPlugin } = require('@vuepress/plugin-git')
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: 'https://google.com' },
        ]
    [
  plugins: [
    }
      mediumZoomPlugin(),
      backToTopPlugin(),
      searchPlugin(),
      gitPlugin({
        createdTime: true,
        updatedTime: true,
        contributors: true
      })
    ]
}