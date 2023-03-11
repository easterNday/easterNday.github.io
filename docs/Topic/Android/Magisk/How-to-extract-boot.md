# 利用Payload提取boot.img

## 准备工作

### 下载手机系统包

首先你需要拥有你自己手机机型对应的刷机包，小米Rom下载可参考[小米ROM相关](/Topic/Android/Xiaomi/index.md)，其余机型请暂时麻烦自己查找。

### payload-dumper-go 下载

[payload-dumper-go](https://github.com/ssut/payload-dumper-go) 是一款安卓OTA负载一键提取软件。

对应 `macOS` , `Windows` 以及 `Linux` 预构建文件下载链接：[Github](https://github.com/ssut/payload-dumper-go/releases)

## 提取`boot.img`

### 解压系统包

将之前下载的刷机包解压缩并找到payload.bin文件，将其复制到 `payload-dumper-go` 的文件夹下。

### 运行程序

对于 `Windows` 用户，将 `payload.bin` 拖到目录下的 `payload-dumper-go.exe` 即可自动开始运行。

## 补充资料

### 注意

+ 出于性能原因，强烈建议使用SSD，HDD可能是一个瓶颈。
+ 不支持增量OTA（增量）负载。
+ [对应Android源代码部分](https://android.googlesource.com/platform/system/update_engine/+/master/update_metadata.proto)

### 参考

[payload-dumper-go](https://github.com/ssut/payload-dumper-go)

[payload-dumper-go提取boot（payload提取boot.img）](https://magiskcn.com/payload-dumper-go-boot)
