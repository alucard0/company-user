module.exports = {
  "./src/*.{js,jsx,ts,tsx}": [
    "npx prettier --write",
    "npx eslint src/*.js --fix-dry-run"
  ],
  "*.scss": [
    "stylelint --fix --syntax=scss",
    "npx prettier --write"
  ]
}
