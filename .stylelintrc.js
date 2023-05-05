module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-sass-guidelines',
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  overrides: [
    {
      files: ['**/*.(scss|css|html|vue)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'max-nesting-depth': null,
    'max-line-length': null,
    'selector-max-compound-selectors': null,
    'selector-pseudo-class-no-unknown': null,
    'selector-no-qualifying-type': null,
    'selector-class-pattern': null,
    'function-parentheses-newline-inside': null,
    'function-no-unknown': null,
    'scss/function-no-unknown': null,
    'at-rule-no-unknown': null,
    'no-empty-source': null, // no-empty-source
    'color-function-notation': 'legacy',
    'color-named': null, // 顏色命名
    'alpha-value-notation': 'number',
    'scss/no-global-function-names': null,
    'scss/comment-no-empty': null,
    'scss/at-extend-no-missing-placeholder': null, // extend %取消
    'scss/selector-no-redundant-nesting-selector': null, // 允許空格 & .btn
    'function-name-case': null, // 取消駝峰式
    'scss/at-function-pattern': null, // 取消駝峰式
    'scss/at-mixin-pattern': null, // 取消駝峰式
    'annotation-no-unknown': null, // 尾部註解 !default $spacers)
    'at-rule-empty-line-before': null, // Mix include前不空行
    'import-notation': null, // 使用@import
    'rule-empty-line-before': null, // include 前面不空行
  },
  // ignoreFiles 排除要檢查的檔案
  ignoreFiles: [
    './node_modules/**/*.{css,scss,sass}',
    './dist/**/*.{css,scss,sass}',
  ],
};
