const {mainScreen} = require("./components/mainScreenComponents");
const {PageHelper} = require("../helpers/PageHelper");

exports.MainPage = class MainPage {
  static async openMainPage() {
    await page.goto(process.env.BASE_URL);
    await PageHelper.waitForPageToBeLoaded();
  }

  static async clickOnAccountButton() {
    await mainScreen.myAccount.waitFor({state: "visible"});
    await PageHelper.waitForPageToBeLoaded();
    await mainScreen.myAccount.click();
  }

  static async clickOnCartButton() {
    await mainScreen.cart.click();
  }
}
