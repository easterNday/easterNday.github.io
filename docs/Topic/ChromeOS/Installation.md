# 简明安装指南

由于本人没有 ChromeBook，因此本指南仅针对第三方系统使用的类 Chrome OS 系统的安装展开，官方的 Chrome OS 请自行参考官方指南。

## 分发版本

[Chrome OS Flex](https://chromeenterprise.google/os/chromeosflex/): ChromeOS由 Google 官方提供给第三方系统安装的 ChromeOS Flex。

[Fyde OS](https://fydeos.com/): FydeOS 移动性强、安全性高、简单高效、易于管理，降低企业采购和运维成本，助力企业破局云时代，让员工随时随地访问云端工具，真正实现云计算赋能。

## Chrome OS Flex

### 系统要求
尽管 Google 仅支持特定设备，但您仍然可以在几乎任何硬件上安装操作系统，只要它满足最低要求：

+ 处理器：英特尔或 AMD x86-64 位。
+ 内存： 4GB
+ 存储： 16GB

运行 ChromeOS Flex 的要求很低，但谷歌表示 2010 年之前制造的处理器和显卡可能会导致糟糕的用户体验。

除了系统要求外，您还需要一个至少 8GB 的 USB 闪存驱动器来创建安装介质。

### 创建 ChromeOS Flex USB 闪存介质并安装

要创建 ChromeOS Flex 安装媒体，请连接 8GB 的 USB 闪存驱动器，然后使用以下步骤：

1. 在 Chrome 上打开[Chromebook 恢复实用程序页面](https://chrome.google.com/webstore/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm?hl=zh-CN)。
2. 单击添加到 Chrome按钮。
3. 单击添加扩展程序按钮。
4. 单击扩展按钮并选择Chromebook 恢复实用程序扩展。
5. 单击开始按钮。
6. 选择Google ChromeOS Flex选项。
7. 选择ChromeOS Flex 选项。
8. 单击继续按钮。
9. 从列表中选择 USB 闪存介质。
10. 单击继续按钮。
11. 单击立即创建按钮。
12. 单击完成按钮。

完成这些步骤后，重新启动电脑，并用指定的 USB 存储介质进行安装即可。

## Fyde OS

首先我们需要去[官方下载页面](https://fydeos.com/download/)选择对应版本的系统进行下载。

下载完成后你将看到一个 .xz 文件。无需解压和重命名，请直接使用 [balenaEtcher](https://www.balena.io/etcher) 和 [rufus](https://rufus.ie/zh/) 等软件进行刻录。

一切完成后，即可取出 USB 盘卡并插入你的 PC 中，重启电脑，并配置你的 PC 经由 USB 存储介质引导启动，即可享受 FydeOS 带来的全新体验。