# 设置子系统默认登陆用户

各种子系统通常默认使用 `root` 用户登录。
当我们在子系统中创建了一个普通用户后，可以按照如下步骤来配置子系统默认的登录用户：

首先我们需要知道自己的子系统名称，我们可以用如下命令查看当前系统中的所有子系统及其名称：

```ps1
wslconfig /list
```

找到我们需要设置默认用户的子系统，在命令行中执行如下命令即可完成默认登陆用户的变更：

```ps1
# DistributionName：对应上面一步中我们查看到的系统对应的名称
<DistributionName> config --default-user <username>
# 以 ubuntu 为例，如果要设置 easternday 为默认登陆用户，则输入如下指令：
# ubuntu config --default-user easternday
```
