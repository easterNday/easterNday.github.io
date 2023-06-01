# 自定义电脑开机动画

如果想要在 Arch Linux 上实现自定义启动关闭动画，我们可以使用 `Plymouth` 来实现。

## 安装 Plymouth

要使用 Plymouth，在 Arch Linux 上需要先安装它。可以使用以下命令来安装：

```
sudo pacman -S plymouth
```

## 添加 Plymouth 钩子

在启动过程中使用 Plymouth 需要添加相关的钩子以启用 `Kernel Mode Setting（KMS）`。可以通过编辑`/etc/mkinitcpio.conf`文件来添加钩子。

在该文件中找到没有警告标志的`HOOKS`行。在`base udev`的后面添加以下钩子：

```
HOOKS= (... base udev plymouth ...)
```

注意，Plymouth 相关的钩子必须添加在`udev`之后，钩子的顺序很重要。

完成后，保存并关闭文件。

## 添加内核参数

要启用 Plymouth，还需要在 grub 中添加一些内核参数。可以通过编辑`/etc/default/grub`文件来添加这些参数。

在`GRUB_CMDLINE_LINUX_DEFAULT`行后的引号中添加以下参数：

```
quiet splash loglevel=3 rd.udev.log_priority=3 vt.global_cursor_default=0
```

完成后，保存并关闭文件。

## 重建 initrd 镜像

完成上面参数的添加后，还需要执行下面的命令来重新生成 `initrd` 镜像:

```
mkinitcpio -p linux
```

假如你跟我一样也在使用 `linux-zen` 内核，就可以这样：

```
mkinitcpio -p linux-zen
```

> 如果您不清楚您自己的内核版本，可以执行 `uname -a` 指令来查询。

## 更新 grub 配置文件

更新 grub 配置文件以应用更改：

```
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

如果你使用的是其他发行版，你可能需要使用不同的命令来更新 grub 配置文件。

## 安装 Plymouth 主题

Plymouth 提供了许多主题供你选择，可以使用以下命令来列出可用的主题：

```
plymouth-set-default-theme -l
```

可以使用以下命令来安装某个主题：

```
sudo pacman -S plymouth-theme-<name>
```

要将主题设置为默认值，请使用以下命令：

```
sudo plymouth-set-default-theme -R <name>
```

其中`<name>`是你想要使用的主题的名称。

## 与登录器集成

如果你想在登录屏幕上看到与启动动画相同的主题，你可以禁用登录器默认的服务，并启用对应的 Plymouth 服务。这里以 KDE 的 SDDM 为例。

首先，禁用 SDDM 服务：

```
sudo systemctl disable sddm
```

然后，启用 SDDM 对应的 Plymouth 服务：

```
sudo systemctl enable sddm-plymouth
```

其他登录器也可以通过类似的方式进行集成。

> `GDM` 原生支持 `plymouth`，所以不用配置。

## 参考

- [Pluymouth - ArchLinux 官方 Wiki](https://wiki.archlinux.org/title/Plymouth)
- [[Linux] 给 Arch Linux 配置启动画面 (UEFI)](https://brucezhang1993.github.io/p/linux-%E7%BB%99-arch-linux-%E9%85%8D%E7%BD%AE%E5%90%AF%E5%8A%A8%E7%94%BB%E9%9D%A2-uefi/)
- [给你的 Archlinux 增加一个好看的启动界面](https://blog.archlinux.tech/plymouth/)
