const { v4: uuidv4 } = require('uuid');

exports.DataHelper = class DataHelper {
  // generates random email address using uuid v4 to be sure that email is unique
  static generateRandomEmail() {
    return `test-${uuidv4()}@testMail.com`;
  }

  // generates random valid password with provided capital letter and special symbol
  static generateRandomValidPassword() {
    return `Pass!1-${uuidv4()}`;
  }

  // set js execution on pause for provided milliseconds
  static async delay(milliseconds) {
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds)
    });
  }

  // wait for provided event to be true
  static async waitUntil(event, timeout = 5000) {
    let currentTime = Date.now();
    const waitUntil = currentTime + timeout;

    while (!(await event()) && currentTime < waitUntil) {
      await this.delay(500);
      currentTime = Date.now();
    }

    return await event();
  }

  // random integer value in provided range
  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static getRandomItemFromArray(array) {
    return array[this.getRandomInt(0, array.length - 1)];
  }

  // get random specified amount of items from the provided array
  static getRandomItemsFromArrayWithIndex(array, itemsCount) {
    // copy of provided array to be able to safety manipulate with it
    let newArray = [...array];
    // check that provided array has needed amount of items
    itemsCount = itemsCount <= array.length ? itemsCount : array.length;
    let itemsArray = [];

    for (let i = 0; i < itemsCount; i++) {
      // get random element from the array
      const randomItem = newArray[this.getRandomInt(0, newArray.length - 1)];
      // get index of item
      const itemIndex = array.indexOf(randomItem);
      // remove already selected item from the copied array to be sure that it won't be selected again
      newArray.splice(newArray.indexOf[randomItem], 1);
      itemsArray.push({item: randomItem, index: itemIndex});
    }
    return itemsArray;
  }
}
