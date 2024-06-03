const {expect} = require("@jest/globals");

expect.extend({
  toBeEqual(received, expected, errorMessage) {
    const pass = received === expected;
    errorMessage = errorMessage ? errorMessage : `'${received}' should be equal to '${expected}'`

    if (pass) {
      return {
        message: () => errorMessage || `'${received}' should be equal to '${expected}'`,
        pass: true,
      };
    }
    return {
      message: () => errorMessage || `'${received}' should not be equal to '${expected}'`,
      pass: false,
    };
  },
});
