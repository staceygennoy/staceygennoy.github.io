module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['error', { 'allowExpressions': true, 'allowTypedFunctionExpressions': true }],
    '@typescript-eslint/indent': ['error', 2],
    'quotes': ['error', 'single'],
  },
};
