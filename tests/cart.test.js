const {describe, test, beforeAll} = require("@jest/globals");
const {MainPage, LoginPage, CookiesModal, RegistrationPage, ItemsList, WishListExpectations} = require("../pageObjects");
const {DataHelper, ElementsHelper} = require("../helpers");

// generating user data before test runs
const email = DataHelper.generateRandomEmail();
const password = DataHelper.generateRandomValidPassword();

describe("Wish list and cart tests", () => {
  beforeAll(async () => {
    await MainPage.openMainPage();
  });

  test("Should be possible to add items to wish list", async () => {
    allure.parameter("email", email);
    allure.parameter("password", password);
    let itemsArray = [];

    await allure.step("Accept all cookies", async () => {
      await CookiesModal.acceptAllCookies();
    })
    await allure.step("Register new user", async () => {
      await MainPage.clickOnAccountButton();
      await LoginPage.clickOnRegistrationButton();
      await RegistrationPage.registerUser(email, password);
    });
    await allure.step("Open to 5 random category and then random items from category", async () => {
      // if item already added to wish list it will go to the category again and select another one
      itemsArray = await ItemsList.addRandomItemsToWishList(5);
    });
    await allure.step("Open wishlist", async () => {
      await MainPage.openMainPage();
      await MainPage.clickOnWishlistButton();
    });

    await allure.step("Check that all added items are in wishlist", async () => {
      await WishListExpectations.checkThatAllItemsWithIdsArePresentInWishList(itemsArray);
    });
  });
});
