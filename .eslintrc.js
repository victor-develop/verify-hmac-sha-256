module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    impliedStrict: true
  },
  rules: {
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error'
  },
  plugins: ['jest']
}
