const {login} = require("./components/loginComponents");
const {PageHelper} = require("../helpers/PageHelper");

exports.LoginPage = class LoginPage {
  static async clickOnRegistrationButton() {
    // wait for all content to be loaded, otherwise playwright can't click on element
    await PageHelper.waitForPageToBeLoaded();
    await login.registrationLink.click();
  }

  static async fillLogin(email) {
    await login.loginInput.clear();
    await login.loginInput.fill(email);
  }

  static async fillPassword(email) {
    await login.passwordInput.clear();
    await login.passwordInput.fill(email);
  }
}
