module.exports = {
  "./src/*.{js,jsx,ts,tsx}": [
    "npx prettier --write",
    "eslint src/*.js --fix-dry-run"
  ],
  "*.scss": [
    "npx prettier --write",
     "stylelint --fix --syntax=scss"
  ]
}
