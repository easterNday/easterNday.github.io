<p align="center">
  <a
    href="https://easterNday.github.io/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      width="72px"
      src="./docs/public/easterNday.png"
      alt="easterNday的博客"
    />
  </a>
</p>

<h1 align="center">easterNday的博客</h1>

<p align="center">
  记录本人在使用各种设备、操作系统以及应用时候出现的问题和解决方案。
</p>

<p align="center">
  <a
    href="https://github.com/easterNday/easterNday.github.io"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      alt="Lines of code"
      src="https://img.shields.io/tokei/lines/github/easterNday/easterNday.github.io"
    />
  </a>
  <a
    href="https://github.com/easterNday/easterNday.github.io"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      alt="GitHub last commit"
      src="https://img.shields.io/github/last-commit/easterNday/easterNday.github.io"
    />
  </a>
  <a
    href="https://github.com/easterNday/easterNday.github.io"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      alt="GitHub Repo stars"
      src="https://img.shields.io/github/stars/easterNday/easterNday.github.io?style=social"
    />
  </a>
</p>

<h2 align="center">
  <a
    href="https://easterNday.github.io/"
    target="_blank"
    rel="noopener noreferrer"
    >阅读地址</a
  >
</h2>

## 本地部署

### 部署代码

#### Pacman

```zsh
sudo pacman -S nodejs pnpm # 安装 nodejs 和 pnpm
git clone https://github.com/easterNday/easterNday.github.io
cd ./easterNday.github.io
pnpm install
pnpm docs:dev
```

#### HomeBrew

```zsh
brew install pnpm # 安装 pnpm
git clone https://github.com/easterNday/easterNday.github.io
cd ./easterNday.github.io
pnpm install
pnpm docs:dev
```

#### Scoop

```powershell
scoop install nodejs # 安装 nodejs
scoop install pnpm # 安装 pnpm
git clone https://github.com/easterNday/easterNday.github.io
cd ./easterNday.github.io
pnpm install
pnpm docs:dev
```

本网页利用 `VitePress` 进行构建，具体实现请参照本项目以及 [VitePress 官网](https://vitepress.dev) 中的相关说明。

## 致谢

[ArchLinux 简明指南](https://arch.icekylin.online/)： 网站源代码在一定程度上参考了该项目的部分风格样式。

[NerdFonts](https://www.nerdfonts.com/cheat-sheet): 网站上使用了相关字体并在部分美化教程中进行了引用。

## 版权说明

[![license](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)

网站源代码采用 MIT 许可证；

未经特殊说明，本作品采用 [知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。
