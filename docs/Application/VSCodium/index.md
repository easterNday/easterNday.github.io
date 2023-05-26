# VSCodium 安装配置手册

## Extensions + Marketplace

VSCodium 是一个基于 VSCode 的编辑器，通过安装 VS Code 扩展可以获得额外的功能。但是，由于微软禁止其他产品使用 Microsoft Marketplace（市场），也禁止从市场中重新分发“.vsix”文件，因此，在非微软产品中使用 VS Code 扩展需要以不同的方式安装。

默认情况下，`product.json`文件设置为使用[open-vsx.org](https://open-vsx.org/)作为扩展程序库，该库具有适配器，可以使用 VS Code 使用的 Marketplace API。由于这是一个相对较新的项目，您可能会错过一些您从 VS Code Marketplace 中了解的扩展程序。您有以下选项来获取这些缺失的扩展：

- 请求扩展程序维护者在[open-vsx.org](https://open-vsx.org/)上发布扩展程序，以补充 VS Code Marketplace。发布过程在[Open VSX Wiki](https://github.com/eclipse/openvsx/wiki/Publishing-Extensions)中得到说明。
- 在[此存储库](https://github.com/open-vsx/publish-extensions)上创建拉取请求，让[@open-vsx](https://github.com/open-vsx)服务帐户为您发布扩展程序。
- 下载并[安装 vsix 文件](https://code.visualstudio.com/docs/editor/extension-gallery#_install-from-a-vsix)，例如从源代码库的发布页面。

### 如何使用 Open VSX Registry

如上所述，[Open VSX Registry](https://open-vsx.org/)是 VSCodium 中预设的扩展程序库。因此，使用 VSCodium 中的扩展视图将默认使用它。有关 Open VSX 背后的动机，请参见[此文章](https://www.gitpod.io/blog/open-vsx/)。

### 如何使用不同的扩展程序库

您可以通过以下解决方案配置终端点，从而切换预设的 Open VSX Registry。这些示例使用 Microsoft 的 VS Code Marketplace 的 URL，请参见下文，以获取有关此 URL 的更多信息。

使用以下环境变量：

- `VSCODE_GALLERY_SERVICE_URL='https://marketplace.visualstudio.com/_apis/public/gallery'`
- `VSCODE_GALLERY_ITEM_URL='https://marketplace.visualstudio.com/items'`
- `VSCODE_GALLERY_CACHE_URL='https://vscode.blob.core.windows.net/gallery/index'`
- `VSCODE_GALLERY_CONTROL_URL=''`

或通过创建以下位置的自定义`product.json`文件（如果您使用 VSCodium - Insiders，则将`VSCodium`替换为`VSCodium - Insiders`）：

- Windows：`%APPDATA%\VSCodium`或`%USERPROFILE%\AppData\Roaming\VSCodium`
- macOS：`~/Library/Application Support/VSCodium`
- Linux：`$XDG_CONFIG_HOME/VSCodium`或`~/.config/VSCodium`

并将其内容设置为：

- 注意：对于其他扩展程序库，请将`cacheUrl`设置为空字符串

```json
{
  "extensionsGallery": {
    "serviceUrl": "https://marketplace.visualstudio.com/_apis/public/gallery",
    "itemUrl": "https://marketplace.visualstudio.com/items",
    "cacheUrl": "https://vscode.blob.core.windows.net/gallery/index",
    "controlUrl": ""
  }
}
```
