import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.2d5b3227.js";const h=JSON.parse('{"title":"Github 分支操作","description":"","frontmatter":{},"headers":[],"relativePath":"Application/Git/Command/Git_Branch.md","filePath":"Application/Git/Command/Git_Branch.md","lastUpdated":1699879692000}'),o={name:"Application/Git/Command/Git_Branch.md"},p=l(`<h1 id="github-分支操作" tabindex="-1">Github 分支操作 <a class="header-anchor" href="#github-分支操作" aria-label="Permalink to &quot;Github 分支操作&quot;">​</a></h1><h2 id="分支更名" tabindex="-1">分支更名 <a class="header-anchor" href="#分支更名" aria-label="Permalink to &quot;分支更名&quot;">​</a></h2><p>在 Git 的默认分支名称从 &quot;master&quot; 更改为 &quot;main&quot; 后，如果你想将本地仓库的分支名也修改为 &quot;main&quot;，可以按照以下步骤操作：</p><ol><li>首先，将本地分支切换到 &quot;master&quot; 分支：<code>git checkout master</code></li><li>创建一个新的名为 &quot;main&quot; 的分支并切换到该分支：<code>git branch -m main</code></li><li>推送该分支到远程仓库：<code>git push -u origin main</code></li><li>删除名为 &quot;master&quot; 的远程分支：<code>git push origin :master</code></li></ol><p>完成上述操作后，你的本地仓库的默认分支名就变成了 &quot;main&quot;，而旧的 &quot;master&quot; 分支被删除了。在接下来的操作中，请记得使用新的默认分支名 &quot;main&quot;。</p><h2 id="删除标签和发布" tabindex="-1">删除标签和发布 <a class="header-anchor" href="#删除标签和发布" aria-label="Permalink to &quot;删除标签和发布&quot;">​</a></h2><p>在 <code>Github Actions</code> 中，你可以使用以下的脚本来删除所有的 <code>tag</code> 和 <code>release</code>：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ClementTsang/delete-tag-and-release@v0.3.1</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">delete_release</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># default: false</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">tag_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">v0.1.0</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># tag name to delete</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">repo</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&lt;owner&gt;/&lt;repoName&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># target repo (optional). defaults to repo running this action</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">env</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">GITHUB_TOKEN</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.GITHUB_TOKEN }}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ClementTsang/delete-tag-and-release@v0.3.1</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">delete_release</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># default: false</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">tag_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">v0.1.0</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># tag name to delete</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">repo</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&lt;owner&gt;/&lt;repoName&gt;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># target repo (optional). defaults to repo running this action</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">env</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">GITHUB_TOKEN</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.GITHUB_TOKEN }}</span></span></code></pre></div><p>这个脚本会删除指定的 <code>tag</code> 和它关联的 <code>release</code>。如果你想删除所有的 <code>release</code>，你可以使用以下的命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">release</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-F</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;\\\\t&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{print $3}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">read</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">line</span><span style="color:#E1E4E8;">; </span><span style="color:#F97583;">do</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">release</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">delete</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$line</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#F97583;">done</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">release</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">awk</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-F</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;\\\\t&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{print $3}&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">read</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;"> </span><span style="color:#032F62;">line</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">do</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">release</span><span style="color:#24292E;"> </span><span style="color:#032F62;">delete</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$line</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">done</span></span></code></pre></div><p>这个命令会列出所有的 <code>release</code> ，然后删除它们。你也可以在删除 <code>release</code> 的同时删除关联的tag，只需要在命令中加上<code>--cleanup-tag</code>参数。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">release</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-F</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;\\\\t&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{print $3}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">read</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">line</span><span style="color:#E1E4E8;">; </span><span style="color:#F97583;">do</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">release</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">delete</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$line</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cleanup-tag</span><span style="color:#E1E4E8;">; </span><span style="color:#F97583;">done</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">release</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">awk</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-F</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;\\\\t&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{print $3}&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">read</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;"> </span><span style="color:#032F62;">line</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">do</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">release</span><span style="color:#24292E;"> </span><span style="color:#032F62;">delete</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$line</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cleanup-tag</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">done</span></span></code></pre></div><p>请注意，这些操作都是不可逆的，所以在执行前请确保你真的想要删除这些 <code>tag</code> 和 <code>release</code>。</p>`,13),e=[p];function t(c,r,E,y,i,d){return a(),n("div",null,e)}const u=s(o,[["render",t]]);export{h as __pageData,u as default};