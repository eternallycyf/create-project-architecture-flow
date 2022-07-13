## commit 规则

https://www.jianshu.com/p/c7e40dab5b05

## 配置

```js
yarn add commitizen --dev
npx commitizen init cz-conventional-changelog --yarn --dev
# scripts
"scripts": {
  "commit": "git-cz"
}
#
yarn commit
```

## 强制采用

```js
yarn add @commitlint/config-conventional @commitlint/cli --dev
# commitlint.config.js
// feat：新增功能
// fix：bug 修复
// docs：文档更新
// style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
// refactor：重构代码(既没有新增功能，也没有修复 bug)
// perf：性能, 体验优化
// test：新增测试用例或是更新现有测试
// build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
// ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
// chore：不属于以上类型的其他类，比如构建流程, 依赖管理
// revert：回滚某个更早之前的提交

module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'style',
        'docs',
        'test',
        'refactor',
        'build',
        'ci',
        'chore',
        'revert',
        'wip',
        'workflow',
        'types',
        'release',
      ],
    ],
  },
};

```

## husky

```js
yarn add husky --dev
# package.json
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
```

## demo

```js
// feat：新增功能
// fix：bug 修复
// docs：文档更新
// style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
// refactor：重构代码(既没有新增功能，也没有修复 bug)
// perf：性能, 体验优化
// test：新增测试用例或是更新现有测试
// build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
// ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
// chore：不属于以上类型的其他类，比如构建流程, 依赖管理
// revert：回滚某个更早之前的提交

module.exports = {
  ignores: [(commit) => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "subject-case": [0],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "perf",
        "style",
        "docs",
        "test",
        "refactor",
        "build",
        "ci",
        "chore",
        "revert",
        "wip",
        "workflow",
        "types",
        "release"
      ]
    ]
  }
};
```