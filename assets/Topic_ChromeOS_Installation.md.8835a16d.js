import{_ as e,c as r,o as l,a as o}from"./app.7b18f9d1.js";const S=JSON.parse('{"title":" 简明安装指南","description":"","frontmatter":{},"headers":[{"level":2,"title":" 分发版本","slug":"-分发版本","link":"#-分发版本","children":[]},{"level":2,"title":"󰿗 Chrome OS Flex","slug":"󰿗-chrome-os-flex","link":"#󰿗-chrome-os-flex","children":[{"level":3,"title":"系统要求","slug":"系统要求","link":"#系统要求","children":[]},{"level":3,"title":"创建 ChromeOS Flex USB 闪存介质并安装","slug":"创建-chromeos-flex-usb-闪存介质并安装","link":"#创建-chromeos-flex-usb-闪存介质并安装","children":[]}]},{"level":2,"title":"󱨸 Fyde OS","slug":"󱨸-fyde-os","link":"#󱨸-fyde-os","children":[]}],"relativePath":"Topic/ChromeOS/Installation.md","lastUpdated":1680579681000}'),a={name:"Topic/ChromeOS/Installation.md"},h=o('<h1 id="-简明安装指南" tabindex="-1"> 简明安装指南 <a class="header-anchor" href="#-简明安装指南" aria-hidden="true">#</a></h1><p>由于本人没有 ChromeBook，因此本指南仅针对第三方系统使用的类 Chrome OS 系统的安装展开，官方的 Chrome OS 请自行参考官方指南。</p><h2 id="-分发版本" tabindex="-1"> 分发版本 <a class="header-anchor" href="#-分发版本" aria-hidden="true">#</a></h2><p><a href="https://chromeenterprise.google/os/chromeosflex/" target="_blank" rel="noreferrer">Chrome OS Flex</a>: ChromeOS由 Google 官方提供给第三方系统安装的 ChromeOS Flex。</p><p><a href="https://fydeos.com/" target="_blank" rel="noreferrer">Fyde OS</a>: FydeOS 移动性强、安全性高、简单高效、易于管理，降低企业采购和运维成本，助力企业破局云时代，让员工随时随地访问云端工具，真正实现云计算赋能。</p><h2 id="󰿗-chrome-os-flex" tabindex="-1">󰿗 Chrome OS Flex <a class="header-anchor" href="#󰿗-chrome-os-flex" aria-hidden="true">#</a></h2><h3 id="系统要求" tabindex="-1">系统要求 <a class="header-anchor" href="#系统要求" aria-hidden="true">#</a></h3><p>尽管 Google 仅支持特定设备，但您仍然可以在几乎任何硬件上安装操作系统，只要它满足最低要求：</p><ul><li>处理器：英特尔或 AMD x86-64 位。</li><li>内存： 4GB</li><li>存储： 16GB</li></ul><p>运行 ChromeOS Flex 的要求很低，但谷歌表示 2010 年之前制造的处理器和显卡可能会导致糟糕的用户体验。</p><p>除了系统要求外，您还需要一个至少 8GB 的 USB 闪存驱动器来创建安装介质。</p><h3 id="创建-chromeos-flex-usb-闪存介质并安装" tabindex="-1">创建 ChromeOS Flex USB 闪存介质并安装 <a class="header-anchor" href="#创建-chromeos-flex-usb-闪存介质并安装" aria-hidden="true">#</a></h3><p>要创建 ChromeOS Flex 安装媒体，请连接 8GB 的 USB 闪存驱动器，然后使用以下步骤：</p><ol><li>在 Chrome 上打开<a href="https://chrome.google.com/webstore/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm?hl=zh-CN" target="_blank" rel="noreferrer">Chromebook 恢复实用程序页面</a>。</li><li>单击添加到 Chrome按钮。</li><li>单击添加扩展程序按钮。</li><li>单击扩展按钮并选择Chromebook 恢复实用程序扩展。</li><li>单击开始按钮。</li><li>选择Google ChromeOS Flex选项。</li><li>选择ChromeOS Flex 选项。</li><li>单击继续按钮。</li><li>从列表中选择 USB 闪存介质。</li><li>单击继续按钮。</li><li>单击立即创建按钮。</li><li>单击完成按钮。</li></ol><p>完成这些步骤后，重新启动电脑，并用指定的 USB 存储介质进行安装即可。</p><h2 id="󱨸-fyde-os" tabindex="-1">󱨸 Fyde OS <a class="header-anchor" href="#󱨸-fyde-os" aria-hidden="true">#</a></h2><p>首先我们需要去<a href="https://fydeos.com/download/" target="_blank" rel="noreferrer">官方下载页面</a>选择对应版本的系统进行下载。</p><p>下载完成后你将看到一个 .xz 文件。无需解压和重命名，请直接使用 <a href="https://www.balena.io/etcher" target="_blank" rel="noreferrer">balenaEtcher</a> 和 <a href="https://rufus.ie/zh/" target="_blank" rel="noreferrer">rufus</a> 等软件进行刻录。</p><p>一切完成后，即可取出 USB 盘卡并插入你的 PC 中，重启电脑，并配置你的 PC 经由 USB 存储介质引导启动，即可享受 FydeOS 带来的全新体验。</p>',19),i=[h];function t(s,n,d,c,m,p){return l(),r("div",null,i)}const _=e(a,[["render",t]]);export{S as __pageData,_ as default};
