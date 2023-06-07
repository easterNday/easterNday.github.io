import{_ as s,o as a,c as n,a as e}from"./app.3eb8319e.js";const u=JSON.parse('{"title":"Arch Linux 终端相关内容","description":"","frontmatter":{},"headers":[{"level":2,"title":"终端美化","slug":"终端美化","link":"#终端美化","children":[]},{"level":2,"title":"终端密码显示 *","slug":"终端密码显示","link":"#终端密码显示","children":[]}],"relativePath":"Topic/Arch/Terminal.md","lastUpdated":1686135206000}'),l={name:"Topic/Arch/Terminal.md"},p=e(`<h1 id="arch-linux-终端相关内容" tabindex="-1">Arch Linux 终端相关内容 <a class="header-anchor" href="#arch-linux-终端相关内容" aria-hidden="true">#</a></h1><p>本人目前使用的终端是 <code>zsh</code> 。</p><p><code>Zsh</code> 是一个功能强大的 shell ，既可以作为交互式 shell ，也可以作为脚本语言解释器。虽然与 POSIX sh 兼容（默认情况下，只有在发出仿真 sh 时才兼容），但它提供了改进的制表符完成和 globbing 等优点。</p><p>安装命令如下：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Sy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zsh</span></span>
<span class="line"></span></code></pre></div><p>运行后你应该会看到新用户向导（zsh-newuser-install），它可以协助你完成一些基础配置。如果要跳过这一步骤，可以按 q 退出。如果你没有看到新用户向导（zsh-newuser-install），可以手动运行以下命令：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">autoload</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Uz</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zsh-newuser-install</span></span>
<span class="line"><span style="color:#FFCB6B;">zsh-newuser-install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span></span>
<span class="line"></span></code></pre></div><p>设置 <code>Zsh</code> 为默认终端</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">chsh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/bin/zsh</span></span>
<span class="line"></span></code></pre></div><p>至此， <code>Zsh</code> 设置基本完成，更多设置可以参考<a href="https://wiki.archlinux.org/title/zsh" target="_blank" rel="noreferrer">官方 Wiki</a>。</p><h2 id="终端美化" tabindex="-1">终端美化 <a class="header-anchor" href="#终端美化" aria-hidden="true">#</a></h2><p>终端美化请详见 <a href="/Topic/Arch/Beautify/Zsh">Zsh 美化</a> 部分。</p><h2 id="终端密码显示" tabindex="-1">终端密码显示 <code>*</code> <a class="header-anchor" href="#终端密码显示" aria-hidden="true">#</a></h2><p>首先你需要有一个文本编辑器，比如 <code>nano</code>，随后执行如下指令:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">EDITOR</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">nano</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">visudo</span></span>
<span class="line"></span></code></pre></div><p>随后修改打开的文件，在 <code>Defaults specification</code> 部分添加如下内容：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">##</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Defaults specification</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">##</span></span>
<span class="line"><span style="color:#82AAFF;">...</span></span>
<span class="line"><span style="color:#FFCB6B;">Defaults</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pwfeedback</span></span>
<span class="line"><span style="color:#82AAFF;">...</span></span>
<span class="line"></span></code></pre></div><p>保存后，重启终端输入 <code>sudo</code> 即可查看效果。</p>`,18),o=[p];function t(c,i,r,d,h,C){return a(),n("div",null,o)}const A=s(l,[["render",t]]);export{u as __pageData,A as default};
