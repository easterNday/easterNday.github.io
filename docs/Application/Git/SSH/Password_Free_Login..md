# SSH 免密登录

## 前言

本文介绍如何使用 ssh 免密登录远程服务器。

免密登录的原理是，在本地生成公钥和私钥，并将公钥上传到远程服务器，然后在远程服务器上将私钥写入 `~/.ssh/authorized_keys` 文件中。这样，远程服务器就可以通过公钥来验证本地的私钥，从而实现免密登录。

## 生成公钥和私钥

在本地生成公钥和私钥，可以使用 `ssh-keygen` 命令。

```bash
ssh-keygen -t rsa -C "your_email@example.com"

#-t 指定密钥类型，默认是 rsa。
#-C 指定注释，默认是用户的 email。
```

执行后，会在 `~/.ssh/` 目录下生成 `id_rsa.pub` 和 `id_rsa` 两个文件，
其中，`id_rsa.pub` 是公钥。

## 拷贝公钥到目标服务器

### 1. 复制公钥到服务器

将公钥 `id_rsa.pub` 上传到远程服务器 `~/.ssh/authorized_keys` 文件中。

首先在服务器上执行如下指令:

```bash
ssh localhost
```

然后复制本地的公钥 `id_rsa.pub` 中的内容，粘贴到远程服务器的 `~/.ssh/authorized_keys` 文件中。

### 2. 使用命令拷贝公钥到服务器

当然 `ssh` 本身也支持使用命令的方式进行拷贝，我们只需要简单的在本地执行如下命令：

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub root@192.168.1.100
```

### 使用

使用免密登录，只需要在 ssh 命令中指定远程服务器的 IP 地址即可。

```bash
ssh root@192.168.1.100
```

## Github 等网站免密登录

`Github` 也支持免密登录，只需要在 `Github` 的设置中开启 `SSH` 并添加公钥即可。