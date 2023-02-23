import{_ as i,M as l,p,q as r,N as a,V as t,R as n,t as s,a1 as u}from"./framework-96b046e1.js";const d={},m=n("h2",{id:"-本地部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#-本地部署","aria-hidden":"true"},"#"),s("  本地部署")],-1),k=n("h3",{id:"部署代码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#部署代码","aria-hidden":"true"},"#"),s(" 部署代码")],-1),v=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"sudo"),s(" pacman "),n("span",{class:"token parameter variable"},"-S"),s(" nodejs "),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token comment"},"# 安装 nodejs 和 pnpm"),s(`
`),n("span",{class:"token function"},"git"),s(` clone https://github.com/easterNday/easterNday.github.io
`),n("span",{class:"token builtin class-name"},"cd"),s(` ./easterNday.github.io
`),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"install"),s(`
`),n("span",{class:"token function"},"pnpm"),s(` docs:dev
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("brew "),n("span",{class:"token function"},"install"),s(),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token comment"},"# 安装 pnpm"),s(`
`),n("span",{class:"token function"},"git"),s(` clone https://github.com/easterNday/easterNday.github.io
`),n("span",{class:"token builtin class-name"},"cd"),s(` ./easterNday.github.io
`),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"install"),s(`
`),n("span",{class:"token function"},"pnpm"),s(` docs:dev
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[s("scoop install nodejs "),n("span",{class:"token comment"},"# 安装 nodejs"),s(`
scoop install pnpm `),n("span",{class:"token comment"},"# 安装 pnpm"),s(`
git clone https:`),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},"/"),s("github"),n("span",{class:"token punctuation"},"."),s("com/easterNday/easterNday"),n("span",{class:"token punctuation"},"."),s("github"),n("span",{class:"token punctuation"},"."),s(`io
cd `),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("easterNday"),n("span",{class:"token punctuation"},"."),s("github"),n("span",{class:"token punctuation"},"."),s(`io
pnpm install
pnpm docs:dev
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("code",null,"VuePress",-1),_={href:"https://www.vuepress.cn/guide/",target:"_blank",rel:"noopener noreferrer"},f=n("h2",{id:"提交规范",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#提交规范","aria-hidden":"true"},"#"),s(" 提交规范")],-1),y={href:"https://www.conventionalcommits.org/",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"Pr提交",-1),w={href:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"},N=u(`<p>在本项目里进行提交请使用 <code>yarn commit</code> 命令替换原有的 <code>git commit -m &quot;information&quot;</code> 操作，具体的操作过程可以参考下面的命令行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> commit
Please enter a type: <span class="token punctuation">[</span>required<span class="token punctuation">]</span> <span class="token punctuation">[</span>tab-completion<span class="token punctuation">]</span> <span class="token punctuation">[</span>header<span class="token punctuation">]</span>
<span class="token operator">&lt;</span>type<span class="token operator">&gt;</span> holds information about the goal of a change.

<span class="token operator">&lt;</span>type<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>scope<span class="token operator">&gt;</span><span class="token punctuation">)</span>: <span class="token operator">&lt;</span>subject<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span>

? type: docs
Please enter a scope: <span class="token punctuation">[</span>optional<span class="token punctuation">]</span> <span class="token punctuation">[</span>header<span class="token punctuation">]</span>
<span class="token operator">&lt;</span>scope<span class="token operator">&gt;</span> marks <span class="token function">which</span> sub-component of the project is affected

docs<span class="token punctuation">(</span><span class="token operator">&lt;</span>scope<span class="token operator">&gt;</span><span class="token punctuation">)</span>: <span class="token operator">&lt;</span>subject<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span>

? scope: README
Please enter a subject: <span class="token punctuation">[</span>required<span class="token punctuation">]</span> <span class="token punctuation">[</span>header<span class="token punctuation">]</span>
<span class="token operator">&lt;</span>subject<span class="token operator">&gt;</span> is a short, high-level description of the change

docs<span class="token punctuation">(</span>README<span class="token punctuation">)</span>: <span class="token operator">&lt;</span>subject<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span>

? subject: 进行了项目关于husky和约定式规范的说明。
Please enter a body: <span class="token punctuation">[</span>optional<span class="token punctuation">]</span> <span class="token punctuation">[</span>multi-line<span class="token punctuation">]</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span> holds additional information about the change

docs<span class="token punctuation">(</span>README<span class="token punctuation">)</span>: 进行了项目关于husky和约定式规范的说明。
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span>

? body:
Please enter a footer: <span class="token punctuation">[</span>optional<span class="token punctuation">]</span> <span class="token punctuation">[</span>multi-line<span class="token punctuation">]</span>
<span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span> holds further meta data, such as breaking changes and issue ids

docs<span class="token punctuation">(</span>README<span class="token punctuation">)</span>: 进行了项目关于husky和约定式规范的说明。
<span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span>

? footer:
<span class="token punctuation">[</span>main 676b13c<span class="token punctuation">]</span> docs<span class="token punctuation">(</span>README<span class="token punctuation">)</span>: 进行了项目关于husky和约定式规范的说明。
 <span class="token number">2</span> files changed, <span class="token number">5</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> .husky/commit-msg
Done <span class="token keyword">in</span> <span class="token number">115</span>.19s.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="-致谢" tabindex="-1"><a class="header-anchor" href="#-致谢" aria-hidden="true">#</a>  致谢</h2>`,3),E={href:"https://arch.icekylin.online/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://www.nerdfonts.com/cheat-sheet",target:"_blank",rel:"noopener noreferrer"},P=n("h2",{id:"-版权说明",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#-版权说明","aria-hidden":"true"},"#"),s("  版权说明")],-1),M={href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},V=n("img",{src:"https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png",alt:"license"},null,-1),C=n("p",null,"网站源代码采用 MIT 许可证；",-1),D={href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"};function R(q,A){const o=l("CodeGroupItem"),c=l("CodeGroup"),e=l("ExternalLinkIcon");return p(),r("div",null,[m,k,a(c,null,{default:t(()=>[a(o,{title:"Pacman"},{default:t(()=>[v]),_:1}),a(o,{title:"HomeBrew"},{default:t(()=>[b]),_:1}),a(o,{title:"Scoop"},{default:t(()=>[h]),_:1})]),_:1}),n("p",null,[s("本网页利用 "),g,s(" 进行构建，具体实现请参照本项目以及 "),n("a",_,[s("VuePress中文文档"),a(e)]),s(" 中的相关说明。")]),f,n("p",null,[s("本项目提交采用了"),n("a",y,[s("约定式提交规范"),a(e)]),s("，如果您后期需要对本项目进行编辑(参与贡献)，请按照约定式提交规范进行 "),x,s(" 。")]),n("p",null,[s("本项目目前使用"),n("a",w,[s("@commitlint/config-conventional"),a(e)]),s("插件进行项目提交规约，可以参考相关文档进行操作。")]),N,n("p",null,[n("a",E,[s("archlinux 简明指南"),a(e)]),s("： 网站源代码在一定程度上参考了该项目的部分风格样式。")]),n("p",null,[n("a",j,[s("NerdFonts"),a(e)]),s(": 网站上使用了相关字体并在部分美化教程中进行了引用。")]),P,n("p",null,[n("a",M,[V,a(e)])]),C,n("p",null,[s("未经特殊说明，本作品采用 "),n("a",D,[s("知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议"),a(e)]),s(" 进行许可。")])])}const B=i(d,[["render",R],["__file","index.html.vue"]]);export{B as default};
