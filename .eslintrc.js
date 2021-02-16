module.exports = {
  extends: ['airbnb'],
  parser: "babel-eslint",
  parserOptions: {
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  rules: {
    "semi": "off",
    'react/jsx-filename-extension': 'off',
    'jsx-quotes': [2, 'prefer-double'],
    quotes: ["error", "single"]
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
