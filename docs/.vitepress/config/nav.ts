import { DefaultTheme } from "vitepress";

const navConfig: DefaultTheme.NavItem[] = [
  { text: "总览", link: "/Overview/" },
  {
    text: "操作系统",
    items: [
      { text: "Arch Linux", link: "/Topic/Arch/" },
      { text: "Windows", link: "/Topic/Windows/" },
      { text: "Android", link: "/Topic/Android/" },
      { text: "Chrome OS", link: "/Topic/ChromeOS/" },
    ],
  },
  {
    text: "工具 | 软件",
    items: [
      { text: "Git", link: "/Application/Git/" },
      { text: "Unity", link: "/Application/Unity/" },
    ],
  },
];

export default navConfig;
