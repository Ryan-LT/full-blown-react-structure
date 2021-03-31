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
      '@pages': '<rootDir>/src/pages',
      '@store': '<rootDir>/src/store',
      '@router': '<rootDir>/src/router',
    },
    globals: {
      'ts-jest': {
        diagnostics: false,
      },
    },
  };
  