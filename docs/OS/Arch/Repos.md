# Arch Linux 仓库

##  系统补熵

有些时候，当我们在进行上游仓库同步的过程中，可能会出现如下提示：

```bash
$ sudo pacman -S archlinuxcn-keyring  
正在解析依赖关系...
正在查找软件包冲突...

软件包 (1) archlinuxcn-keyring-20191127-1

全部安装大小：  0.33 MiB

:: 进行安装吗？ [Y/n] 
(1/1) 正在检查密钥环里的密钥                                             [########################################] 100%
(1/1) 正在检查软件包完整性                                               [########################################] 100%
(1/1) 正在加载软件包文件                                                 [########################################] 100%
(1/1) 正在检查文件冲突                                                   [########################################] 100%
(1/1) 正在检查可用存储空间                                               [########################################] 100%
:: 正在处理软件包的变化...
(1/1) 正在安装 archlinuxcn-keyring                                       [########################################] 100%
==> 正在从 archlinuxcn.gpg 添加密匙...
==> 正在本地签名密匙环中的可信密匙...
  -> 正在本地签名密匙 87F2E316E0ABC98B9DE8D4EF042FD810600954EF...
==> 错误： 87F2E316E0ABC98B9DE8D4EF042FD810600954EF无法在本地签署。
  -> 正在本地签名密匙 99399D88F7B752BF364CD485A85E3925A6211F05...
==> 错误： 99399D88F7B752BF364CD485A85E3925A6211F05无法在本地签署。
  -> 正在本地签名密匙 90403E12F4CE5E0E950E4AD2C96492E347202001...
==> 错误： 90403E12F4CE5E0E950E4AD2C96492E347202001无法在本地签署。
  -> 正在本地签名密匙 F905932C85D705FD2A3CC9E47C63370395FF0792...
  -> 正在本地签名密匙 1F255DC97A5431001F9D01F8CDABD988DD8AD93B...
......
==> Updating trust database...
gpg: 密钥 A903C2BB3CAB5862 生成于未来的 19921 秒后（可能是因为时空扭曲或系统时钟的问题）
gpg: key 1EB2638FF56C0C53: no user ID for key signature packet of class 10
gpg: key 1EB2638FF56C0C53: no user ID for key signature packet of class 10
gpg: key 786C63F330D7CB92: no user ID for key signature packet of class 10
......
gpg: 密钥 A903C2BB3CAB5862 生成于未来的 19920 秒后（可能是因为时空扭曲或系统时钟的问题）
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: 公钥 CF66D153D884358F 在其签名之后的 16 秒生成
gpg: 深度：0  有效性：  1  已签名：  5  信任度：0-，0q，0n，0m，0f，1u
gpg: 公钥 CF66D153D884358F 在其签名之后的 16 秒生成
gpg: 深度：1  有效性：  5  已签名： 79  信任度：0-，0q，0n，5m，0f，0u
gpg: 公钥 CF66D153D884358F 在其签名之后的 16 秒生成
gpg: 深度：2  有效性： 74  已签名： 24  信任度：74-，0q，0n，0m，0f，0u
gpg: 下次信任度数据库检查将于 2020-01-22 进行
archlinuxcn-keyring 的可选依赖
    pkgstats: install to submit package usage statistics
:: 正在运行事务后钩子函数...
(1/1) Arming ConditionNeedsUpdate...
```

出现这个问题由于升级到了 `gnupg-2.1` 后，`Pacman` 上游更新了密钥环的格式，这使得本地的主密钥无法签署其它密钥。

