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
    'import/prefer-default-export': 'off', // Off for short path import
    'react/prop-types': 'off', // Doesn't need this for Typescripts
    'import/no-named-default': 'off',
    'import/no-unresolved': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-named-as-default': 'off',
    'react/jsx-props-no-spreading': 'off', //Skip this since we use typescripts - props are clearly defined
    'no-param-reassign': [ // Disable for several variable names and we use immerjs so state will not be multate
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
