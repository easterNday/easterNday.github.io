# 使用 DSU 尝鲜新系统

`DSU` 是动态系统更新（Dynamic System Updates）的缩写，是一项在 Android 10 及以上版本中引入的功能，可以让用户在不重启设备的情况下更新系统镜像。


## 必备条件

- 一台 Android 10+ 的安卓设备
- 支持动态分区 / 支持 GSI
- 对于设备有一定的了解

> 如果你不确定自己的设备是否支持动态分区特性，建议先下载安装 [Treble Check](https://github.com/kevintresuelo/treble) 这个应用打开看看。

## 原生 DSU 方案

首先我们需要开启 [开发者选项](https://developer.android.google.cn/studio/debug/dev-options?hl=zh-cn)，随后我们进入开发者选项，并找到如下图所示的 `DSU Loader` 选项。

<div style="display:flex;">
    <img src="/assets/Android/DSU/Native%20DSU.png" style="width:33%; margin-right:5px;">
    <img src="/assets/Android/DSU/DSU%20Selection.png" style="width:33%; margin-right:5px;">
    <img src="/assets/Android/DSU/DSU%20Complete%20Notice.png" style="width:33%; margin-left:5px;">
</div>

点击 DSU Loader 后，系统会自动搜索并检查可用于当前设备的 GSI 镜像版本，不熟悉架构的朋友也无需在 ARM64、x86 之间纠结。选择自己需要的镜像进行安装即可。

目前大部分 Android 设备能够通过这个菜单下载安装的 GSI 镜像包括 Android 12L Beta 和 Android 13 Beta 两种，每个版本都同时提供含 GMS 服务和不含 GMS 服务的两个版本。

选好想要安装体验的版本，点击同意 Google 的使用条款后，系统就会在后台进行下载和安装了。准备就绪后你会看到一条通知，点击通知就能重启并体验新系统了。在 DSU 加载的系统中，我们可以随时通过通知中的重启按钮或直接重启设备来切换回主系统。

## 使用 DSU Sideloader

使用上面的方式实现的双系统会使得我们只能使用原生的安卓系统版本而非其他更多的 GSI 系统，因此如果您想使用 DSU 来实现加载其他更多的 GSI 的话，请选择 [DSU Sideloader](https://github.com/VegaBobo/DSU-Sideloader)，它是一款 GSI 安装工具，支持 `gz`、`xz`、`img` 和 `zip`（仅限 DSU 包）格式的 GSI。它可以帮助用户安装其他更多的 GSI 系统。

### 使用说明

首先，你需要安装 DSU Sideloader 应用程序（下载时有 `apk` 和 `模块` 两种方式可以选择，请根据你的设备情况进行选择）。

随后，在您第一次打开应用程序时，你需要给某个文件夹赋予读/写权限，并新建一个文件夹并允许访问。这个文件夹将用于存储临时文件，例如从压缩文件中提取的 GSI。

> 你不应该删除这个文件夹中的任何文件，因为这些文件是应用程序正常工作的必要文件。

随后选择要安装的 GSI，并在安装前自定义安装选项。例如，你可以改变动态系统的用户数据大小。

点击“安装”按钮开始安装 GSI。安装完成后，你需要根据不同的操作模式进行下一步操作。

| 操作模式    | 特点                                                                                                            |
| ----------- | --------------------------------------------------------------------------------------------------------------- |
| ADB         | 默认操作模式，需要在电脑上运行 `adb` 命令来安装 GSI                                                               |
| Shizuku     | 需要在设备中安装 `Shizuku` 应用程序，支持跟踪安装进度和安装诊断                                                   |
| Root        | 需要设备获得 `Root 权限`，不需要任何特殊权限，支持 DynamicSystem API 和内置 DSU 安装程序                          |
| System mode | 需要先安装 `Magisk 模块`并授权系统权限，支持所有功能，包括对某些设备的 SELinux 拒绝的修复和自定义 gsid 二进制文件 |

> 不同操作模式支持的功能不同。如果遇到 DSU 功能的问题，请尝试切换到 `System/Root` 操作模式。

### 注意事项

- 请勿删除 DSU Sideloader 创建的临时文件夹中的任何文件。
- 推荐在 Stock ROM 上使用 DSU Sideloader。一些 Custom ROM 版本也可能工作正常。
- 如果你的设备已经获得 Root 权限，请确保使用的是 Magisk v24 或更高版本，旧版本可能会破坏 DSU 功能。
- 特别注意不要更改 GSI 文件的大小，因为这可能会影响安装过程的稳定性。让应用程序自动执行这个过程。
- 动态系统准备就绪后，请不要忘记通过通知或应用程序启动它。

请注意，使用 DSU Loader 安装新系统可能会导致数据丢失，因此请务必备份你的重要数据。另外，由于该应用程序仍处于开发阶段，可能会存在一些问题和错误，使用前请谨慎考虑。

## 常见问题

### Q: DSU 安装完成且没有错误，但设备无法启动到已安装的 DSU，我该怎么办？

A: 可能是 AVB 阻止设备启动已安装的映像，尝试闪烁禁用的 vbmeta，查阅更多信息。

### Q: 为什么不能设置高用户数据值？

A:一些 Android 版本限制允许分配的最大值，这个限制是 40％。

### Q: 为什么存在“卸载 SD”选项？

A: DSU 会优先在 SD 卡中分配，但在某些情况下不支持在 SD 卡中分配，该选项用于在设备存储中强制分配。

### Q: 为什么内置安装程序需要 root？

A: 因为它使用 Android 的内部 DynamicSystem API，需要"MANAGE_DYNAMIC_SYSTEM"，这是一个签名保护级别，使用 root 是绕过它的便捷方法。

### Q: 我可以一直留在 DSU 的系统中尝鲜吗？

A: 可以，只需要在 DSU 系统中运行指令 adb shell gsi_tool enable 即可开启 DSU 系统常驻模式，将 enable 替换为 disable 则会在下次重启后切换为主系统。

## 参考

- [DSU Sideloader](https://github.com/VegaBobo/DSU-Sideloader)
- [在 MIUI12 中使用 DSU Loader 安装原生双系统](https://xapoq.com/archives/82)
- [不刷机体验 Android 新系统，这个自带功能助你一键尝鲜](https://client.sspai.com/post/73603#!)
