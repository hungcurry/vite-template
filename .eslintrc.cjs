module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    // 解決Vue每個文件開頭都報錯誤
    requireConfigFile: false,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'standard',
    '@vue/eslint-config-prettier',
  ],
  plugins: ['vue'],
  rules: {
    'no-console': 0,
    'no-invalid-regexp': 2,
    'no-debugger': 1, // 禁用 debugger
    'no-invalid-this': 2,
    'no-inline-comments': 0,
    'no-lonely-if': 0,
    'no-multiple-empty-lines': [
      1,
      {
        max: 2,
      },
    ],
    'no-obj-calls': 0,
    'no-path-concat': 0,
    'no-plusplus': 0,
    'no-redeclare': 2,
    'no-unused-vars': [
      0,
      {
        vars: 'all',
        args: 'after-used',
      },
    ],
    'no-var': 0,
    'vue/multi-word-component-names': [
      0,
      {
        ignores: [],
      },
    ],
    // 單引號
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: true,
      },
    ],
    eqeqeq: 'warn', // 要求使用 === 和 !==
    'arrow-spacing': 'warn',
    'spaced-comment': 1,
    'no-undef': 'off',
    'no-proto': 0,
    'no-sync': 0,
    'no-shadow': 2,
    'no-dupe-args': 2,
    'no-undef-init': 0,
    'no-unneeded-ternary': 1, // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    'no-self-compare': 2, // 不能比較自身
    'no-undefined': 0,
    'init-declarations': 0,
    'no-const-assign': 2,
    'no-use-before-define': 2, // 未定義前不能使用
    'no-useless-call': 2, // 禁止不必要的call和apply
    'no-void': 2, // 禁用void操作符
    'no-unreachable': 2,
    'max-params': [0, 10],
    // vue
    'vue/custom-event-name-casing': 'off', // 為自定義事件名稱強制使用特定大小寫
    'vue/attributes-order': 'off', // 強制執行屬性順序
    'vue/one-component-per-file': 'off', // 強制每個組件都應該在自己的文件中
    'vue/html-closing-bracket-newline': 'off', // 在標籤的右括號之前要求或禁止換行
    'vue/multiline-html-element-content-newline': 'off', // 在多行元素的內容之前和之後需要換行符
    'vue/singleline-html-element-content-newline': 'off', // 在單行元素的內容之前和之後需要換行符
    'vue/attribute-hyphenation': 'off', // 對模板中的自定義組件強制執行屬性命名樣式
    'vue/require-default-prop': 'off',
    // 在<template>中強制一致縮進
    indent: ['off', 2],
    // 'vue/html-indent': [
    //   'error',
    //   2,
    //   {
    //     attribute: 1,
    //     baseIndent: 1,
    //     closeBracket: 0,
    //     alignAttributesVertically: false,
    //     ignores: ['VAttribute'],
    //   },
    // ],
    'vue/html-self-closing': 'off', // 執行自閉合的風格
    'space-before-function-paren': 'off', // 強制在 function的左括號之前使用一致的空格// 需要 props 的默認值
  },
};
