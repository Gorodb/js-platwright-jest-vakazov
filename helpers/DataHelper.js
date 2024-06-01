const { v4: uuidv4 } = require('uuid');

exports.DataHelper = class DataHelper {
  static generateRandomEmail() {
    return `test-${uuidv4()}@testMail.com`;
  }

  static generateRandomValidPassword() {
    return `Pass!1-${uuidv4()}`;
  }

  static async delay(milliseconds) {
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds)
    });
  }

  static async waitUntil(event, timeout = 5000) {
    let currentTime = Date.now();
    const waitUntil = currentTime + timeout;

    while (!(await event()) && currentTime < waitUntil) {
      await this.delay(500);
      currentTime = Date.now();
    }

    return await event();
  }

  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
