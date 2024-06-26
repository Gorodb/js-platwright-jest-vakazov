const {categoryItemsElements} = require("./components/itemsComponents");
const {DataHelper, PageHelper} = require("../helpers");
const {header} = require("./components/headerComponents");
const {categoryItemLocators} = require("./components/itemComponents");

class ItemsList {
  // this method goes through articles from random categories and adds item to wish list,
  // also collects basic information: article number, price and title to be checked in wishlist
  static async addRandomItemsToWishList(count) {
    // sometimes page is still loading
    let itemsInformation = [];
    // get all present on the page items
    for (let i = 0; i < count; i++) {
      await this.openRandomNotAddedToWishlistItemFromAnyCategory();
      const price = await categoryItemLocators.price.innerText();
      const title = await categoryItemLocators.title.innerText();
      // gets article number from the add to wish list button by data-wish-list-entry-number attribute
      const itemId = await categoryItemLocators.wishButton.getAttribute("data-wish-list-entry-number");
      itemsInformation.push({price, title, itemId});
      // click on wishlist icon
      await categoryItemLocators.wishButton.click();
      await PageHelper.waitForPageToBeLoaded();
    }
    return itemsInformation;
  }

  // opens random category and then item from this category
  // if item is already added to wishlist, it will try with another one until find not added one
  static async openRandomNotAddedToWishlistItemFromAnyCategory() {
    let isItemAlreadyAdded = true;
    while (isItemAlreadyAdded) {
      await this.openRandomCategory();
      await this.clickOnRandomItemFromTheCategory();
      isItemAlreadyAdded = await categoryItemLocators.filledWishButton.isVisible();
    }
  }

  // gets all the categories from the menu and opens one of them
  static async openRandomCategory() {
    // wait for categories to be loaded
    await DataHelper.waitUntil(
      async () => (await header.categoryLinks.all()).length > 0
    );
    await PageHelper.waitForPageToBeLoaded();
    // open random category which are present in the header
    const categories = await header.categoryLinks.all();
    await DataHelper.getRandomItemFromArray(categories).click();
    await PageHelper.waitForPageToBeLoaded();
  }

  // Clicks on random item from currently open category
  static async clickOnRandomItemFromTheCategory() {
    // wait for items to be loaded
    await DataHelper.waitUntil(
      async () => (await categoryItemsElements.itemsAll.all()).length > 0
    );
    await PageHelper.waitForPageToBeLoaded();
    // getting all items and randomly select one
    const allItems = await categoryItemsElements.itemsAll.all();
    const randomItem = await DataHelper.getRandomItemFromArray(allItems);
    await randomItem.click();
    await PageHelper.waitForPageToBeLoaded();
  }

  // gets 5 random items from one category and adds them to wishlist
  static async selectFiveRandomItemsFromCategory() {
    // get all present on the page goods
    const allItems = await categoryItemsElements.itemsAll.all();
    // random items
    const randomItems = DataHelper.getRandomItemsFromArrayWithIndex(allItems, 5);
    let ids = [];
    for (let {index} of randomItems) {
      // gets item's id from the link
      const elementsId = (await allItems[index].getAttribute("href")).replace('/artikel/', '');
      ids.push(elementsId);
      const selectedItemsAddToWishButton = (await categoryItemsElements.heartButton.all())[index]
      await selectedItemsAddToWishButton.click();
      await PageHelper.waitForPageToBeLoaded();
    }
    console.log("Selected ids: ", ids);
    return ids;
  }
}

exports.ItemsList = ItemsList;
