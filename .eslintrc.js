module.exports = {
  extends: ['airbnb'],
  parser: "babel-eslint",
  parserOptions: {
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
  rules: {
    "semi": "off",
    'react/jsx-filename-extension': 'off'
  },
  env: {
    "jest": true,
    "browser": true
  },
  settings: {
    'import/order': ['warn', { 
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling'], 
      'alphabetize': {
        order: 'asc'
      },
      "pathGroups": [
        {
          "pattern": "react",
          "group": "builtin",
          "position": 'before'
        }
      ],
      "pathGroupsExcludedImportTypes": ["builtin"]
    }]
  }
}
