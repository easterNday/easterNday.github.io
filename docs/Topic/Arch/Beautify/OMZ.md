# Oh-my-zsh 安装

## OMZ 简介

`Zsh` 是一个功能强大的 shell ，既可以作为交互式 shell ，也可以作为脚本语言解释器。虽然与 POSIX sh 兼容（默认情况下，只有在发出仿真sh时才兼容），但它提供了改进的制表符完成和 globbing 等优点。

[`Oh My Zsh`](https://github.com/ohmyzsh/ohmyzsh)是一个开源、社区驱动的框架，用于管理Zsh配置。

## Zsh 安装

在安装 `OMZ` 之前，请务必确保您拥有 `Zsh` 。

1） 运行如下命令安装 `Zsh`：

:::: code-group
::: code-group-item Pacman

```bash
sudo pacman -Sy zsh
```

:::
::: code-group-item yay

```bash
yay -Sy zsh
```

:::
::::


> 安装 `zsh` 包。如果想要更精确地补全命令，可以同时安装 `zsh-completions` 包。

2） 在终端里面输入以下命令，确保已经正确安装了 `Zsh` ：

```bash
zsh
```

运行后你应该会看到新用户向导（zsh-newuser-install），它可以协助你完成一些基础配置。如果要跳过这一步骤，可以按 q 退出。如果你没有看到新用户向导（zsh-newuser-install），可以手动运行以下命令：

```bash
autoload -Uz zsh-newuser-install
zsh-newuser-install -f
```

3） 设置 `Zsh` 为默认终端

```bash
chsh -s /usr/bin/zsh
```

至此， `Zsh` 设置基本完成，更多设置可以参考[官方Wiki](https://wiki.archlinux.org/title/zsh)

## OMZ 安装

1） 手动安装

这部分的安装基本参考[官方文档](https://ohmyz.sh/#install)，或者您可以参考[Github页面](https://github.com/ohmyzsh/ohmyzsh/wiki)。

:::: code-group
::: code-group-item 通过 curl 安装 OMZ

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

:::
::: code-group-item 通过 wget 安装 OMZ

```bash
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

:::
::::

2） 利用 Pacman 安装

:::: code-group
::: Pacman

```bash
sudo pacman -Sy oh-my-zsh-git
```

:::
::: code-group-item yay

```bash
yay -Sy oh-my-zsh-git
```

:::
::::

如果是通过这种方式安装，那么我们还需要在命令行输入如下指令复制默认配置：

```BASH
cp /usr/share/oh-my-zsh/zshrc ~/.zshrc
```

## OMZ 插件推荐

本人一般只使用如下两个插件：

- [zsh-syntax-highlighting(命令语法高亮)](https://github.com/zsh-users/zsh-syntax-highlighting)
- [zsh-autosuggestions(命令自动补全)](https://github.com/zsh-users/zsh-autosuggestions)

插件安装建议参考官方文档，但是官方文档的安装方式无法做到自动更新，如果您不想自行手动更新，可以安装仓库中的对应插件并使用 `oh-my-zsh-git` ：

```bash
yay -Sy zsh-syntax-highlighting zsh-autosuggestions
```

由于 OMZ 找不到这两个插件，因此我们要进行一下特殊解决，创立这两个插件的符号链接到 OMZ 的插件目录。

```bash
# 仅适用于使用pacman安装了oh-my-zsh-git包的方式
sudo ln -s /usr/share/zsh/plugins/zsh-syntax-highlighting /usr/share/oh-my-zsh/custom/plugins/
sudo ln -s /usr/share/zsh/plugins/zsh-autosuggestions /usr/share/oh-my-zsh/custom/plugins/
```

利用这些方式完成安装后，配置 `.zshrc` 文件，找到plugins=(git)，在这里添加自己想要的插件就可，多个插件名称之间使用空格或者者换行分开（不能使用逗号）。

```
...
plugins=(
    git
    zsh-syntax-highlighting
    zsh-autosuggestions
)
...
```

重新打开终端或者终端输入 `zsh` 即可看到效果。