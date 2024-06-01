const {login} = require("./components/loginComponents");
const {ElementsHelper, SoftAssertion, PageHelper} = require("../helpers");

class LoginPage {
  static async clickOnRegistrationButton() {
    // wait for all content to be loaded, otherwise playwright can't click on element
    await PageHelper.waitForPageToBeLoaded();
    await login.registrationLink.click();
  }

  static async clickOnLoginButton() {
    await login.loginButton.click();
  }

  static async isLoginButtonExists() {
    return login.loginButton.isVisible();
  }

  static async fillEmail(email) {
    // wait for login input to be present on the page
    await login.loginInput.waitFor({state: "visible"});
    await ElementsHelper.clearAndFill(login.loginInput, email)
  }

  static async fillPassword(password) {
    await ElementsHelper.clearAndFill(login.passwordInput, password)
  }

  static async getEmailInputError() {
    // wait for error message to be present on the page
    await login.emailInputErrorMessage.waitFor({state: "visible", timeout: 2000});
    return login.emailInputErrorMessage.innerText();
  }

  static async getPasswordInputError() {
    // wait for error message to be present on the page
    await login.passwordInputErrorMessage.waitFor({state: "visible", timeout: 2000});
    return login.passwordInputErrorMessage.innerText();
  }
}

class LoginPageExpectations {
  static async checkThatUserIsNotLoggedInWithErrorUnderEmailInput() {
    // softAssertion class is needed when you have more than one expect
    // otherwise you can miss second check if first one failed
    const softAssertion = new SoftAssertion();
    softAssertion.expect(await LoginPage.getEmailInputError())
      .notToEqual("", "Email input's error message should be present");
    softAssertion.expect(await LoginPage.isLoginButtonExists())
      .toBeTrue("Login button doesn't present on the page");
    // apply all expectations from softAssertion
    await softAssertion.assertAll();
  }
  static async checkThatUserCantLoginWithEmptyPassword() {
    const softAssertion = new SoftAssertion();
    softAssertion.expect(await LoginPage.getPasswordInputError())
      .notToEqual("", "Password's error message should be present");
    softAssertion.expect(await LoginPage.isLoginButtonExists())
      .toBeTrue("Login button doesn't present on the page");
    await softAssertion.assertAll();
  }
}

exports.LoginPage = LoginPage;
exports.LoginPageExpectations = LoginPageExpectations;
