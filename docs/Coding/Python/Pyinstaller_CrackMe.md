# Pyinstaller 逆向工程

## Pyinstaller 简介

Pyinstaller 是一款强大的 Python 应用程序打包工具，它可以将你的 Python 代码转换为独立的可执行文件，无论目标机器是否安装了 Python 环境。尽管 Pyinstaller 提供了一定程度的保护机制，如使用 `--key` 参数加密 `.pyc` 文件，但因其开源本质，逆向过程仍然可行且极具研究价值。

## `exe` 转 `pyc`

### 无-key 参数打包逆向

对于没有使用加密密钥打包的 Pyinstaller 应用，我们通常采用 `pyinstxtractor.py` 工具来解包 `exe` 文件。通过该工具，我们可以获得一个包含了原始 `.pyc` 文件的文件夹。值得注意的是，Pyinstaller 对主函数 `.pyc` 文件的头部进行了特殊处理，但可通过对比提取出的 `struct.pyc` 文件中的标准头部来修复主函数 `.pyc` 文件头，从而实现进一步的逆向分析。

### 有-key 参数打包逆向

当应用使用了 `--key` 参数进行加密时，Pyinstaller 使用 `tinyAES` 库对 `.pyc` 文件进行了块加密，每块大小为 16 字节。为了逆向此类加密文件，首先，我们需要了解加密的具体流程，并依据解包得到的 `archive.pyc` 文件和 `crypto_key.pyc` 中的加密密钥进行还原。

#### 方法一：基于源码编写解密脚本

参照 GitHub 上的项目 [extremecoders-re/pyinstxtractor](https://github.com/extremecoders-re/pyinstxtractor) 提供的方法，我们首先解包得到相关文件并获取密钥。接着，根据加密算法构造解密类 `Cipher`，该类利用 tinyAES 库对加密数据进行解密。以下是简化版的解密脚本示例：

```python
#!/usr/bin/env python3
import tinyaes
import zlib

# 获取加密密钥
key = bytes('MySup3rS3cr3tK3y', 'utf-8')  # 实际中替换为真实密钥

# 读取加密文件并解密
with open('baby_core.pyc.encrypted', 'rb') as inf, open('baby_core.pyc', 'wb') as outf:
    iv = inf.read(CRYPT_BLOCK_SIZE)
    cipher = tinyaes.AES(key, iv)
    plaintext = zlib.decompress(cipher.CTR_xcrypt_buffer(inf.read()))

    # 添加原始 .pyc 文件头
    # 不同版本的 Python 的文件头不同，请注意替换
    outf.write(b'\x55\x0d\x00\x00\0\0\0\0\0\0\0\0\0\0\0\0')
    outf.write(plaintext)
```

除此之外，您还可以使用 [pyinstxtractor/pyinstxtractor-ng](https://github.com/pyinstxtractor/pyinstxtractor-ng) 项目来直接进行反编译（含解密）。

#### 方法二：修改 Pyinstaller 内置工具

另一种方法则是深入 Pyinstaller 自带的 `achieve_viewer.py` 工具源码。此工具能够浏览和解包已打包的文件。我们发现 `get_data` 函数在解包过程中使用了 zlib 压缩，而我们需要在其基础上添加解密步骤。通过将解密逻辑整合到 `get_data` 函数内部，即将 `zlib.decompress()` 替换为先解密后解压的操作，即可成功解密受保护的 `.pyc` 文件。最后，将解密后的文件加上正确的 `.pyc` 头部信息，即可通过反编译工具恢复原始 Python 代码。

## `pyc` 转 `py`

### 安装 uncompyle6

```sh
pip install uncompyle6
```

### 使用 uncompyle6

```sh
uncompyle6 baby_core.pyc > baby_core.py
```

## 总结

总结来说，尽管 Pyinstaller 打包带来了部署上的便捷性，但其加密机制并不能完全阻止逆向工程。通过上述两种逆向方法，无论是无密钥打包还是加密打包的 Pyinstaller 应用程序，都有可能被细致地剖析还原。因此，在实际开发中，对于敏感和关键的代码，建议结合更高级的安全策略，如代码混淆等技术，提高逆向难度，增强安全性。

## 参考

- [[原创]Python 逆向——Pyinstaller 逆向](https://bbs.kanxue.com/thread-271253.htm#msg_header_h2_1)
- [extremecoders-re/pyinstxtractor](https://github.com/extremecoders-re/pyinstxtractor)
- [pyinstxtractor/pyinstxtractor-ng](https://github.com/pyinstxtractor/pyinstxtractor-ng)
