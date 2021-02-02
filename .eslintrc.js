module.exports = {
  extends: ['airbnb'],
  parser: "babel-eslint",
  parserOptions: {
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
  rules: {
    'react/jsx-filename-extension': 'off'
  },
  env: {
    "jest": true,
    "browser": true
  }
}
