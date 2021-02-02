module.exports = {
  "./src/*.{js,jsx,ts,tsx}": [
    "npx prettier --write",
    "eslint src/*.js --fix"
  ]
}