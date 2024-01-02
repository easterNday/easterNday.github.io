# 解锁 BootLoader

> 发起人: 文鸯  
> 制作人员: 文鸯、星随梦能、红豆、suda_code

## 前言

无论你是新机、旧机，你的刷机第一步，永远是:**“解锁 BootLoader”**。

BootLoader 是手机开机时，最先运行的程序。Bootloader 主要是在引导过程中对系统签名，内核签名及 Recovery 签名进行检验，如果签名不一致，即终止引导。因此厂商通常会对手机的 Bootloader 上锁，这样它就只能运行厂商认证过的操作系统和 Recovery 了。

因此我们如果需要将我们的设备进行刷写功能，**理论上**无论如何都必须解除这个限制。

## 专用术语

|   术语    | 详细描述                                                                                                                                                                                                                                                                                                                                        |
| :-------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fastboot  | `FastBoot` 是一种 Android 设备的引导模式，它允许用户在设备启动时通过 USB 连接到计算机，并与设备进行通信。使用 `FastBoot`，用户可以在设备上执行各种操作，例如刷入新的固件、解锁引导程序、备份和还原分区等。fastboot 通常用于开发人员和高级用户，因为它需要一定的技术知识和经验。                                                                 |
| FastbootD | 随着 Android 动态分区的引入, `data`、 `system` 等原来的物理分区, 现在都被放到一个共同的 `super` 分区下. 这种**虚拟分区**只在用户空间可见。<br/>因此，传统的 `Fastboot` 模式只能识别到整个 `super` 分区, 而无法识别到其下的虚拟分区，而为了读取虚拟分区中的内容， `FastbootD` 模式开始被引入，它实现了从 `BootLoader` 重新定位到用户空间的功能。 |

## 解锁

> 解锁 BL 或救砖都会让你的文件被清空，需要备份

### 驱动安装

一般来说，驱动指 `adb` 和 `fastboot` 两个命令行工具以及识别安卓设备的部分，一般可以通过如下包来安装：

- [15 Seconds ADB Installer](https://androidmtk.com/download-15-seconds-adb-installer)
- [Universal ADB Drivers](https://adb.clockworkmod.com/)

如果你已经安装了 `choco` 或 `homebrew` 等包管理工具的话，可以通过如下方式来安装更加方便：

::: code-group

```sh [Windows]
choco install adb fastboot universal-adb-drivers -y
```

```sh [MacOS]
brew install android-platform-tools
```

:::

对于一些厂商来说，手机驱动通常也被包含在官方工具中，例如小米的 [MiFlash](https://www.xiaomiflash.com/) 以及华为的 [HiSuite](https://consumer.huawei.com/en/support/hisuite/) 等。

### 打开 `USB` 调试开关

进入 `关于手机` 页面，连续点击 `版本号` 七次，弹出 `开发者选项已开启` 字样后，进入 `更多设置` 点击开 `开发者选项`, 选择 `允许计算机调试` 并连接电脑确认。

#### 手机进入 Fastboot

进入 `Fastboot` 有如下两种方式：

##### 1. 手动操作

手机长按电源键关机，关机后按住电源键和音量下键，当设备亮起，松开电源键，长按音量下键，直至设备进入 `Fastboot` 模式，随后通过数据线链接你的电脑。

##### 2. `ADB` 重启

手机连接电脑，并在电脑命令行终端输入如下指令:

```sh
adb reboot fastboot
# or
adb reboot bootloader
```

即可进入 `Fastboot` 模式，随后保持连接状态不要断开。

### 开始解锁

不同的手机解锁方式不同，一般来说我们可以通过在开发者选项中打开 `OEM 解锁` 来进行 `Fastboot` 解锁。

当然对于大多数手机，需要申请测试或者使用其他渠道解锁。

#### 小米手机

对于**小米手机**，请先查看是否满足以下要求：

- 设备至少存在一张有信号无欠费正常通讯的 SIM 卡
- 设备登录的小米账号可正常接收验证码
- 设备登录的小米账号本人知道账号与密码
- 设备非 ID 机，属于本人财产
- 账号已经绑定 168 小时(7 天)

小米官方提供了[解锁工具](https://www.miui.com/unlock/index.html),设备解锁状态中绑定账号和设备，进入 `Fastboot` 模式，打开刚才下载的工具，点击 `解锁` 后系统会**恢复出厂系统**并解锁。

#### 华为手机

华为手机的官方解锁码获取通道已经于**2018**年正式关闭，对于一些旧型号的手机，可以尝试使用 [werasik2aa/Huawei-Unlock-Tool](https://github.com/werasik2aa/Huawei-Unlock-Tool) 或者 [mashed-potatoes/PotatoNV](https://github.com/mashed-potatoes/PotatoNV) 进行解锁，或者通过**淘宝**等方式获取解锁码。

> 部分解锁 Bootloader 的手机会发生熔断，此操作不可逆，会失去保修资格等，选择解锁前请**三思而后行**

# 相关视频及制作名单

<iframe  width="100%" height="400" src="//player.bilibili.com/player.html?aid=651393405&bvid=BV1ke4y1N7xF&cid=995569791&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

> 本文章已获得 [[FlashCorpa](https://space.bilibili.com/1396636900)] 授权  
> 同时本人在此基础上进行了一定程度的增补修订，引用本稿件前请联系 [[FlashCorpa](https://space.bilibili.com/1396636900)] 获得授权
