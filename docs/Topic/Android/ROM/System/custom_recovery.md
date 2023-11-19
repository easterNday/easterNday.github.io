# 自定义 Recovery

`Recovery` 模式是 `Android` 系统的一种特殊模式，它允许用户执行一些在正常模式下无法执行的操作，例如：

- 安装或升级 `Android` 系统
- 恢复出厂设置
- 清除缓存
- 格式化 SD 卡
- 刷入第三方 ROM

`Recovery` 模式由一个带有 `RAM` 磁盘的 `Linux` 内核组成，该内核位于与主 `Android` 系统不同的分区上。

如果您想获得更多功能，例如刷入第三方 `ROM`，则可以刷入第三方 `Recovery`。第三方 `Recovery` 通常比原生 `Recovery` 具有更多功能，但也可能不稳定。

## 前言

在我们完成了第三方系统编译，我们常常需要借助第三方 `Recovery` 来将系统刷入。

而同时，由于大部分系统自带的 `Recovery` 功能较为简陋，我们常常需要将第三方 `Recovery` 持久化到我们的设备内部，方便下一次刷写新系统。

那么有没有一种办法，可以使得我们将第三方 `Recovery` 直接集成到我们编译好的系统中呢？

查阅了很多网上的资料，我发现在 `TWRP` 老版本中确实存在过一段时间，可以和 `Omini` 系统一同编译并且直接集成到系统的办法。但是对于目前的新系统、新设备来说，这似乎是不可行的，我无法使用原来的办法直接在编译的时候集成到我的系统镜像、刷机包中。

