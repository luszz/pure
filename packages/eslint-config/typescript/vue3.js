module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    './index',
    // 使用 eslint-plugin-vue 插件的基本规则
    'plugin:vue/vue3-essential',

    // 使用 ESLint 推荐的规则
    'eslint:recommended',

    // 使用 @vue/eslint-config-typescript 推荐的规则
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    // 关闭 vue/no-unused-components 规则，不检查未使用的组件
    'vue/no-unused-components': 'off',

    // 关闭 @typescript-eslint/no-unused-vars 规则，不检查未使用的变量
    '@typescript-eslint/no-unused-vars': 'off',

    // 开启 vue/html-self-closing 规则，检查 HTML 和 Vue.js 组件标签的自闭合
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always', // 对于 HTML 的 void 元素总是自闭合
        normal: 'never', // 对于 HTML 的普通元素从不自闭合
        component: 'always', // 对于 Vue.js 的组件总是自闭合
      },
      svg: 'always', // 对于 SVG 元素总是自闭合
      math: 'always', // 对于 MathML 元素总是自闭合
    }],

    // 关闭 no-undef 规则，不检查未定义的变量
    'no-undef': 'off',

    // 关闭 @typescript-eslint/no-explicit-any 规则，允许使用 any 类型
    '@typescript-eslint/no-explicit-any': 'off',

    // 关闭 @typescript-eslint/no-non-null-assertion 规则，允许使用非空断言操作符 (!)
    '@typescript-eslint/no-non-null-assertion': 'off',

    // 关闭 vue/custom-event-name-casing 规则，不检查自定义事件名的大小写
    'vue/custom-event-name-casing': 'off',

    // 关闭 no-use-before-define 规则，允许在定义之前使用变量
    'no-use-before-define': 'off',

    // 开启 @typescript-eslint/no-use-before-define 规则，不允许在定义之前使用变量
    '@typescript-eslint/no-use-before-define': ['error'],
  },
};
