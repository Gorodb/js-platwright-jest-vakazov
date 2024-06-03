const {expect} = require("@jest/globals");
const {DataHelper} = require("./DataHelper");

// this class collects different expectations and error messages for them
// and if at least one expect function is failed all expects will be failed as well
exports.SoftAssertion = class SoftAssertion {
  isFail = false;
  errors = [];

  expect(actual) {
    const toBeTrue = (errorMessage) => {
      if (!actual) {
        errorMessage = errorMessage ? errorMessage : "Expected true but got false";
        this.setFail(`✘ ${errorMessage}`)
      }
    }

    const toBeFalse = (errorMessage) => {
      if (actual) {
        errorMessage = errorMessage ? errorMessage : "Expected false but got true";
        this.setFail(`✘ ${errorMessage}`)
      }
    }

    const toEqual = (expected, errorMessage) => {
      if (actual !== expected) {
        errorMessage = errorMessage ? errorMessage : `Expected: ${expected}, but got: ${actual}`;
        console.error(errorMessage);
        this.setFail(`✘ ${errorMessage}`)
      }
    }

    const notToEqual = (expected, errorMessage) => {
      if (actual === expected) {
        errorMessage = errorMessage ? errorMessage : `Expected: ${expected}, but got: ${actual}`;
        console.error(errorMessage);
        this.setFail(`✘ ${errorMessage}`)
      }
    }

    const toContainText = (expected, errorMessage) => {
      if (!DataHelper.clearString(actual).includes(DataHelper.clearString(expected))) {
        errorMessage = errorMessage ? errorMessage : `Expected: ${expected}, to contain text: ${actual}`;
        console.error(errorMessage);
        this.setFail(`✘ ${errorMessage}`)
      }
    }

    const notToContainText = (expected, errorMessage) => {
      if (actual.includes(expected)) {
        errorMessage = errorMessage ? errorMessage : `Expected: ${expected}, not to contain text: ${actual}`;
        console.error(errorMessage);
        this.setFail(`✘ ${errorMessage}`)
      }
    }

    const toBeGreater = (expected, errorMessage) => {
      if (actual < expected) {
        errorMessage = errorMessage ? errorMessage : `Expected: ${expected}, to be greater then: ${actual}`;
        console.error(errorMessage);
        this.setFail(`✘ ${errorMessage}`)
      }
    }

    return {
      toBeTrue,
      toBeFalse,
      toEqual,
      notToEqual,
      toContainText,
      notToContainText,
      toBeGreater
    }
  }

  async assertAll() {
    // print to console error messages if test failed
    if (this.isFail) {
      console.error(this.errors.join('\r\n'))
    }
    await expect(this.isFail).toBeEqual(false)
  }

  setFail(errorMessage) {
    this.isFail = true;
    this.errors.push(errorMessage);
  }
}
