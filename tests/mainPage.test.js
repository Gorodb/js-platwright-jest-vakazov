const {describe, test, beforeAll, beforeEach, afterEach, expect} = require("@jest/globals");
const {MainPage, LoginPage, CookiesPage, RegistrationPage} = require("../pageObjects");
const {DataHelper} = require("../helpers/DataHelper");

describe("Authorisation tests", () => {
  beforeAll(async () => {
    await MainPage.openMainPage();
  });

  test("Should be possible to register new user", async () => {
    const email = DataHelper.generateRandomEmail();
    const password = DataHelper.generateRandomPassword();
    allure.parameter("email", email);
    allure.parameter("password", password);

    await allure.step("Accept all cookies", async () => {
      await CookiesPage.acceptAllCookies();
    });

    await allure.step("Click on account icon", async () => {
      await MainPage.clickOnAccountButton();
    });

    await allure.step("Click on registration button", async () => {
      await LoginPage.clickOnRegistrationButton();
    });

    await allure.step("Set title", async () => {
      await RegistrationPage.setTitle();
    });
  });
});
