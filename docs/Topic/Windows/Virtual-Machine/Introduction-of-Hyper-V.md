# Hyper-V 的用途与安装

::: warning 什么是 Hyper-V ?
Hyper-V是微软提出的一种系统管理程序虚拟化技术，能够实现桌面虚拟化。
:::

## WSL2 和 WSA 与 Hyper-V 的关系

Hyper-V其实分两个部分：
- 底层的虚拟机平台，
- 上层的虚拟机管理软件

以前的Windows版本，这两个是同一个选项，现在的新版本则是分成Hyper-V和虚拟机平台两个选项。

WSL2、沙盒本质上是基于Hyper-V的虚拟机，虚拟化出来的系统映像均以 `vhdx` 格式存储在电脑对应的部分，***所以虚拟机平台要打开才能用，但无需额外使用管理软件对虚拟机进行管理***。

## Hyper-V 的安装

### 系统要求

1. Windows 10 及以上的企业版、专业版或教育版
2. 最少 4 GB 内存(~~WSA系统安装还要求硬盘为固态硬盘，此处不作过多介绍~~)

### 方法一：使用 PowerShell 开启 Hyper-V

以管理员身份启动 PowerShell 控制台并输入如下指令：

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

随后重启电脑即可开启 Hyper-V 功能。

### 方法二：使用 Cmd 配合 DISM 开启 Hyper-V

DISM 可以在操作系统运行时启用 Windows 功能，因此我们可以以管理员身份运行 Cmd 来调用如下 DISM 命令开启对应功能。

```powershell
DISM /Online /Enable-Feature /All /FeatureName:Microsoft-Hyper-V
```

### 方法三：通过"设置"功能启用 Hyper-V

1. 打开 `控制面板` 选择 `程序` 
2. 选择 `启用或关闭 Windows 功能` 
3. 选择 `Hyper-V` ，然后单击 `确定` 
4. 重新启动电脑

### 检查 Hyper-V 是否启动

以管理员权限运行 Cmd 并执行如下命令：

```powershell
bcdedit /enum {current}
```

检查是否有 `hypervisorlaunchtype auto` 字段，如果有该字段则开启成功，反之失败。

## Hyper-V 虚拟机的创建

详细请参考 [微软官方文档](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/quick-create-virtual-machine) 或自行用搜索引擎进行搜索。
