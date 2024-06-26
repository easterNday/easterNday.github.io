# 全球公共 DNS 服务器列表

收集全球公共 DNS 服务器地址。为了方便大家使用，将 IPv4/IPv6/DoT/DoH 集中放在一个页面。

## 相关知识

### 1. DNS 如何选择

在国内一般使用提供的几个国内 DNS 服务器都可以。如果身处海外，建议选择海外的公共 DNS 服务器。另外经过测试，114DNS、百度 DNS、腾讯 DNS 在海外大部分地区都可以使用，而阿里 DNS 在海外很多地区连通性不好。

### 2. 什么是 DoT 和 DoH

DoT 和 DoH 都是加密的 DNS 传输方式，区别在于它们采用不同的协议和端口。两者都是域名解析安全扩展协议的变种，通过加密传输用户和 DNS 服务器之间的 DNS 消息，防止中间人攻击和隐私泄漏。

- **DoT (DNS over TLS)**: 使用 TLS 传输 DNS 协议。
- **DoH (DNS over HTTPS)**: 使用 HTTPS 传输 DNS 协议，相对来说更通用一些。

## 国内知名公共 DNS 服务器

### 腾讯 DNS (DNSPod)

由 DNSPod 提供的公共免费 DNS。

| 类型           | 地址                                                           |
| -------------- | -------------------------------------------------------------- |
| IPv4           | 119.29.29.29                                                   |
| IPv6           | 2402:4e00::                                                    |
| DoH            | [https://doh.pub/dns-query](https://doh.pub/dns-query)         |
| DoH (国密 SM2) | [https://sm2.doh.pub/dns-query](https://sm2.doh.pub/dns-query) |
| DoT            | dot.pub                                                        |

### 阿里 DNS (Alidns)

由阿里巴巴提供的 DNS 服务器。

| 类型 | 地址                                                                 |
| ---- | -------------------------------------------------------------------- |
| IPv4 | 223.5.5.5, 223.6.6.6                                                 |
| IPv6 | 2400:3200::1, 2400:3200:baba::1                                      |
| DoH  | [https://dns.alidns.com/dns-query](https://dns.alidns.com/dns-query) |
| DoT  | dns.alidns.com                                                       |

### 百度 DNS

由百度提供的公共 DNS。

| 类型 | 地址            |
| ---- | --------------- |
| IPv4 | 180.76.76.76    |
| IPv6 | 2400:da00::6666 |

### 360 安全 DNS

由 360 提供的 DNS 服务。

| 类型                  | 地址                                     |
| --------------------- | ---------------------------------------- |
| IPv4 (电信/铁通/移动) | 101.226.4.6, 218.30.118.6                |
| IPv4 (联通)           | 123.125.81.6, 140.207.198.6              |
| DoH                   | [https://doh.360.cn](https://doh.360.cn) |
| DoT                   | dot.360.cn                               |

### 国内运营商

| 类型            | 地址                                                           |
| --------------- | -------------------------------------------------------------- |
| 安徽电信 IPv4   | 61.132.163.68, 202.102.213.68                                  |
| 北京电信 IPv4   | 219.141.136.10, 219.141.140.10                                 |
| 重庆电信 IPv4   | 61.128.192.68, 61.128.128.68                                   |
| 福建电信 IPv4   | 218.85.152.99, 218.85.157.99                                   |
| 甘肃电信 IPv4   | 202.100.64.68, 61.178.0.93                                     |
| 广东电信 IPv4   | 202.96.128.86, 202.96.128.166, 202.96.134.133, 202.96.128.68   |
| 广西电信 IPv4   | 202.103.225.68, 202.103.224.68                                 |
| 贵州电信 IPv4   | 202.98.192.67, 202.98.198.167                                  |
| 河南电信 IPv4   | 222.88.88.88, 222.85.85.85                                     |
| 黑龙江电信 IPv4 | 219.147.198.230, 219.147.198.242                               |
| 湖北电信 IPv4   | 202.103.24.68, 202.103.0.68                                    |
| 湖南电信 IPv4   | 222.246.129.80, 59.51.78.211                                   |
| 江苏电信 IPv4   | 218.2.2.2, 218.4.4.4, 61.147.37.1, 218.2.135.1                 |
| 江西电信 IPv4   | 202.101.224.69, 202.101.226.68                                 |
| 内蒙古电信 IPv4 | 219.148.162.31, 222.74.39.50                                   |
| 山东电信 IPv4   | 219.146.1.66, 219.147.1.66                                     |
| 陕西电信 IPv4   | 218.30.19.40, 61.134.1.4                                       |
| 上海电信 IPv4   | 202.96.209.133, 116.228.111.118, 202.96.209.5, 180.168.255.118 |
| 四川电信 IPv4   | 61.139.2.69, 218.6.200.139                                     |
| 天津电信 IPv4   | 219.150.32.132, 219.146.0.132                                  |
| 云南电信 IPv4   | 222.172.200.68, 61.166.150.123                                 |
| 浙江电信 IPv4   | 202.101.172.35, 61.153.177.196, 61.153.81.75, 60.191.244.5     |
| 北京联通 IPv4   | 123.123.123.123, 123.123.123.124, 202.106.0.20, 202.106.195.68 |
| 重庆联通 IPv4   | 221.5.203.98, 221.7.92.98                                      |
| 广东联通 IPv4   | 210.21.196.6, 221.5.88.88                                      |
| 河北联通 IPv4   | 202.99.160.68, 202.99.166.4                                    |
| 河南联通 IPv4   | 202.102.224.68, 202.102.227.68                                 |
| 黑龙江联通 IPv4 | 202.97.224.69, 202.97.224.68                                   |
| 吉林联通 IPv4   | 202.98.0.68, 202.98.5.68                                       |
| 江苏联通 IPv4   | 221.6.4.66, 221.6.4.67                                         |
| 内蒙古联通 IPv4 | 202.99.224.68, 202.99.224.8                                    |
| 山东联通 IPv4   | 202.102.128.68, 202.102.152.3, 202.102.134.68, 202.102.154.3   |
| 山西联通 IPv4   | 202.99.192.66, 202.99.192.68                                   |
| 陕西联通 IPv4   | 221.11.1.67, 221.11.1.68                                       |
| 上海联通 IPv4   | 210.22.70.3, 210.22.84.3                                       |
| 四川联通 IPv4   | 119.6.6.6, 124.161.87.155                                      |
| 天津联通 IPv4   | 202.99.104.68, 202.99.96.68                                    |
| 浙江联通 IPv4   | 221.12.1.227, 221.12.33.227                                    |
| 辽宁联通 IPv4   | 202.96.69.38, 202.96.64.68                                     |
| 江苏移动 IPv4   | 221.131.143.69, 112.4.0.55                                     |
| 安徽移动 IPv4   | 211.138.180.2, 211.138.180.3                                   |
| 山东移动 IPv4   | 218.201.96.130, 211.137.191.26                                 |
| IPv6 (电信)     | 240e:4c:4008::1, 240e:4c:4808::1                               |
| IPv6 (联通)     | 2408:8899::8, 2408:8888::8                                     |
| IPv6 (移动)     | 2409:8088::a, 2409:8088::b                                     |

### 114DNS

| 类型 | 地址                             |
| ---- | -------------------------------- |
| IPv4 | 114.114.114.114, 114.114.115.115 |

### CNNIC DNS

| 类型 | 地址               |
| ---- | ------------------ |
| IPv4 | 1.2.4.8, 210.2.4.8 |
| IPv6 | 2001:dc7:1000::1   |

### Yeti DNS

Yeti IPv6 Project 是由 WIDE、TISF 和 BII 发起的一个只针对 IPv6 的互联网公益 DNS 项目。

| 类型                   | 地址                                   |
| ---------------------- | -------------------------------------- |
| IPv6(北京互联网研究所) | 240c:f:1:22::6, 240C::6666, 240C::6644 |
| 南京                   | 240e:eb:8001:e01::53                   |
| 成都                   | 240e:d9:c200:14c:7472::19e0            |
| 广州                   | 2408:8756:f5f:4::6                     |

### OneDNS

由北京微步在线科技有限公司提供的 DNS 服务。

| 类型 | 地址                       |
| ---- | -------------------------- |
| IPv4 | 117.50.11.11, 117.50.22.22 |

### Hi!XNS DNS

由嘉兴艾泰德信息技术有限公司提供的 DNS 服务。

| 类型 | 地址          |
| ---- | ------------- |
| IPv4 | 40.73.101.101 |

### TWNIC DNS Quad 101

| 类型 | 地址                             |
| ---- | -------------------------------- |
| IPv4 | 101.101.101.101, 101.102.103.104 |
| IPv6 | 2001:de4::101, 2001:de4::102     |

### 国内教育网 DNS 服务器

大学的 DNS

| 类型              | 地址                                                         |
| ----------------- | ------------------------------------------------------------ |
| 北京邮电大学 IPv6 | 2001:da8:202:10::36, 2001:da8:202:10::37                     |
| 上海交通大学 IPv6 | 2001:da8:8000:1:202:120:2:100, 2001:da8:8000:1:202:120:2:101 |
| 北京科技大学      | 2001:da8:208:10::6                                           |
| 中国科技网        | 2001:cc0:2fff:2::6                                           |

### Yeti DNS Project 注册的 IPv6 DNS 服务器

| 类型               | 地址                               |
| ------------------ | ---------------------------------- |
| 中科院网络信息中心 | 2001:cc0:2fff:1::6666              |
| 北京交通大学       | 2001:da8:205:2060::188             |
| 清华大学           | 2001:da8:ff:305:20c:29ff:fe1f:a92a |

### 清华大学 TUNA 协会 DNS 服务器

据说已经停止对校外用户解析，未验证。

| 类型 | 地址          |
| ---- | ------------- |
| IPv4 | 101.6.6.6     |
| IPv6 | 2001:da8::666 |

## 海外知名公共 DNS 服务器

### Google Public DNS

由 Google 提供的公共免费 DNS。

| 类型       | 地址                                                                     |
| ---------- | ------------------------------------------------------------------------ |
| IPv4       | 8.8.8.8, 8.8.4.4                                                         |
| IPv6       | 2001:4860:4860::8888, 2001:4860:4860::8844                               |
| DoH        | [https://dns.google/dns-query](https://dns.google/dns-query)             |
| DoH (IPv6) | [https://dns64.dns.google/dns-query](https://dns64.dns.google/dns-query) |
| DoT        | dns.google                                                               |

### Cloudflare DNS

由 Cloudflare 与 APNIC 联合推出的 DNS 服务。

| 类型       | 地址                                                                                                                                                                                         |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IPv4       | 1.1.1.1, 1.0.0.1                                                                                                                                                                             |
| IPv6       | 2606:4700:4700::1111, 2606:4700:4700::1001                                                                                                                                                   |
| DoH        | [https://cloudflare-dns.com/dns-query](https://cloudflare-dns.com/dns-query), [https://1.1.1.1/dns-query](https://1.1.1.1/dns-query), [https://1.0.0.1/dns-query](https://1.0.0.1/dns-query) |
| DoH (IPv6) | [https://dns64.dns.google/dns-query](https://dns64.dns.google/dns-query)                                                                                                                     |
| DoT        | 1dot1dot1dot1.cloudflare-dns.com, one.one.one.one                                                                                                                                            |

### Quad9 DNS

由 IBM 发起的 Quad9 提供的公共免费 DNS 服务。

| 类型 | 地址                                                               |
| ---- | ------------------------------------------------------------------ |
| IPv4 | 9.9.9.9, 149.112.112.112                                           |
| IPv6 | 2620:fe::fe, 2620:fe::9                                            |
| DoH  | [https://dns.quad9.net/dns-query](https://dns.quad9.net/dns-query) |
| DoT  | dns.quad9.net                                                      |

### DNS.SB

德国的公共 DNS 服务商，提供 IPv4/IPv6/DoT/DoH 服务。

| 类型 | 地址                                                                                                               |
| ---- | ------------------------------------------------------------------------------------------------------------------ |
| IPv4 | 45.11.45.11                                                                                                        |
| IPv6 | 2a09::, 2a11::                                                                                                     |
| DoH  | [https://doh.dns.sb/dns-query](https://doh.dns.sb/dns-query), [https://doh.sb/dns-query](https://doh.sb/dns-query) |
| DoT  | dot.sb                                                                                                             |

### OpenDNS

由 Cisco (思科) 提供的公共 DNS 服务。

| 类型 | 地址                                                                   |
| ---- | ---------------------------------------------------------------------- |
| IPv4 | 208.67.222.222, 208.67.220.220, 208.67.222.220, 208.67.220.222         |
| IPv6 | 2620:119:35::35, 2620:119:53::53                                       |
| DoH  | [https://doh.opendns.com/dns-query](https://doh.opendns.com/dns-query) |

### OpenDNS FamilyShield

OpenDNS 家庭盾版 DNS，具有安全+防成人内容功能。

| 类型 | 地址                                                                                             |
| ---- | ------------------------------------------------------------------------------------------------ |
| IPv4 | 208.67.222.123, 208.67.220.123                                                                   |
| IPv6 | 2620:119:35::123, 2620:119:53::123                                                               |
| DoH  | [https://doh.familyshield.opendns.com/dns-query](https://doh.familyshield.opendns.com/dns-query) |

### Yandex DNS

由俄国最大的搜索引擎 Yandex 提供的 DNS 服务。

基础版（快速可靠）

| 类型          | 地址                                       |
| ------------- | ------------------------------------------ |
| 基础版 (IPv4) | 77.88.8.8, 77.88.8.1                       |
| 基础版 (IPv6) | 2a02:6b8::feed:0ff, 2a02:6b8:0:1::feed:0ff |
| 安全版 (IPv4) | 77.88.8.88, 77.88.8.2                      |
| 安全版 (IPv6) | 2a02:6b8::feed:bad, 2a02:6b8:0:1::feed:bad |
| 家庭版 (IPv4) | 77.88.8.7, 77.88.8.3                       |
| 家庭版 (IPv6) | 2a02:6b8::feed:a11, 2a02:6b8:0:1::feed:a11 |

### COMODO SecureDNS

由美国知名 IT 安全服务商 COMODO 提供安全 DNS.

| 类型 | 地址                    |
| ---- | ----------------------- |
| IPv4 | 8.26.56.26, 8.20.247.20 |

### Neustar UltraDNS

由美国 Neustar 提供的公共免费 DNS 服务。

基础版（快速可靠）

| 类型          | 地址                             |
| ------------- | -------------------------------- |
| 基础版 (IPv4) | 64.6.64.6, 64.6.65.6             |
| 基础版 (IPv6) | 2620:74:1b::1:1, 2620:74:1c::2:2 |
| 安全版 (IPv4) | 156.154.70.2, 156.154.71.2       |
| 安全版 (IPv6) | 2610:a1:1018::2, 2610:a1:1019::2 |
| 家庭版 (IPv4) | 156.154.70.3, 156.154.71.3       |
| 家庭版 (IPv6) | 2610:a1:1018::3, 2610:a1:1019::3 |

### Level 3 Parent DNS

由美国 Level 3 Parent 公司提供的 DNS 服务器。

| 类型 | 地址                                                 |
| ---- | ---------------------------------------------------- |
| IPv4 | 4.2.2.1, 4.2.2.2, 4.2.2.3, 4.2.2.4, 4.2.2.5, 4.2.2.6 |

## 参考

- [DNS服务器列表](https://jike.xyz/tools/dns.html)