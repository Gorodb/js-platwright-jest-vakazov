const {cookies} = require("./components/cookiesComponents");
const {PageHelper} = require("../helpers");

exports.CookiesModal = class CookiesModal {
  static async acceptAllCookies() {
    await cookies.acceptAll.waitFor({state: "visible"});
    await PageHelper.waitForPageToBeLoaded();
    await cookies.acceptAll.click();
  }
}
