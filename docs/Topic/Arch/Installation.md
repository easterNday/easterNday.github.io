# Arch Linux 简明安装指南

## 自动安装

### 1. 使用 `archinstall` 安装

从[Arch官网下载地址](https://archlinux.org/download/)选择离你最近的镜像站（例如[清华大学 Arch 镜像](https://mirrors.tuna.tsinghua.edu.cn/archlinux/iso/latest/)），下载对应平台架构的镜像文件。

随后利用 [balena-etcher](https://www.balena.io/etcher/) 、 [rufus](https://rufus.ie/zh/) 等烧录软件将镜像文件烧录到U盘中。

连接U盘并将电脑重启到对应的 `Live OS` 中，并进行网络连接(此部分可以参考[连接网络](https://arch.icekylin.online/rookie/basic-install.html#_3-%E8%BF%9E%E6%8E%A5%E7%BD%91%E7%BB%9C))。

之后再终端中运行指令：

```bash
archinstall
```

对应菜单信息列举如下：

+ 配置区域
+ 选择镜像
+ 分区磁盘
+ 格式化分区
+ 启用磁盘加密（可选）
+ 设置计算机名
+ 设置 root 密码
+ 安装引导加载程序

在菜单中进行相关的设置之后即可完成安装。安装完成后会出现一条绿色文本，表示安装完成，可以安全重启。这也是用于重启的命令。

### 2. 使用具有图形安装界面的第三方 Arch Linux 改版

如果您只是想获得一个开箱即用的 Arch Linux 而不用经过繁琐的安装过程（~~其实也没有很繁琐~~），那么您可以尝试一下如下几个发行版：

- [Manjaro](https://manjaro.org/): 目前使用人数最多的第三方发行版本
- [Archcraft](https://archcraft.io/): 基于 ArchLinux 的第三方版本，个人目前在用，部分版本需要收费
- [ArchLinux GUI](https://archlinuxgui.in/): 这是一个纯净的 Arch Linux,只预装了桌面环境

## 手动安装

手动使用命令行安装请阅读[官方指南](https://wiki.archlinux.org/title/Installation_guide)。

如果您觉得官方文档比较难理解，也可以参考 [archlinux 简明指南](https://arch.icekylin.online/) 和 [Arch Linux Studio 指南](https://archlinuxstudio.github.io/ArchLinuxTutorial/) 中对应部分的教程。

> 如果您是需要在 Windows 下启用对应的子系统，请参考[WSL部分](/Topic/Windows/Virtual-Machine/Introduction-of-WSL2.md)

## 参考

- [archinstall](https://wiki.archlinuxcn.org/wiki/Archinstall)