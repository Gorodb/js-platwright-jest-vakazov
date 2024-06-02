require('dotenv').config()

// getting browsers from the environment variable on which tests will be run
let browsers = process.env.BROWSERS.split(/[,.;\s]/) || ['chromium'];
console.log('Starting Browsers: ', browsers);

module.exports = {
  report: [],
  testPath: "./tests",
  launchOptions: {
    devtools: false,
    headless: true,
  },
  contextOptions: {
    ignoreHTTPSErrors: true,
    viewport: {
      width: 1440,
      height: 1080,
    },
  },
  browsers,
  devices: [],
  exitOnPageError: false,
};
