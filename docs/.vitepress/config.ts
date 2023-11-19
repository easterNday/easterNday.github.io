import { defineConfig } from "vitepress";

import nav from "./config/nav";
import sidebar from "./config/sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 网站标题部分设置
  title: "easterNday's blog",
  titleTemplate: "DogDayAfternoon",
  description: "Code is Poetry",
  // 路由相关
  cleanUrls: true, // 干净的网址
  // 主题相关
  appearance: "dark", // 默认黑色主题
  lastUpdated: true, // 默认显示上一次更新记录
  themeConfig: {
    siteTitle: false,
    // 主题 Logo
    logo: "/easterNday.svg",

    nav, // 顶部导航栏
    sidebar, // 侧边导航栏

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/easterNday/easterNday.github.io",
      },
    ],
  },
  // Head 部分设置
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "logo.svg" }]],
});
