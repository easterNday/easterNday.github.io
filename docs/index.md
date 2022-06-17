---
home: true
heroImage: /assets/easterNday.svg
heroText:  尘世中一个迷途小书童 
tagline: 一个人只要败的漂亮，走的洒脱。那败又何妨，走又何妨。
navbar: true
actions:
  - text: 浏览博客
    link: /zh/guide/
    type: primary
  - text: 个人简历
    link: /guide/
    type: secondary
features:
- title:  Windows
  details: 终於摸出来，但岁月却不回来，错的爱，乃必经的配菜。——《葡萄熟透时》
- title:  Arch Linux
  details: 我以为要是唱得用心良苦，你总会对我多点在乎。——《K歌之王》
- title:  LeetCode
  details: 拥不拥有也会记住谁，快不快乐有天总过去。——《人来人往》
- title: ﲎ Android
  details: 只喜爱跟一颗心血战，亦怀念那些吸不透的香烟。--《绵绵》
- title: ﮭ Unity
  details: 在有生的瞬间能遇见你，竟花光所有运气。——《明年今日》
- title:  未完待续……
  details: 即使再见面，成熟的表演，不如不见。——《不如不见》
footer: '<p style="font-size: 8px">
  Code licensed under MIT, documentation under
  <a
    href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh"
    class="grabient-text"
    target="_blank"
    rel="noopener noreferrer"
    >CC BY-SA 4.0</a
  >. Made with 
  <a
    href="https://github.com/easterNday"
    class="grabient-text"
    target="_blank"
    rel="noopener noreferrer"
    >easterNday</a
  >.
</p>'
footerHtml: true
---

## 💻 本地运行

:::: code-group
::: code-group-item Pacman

```bash{4-5}
sudo pacman -S nodejs yarn # 安装 nodejs 和 yarn
git clone https://github.com/easterNday/easterNday.github.io
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::: code-group-item HomeBrew

```zsh{4-5}
brew install yarn # 安装 yarn
git clone https://github.com/easterNday/easterNday.github.io
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::: code-group-item Scoop

```bat{5-6}
scoop install nodejs # 安装 nodejs
scoop install yarn # 安装 yarn
git clone https://github.com/easterNday/easterNday.github.io
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::::

其它系统请参阅 [Yarn 中文文档](https://yarn.bootcss.com/docs/install/) 安装 `Yarn`。

## 🌱 参与贡献

欢迎对指南内容以及网站源码做出贡献，也欢迎对本指南的上游文档做出贡献。

## 🎋 版权说明

[![by-sa](/assets/svg/by-sa.svg)](https://creativecommons.org/licenses/by-sa/4.0/deed.zh)

网站源代码采用 MIT 许可证；未经特殊说明，本作品采用 [知识共享署名-相同方式共享 4.0 国际许可协议](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) 进行许可。

