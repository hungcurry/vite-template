module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  // rule
  tabWidth: 2, // 每個tab相當於多少個空格（默認2）ab進行縮進（默認false）
  useTabs: false, // 是否使用t
  singleQuote: true, // 使用單引號（默認false）
  semi: true, // 聲明結尾使用分號(默認true)
  trailingComma: 'all', // 多行使用拖尾逗號（默認none）
  bracketSpacing: true, // 對象字面量的大括號間使用空格（默認true）
  // 箭頭函數參數括號 默認avoid 可選 avoid| always
  // avoid 能省略括號的時候就省略 例如x => x
  // always 總是有括號
  arrowParens: 'avoid',
  endOfLine: 'auto',
};
