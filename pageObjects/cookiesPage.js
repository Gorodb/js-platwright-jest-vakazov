const {cookies} = require("./components/cookiesComponents");
const {PageHelper} = require("../helpers");

exports.CookiesPage = class CookiesPage {
  static async acceptAllCookies() {
    await cookies.acceptAll.waitFor({state: "visible"});
    await PageHelper.waitForPageToBeLoaded();
    await cookies.acceptAll.click();
  }
}
