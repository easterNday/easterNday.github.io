# Arch Linux 终端相关内容

本人目前使用的终端是 `zsh` 。

`Zsh` 是一个功能强大的 shell ，既可以作为交互式 shell ，也可以作为脚本语言解释器。虽然与 POSIX sh 兼容（默认情况下，只有在发出仿真 sh 时才兼容），但它提供了改进的制表符完成和 globbing 等优点。

安装命令如下：

```sh
sudo pacman -Sy zsh
```

运行后你应该会看到新用户向导（zsh-newuser-install），它可以协助你完成一些基础配置。如果要跳过这一步骤，可以按 q 退出。如果你没有看到新用户向导（zsh-newuser-install），可以手动运行以下命令：

```sh
autoload -Uz zsh-newuser-install
zsh-newuser-install -f
```

设置 `Zsh` 为默认终端

```sh
chsh -s /usr/bin/zsh
```

至此， `Zsh` 设置基本完成，更多设置可以参考[官方 Wiki](https://wiki.archlinux.org/title/zsh)。


## 终端美化

终端美化请详见 [Zsh 美化](/Topic/Arch/Beautify/Zsh.md) 部分。

## 终端密码显示 `*`

首先你需要有一个文本编辑器，比如 `nano`，随后执行如下指令:

```sh
EDITOR=nano visudo
```

随后修改打开的文件，在 `Defaults specification` 部分添加如下内容：

```sh
##
## Defaults specification
##
...
Defaults pwfeedback
...
```

保存后，重启终端输入 `sudo` 即可查看效果。