import{_ as e,c as o,o as r,U as a}from"./chunks/framework.oKLj7K3_.js";const x=JSON.parse('{"title":"安卓内核介绍","description":"","frontmatter":{},"headers":[],"relativePath":"OS/Android/ROM/Kernel/index.md","filePath":"OS/Android/ROM/Kernel/index.md","lastUpdated":1704180282000}'),t={name:"OS/Android/ROM/Kernel/index.md"},n=a('<h1 id="安卓内核介绍" tabindex="-1">安卓内核介绍 <a class="header-anchor" href="#安卓内核介绍" aria-label="Permalink to &quot;安卓内核介绍&quot;">​</a></h1><blockquote><p>对于内核的基础知识，可以阅读<a href="https://sspai.com/post/56296" target="_blank" rel="noreferrer">让 Android 手机更省电流畅，你可以试试「刷内核」</a>一文。</p></blockquote><h2 id="󱤭-内核的重要性" tabindex="-1">󱤭 内核的重要性 <a class="header-anchor" href="#󱤭-内核的重要性" aria-label="Permalink to &quot;󱤭 内核的重要性&quot;">​</a></h2><p>Android 设备的启动分为三个阶段：</p><ul><li>Boot Loader: Android设备打开电源后，首先会从处理器片上ROM的启动引导代码开始执行，寻找Bootloader代码，并加载到内存。（这一步由“芯片厂商”负责设计和实现）</li><li>Linux Kernel: Bootloader开始执行，首先负责完成硬件的初始化，然后找到Linux内核代码，并加载到内存。（这一步由“设备厂商”负责设计和实现）</li><li>Android 系统服务: Linux内核开始启动，初始化各种软硬件环境，加载驱动程序，挂载根文件系统，并执行init程序，由此开启Android的世界。（这一步则是Android内核开发过程中需要涉及的地方）</li></ul><p>Android系统实际上是运行在Linux Kernel之上的一系列系统服务进程。</p>',6),d=[n];function i(l,s,_,c,p,h){return r(),o("div",null,d)}const A=e(t,[["render",i]]);export{x as __pageData,A as default};
