# 在 Git 中缓存 GitHub 凭据

本文假定所用 Linux 环境为 Arch Linux ， 一切操作基于此来进行，其他系统大致步骤相同，对应软件包请自行寻找安装方法。

如果你使用 `HTTPS` 克隆 GitHub 存储库，我们建议你使用 `GitHub CLI` 或 `Git Credential Manager (GCM)` 来记住你的凭据。

这里只介绍 `GitHub CLI` 的使用，如果您想使用不同方法请参考[官方文档](https://docs.github.com/zh/get-started/getting-started-with-git/caching-your-github-credentials-in-git)

## 安装 GitHub CLI

对于 Arch 系统来说，仅需要在命令行运行如下命令：

```bash
yay -S github-cli
```

## 配置 GitHub CLI

安装完毕后，请继续在命令行中输入：

```bash
gh auth login
```

随后按照提示操作，当系统提示输入 Git 操作的首选协议时，请选择 `HTTPS`

当系统询问是否要使用 GitHub 凭据向 Git 进行身份验证时，请输入 `Y`

有关使用 GitHub CLI 进行身份验证的详细信息，请参阅 [gh auth login](https://cli.github.com/manual/gh_auth_login)

## SSH 免密登陆

如果您更喜欢 SSH 这种方式，您也一样可以通过上面的方法，当系统提示输入 Git 操作的首选协议时选择 `SSH` 即可。

由于本人不太喜欢 `SSH` 方式，因此，如果您希望自行配置免密登陆，那么您可以查看[官方文档](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)来获得更多帮助。
