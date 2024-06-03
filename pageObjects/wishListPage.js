const {PageHelper, SoftAssertion, DataHelper, ElementsHelper} = require("../helpers");
const {wishlistLocators} = require("./components/wishlistComponents");

class WishList {
  static async fillZipcodeByRandomValidValue() {
    // generate random 5-digits length zipcode. Couldn't use 10112 and 10111 zipcodes. Haven't found the reason why
    const validZipcode = DataHelper.getRandomInt(10115, 99999);
    await ElementsHelper.clearAndFill(wishlistLocators.zipcodeInput, `10115`);
    // wait for add to cart button to be enabled
    await DataHelper.waitUntil(
      async () => (await wishlistLocators.addToCartButtons.all()).length > 0
    );
  }

  static async addAllItemsFromTheWishListToBasket() {
    // getting count of items in wishlist
    const countOfItemsInWishlist = (await wishlistLocators.itemsInWishList.all()).length
    // wait for all buttons became active
    await DataHelper.waitUntil(
      async () => (await wishlistLocators.addToCartButtons.all()).length === countOfItemsInWishlist
    );
    // get all add to cart buttons and click on them one by one
    const addToCartButtons = await wishlistLocators.addToCartButtons.all();
    for (let addToCartButton of addToCartButtons) {
      await PageHelper.waitForPageToBeLoaded();
      await addToCartButton.click();
      await wishlistLocators.rightOverlay.waitFor({state: "visible"});
      await wishlistLocators.closeRightOverlayButton.click();
    }
  }
}

class WishListExpectations {
  // items in the array structure: {price, title, itemId}
  static async checkThatAllItemsWithIdsArePresentInWishList(itemsArray) {
    await PageHelper.waitForPageToBeLoaded();
    const softAssertions = new SoftAssertion();
    for (let itemData of itemsArray) {
      // check that there are items with provided article numbers
      softAssertions.expect(await wishlistLocators.itemInWishListById(itemData.itemId).isVisible())
        .toBeTrue(`Item ${itemData.itemId} was not found in wishlist`);
      // check that items with same article has the same price
      softAssertions.expect(await wishlistLocators.price(itemData.itemId).innerText())
        .toContainText(itemData.price);
      // check that items with same article has the same title
      softAssertions.expect(await wishlistLocators.title(itemData.itemId).innerText())
        .toContainText(itemData.title);
    }
    await softAssertions.assertAll();
  }
}

exports.WishList = WishList;
exports.WishListExpectations = WishListExpectations;
