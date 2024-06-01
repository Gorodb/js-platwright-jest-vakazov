const {mainScreen} = require("./components/mainScreenComponents");
exports.MainPage = class MainPage {
  static async openMainPage() {
    await page.goto(process.env.BASE_URL);
  }

  static async clickOnAccountButton() {
    await mainScreen.myAccount.click();
  }

  static async clickOnCartButton() {
    await mainScreen.cart.click();
  }
}
