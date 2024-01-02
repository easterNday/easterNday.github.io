# Unity 游戏破解指北

> 本文章翻译自[Unity-game-hacking](https://github.com/imadr/Unity-game-hacking)项目，并在原有基础上进行了一定的修改。

这是一个小指南，用于从使用Unity引擎制作的游戏中提取和修改资源或代码。请随意贡献。

## Unity 游戏文件夹结构(已编译好的游戏软体)

```bash
│  *.exe
└──*_Data
   │  globalgamemanagers
   │  globalgamemanagers.assets
   │  level0
   │  level0.resS
      ...
   |  levelN
   |  levelN.resS
   |  resources.assets
   |  resources.assets.resS
   |  resources.resource
   │  sharedassets0.assets
   │  sharedassets0.assets.resS
      ...
   |  sharedassetsN.assets
   |  sharedassetsN.assets.resS
   ├──Managed
   │    Assembly-CSharp.dll
   │    Assembly-UnityScript.dll
   │    Mono.Security.dll
   │    mscorlib.dll
   │    System.Core.dll
   │    System.dll
   │    UnityEngine.dll
   │    UnityEngine.dll.mdb
   │    UnityEngine.Networking.dll
   │    UnityEngine.UI.dll
   ├──Mono
   │  │  mono.dll
   │  └──etc
   │     └──mono
   │        │  browscap.ini
   │        │  config
   │        ├──1.0
   │        │     DefaultWsdlHelpGenerator.aspx
   │        │     machine.config
   │        ├──2.0
   │        │  │  DefaultWsdlHelpGenerator.aspx
   │        │  │  machine.config
   │        │  │  settings.map
   │        │  │  web.config
   │        │  └──Browsers
   │        │        Compat.browser
   │        └──mconfig
   │              config.xml
   └──Resources
        unity default resources
        unity_builtin_extra
```

文件/文件夹 | 对应描述
--- | ---
*.exe | 游戏对应的可执行文件
`*_Data` | 包含游戏内容资源的Data文件夹
level0-levelN | 包含游戏场景数据的文件，每个场景都有自己的文件
sharedassets0-sharedassetsN | 游戏资产分为 `sharedasset` 和 `.resS` 文件（在 `Android/iOS` 等平台上为 `sharedassets.assets.split0-…splitN` ）
resources.assets | 在项目资源文件夹中找到的原始资产及其依赖项存储在此文件中（以及原始音频文件，即使在 `Unity` 的 `Resources` 文件夹之外，引用 `.resource` 的 `AudioClips` 和音频大小/偏移等信息仍然存储在 `.Assets` 中）
`Managed` | 包含 DLL 的文件夹
Assembly-CSharp.dll | 包含已编译 C# 文件的 DLL 文件
Assembly-UnityScript.dll | 包含已编译 UnityScript 文件的 DLL 文件

> **注意**  
> ``*`` ：主要可执行文件 (.exe) 的名称。

## 代码内容抽取以及编辑

`C#` 和 `UnityScript` 文件分别编译成 `Assembly-CSharp.dll` 和 `Assembly-UnityScript.dll` 这两个 DLL 文件，它们可以在 `Managed` 文件夹中找到。

DLL 可以使用 ILSpy、dnSpy、DotPeek 或 JustAssembly 进行反编译，它们允许修改和重新编译程序集文件。

如果托管目录中缺少 DLL，请尝试使用 `MegaDumper` 工具转储它们。

工具名称 | 对应功能描述
--- | ---
[ILSpy](https://github.com/icsharpcode/ILSpy) | 跨平台 .NET 反编译器，支持 PDB 生成、ReadyToRun、元数据（及更多）。
[JetBrains DotPeek](https://www.jetbrains.com/decompiler/) | JetBrains DotPeek 是一款免费的 .NET 反编译器和程序集浏览器。
[dnSpyEx](https://github.com/dnSpyEx/dnSpy) | 众所周知的 .NET 调试器和汇编编辑器 dnSpy 的非官方复刻版本。 <br/> **``dnSpy`` 的分支。**
[Telerik JustAssembly](https://www.telerik.com/justassembly) | 反编译和比较 .NET 程序集、二进制代码差异以及对应方法差异
[Cpp2IL](https://github.com/SamboyCoding/Cpp2IL) | 用于反转 unity 的 IL2CPP 工具链的运行时工具
[Il2CppDumper](https://github.com/Perfare/Il2CppDumper) | Unity il2cpp逆向工程
[dnSpy](https://github.com/dnSpy/dnSpy) <br /> ![No Longer Maintained](https://img.shields.io/badge/No%20Longer%20Maintained-red.svg) | dnSpy 是一个调试器和 .NET 程序集编辑器。 即使您没有任何可用的源代码，您也可以使用它来编辑和调试程序集 <br/> **可以正常使用，但你可以改用``dnSpyEx``**
[MegaDumper](https://github.com/CodeCracker-Tools/MegaDumper)  <br /> ![No Longer Maintained](https://img.shields.io/badge/No%20Longer%20Maintained-red.svg) | 转储原生程序集和 .NET 程序集。

## 游戏资源提取

游戏图片模型等其他资源存储在 `.assets` 和 `.resS` 文件中。

这些文件的内容可以使用以下工具之一解压：

工具名称 | 对应功能描述
--- | ---
[AssetRipper](https://github.com/AssetRipper/AssetRipper) | `AssetRipper` 是一个从序列化文件中提取资源的工具 (可以提取 `CAB-*` , `*.assets` , `*.sharedAssets` 等类型文件中包含的资源) 和对应资源包 (`*.unity3d` , `*.bundle` 等) 并将它们转换为 Unity 引擎原生支持的格式。 <br /> **``AssetRipper`` 是 ``uTinyRipper`` 的复刻版本**
[Unity Assets Bundle Extractor](https://github.com/SeriousCache/UABE) | `UABE` 是 `3.4+/4/5/2017-2021.3` 版本 `Unity` 打包生成的 `.assets` 和 `AssetBundle` 文件的编辑器。 它可以根据对 `.assets` 和/或 `bundles` 的更改创建独立的 mod 安装程序。
[QuickBMS](https://aluigi.altervista.org/quickbms.htm) 配合 [特定脚本](https://aluigi.altervista.org/bms/unity.bms) 或者 [特定网络播放器](https://aluigi.altervista.org/bms/unity3d_webplayer.bms) | 基于通用脚本的文件提取器和重新导入器。 QuickBMS 支持大量游戏和文件格式、存档、加密、压缩、混淆和其他算法。
[DevXUnityUnpacker](https://devxdevelopment.com/Unpacker) | 具有友好 GUI 的（付费）工具，用于通过输入构建的游戏/应用程序（包括图像、十六进制、文本等单个文件的预览器）来恢复统一项目。
[uTinyRipper](https://github.com/mafaca/UtinyRipper) <br/> ![No Longer Maintained](https://img.shields.io/badge/No%20Longer%20Maintained-red.svg) | `uTinyRipper` 是一个从序列化文件中提取资源的工具 (可以提取 `CAB-*` , `*.assets` , `*.sharedAssets` 等类型文件中包含的资源) 和对应资源包 (`*.unity3d` , `*.bundle` 等) 并将它们转换为 Unity 引擎原生支持的格式。 <br/> **建议使用 ``AssetRipper`` 作为替代**
[Unity Studio / AssetStudio](https://github.com/RaduMC/AssetStudio) <br /> ![No Longer Maintained](https://img.shields.io/badge/No%20Longer%20Maintained-red.svg) | 一个用于浏览、提取和导出游戏资源的独立工具。
[Unity Assets Explorer](https://zenhax.com/viewOS.php?t=36) <br /> ![No Longer Maintained](https://img.shields.io/badge/No%20Longer%20Maintained-red.svg) | Unity Assets Explorer 用于查看 Assets-files（Unity 3D 引擎）的内容。 允许您提取所有文件、提取一个文件（从上下文菜单）、将 tex 文件转换为图片格式 DDS（提取时）以及将更改的 DDS 图像导入游戏资源中。

> **不要使用 ``UnityEX``** ，很可能是病毒。

### DDS 格式文件

[DDS](https://en.wikipedia.org/wiki/DirectDraw_Surface) 格式文件可以使用以下工具打开/转换/编辑 :

工具 | 指南/说明
--- | ---
[Ninja Ripper](https://ninjaripper.com/) | 从游戏中提取（翻录）3D 场景并在 3D 编辑器（`Blender`、`3D Max`、`Noesis`）中浏览它们。 <br /> 关于如何使用 `Ninja Ripper` 的[旧版本指南](http://cgig.ru/en/2012/10/ho-to-use-ninja-ripper/)  <br /> 官方 [YouTube 频道](https://www.youtube.com/channel/UCgT-ET20KlC4AcECNtW9gyw) 可以用于最新的视频教程
[RenderDoc](https://renderdoc.org/) | 关于如何使用 `RenderDoc` 的[教程](https://www.youtube.com/watch?v=yPLxCm3SyPU)
[NVIDIA Texture Tools Exporter](https://developer.nvidia.com/nvidia-texture-tools-exporter) | `NVIDIA Texture Tools Exporter` 允许用户使用 `NVIDIA` 的 `CUDA` 加速 `Texture Tools 3.0` 压缩器技术直接从图像源创建高度压缩的纹理文件，从而使得其在磁盘和内存中都保持很小。 <br /> **可用作独立软件或 Adobe Photoshop 插件**
[Intel® Graphics Performance Analyzers](https://www.intel.com/content/www/us/en/developer/tools/graphics-performance-analyzers/overview.html) | 通过快速识别问题区域来提高游戏性能。 <br /> 关于如何使用英特尔图形分析器提取图形的[教程](https://forum.xentax.com/viewOS.php?t=12262)
[Gimp Plugin](https://code.google.com/archive/p/gimp-dds/downloads) | 这是 GIMP 2.8.x 版的插件。 它允许您以直接绘制表面 (DDS) 格式加载和保存图像
[3D Ripper DX](http://www.deep-shadows.com/hax/3DRipperDX.htm) | 此软件不支持 64 位二进制文件

## 内存修改

作弊引擎有一个叫做 [Dissect mono](https://wiki.cheatengine.org/index.php?title=Mono) 的功能，可以帮助破解游戏的内存。 这个关于使用作弊引擎的[视频系列](https://www.youtube.com/playlist?list=PLNffuWEygffbue0tvx7IusDmfAthqmgS7)会对修改学习大有脾益。
