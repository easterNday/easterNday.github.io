#  云服务器安装 ArchLinux

##  检查存储空间和内存大小

使用此方法前请确保根分区剩余空间大于 3G 且磁盘大小大于等于 20G，否则可能无法安装成功。

服务器的硬盘和存储空间剩余大小可以通过以下命令查看:

```bash
df -h
# 输出格式如下所示:
# Filesystem      Size  Used Avail Use% Mounted on
# udev            965M     0  965M   0% /dev
# tmpfs           200M  8.9M  191M   5% /run
# /dev/vda1        40G   16G   22G  42% /
# tmpfs           997M   88K  997M   1% /dev/shm
# tmpfs           5.0M  4.0K  5.0M   1% /run/lock
# tmpfs           997M     0  997M   0% /sys/fs/cgroup
# tmpfs           200M     0  200M   0% /run/user/0
```

服务器的内存大小可以通过以下命令查看:

```bash
free -h
# 输出格式如下所示:
#         total   used    free    shared  buff/cache  available
# Mem:    1.9G    683M    269M    36M         1.0G        1.1G
# Swap:   1.0G    138M    886M
```

##  下载镜像文件

我们可以通过官方网站下载镜像文件，也可以使用国内的镜像站下载最新的镜像文件。

```bash
# 此处使用的是 tuna 镜像站，如果需要使用其他镜像站，请根据实际情况修改。
wget http://mirrors.tuna.tsinghua.edu.cn/archlinux/iso/latest/arch
```

## 挂载 `ISO` 镜像文件

我们可以将 `ISO` 镜像文件挂载到 `/mnt` 目录下，然后将其中的内容复制到根目录下，这样就可以在下次启动时通过指定命令行启动参数来启动 Arch Linux 安装镜像了。

```bash
mount -o loop,ro archlinux-x86_64.iso /mnt
cp -r /mnt/* /
umount /mnt/
e2label /dev/vda1 archiso
```

值得注意的是，请确保你使用 `Grub` 来进行系统启动，而不是 `systemd-boot`。

## 配置 `Grub` 启动

这一步中，我们需要重启服务器，请确保您可以看到重启的界面，通常大部分服务商会提供 VNC 远程连接的方式使我们可以看到服务器的重启界面。

重启到 `Grub` 选择菜单界面，然后按 `C` 进入 `Grub` 命令行界面。

首先输入如下指令:

```bash
ls /     # 列出根目录的所有文件如果能看到arch，则可以继续安装
```

请确保运行上述指令后，列出的文件(夹)能看到 `arch`，否则则需要重新挂载镜像并复制文件到根目录下。

确认无误后，接下来我们需要配置启动的 `Linux` 内核以及 `initramfs`，指令如下:

```bash
# 指定 Linux 内核
linux /arch/boot/x86_64/vmlinuz-linux archisobasedir=arch archisolabel=archiso copytoram
# 指定 initramfs
initrd /arch/boot/x86_64/initramfs-linux.img
```

随后，确认启动 `archlinux iso` 镜像，指令如下:

```
boot
```

如果你看到了 `Welcome to Arch Linux` 字样，那么就可以按照正常 `Arch Linux` 安装流程进行 [Arch Linux 的安装](/OS/Arch/Installation.md)了，别忘记开启 `ssh` 服务，启动指令如下:

```
systemctl start sshd
```

## 参考

- [云服务器安装 Arch Linux](https://senge.dev/index.php/arch-ecs/)
