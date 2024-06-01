module.exports = {
  preset: 'jest-circus-playwright-allure',
  "testEnvironment": "./CustomEnvironment.js",
  testEnvironmentOptions: {
    resultsDir: "./allure-results",
  },
  "testMatch": [
    "**/__tests__/**/*.+(ts|js)",
    "**/?(*.)+(spec|test).+(ts|js)"
  ],
  "testTimeout": 60000,
  "verbose": true,
  "setupFilesAfterEnv": [
    "./config.js",
  ],
  reporters: [
    "default",
  ]
}
