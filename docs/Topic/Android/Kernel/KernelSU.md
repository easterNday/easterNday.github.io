# KernelSU

顾名思义，`KernelSU` 就是基于内核的 `SU` 。它通过自定义内核，直接在内核中赋予目标进程 `Root` 权限。

## 前身

大约 2018 年的时候，XDA 上的 `zx2c4` 就给出了一个 [KernelSU 的简单实现](https://git.zx2c4.com/kernel-assisted-superuser/)；虽然整个实现非常简单，但它的确给我们展示了另外一种可能。

后来，LSPosed 团队在实现 WSA 的 Magisk 方案的时候，也曾通过 `KernelSU` 来 root [WSA]( https://github.com/LSPosed/WSA-Kernel-SU)。

在 [GKI 2.0](https://source.android.com/docs/core/architecture/kernel/generic-kernel-image?hl=zh-cn) 出现之前，各厂商的内核都是各自为战，因此内核碎片化严重，因此当时 `KernelSU` 并不能成为一个通用的 Root 方案。而随着 [GKI 2.0](https://source.android.com/docs/core/architecture/kernel/generic-kernel-image?hl=zh-cn) 的出现，内核逐渐在各个手机之间通用，使得 `KernelSU` 的推广也成为了可能。

## 特性

- 基于内核的 su 和权限管理。
- 基于 overlayfs 的模块系统。

## KernelSU 安装

### 1. 检查您的设备是否被支持

从 [GitHub Releases](https://github.com/tiann/KernelSU/releases) 或 [酷安](https://www.coolapk.com/apk/me.weishu.kernelsu) 下载 `KernelSU` 管理器应用，然后将应用程序安装到设备并打开：

*   如果应用程序显示 “不支持”，则表示您的设备不支持 `KernelSU`，你需要自己编译设备的内核才能使用，`KernelSU` 官方不会也永远不会为你提供一个可以刷写的 `boot` 镜像。
*   如果应用程序显示 “未安装”，那么 `KernelSU` 支持您的设备；可以进行下一步操作。

> 任何刷机操作都是有风险的，请务必做好备份。

### 2. KMI 查看

`KMI` 全称 `Kernel Module Interface`，相同 `KMI` 的内核版本是**兼容的** 这也是 `GKI` 中“通用”的含义所在；反之，如果 `KMI` 不同，那么这些内核之间无法互相兼容，刷入与你设备 `KMI` 不同的内核镜像可能会导致死机。

具体来说，对 `GKI` 的设备，其内核版本格式应该如下：

```bash
KernelRelease :=
Version.PatchLevel.SubLevel-AndroidRelease-KmiGeneration-suffix
w      .x         .y       -zzz           -k            -something
```

其中，`w.x-zzz-k` 为 `KMI` 版本。例如，一个设备内核版本为`5.10.101-android12-9-g30979850fc20`，那么它的 KMI 为 `5.10-android12-9`；理论上刷入其他这个 `KMI` 的内核也能正常开机。

> 请注意，内核版本中的 `SubLevel` 不属于 `KMI` 的范畴！也就是说 `5.10.101-android12-9-g30979850fc20` 与 `5.10.137-android12-9-g30979850fc20` 的 `KMI` 相同！(只看前两个版本号)
> 
> 同时，内核版本与 Android 版本也并不一定相同。如果您发现您的内核版本是 `android12-5.10.101`，然而你 Android 系统的版本为 Android 13 或者其他这并不会影响什么。如果你需要刷机，请以内核版本为准。

### 3. 安装

KernelSU 的安装方法有如下几种，各自适用于不同的场景，请按需选择：

1.  使用自定义 Recovery（如 TWRP）安装
2.  使用内核刷写 App，如 （Franco Kernel Manager）安装
3.  使用 KernelSU 提供的 boot.img 使用 fastboot 安装
4.  手动修补 boot.img 然后安装

具体操作过程可以查看[官方文档](https://kernelsu.org/zh_CN/guide/installation.html#%E5%AE%89%E8%A3%85%E4%BB%8B%E7%BB%8D)。

## 如何为非 GKI 内核集成 KernelSU

请查阅[官方文档](https://kernelsu.org/zh_CN/guide/how-to-integrate-for-non-gki.html)以及本博客中的[内核编译教程](/Topic/Android/Kernel/Compile.md)。

一些现成的第三方 KernelSU 提供请查看[非官方支持设备](https://kernelsu.org/zh_CN/guide/unofficially-support-devices.html#%E9%9D%9E%E5%AE%98%E6%96%B9%E6%94%AF%E6%8C%81%E8%AE%BE%E5%A4%87)。

## 必备模块

+ [ZygiskOnKernelSU](https://github.com/Dr-TSNG/ZygiskOnKernelSU): 使用 `KernelSU` 运行 `Zygisk`

> 刷入上面的模块后，其他常用模块直接刷入，部分模块可能存在问题。

## 参考

- [KernelSU 官网](https://kernelsu.org/zh_CN/guide/installation.html)
- [何为 Root？](https://mp.weixin.qq.com/s?__biz=MjM5Njg5ODU2NA==&mid=2257499009&idx=1&sn=3cfce1ea7deb6e0e4f2ac170cffd7cc1&scene=21#wechat_redirect)
- [KernelSU: 内核 ROOT 方案，来了！](https://mp.weixin.qq.com/s?__biz=MjM5Njg5ODU2NA==&mid=2257500703&idx=1&sn=31e8d32ee4ac1122764db58d320493c4&chksm=a598287492efa1625dfc4ad932dee0f05d03acd834d7bd5b44daa657a1188aa5fc243fdf6329&scene=21#wechat_redirect)