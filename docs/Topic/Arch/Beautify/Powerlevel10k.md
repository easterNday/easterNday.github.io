# Powerlevel10k 终端美化

本文仅介绍在 OMZ 环境系的主题安装，其他安装方法请参考[官方文档](https://github.com/romkatv/powerlevel10k#installation)。

## OMZ 环境下安装

1） 克隆 `powerlevel10k` 仓库

::: code-group

```bash [通用]
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

```bash [国内镜像]
git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

:::

2） 设置主题

打开 `~/.zshrc` 并编辑对应行为如下内容：

```bash
...
ZSH_THEME="powerlevel10k/powerlevel10k"
...
```

安装之后，powerlevel10k 会让你进行配置，自行根据喜好配置即可。

## 字体安装

在上述配置过程中，可能存在很多图标符号看不到的情况，这是因为 `powerlevel10k` 中包含许多特殊图标符号，需要与之兼容的字体。

一般这种情况下我们需要安装对应的 `Nerd Fonts` 字体文件，这里我使用的是 `nerd-fonts-jetbrains-mono` 字体，可以通过如下命令行安装。

```bash
yay -S community/ttf-jetbrains-mono-nerd
```

现在再打开 powerlevel10k 配置（p10k configure），就可以看到图标符号，正常配置了。

## 编辑器配置

对于一般的编辑器来说，只需要将 IDE 字体修改为对应字体即可。

对于 `VS Code` 等编辑器，需要手动输入的，可以进行类似下面的配置：

```json
{
  "editor.fontFamily": "'JetBrainsMono Nerd Font','Droid Sans Mono', 'monospace', monospace"
}
```

> 如果您是在 `WSL` 中的子系统安装，请参考[终端 Nerd Font 字体支持](/Topic/Windows/Beautify/Nerd-Fonts-Supply.md)。
