import { DefaultTheme } from "vitepress";

const sidebarConfig: DefaultTheme.Sidebar = {
  "/Overview/": [
    {
      text: "总览",
      items: [
        { text: "博客说明", link: "/Overview/" },
        { text: "规约式提交", link: "/Overview/conventional" },
        { text: "Ant Design Vue", link: "/Overview/Antd" },
      ],
    },
  ],

  "/OS/Arch/": [
    {
      text: "Arch Linux",
      items: [
        { text: "简介", link: "/OS/Arch/" },
        { text: "安装教程", link: "/OS/Arch/Installation.md" },
        { text: "仓库相关", link: "/OS/Arch/Repos.md" },
        { text: "终端相关", link: "/OS/Arch/Terminal.md" },
        {
          text: "美化相关",
          collapsed: true,
          items: [
            {
              text: "自定义开机动画",
              link: "/OS/Arch/Beautify/Splash.md",
            },
            {
              text: "Zsh 美化",
              link: "/OS/Arch/Beautify/Zsh.md",
            },
          ],
        },
        {
          text: "云服务器",
          collapsed: true,
          items: [
            {
              text: "安装教程",
              link: "OS/Arch/ECS/Installation.md",
            },
          ],
        },
        {
          text: "其他设置",
          collapsed: true,
          items: [
            {
              text: "风扇转速设置",
              link: "/OS/Arch/Special/Fan.md",
            },
          ],
        },
        { text: "其他 Linux 相关操作", link: "/OS/Arch/Other.md" },
      ],
    },
  ],

  "/OS/Windows/": [
    {
      text: " Windows",
      items: [
        { text: " 简介", link: "/OS/Windows/" },
        {
          text: " 终端美化",
          link: "/OS/Windows/Beautify/Nerd-Fonts-Supply.md",
        },
        {
          text: " 虚拟机",
          collapsed: true,
          items: [
            {
              text: "Hyper-V 简介",
              link: "/OS/Windows/Virtual-Machine/Hyper-V.md",
            },
            {
              text: "WSL2 相关内容",
              link: "/OS/Windows/Virtual-Machine/WSL2.md",
            },
          ],
        },
      ],
    },
  ],

  "/OS/ChromeOS/": [
    {
      text: "Chrome OS",
      items: [
        { text: "简介", link: "/OS/ChromeOS/" },
        { text: "系统安装", link: "/OS/ChromeOS/Installation.md" },
      ],
    },
  ],

  "/OS/Android/": [
    {
      text: "安卓开发",
      items: [
        { text: "简介", link: "/OS/Android/" },
        {
          text: "从零开始刷机",
          collapsed: true,
          items: [
            {
              text: "前言",
              link: "/OS/Android/Flash/",
            },
            {
              text: "解锁 BootLoader",
              link: "/OS/Android/Flash/Unlock%20Bootloader.md",
            },
          ],
        },
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
              link: "OS/Android/Root/Payload_dumper.md",
            },
          ],
        },
        {
          text: "ROM 开发",
          collapsed: true,
          items: [
            {
              text: "系统开发",
              collapsed: true,
              items: [
                { text: "运行时资源替换", link: "/OS/Android/ROM/System/rro_overlays.md", },
                { text: "自定义 Recovery", link: "/OS/Android/ROM/System/custom_recovery.md", },
              ],
            },
            {
              text: "内核开发",
              collapsed: true,
              items: [
                { text: "内核介绍", link: "/OS/Android/ROM/Kernel/" },
                {
                  text: "内核编译",
                  link: "/OS/Android/ROM/Kernel/Compile.md",
                },
                {
                  text: "KernelSU",
                  link: "/OS/Android/ROM/Kernel/KernelSU.md",
                },
              ],
            },
            {
              text: "通用系统镜像",
              collapsed: true,
              items: [
                { text: "GSI 介绍", link: "/OS/Android/ROM/GSI/" },
                { text: "GSI 刷写", link: "/OS/Android/ROM/GSI/Flash.md" },
                { text: "GSI 动态系统", link: "/OS/Android/ROM/GSI/DSU.md" },
              ],
            },
          ],
        },
        { text: "小米手机", link: "/OS/Android/Xiaomi.md" },
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
            {
              text: "分支操作",
              link: "/Application/Git/Command/Git_Branch.md",
            },
            {
              text: "设置默认编辑器",
              link: "/Application/Git/Command/Git_Editor.md",
            },
          ],
        },
        {
          text: "Github 相关",
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
        { text: "指令查询", link: "https://gitexplorer.com/" },
        { text: "SSH 免密登陆", link: "/Application/Git/SSH/Password_Free_Login..md" },
      ],
    },
  ],

  "/Application/Docker/": [
    {
      text: "Docker",
      items: [
        { text: "简介", link: "/Application/Docker/" },
        {
          text: "无人值守直播",
          collapsed: true,
          items: [
            { text: "Ant Media Server", link: "/Application/Docker/AMS/" },
          ],
        },
      ],
    },
  ],

  "/Application/VSCodium/": [
    {
      text: "VSCodium",
      items: [
        { text: "简介", link: "/Application/VSCodium/" },
        {
          text: "插件推荐",
          collapsed: true,
          items: [
            {
              text: "界面美化插件",
              link: "/Application/VSCodium/Plugins/Beautify.md",
            },
            {
              text: "编程相关插件推荐",
              link: "/Application/VSCodium/Plugins/Coding.md",
            },
          ],
        },
      ],
    },
  ],

  "/Application/Neovim/": [
    {
      text: "Neovim",
      items: [{ text: "简介", link: "/Application/Neovim/" }],
    },
  ],

  "/GameDevelop/Unity/": [
    {
      text: "Unity",
      items: [
        { text: "简介", link: "/GameDevelop/Unity/" },
        {
          text: "破解修改",
          collapsed: true,
          items: [{ text: "指南", link: "/GameDevelop/Unity/Hack/" }],
        },
        {
          text: "插件推荐",
          collapsed: true,
          items: [
            { text: "推荐清单", link: "/GameDevelop/Unity/Plugins/index.md" },
          ],
        },
        {
          text: "项目管理",
          collapsed: true,
          items: [
            {
              text: "忽略列表",
              link: "/GameDevelop/Unity/Project/GitIgnoreTemplate.md",
            },
          ],
        },
      ],
    },
  ],

  "/GameDevelop/Godot/": [
    {
      text: "Godot",
      items: [{ text: "简介", link: "/GameDevelop/Godot/" }],
    },
  ],

  // "/GameDevelop/Websites/": [
  //   {
  //     text: "资源网站",
  //     items: [{ text: "简介", link: "/GameDevelop/Websites/" }],
  //   },
  // ],
};

export default sidebarConfig;