我们可以通过安装 [Haveged](https://wiki.archlinux.org/title/Haveged) 来生成系统熵值的守护进程，它能加快加密软件等关键操作的速度。

### 1. 安装 Haveged：

```bash
sudo pacman -Syu haveged
sudo systemctl start haveged
sudo systemctl enable haveged
```

### 2. 调用 Haveged

首先我们运行如下命令用于删除原有密钥环：

```bash
sudo rm -fr /etc/pacman.d/gnupg
```

随后重新初始化一个新得密钥环：

```bash
sudo pacman-key --init
sudo pacman-key --populate
# 或者您也可以指定对应的仓库
# 例如: 
# sudo pacman-key --populate archlinux
# sudo pacman-key --populate archlinuxcn
```

##  非官方用户仓库

> 此处仅列举出我常用的几个仓库，更多仓库请参考[官方文档](https://wiki.archlinux.org/title/Unofficial_user_repositories)

### 1. ALHP

该仓库适合追新用户，仓库内的大部分内容与官方仓库一样，但是增加了不同的 `x86_64` 平台新功能，并使用了 `LTO` 进行编译。

#### 1.1 安装密钥和镜像列表

```bash
paru -S alhp-keyring alhp-mirrorlist
```

`alhp-keyring` 提供了 `ALHP` 当前使用的签名密钥， `alhp-mirrorlist` 提供了一系列镜像地址 **（暂时没有大陆地址）**。

> 镜像列表存储在 `/etc/pacman.d/alhp-mirrorlist`, 您可以自行编辑、注释它选择您喜欢的镜像。

#### 1.2 修改 `/etc/pacman.conf`

以管理员权限打开 `/etc/pacman.conf`，并在对应部分进行如下修改。

```
[core-x86-64-v3]
Include = /etc/pacman.d/alhp-mirrorlist

[extra-x86-64-v3]
Include = /etc/pacman.d/alhp-mirrorlist

[community-x86-64-v3]
Include = /etc/pacman.d/alhp-mirrorlist

[core]
Include = /etc/pacman.d/mirrorlist

[extra]
Include = /etc/pacman.d/mirrorlist

[community]
Include = /etc/pacman.d/mirrorlist
```

请保证 `[core-x86-64-v3]` 等标签在原来的 `[core]` 等标签上方，不然会默认使用最先找的包而非 `ALHP` 中的包。

修改完成后，请及时同步镜像：

```bash
paru -Syu
```

> 更多注意事项和安装方式请参考 [ALHP 官方文档](https://github.com/an0nfunc/ALHP)。

### 2. ArchLinuxCN

Arch Linux 中文社区仓库 是由 Arch Linux 中文社区驱动的非官方用户仓库。包含中文用户常用软件、工具、字体/美化包等。

#### 2.1 修改 `/etc/pacman.conf`

在文件最后两行添加如下内容：

```bash
[archlinuxcn]
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
```

这里我使用的是清华镜像源码，其他镜像源可以通过百度自行寻找，替换对应地址即可。

#### 2.2 添加密钥

```bash
sudo pacman -Sy archlinuxcn-keyring
```

### 3. Kernel-LTS

该存储库内容较少，只存储了部分预编译的 LTS 内核：

+ linux-lts510
+ linux-lts54
+ linux-lts419
+ linux-lts414
+ linux-lts49
+ linux-lts44

对于某些型号的设备来说，最新的内核也许会有某些部分不能使用(例如触摸屏)，而使用这个仓库替换低版本内核比较方便。

#### 3.1 修改 `/etc/pacman.conf`

在文件最后两行添加如下内容：

```bash
[kernel-lts]
Server = https://repo.m2x.dev/current/$repo/$arch
```

值得注意的是，类似于 `Manjaro` 这种发行版，由于其延迟更新的特性，可能**并不适合**使用本仓库。

#### 3.2 导入内核签名

终端输入如下指令添加本仓库所需密钥：

```bash
sudo pacman-key --keyserver hkps://keyserver.ubuntu.com --recv-key 76C6E477042BFE985CC220BD9C08A255442FAFF0
sudo pacman-key --lsign 76C6E477042BFE985CC220BD9C08A255442FAFF0
```

##  参考

- [GnuPG-2.1 与 Pacman 密钥环](https://www.archlinuxcn.org/gnupg-2-1-and-the-pacman-keyring/)
- [Unofficial user repositories](https://wiki.archlinux.org/title/Unofficial_user_repositories)
- [an0nfunc/ALHP](https://github.com/an0nfunc/ALHP)
- [Arch Linux CN 软件仓库镜像使用帮助](https://mirrors.tuna.tsinghua.edu.cn/help/archlinuxcn/)
- [m2x.dev/kernel-lts](https://gitlab.com/m2x.dev/kernel-lts/repository)