module.exports = {
  preset: 'ts-jest',
  rootDir: './',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|scss)$': 'jest-css-modules-transform',
  },
  setupFilesAfterEnv: ['jest-extended', '@testing-library/jest-dom'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '@components': '<rootDir>/src/components',
    '@api': '<rootDir>/src/api',
    '@pages': '<rootDir>/src/pages',
    '@store': '<rootDir>/src/store',
    '@router': '<rootDir>/src/router',
    '@types': '<rootDir>/src/types',
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
