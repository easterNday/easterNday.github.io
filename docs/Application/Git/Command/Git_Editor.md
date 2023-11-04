# 设置 Git 默认编辑器

本部分我们讨论如何配置您的 `Git` 的默认文本编辑器，配置完成后，您将得到以下功能：

- 这样当你需要编辑Git的配置文件或提交信息时，Git会自动打开你选择的文本编辑器

## 使用 `Visual Studio Code` 作为你的编辑器

1. 安装 `VS Code`

2. 打开终端并输入以下命令，将VS Code设置为你的默认文本编辑器：

    ```bash
    git config --global core.editor "code --wait"
    ```

这样，当你需要使用Git编辑一个文件时，`Git` 会自动打开 `VS Code`，并在你保存并关闭文件后继续执行Git的操作。

## 使用 `Sublime Text` 作为你的编辑器

1. 安装 `Sublime Text`
1. 输入以下命令：

    ::: code-group

    ```sh [Linux]
    git config --global core.editor "subl -n -w"
    ```

    ```sh [Windows]
    git config --global core.editor "'C:/Program Files (x86)/sublime text 3/subl.exe' -w"
    ```
    :::

## 使用 `TextMate` 作为编辑器

1. 安装 `TextMate`
1. 安装 `TextMate` 的 `mate` shell 实用程序。
1. 输入以下命令：

   ```shell
   git config --global core.editor "mate -w"
   ```


## 使用 `Notepad++` 作为编辑器

1. 安装 `Notepad++`
1. 输入以下命令：

   ```shell
   git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
   ```
## 参考

- [Associating text editors with Git - GitHub Docs](https://docs.github.com/en/get-started/getting-started-with-git/associating-text-editors-with-git)
