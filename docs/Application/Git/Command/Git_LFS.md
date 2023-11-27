# Git 上传大文件夹

## 什么是 Git LFS

Git LFS（Large File Storage） 是 Github 开发的一个 Git 的扩展，用于实现 Git 对大文件的支持。

简而言之，如果您遇到了无法将大文件（一般是指超过 100M 的文件）上传至 Github，那么您可以考虑此种方式来上传。

## 安装 Git LFS

对于 Arch 系统来说，仅需要在命令行运行如下命令：

```bash
yay -S git-lfs
```

其他系统请自行查找安装办法。

## 初始化 Git LFS 库

如果您在某个项目中需要启用 Git LFS，那么您需要先使本仓库支持 Git LFS，启用支持请在命令行输入如下指令：

```bash
git lfs install
```

## 增加需要追踪的大型文件

开启支持后，我们可以使用 `git lfs track <File>` 来记录追踪您需要添加的大型文件。

::: code-group

```zsh [单个文件]
# git lfs track "path/to/file"
# 示例：
git lfs track "./README.md"
# 如果您想要不再追踪，请使用：
# git lfs untrack "path/to/file"
# 示例：
git lfs untrack "./README.md"
```

```zsh [指定类型]
# git lfs track "path/to/dir/*.type"
# 示例：
git lfs track "*.md"
git lfs track ".config/*.md"
# 如果您想要不再追踪，请使用：
# git lfs untrack "path/to/dir/*.type"
# 示例：
git lfs untrack "*.md"
git lfs untrack ".config/*.md"
```

```zsh [整个目录]
# git lfs track "path/to/dir/*"
# 示例：
git lfs track ".config/*"
# 如果您想要不再追踪，请使用：
# git lfs untrack "path/to/dir/*"
# 示例：
git lfs untrack ".config/*"
```

:::

## 查看已追踪文件

添加/追踪了需要上传的大型文件后，我们可以将目前所有被 Git LFS 管理的具体文件枚举出来：

```zsh
git lfs ls-files
```

## 克隆支持 Git LFS 文件的仓库

目前最新版本的 `git clone <url>` 已经能够提供与 `git lfs clone <url>` 一致的性能，因此 `git lfs clone <url>` 已不再推荐使用。

## 存储库清理

如果您的存储库已经用了很长一段时间，觉得存储库十分的臃肿，您可以尝试运行如下命令：

```zsh
git gc --aggressive
```

该命令会对本地存储库进行更彻底清理和优化，因此会耗费较长时间。
