import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.c34366e8.js";const g=JSON.parse('{"title":"Android 运行时资源覆盖","description":"","frontmatter":{},"headers":[],"relativePath":"Topic/Android/ROM/rro_overlays.md","filePath":"Topic/Android/ROM/rro_overlays.md","lastUpdated":1687685751000}'),l={name:"Topic/Android/ROM/rro_overlays.md"},p=o(`<h1 id="android-运行时资源覆盖" tabindex="-1">Android 运行时资源覆盖 <a class="header-anchor" href="#android-运行时资源覆盖" aria-label="Permalink to &quot;Android 运行时资源覆盖&quot;">​</a></h1><h2 id="什么是运行时资源覆盖" tabindex="-1">什么是运行时资源覆盖 <a class="header-anchor" href="#什么是运行时资源覆盖" aria-label="Permalink to &quot;什么是运行时资源覆盖&quot;">​</a></h2><p>无需修改原 app 的代码，无需重新编译，就能覆盖 app 内的部分资源，从而实现修改 app 的部分 UI,后面简称 RRO。</p><h2 id="rro-原理" tabindex="-1">RRO 原理 <a class="header-anchor" href="#rro-原理" aria-label="Permalink to &quot;RRO 原理&quot;">​</a></h2><ul><li><p>应用通过 getString/getDrawable 去调用某个资源时,会将这个 resources ID 作为参数传给 framework 层。同一名称但不同状态的 resources ID 是一样的,比如不同分辨率但名称相同的图片分别被放置在了 drawable-hdpi/drawable-ldpi/drawable-mdpi 下，但在编译时针对该图片生成的 resources ID 只有一个。</p></li><li><p>为了快速查找到指定的资源，Apk 编译的时候会把 Java 文件里面的 R.String.app_name 替换成 ox7f123456 这种格式的值</p></li><li><p>每个 apk 里面都有一个文件(resources.arsc)记录着指定的 resource_id 对应的资源类型，如果是 string 类型，则记录的这个资源名称对应的所有语言的翻译，如果是 drawable 类型，则记录着哪些分辨率底下有这个资源。</p></li></ul><h2 id="rro-实现方法" tabindex="-1">RRO 实现方法 <a class="header-anchor" href="#rro-实现方法" aria-label="Permalink to &quot;RRO 实现方法&quot;">​</a></h2><ul><li>建立一个新的 overlay apk 项目，apk 项目底下有 res 文件夹，Android.mk、AndroidManifest.xml</li><li>修改 AndroidManifest.xml 配置 apk 的包名、要覆盖的 apk 的包名</li><li>修改 Android.mk 使得 apk 能集成到 system/vendor/overlay/目录下</li><li>找到需要覆盖的资源名，在 overlay apk 的 res 指定目录下定义同名的资源</li></ul><h2 id="实现样例" tabindex="-1">实现样例 <a class="header-anchor" href="#实现样例" aria-label="Permalink to &quot;实现样例&quot;">​</a></h2><h3 id="arrowos-的-setupwizard-实现欢迎页面替换" tabindex="-1">ArrowOS 的 SetupWizard 实现欢迎页面替换 <a class="header-anchor" href="#arrowos-的-setupwizard-实现欢迎页面替换" aria-label="Permalink to &quot;ArrowOS 的 SetupWizard 实现欢迎页面替换&quot;">​</a></h3><h4 id="androidmanifest-xml-的写法" tabindex="-1">AndroidManifest.xml 的写法 <a class="header-anchor" href="#androidmanifest-xml-的写法" aria-label="Permalink to &quot;AndroidManifest.xml 的写法&quot;">​</a></h4><p>在 Android 11 或更高版本中，用于定义叠加层资源映射的推荐机制是，在叠加层软件包的 <code>res/xml</code> 目录中创建一个文件，枚举应覆盖的目标资源及其替换值，然后将 <code>&lt;overlay&gt;</code> 清单标记的 <code>android:resourcesMap</code> 属性的值设置为对资源映射文件的引用，此处使用的是 <code>xml/overlays.xml</code>。</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;?</span><span style="color:#85E89D;">xml</span><span style="color:#B392F0;"> version</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1.0&quot;</span><span style="color:#B392F0;"> encoding</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;utf-8&quot;</span><span style="color:#E1E4E8;">?&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">manifest</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xmlns:android</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://schemas.android.com/apk/res/android&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#B392F0;">package</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;com.google.android.setupwizard.dogday.overlay&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#B392F0;">android:versionCode</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#B392F0;">android:versionName</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1.0&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     &lt;</span><span style="color:#85E89D;">application</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">android:label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;SetupWizardOverlay&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">android:hasCode</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;false&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     &lt;</span><span style="color:#85E89D;">overlay</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">android:targetPackage</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;com.google.android.setupwizard&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">android:priority</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">android:targetName</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;SetupWizard&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">android:isStatic</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">android:resourcesMap</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;@xml/overlays&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">manifest</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;?</span><span style="color:#22863A;">xml</span><span style="color:#6F42C1;"> version</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1.0&quot;</span><span style="color:#6F42C1;"> encoding</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;utf-8&quot;</span><span style="color:#24292E;">?&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">manifest</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xmlns:android</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://schemas.android.com/apk/res/android&quot;</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6F42C1;">package</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;com.google.android.setupwizard.dogday.overlay&quot;</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6F42C1;">android:versionCode</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6F42C1;">android:versionName</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1.0&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     &lt;</span><span style="color:#22863A;">application</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">android:label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;SetupWizardOverlay&quot;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">android:hasCode</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;false&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">     &lt;</span><span style="color:#22863A;">overlay</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">android:targetPackage</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;com.google.android.setupwizard&quot;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">android:priority</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0&quot;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">android:targetName</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;SetupWizard&quot;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">android:isStatic</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">android:resourcesMap</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;@xml/overlays&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">manifest</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h4 id="android-bp-编写" tabindex="-1">Android.bp 编写 <a class="header-anchor" href="#android-bp-编写" aria-label="Permalink to &quot;Android.bp 编写&quot;">​</a></h4><div class="language-Makefile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Makefile</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">// Copyright (C) 2020 Paranoid Android</span></span>
<span class="line"><span style="color:#E1E4E8;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">// Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">// you may not use this file except in compliance with the License.</span></span>
<span class="line"><span style="color:#E1E4E8;">// You may obtain a copy of the License at</span></span>
<span class="line"><span style="color:#E1E4E8;">//</span></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">://www.apache.org/licenses/LICENSE-2.0</span></span>
<span class="line"><span style="color:#E1E4E8;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">// Unless required by applicable law or agreed to in writing, software</span></span>
<span class="line"><span style="color:#E1E4E8;">// distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></span>
<span class="line"><span style="color:#E1E4E8;">// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></span>
<span class="line"><span style="color:#E1E4E8;">// See the License for the specific language governing permissions and</span></span>
<span class="line"><span style="color:#E1E4E8;">// limitations under the License.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">runtime_resource_overlay {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: &quot;DogDaySetupWizardOverlay&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">certificate</span><span style="color:#E1E4E8;">: &quot;platform&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">sdk_version</span><span style="color:#E1E4E8;">: &quot;current&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">product_specific</span><span style="color:#E1E4E8;">: true</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">// Copyright (C) 2020 Paranoid Android</span></span>
<span class="line"><span style="color:#24292E;">//</span></span>
<span class="line"><span style="color:#24292E;">// Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></span>
<span class="line"><span style="color:#24292E;">// you may not use this file except in compliance with the License.</span></span>
<span class="line"><span style="color:#24292E;">// You may obtain a copy of the License at</span></span>
<span class="line"><span style="color:#24292E;">//</span></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;">      </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">://www.apache.org/licenses/LICENSE-2.0</span></span>
<span class="line"><span style="color:#24292E;">//</span></span>
<span class="line"><span style="color:#24292E;">// Unless required by applicable law or agreed to in writing, software</span></span>
<span class="line"><span style="color:#24292E;">// distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></span>
<span class="line"><span style="color:#24292E;">// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></span>
<span class="line"><span style="color:#24292E;">// See the License for the specific language governing permissions and</span></span>
<span class="line"><span style="color:#24292E;">// limitations under the License.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">runtime_resource_overlay {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: &quot;DogDaySetupWizardOverlay&quot;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">certificate</span><span style="color:#24292E;">: &quot;platform&quot;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">sdk_version</span><span style="color:#24292E;">: &quot;current&quot;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">product_specific</span><span style="color:#24292E;">: true</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="覆盖文件编写" tabindex="-1">覆盖文件编写 <a class="header-anchor" href="#覆盖文件编写" aria-label="Permalink to &quot;覆盖文件编写&quot;">​</a></h4><p>如下所示，是一个简单的 <code>xml/overlays.xml</code> 编写，可以覆盖 <code>string</code>、 <code>bool</code> 等基本类型。</p><blockquote><p>这种方法目前仅支持 Android 11 版本及以上。</p></blockquote><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;?</span><span style="color:#85E89D;">xml</span><span style="color:#B392F0;"> version</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1.0&quot;</span><span style="color:#B392F0;"> encoding</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;utf-8&quot;</span><span style="color:#E1E4E8;">?&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">overlay</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xmlns:android</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://schemas.android.com/apk/res/android&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">target</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;string/wizard_script_uri&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;android.resource://com.google.android.setupwizard.dogday.overlay/raw/wizard_script&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">target</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;string/welcome_message&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;DogDay&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">target</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;drawable/welcome_bg&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;@drawable/welcome_bg&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">target</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;style/WelcomeStartButton&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;@style/WelcomeStartButton&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">overlay</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;?</span><span style="color:#22863A;">xml</span><span style="color:#6F42C1;"> version</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1.0&quot;</span><span style="color:#6F42C1;"> encoding</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;utf-8&quot;</span><span style="color:#24292E;">?&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">overlay</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xmlns:android</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://schemas.android.com/apk/res/android&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">item</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">target</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;string/wizard_script_uri&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;android.resource://com.google.android.setupwizard.dogday.overlay/raw/wizard_script&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">item</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">target</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;string/welcome_message&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;DogDay&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">item</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">target</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;drawable/welcome_bg&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;@drawable/welcome_bg&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">item</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">target</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;style/WelcomeStartButton&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;@style/WelcomeStartButton&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">overlay</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>或者你可以在 <code>res</code> 下同名目录创建相同的文件来进行值的覆盖，例如你想修改原来的应用中的 <code>res\\values\\dimens.xml</code> 这个文件中的部分值，你可以在你的 <code>Overlay</code> 应用文件夹下创建同样的 <code>res\\values\\dimens.xml</code> 这个文件，并在其中按照如下规则编写可覆盖对应值:</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;?</span><span style="color:#85E89D;">xml</span><span style="color:#B392F0;"> version</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1.0&quot;</span><span style="color:#B392F0;"> encoding</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;utf-8&quot;</span><span style="color:#E1E4E8;">?&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">resources</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">dimen</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;welcome_start_button_margin_top&quot;</span><span style="color:#E1E4E8;">&gt;48.0dp&lt;/</span><span style="color:#85E89D;">dimen</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">dimen</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;welcome_start_button_padding&quot;</span><span style="color:#E1E4E8;">&gt;16.0dp&lt;/</span><span style="color:#85E89D;">dimen</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">resources</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;?</span><span style="color:#22863A;">xml</span><span style="color:#6F42C1;"> version</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1.0&quot;</span><span style="color:#6F42C1;"> encoding</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;utf-8&quot;</span><span style="color:#24292E;">?&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">resources</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">dimen</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;welcome_start_button_margin_top&quot;</span><span style="color:#24292E;">&gt;48.0dp&lt;/</span><span style="color:#22863A;">dimen</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">dimen</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;welcome_start_button_padding&quot;</span><span style="color:#24292E;">&gt;16.0dp&lt;/</span><span style="color:#22863A;">dimen</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">resources</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>可以看到上面的文件中我们将 <code>welcome_start_button_margin_top</code> 修改为了 <code>48.0dp</code> ，并修改了 <code>welcome_start_button_padding</code> 为 <code>16.0dp</code>。</p><p>如果你想修改对应的 <code>style</code> 和 <code>drawable</code> 的话，大致操作也相似，只需要在本地创建这些文件即可实现对应的内容覆盖，注释文件格式类型要保持一致（例如矢量图仍然需要矢量图进行替换，图片文件仍然用图片文件替换）。</p><h2 id="添加到系统编译过程中" tabindex="-1">添加到系统编译过程中 <a class="header-anchor" href="#添加到系统编译过程中" aria-label="Permalink to &quot;添加到系统编译过程中&quot;">​</a></h2><p><code>Overlay</code> 实际上是作为应用程序安装的，因此按照正常的应用程序添加过程来即可:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># RRO overlays</span></span>
<span class="line"><span style="color:#B392F0;">PRODUCT_PACKAGES</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">DogDaySetupWizardOverlay</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># RRO overlays</span></span>
<span class="line"><span style="color:#6F42C1;">PRODUCT_PACKAGES</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">DogDaySetupWizardOverlay</span></span></code></pre></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ul><li>不能覆盖 <code>layout</code>、<code>AndroidManifest.xml</code>、<code>asset</code> 目录</li><li>建议只覆盖字符资源、覆盖图片要谨慎</li></ul><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="http://broncho.top/2017/01/16/blogs/RuntimeResourceOverlay/" target="_blank" rel="noreferrer">Android 运行时资源覆盖</a></li><li><a href="https://source.android.google.cn/docs/core/architecture/rros?hl=zh-cn" target="_blank" rel="noreferrer">运行时资源叠加层 (RRO) - 官方文档</a></li></ul>`,29),e=[p];function t(r,c,E,i,y,d){return a(),n("div",null,e)}const F=s(l,[["render",t]]);export{g as __pageData,F as default};