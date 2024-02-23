import { DefaultTheme } from "vitepress";

const navConfig: DefaultTheme.NavItem[] = [
  { text: "总览", link: "/Overview/" },
  {
    text: "操作系统",
    items: [
      { text: " Arch Linux", link: "/OS/Arch/" },
      { text: " Windows", link: "/OS/Windows/" },
      { text: "󰀲 Android", link: "/OS/Android/" },
      { text: " Chrome OS", link: "/OS/ChromeOS/" },
    ],
  },
  {
    text: "工具 | 软件",
    items: [
      { text: " Git", link: "/Application/Git/" },
      { text: "󰨞 VSCodium", link: "/Application/VSCodium/" },
      { text: " Docker", link: "/Application/Docker/" },
      { text: " Neovim", link: "/Application/Neovim/" },
    ],
  },
  {
    text: "游戏开发",
    items: [
      { text: " Unity", link: "/GameDevelop/Unity/" },
      { text: " Godot", link: "/GameDevelop/Godot/" },
      { text: "󰖟 资源网站", link: "/GameDevelop/Websites/" },
    ],
  },
  {
    text: "编程",
    items: [
      { text: " Python", link: "/Coding/Python/" },
    ],
  },
];

export default navConfig;
