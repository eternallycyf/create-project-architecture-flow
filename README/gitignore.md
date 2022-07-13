## .gitignore

- 以 # 开头的是注释
- 以 / 结尾的是目录
- 以 / 开头防止递归
- 以 ! 开头表示取反
- 可以使用 glob 模式进行文件和文件夹的匹配
  - glob 指简化了的正则表达式
    - 星号 \* 匹配零个或多个任意字符
    - [abc] 匹配任何一个列在方括号中的字符
    - 问号 ? 只匹配一个任意字符
    - [0-9] 表示匹配 所有 0 到 9 的数字
    - 两个星号 \*\* 表示匹配任意中间目录
      - 比如 a/\*\*/z 可以匹配 a/z 、 a/b/z 或 a/b/c/z 等

## demo

```bash
# dependencies
/node_modules
/npm-debug.log*
/yarn-error.log
/yarn.lock
/package-lock.json

# production
/dist

# misc
.DS_Store

# umi
/src/.umi
/src/.umi-production
/src/.umi-test
/.env.local
```
