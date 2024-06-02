const {PageHelper} = require("../helpers/PageHelper");
const {header} = require("./components/headerComponents");

exports.MainPage = class MainPage {
  static async openMainPage() {
    await page.goto(process.env.BASE_URL);
    await PageHelper.waitForPageToBeLoaded();
  }

  static async clickOnAccountButton() {
    await header.myAccount.waitFor({state: "visible"});
    await PageHelper.waitForPageToBeLoaded();
    await header.myAccount.click();
  }

  static async clickOnCartButton() {
    await header.cart.click();
  }

  static async clickOnWishlistButton( ) {
    await header.wishList.click()
  }
}
