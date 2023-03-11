# Linux 子系统的迁移

## 简介

在使用 `Windows Subsystem for Linux`  (以下简称为 `WSL`) 的时候，其一般情况下是安装在系统盘 `C` 盘，但是就像安装一些应用程序一样，很多时候我们并不想将其安装在这里，所以很多时候我们需要对 `WSL` 进行迁移。

## 迁移前准备

在迁移前我们首先要需要将当前正在运行的 `WSL` 停止运行，对应的命令行如下：

``` ps
wsl --shutdown
```

## 导出对应的分发版本

在停止了对应的分发版本后，我们还需要进行**对应分发版本**的导出，对应命令行如下：

``` ps
wsl --export <DistributionName> </path/to/where/u/want/to/save>
# For example:
# wsl --export Ubuntu D:/export.tar
```

查看系统内已有所有的分发版本的命令行如下：

``` ps
wsl --list
```

## 注销原有分发版本记录

导出完毕之后，我们要做的就是将原有的分发版本的记录进行注销，对应命令行命令如下：

``` ps
wsl --unregister <DistributionName>
```

## 重新导入分发版本

注销完毕之后，我们选定一个新的位置，并将其重新导入，对于命令行如下：

``` ps
wsl --import <DistributionName> <path/to/new/dirctory> </path/to/where/u/saved> --version 2
# For example:
# wsl --import Ubuntu D:\export\ D:\export.tar --version 2
```

## 重新确定登录用户

在重新导入对应分发版本之后，我们再次登录对应版本之后可能遇到对应子系统的默认登陆用户并非自己之前设定的问题，此时我们需要对对应分发版本重新设置默认登陆用户，请参考 [Linux 子系统
](./Introduction-of-WSL2.md) 一文中的介绍。
