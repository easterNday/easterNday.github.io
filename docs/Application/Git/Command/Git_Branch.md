# Github 分支操作

## 分支更名

在 Git 的默认分支名称从 "master" 更改为 "main" 后，如果你想将本地仓库的分支名也修改为 "main"，可以按照以下步骤操作：

1. 首先，将本地分支切换到 "master" 分支：`git checkout master`
2. 创建一个新的名为 "main" 的分支并切换到该分支：`git branch -m main`
3. 推送该分支到远程仓库：`git push -u origin main`
4. 删除名为 "master" 的远程分支：`git push origin :master`

完成上述操作后，你的本地仓库的默认分支名就变成了 "main"，而旧的 "master" 分支被删除了。在接下来的操作中，请记得使用新的默认分支名 "main"。