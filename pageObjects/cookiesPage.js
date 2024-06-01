const {cookies} = require("./components/cookiesComponents");

exports.CookiesPage = class CookiesPage {
  static async acceptAllCookies() {
    await cookies.acceptAll.click();
  }
}
