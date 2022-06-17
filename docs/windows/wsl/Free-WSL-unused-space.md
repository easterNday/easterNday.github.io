#  压缩WSL镜像

Windows 的 Linux 子系统以虚拟硬盘(VHD)的形式存储在我们的硬盘中。

日常使用子系统的过程中，随着文件的增多，对应虚拟磁盘的大小也会不断增加。但由于虚拟机的特性，即使我们手动删除一些文件后，虚拟硬盘不能自己释放空间减少硬盘占用。

为了避免电脑硬盘空间被浪费，当我们虚拟硬盘容量虚高的时候，可以运行如下代码进行虚拟硬盘的压缩，从而释放空间。

```powershell
wsl --shutdown                          # 关闭WSL2
diskpart                                # 打开 diskpart 工具
select vdisk file="\path\to\your\vhdx"  # 选择vhdk镜像
attach vdisk readonly                   # 以只读附加镜像
compact vdisk                           # 压缩镜像
detach vdisk                            # 分离镜像
exit                                    # 退出 diskpart
```
