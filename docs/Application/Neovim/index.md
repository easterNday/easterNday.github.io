# Neovim

本文只介绍如何在 `Arch Linux` 环境下安装 `Neovim`，其他部分（例如插件等）可以通用。

## 安装

`Neovim` 存在许多版本，我个人选择使用 `neovim-git`，命令行执行如下指令进行安装:

```sh
paru -S neovim-git
```

## 将 `vi` 和 `vim` 替换为 `neovim`

### 设置环境变量

一般来说，我们设置环境变量 `$VISUAL` 和 `$EDITOR` 即可完成大部分的文本编辑器的替换。步骤如下:

1. 打开 `/etc/environment`

```sh
nano /etc/envinronment
```

2. 在文本中增加如下内容来设置环境变量:

```sh
$VISUAL=nvim
$EDITOR=nvim
```

### 硬链接

如果您在使用过程中遇到了问题，可以安装如下包来解决问题:

```sh
paru -S neovim-symlinks
# or
paru -S neovim-drop-in
```

这两个包二选一即可，安装完成后即可将将 `vi` 和 `vim` 替换为 `neovim`

## 参考

- [官方 Wiki](https://wiki.archlinuxcn.org/wiki/Neovim)
