# 总览

##  本地部署

::: code-group

```zsh{4,5} [Pacman]
sudo pacman -S nodejs pnpm # 安装 nodejs 和 pnpm
git clone https://github.com/easterNday/easterNday.github.io
cd ./easterNday.github.io
pnpm install
pnpm docs:dev
```


```bash{4,5} [HomeBrew]
brew install pnpm # 安装 pnpm
git clone https://github.com/easterNday/easterNday.github.io
cd ./easterNday.github.io
pnpm install
pnpm docs:dev
```


```shell{5,6} [Scoop]
scoop install nodejs # 安装 nodejs
scoop install pnpm # 安装 pnpm
git clone https://github.com/easterNday/easterNday.github.io
cd ./easterNday.github.io
pnpm install
pnpm docs:dev
```
:::

本网页利用 `VitePress` 进行构建，具体实现请参照本项目以及 [VitePress 官网](https://vitepress.dev) 中的相关说明。

> 若您使用其他包管理器（如 `yarn` 等），请参考指令自行进行对应部分替换。

## 字体来源

- 字体：[NerdFonts](https://www.nerdfonts.com) 下的 `Ubuntu` 字体。

## 版权说明

[![license](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)

网站源代码采用 MIT 许可证；

未经特殊说明，本作品采用 [知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。

