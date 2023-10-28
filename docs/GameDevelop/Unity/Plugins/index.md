# Unity 插件推荐

## [UnitTask](https://github.com/Cysharp)

> 如何通过 [Unity安装](https://medium.com/@neuecc/extends-unitywebrequest-via-async-decorator-pattern-advanced-techniques-of-unitask-ceff9c5ee846) 请参考官方文档。

为 Unity 提供高效的无分配异步/等待集成。

+ 基于结构 UniTask\<T\> 和自定义 AsyncMethodBuilder 实现零分配
+ 使所有 Unity AsyncOperations 和协程可等待
+ 基于 PlayerLoop 的任务（UniTask.Yield, UniTask.Delay,UniTask.DelayFrame等..），可以替换所有协程操作
+ MonoBehaviour 消息事件和 uGUI 事件作为可等待/异步可枚举
+ 完全在 Unity 的 PlayerLoop 上运行，因此不使用线程并在 WebGL、wasm 等上运行。
+ 异步 LINQ，具有 Channel 和 AsyncReactiveProperty
+ TaskTracker窗口防止内存泄漏
+ 与 Task/ValueTask/IValueTaskSource 高度兼容的行为

有关技术细节，请参阅博客文章：[UniTask v2 — Unity 的零分配异步/等待，使用异步 LINQ](https://medium.com/@neuecc/unitask-v2-zero-allocation-async-await-for-unity-with-asynchronous-linq-1aa9c96aa7dd)

有关高级技巧，请参阅博客文章：[通过异步装饰器模式扩展 UnityWebRequest — UniTask 的高级技术](https://medium.com/@neuecc/extends-unitywebrequest-via-async-decorator-pattern-advanced-techniques-of-unitask-ceff9c5ee846)

## [XLua](https://github.com/Tencent/xLua)

> 具体使用请参考 [官方文档](https://github.com/Tencent/xLua/blob/master/Assets/XLua/Doc/XLua%E6%95%99%E7%A8%8B.md)

xLua为Unity、 .Net、 Mono等C#环境增加Lua脚本编程的能力，借助xLua，这些Lua代码可以方便的和C#相互调用
