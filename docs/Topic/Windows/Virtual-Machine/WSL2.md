#  Linux 子系统

##  WSL 介绍与安装

`Windows Subsystem for Linux`  (以下简称为 `WSL`)允许开发人员直接在Windows上运行GNU/Linux环境，包括大多数命令行工具、实用程序和应用程序，无需修改，无需传统虚拟机或双引导设置的开销。

本部分主要以 `WSL2` 作为操作对象，不涉及 `WSL1` 相关内容，若对于其他内容感兴趣，请参考[微软官方文档](https://docs.microsoft.com/en-us/windows/wsl/)。`WSL1` 到 `WSL2` 的更新请升级对应的 [WSL 内核](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)。如果需要默认使用 `WSL2` 请在命令行中输入 `wsl --set-default-version 2`。

上述官方文档提供了安装的具体方法，本部分下面会以 `Arch Linux` 为例讲述如何构建其它官方不支持的 Linux 子系统，文章部分内容参考自[nckslvrmn的教程](https://github.com/nckslvrmn/arch_linux_wsl2)。

##  安装 Arch Linux 子系统

### 安装前准备

从[Arch官网下载地址](https://archlinux.org/download/)选择离你最近的镜像站（例如[清华大学 Arch 镜像](https://mirrors.tuna.tsinghua.edu.cn/archlinux/iso/latest/)），下载名字形如`archlinux-bootstrap-<version>-x86_64.tar.gz` 的 bootstrap 镜像。

下载完成后需要**镜像文件**放入 Linux 系统中(一般使用 `WSL2` 默认安装的 `Ubuntu` 系统)，并切换到存放 `archlinux-bootstrap-<version>-x86_64.tar.gz` 的 bootstrap 镜像对应的目录下。

### 镜像安装

1) 在准备好的 Linux 系统中以管理员(Root)身份运行如下命令：

```bash
# 1. 解压下载镜像
tar -zxvf archlinux-bootstrap-<version>-x86_64.tar.gz
# 2. 切换到解压后的目录中
cd root.x86_64
# 3. 重新压缩文件夹内容（以管理员身份）
tar -zcvf arch_bootstrap.tar.gz .
```

> 之所以必须以管理员(Root)身份执行此操作，是为了在将引导文件系统导入 `WSL2` 时保留其文件所有权。如果不这样做，您在与导入的操作系统交互时可能会遇到权限问题。

2） 重新创建完压缩文件后，将文件移动到将安装 `Arch` 的计算机上，并在命令行执行如下操作：

```powershell
# 参数说明：
# DistroName : 安装子系统时及以后启动时显示的分发名称
# \path\to\where\u\want\to\save : 你想要存储对应虚拟磁盘文件的目录
# \path\to\arch_bootstrap.tar.gz : 存放刚刚重新压缩过的镜像的路径
wsl --import <DistroName> \path\to\where\u\want\to\save \path\to\arch_bootstrap.tar.gz
# 例子：
wsl --import Arch D:\WSL\Arch D:\arch_bootstrap.tar.gz
# 此时我将存放在 D 盘的 arch_bootstrap.tar.gz 安装到了 D:\WSL\Arch 文件夹下(该文件夹下面会有一个虚拟镜像文件)，并且该系统在 WSL 中对应的名称为 Arch
```

3） `Arch` 现在已经可以启动了。此时我们需要进入子系统。

4） 初始化keyring

```bash
# 初始化keyring
pacman-key --init
# keyring填充
pacman-key --populate  archlinux
```

5） 此时直接更新系统可能无法解析网络的问题，需要运行如下命令更新系统的镜像。

```bash
# 此处默认镜像列表为中国CN地区
# 如果是别的国家请访问：https://archlinux.org/mirrorlist/
# 可以自动生成对应的 mirrorlist
curl "https://archlinux.org/mirrorlist/?country=CN&protocol=https&ip_version=4&use_mirror_status=on" | cut -c 2- > /etc/pacman.d/mirrorlist
```

6） 更新系统，安装基础环境

```zsh
# 更新系统
pacman -Syu
# 安装一些常用组件
pacman -S base-devel
```

### 其他设置

关于 Arch 的更多安装信息可以参考[archlinux 简明指南](https://arch.icekylin.online/)以及[nckslvrmn的指南](https://github.com/nckslvrmn/arch_linux_wsl2#next-steps)，在此处仅介绍两处常用的指令。

#### 1. 设置 `Arch` 为默认启动的子系统

```powershell
wsl -d Arch
```

#### 2. 终端默认用户打开

执行这一步骤的前提是您必须拥有一个非 Root 的普通用户账户（用户创建可以参考文章：[准备非 root 用户](https://arch.icekylin.online/rookie/desktop-env-and-app.html#_2-%E5%87%86%E5%A4%87%E9%9D%9E-root-%E7%94%A8%E6%88%B7)）。

![Arch默认用非Root用户登录](/assets/Windows/Virtual-Machine/Arch_boot_with_unroot.png)

随后，我们打开 `Windows Terminal` 并在设置中配置相关的配置文件中配置对应的命令行为 `wsl ~ -u <username>` ，完成这一步后每次用 `Windows Terminal` 打开子系统就会默认用你设定的非 Root 用户登录。

## 󰋊 Linux 子系统的迁移

### 简介

在使用 `Windows Subsystem for Linux`  (以下简称为 `WSL`) 的时候，其一般情况下是安装在系统盘 `C` 盘，但是就像安装一些应用程序一样，很多时候我们并不想将其安装在这里，所以很多时候我们需要对 `WSL` 进行迁移。

### 迁移前准备

在迁移前我们首先要需要将当前正在运行的 `WSL` 停止运行，对应的命令行如下：

``` ps
wsl --shutdown
```

### 导出对应的分发版本

在停止了对应的分发版本后，我们还需要进行**对应分发版本**的导出，对应命令行如下：

``` ps
wsl --export <DistributionName> </path/to/where/u/want/to/save>
# For example:
# wsl --export Ubuntu D:/export.tar
```

查看系统内已有所有的分发版本的命令行如下：

``` ps
wsl --list
```

### 注销原有分发版本记录

导出完毕之后，我们要做的就是将原有的分发版本的记录进行注销，对应命令行命令如下：

``` ps
wsl --unregister <DistributionName>
```

### 重新导入分发版本

注销完毕之后，我们选定一个新的位置，并将其重新导入，对于命令行如下：

``` ps
wsl --import <DistributionName> <path/to/new/dirctory> </path/to/where/u/saved> --version 2
# For example:
# wsl --import Ubuntu D:\export\ D:\export.tar --version 2
```

### 重新确定登录用户

在重新导入对应分发版本之后，我们再次登录对应版本之后可能遇到对应子系统的默认登陆用户并非自己之前设定的问题，此时我们需要对对应分发版本重新设置默认登陆用户，请参考前文的介绍。
