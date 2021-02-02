module.exports = {
  extends: ['airbnb'],
  parser: "babel-eslint",
  parserOptions: {
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'semi': ["error", "never", { "omitLastInOneLineBlock": true}]
  },
  env: {
    "jest": true,
    "browser": true
  }
}
