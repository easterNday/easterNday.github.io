# Arch Linux 子系统安装

以下是使用正式构建的引导映像在 `WSL2` 中安装 `Arch Linux` 的说明。

## 安装前准备

1) [安装 WSL2](https://docs.microsoft.com/en-us/windows/wsl/install-win10) 并 [更新 WSL 内核](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

3) 在命令行中输入 `wsl --set-default-version 2` 将WSL2设置为默认版本

4) 从[Arch官网下载地址](https://archlinux.org/download/)选择离你最近的镜像站（例如[清华大学 Arch 镜像](https://mirrors.tuna.tsinghua.edu.cn/archlinux/iso/latest/)），下载名字形如 `archlinux-bootstrap-<version>-x86_64.tar.gz` 的 bootstrap 镜像

## 镜像安装

1) 首先需要下载最新版的 [LxRunOffline](https://github.com/DDoSolitary/LxRunOffline/releases/latest)，或者通过下述两种方式快速安装

:::: code-group
::: code-group-item Scoop

```ps1
scoop bucket add extras
scoop install lxrunoffline
```

:::
::: code-group-item Chocolatey

```ps1
choco install lxrunoffline
```

:::
::::

2) 然后在命令行下输入下述命令进行镜像安装

```ps1
# 安装名称：你想称呼你的系统叫什么名字，对应wsl启动时名称叫法
# 安装路径：你希望镜像被安装到哪里（一个你能记住的指定位置）
# 安装文件：之前下载的archlinux-bootstrap-<version>-x86_64.tar.gz文件
LxRunOffline i -n <安装名称> -d <安装路径> -f <安装文件> -r root.x86_64
# 例如我给我的镜像起名为Arch，希望安装在 D 盘根目录，则可以运行如下命令：
# LxRunOffline i -n Arch -d D:/ -f archlinux-bootstrap-<version>-x86_64.tar.gz -r root.x86_64
```

其它疑问以及详细的使用手册可以参照 [LxRunOffline 说明文档](https://github.com/DDoSolitary/LxRunOffline/wiki)

如果想要自己手动安装可以参照 [arch_linux_wsl2](https://github.com/nckslvrmn/arch_linux_wsl2)

## 系统配置

1) 在命令行中输入如下命令来启动对应的 Arch 子系统镜像：

```ps1
# 安装名称：与安装过程中的安装名称对应
wsl -d <安装名称>
# 例如之前的过程中我将其起名为Arch,则应该执行如下命令：
# wsl -d Arch
```

2) 初始化keyring

```zsh
# 初始化keyring
pacman-key --init
# keyring填充
pacman-key --populate
```

3) 此时直接更新系统可能无法解析网络的问题，需要运行如下命令更新系统的镜像。

```zsh
# 此处默认镜像列表为中国CN地区
# 如果是别的国家请访问：https://archlinux.org/mirrorlist/
# 可以自动生成对应的 mirrorlist
curl "https://archlinux.org/mirrorlist/?country=CN&protocol=https&ip_version=4&use_mirror_status=on" | cut -c 2- > /etc/pacman.d/mirrorlist
```

4) 更新系统，安装基础环境

```zsh
# 更新系统
pacman -Syu
# 安装一些常用组建
pacman -S base-devel
```

# 致谢

[nckslvrmn/arch_linux_wsl2](https://github.com/nckslvrmn/arch_linux_wsl2)： 提供了相应的英文教程，本部分对其进行了相应的翻译和修改

[DDoSolitary/LxRunOffline](https://github.com/DDoSolitary/LxRunOffline/)： 本文中所使用的安装工具
