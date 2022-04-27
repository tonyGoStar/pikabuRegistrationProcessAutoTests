module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    // jest: true,
    mocha: true,
    node: true,
    'webdriverio/wdio': true,
  },
  plugins: [
    'import',
    'simple-import-sort',
    'webdriverio',
  ],
  extends: [
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'import/order': 'off',
    'sort-imports': 'error',
  },
};
