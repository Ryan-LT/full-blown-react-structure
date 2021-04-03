module.exports = {
  preset: 'ts-jest',
  rootDir: './',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
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
    '@utils': '<rootDir>/src/utils',
    '\\.(css|scss)$': '<rootDir>/tests/styleMock.ts',
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
