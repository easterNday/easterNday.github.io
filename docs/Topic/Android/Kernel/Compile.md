#  从零开始的内核编译

> 本教程将基于小米 10S 的内核源码进行实例，其他型号的手机请自行寻找内核源码。具体内容可以参考我的[内核编译项目](https://github.com/DogDayAndroid/KSU_Thyme_BuildBot)。

##  手机型号查询

### 1. 获取设备（手机）代号

在安卓设备终端（`adb shell`）上执行:

```bash
getprop | grep device
```

并寻找带有 `ro.xx.device` 这一行，里面的内容即为你的手机代号，例如：

```bash
# 手机代号为 thyme
[ro.product.device]: [thyme]
```

### 2. 获取设备架构

在安卓设备终端（`adb shell`）上执行:

```bash
uname -m
```

我的设备显示为 `aarch64`, 即可判断我的设备架构为 `aarch64`。

### 3. 获取设备内核版本

在安卓设备终端（`adb shell`）上执行:

```bash
uname -r
```

输出内容的格式为：

- [版本].[补丁版本].[子版本号]-[内核标识]-[提交记录]

例如我的设备显示为 `4.19.157-Margatroid-gb1b98c3d4fd0`

##  内核源码获取

内核源码的一般格式为 `[android_]kernel_设备厂商_cpu/代号`，例如，小米 10S（thyme）的代号为 `thyme`, CPU 型号为 `sm8250`，生产厂商为 `xiaomi`，则搜索格式应为下面几种：

```bash
kernel_xiaomi_thyme
kernel_xiaomi_sm8250
android_kernel_xiaomi_thyme
android_kernel_xiaomi_sm8250
```

以下是我收集的一些小米 10S（thyme）的源码仓库：

- [Lynnrin-Studio/android_kernel_xiaomi_thyme](https://github.com/Lynnrin-Studio/android_kernel_xiaomi_thyme): 这是我目前编译内核所使用的内核源码。
- [UtsavBalar1231/kernel_xiaomi_sm8250](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250): CLO 内核升级为 CAF 标签 `LA.UM.9.12.r1-14700-SMxx50`，AOSP 源码同步上游 `android-4.19-stable`。
- [WeeAris/RK-KSU-mi-kernel-SM8250](https://github.com/WeeAris/RK-KSU-mi-kernel-SM8250): 支持 `KernelSU` 的 [Rohail33/RealKing-kernel-SM8250](https://github.com/Rohail33/RealKing-kernel-SM8250.git) 分支。
- [Rohail33/RealKing-kernel-SM8250](https://github.com/Official-Ayrton990/android_kernel_xiaomi_sm8250): 基于 `LA.UM.9.12.r1-08000-SMxx50.0` 标签的内核。

当然除此之外还有很多源码，但这些源码对于我来说是我前期学习的一个途径，因此在这里列出给大家。

|             途径 | 具体介绍                                                                                                                           |
| ---------------: | :--------------------------------------------------------------------------------------------------------------------------------- |
|       各厂商开源 | [小米内核开源](https://github.com/MiCode/Xiaomi_Kernel_OpenSource/)<br/>[华为开源代码](https://consumer.huawei.com/en/opensource/) |
| 去手机社区找源码 | [XDA 论坛](https://forum.xda-developers.com/)                                                                                      |

##  获取编译工具链

> 强烈推荐您学习[[内核向] 交叉编译器的选择](https://www.akr-developers.com/d/129)以及[[白话文版] ClangBuiltLinux Clang 的使用](https://www.akr-developers.com/d/121)来学习工具链的配置。
>
> 同时可以配合 [Neutron-Clang 的说明文档](https://github.com/Neutron-Toolchains/clang-build-catalogue/blob/main/README.md)来进行编译参数配置。

目前比较推荐的几个预编译工具链如下：

|                                                                         工具名称 | 简介                                                                                                                                                                |
| -------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     [Neutron-Clang](https://github.com/Neutron-Toolchains/clang-build-catalogue) | 这是为内核开发构建的 LLVM 和 Clang 编译器工具链。构建始终是从最新的 LLVM 源代码而不是稳定版本构建的，~~因此无法保证完全的稳定性~~。                                 |
| [阿菌•未霜 Clang/LLVM Toolchain with Binutils](https://gitea.com/Mandi-Sa/clang) | 这是一个预构建的工具链，构建始终来自最新的 LLVM 和 Binutils 源而不是稳定版本，因此无法保证完全的稳定性。它是用 Full LTO、PGO 和 BOLT 构建的，以尽可能减少编译时间。 |
|          [ClangBuiltLinux/tc-build](https://github.com/ClangBuiltLinux/tc-build) | 类似前两个工具，但是这个工具需要自己在本地从 LLVM 的源码进行构建，但编译时间较长。                                                                                  |

除此之外，一个比较保险的方法是从预编译内核机器的 `/proc/config.gz` 提取`，需要对应版本的[交叉编译器](https://android.googlesource.com/platform/prebuilts/gcc/linux-x86/aarch64/aarch64-linux-android-4.9/+refs)以及 [Clang](https://android.googlesource.com/platform/prebuilts/clang/host/linux-x86/+/refs/heads/master)，自行选择合适版本下载即可，通过这种方式编译出来的内核一般是不会存在错误的。

### 1. Neutron-Clang 使用介绍

这是为内核开发构建的 LLVM 和 Clang 编译器工具链。构建始终是从最新的 LLVM 源代码而不是稳定版本构建的，因此不能保证完全的稳定性。目前该编译链工具使用 `AntMan` 来同步工具，具体使用方法如下：

```bash
mkdir -p "$HOME/toolchains/neutron-clang"
cd "$HOME/toolchains/neutron-clang"
bash <(curl -s "https://raw.githubusercontent.com/Neutron-Toolchains/antman/main/antman") -S
```

一些更多的 `AntMan` 命令：

| 功能                   | 对应命令                              |
| ---------------------- | ------------------------------------- |
| 同步最新的工具链构建   | `./antman -S` 或 `./antman -S=latest` |
| 同步特定的工具链版本   | `./antman -S=<release tag>`           |
| 检查更新               | `./antman -U`                         |
| 检查更新和同步更新     | `./antman -Uy`                        |
| 同步特定更新           | `./antman -S=<release tag>`           |
| 删除同步构建           | `./antman -D`                         |
| 显示有关同步构建的信息 | `./antman -I`                         |
| 同步特定的工具链版本   | `./antman -S=<release tag>`           |

> 如果需要更多细节介绍，请运行 `./antman --help` 获取。

### 2. ClangBuiltLinux

如果您想要使用这个工具链的话，那么其中的编译工具则需要你自行编译，对应的编译脚本为 [ClangBuiltLinux/tc-build](https://github.com/ClangBuiltLinux/tc-build)。

诚然，自行编译确实是一件造轮子且费时费力的方法，但是通过这种方式编译出来的工具是最适合您的系统的，不会发生其他的编译中的关于 `glibc` 等方面的错误。

### 3. 阿菌•未霜 Clang/LLVM Toolchain with Binutils

这是一个预构建的工具链，构建始终来自最新的 LLVM 和 Binutils 源而不是稳定版本，因此无法保证完全的稳定性。它是用 Full LTO、PGO 和 BOLT 构建的，以尽可能减少编译时间。

其编译链工具存储在：

- [GitHub](https://github.com/Mandi-Sa/clang "GitHub")：仅用于发布预构建的压缩文件（\*.7z）
- [Gitea](https://gitea.com/Mandi-Sa/clang "Gitea")：仅用于存储预构建的二进制文件（Current AR Archive、ELF 64-bit LSB shared object 存储在 LFS）

## 󱆃 编译脚本编写

内核编译流程其实只有两步：

1. 生成对应设备的配置文件 `make <theDefConfig>`
2. 开始编译内核 `make`

您可以直接执行这些指令进行编译（参数设置一定要正确），或参考我下面的编译流程：

### 1. 设置编译链环境

最简单的设置环境办法就是将编译链工具的路径添加到系统路径中，例如：

```bash
export PATH="<absolute/path/to/ur/toolchains>/bin:$PATH"
# 例如，您正在使用 neutron-clang
# export PATH="home/user/toolchains/neutron-clang/bin:$PATH"
# 其中的路径必须为绝对路径
```

> 如果您在使用 `gcc`，可能还需要将 `gcc` 工具链的路径加入到环境变量中。

### 2. 简易配置脚本

首先给出一个最基础的配置脚本：

```bash
#!/bin/bash
args="-j$(nproc --all) \
O=out \
ARCH=arm64 \
CROSS_COMPILE=aarch64-linux-gnu- \
CC=clang \
CROSS_COMPILE_COMPAT=arm-linux-gnueabi- "
make ${args} <config name>
make ${args}
```

> 该脚本是在使用上一节的三个工具时才可以正常使用的，如果您使用其他工具可以需要进行其他配置。

下面是一些参数对应的说明：

| 参数                   | 说明                                                                                                                                   | 一般参数             |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `CC`                   | 指定使用的编译器，因为 `make` 默认使用 `gcc`，因此实际上只有你在使用 `clang` 进行编译的时候才会使用该参数                              | `clang`              |
| `CROSS_COMPILE`        | 您的主要交叉编译链工具，如果你在使用谷歌的 gcc 4.9，请指定参数为 `aarch64-linux-android-`，32 位同理                                   | `aarch64-linux-gnu-` |
| `CLANG_TRIPLE`         | 只在使用 `clang` 进行编译的时候才需要使用，用于指定当 `clang` 不生效时候使用的工具链，但在使用上一节我们提到的工具中基本不用设置该参数 | `aarch64-linux-gnu-` |
| `CROSS_COMPILE_ARM32`  | 只在编译 32 位内核或者带 vdso 补丁的内核时需要指定该参数                                                                               | `arm-linux-gnueabi-` |
| `CROSS_COMPILE_COMPAT` | 类似于参数 `CROSS_COMPILE_ARM32` ，但内核版本为 4.19 及更新版本应使用本参数而非 `CROSS_COMPILE_ARM32`                                  | `arm-linux-gnueabi-` |

更多参数介绍可以参考一下 [Neutron-Clang 的编译说明](https://github.com/Neutron-Toolchains/clang-build-catalogue#building-linux)，里面对于一些参数的说明比较详细。

> 正常情况下，clang 是无法独立完成内核编译的，需要 gcc 的辅助。但使用上一节介绍的几种工具并不需要并不需要单独指定 `gcc` 来辅助编译。

### 3. 部分参考脚本

- [DogDayAndroid/KSU_Thyme_BuildBot](https://github.com/DogDayAndroid/KSU_Thyme_BuildBot/blob/main/build.sh)：我自己编译的内核使用的本地编译脚本。
- [UtsavBalar1231/Drone-scripts](https://github.com/UtsavBalar1231/Drone-scripts)：一个很多人使用的编译脚本，我的部分代码也是参考自这里。
- [EndCredits/kernel_xiaomi_sm7250](https://github.com/EndCredits/kernel_xiaomi_sm7250/blob/android-4.19-main/build.sh)：同样的一个编译脚本，但并未提供编译链，但是其中的脚本流程我也有参考。
- [xiaoleGun/KernelSU_Action](https://github.com/xiaoleGun/KernelSU_Action)：`KernelSU` 的编译脚本，同样有参考。

##  制作刷机包镜像

内核编译完成后的打包请参考文章[[内核向] 论如何优雅的刷入内核](https://www.akr-developers.com/d/125),目前最流行的方法是使用 [osm0sis/AnyKernel3](https://github.com/osm0sis/AnyKernel3) 来完成整个内核的打包刷入工作。

如果您更喜欢自己动手，那么请参考文章内的其他方法。

> 值得注意的是，不同版本的内核编译出来的内容并不相同，因此需要区分他们之间的打包，详情请参考文章：[关于 Image.xx-dtb 和 Image.xx + dtb 的区别](https://www.akr-developers.com/d/482)。
>
> 来自文章的评论区：\_对应芯片组的。比如 865 只需要 kona-v2.1.dtb。如果弄不清楚，可以使用 cat 命令将多个 dtb 连接在一起，bootloader 会自动识别。

#  编译常见问题

> 本教程将基于小米 10S 的内核源码进行实例，其他型号的手机请自行寻找内核源码。具体内容可以参考我的[内核编译项目](https://github.com/DogDayAndroid/KSU_Thyme_BuildBot)。

### 1. -Werror=implicit-int

```bash
/arch/arm64/kernel/smp.c:834:8: error: type defaults to ‘int’ in declaration of ‘in_long_press’ [-Werror=implicit-int]
```

您可以修改 `extern in_long_press` 为 `extern int in_long_press`;或者去除[MakeFile 中对应错误限制](https://github.com/MiCode/Xiaomi_Kernel_OpenSource/blob/b286e90108628643abec72c90deefbd1c17c4f94/Makefile#L922)。

### 2. 函数参数错误

```sh
/home/easternday/Documents/KSU_Thyme_BuildBot/Kernel_Source/Lynnrin/drivers/input/touchscreen/xiaomi/xiaomi_touch.c:141:37: error: a function declaration without a prototype is deprecated in all versions of C [-Werror,-Wstrict-prototypes]
struct class *get_xiaomi_touch_class()
                                    ^
                                     void
```
将 `struct class *get_xiaomi_touch_class()` 修改为 `struct class *get_xiaomi_touch_class(void)` 即可。

### 3. 数组长度不匹配

```
/home/easternday/Documents/KSU_Thyme_BuildBot/Kernel_Source/Lynnrin/drivers/staging/qcacld-3.0/core/mac/src/sys/legacy/src/utils/src/parser_api.c:5914:14: error: argument 'mdie' of type 'uint8_t[3]' (aka 'unsigned char[3]') with mismatched bound [-Werror,-Warray-parameter]
                   uint8_t mdie[SIR_MDIE_SIZE])
                           ^
/home/easternday/Documents/KSU_Thyme_BuildBot/Kernel_Source/Lynnrin/drivers/staging/qcacld-3.0/core/mac/src/include/parser_api.h:1028:14: note: previously declared as 'uint8_t[]' (aka 'unsigned char[]') here
                   uint8_t mdie[]);
                           ^
```

将 `uint8_t mdie[SIR_MDIE_SIZE])` 更改为 `uint8_t mdie[])` 即可。

##  参考

- [自己编译定制一个牛逼的安卓内核](https://parrotsec-cn.org/t/topic/2168)
- [让 Android 手机更省电流畅，你可以试试「刷内核」](https://sspai.com/post/56296)
- [[内核向] 交叉编译器的选择](https://www.akr-developers.com/d/129)
- [[白话文版] ClangBuiltLinux Clang 的使用](https://www.akr-developers.com/d/121)
- [Neutron-clang 的编译说明](https://github.com/Neutron-Toolchains/clang-build-catalogue#building-linux)
- [[内核向] 论如何优雅的刷入内核](https://www.akr-developers.com/d/125)
