import{$ as s,U as i,S as a,at as n}from"./chunks/framework.CU6vlNhx.js";const F=JSON.parse('{"title":"约定式提交","description":"","frontmatter":{},"headers":[],"relativePath":"Overview/conventional.md","filePath":"Overview/conventional.md","lastUpdated":1683529950000}'),t={name:"Overview/conventional.md"},e=n(`<h1 id="约定式提交" tabindex="-1">约定式提交 <a class="header-anchor" href="#约定式提交" aria-label="Permalink to &quot;约定式提交&quot;">​</a></h1><p>本项目提交记录均符合<a href="https://www.conventionalcommits.org/zh-hans/v1.0.0/" target="_blank" rel="noreferrer">约定式提交规范</a>，这是一种用于给提交信息增加人机可读含义的规范。</p><p>此处将记录本项目如何设置保证提交记录符合约定式提交规范，下面会提供两种本项目都采用了的方法。实际使用中可以<strong>选择其一</strong>即可。</p><h2 id="󰉢-规范提交格式" tabindex="-1">󰉢 规范提交格式 <a class="header-anchor" href="#󰉢-规范提交格式" aria-label="Permalink to &quot;󰉢 规范提交格式&quot;">​</a></h2><p>提交格式的规范我们采用 <a href="https://github.com/commitizen/cz-cli#optional-install-and-run-commitizen-locally" target="_blank" rel="noreferrer">Commitizen</a> ，并让其安装在项目根目录下。</p><p>首先我们需要安装 <code>commitizen</code> 和 <code>cz-conventional-changelog</code>：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commitizen</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cz-conventional-changelog</span></span></code></pre></div><p>然后在 <code>package.json</code> 中增加对应配置：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;config&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   &quot;commitizen&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node_modules/cz-conventional-changelog&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>如果不知道添加在哪里，可以参考<a href="https://github.com/easterNday/easterNday.github.io/blob/main/package.json#L24-L28" target="_blank" rel="noreferrer">本项目配置</a>。</p><p>随后，初始化适配器：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commitizen</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cz-conventional-changelog</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-exact</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果上面的命令出错，请使用下面这个</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ./node_modules/.bin/commitizen init cz-conventional-changelog --save-dev --save-exact</span></span></code></pre></div><p>这样，你就可以使用 <code>pnpm cz</code> 来直接生成提交记录了。</p><p>或者您可以在 <code>package.json</code> 中设置一些您喜欢的替换脚本，例如使用 <code>pnpm commit</code> 来提交：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  &quot;scripts&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    &quot;commit&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;cz&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre></div><p>具体配置可以参考<a href="https://github.com/easterNday/easterNday.github.io/blob/main/package.json#L15" target="_blank" rel="noreferrer">本项目配置文件</a>。</p><h2 id="-校验提交格式" tabindex="-1"> 校验提交格式 <a class="header-anchor" href="#-校验提交格式" aria-label="Permalink to &quot; 校验提交格式&quot;">​</a></h2><p>上面的是在生成阶段使用一个 <code>cli</code> 来协助我们生成，该部分会介绍如何在生成后进行提交格式的校验，用于双重保险。</p><p>首先我们需要安装 <code>@commitlint/config-conventional</code> 和 <code>@commitlint/cli</code>：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @commitlint/config-conventional</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @commitlint/cli</span></span></code></pre></div><p>随后，在终端中执行如下指令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;module.exports = {extends: [&#39;@commitlint/config-conventional&#39;]};&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commitlint.config.js</span></span></code></pre></div><p>这条指令会在项目目录下新建一个 <code>commitlint.config.js</code> ，并写入所需要的配置。</p><blockquote><p>如果您还有其他的配置存在，请自行修改参数。</p></blockquote><p>为了能够自动校验提交信息，我们还需要 <code>husky</code> 作为辅助工具：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span></span></code></pre></div><p>随后执行如下指令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># husky 初始化</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成钩子</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .husky/commit-msg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;pnpx commitlint --edit $1&#39;</span></span></code></pre></div><p>之后每次使用 <code>git commit ...</code> 命令的时候都会自动校验提交信息。</p><h2 id="-参考" tabindex="-1"> 参考 <a class="header-anchor" href="#-参考" aria-label="Permalink to &quot; 参考&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/6990307028162281508#heading-6" target="_blank" rel="noreferrer">使用commitlint 规范commit格式</a></li><li><a href="https://github.com/commitizen/cz-cli" target="_blank" rel="noreferrer">commitizen/cz-cli</a></li><li><a href="https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional" target="_blank" rel="noreferrer">@commitlint/config-conventional</a></li><li><a href="https://neilning-xc.github.io/2021/12/12/ckxj3g81e000p9ynthi2f2uqb/" target="_blank" rel="noreferrer">使用commitizen来规范仓库的提交记录</a></li></ul>`,31),l=[e];function p(h,o,c,k,d,r){return a(),i("div",null,l)}const m=s(t,[["render",p]]);export{F as __pageData,m as default};