---
home: true
heroImage: https://github-readme-stats.vercel.app/api?username=easterNday&show_icons=true&theme=moltack
heroText: easterNday的博客
tagline: 一个人只要败的漂亮，走的洒脱。那败又何妨，走又何妨。
navbar: true
actions:
  - text:  开始阅读
    link: /preface
    type: primary
  - text:  个人仓库
    link: https://github.com/easterNday
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
    href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
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
##  本地部署

### 部署代码

:::: code-group
::: code-group-item Pacman

```zsh
sudo pacman -S nodejs yarn # 安装 nodejs 和 yarn
git clone https://github.com/easterNday/easterNday.github.io
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::: code-group-item HomeBrew

```zsh
brew install yarn # 安装 yarn
git clone https://github.com/easterNday/easterNday.github.io
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::: code-group-item Scoop

```powershell
scoop install nodejs # 安装 nodejs
scoop install yarn # 安装 yarn
git clone https://github.com/easterNday/easterNday.github.io
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::::

### 相关说明

`Yarn` 的安装请参照 [Yarn 中文文档](https://yarn.bootcss.com/docs/install/) 进行。

对于中国境内的用户，下面给出了一些可能常用的例如换源、查看配置等操作的相关代码。

:::: code-group
::: code-group-item 更换淘宝源

```zsh
# 下面是不使用yrm等管理工具进行更换的执行代码
yarn config set registry https://registry.npm.taobao.org -g
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
# 可以使用yrm(https://www.npmjs.com/package/yrm)等工具进行更换
```

:::
::: code-group-item 查看配置项

```zsh
# yarn的配置项
yarn config list              # 显示所有配置项
yarn config get <key>         # 显示某配置项
yarn config delete <key>      # 删除某配置项
yarn config set <key> <value> [-g|--global]  # 设置配置项
```

:::
::::

本网页利用 `VuePress` 进行构建，具体实现请参照本项目以及 [VuePress中文文档](https://www.vuepress.cn/guide/) 中的相关说明。

##  致谢

[archlinux 简明指南](https://arch.icekylin.online/)： 网站源代码在一定程度上参考了该项目的部分风格样式。

##  版权说明

[![license](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)

网站源代码采用 MIT 许可证；

未经特殊说明，本作品采用 [知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。
