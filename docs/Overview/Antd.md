# 如何为 Vitepress 引入 Ant Design Vue


<script setup>
  import { theme } from 'ant-design-vue';import { useData } from 'vitepress'

const { isDark } = useData()
</script>
<br/>
<a-config-provider
    :theme="{
      algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    }"
>
<a-card title="内容摘要" :bordered="true" :hoverable="true">
    <p>本节主要介绍了如何安装 Ant Design Vue 并且进行暗黑模式适配。</p>
    <p>例如这个卡片就是使用 Ant Card 实现的内容。</p>
</a-card>
</a-config-provider>

## 安装 Antd

在项目下执行如下指令安装 `Antd`:

```sh
pnpm i --save ant-design-vue@next
```

> 此处[官方文档](https://next.antdv.com/docs/vue/getting-started-cn)有误，应该为 `@next` 而不是 `@4.x`

## Vitepress 全局引入 Antd

这一部分需要您的 `Vitepress` 支持自定义主题，在文档目录下的 `.vitepress\theme\index.ts` 文件进行编辑:


```js{7-9,19}
// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style/vars.css'
import './style/font.css'

// 引入 Ant Design Vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(Antd);
  }
}
```

突出显示部分为需要修改的内容，修改完成后就已经完成组件的全局引入了。

## 适配暗黑模式

如果您的 `Vitepress` 支持切换主题的功能，那么您在使用暗黑模式的时候会出现 `Antd` 不会切换到暗黑模式的情况，会造成显示和阅读上的不便。

因此我们需要利用 `Antd` 提供的 `ConfigProvider` 来进行主题的配置。

下面是一个示例模板:

```html
<script setup>
import { theme } from 'ant-design-vue';
import { useData } from 'vitepress'
const { isDark } = useData()
</script>
<br/>
<a-config-provider
    :theme="{
      algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    }"
>
<a-card title="内容摘要" :bordered="true" :hoverable="true">
    <p>本节主要介绍了如何安装 Ant Design Vue 并且进行暗黑模式适配。</p>
    <p>例如这个卡片就是使用 Ant Card 实现的内容。</p>
</a-card>
</a-config-provider>
```

在这段代码里，我们先引入了 `Antd` 的 `theme` 组件，然后利用 `Vitepress` 内置的 `userData` 获取暗黑模式的配置。

而后，在需要使用 `Antd` 组件的地方，最外层用 `<a-config-provider>` 进行包裹，并按照我上面的代码进行配置，最后就可以正常的切换主题了。
