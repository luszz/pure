# pure-eslint-plugin

## 安装

除了本包，你需要同时安装 [ESlint](https://eslint.org/)

```shell
$ npm install pure-eslint-plugin eslint --save-dev
```

## 使用

### 引入插件

```js
// .eslintrc.js
module.exports = {
  plugin: ['pure-eslint-config'],
  rules: {
    'pure-eslint-plugin/no-secret-info': 'error',
  },
};
```

### 使用 presets

```js
// .eslintrc.js
module.exports = {
  extends: 'plugin:pure-eslint-plugin/recommended',
};
```

## 支持的规则

- [`no-broad-semantic-versioning`](https://luszz.github.io/pure/plugin/no-broad-semantic-versioning.html) 不要指定宽泛的版本范围
- [`no-http-url`](https://luszz.github.io/pure/plugin/no-http-url.html) 使用 HTTPS 协议头的 URL，而不是 HTTP
- [`no-js-in-ts-project`](https://luszz.github.io/pure/plugin/no-js-in-ts-project.html) 不要在 TS 项目中使用 JS
- [`no-secret-info`](https://luszz.github.io/pure/plugin/no-secret-info.html) 不要在代码中直接设置 `password` `token` and `secret` 信息
