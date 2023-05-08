# 利用 Payload-dumper 提取各部分镜像

##  提取前准备

- 含 Payload 的刷机包:小米手机可查阅[小米 ROM 下载](/Topic/Android/Xiaomi#rom-下载)下载，其余机型请自行寻找。

- [payload-dumper-go](https://github.com/ssut/payload-dumper-go): 对应 `macOS` , `Windows` 以及 `Linux` 预构建文件[下载地址](https://github.com/ssut/payload-dumper-go/releases)

## 󰱧 如何提取

1. 解压系统包，并将之前下载的刷机包解压缩并找到 `payload.bin` 文件，将其复制到 `payload-dumper-go` 的文件夹下。

2. 对于 `Windows` 用户，将 `payload.bin` 拖到目录下的 `payload-dumper-go.exe` 即可自动开始运行。其他平台的用户请在 `payload-dumper-go` 文件夹下打开终端，执行下述命令：

```bash
# 注意：
# 请自行更换 payload.bin 为对应的 payload 文件名
./payload-dumper-go payload.bin
```

> 在类 Unix 环境下，如果不能识别 `payload-dumper-go` 为可执行文件，请在命令行执行 `chmod +x ./payload-dumper-go`

##  注意事项

- 不支持增量 OTA（增量）负载，请使用通刷包进行负载解压。
- 出于性能原因，强烈建议使用固态硬盘，机械硬盘可能导致解压速度过慢。

##  参考

- [payload-dumper-go](https://github.com/ssut/payload-dumper-go)

- [payload-dumper-go 提取 boot（payload 提取 boot.img）](https://magiskcn.com/payload-dumper-go-boot)
