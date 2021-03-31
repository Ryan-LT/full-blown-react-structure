module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: `./tsconfig.json`,
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'import/no-named-default': 'off',
    'import/no-unresolved': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-named-as-default': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'req',
          'res',
          'acc',
          'global',
          'action',
          'api',
          'state',
          'client',
        ],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
