# GSI 系统刷写教程

## 检查设备是否支持 GSI

为了确认你的设备是否支持 `Project Treble`，你需要下载一个 [Treble Check](https://github.com/kevintresuelo/treble)

![Treble Check](/assets/Android/GSI/Treble_Check.jpg)

根据图中信息可以确定设备基本的支持信息，此处也提供了对应查询信息部分的代码：

|      App 中显示内容 |               ADB 查指令               | 说明                                                              |
| ------------------: | :------------------------------------: | ----------------------------------------------------------------- |
| Project Treble 支持 | `adb shell getprop ro.treble.enabled`  | 如果响应为 false，则该设备与 GSI 不兼容，无法执行后续操作。       |
|        CPU 体系架构 | `adb shell getprop ro.product.cpu.abi` | `arm64-v8a` 对应架构为 `arm64` <br/> `arm64-v7a` 对应架构为 `arm` |
|        无缝更新系统 |                  暂无                  | 如果显示 `A-Only` 则只能刷明确标注 `A-Only` 的 GSI 镜像           |

## GSI 镜像安装

Android 设备可以有不同的设计，因此没有通用的命令或指令集用于刷新 GSI 以应用于所有设备。请与 Android 设备的制造商联系以获取明确的 `flash` 说明。

**注意：**你应该已经解开 `BL` 锁。

### 1. 进入 fastboot 模式

同时按住手机 `音量下键` + `电源键`，等待一段时间后进入 `fastboot` 模式。

### 2. 进入 fastbootd 模式

> 此步骤为小米部分设备（动态分区设备）所需要的步骤，一些旧设备或其他品牌手机可能并不需要此步骤。也就是这一步骤非必须，视您的设备情况而定。

在 `fastboot` 模式下连接电脑，在电脑终端执行如下命令：

```sh
fastboot reboot fastboot
```

随后手机会重启至 `fastbootd` 模式。

### 3. 刷入 GSI 镜像

> 此步骤存在**风险性操作**，请三思而后行。

继续在电脑终端执行如下命令擦除并写入 GSI 镜像:

```sh
fastboot erase system
# 这一步中 <the/path/to/your/gsi.img> 请替换为你实际的 GSI 镜像存储路径
fastboot flash system <the/path/to/your/gsi.img>
```

### 4. 擦除用户数据

> 此步骤存在**风险性操作**，请三思而后行。

现在 GSI 已经刷入完成，但我们还需要擦除用户数据并清除其他必要分区的数据来防止设备不开机。

在电脑终端执行如下指令:

```sh
fastboot -w
```

### 5. 重启

执行完成上述指令后，长按电源键重启手机，应该就可以进入您下载的通用系统了。

## 常见问题

### 1. 剩余空间不足

一些同志在刷入 `system` 分区的时候可能会出现如下报错。

```sh
Resizing 'system_a'    FAILED (remote: 'Not enough space to resize partition')
```

如果您的设备是 Android 10 或更新版本的设备，且使用动态分区等分区格式，您可以尝试执行如下指令来增加 `system` 分区容量：

```sh
fastboot delete-logical-partition product_a
```

> 此操作有风险，请自行决定是否执行此操作。

**或者**，您可以选择更加轻量化的、体积更小的 GSI 镜像。

### 2. 停用 AVB 验证

Android 10 引入了启动时验证 (AVB)，在刷写 GSI 之前，您可能需要禁用这一部分使得系统可以正常启用。

首先你需要获取到你系统的 `vbmeta` 镜像，并进入 `fastboot` 模式并在电脑终端执行如下命令:

```sh
fastboot --disable-verification flash vbmeta vbmeta.img
```

或者，你可以尝试用支持停用验证的 `TWRP` 来进行验证停用。

> 如果您已经安装了 Magisk，可以跳过本步骤，但此后必须始终使用 Magisk 作为您的 Root 管理器。
