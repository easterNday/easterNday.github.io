#  华硕电脑风扇控制

> 这一部分主要讲一下华硕的 `TUF` 型号的机型怎么配置控制风扇转速，更多详细内容可以参考 [官方文档](https://wiki.archlinux.org/title/fan_speed_control#Fan_control_modes_on_certain_TUF_series_laptops)

对于华硕的电脑来说，风扇控制其实已经集成在内核中了，一般被称作 `asus-nb-wmi` ，一般来说我们需要做的就是进行一个配置文件的修改。

## 󰈐 风扇转速模式

对于一部份华硕笔记本来说，风扇转速可以通过 `Fn` + `F5` 来进行调节，但是我们也可以通过命令行直接进行设置，基本的设置命令如下：

```sh
#设置风扇转速模式为自动调节
echo 2 > /sys/devices/platform/asus-nb-wmi/hwmon/hwmon[[:print:]]*/pwm1_enable
# 设置风扇转速模式为手动调节
echo 1 > /sys/devices/platform/asus-nb-wmi/hwmon/hwmon[[:print:]]*/pwm1_enable
# 设置风扇始终保持满速状态
echo 0 > /sys/devices/platform/asus-nb-wmi/hwmon/hwmon[[:print:]]*/pwm1_enable
```

值得一提的是，设置为满速模式可能不可用，实际调节过程请自己测试。

## 󱤎 风扇转速调节

一般来说这部分只有在将风扇模式设置为`手动调节`的时候才会生效，相应命令如下：


```sh
# 调整风扇转速为最大
echo 255 > /sys/devices/platform/asus-nb-wmi/hwmon/hwmon[[:print:]]*/pwm1
# 关闭风扇
echo 0 > /sys/devices/platform/asus-nb-wmi/hwmon/hwmon[[:print:]]*/pwm1
```

简单来说，您的风扇转速可以设置为 0-255 中的任意一个值，数值越大风扇转速越快。

上面就是基础的修改部分，我平时也仅仅只会用到这些部分，如果您有其他的需求，建议依旧是参考 [官方文档](https://wiki.archlinux.org/title/fan_speed_control)。