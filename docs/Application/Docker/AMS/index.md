# Ant Media Server

Ant Media Server 是一种流媒体引擎软件，它通过使用 WebRTC 技术提供自适应的超低延迟流媒体，延迟约为 0.5 秒或通过使用 HLS 或 CMAF 实现低延迟。Ant Media Server 在水平和垂直方向上都具有高度可扩展性，可以在本地或您选择的任何云提供商上运行。

## 社区版

- RTMP 摄取
- RTMP、RTSP、MP4 和 HLS 支持
- WebRTC 到 RTMP 适配器
- 网络摄像机支持
- 360 度直播和 VoD 流
- 直观的网络管理仪表板
- 录制直播流（MP4 和 HLS）
- iOS 和安卓 RTMP SDK
- 开发工具包

## 创建 Docker 容器

使用以下命令创建 Ant Media Server 的 Docker 容器：

```
docker run  -p 5080:5080 --name ams -d --net=host nibrev/ant-media-server:latest
```

其中，`-p` 参数用于指定容器端口与主机端口的映射，`--name` 参数用于指定容器的名称。

部署完成后，直接访问 `http://<Your IP>:5080` 就可以了

## 设置无人值守直播

### 主页展示

可以通过 Web 界面对 Ant Media Server 进行配置。在浏览器中输入 `http://localhost:5080` 进入 Ant Media Server 的控制台（在此之前，你还需要完成`账号注册`）。
打开网站后，第一件事是注册。注册完毕后，我们进入到首页，首页中会显示你当然运行系统的基础信息：

![Overview](/assets/AMS/Overview.png)

在控制台中，可以进行实时流媒体传输和直播的配置，包括摄像头和麦克风的设置、直播流的创建和管理等。

### 视频上传

在主页里我们选择 `APPLICATIONS > LiveApp > VoD` 进入视频上传界面：

![VoD](/assets/AMS/VoD.png)

点击 `Upload Vedio` 来上传你的视频。

### 直播设置

随后我们依旧在主页中选择 `APPLICATIONS > LiveApp > LiveStream` 进入到直播推流设置：

![LiveStream](/assets/AMS/LiveStream.png)

随后点击按钮 `New Live Stream` ，选择其中的 `PlayList` ，这会弹出一个弹窗，我们在里面填写相关信息，并点击 `Add Playlist` 来添加视频。

![AddPlayList](/assets/AMS/AddPlayList.png)

> 添加视频的时候是需要添加视频链接的，视频链接可以通过 `VoD` 界面中分享后获取的 `<iframe>` 标签中的 `src` 字段得到。

做完这些工作后，我们回到 `LiveStream` 界面，点击刚添加的条目最右边的设置按钮，选择 `Edit RTMP Endpoint` 选项添加你的 `rtmp` 地址(一般是`推流地址`+`推流码`拼接而成)。

最后再次点击设置按钮，选择 `Start Broadcast` 即可开始推流。

## 参考

- [ant-media/Ant-Media-Server](https://github.com/ant-media/Ant-Media-Server)
- [无人值守 24 小时直播原来这么简单！附 Docker、群晖 NAS 配置](https://www.bilibili.com/read/cv22171708/)
- [2023啦 最新无人直播小白教程！](https://mdnice.com/writing/9831485960554482a66731dd5e03c6a4)
