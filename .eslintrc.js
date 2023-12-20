module.exports = {
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['next/core-web-vitals'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  rules: {
    // 'no-console': 'error',
    // 'prettier/prettier': 'warn',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    'import/no-anonymous-default-export': 'off',
    // '@typescript-eslint/no-unused-vars': [
    //   'error',
    //   {
    //     argsIgnorePattern: '^_',
    //   },
    // ], // 禁止定义未使用的变量
  },
};
