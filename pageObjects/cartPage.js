const {PageHelper, SoftAssertion} = require("../helpers");
const {cartLocators} = require("./components/cartComponents");

class CartExpectations {
  // items in the array structure: {price, title, itemId}
  static async checkThatAllItemsFromWishlistArePresentInCart(itemsArray) {
    await PageHelper.waitForPageToBeLoaded();
    const softAssertions = new SoftAssertion();
    for (let itemData of itemsArray) {
      // check that there are items with provided article numbers
      softAssertions.expect(await cartLocators.article(itemData.itemId).innerText())
        .toContainText(itemData.itemId);
      // check that items with same article has the same price
      softAssertions.expect(await cartLocators.price(itemData.itemId).innerText())
        .toContainText(itemData.price);
      // check that items with same article has the same title
      softAssertions.expect(await cartLocators.title(itemData.itemId).innerText())
        .toContainText(itemData.title);
    }
    await softAssertions.assertAll();
  }
}

exports.CartExpectations = CartExpectations;
