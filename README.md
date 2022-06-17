<p align="center">
  <a
    href="https://easterNday.github.io/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      width="72px"
      src="./docs/.vuepress/public/assets/logo.svg"
      alt="easterNday的博客"
    />
  </a>
</p>

<h1 align="center">easterNday的博客</h1>

<p align="center">
  本人平时在Windows、Arch Linux等方面遇到的一些问题及解决方法记录。
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

##  本地部署

### 部署代码

#### Pacman

```zsh
sudo pacman -S nodejs yarn # 安装 nodejs 和 yarn
git clone https://github.com/easterNday/easterNday.github.io
cd ./arch-guide
yarn install
yarn docs:dev
```

#### HomeBrew

```zsh
brew install yarn # 安装 yarn
git clone https://github.com/easterNday/easterNday.github.io
cd ./arch-guide
yarn install
yarn docs:dev
```

#### Scoop

```powershell
scoop install nodejs # 安装 nodejs
scoop install yarn # 安装 yarn
git clone https://github.com/easterNday/easterNday.github.io
cd ./arch-guide
yarn install
yarn docs:dev
```

### 相关说明

`Yarn` 的安装请参照 [Yarn 中文文档](https://yarn.bootcss.com/docs/install/) 进行。

对于中国境内的用户，下面给出了一些可能常用的例如换源、查看配置等操作的相关代码。

#### 更换淘宝源

```zsh
# 下面是不使用yrm等管理工具进行更换的执行代码
yarn config set registry https://registry.npm.taobao.org -g
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
# 可以使用yrm(https://www.npmjs.com/package/yrm)等工具进行更换
```

#### 查看配置项

```zsh
# yarn的配置项
yarn config list              # 显示所有配置项
yarn config get <key>         # 显示某配置项
yarn config delete <key>      # 删除某配置项
yarn config set <key> <value> [-g|--global]  # 设置配置项
```

本网页利用 `VuePress` 进行构建，具体实现请参照本项目以及 [VuePress中文文档](https://www.vuepress.cn/guide/) 中的相关说明。

## 致谢

[archlinux 简明指南](https://arch.icekylin.online/)： 网站源代码在一定程度上参考了该项目的部分风格样式。

## 版权说明

[![license](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)

网站源代码采用 MIT 许可证；

未经特殊说明，本作品采用 [知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。
