import{_ as e,o as s,c as t,Q as l,k as a,a as o}from"./chunks/framework.2d5b3227.js";const F=JSON.parse('{"title":"解锁 BootLoader","description":"","frontmatter":{},"headers":[],"relativePath":"Topic/Android/Flash/Unlock Bootloader.md","filePath":"Topic/Android/Flash/Unlock Bootloader.md","lastUpdated":1687093874000}'),r={name:"Topic/Android/Flash/Unlock Bootloader.md"},n=l('<h1 id="解锁-bootloader" tabindex="-1">解锁 BootLoader <a class="header-anchor" href="#解锁-bootloader" aria-label="Permalink to &quot;解锁 BootLoader&quot;">​</a></h1><blockquote><p>发起人: 文鸯<br> 制作人员: 文鸯、星随梦能、红豆、suda_code</p></blockquote><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>无论你是新机、旧机，你的刷机第一步，永远是:<strong>“解锁 BootLoader”</strong>。</p><p>BootLoader 是手机开机时，最先运行的程序。Bootloader 主要是在引导过程中对系统签名，内核签名及 Recovery 签名进行检验，如果签名不一致，即终止引导。因此厂商通常会对手机的 Bootloader 上锁，这样它就只能运行厂商认证过的操作系统和 Recovery 了。</p><p>因此我们如果需要将我们的设备进行刷写功能，<strong>理论上</strong>无论如何都必须解除这个限制。</p><h2 id="专用术语" tabindex="-1">专用术语 <a class="header-anchor" href="#专用术语" aria-label="Permalink to &quot;专用术语&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">术语</th><th style="text-align:left;">详细描述</th></tr></thead><tbody><tr><td style="text-align:center;">Fastboot</td><td style="text-align:left;"><code>FastBoot</code> 是一种 Android 设备的引导模式，它允许用户在设备启动时通过 USB 连接到计算机，并与设备进行通信。使用 <code>FastBoot</code>，用户可以在设备上执行各种操作，例如刷入新的固件、解锁引导程序、备份和还原分区等。fastboot 通常用于开发人员和高级用户，因为它需要一定的技术知识和经验。</td></tr><tr><td style="text-align:center;">FastbootD</td><td style="text-align:left;">随着 Android 动态分区的引入, <code>data</code>、 <code>system</code> 等原来的物理分区, 现在都被放到一个共同的 <code>super</code> 分区下. 这种<strong>虚拟分区</strong>只在用户空间可见。<br>因此，传统的 <code>Fastboot</code> 模式只能识别到整个 <code>super</code> 分区, 而无法识别到其下的虚拟分区，而为了读取虚拟分区中的内容， <code>FastbootD</code> 模式开始被引入，它实现了从 <code>BootLoader</code> 重新定位到用户空间的功能。</td></tr></tbody></table><h2 id="解锁" tabindex="-1">解锁 <a class="header-anchor" href="#解锁" aria-label="Permalink to &quot;解锁&quot;">​</a></h2><blockquote><p>解锁 BL 或救砖都会让你的文件被清空，需要备份</p></blockquote><h3 id="驱动安装" tabindex="-1">驱动安装 <a class="header-anchor" href="#驱动安装" aria-label="Permalink to &quot;驱动安装&quot;">​</a></h3><p>一般来说，驱动指 <code>adb</code> 和 <code>fastboot</code> 两个命令行工具以及识别安卓设备的部分，一般可以通过如下包来安装：</p><ul><li><a href="https://androidmtk.com/download-15-seconds-adb-installer" target="_blank" rel="noreferrer">15 Seconds ADB Installer</a></li><li><a href="https://adb.clockworkmod.com/" target="_blank" rel="noreferrer">Universal ADB Drivers</a></li></ul><p>如果你已经安装了 <code>choco</code> 或 <code>homebrew</code> 等包管理工具的话，可以通过如下方式来安装更加方便：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-pRPZt" id="tab-OZ6c5cx" checked="checked"><label for="tab-OZ6c5cx">Windows</label><input type="radio" name="group-pRPZt" id="tab-fpOkjPQ"><label for="tab-fpOkjPQ">MacOS</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">choco</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">adb</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fastboot</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">universal-adb-drivers</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">choco</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">adb</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fastboot</span><span style="color:#24292E;"> </span><span style="color:#032F62;">universal-adb-drivers</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">android-platform-tools</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">android-platform-tools</span></span></code></pre></div></div></div><p>对于一些厂商来说，手机驱动通常也被包含在官方工具中，例如小米的 <a href="https://www.xiaomiflash.com/" target="_blank" rel="noreferrer">MiFlash</a> 以及华为的 <a href="https://consumer.huawei.com/en/support/hisuite/" target="_blank" rel="noreferrer">HiSuite</a> 等。</p><h3 id="打开-usb-调试开关" tabindex="-1">打开 <code>USB</code> 调试开关 <a class="header-anchor" href="#打开-usb-调试开关" aria-label="Permalink to &quot;打开 `USB` 调试开关&quot;">​</a></h3><p>进入 <code>关于手机</code> 页面，连续点击 <code>版本号</code> 七次，弹出 <code>开发者选项已开启</code> 字样后，进入 <code>更多设置</code> 点击开 <code>开发者选项</code>, 选择 <code>允许计算机调试</code> 并连接电脑确认。</p><h4 id="手机进入-fastboot" tabindex="-1">手机进入 Fastboot <a class="header-anchor" href="#手机进入-fastboot" aria-label="Permalink to &quot;手机进入 Fastboot&quot;">​</a></h4><p>进入 <code>Fastboot</code> 有如下两种方式：</p><h5 id="_1-手动操作" tabindex="-1">1. 手动操作 <a class="header-anchor" href="#_1-手动操作" aria-label="Permalink to &quot;1. 手动操作&quot;">​</a></h5><p>手机长按电源键关机，关机后按住电源键和音量下键，当设备亮起，松开电源键，长按音量下键，直至设备进入 <code>Fastboot</code> 模式，随后通过数据线链接你的电脑。</p><h5 id="_2-adb-重启" tabindex="-1">2. <code>ADB</code> 重启 <a class="header-anchor" href="#_2-adb-重启" aria-label="Permalink to &quot;2. `ADB` 重启&quot;">​</a></h5><p>手机连接电脑，并在电脑命令行终端输入如下指令:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">adb</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reboot</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fastboot</span></span>\n<span class="line"><span style="color:#6A737D;"># or</span></span>\n<span class="line"><span style="color:#B392F0;">adb</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reboot</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bootloader</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">adb</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reboot</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fastboot</span></span>\n<span class="line"><span style="color:#6A737D;"># or</span></span>\n<span class="line"><span style="color:#6F42C1;">adb</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reboot</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bootloader</span></span></code></pre></div><p>即可进入 <code>Fastboot</code> 模式，随后保持连接状态不要断开。</p><h3 id="开始解锁" tabindex="-1">开始解锁 <a class="header-anchor" href="#开始解锁" aria-label="Permalink to &quot;开始解锁&quot;">​</a></h3><p>不同的手机解锁方式不同，一般来说我们可以通过在开发者选项中打开 <code>OEM 解锁</code> 来进行 <code>Fastboot</code> 解锁。</p><p>当然对于大多数手机，需要申请测试或者使用其他渠道解锁。</p><h4 id="小米手机" tabindex="-1">小米手机 <a class="header-anchor" href="#小米手机" aria-label="Permalink to &quot;小米手机&quot;">​</a></h4><p>对于<strong>小米手机</strong>，请先查看是否满足以下要求：</p><ul><li>设备至少存在一张有信号无欠费正常通讯的 SIM 卡</li><li>设备登录的小米账号可正常接收验证码</li><li>设备登录的小米账号本人知道账号与密码</li><li>设备非 ID 机，属于本人财产</li><li>账号已经绑定 168 小时(7 天)</li></ul><p>小米官方提供了<a href="https://www.miui.com/unlock/index.html" target="_blank" rel="noreferrer">解锁工具</a>,设备解锁状态中绑定账号和设备，进入 <code>Fastboot</code> 模式，打开刚才下载的工具，点击 <code>解锁</code> 后系统会<strong>恢复出厂系统</strong>并解锁。</p><h4 id="华为手机" tabindex="-1">华为手机 <a class="header-anchor" href="#华为手机" aria-label="Permalink to &quot;华为手机&quot;">​</a></h4><p>华为手机的官方解锁码获取通道已经于<strong>2018</strong>年正式关闭，对于一些旧型号的手机，可以尝试使用 <a href="https://github.com/werasik2aa/Huawei-Unlock-Tool" target="_blank" rel="noreferrer">werasik2aa/Huawei-Unlock-Tool</a> 或者 <a href="https://github.com/mashed-potatoes/PotatoNV" target="_blank" rel="noreferrer">mashed-potatoes/PotatoNV</a> 进行解锁，或者通过<strong>淘宝</strong>等方式获取解锁码。</p><blockquote><p>部分解锁 Bootloader 的手机会发生熔断，此操作不可逆，会失去保修资格等，选择解锁前请<strong>三思而后行</strong></p></blockquote><h1 id="相关视频及制作名单" tabindex="-1">相关视频及制作名单 <a class="header-anchor" href="#相关视频及制作名单" aria-label="Permalink to &quot;相关视频及制作名单&quot;">​</a></h1>',37),c=a("iframe",{width:"100%",height:"400",src:"//player.bilibili.com/player.html?aid=651393405&bvid=BV1ke4y1N7xF&cid=995569791&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ",-1),p=a("blockquote",null,[a("p",null,[o("本文章已获得 ["),a("a",{href:"https://space.bilibili.com/1396636900",target:"_blank",rel:"noreferrer"},"FlashCorpa"),o("] 授权"),a("br"),o(" 同时本人在此基础上进行了一定程度的增补修订，引用本稿件前请联系 ["),a("a",{href:"https://space.bilibili.com/1396636900",target:"_blank",rel:"noreferrer"},"FlashCorpa"),o("] 获得授权")])],-1),d=[n,c,p];function i(h,b,u,y,g,k){return s(),t("div",null,d)}const E=e(r,[["render",i]]);export{F as __pageData,E as default};