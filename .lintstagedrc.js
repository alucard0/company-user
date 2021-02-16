module.exports = {
  "./src/*.{js,jsx,ts,tsx}": [
    "npx prettier --write",
    "eslint src/*.js --fix-dry-run",
    "eslint --plugin eslint-plugin-import"
  ],
  "*.scss": [
    "stylelint --fix --syntax=scss",
    "npx prettier --write"
  ]
}
