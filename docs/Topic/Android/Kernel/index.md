#  安卓内核介绍

> 对于内核的基础知识，可以阅读[让 Android 手机更省电流畅，你可以试试「刷内核」](https://sspai.com/post/56296)一文。

## 󱤭 内核的重要性

Android 设备的启动分为三个阶段：

+ Boot Loader: Android设备打开电源后，首先会从处理器片上ROM的启动引导代码开始执行，寻找Bootloader代码，并加载到内存。（这一步由“芯片厂商”负责设计和实现）
+ Linux Kernel: Bootloader开始执行，首先负责完成硬件的初始化，然后找到Linux内核代码，并加载到内存。（这一步由“设备厂商”负责设计和实现）
+ Android 系统服务: Linux内核开始启动，初始化各种软硬件环境，加载驱动程序，挂载根文件系统，并执行init程序，由此开启Android的世界。（这一步则是Android内核开发过程中需要涉及的地方）

Android系统实际上是运行在Linux Kernel之上的一系列系统服务进程。