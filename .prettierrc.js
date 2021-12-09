/*
 * @Author: your name
 * @Date: 2020-04-17 14:30:47
 * @LastEditTime: 2020-09-01 14:28:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \alphawallet-bg\.prettierrc.js
 */
module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: false,
  printWidth: 150,
  semi: true,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  trailingComma: "all",
  proseWrap: "never",
  formatOnSave: false,
  overrides: [{
    files: ".prettierrc",
    options: {
      parser: "json"
    },
  }, ],
};
