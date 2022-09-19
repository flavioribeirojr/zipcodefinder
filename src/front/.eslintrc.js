module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: ['plugin:@typescript-eslint/recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', '*.js', '*.d.ts'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    'no-trailing-spaces': ['error'],
    semi: ['error'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'max-len': [
      'error',
      {
        code: 130,
        ignorePattern: '^import .*',
      },
    ],
    '@typescript-eslint/indent': [
      'error',
      2
    ],
  },
};