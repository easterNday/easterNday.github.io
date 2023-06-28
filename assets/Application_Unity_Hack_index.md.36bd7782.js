import{_ as s,o as e,c as a,a as n}from"./app.bdd32200.js";const D=JSON.parse('{"title":"Unity 游戏破解指北","description":"","frontmatter":{},"headers":[{"level":2,"title":"Unity 游戏文件夹结构(已编译好的游戏软体)","slug":"unity-游戏文件夹结构-已编译好的游戏软体","link":"#unity-游戏文件夹结构-已编译好的游戏软体","children":[]},{"level":2,"title":"代码内容抽取以及编辑","slug":"代码内容抽取以及编辑","link":"#代码内容抽取以及编辑","children":[]},{"level":2,"title":"游戏资源提取","slug":"游戏资源提取","link":"#游戏资源提取","children":[{"level":3,"title":"DDS 格式文件","slug":"dds-格式文件","link":"#dds-格式文件","children":[]}]},{"level":2,"title":"内存修改","slug":"内存修改","link":"#内存修改","children":[]}],"relativePath":"Application/Unity/Hack/index.md","lastUpdated":1678783330000}'),t={name:"Application/Unity/Hack/index.md"},o=n(`<h1 id="unity-游戏破解指北" tabindex="-1">Unity 游戏破解指北 <a class="header-anchor" href="#unity-游戏破解指北" aria-hidden="true">#</a></h1><blockquote><p>本文章翻译自<a href="https://github.com/imadr/Unity-game-hacking" target="_blank" rel="noreferrer">Unity-game-hacking</a>项目，并在原有基础上进行了一定的修改。</p></blockquote><p>这是一个小指南，用于从使用Unity引擎制作的游戏中提取和修改资源或代码。请随意贡献。</p><h2 id="unity-游戏文件夹结构-已编译好的游戏软体" tabindex="-1">Unity 游戏文件夹结构(已编译好的游戏软体) <a class="header-anchor" href="#unity-游戏文件夹结构-已编译好的游戏软体" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">.exe</span></span>
<span class="line"><span style="color:#FFCB6B;">└──*_Data</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">globalgamemanagers</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">globalgamemanagers.assets</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">level0</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">level0.resS</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">levelN</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">levelN.resS</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">resources.assets</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">resources.assets.resS</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">resources.resource</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">sharedassets0.assets</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">sharedassets0.assets.resS</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">sharedassetsN.assets</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">sharedassetsN.assets.resS</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">├──Managed</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">Assembly-CSharp.dll</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">Assembly-UnityScript.dll</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">Mono.Security.dll</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">mscorlib.dll</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">System.Core.dll</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">System.dll</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">UnityEngine.dll</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">UnityEngine.dll.mdb</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">UnityEngine.Networking.dll</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">UnityEngine.UI.dll</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">├──Mono</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">mono.dll</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">└──etc</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">└──mono</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">browscap.ini</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">config</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">├──1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">DefaultWsdlHelpGenerator.aspx</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">machine.config</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">├──2.0</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">DefaultWsdlHelpGenerator.aspx</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">machine.config</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">settings.map</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">web.config</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">└──Browsers</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">Compat.browser</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">└──mconfig</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">              </span><span style="color:#C3E88D;">config.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">└──Resources</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">unity</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">resources</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">unity_builtin_extra</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th>文件/文件夹</th><th>对应描述</th></tr></thead><tbody><tr><td>*.exe</td><td>游戏对应的可执行文件</td></tr><tr><td><code>*_Data</code></td><td>包含游戏内容资源的Data文件夹</td></tr><tr><td>level0-levelN</td><td>包含游戏场景数据的文件，每个场景都有自己的文件</td></tr><tr><td>sharedassets0-sharedassetsN</td><td>游戏资产分为 <code>sharedasset</code> 和 <code>.resS</code> 文件（在 <code>Android/iOS</code> 等平台上为 <code>sharedassets.assets.split0-…splitN</code> ）</td></tr><tr><td>resources.assets</td><td>在项目资源文件夹中找到的原始资产及其依赖项存储在此文件中（以及原始音频文件，即使在 <code>Unity</code> 的 <code>Resources</code> 文件夹之外，引用 <code>.resource</code> 的 <code>AudioClips</code> 和音频大小/偏移等信息仍然存储在 <code>.Assets</code> 中）</td></tr><tr><td><code>Managed</code></td><td>包含 DLL 的文件夹</td></tr><tr><td>Assembly-CSharp.dll</td><td>包含已编译 C# 文件的 DLL 文件</td></tr><tr><td>Assembly-UnityScript.dll</td><td>包含已编译 UnityScript 文件的 DLL 文件</td></tr></tbody></table><blockquote><p><strong>注意</strong><br><code>*</code> ：主要可执行文件 (.exe) 的名称。</p></blockquote><h2 id="代码内容抽取以及编辑" tabindex="-1">代码内容抽取以及编辑 <a class="header-anchor" href="#代码内容抽取以及编辑" aria-hidden="true">#</a></h2><p><code>C#</code> 和 <code>UnityScript</code> 文件分别编译成 <code>Assembly-CSharp.dll</code> 和 <code>Assembly-UnityScript.dll</code> 这两个 DLL 文件，它们可以在 <code>Managed</code> 文件夹中找到。</p><p>DLL 可以使用 ILSpy、dnSpy、DotPeek 或 JustAssembly 进行反编译，它们允许修改和重新编译程序集文件。</p><p>如果托管目录中缺少 DLL，请尝试使用 <code>MegaDumper</code> 工具转储它们。</p><table><thead><tr><th>工具名称</th><th>对应功能描述</th></tr></thead><tbody><tr><td><a href="https://github.com/icsharpcode/ILSpy" target="_blank" rel="noreferrer">ILSpy</a></td><td>跨平台 .NET 反编译器，支持 PDB 生成、ReadyToRun、元数据（及更多）。</td></tr><tr><td><a href="https://www.jetbrains.com/decompiler/" target="_blank" rel="noreferrer">JetBrains DotPeek</a></td><td>JetBrains DotPeek 是一款免费的 .NET 反编译器和程序集浏览器。</td></tr><tr><td><a href="https://github.com/dnSpyEx/dnSpy" target="_blank" rel="noreferrer">dnSpyEx</a></td><td>众所周知的 .NET 调试器和汇编编辑器 dnSpy 的非官方复刻版本。 <br> <strong><code>dnSpy</code> 的分支。</strong></td></tr><tr><td><a href="https://www.telerik.com/justassembly" target="_blank" rel="noreferrer">Telerik JustAssembly</a></td><td>反编译和比较 .NET 程序集、二进制代码差异以及对应方法差异</td></tr><tr><td><a href="https://github.com/SamboyCoding/Cpp2IL" target="_blank" rel="noreferrer">Cpp2IL</a></td><td>用于反转 unity 的 IL2CPP 工具链的运行时工具</td></tr><tr><td><a href="https://github.com/Perfare/Il2CppDumper" target="_blank" rel="noreferrer">Il2CppDumper</a></td><td>Unity il2cpp逆向工程</td></tr><tr><td><a href="https://github.com/dnSpy/dnSpy" target="_blank" rel="noreferrer">dnSpy</a> <br> <img src="https://img.shields.io/badge/No%20Longer%20Maintained-red.svg" alt="No Longer Maintained"></td><td>dnSpy 是一个调试器和 .NET 程序集编辑器。 即使您没有任何可用的源代码，您也可以使用它来编辑和调试程序集 <br> <strong>可以正常使用，但你可以改用<code>dnSpyEx</code></strong></td></tr><tr><td><a href="https://github.com/CodeCracker-Tools/MegaDumper" target="_blank" rel="noreferrer">MegaDumper</a> <br> <img src="https://img.shields.io/badge/No%20Longer%20Maintained-red.svg" alt="No Longer Maintained"></td><td>转储原生程序集和 .NET 程序集。</td></tr></tbody></table><h2 id="游戏资源提取" tabindex="-1">游戏资源提取 <a class="header-anchor" href="#游戏资源提取" aria-hidden="true">#</a></h2><p>游戏图片模型等其他资源存储在 <code>.assets</code> 和 <code>.resS</code> 文件中。</p><p>这些文件的内容可以使用以下工具之一解压：</p><table><thead><tr><th>工具名称</th><th>对应功能描述</th></tr></thead><tbody><tr><td><a href="https://github.com/AssetRipper/AssetRipper" target="_blank" rel="noreferrer">AssetRipper</a></td><td><code>AssetRipper</code> 是一个从序列化文件中提取资源的工具 (可以提取 <code>CAB-*</code> , <code>*.assets</code> , <code>*.sharedAssets</code> 等类型文件中包含的资源) 和对应资源包 (<code>*.unity3d</code> , <code>*.bundle</code> 等) 并将它们转换为 Unity 引擎原生支持的格式。 <br> <strong><code>AssetRipper</code> 是 <code>uTinyRipper</code> 的复刻版本</strong></td></tr><tr><td><a href="https://github.com/SeriousCache/UABE" target="_blank" rel="noreferrer">Unity Assets Bundle Extractor</a></td><td><code>UABE</code> 是 <code>3.4+/4/5/2017-2021.3</code> 版本 <code>Unity</code> 打包生成的 <code>.assets</code> 和 <code>AssetBundle</code> 文件的编辑器。 它可以根据对 <code>.assets</code> 和/或 <code>bundles</code> 的更改创建独立的 mod 安装程序。</td></tr><tr><td><a href="https://aluigi.altervista.org/quickbms.htm" target="_blank" rel="noreferrer">QuickBMS</a> 配合 <a href="https://aluigi.altervista.org/bms/unity.bms" target="_blank" rel="noreferrer">特定脚本</a> 或者 <a href="https://aluigi.altervista.org/bms/unity3d_webplayer.bms" target="_blank" rel="noreferrer">特定网络播放器</a></td><td>基于通用脚本的文件提取器和重新导入器。 QuickBMS 支持大量游戏和文件格式、存档、加密、压缩、混淆和其他算法。</td></tr><tr><td><a href="https://devxdevelopment.com/Unpacker" target="_blank" rel="noreferrer">DevXUnityUnpacker</a></td><td>具有友好 GUI 的（付费）工具，用于通过输入构建的游戏/应用程序（包括图像、十六进制、文本等单个文件的预览器）来恢复统一项目。</td></tr><tr><td><a href="https://github.com/mafaca/UtinyRipper" target="_blank" rel="noreferrer">uTinyRipper</a> <br> <img src="https://img.shields.io/badge/No%20Longer%20Maintained-red.svg" alt="No Longer Maintained"></td><td><code>uTinyRipper</code> 是一个从序列化文件中提取资源的工具 (可以提取 <code>CAB-*</code> , <code>*.assets</code> , <code>*.sharedAssets</code> 等类型文件中包含的资源) 和对应资源包 (<code>*.unity3d</code> , <code>*.bundle</code> 等) 并将它们转换为 Unity 引擎原生支持的格式。 <br> <strong>建议使用 <code>AssetRipper</code> 作为替代</strong></td></tr><tr><td><a href="https://github.com/RaduMC/AssetStudio" target="_blank" rel="noreferrer">Unity Studio / AssetStudio</a> <br> <img src="https://img.shields.io/badge/No%20Longer%20Maintained-red.svg" alt="No Longer Maintained"></td><td>一个用于浏览、提取和导出游戏资源的独立工具。</td></tr><tr><td><a href="https://zenhax.com/viewtopic.php?t=36" target="_blank" rel="noreferrer">Unity Assets Explorer</a> <br> <img src="https://img.shields.io/badge/No%20Longer%20Maintained-red.svg" alt="No Longer Maintained"></td><td>Unity Assets Explorer 用于查看 Assets-files（Unity 3D 引擎）的内容。 允许您提取所有文件、提取一个文件（从上下文菜单）、将 tex 文件转换为图片格式 DDS（提取时）以及将更改的 DDS 图像导入游戏资源中。</td></tr></tbody></table><blockquote><p><strong>不要使用 <code>UnityEX</code></strong> ，很可能是病毒。</p></blockquote><h3 id="dds-格式文件" tabindex="-1">DDS 格式文件 <a class="header-anchor" href="#dds-格式文件" aria-hidden="true">#</a></h3><p><a href="https://en.wikipedia.org/wiki/DirectDraw_Surface" target="_blank" rel="noreferrer">DDS</a> 格式文件可以使用以下工具打开/转换/编辑 :</p><table><thead><tr><th>工具</th><th>指南/说明</th></tr></thead><tbody><tr><td><a href="https://ninjaripper.com/" target="_blank" rel="noreferrer">Ninja Ripper</a></td><td>从游戏中提取（翻录）3D 场景并在 3D 编辑器（<code>Blender</code>、<code>3D Max</code>、<code>Noesis</code>）中浏览它们。 <br> 关于如何使用 <code>Ninja Ripper</code> 的<a href="http://cgig.ru/en/2012/10/ho-to-use-ninja-ripper/" target="_blank" rel="noreferrer">旧版本指南</a> <br> 官方 <a href="https://www.youtube.com/channel/UCgT-ET20KlC4AcECNtW9gyw" target="_blank" rel="noreferrer">YouTube 频道</a> 可以用于最新的视频教程</td></tr><tr><td><a href="https://renderdoc.org/" target="_blank" rel="noreferrer">RenderDoc</a></td><td>关于如何使用 <code>RenderDoc</code> 的<a href="https://www.youtube.com/watch?v=yPLxCm3SyPU" target="_blank" rel="noreferrer">教程</a></td></tr><tr><td><a href="https://developer.nvidia.com/nvidia-texture-tools-exporter" target="_blank" rel="noreferrer">NVIDIA Texture Tools Exporter</a></td><td><code>NVIDIA Texture Tools Exporter</code> 允许用户使用 <code>NVIDIA</code> 的 <code>CUDA</code> 加速 <code>Texture Tools 3.0</code> 压缩器技术直接从图像源创建高度压缩的纹理文件，从而使得其在磁盘和内存中都保持很小。 <br> <strong>可用作独立软件或 Adobe Photoshop 插件</strong></td></tr><tr><td><a href="https://www.intel.com/content/www/us/en/developer/tools/graphics-performance-analyzers/overview.html" target="_blank" rel="noreferrer">Intel® Graphics Performance Analyzers</a></td><td>通过快速识别问题区域来提高游戏性能。 <br> 关于如何使用英特尔图形分析器提取图形的<a href="https://forum.xentax.com/viewtopic.php?t=12262" target="_blank" rel="noreferrer">教程</a></td></tr><tr><td><a href="https://code.google.com/archive/p/gimp-dds/downloads" target="_blank" rel="noreferrer">Gimp Plugin</a></td><td>这是 GIMP 2.8.x 版的插件。 它允许您以直接绘制表面 (DDS) 格式加载和保存图像</td></tr><tr><td><a href="http://www.deep-shadows.com/hax/3DRipperDX.htm" target="_blank" rel="noreferrer">3D Ripper DX</a></td><td>此软件不支持 64 位二进制文件</td></tr></tbody></table><h2 id="内存修改" tabindex="-1">内存修改 <a class="header-anchor" href="#内存修改" aria-hidden="true">#</a></h2><p>作弊引擎有一个叫做 <a href="https://wiki.cheatengine.org/index.php?title=Mono" target="_blank" rel="noreferrer">Dissect mono</a> 的功能，可以帮助破解游戏的内存。 这个关于使用作弊引擎的<a href="https://www.youtube.com/playlist?list=PLNffuWEygffbue0tvx7IusDmfAthqmgS7" target="_blank" rel="noreferrer">视频系列</a>会对修改学习大有脾益。</p>`,22),l=[o];function r(p,c,d,C,i,y){return e(),a("div",null,l)}const h=s(t,[["render",r]]);export{D as __pageData,h as default};