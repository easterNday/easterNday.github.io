import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.c34366e8.js";const k=JSON.parse('{"title":"Magisk","description":"","frontmatter":{},"headers":[],"relativePath":"Topic/Android/Magisk.md","filePath":"Topic/Android/Magisk.md","lastUpdated":1683468444000}'),l={name:"Topic/Android/Magisk.md"},p=e(`<h1 id="magisk" tabindex="-1">Magisk <a class="header-anchor" href="#magisk" aria-label="Permalink to &quot;Magisk&quot;">​</a></h1><p>Magisk是一个Android设备上的root解决方案和框架，它允许用户在保持设备完整性的同时获得root访问权限。Magisk通过在系统分区之外安装自己的文件和二进制文件来实现这一点，从而不会对设备进行任何物理修改，从而使用户能够安全地运行应用程序，例如银行应用程序或Google Pay，而不会失去其root权限。</p><h2 id="magisk的主要特点" tabindex="-1">Magisk的主要特点 <a class="header-anchor" href="#magisk的主要特点" aria-label="Permalink to &quot;Magisk的主要特点&quot;">​</a></h2><ul><li>安全：Magisk不会对设备进行物理修改，可以保持设备的完整性，同时还能获得root访问权限。</li><li>兼容性：Magisk可以与大多数Android设备和Android版本一起使用。</li><li>模块化：Magisk模块是由社区成员制作并共享的软件包，可以修改设备的系统、应用程序或用户体验，例如添加功能、优化性能或更改外观。</li><li>隐藏Root：Magisk可以隐藏root访问权限，以便在需要时保护用户的隐私和安全。</li><li>OTA更新：Magisk可以在OTA更新后自动重新安装，以便保持root访问权限和Magisk模块。</li><li>开源：Magisk是一个开源项目，可以在GitHub上查看其源代码。</li></ul><h2 id="magisk模块" tabindex="-1">Magisk模块 <a class="header-anchor" href="#magisk模块" aria-label="Permalink to &quot;Magisk模块&quot;">​</a></h2><h3 id="magisk模块的使用" tabindex="-1">Magisk模块的使用 <a class="header-anchor" href="#magisk模块的使用" aria-label="Permalink to &quot;Magisk模块的使用&quot;">​</a></h3><p>Magisk模块是由社区成员制作并共享的软件包，可以修改设备的系统、应用程序或用户体验。要使用Magisk模块，请按照以下步骤操作：</p><ol><li>打开Magisk Manager应用程序。</li><li>点击“模块”选项卡。</li><li>点击“浏览”按钮，并浏览可用的模块列表。</li><li>选择要安装的模块并点击“下载和安装”按钮。</li><li>安装完成后，重新启动设备。</li></ol><p>请注意，某些Magisk模块可能会对设备造成不可逆的损坏，因此请确保在安装任何模块之前备份您的设备并谨慎操作。</p><h3 id="magisk-模块结构" tabindex="-1">Magisk 模块结构 <a class="header-anchor" href="#magisk-模块结构" aria-label="Permalink to &quot;Magisk 模块结构&quot;">​</a></h3><p>Magisk 模块是放置在 <code>/data/adb/modules</code> 中的文件夹（一般而言），结构如下：</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/data/adb/modules</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .</span></span>
<span class="line"><span style="color:#e1e4e8;">|</span></span>
<span class="line"><span style="color:#e1e4e8;">├── $MODID                  &lt;--- 文件夹以模块的 ID 命名</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │      *** 模块 ID ***</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── module.prop         &lt;--- 此文件存储模块的元数据（metadata）</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │      *** 主要内容 ***</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── system              &lt;--- 如果 skip_mount 不存在，将挂载此文件夹</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── ...</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── ...</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   └── ...</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── zygisk              &lt;--- 此文件夹包含模块的 Zygisk native 库</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── arm64-v8a.so</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── armeabi-v7a.so</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── x86.so</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── x86_64.so</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   └── unloaded        &lt;--- 如果存在，则 native 库不兼容</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │      *** 状态标志 ***</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── skip_mount          &lt;--- 如果存在，Magisk 将不会挂载您的 system 文件夹</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── disable             &lt;--- 如果存在，模块将被禁用</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── remove              &lt;--- 如果存在，模块将在下次重新启动时删除</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │      *** 可选文件 ***</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── post-fs-data.sh     &lt;--- 此脚本将在 post-fs-data 中执行</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── service.sh          &lt;--- 此脚本将在 late_start 服务中执行</span></span>
<span class="line"><span style="color:#e1e4e8;">|   ├── uninstall.sh        &lt;--- 当 Magisk 删除您的模块时，将执行此脚本</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── system.prop         &lt;--- resetprop 将此文件中的属性作为系统属性加载</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── sepolicy.rule       &lt;--- 其他自定义 sepolicy 规则</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │      *** 自动生成，请勿手动创建或修改 ***</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── vendor              &lt;--- $MODID/system/vendor 的符号链接</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── product             &lt;--- $MODID/system/product 的符号链接</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── system_ext          &lt;--- $MODID/system/system_ext 的符号链接</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │      *** 允许任何其他文件/文件夹 ***</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── ...</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── ...</span></span>
<span class="line"><span style="color:#e1e4e8;">|</span></span>
<span class="line"><span style="color:#e1e4e8;">├── 其他模块</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── .</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── .</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/data/adb/modules</span></span>
<span class="line"><span style="color:#24292e;">├── .</span></span>
<span class="line"><span style="color:#24292e;">├── .</span></span>
<span class="line"><span style="color:#24292e;">|</span></span>
<span class="line"><span style="color:#24292e;">├── $MODID                  &lt;--- 文件夹以模块的 ID 命名</span></span>
<span class="line"><span style="color:#24292e;">│   │</span></span>
<span class="line"><span style="color:#24292e;">│   │      *** 模块 ID ***</span></span>
<span class="line"><span style="color:#24292e;">│   │</span></span>
<span class="line"><span style="color:#24292e;">│   ├── module.prop         &lt;--- 此文件存储模块的元数据（metadata）</span></span>
<span class="line"><span style="color:#24292e;">│   │</span></span>
<span class="line"><span style="color:#24292e;">│   │      *** 主要内容 ***</span></span>
<span class="line"><span style="color:#24292e;">│   │</span></span>
<span class="line"><span style="color:#24292e;">│   ├── system              &lt;--- 如果 skip_mount 不存在，将挂载此文件夹</span></span>
<span class="line"><span style="color:#24292e;">│   │   ├── ...</span></span>
<span class="line"><span style="color:#24292e;">│   │   ├── ...</span></span>
<span class="line"><span style="color:#24292e;">│   │   └── ...</span></span>
<span class="line"><span style="color:#24292e;">│   │</span></span>
<span class="line"><span style="color:#24292e;">│   ├── zygisk              &lt;--- 此文件夹包含模块的 Zygisk native 库</span></span>
<span class="line"><span style="color:#24292e;">│   │   ├── arm64-v8a.so</span></span>
<span class="line"><span style="color:#24292e;">│   │   ├── armeabi-v7a.so</span></span>
<span class="line"><span style="color:#24292e;">│   │   ├── x86.so</span></span>
<span class="line"><span style="color:#24292e;">│   │   ├── x86_64.so</span></span>
<span class="line"><span style="color:#24292e;">│   │   └── unloaded        &lt;--- 如果存在，则 native 库不兼容</span></span>
<span class="line"><span style="color:#24292e;">│   │</span></span>
<span class="line"><span style="color:#24292e;">│   │      *** 状态标志 ***</span></span>
<span class="line"><span style="color:#24292e;">│   │</span></span>
<span class="line"><span style="color:#24292e;">│   ├── skip_mount          &lt;--- 如果存在，Magisk 将不会挂载您的 system 文件夹</span></span>
<span class="line"><span style="color:#24292e;">│   ├── disable             &lt;--- 如果存在，模块将被禁用</span></span>
<span class="line"><span style="color:#24292e;">│   ├── remove              &lt;--- 如果存在，模块将在下次重新启动时删除</span></span>
<span class="line"><span style="color:#24292e;">│   │</span></span>
<span class="line"><span style="color:#24292e;">│   │      *** 可选文件 ***</span></span>
<span class="line"><span style="color:#24292e;">│   │</span></span>
<span class="line"><span style="color:#24292e;">│   ├── post-fs-data.sh     &lt;--- 此脚本将在 post-fs-data 中执行</span></span>
<span class="line"><span style="color:#24292e;">│   ├── service.sh          &lt;--- 此脚本将在 late_start 服务中执行</span></span>
<span class="line"><span style="color:#24292e;">|   ├── uninstall.sh        &lt;--- 当 Magisk 删除您的模块时，将执行此脚本</span></span>
<span class="line"><span style="color:#24292e;">│   ├── system.prop         &lt;--- resetprop 将此文件中的属性作为系统属性加载</span></span>
<span class="line"><span style="color:#24292e;">│   ├── sepolicy.rule       &lt;--- 其他自定义 sepolicy 规则</span></span>
<span class="line"><span style="color:#24292e;">│   │</span></span>
<span class="line"><span style="color:#24292e;">│   │      *** 自动生成，请勿手动创建或修改 ***</span></span>
<span class="line"><span style="color:#24292e;">│   │</span></span>
<span class="line"><span style="color:#24292e;">│   ├── vendor              &lt;--- $MODID/system/vendor 的符号链接</span></span>
<span class="line"><span style="color:#24292e;">│   ├── product             &lt;--- $MODID/system/product 的符号链接</span></span>
<span class="line"><span style="color:#24292e;">│   ├── system_ext          &lt;--- $MODID/system/system_ext 的符号链接</span></span>
<span class="line"><span style="color:#24292e;">│   │</span></span>
<span class="line"><span style="color:#24292e;">│   │      *** 允许任何其他文件/文件夹 ***</span></span>
<span class="line"><span style="color:#24292e;">│   │</span></span>
<span class="line"><span style="color:#24292e;">│   ├── ...</span></span>
<span class="line"><span style="color:#24292e;">│   └── ...</span></span>
<span class="line"><span style="color:#24292e;">|</span></span>
<span class="line"><span style="color:#24292e;">├── 其他模块</span></span>
<span class="line"><span style="color:#24292e;">│   ├── .</span></span>
<span class="line"><span style="color:#24292e;">│   └── .</span></span>
<span class="line"><span style="color:#24292e;">├── .</span></span>
<span class="line"><span style="color:#24292e;">├── .</span></span></code></pre></div><h2 id="magisk-模块安装程序" tabindex="-1">Magisk 模块安装程序 <a class="header-anchor" href="#magisk-模块安装程序" aria-label="Permalink to &quot;Magisk 模块安装程序&quot;">​</a></h2><p>Magisk 模块安装程序是打包在 zip 文件中的 Magisk 模块，可以在 Magisk 应用程序或第三方recovery（如 TWRP）中刷入。最简单的 Magisk 模块安装程序只是一个打包为 zip 文件的 Magisk 模块，此外还有以下文件：</p><ul><li><code>update-binary</code>：下载最新的 <a href="https://github.com/topjohnwu/Magisk/blob/master/scripts/module_installer.sh" target="_blank" rel="noreferrer">module_installer.sh</a> 并将该脚本重命名或复制为 <code>update-binary</code></li><li><code>updater-script</code>：这个文件应该只包含字符串 “<code>#MAGISK</code>”</li></ul><p>模块安装程序脚本将会设置环境，将模块文件从 zip 文件提取到正确的位置，然后完成安装过程，这对于大多数简单的 Magisk 模块来说应该足够好了。</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">模块module.zip</span></span>
<span class="line"><span style="color:#e1e4e8;">│</span></span>
<span class="line"><span style="color:#e1e4e8;">├── META-INF</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── com</span></span>
<span class="line"><span style="color:#e1e4e8;">│       └── google</span></span>
<span class="line"><span style="color:#e1e4e8;">│           └── android</span></span>
<span class="line"><span style="color:#e1e4e8;">│               ├── update-binary      &lt;--- 您下载 module_installer.sh</span></span>
<span class="line"><span style="color:#e1e4e8;">│               └── updater-script     &lt;--- 应只包含字符串“#MAGISK”</span></span>
<span class="line"><span style="color:#e1e4e8;">│</span></span>
<span class="line"><span style="color:#e1e4e8;">├── customize.sh                       &lt;--- （可选，稍后将详细介绍）</span></span>
<span class="line"><span style="color:#e1e4e8;">│                                           此脚本将来源于 update-binary</span></span>
<span class="line"><span style="color:#e1e4e8;">├── ...</span></span>
<span class="line"><span style="color:#e1e4e8;">├── ...  /* 模块的其余文件 */</span></span>
<span class="line"><span style="color:#e1e4e8;">│</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">模块module.zip</span></span>
<span class="line"><span style="color:#24292e;">│</span></span>
<span class="line"><span style="color:#24292e;">├── META-INF</span></span>
<span class="line"><span style="color:#24292e;">│   └── com</span></span>
<span class="line"><span style="color:#24292e;">│       └── google</span></span>
<span class="line"><span style="color:#24292e;">│           └── android</span></span>
<span class="line"><span style="color:#24292e;">│               ├── update-binary      &lt;--- 您下载 module_installer.sh</span></span>
<span class="line"><span style="color:#24292e;">│               └── updater-script     &lt;--- 应只包含字符串“#MAGISK”</span></span>
<span class="line"><span style="color:#24292e;">│</span></span>
<span class="line"><span style="color:#24292e;">├── customize.sh                       &lt;--- （可选，稍后将详细介绍）</span></span>
<span class="line"><span style="color:#24292e;">│                                           此脚本将来源于 update-binary</span></span>
<span class="line"><span style="color:#24292e;">├── ...</span></span>
<span class="line"><span style="color:#24292e;">├── ...  /* 模块的其余文件 */</span></span>
<span class="line"><span style="color:#24292e;">│</span></span></code></pre></div><h3 id="zygisk" tabindex="-1">zygisk <a class="header-anchor" href="#zygisk" aria-label="Permalink to &quot;zygisk&quot;">​</a></h3><p>Zygisk 是 Magisk 的一项功能，它允许高级模块开发人员在每个 Android 应用程序的进程中直接运行代码，然后再进行专业化和运行。有关 Zygisk API 和构建 Zygisk 模块的更多详细信息，请查看 <a href="https://github.com/topjohnwu/zygisk-module-sample" target="_blank" rel="noreferrer">Zygisk 模块示例</a> 项目。</p><h3 id="风险与安全性" tabindex="-1">风险与安全性 <a class="header-anchor" href="#风险与安全性" aria-label="Permalink to &quot;风险与安全性&quot;">​</a></h3><p>一般而言，Magisk 模块中会包含如下内容：</p><ul><li>Shell 脚本 (<code>*.sh</code>)</li><li><code>system</code> 文件夹</li></ul><p>而Android是一个基于Linux内核的操作系统。Android使用了Linux内核的很多特性和功能，它也继承了Linux的一些安全机制和特性。</p><p>例如，Android使用了Linux的权限模型，使用用户和组来控制对系统资源的访问。此外，Android还使用了Linux内核的SElinux（安全增强型Linux）功能，可以限制应用程序的访问权限，并确保只有授权的应用程序才能访问敏感数据和系统资源。</p><p>正是因为其基于 Linux， 因此我门在刷入 Magisk 模块的时候可能导致一些风险。</p><h4 id="shell-风险" tabindex="-1">Shell 风险 <a class="header-anchor" href="#shell-风险" aria-label="Permalink to &quot;Shell 风险&quot;">​</a></h4><p>对于 Linux 有一些了解的朋友一定知道在 Linux 系统下执行 <code>rm -rf /*</code> 的严重后果。因此一些恶意开发者可能借助 Magisk 模块可以获取 Root 权限的特性而进行格机操作，虽然一些重要分区 Magisk 的 Root 权限可能仍然没有权限去删除，但是大部分 system 分区文件的删除却是不可逆的（Linux 下 rm 操作不会有回收站机制），所以在选择模块的时候请擦亮眼睛，仔细筛选。</p><h4 id="文件修改风险" tabindex="-1">文件修改风险 <a class="header-anchor" href="#文件修改风险" aria-label="Permalink to &quot;文件修改风险&quot;">​</a></h4><p>虽然 Magisk 使用的是 Overlay File System,这从某种程度上来说对于文件的替换很安全，但是有时候我们刷入冲突的模块可能导致不开机。究其原因，就是在于冲突模块很有可能存在文件替换，但是两个模块都替换文件，系统选取那个文件是一个文件，因此可能导致 A 模块替换了 m 文件，B 模块替换了 n 文件，而实际上 A 模块还需要替换 n 文件才可以工作， B 模块还需要替换 m 文件才可以工作，而他们都只替换了一部分，所以自然而言不开机的概率也就骤然增加。</p><h1 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h1><ul><li><a href="https://jesse205.github.io/MagiskChineseDocument/guides.html" target="_blank" rel="noreferrer">Magisk 中文开发文档</a></li><li><a href="https://topjohnwu.github.io/Magisk/guides.html" target="_blank" rel="noreferrer">Magisk Developer Guides</a>（官方）</li><li><a href="https://e7kmbb.github.io/Magisk/guides.html" target="_blank" rel="noreferrer">Magisk 开发者指南</a></li></ul>`,31),o=[p];function i(t,c,r,y,d,h){return a(),n("div",null,o)}const u=s(l,[["render",i]]);export{k as __pageData,u as default};
