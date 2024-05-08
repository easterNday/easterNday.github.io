import{$ as a,U as e,S as o,as as d}from"./chunks/framework.CIMvB-QH.js";const y=JSON.parse('{"title":"利用 Payload-dumper 提取各部分镜像","description":"","frontmatter":{},"headers":[],"relativePath":"OS/Android/Root/Payload_dumper.md","filePath":"OS/Android/Root/Payload_dumper.md","lastUpdated":1704180282000}'),l={name:"OS/Android/Root/Payload_dumper.md"},r=d(`<h1 id="利用-payload-dumper-提取各部分镜像" tabindex="-1">利用 Payload-dumper 提取各部分镜像 <a class="header-anchor" href="#利用-payload-dumper-提取各部分镜像" aria-label="Permalink to &quot;利用 Payload-dumper 提取各部分镜像&quot;">​</a></h1><h2 id="-提取前准备" tabindex="-1"> 提取前准备 <a class="header-anchor" href="#-提取前准备" aria-label="Permalink to &quot; 提取前准备&quot;">​</a></h2><ul><li><p>含 Payload 的刷机包:小米手机可查阅<a href="/OS/Android/Xiaomi#rom-下载">小米 ROM 下载</a>下载，其余机型请自行寻找。</p></li><li><p><a href="https://github.com/ssut/payload-dumper-go" target="_blank" rel="noreferrer">payload-dumper-go</a>: 对应 <code>macOS</code> , <code>Windows</code> 以及 <code>Linux</code> 预构建文件<a href="https://github.com/ssut/payload-dumper-go/releases" target="_blank" rel="noreferrer">下载地址</a></p></li></ul><h2 id="󰱧-如何提取" tabindex="-1">󰱧 如何提取 <a class="header-anchor" href="#󰱧-如何提取" aria-label="Permalink to &quot;󰱧 如何提取&quot;">​</a></h2><ol><li><p>解压系统包，并将之前下载的刷机包解压缩并找到 <code>payload.bin</code> 文件，将其复制到 <code>payload-dumper-go</code> 的文件夹下。</p></li><li><p>对于 <code>Windows</code> 用户，将 <code>payload.bin</code> 拖到目录下的 <code>payload-dumper-go.exe</code> 即可自动开始运行。其他平台的用户请在 <code>payload-dumper-go</code> 文件夹下打开终端，执行下述命令：</p></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 注意：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 请自行更换 payload.bin 为对应的 payload 文件名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./payload-dumper-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> payload.bin</span></span></code></pre></div><blockquote><p>在类 Unix 环境下，如果不能识别 <code>payload-dumper-go</code> 为可执行文件，请在命令行执行 <code>chmod +x ./payload-dumper-go</code></p></blockquote><h2 id="-注意事项" tabindex="-1"> 注意事项 <a class="header-anchor" href="#-注意事项" aria-label="Permalink to &quot; 注意事项&quot;">​</a></h2><ul><li>不支持增量 OTA（增量）负载，请使用通刷包进行负载解压。</li><li>出于性能原因，强烈建议使用固态硬盘，机械硬盘可能导致解压速度过慢。</li></ul><h2 id="-参考" tabindex="-1"> 参考 <a class="header-anchor" href="#-参考" aria-label="Permalink to &quot; 参考&quot;">​</a></h2><ul><li><p><a href="https://github.com/ssut/payload-dumper-go" target="_blank" rel="noreferrer">payload-dumper-go</a></p></li><li><p><a href="https://magiskcn.com/payload-dumper-go-boot" target="_blank" rel="noreferrer">payload-dumper-go 提取 boot（payload 提取 boot.img）</a></p></li></ul>`,11),t=[r];function i(p,s,n,c,h,u){return o(),e("div",null,t)}const _=a(l,[["render",i]]);export{y as __pageData,_ as default};