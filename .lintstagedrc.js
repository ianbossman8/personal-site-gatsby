module.exports = {
  'src/**/*.{js,ts,jsx,tsx}': ['npm run lint'],
  "*.json": [
    "prettier --write"
  ]
}
