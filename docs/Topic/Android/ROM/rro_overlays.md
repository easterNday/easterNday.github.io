# Android 运行时资源覆盖

## 什么是运行时资源覆盖

无需修改原 app 的代码，无需重新编译，就能覆盖 app 内的部分资源，从而实现修改 app 的部分 UI,后面简称 RRO。

## RRO 原理

- 应用通过 getString/getDrawable 去调用某个资源时,会将这个 resources ID 作为参数传给 framework 层。同一名称但不同状态的 resources ID 是一样的,比如不同分辨率但名称相同的图片分别被放置在了 drawable-hdpi/drawable-ldpi/drawable-mdpi 下，但在编译时针对该图片生成的 resources ID 只有一个。

- 为了快速查找到指定的资源，Apk 编译的时候会把 Java 文件里面的 R.String.app_name 替换成 ox7f123456 这种格式的值

- 每个 apk 里面都有一个文件(resources.arsc)记录着指定的 resource_id 对应的资源类型，如果是 string 类型，则记录的这个资源名称对应的所有语言的翻译，如果是 drawable 类型，则记录着哪些分辨率底下有这个资源。

## RRO 实现方法

- 建立一个新的 overlay apk 项目，apk 项目底下有 res 文件夹，Android.mk、AndroidManifest.xml
- 修改 AndroidManifest.xml 配置 apk 的包名、要覆盖的 apk 的包名
- 修改 Android.mk 使得 apk 能集成到 system/vendor/overlay/目录下
- 找到需要覆盖的资源名，在 overlay apk 的 res 指定目录下定义同名的资源

## 实现样例

### ArrowOS 的 SetupWizard 实现欢迎页面替换

#### AndroidManifest.xml 的写法

在 Android 11 或更高版本中，用于定义叠加层资源映射的推荐机制是，在叠加层软件包的 `res/xml` 目录中创建一个文件，枚举应覆盖的目标资源及其替换值，然后将 `<overlay>` 清单标记的 `android:resourcesMap` 属性的值设置为对资源映射文件的引用，此处使用的是 `xml/overlays.xml`。

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
     package="com.google.android.setupwizard.dogday.overlay"
     android:versionCode="1"
     android:versionName="1.0">
     <application android:label="SetupWizardOverlay"
          android:hasCode="false" />
     <overlay
          android:targetPackage="com.google.android.setupwizard"
          android:priority="0"
          android:targetName="SetupWizard"
          android:isStatic="true"
          android:resourcesMap="@xml/overlays" />
</manifest>
```

#### Android.bp 编写

```Makefile
// Copyright (C) 2020 Paranoid Android
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

runtime_resource_overlay {
    name: "DogDaySetupWizardOverlay",
    certificate: "platform",
    sdk_version: "current",
    product_specific: true
}
```

#### 覆盖文件编写

如下所示，是一个简单的 `xml/overlays.xml` 编写，可以覆盖 `string`、 `bool` 等基本类型。

> 这种方法目前仅支持 Android 11 版本及以上。

```xml
<?xml version="1.0" encoding="utf-8"?>
<overlay xmlns:android="http://schemas.android.com/apk/res/android">
    <item target="string/wizard_script_uri" value="android.resource://com.google.android.setupwizard.dogday.overlay/raw/wizard_script"/>
    <item target="string/welcome_message" value="DogDay"/>
    <item target="drawable/welcome_bg" value="@drawable/welcome_bg"/>
    <item target="style/WelcomeStartButton" value="@style/WelcomeStartButton"/>
</overlay>
```

或者你可以在 `res` 下同名目录创建相同的文件来进行值的覆盖，例如你想修改原来的应用中的 `res\values\dimens.xml` 这个文件中的部分值，你可以在你的 `Overlay` 应用文件夹下创建同样的 `res\values\dimens.xml` 这个文件，并在其中按照如下规则编写可覆盖对应值:

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <dimen name="welcome_start_button_margin_top">48.0dp</dimen>
    <dimen name="welcome_start_button_padding">16.0dp</dimen>
</resources>
```

可以看到上面的文件中我们将 `welcome_start_button_margin_top` 修改为了 `48.0dp`
，并修改了 `welcome_start_button_padding` 为 `16.0dp`。

如果你想修改对应的 `style` 和 `drawable` 的话，大致操作也相似，只需要在本地创建这些文件即可实现对应的内容覆盖，注释文件格式类型要保持一致（例如矢量图仍然需要矢量图进行替换，图片文件仍然用图片文件替换）。

## 添加到系统编译过程中

`Overlay` 实际上是作为应用程序安装的，因此按照正常的应用程序添加过程来即可:

```sh
# RRO overlays
PRODUCT_PACKAGES += DogDaySetupWizardOverlay
```

## 注意事项

- 不能覆盖 `layout`、`AndroidManifest.xml`、`asset` 目录
- 建议只覆盖字符资源、覆盖图片要谨慎

## 参考

- [Android 运行时资源覆盖](http://broncho.top/2017/01/16/blogs/RuntimeResourceOverlay/)
- [运行时资源叠加层 (RRO) - 官方文档](https://source.android.google.cn/docs/core/architecture/rros?hl=zh-cn)
