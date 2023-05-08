# 约定式提交

本项目提交记录均符合[约定式提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/)，这是一种用于给提交信息增加人机可读含义的规范。

此处将记录本项目如何设置保证提交记录符合约定式提交规范，下面会提供两种本项目都采用了的方法。实际使用中可以**选择其一**即可。

## 󰉢 规范提交格式

提交格式的规范我们采用 [Commitizen](https://github.com/commitizen/cz-cli#optional-install-and-run-commitizen-locally) ，并让其安装在项目根目录下。

首先我们需要安装 `commitizen` 和 `cz-conventional-changelog`：

```sh
pnpm install --save-dev commitizen
pnpm install --save-dev cz-conventional-changelog
```

然后在 `package.json` 中增加对应配置：

```json
"config": {
   "commitizen": {
        "path": "node_modules/cz-conventional-changelog"
    }
}
```

如果不知道添加在哪里，可以参考[本项目配置](https://github.com/easterNday/easterNday.github.io/blob/main/package.json#L24-L28)。

随后，初始化适配器：

```sh
pnpx commitizen init cz-conventional-changelog --save-dev --save-exact
# 如果上面的命令出错，请使用下面这个
# ./node_modules/.bin/commitizen init cz-conventional-changelog --save-dev --save-exact
```

这样，你就可以使用 `pnpm cz` 来直接生成提交记录了。

或者您可以在 `package.json` 中设置一些您喜欢的替换脚本，例如使用 `pnpm commit` 来提交：

```sh
  "scripts": {
    "commit": "cz"
  }
```

具体配置可以参考[本项目配置文件](https://github.com/easterNday/easterNday.github.io/blob/main/package.json#L15)。

##  校验提交格式

上面的是在生成阶段使用一个 `cli` 来协助我们生成，该部分会介绍如何在生成后进行提交格式的校验，用于双重保险。

首先我们需要安装 `@commitlint/config-conventional` 和 `@commitlint/cli`：

```sh
pnpm i -D @commitlint/config-conventional @commitlint/cli
```

随后，在终端中执行如下指令：

```sh
echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
```

这条指令会在项目目录下新建一个 `commitlint.config.js` ，并写入所需要的配置。

> 如果您还有其他的配置存在，请自行修改参数。

为了能够自动校验提交信息，我们还需要 `husky` 作为辅助工具：

```sh
pnpm i -D husky
```

随后执行如下指令：

```sh
# husky 初始化
pnpx husky install
# 生成钩子
pnpx husky add .husky/commit-msg 'pnpx commitlint --edit $1'
```

之后每次使用 `git commit ...` 命令的时候都会自动校验提交信息。

##  参考

- [使用commitlint 规范commit格式](https://juejin.cn/post/6990307028162281508#heading-6)
- [commitizen/cz-cli](https://github.com/commitizen/cz-cli)
- [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)
- [使用commitizen来规范仓库的提交记录](https://neilning-xc.github.io/2021/12/12/ckxj3g81e000p9ynthi2f2uqb/)