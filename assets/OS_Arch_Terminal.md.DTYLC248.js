import{$ as s,U as a,S as i,as as e}from"./chunks/framework.CIMvB-QH.js";const u=JSON.parse('{"title":"Arch Linux 终端相关内容","description":"","frontmatter":{},"headers":[],"relativePath":"OS/Arch/Terminal.md","filePath":"OS/Arch/Terminal.md","lastUpdated":1704180282000}'),n={name:"OS/Arch/Terminal.md"},t=e(`<h1 id="arch-linux-终端相关内容" tabindex="-1">Arch Linux 终端相关内容 <a class="header-anchor" href="#arch-linux-终端相关内容" aria-label="Permalink to &quot;Arch Linux 终端相关内容&quot;">​</a></h1><p>本人目前使用的终端是 <code>zsh</code> 。</p><p><code>Zsh</code> 是一个功能强大的 shell ，既可以作为交互式 shell ，也可以作为脚本语言解释器。虽然与 POSIX sh 兼容（默认情况下，只有在发出仿真 sh 时才兼容），但它提供了改进的制表符完成和 globbing 等优点。</p><p>安装命令如下：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Sy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh</span></span></code></pre></div><p>运行后你应该会看到新用户向导（zsh-newuser-install），它可以协助你完成一些基础配置。如果要跳过这一步骤，可以按 q 退出。如果你没有看到新用户向导（zsh-newuser-install），可以手动运行以下命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoload</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Uz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh-newuser-install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">zsh-newuser-install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span></span></code></pre></div><p>设置 <code>Zsh</code> 为默认终端</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chsh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/zsh</span></span></code></pre></div><p>至此， <code>Zsh</code> 设置基本完成，更多设置可以参考<a href="https://wiki.archlinux.org/title/zsh" target="_blank" rel="noreferrer">官方 Wiki</a>。</p><h2 id="终端美化" tabindex="-1">终端美化 <a class="header-anchor" href="#终端美化" aria-label="Permalink to &quot;终端美化&quot;">​</a></h2><p>终端美化请详见 <a href="/OS/Arch/Beautify/Zsh">Zsh 美化</a> 部分。</p><h2 id="终端密码显示" tabindex="-1">终端密码显示 <code>*</code> <a class="header-anchor" href="#终端密码显示" aria-label="Permalink to &quot;终端密码显示 \`*\`&quot;">​</a></h2><p>首先你需要有一个文本编辑器，比如 <code>nano</code>，随后执行如下指令:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EDITOR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nano</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> visudo</span></span></code></pre></div><p>随后修改打开的文件，在 <code>Defaults specification</code> 部分添加如下内容：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Defaults specification</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Defaults</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pwfeedback</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span></code></pre></div><p>保存后，重启终端输入 <code>sudo</code> 即可查看效果。</p>`,18),h=[t];function l(p,c,d,o,r,k){return i(),a("div",null,h)}const F=s(n,[["render",l]]);export{u as __pageData,F as default};