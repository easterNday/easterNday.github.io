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
    displayAllHeaders: true,
    navbar: [
      /*
      { text: 'Github', link: 'https://github.com/easterNday/easterNday.github.io' },
      */
    ],
    sidebar: [
      {
        text: " 不是前言",
        children: [
          "/preface.md",
          {
            text: " 程序员延寿指南",
            link: "https://github.com/geekan/HowToLiveLonger",
          },
        ],
      },
      {
        text: " 眼睛是心灵的窗户",
        children: [
          {
            text: " 基础安装",
            children: [
            ],
          },
          {
            text: " WSL子系统",
            children: [
              "/windows/wsl/Free-WSL-unused-space.md",
              "/windows/wsl/Arch-Linux-on-WSL2.md",
            ],
          },
        ],
      },
    ],
    sidebarDepth: 1,
    smoothScroll: true,
    activeHeaderLinks: false,
    editLink: true,
    editLinkText: ' 编辑此页',
    lastUpdatedText: "ﮮ 最后更新",
    contributorsText: " 参与贡献",
    docsRepo: 'https://github.com/easterNday/easterNday.github.io',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    backToHome: " 把我带回家",
  }),
  plugins: [
    [
      mediumZoomPlugin(),
      backToTopPlugin(),
      searchPlugin(),
      shikiPlugin({
        theme: 'material-palenight'
      })
    ]
  ],
}