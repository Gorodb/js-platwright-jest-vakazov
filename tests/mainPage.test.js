const {describe, test, beforeAll} = require("@jest/globals");
const {MainPage, LoginPage, CookiesPage, RegistrationPage, RegistrationExpectations} = require("../pageObjects");
const {DataHelper} = require("../helpers");

const email = DataHelper.generateRandomEmail();
const password = DataHelper.generateRandomValidPassword();

describe("Authorisation tests", () => {
  beforeAll(async () => {
    await MainPage.openMainPage();
  });

  test("Should be possible to register new user", async () => {
    allure.parameter("email", email);
    allure.parameter("password", password);
    let name, lastname;

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
    await allure.step("Fill first name", async () => {
      name = await RegistrationPage.fillFirstName();
    });
    await allure.step("Fill last name", async () => {
      lastname = await RegistrationPage.fillLastName();
    });
    await allure.step("Fill email", async () => {
      await RegistrationPage.fillEmail(email);
    });
    await allure.step("Fill password", async () => {
      await RegistrationPage.fillPassword(password);
    });
    await allure.step("Fill password confirmation", async () => {
      await RegistrationPage.fillPasswordConfirmation(password);
    });
    await allure.step("Set consent checkbox", async () => {
      await RegistrationPage.checkConsentCheckbox();
    });
    await allure.step("Press next button", async () => {
      await RegistrationPage.pressNextButtonAndWaitForRequest();
    });

    await allure.step("Check that user logged in", async () => {
      await RegistrationExpectations.checkThatUserRegisteredAndLoggedIn(name, lastname)
    })
  });
});
