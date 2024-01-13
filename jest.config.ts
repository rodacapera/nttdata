export default {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: false,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(@my-cool-package)/)'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png)$': 'identity-obj-proxy',
  },
};
