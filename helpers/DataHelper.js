const { v4: uuidv4 } = require('uuid');

exports.DataHelper = class DataHelper {
  static generateRandomEmail() {
    return `test-${uuidv4()}@testMail.com`;
  }

  static generateRandomPassword() {
    return `password-${uuidv4()}`;
  }
}
