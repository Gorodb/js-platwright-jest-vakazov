const {PageHelper, SoftAssertion} = require("../helpers");
const {wishlistLocators} = require("./components/wishlistComponents");

class WishListExpectations {
  // items in the array: {price, title, itemId}
  static async checkThatAllItemsWithIdsArePresentInWishList(itemsArray) {
    await PageHelper.waitForPageToBeLoaded();
    const softAssertions = new SoftAssertion();
    for (let itemData of itemsArray) {
      softAssertions.expect(await wishlistLocators.itemInWishListById(itemData.itemId).isVisible())
        .toBeTrue(`Item ${itemData.itemId} was not found in wishlist`);
      softAssertions.expect(await wishlistLocators.price(itemData.itemId).innerText())
        .toContainText(itemData.price);
      softAssertions.expect(await wishlistLocators.title(itemData.itemId).innerText())
        .toContainText(itemData.title);
    }
    await softAssertions.assertAll();
  }
}

exports.WishListExpectations = WishListExpectations;
