module.exports = {
  "./src/*.{js,jsx,ts,tsx}": [
    "npx prettier --write",
    "eslint src/*.js --fix"
  ],
  "*.scss": [
    "stylelint --fix --syntax=scss",
    "npx prettier --write"
  ]
}