与此同时，我尝试开始研究编译、使用 `TWRP` 的兄弟 `OrangeFox`，首先我参考其官方文档 [Building OrangeFox](https://wiki.orangefox.tech/en/dev/building) 编译了一份 `Recovery`，并且采用**临时启动**和**刷入刷机包固化**两种方式使用了 `OrangeFox Recovery`。

通过研究了一下 `OrangeFox Recovery` 的固化脚本，结合安卓的编译打包流程，我另辟蹊径实现了刷机包自定义 `Recovery` 的功能。

## 实现思路

在 `Android` 系统编译过程中，通常是先将系统各个部分编译为镜像，随后再将这些镜像整理到一起打包为一个完整的刷机包。而我们的 `Recovery` 通常是单独的一个分区或是集成在 `Boot` 分区中，因此我们只需要将这部分进行替换即可。

本节只实现了 `Recovery` 在 `Boot` 分区中的系统编译时候的自定义。

但是通常 `Boot.img` 中不只有 `Recovery` 的内容，还存在一些其他用于系统启动引导的内容，因此我们需要对其进行解包打包修改。

### 解包、打包

首先我们需要查看一下 `OrangeFox Recovery` 的 `Recovery` 固化脚本，
我将其中的主要步骤已经标注出来的，其中 `recovery.img` 就是我们对应的 `Recovery` 镜像，使用的解包打包工具为 `MagiskBoot`，固化部分代码如下：

```bash{2,8,17-18,22-23}
# a/META-INF/com/google/android/update-binary
magiskboot unpack -n recovery.img

# deal with ramdisk cpio
if [ ! -f "ramdisk.cpio" ]; then
    abort "- Error extracting the OrangeFox ramdisk. Quitting!"
fi
cp -f ramdisk.cpio ramdisk-ofrp.cpio
rm -f ramdisk.cpio
rm -f kernel dtb kernel_dtb

# deal with both slots
for slot in _a _b; do
    ui_print "- Running boot image patcher on slot $name$slot..."

    # dump the partition and unpack
    dd bs=1048576 if=$target$slot of=boot.img
    magiskboot unpack -h -n boot.img

    # 其他步骤

    cp -f ramdisk-ofrp.cpio ramdisk.cpio
    magiskboot repack -n boot.img

    blockdev --setrw $target$slot
    cat new-boot.img /dev/zero > $target$slot 2>/dev/null || true
    rm -f boot.img dtb kernel new-boot.img ramdisk.cpio header
    magiskboot cleanup
done
```

通过这段代码，我们可以看到 `OrangeFox Recovery` 的固化流程为:

- 1. 利用 `MagiskBoot` 将第三方 `Recovery` 解包，并且只保留 `ramdisk.cpio` 文件;
- 2. 从系统中提取出 `boot.img`;
- 3. 将提取出来的 `boot.img` 解包;
- 4. 利用第三方 `Recovery` 解包提取的 `ramdisk.cpio` 文件替换 `boot.img` 解包出来的 `ramdisk.cpio` 文件;
- 5. 重新打包 `boot.img` 镜像;
- 6. 写回原分区

## 具体操作

### 修改打包流程

如果将固化步骤类比增加到我们的系统编译过程中，在将编译好的各个镜像集中到一起组装成刷机包的前一个步骤里实现替换，就可以实现自定义 `Recovery` 的功能。

通过查看 `LineageOS` 源码，最终我找到了 `LineageOS` 中将镜像添加到刷机包中的部分代码，`boot.img` 相关的代码在 `build/make/tools/releasetools/add_img_to_target_files.py` 文件中:

```python
boot_image = None
if has_boot:
    banner("boot")
    boot_images = OPTIONS.info_dict.get("boot_images")
    if boot_images is None:
        boot_images = "boot.img"
    for index, b in enumerate(boot_images.split()):
        boot_image = common.GetBootableImage("IMAGES/" + b, b, OPTIONS.input_tmp, "BOOT")
        if boot_image:
            boot_image_path = os.path.join(OPTIONS.input_tmp, "IMAGES", b)
        if index == 0:
            partitions['boot'] = boot_image_path
        if not os.path.exists(boot_image_path):
            boot_image.WriteToDir(OPTIONS.input_tmp)
            if output_zip:
                boot_image.AddToZip(output_zip)
```

可以看到这段就是有关于 `boot.img` 打包到刷机包中的相关内容，其实和 `OrangeFox Recovery` 的固化脚本有几分相似，都会遍历 `a`, `b` 两个分区并执行相关操作，因此我们模仿 `OrangeFox Recovery` 的固化流程编写如下函数，其中输入参数就是 `boot.img` 的路径，代码如下：

```python{9-22}
def useCustomRecovery(boot_image_path):
    magiskboot = os.getenv('CUSTOM_MAGISKBOOT')
    recovery = os.getenv('CUSTOM_TWRP')
    if not magiskboot or not recovery: return
    origin_pwd = os.getcwd()
    new_pwd = os.path.join(os.getcwd(), "tmp")
    common.RunAndCheckOutput(["mkdir", "-p", new_pwd])
    os.chdir(new_pwd)
    common.RunAndCheckOutput([magiskboot, "unpack", "-n", recovery])
    if not os.path.exists("ramdisk.cpio"):
        common.RunAndCheckOutput(["rm", "-rf", new_pwd])
        os.chdir(origin_pwd)
        return
    common.RunAndCheckOutput(["cp", "-f", "ramdisk.cpio", "ramdisk-ofrp.cpio"])
    common.RunAndCheckOutput(["rm", "-f", "ramdisk.cpio"])
    common.RunAndCheckOutput(["rm", "-f", "kernel", "dtb", "kernel_dtb"])
    common.RunAndCheckOutput([magiskboot, "unpack", "-h", "-n", boot_image_path])
    common.RunAndCheckOutput(["cp", "-f", "ramdisk-ofrp.cpio", "ramdisk.cpio"])
    common.RunAndCheckOutput([magiskboot, "repack", "-n", boot_image_path])
    common.RunAndCheckOutput(["mv", "-f", "new-boot.img", boot_image_path])
    common.RunAndCheckOutput(["rm", "-rf", new_pwd])
    common.RunAndCheckOutput([magiskboot, "cleanup"])
    os.chdir(origin_pwd)
```

可以看到高亮部分和 `OrangeFox Recovery` 的固化操作是一样的，均是解包、替换、重打包的操作。有了这个函数后，我们直接对原来的源码进行修改：

```python{17}
boot_image = None
if has_boot:
    banner("boot")
    boot_images = OPTIONS.info_dict.get("boot_images")
    if boot_images is None:
        boot_images = "boot.img"
    for index, b in enumerate(boot_images.split()):
        boot_image = common.GetBootableImage("IMAGES/" + b, b, OPTIONS.input_tmp, "BOOT")
        if boot_image:
            boot_image_path = os.path.join(OPTIONS.input_tmp, "IMAGES", b)
            if index == 0:
                partitions['boot'] = boot_image_path
            if not os.path.exists(boot_image_path):
                boot_image.WriteToDir(OPTIONS.input_tmp)
                if output_zip:
                    boot_image.AddToZip(output_zip)
        useCustomRecovery(boot_image_path)
```

别忘记将刚才的函数也加入到这个文件中，同时我们需要注意，在 `useCustomRecovery` 函数中我们需要读取两个环境变量:

- `CUSTOM_MAGISKBOOT`: 用于解包的 `MagiskBoot` 工具的绝对路径;
- `CUSTOM_TWRP`: 我们需要打包进去的第三方 `Recovery`

### 开放环境变量

我们可以通过如下指令设定环境变量：

```bash
export CUSTOM_MAGISKBOOT=<指向您使用的 MagiskBoot 工具的绝对路径>
export CUSTOM_TWRP=<指向您需要替换的 Recovery 镜像的绝对路径>
```

完成设定后，我们重新编译系统，发现还是没有打包到系统中。这是因为在编译过程中限制了环境变量的读取，只有特定的一些环境变量会被传入到编译流程中，所以我们还需要将我们自己新增的 `CUSTOM_MAGISKBOOT` 和 `CUSTOM_TWRP` 加入到白名单中。

对应需要修改的文件位置在 `build/soong/ui/build/ninja.go` 路径下，修改后的代码如下:

```go{14-16}
func runNinjaForBuild(ctx Context, config Config) {
    // 其它代码
	if cmd.Environment.IsEnvTrue("ALLOW_NINJA_ENV") {
		ctx.Println("Allowing all environment variables during ninja; incremental builds may be unsafe.")
	} else {
		cmd.Environment.Allow(append([]string{
			/*
                其它参数
            */
			"PYTHONDONTWRITEBYTECODE",
			"TMPDIR",
			"USER",

			// Custom TWRP
			"CUSTOM_MAGISKBOOT",
			"CUSTOM_TWRP",

			// TODO: remove these carefully
			// Options for the address sanitizer.
			"ASAN_OPTIONS",
			/*
                其它参数
            */
		}, config.BuildBrokenNinjaUsesEnvVars()...)...)
	}
    // 其它代码
}
```

高亮部分就是我们的修改内容，我们只需要这样简单的将 `CUSTOM_MAGISKBOOT` 和 `CUSTOM_TWRP` 加入到白名单中，随后再重新开始编译即可，也就是说，您的编译流程现在为:

```bash
source build/envsetup.sh
export CUSTOM_MAGISKBOOT="<指向您使用的 MagiskBoot 工具的绝对路径>"
export CUSTOM_TWRP="<指向您需要替换的 Recovery 镜像的绝对路径>"
lunch lineage_[设备代号]-userdebug
croot
mka bacon
```

## Git 补丁

同时，我制作了方便使用的 `Git` 补丁用以方便修改，可以进入 [DogDayAndroid/Android-Builder](https://github.com/DogDayAndroid/Android-Builder/tree/main/System/Patches/LineageOS/custom_recovery) 查看我的补丁。

## 参考资料

- [Building OrangeFox](https://wiki.orangefox.tech/en/dev/building)
- [TWRP Recovery 编译适配教程（2018 版）](https://juejin.cn/post/6936324758296330248#heading-17)
