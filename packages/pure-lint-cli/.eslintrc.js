module.exports = {
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  extends: ['eslint-config-luszz/typescript/node', 'prettier'],
  rules: {
    '@typescript-eslint/no-require-imports': 0,
    'no-console': 0,
  },
};
