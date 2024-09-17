/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  collectCoverageFrom: [
    'src/**/*',
    '!src/**/index.js',
    '!src/**/main/routes/**/*.js',
    '!src/**/main/api/**/*.js'
  ],
  // collectCoverageFrom: [
  //   'src/**/*.controller.js',
  //   'src/**/*.usecase.js',
  //   'src/**/*.repository.js',
  //   'src/**/*.entity.js',
  // ],
  testMatch: ['**/*.spec.js', '!**/*.test.js'],
  coverageProvider: 'v8',
  verbose: true,
  coverageDirectory: 'coverage',
  setupFiles: ['dotenv/config']
}

module.exports = config
