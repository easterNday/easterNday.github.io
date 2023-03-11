# 虚拟机镜像存储压缩

## 压缩 VHDX 镜像

Windows 的各种子系统/虚拟机系统的映像均以虚拟硬盘( VHDX，后缀为`.vhdx` )的形式存储在我们的硬盘中。

日常使用的过程中，随着文件的增多，对应虚拟磁盘的大小也会不断增加。但由于虚拟机的特性，即使我们手动删除一些文件后，虚拟硬盘不能自己释放空间减少硬盘占用。

为了避免电脑硬盘空间被浪费，当我们虚拟硬盘容量虚高的时候，可以运行如下代码进行虚拟硬盘的压缩，从而释放空间。

```powershell
diskpart                                # 打开 diskpart 工具
select vdisk file="\path\to\your\vhdx"  # 选择vhdk镜像
attach vdisk readonly                   # 以只读附加镜像
compact vdisk                           # 压缩镜像
detach vdisk                            # 分离镜像
exit                                    # 退出 diskpart
```

## 报错解决

### 问题一

如果您遇到 `Virtual hard disk files must be uncompressed and unencrypted and must not be sparse` 这类提示，请在命令行中运行如下代码：

```powershell
fsutil sparse setflag path/to/file.vhdx 0
```

随后再次压缩镜像即可完成操作。
