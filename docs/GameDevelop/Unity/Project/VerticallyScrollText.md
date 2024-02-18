# ScrollRect 实现垂直滚动文字

在特定场景中，我们可能需要实现文字或图片的垂直滚动效果，这时 `Unity` 的 `UGUI` 组件 `ScrollRect` 就派上了用场。以下是利用 `ScrollRect` 实现垂直滚动文字的具体步骤：

## 1. 控件布局

按照以下结构组织控件：`Panel`（添加 `ScrollRect` 组件）与 `ScrollBar` 同级，而 `Text` 作为 `Panel` 的子对象。

**注意：不从 `GameObject` 菜单创建 `ScrollView`，而是创建一个空的 `Panel` 并添加 `ScrollRect` 组件。**

## 2. 配置 `Panel` 组件

为 `Panel` 添加两个组件：

- **ScrollRect**：负责实现滚动效果。将 `Content` 字段设置为 `Text`，表示 `Text` 是滚动内容显示区，并取消勾选 `Horizaontal`，仅保留 `Vertical` 以实现垂直滚动。
- **Mask**：提供遮罩功能，确保用户只能看到视口内的内容。

## 3. 配置 `Text` 组件

为 `Text` 添加 **Content Size Filter** 组件，由于是垂直滚动，只需设置 `Vertical Fit` 为 `perfect size`。

## 4. 调整 `Text` 组件的 `RectTransform`

将 `Text` 的 `RectTransform` 里的 `Pivot` 设置为 `(0.5f, 1)`，确保文字长度变化时，控件始终保持顶端对齐。

## 5. 设置滚动条

对于 `ScrollBar` 组件，`HandleRect` 和 `ColorTint` 中的 `TargetGraphic` 均应指向 `ScrollBar` 下的 `Handle` 对象。设置方向为 `BottomToTop`，确保滚动方向正确，其他选项根据实际需求调整。

## 6. 关联 `ScrollBar` 与 `ScrollRect`

返回到 `Panel` 对象上的 `ScrollRect` 组件，将 `Vertical ScrollBar` 字段设置为你所创建的 `ScrollBar` 组件。

经过以上步骤配置后，就可以通过 `ScrollRect` 实现 `Unity` 中的垂直滚动文字效果了。同时，虽然滚动条在手机端更多用于展示，但通过上述设置也可实现通过滚动条控制文字上下滑动的功能。
