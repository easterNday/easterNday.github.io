# Magisk

Magisk是一个Android设备上的root解决方案和框架，它允许用户在保持设备完整性的同时获得root访问权限。Magisk通过在系统分区之外安装自己的文件和二进制文件来实现这一点，从而不会对设备进行任何物理修改，从而使用户能够安全地运行应用程序，例如银行应用程序或Google Pay，而不会失去其root权限。

## Magisk的主要特点

- 安全：Magisk不会对设备进行物理修改，可以保持设备的完整性，同时还能获得root访问权限。
- 兼容性：Magisk可以与大多数Android设备和Android版本一起使用。
- 模块化：Magisk模块是由社区成员制作并共享的软件包，可以修改设备的系统、应用程序或用户体验，例如添加功能、优化性能或更改外观。
- 隐藏Root：Magisk可以隐藏root访问权限，以便在需要时保护用户的隐私和安全。
- OTA更新：Magisk可以在OTA更新后自动重新安装，以便保持root访问权限和Magisk模块。
- 开源：Magisk是一个开源项目，可以在GitHub上查看其源代码。

## Magisk模块

### Magisk模块的使用

Magisk模块是由社区成员制作并共享的软件包，可以修改设备的系统、应用程序或用户体验。要使用Magisk模块，请按照以下步骤操作：

1. 打开Magisk Manager应用程序。
2. 点击“模块”选项卡。
3. 点击“浏览”按钮，并浏览可用的模块列表。
4. 选择要安装的模块并点击“下载和安装”按钮。
5. 安装完成后，重新启动设备。

请注意，某些Magisk模块可能会对设备造成不可逆的损坏，因此请确保在安装任何模块之前备份您的设备并谨慎操作。

### Magisk 模块结构

Magisk 模块是放置在 `/data/adb/modules` 中的文件夹（一般而言），结构如下：

``` txt
/data/adb/modules
├── .
├── .
|
├── $MODID                  <--- 文件夹以模块的 ID 命名
│   │
│   │      *** 模块 ID ***
│   │
│   ├── module.prop         <--- 此文件存储模块的元数据（metadata）
│   │
│   │      *** 主要内容 ***
│   │
│   ├── system              <--- 如果 skip_mount 不存在，将挂载此文件夹
│   │   ├── ...
│   │   ├── ...
│   │   └── ...
│   │
│   ├── zygisk              <--- 此文件夹包含模块的 Zygisk native 库
│   │   ├── arm64-v8a.so
│   │   ├── armeabi-v7a.so
│   │   ├── x86.so
│   │   ├── x86_64.so
│   │   └── unloaded        <--- 如果存在，则 native 库不兼容
│   │
│   │      *** 状态标志 ***
│   │
│   ├── skip_mount          <--- 如果存在，Magisk 将不会挂载您的 system 文件夹
│   ├── disable             <--- 如果存在，模块将被禁用
│   ├── remove              <--- 如果存在，模块将在下次重新启动时删除
│   │
│   │      *** 可选文件 ***
│   │
│   ├── post-fs-data.sh     <--- 此脚本将在 post-fs-data 中执行
│   ├── service.sh          <--- 此脚本将在 late_start 服务中执行
|   ├── uninstall.sh        <--- 当 Magisk 删除您的模块时，将执行此脚本
│   ├── system.prop         <--- resetprop 将此文件中的属性作为系统属性加载
│   ├── sepolicy.rule       <--- 其他自定义 sepolicy 规则
│   │
│   │      *** 自动生成，请勿手动创建或修改 ***
│   │
│   ├── vendor              <--- $MODID/system/vendor 的符号链接
│   ├── product             <--- $MODID/system/product 的符号链接
│   ├── system_ext          <--- $MODID/system/system_ext 的符号链接
│   │
│   │      *** 允许任何其他文件/文件夹 ***
│   │
│   ├── ...
│   └── ...
|
├── 其他模块
│   ├── .
│   └── .
├── .
├── .
```

## Magisk 模块安装程序

Magisk 模块安装程序是打包在 zip 文件中的 Magisk 模块，可以在 Magisk 应用程序或第三方recovery（如 TWRP）中刷入。最简单的 Magisk 模块安装程序只是一个打包为 zip 文件的 Magisk 模块，此外还有以下文件：

- `update-binary`：下载最新的 [module_installer.sh](https://github.com/topjohnwu/Magisk/blob/master/scripts/module_installer.sh) 并将该脚本重命名或复制为 `update-binary`
- `updater-script`：这个文件应该只包含字符串 “`#MAGISK`”

模块安装程序脚本将会设置环境，将模块文件从 zip 文件提取到正确的位置，然后完成安装过程，这对于大多数简单的 Magisk 模块来说应该足够好了。

``` txt
模块module.zip
│
├── META-INF
│   └── com
│       └── google
│           └── android
│               ├── update-binary      <--- 您下载 module_installer.sh
│               └── updater-script     <--- 应只包含字符串“#MAGISK”
│
├── customize.sh                       <--- （可选，稍后将详细介绍）
│                                           此脚本将来源于 update-binary
├── ...
├── ...  /* 模块的其余文件 */
│
```

### zygisk

Zygisk 是 Magisk 的一项功能，它允许高级模块开发人员在每个 Android 应用程序的进程中直接运行代码，然后再进行专业化和运行。有关 Zygisk API 和构建 Zygisk 模块的更多详细信息，请查看 [Zygisk 模块示例](https://github.com/topjohnwu/zygisk-module-sample) 项目。

### 风险与安全性

一般而言，Magisk 模块中会包含如下内容：

- Shell 脚本 (`*.sh`)
- `system` 文件夹

而Android是一个基于Linux内核的操作系统。Android使用了Linux内核的很多特性和功能，它也继承了Linux的一些安全机制和特性。

例如，Android使用了Linux的权限模型，使用用户和组来控制对系统资源的访问。此外，Android还使用了Linux内核的SElinux（安全增强型Linux）功能，可以限制应用程序的访问权限，并确保只有授权的应用程序才能访问敏感数据和系统资源。

正是因为其基于 Linux， 因此我门在刷入 Magisk 模块的时候可能导致一些风险。

#### Shell 风险

对于 Linux 有一些了解的朋友一定知道在 Linux 系统下执行 `rm -rf /*` 的严重后果。因此一些恶意开发者可能借助 Magisk 模块可以获取 Root 权限的特性而进行格机操作，虽然一些重要分区 Magisk 的 Root 权限可能仍然没有权限去删除，但是大部分 system 分区文件的删除却是不可逆的（Linux 下 rm 操作不会有回收站机制），所以在选择模块的时候请擦亮眼睛，仔细筛选。

#### 文件修改风险

虽然 Magisk 使用的是 Overlay File System,这从某种程度上来说对于文件的替换很安全，但是有时候我们刷入冲突的模块可能导致不开机。究其原因，就是在于冲突模块很有可能存在文件替换，但是两个模块都替换文件，系统选取那个文件是一个文件，因此可能导致 A 模块替换了 m 文件，B 模块替换了 n 文件，而实际上 A 模块还需要替换 n 文件才可以工作， B 模块还需要替换 m 文件才可以工作，而他们都只替换了一部分，所以自然而言不开机的概率也就骤然增加。

# 参考

- [Magisk 中文开发文档](https://jesse205.github.io/MagiskChineseDocument/guides.html)
- [Magisk Developer Guides](https://topjohnwu.github.io/Magisk/guides.html)（官方）
- [Magisk 开发者指南](https://e7kmbb.github.io/Magisk/guides.html)