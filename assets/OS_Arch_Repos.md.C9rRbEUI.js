import{$ as s,U as i,S as a,at as n}from"./chunks/framework.DgqaZlKJ.js";const C=JSON.parse('{"title":"Arch Linux 仓库","description":"","frontmatter":{},"headers":[],"relativePath":"OS/Arch/Repos.md","filePath":"OS/Arch/Repos.md","lastUpdated":1704180282000}'),h={name:"OS/Arch/Repos.md"},l=n(`<h1 id="arch-linux-仓库" tabindex="-1">Arch Linux 仓库 <a class="header-anchor" href="#arch-linux-仓库" aria-label="Permalink to &quot;Arch Linux 仓库&quot;">​</a></h1><h2 id="-系统补熵" tabindex="-1"> 系统补熵 <a class="header-anchor" href="#-系统补熵" aria-label="Permalink to &quot; 系统补熵&quot;">​</a></h2><p>有些时候，当我们在进行上游仓库同步的过程中，可能会出现如下提示：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> archlinuxcn-keyring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">正在解析依赖关系...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">正在查找软件包冲突...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">软件包</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (1) archlinuxcn-keyring-20191127-1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">全部安装大小：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0.33</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MiB</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">::</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 进行安装吗？</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [Y/n] </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1/1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 正在检查密钥环里的密钥                                             [########################################] 100%</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1/1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 正在检查软件包完整性                                               [########################################] 100%</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1/1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 正在加载软件包文件                                                 [########################################] 100%</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1/1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 正在检查文件冲突                                                   [########################################] 100%</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1/1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 正在检查可用存储空间                                               [########################################] 100%</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">::</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 正在处理软件包的变化...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1/1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 正在安装 archlinuxcn-keyring                                       [########################################] 100%</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">==&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">正在从</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> archlinuxcn.gpg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 添加密匙...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">==&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">正在本地签名密匙环中的可信密匙...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 正在本地签名密匙</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 87</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">F2E316E0ABC98B9DE8D4EF042FD810600954EF...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">==&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">错误：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 87</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">F2E316E0ABC98B9DE8D4EF042FD810600954EF无法在本地签署。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 正在本地签名密匙</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 99399</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">D88F7B752BF364CD485A85E3925A6211F05...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">==&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">错误：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 99399</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">D88F7B752BF364CD485A85E3925A6211F05无法在本地签署。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 正在本地签名密匙</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 90403</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">E12F4CE5E0E950E4AD2C96492E347202001...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">==&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">错误：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 90403</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">E12F4CE5E0E950E4AD2C96492E347202001无法在本地签署。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 正在本地签名密匙</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> F905932C85D705FD2A3CC9E47C63370395FF0792...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 正在本地签名密匙</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">F255DC97A5431001F9D01F8CDABD988DD8AD93B...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">......</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">==&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Updating</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> trust</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> database...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gpg:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 密钥</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> A903C2BB3CAB5862</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 生成于未来的</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 19921</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 秒后（可能是因为时空扭曲或系统时钟的问题）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gpg:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EB2638FF56C0C53:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> signature</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> class</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gpg:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EB2638FF56C0C53:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> signature</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> class</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gpg:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 786</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">C63F330D7CB92:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> signature</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> class</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">......</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gpg:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 密钥</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> A903C2BB3CAB5862</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 生成于未来的</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 19920</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 秒后（可能是因为时空扭曲或系统时钟的问题）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gpg:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> marginals</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> needed:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  completes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> needed:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  trust</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> model:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pgp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gpg:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 公钥</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CF66D153D884358F</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 在其签名之后的</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 秒生成</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gpg:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 深度：0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  有效性：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  已签名：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  信任度：0-，0q，0n，0m，0f，1u</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gpg:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 公钥</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CF66D153D884358F</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 在其签名之后的</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 秒生成</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gpg:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 深度：1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  有效性：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  已签名：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 79</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  信任度：0-，0q，0n，5m，0f，0u</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gpg:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 公钥</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CF66D153D884358F</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 在其签名之后的</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 秒生成</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gpg:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 深度：2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  有效性：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 74</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  已签名：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 24</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  信任度：74-，0q，0n，0m，0f，0u</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gpg:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 下次信任度数据库检查将于</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2020</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-01-22</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 进行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">archlinuxcn-keyring</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 的可选依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    pkgstats:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> usage</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> statistics</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">::</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 正在运行事务后钩子函数...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1/1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) Arming ConditionNeedsUpdate...</span></span></code></pre></div><p>出现这个问题由于升级到了 <code>gnupg-2.1</code> 后，<code>Pacman</code> 上游更新了密钥环的格式，这使得本地的主密钥无法签署其它密钥。</p><p>我们可以通过安装 <a href="https://wiki.archlinux.org/title/Haveged" target="_blank" rel="noreferrer">Haveged</a> 来生成系统熵值的守护进程，它能加快加密软件等关键操作的速度。</p><h3 id="_1-安装-haveged" tabindex="-1">1. 安装 Haveged： <a class="header-anchor" href="#_1-安装-haveged" aria-label="Permalink to &quot;1. 安装 Haveged：&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Syu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> haveged</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> haveged</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> haveged</span></span></code></pre></div><h3 id="_2-调用-haveged" tabindex="-1">2. 调用 Haveged <a class="header-anchor" href="#_2-调用-haveged" aria-label="Permalink to &quot;2. 调用 Haveged&quot;">​</a></h3><p>首先我们运行如下命令用于删除原有密钥环：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/pacman.d/gnupg</span></span></code></pre></div><p>随后重新初始化一个新得密钥环：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman-key</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman-key</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --populate</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或者您也可以指定对应的仓库</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 例如: </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># sudo pacman-key --populate archlinux</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># sudo pacman-key --populate archlinuxcn</span></span></code></pre></div><h2 id="-非官方用户仓库" tabindex="-1"> 非官方用户仓库 <a class="header-anchor" href="#-非官方用户仓库" aria-label="Permalink to &quot; 非官方用户仓库&quot;">​</a></h2><blockquote><p>此处仅列举出我常用的几个仓库，更多仓库请参考<a href="https://wiki.archlinux.org/title/Unofficial_user_repositories" target="_blank" rel="noreferrer">官方文档</a></p></blockquote><h3 id="_1-alhp" tabindex="-1">1. ALHP <a class="header-anchor" href="#_1-alhp" aria-label="Permalink to &quot;1. ALHP&quot;">​</a></h3><p>该仓库适合追新用户，仓库内的大部分内容与官方仓库一样，但是增加了不同的 <code>x86_64</code> 平台新功能，并使用了 <code>LTO</code> 进行编译。</p><h4 id="_1-1-安装密钥和镜像列表" tabindex="-1">1.1 安装密钥和镜像列表 <a class="header-anchor" href="#_1-1-安装密钥和镜像列表" aria-label="Permalink to &quot;1.1 安装密钥和镜像列表&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">paru</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alhp-keyring</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alhp-mirrorlist</span></span></code></pre></div><p><code>alhp-keyring</code> 提供了 <code>ALHP</code> 当前使用的签名密钥， <code>alhp-mirrorlist</code> 提供了一系列镜像地址 <strong>（暂时没有大陆地址）</strong>。</p><blockquote><p>镜像列表存储在 <code>/etc/pacman.d/alhp-mirrorlist</code>, 您可以自行编辑、注释它选择您喜欢的镜像。</p></blockquote><h4 id="_1-2-修改-etc-pacman-conf" tabindex="-1">1.2 修改 <code>/etc/pacman.conf</code> <a class="header-anchor" href="#_1-2-修改-etc-pacman-conf" aria-label="Permalink to &quot;1.2 修改 \`/etc/pacman.conf\`&quot;">​</a></h4><p>以管理员权限打开 <code>/etc/pacman.conf</code>，并在对应部分进行如下修改。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[core-x86-64-v3]</span></span>
<span class="line"><span>Include = /etc/pacman.d/alhp-mirrorlist</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[extra-x86-64-v3]</span></span>
<span class="line"><span>Include = /etc/pacman.d/alhp-mirrorlist</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[community-x86-64-v3]</span></span>
<span class="line"><span>Include = /etc/pacman.d/alhp-mirrorlist</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[core]</span></span>
<span class="line"><span>Include = /etc/pacman.d/mirrorlist</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[extra]</span></span>
<span class="line"><span>Include = /etc/pacman.d/mirrorlist</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[community]</span></span>
<span class="line"><span>Include = /etc/pacman.d/mirrorlist</span></span></code></pre></div><p>请保证 <code>[core-x86-64-v3]</code> 等标签在原来的 <code>[core]</code> 等标签上方，不然会默认使用最先找的包而非 <code>ALHP</code> 中的包。</p><p>修改完成后，请及时同步镜像：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">paru</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Syu</span></span></code></pre></div><blockquote><p>更多注意事项和安装方式请参考 <a href="https://github.com/an0nfunc/ALHP" target="_blank" rel="noreferrer">ALHP 官方文档</a>。</p></blockquote><h3 id="_2-archlinuxcn" tabindex="-1">2. ArchLinuxCN <a class="header-anchor" href="#_2-archlinuxcn" aria-label="Permalink to &quot;2. ArchLinuxCN&quot;">​</a></h3><p>Arch Linux 中文社区仓库 是由 Arch Linux 中文社区驱动的非官方用户仓库。包含中文用户常用软件、工具、字体/美化包等。</p><h4 id="_2-1-修改-etc-pacman-conf" tabindex="-1">2.1 修改 <code>/etc/pacman.conf</code> <a class="header-anchor" href="#_2-1-修改-etc-pacman-conf" aria-label="Permalink to &quot;2.1 修改 \`/etc/pacman.conf\`&quot;">​</a></h4><p>在文件最后两行添加如下内容：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[archlinuxcn]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arch</span></span></code></pre></div><p>这里我使用的是清华镜像源码，其他镜像源可以通过百度自行寻找，替换对应地址即可。</p><h4 id="_2-2-添加密钥" tabindex="-1">2.2 添加密钥 <a class="header-anchor" href="#_2-2-添加密钥" aria-label="Permalink to &quot;2.2 添加密钥&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Sy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> archlinuxcn-keyring</span></span></code></pre></div><h3 id="_3-kernel-lts" tabindex="-1">3. Kernel-LTS <a class="header-anchor" href="#_3-kernel-lts" aria-label="Permalink to &quot;3. Kernel-LTS&quot;">​</a></h3><p>该存储库内容较少，只存储了部分预编译的 LTS 内核：</p><ul><li>linux-lts510</li><li>linux-lts54</li><li>linux-lts419</li><li>linux-lts414</li><li>linux-lts49</li><li>linux-lts44</li></ul><p>对于某些型号的设备来说，最新的内核也许会有某些部分不能使用(例如触摸屏)，而使用这个仓库替换低版本内核比较方便。</p><h4 id="_3-1-修改-etc-pacman-conf" tabindex="-1">3.1 修改 <code>/etc/pacman.conf</code> <a class="header-anchor" href="#_3-1-修改-etc-pacman-conf" aria-label="Permalink to &quot;3.1 修改 \`/etc/pacman.conf\`&quot;">​</a></h4><p>在文件最后两行添加如下内容：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[kernel-lts]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://repo.m2x.dev/current/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$repo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arch</span></span></code></pre></div><p>值得注意的是，类似于 <code>Manjaro</code> 这种发行版，由于其延迟更新的特性，可能<strong>并不适合</strong>使用本仓库。</p><h4 id="_3-2-导入内核签名" tabindex="-1">3.2 导入内核签名 <a class="header-anchor" href="#_3-2-导入内核签名" aria-label="Permalink to &quot;3.2 导入内核签名&quot;">​</a></h4><p>终端输入如下指令添加本仓库所需密钥：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman-key</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --keyserver</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hkps://keyserver.ubuntu.com</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --recv-key</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 76</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">C6E477042BFE985CC220BD9C08A255442FAFF0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman-key</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --lsign</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 76</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">C6E477042BFE985CC220BD9C08A255442FAFF0</span></span></code></pre></div><h2 id="-参考" tabindex="-1"> 参考 <a class="header-anchor" href="#-参考" aria-label="Permalink to &quot; 参考&quot;">​</a></h2><ul><li><a href="https://www.archlinuxcn.org/gnupg-2-1-and-the-pacman-keyring/" target="_blank" rel="noreferrer">GnuPG-2.1 与 Pacman 密钥环</a></li><li><a href="https://wiki.archlinux.org/title/Unofficial_user_repositories" target="_blank" rel="noreferrer">Unofficial user repositories</a></li><li><a href="https://github.com/an0nfunc/ALHP" target="_blank" rel="noreferrer">an0nfunc/ALHP</a></li><li><a href="https://mirrors.tuna.tsinghua.edu.cn/help/archlinuxcn/" target="_blank" rel="noreferrer">Arch Linux CN 软件仓库镜像使用帮助</a></li><li><a href="https://gitlab.com/m2x.dev/kernel-lts/repository" target="_blank" rel="noreferrer">m2x.dev/kernel-lts</a></li></ul>`,49),p=[l];function t(k,e,F,r,d,g){return a(),i("div",null,p)}const y=s(h,[["render",t]]);export{C as __pageData,y as default};
