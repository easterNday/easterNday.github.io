import{_ as s,c as a,o as n,a as l}from"./app.7b18f9d1.js";const e="/assets/Windows/Virtual-Machine/Arch_boot_with_unroot.png",A=JSON.parse('{"title":" Linux 子系统","description":"","frontmatter":{},"headers":[{"level":2,"title":" WSL 介绍与安装","slug":"-wsl-介绍与安装","link":"#-wsl-介绍与安装","children":[]},{"level":2,"title":" 安装 Arch Linux 子系统","slug":"-安装-arch-linux-子系统","link":"#-安装-arch-linux-子系统","children":[{"level":3,"title":"安装前准备","slug":"安装前准备","link":"#安装前准备","children":[]},{"level":3,"title":"镜像安装","slug":"镜像安装","link":"#镜像安装","children":[]},{"level":3,"title":"其他设置","slug":"其他设置","link":"#其他设置","children":[{"level":4,"title":"1. 设置 Arch 为默认启动的子系统","slug":"_1-设置-arch-为默认启动的子系统","link":"#_1-设置-arch-为默认启动的子系统","children":[]},{"level":4,"title":"2. 终端默认用户打开","slug":"_2-终端默认用户打开","link":"#_2-终端默认用户打开","children":[]}]}]},{"level":2,"title":"󰋊 Linux 子系统的迁移","slug":"󰋊-linux-子系统的迁移","link":"#󰋊-linux-子系统的迁移","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"迁移前准备","slug":"迁移前准备","link":"#迁移前准备","children":[]},{"level":3,"title":"导出对应的分发版本","slug":"导出对应的分发版本","link":"#导出对应的分发版本","children":[]},{"level":3,"title":"注销原有分发版本记录","slug":"注销原有分发版本记录","link":"#注销原有分发版本记录","children":[]},{"level":3,"title":"重新导入分发版本","slug":"重新导入分发版本","link":"#重新导入分发版本","children":[]},{"level":3,"title":"重新确定登录用户","slug":"重新确定登录用户","link":"#重新确定登录用户","children":[]}]}],"relativePath":"Topic/Windows/Virtual-Machine/WSL2.md","lastUpdated":1680579681000}'),o={name:"Topic/Windows/Virtual-Machine/WSL2.md"},t=l(`<h1 id="-linux-子系统" tabindex="-1"> Linux 子系统 <a class="header-anchor" href="#-linux-子系统" aria-hidden="true">#</a></h1><h2 id="-wsl-介绍与安装" tabindex="-1"> WSL 介绍与安装 <a class="header-anchor" href="#-wsl-介绍与安装" aria-hidden="true">#</a></h2><p><code>Windows Subsystem for Linux</code> (以下简称为 <code>WSL</code>)允许开发人员直接在Windows上运行GNU/Linux环境，包括大多数命令行工具、实用程序和应用程序，无需修改，无需传统虚拟机或双引导设置的开销。</p><p>本部分主要以 <code>WSL2</code> 作为操作对象，不涉及 <code>WSL1</code> 相关内容，若对于其他内容感兴趣，请参考<a href="https://docs.microsoft.com/en-us/windows/wsl/" target="_blank" rel="noreferrer">微软官方文档</a>。<code>WSL1</code> 到 <code>WSL2</code> 的更新请升级对应的 <a href="https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi" target="_blank" rel="noreferrer">WSL 内核</a>。如果需要默认使用 <code>WSL2</code> 请在命令行中输入 <code>wsl --set-default-version 2</code>。</p><p>上述官方文档提供了安装的具体方法，本部分下面会以 <code>Arch Linux</code> 为例讲述如何构建其它官方不支持的 Linux 子系统，文章部分内容参考自<a href="https://github.com/nckslvrmn/arch_linux_wsl2" target="_blank" rel="noreferrer">nckslvrmn的教程</a>。</p><h2 id="-安装-arch-linux-子系统" tabindex="-1"> 安装 Arch Linux 子系统 <a class="header-anchor" href="#-安装-arch-linux-子系统" aria-hidden="true">#</a></h2><h3 id="安装前准备" tabindex="-1">安装前准备 <a class="header-anchor" href="#安装前准备" aria-hidden="true">#</a></h3><p>从<a href="https://archlinux.org/download/" target="_blank" rel="noreferrer">Arch官网下载地址</a>选择离你最近的镜像站（例如<a href="https://mirrors.tuna.tsinghua.edu.cn/archlinux/iso/latest/" target="_blank" rel="noreferrer">清华大学 Arch 镜像</a>），下载名字形如<code>archlinux-bootstrap-&lt;version&gt;-x86_64.tar.gz</code> 的 bootstrap 镜像。</p><p>下载完成后需要<strong>镜像文件</strong>放入 Linux 系统中(一般使用 <code>WSL2</code> 默认安装的 <code>Ubuntu</code> 系统)，并切换到存放 <code>archlinux-bootstrap-&lt;version&gt;-x86_64.tar.gz</code> 的 bootstrap 镜像对应的目录下。</p><h3 id="镜像安装" tabindex="-1">镜像安装 <a class="header-anchor" href="#镜像安装" aria-hidden="true">#</a></h3><ol><li>在准备好的 Linux 系统中以管理员(Root)身份运行如下命令：</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 1. 解压下载镜像</span></span>
<span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-zxvf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">archlinux-bootstrap-</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">-x86_64.tar.gz</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2. 切换到解压后的目录中</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root.x86_64</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 3. 重新压缩文件夹内容（以管理员身份）</span></span>
<span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-zcvf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">arch_bootstrap.tar.gz</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"></span></code></pre></div><blockquote><p>之所以必须以管理员(Root)身份执行此操作，是为了在将引导文件系统导入 <code>WSL2</code> 时保留其文件所有权。如果不这样做，您在与导入的操作系统交互时可能会遇到权限问题。</p></blockquote><p>2） 重新创建完压缩文件后，将文件移动到将安装 <code>Arch</code> 的计算机上，并在命令行执行如下操作：</p><div class="language-powershell"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 参数说明：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># DistroName : 安装子系统时及以后启动时显示的分发名称</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \\path\\to\\where\\u\\want\\to\\save : 你想要存储对应虚拟磁盘文件的目录</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \\path\\to\\arch_bootstrap.tar.gz : 存放刚刚重新压缩过的镜像的路径</span></span>
<span class="line"><span style="color:#A6ACCD;">wsl </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">DistroName</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \\path\\to\\</span><span style="color:#89DDFF;font-style:italic;">where</span><span style="color:#A6ACCD;">\\u\\want\\to\\save \\path\\to\\arch_bootstrap.tar.gz</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 例子：</span></span>
<span class="line"><span style="color:#A6ACCD;">wsl </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">import Arch D:\\WSL\\Arch D:\\arch_bootstrap.tar.gz</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 此时我将存放在 D 盘的 arch_bootstrap.tar.gz 安装到了 D:\\WSL\\Arch 文件夹下(该文件夹下面会有一个虚拟镜像文件)，并且该系统在 WSL 中对应的名称为 Arch</span></span>
<span class="line"></span></code></pre></div><p>3） <code>Arch</code> 现在已经可以启动了。此时我们需要进入子系统。</p><p>4） 初始化keyring</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 初始化keyring</span></span>
<span class="line"><span style="color:#FFCB6B;">pacman-key</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--init</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># keyring填充</span></span>
<span class="line"><span style="color:#FFCB6B;">pacman-key</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--populate</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">archlinux</span></span>
<span class="line"></span></code></pre></div><p>5） 此时直接更新系统可能无法解析网络的问题，需要运行如下命令更新系统的镜像。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 此处默认镜像列表为中国CN地区</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果是别的国家请访问：https://archlinux.org/mirrorlist/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 可以自动生成对应的 mirrorlist</span></span>
<span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://archlinux.org/mirrorlist/?country=CN&amp;protocol=https&amp;ip_version=4&amp;use_mirror_status=on</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">cut</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/pacman.d/mirrorlist</span></span>
<span class="line"></span></code></pre></div><p>6） 更新系统，安装基础环境</p><div class="language-zsh"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 更新系统</span></span>
<span class="line"><span style="color:#FFCB6B;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Syu</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装一些常用组件</span></span>
<span class="line"><span style="color:#FFCB6B;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">base-devel</span></span>
<span class="line"></span></code></pre></div><h3 id="其他设置" tabindex="-1">其他设置 <a class="header-anchor" href="#其他设置" aria-hidden="true">#</a></h3><p>关于 Arch 的更多安装信息可以参考<a href="https://arch.icekylin.online/" target="_blank" rel="noreferrer">archlinux 简明指南</a>以及<a href="https://github.com/nckslvrmn/arch_linux_wsl2#next-steps" target="_blank" rel="noreferrer">nckslvrmn的指南</a>，在此处仅介绍两处常用的指令。</p><h4 id="_1-设置-arch-为默认启动的子系统" tabindex="-1">1. 设置 <code>Arch</code> 为默认启动的子系统 <a class="header-anchor" href="#_1-设置-arch-为默认启动的子系统" aria-hidden="true">#</a></h4><div class="language-powershell"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">wsl </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d Arch</span></span>
<span class="line"></span></code></pre></div><h4 id="_2-终端默认用户打开" tabindex="-1">2. 终端默认用户打开 <a class="header-anchor" href="#_2-终端默认用户打开" aria-hidden="true">#</a></h4><p>执行这一步骤的前提是您必须拥有一个非 Root 的普通用户账户（用户创建可以参考文章：<a href="https://arch.icekylin.online/rookie/desktop-env-and-app.html#_2-%E5%87%86%E5%A4%87%E9%9D%9E-root-%E7%94%A8%E6%88%B7" target="_blank" rel="noreferrer">准备非 root 用户</a>）。</p><p><img src="`+e+`" alt="Arch默认用非Root用户登录"></p><p>随后，我们打开 <code>Windows Terminal</code> 并在设置中配置相关的配置文件中配置对应的命令行为 <code>wsl ~ -u &lt;username&gt;</code> ，完成这一步后每次用 <code>Windows Terminal</code> 打开子系统就会默认用你设定的非 Root 用户登录。</p><h2 id="󰋊-linux-子系统的迁移" tabindex="-1">󰋊 Linux 子系统的迁移 <a class="header-anchor" href="#󰋊-linux-子系统的迁移" aria-hidden="true">#</a></h2><h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-hidden="true">#</a></h3><p>在使用 <code>Windows Subsystem for Linux</code> (以下简称为 <code>WSL</code>) 的时候，其一般情况下是安装在系统盘 <code>C</code> 盘，但是就像安装一些应用程序一样，很多时候我们并不想将其安装在这里，所以很多时候我们需要对 <code>WSL</code> 进行迁移。</p><h3 id="迁移前准备" tabindex="-1">迁移前准备 <a class="header-anchor" href="#迁移前准备" aria-hidden="true">#</a></h3><p>在迁移前我们首先要需要将当前正在运行的 <code>WSL</code> 停止运行，对应的命令行如下：</p><div class="language-ps"><button title="Copy Code" class="copy"></button><span class="lang">ps</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">wsl </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">shutdown</span></span>
<span class="line"></span></code></pre></div><h3 id="导出对应的分发版本" tabindex="-1">导出对应的分发版本 <a class="header-anchor" href="#导出对应的分发版本" aria-hidden="true">#</a></h3><p>在停止了对应的分发版本后，我们还需要进行<strong>对应分发版本</strong>的导出，对应命令行如下：</p><div class="language-ps"><button title="Copy Code" class="copy"></button><span class="lang">ps</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">wsl </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">export </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">DistributionName</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">where</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">u</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">want</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">save</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># For example:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># wsl --export Ubuntu D:/export.tar</span></span>
<span class="line"></span></code></pre></div><p>查看系统内已有所有的分发版本的命令行如下：</p><div class="language-ps"><button title="Copy Code" class="copy"></button><span class="lang">ps</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">wsl </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">list</span></span>
<span class="line"></span></code></pre></div><h3 id="注销原有分发版本记录" tabindex="-1">注销原有分发版本记录 <a class="header-anchor" href="#注销原有分发版本记录" aria-hidden="true">#</a></h3><p>导出完毕之后，我们要做的就是将原有的分发版本的记录进行注销，对应命令行命令如下：</p><div class="language-ps"><button title="Copy Code" class="copy"></button><span class="lang">ps</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">wsl </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">unregister </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">DistributionName</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="重新导入分发版本" tabindex="-1">重新导入分发版本 <a class="header-anchor" href="#重新导入分发版本" aria-hidden="true">#</a></h3><p>注销完毕之后，我们选定一个新的位置，并将其重新导入，对于命令行如下：</p><div class="language-ps"><button title="Copy Code" class="copy"></button><span class="lang">ps</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">wsl </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">DistributionName</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">new</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">dirctory</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">where</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">u</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">saved</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">version </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># For example:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># wsl --import Ubuntu D:\\export\\ D:\\export.tar --version 2</span></span>
<span class="line"></span></code></pre></div><h3 id="重新确定登录用户" tabindex="-1">重新确定登录用户 <a class="header-anchor" href="#重新确定登录用户" aria-hidden="true">#</a></h3><p>在重新导入对应分发版本之后，我们再次登录对应版本之后可能遇到对应子系统的默认登陆用户并非自己之前设定的问题，此时我们需要对对应分发版本重新设置默认登陆用户，请参考前文的介绍。</p>`,49),p=[t];function r(c,i,d,h,y,D){return n(),a("div",null,p)}const u=s(o,[["render",r]]);export{A as __pageData,u as default};