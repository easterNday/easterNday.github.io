import { DefaultTheme } from "vitepress";

const sidebarConfig: DefaultTheme.Sidebar = {
  "/Overview/": [
    {
      text: "总览",
      items: [
        { text: "博客说明", link: "/Overview/" },
        { text: "规约式提交", link: "/Overview/conventional" },
      ],
    },
  ],

  "/Topic/Arch/": [
    {
      text: "Arch Linux",
      items: [
        { text: "简介", link: "/Topic/Arch/" },
        { text: "安装教程", link: "/Topic/Arch/Installation.md" },
        { text: "仓库相关", link: "/Topic/Arch/Repos.md" },
        { text: "终端相关", link: "/Topic/Arch/Terminal.md" },
        {
          text: "其他设置",
          collapsed: true,
          items: [
            {
              text: "风扇转速设置",
              link: "/Topic/Arch/Special/Fan.md",
            },
          ],
        },
      ],
    },
  ],

  "/Topic/Windows/": [
    {
      text: " Windows",
      items: [
        { text: " 简介", link: "/Topic/Windows/" },
        {
          text: " 终端美化",
          link: "/Topic/Windows/Beautify/Nerd-Fonts-Supply.md",
        },
        {
          text: " 虚拟机",
          collapsed: true,
          items: [
            {
              text: "Hyper-V 简介",
              link: "/Topic/Windows/Virtual-Machine/Hyper-V.md",
            },
            {
              text: "WSL2 相关内容",
              link: "/Topic/Windows/Virtual-Machine/WSL2.md",
            },
          ],
        },
      ],
    },
  ],

  "/Topic/ChromeOS/": [
    {
      text: "Chrome OS",
      items: [
        { text: "简介", link: "/Topic/ChromeOS/" },
        { text: "系统安装", link: "/Topic/ChromeOS/Installation.md" },
      ],
    },
  ],

  "/Topic/Android/": [
    {
      text: "安卓开发",
      items: [
        { text: "简介", link: "/Topic/Android/" },
        {
          text: "Root 相关",
          collapsed: true,
          items: [
            {
              text: "IdontKnowRoot",
              link: "https://root.dianas.cyou/",
            },
            {
              text: "镜像提取 Payload-dumper",
              link: "Topic/Android/Root/Payload_dumper.md",
            },
          ],
        },
        { text: "DSU", link: "/Topic/Android/DSU/" },
        {
          text: "内核开发",
          collapsed: true,
          items: [
            { text: "内核介绍", link: "/Topic/Android/Kernel/" },
            { text: "内核编译", link: "/Topic/Android/Kernel/Compile.md" },
            { text: "KernelSU", link: "/Topic/Android/Kernel/KernelSU.md" },
          ],
        },
        { text: "小米手机", link: "/Topic/Android/Xiaomi.md" },
      ],
    },
  ],

  "/Application/Git/": [
    {
      text: "Git",
      items: [
        { text: "简介", link: "/Application/Git/" },
        {
          text: "相关指令",
          collapsed: true,
          items: [
            { text: "Git-LFS", link: "/Application/Git/Command/Git_LFS.md" },
          ],
        },
        {
          text: "Githbu 相关",
          collapsed: true,
          items: [
            {
              text: "Github 授权",
              link: "/Application/Git/Github/Github_Credentials.md",
            },
            {
              text: "Github 加速",
              link: "/Application/Git/Github/Github520.md",
            },
          ],
        },
      ],
    },
  ],

  "/Application/Unity/": [
    {
      text: "Unity",
      items: [
        { text: "简介", link: "/Application/Unity/" },
        {
          text: "破解修改",
          collapsed: true,
          items: [{ text: "指南", link: "/Application/Unity/Hack/" }],
        },
        {
          text: "插件推荐",
          collapsed: true,
          items: [
            { text: "推荐清单", link: "/Application/Unity/Plugins/index.md" },
          ],
        },
        {
          text: "项目管理",
          collapsed: true,
          items: [
            {
              text: "忽略列表",
              link: "/Application/Unity/Project/GitIgnoreTemplate.md",
            },
          ],
        },
      ],
    },
  ],
};

export default sidebarConfig;