# Github 分支操作

## 分支更名

在 Git 的默认分支名称从 "master" 更改为 "main" 后，如果你想将本地仓库的分支名也修改为 "main"，可以按照以下步骤操作：

1. 首先，将本地分支切换到 "master" 分支：`git checkout master`
2. 创建一个新的名为 "main" 的分支并切换到该分支：`git branch -m main`
3. 推送该分支到远程仓库：`git push -u origin main`
4. 删除名为 "master" 的远程分支：`git push origin :master`

完成上述操作后，你的本地仓库的默认分支名就变成了 "main"，而旧的 "master" 分支被删除了。在接下来的操作中，请记得使用新的默认分支名 "main"。

## 删除标签和发布

在 `Github Actions` 中，你可以使用以下的脚本来删除所有的 `tag` 和 `release`：

```yaml
- uses: ClementTsang/delete-tag-and-release@v0.3.1
  with:
    delete_release: true # default: false
    tag_name: v0.1.0 # tag name to delete
    repo: <owner>/<repoName> # target repo (optional). defaults to repo running this action
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

这个脚本会删除指定的 `tag` 和它关联的 `release`。如果你想删除所有的 `release`，你可以使用以下的命令：

```bash
gh release list | awk -F '\\t' '{print $3}' | while read -r line; do gh release delete -y "$line"; done
```

这个命令会列出所有的 `release` ，然后删除它们。你也可以在删除 `release` 的同时删除关联的tag，只需要在命令中加上`--cleanup-tag`参数。

```bash
gh release list | awk -F '\\t' '{print $3}' | while read -r line; do gh release delete -y "$line" --cleanup-tag; done
```

请注意，这些操作都是不可逆的，所以在执行前请确保你真的想要删除这些 `tag` 和 `release`。
