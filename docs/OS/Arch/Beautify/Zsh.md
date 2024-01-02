# Zsh 终端美化

##  Oh-my-zsh

[`Oh My Zsh`](https://github.com/ohmyzsh/ohmyzsh)是一个开源、社区驱动的框架，用于管理 Zsh 配置。

1） 手动安装

这部分的安装基本参考[官方文档](https://ohmyz.sh/#install)，或者您可以参考[Github 页面](https://github.com/ohmyzsh/ohmyzsh/wiki)。

::: code-group

```sh [通过 curl 安装 OMZ]
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

```sh [通过 wget 安装 OMZ]
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

:::

2） 利用 Pacman 安装

::: code-group

```bash [Paru]
paru -Sy oh-my-zsh-git
```

:::

如果是通过这种方式安装，那么我们还需要在命令行输入如下指令复制默认配置：

```BASH
cp /usr/share/oh-my-zsh/zshrc ~/.zshrc
```

##  Zim

现在本人已换用 `Zim` 框架来驱动我的 `Zsh`，安装 `Zim` 框架请在命令行输入如下指令:

```sh
curl -fsSL https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh
```

随后即可安装完成。

##  插件推荐

本人一般只使用如下两个插件：

- [zsh-syntax-highlighting(命令语法高亮)](https://github.com/zsh-users/zsh-syntax-highlighting)
- [zsh-autosuggestions(命令自动补全)](https://github.com/zsh-users/zsh-autosuggestions)

插件安装建议参考官方文档。

### omz 自动更新插件

如果您使用 `Oh-my-zsh`, 通过手动安装的方式(官方文档的安装方式)可能无法做到自动更新，如果您不想自行手动更新，可以安装仓库中的对应插件，对应指令如下:

```bash
paru -Sy zsh-syntax-highlighting zsh-autosuggestions
```

由于 OMZ 找不到这两个插件，因此我们要进行一下特殊解决，创立这两个插件的符号链接到 OMZ 的插件目录。

```sh
# 仅适用于使用pacman安装了oh-my-zsh-git包的方式
sudo ln -s /usr/share/zsh/plugins/zsh-syntax-highlighting ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/
sudo ln -s /usr/share/zsh/plugins/zsh-autosuggestions ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/
```

利用这些方式完成安装后，配置 `.zshrc` 文件，找到 plugins=(git)，在这里添加自己想要的插件就可，多个插件名称之间使用空格或者者换行分开（不能使用逗号）。

```sh
...
plugins=(
    git
    zsh-syntax-highlighting
    zsh-autosuggestions
)
...
```

重新打开终端或者终端输入 `zsh` 即可看到效果。

## 󱚥 终端美化

### Nerd Fonts

如果您想要更好看的终端，可能大部分时候都会需要一个 `Nerd Font` 类型的字体，你可以使用如下指令来查看可安装的字体:

```sh
paru -Ss nerd-font
```

个人推荐使用如下字体，这个字体文件较大，因为包含了全量的图标(其他一些字体可能缺少一些不常用字体):

```sh
paru -S nerd-fonts-complete
```

### Powerlevel10k

#### 1. Zim 安装

`Zim` 下主题的安装非常简单，只需要打开 `~/.zimrc`,而后在文件最后加入这一行:

```sh
zmodule romkatv/powerlevel10k
```

随后在终端中执行 `zimfw install` 或者直接重启终端即可查看到效果。

#### 2. OMZ 安装

同样的，`Oh-my-zsh` 安装主题也很简单，只需要在命令行执行如下指令即可:

```sh
git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

##  常见问题

### 1. Git syntax for `^..` and `..` does not work with zsh

在 zsh 中，使用 `git diff A^..B` 来查看 `A` 和 `B` 之间的差异。但是当执行此操作时，您可能得到以下内容:

```sh
zsh: no matches found: A^..B
```

这是因为 `^` 是 `zsh` 文件名或历史记录扩展中的特殊字符（开启 `EXTENDED_GLOB` 选项，可以 `^` 作为文件名扩展的特殊模式字符）。

您可以使用 `noglob` 来避免将 `*`、`^` 和其他通配字符视被作为特殊引用。在 `.zshrc` 文件中添加如下行：

```
alias git='noglob git'
```

或者您可以将命令更改为：

```sh
git diff 'A^..B'
```

##  参考资料

- [Git syntax for ^.. and .. does not work with zsh](https://github.com/ohmyzsh/ohmyzsh/issues/4398)