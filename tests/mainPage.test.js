const {describe, test, beforeAll} = require("@jest/globals");
const {MainPage, LoginPage, CookiesPage, RegistrationPage, RegistrationExpectations, LoginPageExpectations} = require("../pageObjects");
const {DataHelper, PageHelper} = require("../helpers");
const randomNames = require("random-name");

// generating user data before test runs
const email = DataHelper.generateRandomEmail();
const password = DataHelper.generateRandomValidPassword();
// generating random first and last names
const name = randomNames.first();
const lastname = randomNames.last();

describe("Authorisation tests", () => {
  beforeAll(async () => {
    await MainPage.openMainPage();
  });

  test("Should be possible to register new user", async () => {
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
    await allure.step("Fill first name", async () => {
      await RegistrationPage.fillFirstName(name);
    });
    await allure.step("Fill last name", async () => {
      await RegistrationPage.fillLastName(lastname);
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
    });
  });

  test("Should be possible to login previously created user", async () => {
    await allure.step("Clean cookies and accept terms and conditions", async () => {
      await PageHelper.cleanCookiesAndReloadThePage();
      await CookiesPage.acceptAllCookies();
    });
    await allure.step("Click on account icon", async () => {
      await MainPage.clickOnAccountButton();
    });
    await allure.step("Fill email", async () => {
      await LoginPage.fillEmail(email);
    });
    await allure.step("Fill password", async () => {
      await LoginPage.fillPassword(password);
    });
    await allure.step("Press login button", async () => {
      await LoginPage.clickOnLoginButton();
    });

    await allure.step("Check that user logged in", async () => {
      await RegistrationExpectations.checkThatUserRegisteredAndLoggedIn(name, lastname)
    });
  });

  test("Should not be possible to login with correct email and wrong password", async () => {
    const newPassword = DataHelper.generateRandomValidPassword();
    allure.parameter("email", email);
    allure.parameter("password", newPassword);

    await allure.step("Clean cookies and accept terms and conditions", async () => {
      await PageHelper.cleanCookiesAndReloadThePage();
      await CookiesPage.acceptAllCookies();
    });
    await allure.step("Click on account icon", async () => {
      await MainPage.clickOnAccountButton();
    });
    await allure.step("Fill email with previously registered one", async () => {
      await LoginPage.fillEmail(email);
    });
    await allure.step("Fill password with incorrect password", async () => {
      await LoginPage.fillPassword(newPassword);
    });
    await allure.step("Click login button", async () => {
      await LoginPage.clickOnLoginButton();
    })

    await allure.step("Check that user logged in", async () => {
      await LoginPageExpectations.checkThatUserIsNotLoggedInWithErrorUnderEmailInput();
    });
  });

  test("Should not be possible to login with correct email and empty password", async () => {
    await allure.step("Clean cookies and accept terms and conditions", async () => {
      await PageHelper.cleanCookiesAndReloadThePage();
      await CookiesPage.acceptAllCookies();
    });
    await allure.step("Click on account icon", async () => {
      await MainPage.clickOnAccountButton();
    });
    await allure.step("Fill email", async () => {
      await LoginPage.fillEmail(email);
    });
    await allure.step("Click login button", async () => {
      await LoginPage.clickOnLoginButton();
    })

    await allure.step("Check that user logged in", async () => {
      await LoginPageExpectations.checkThatUserCantLoginWithEmptyPassword();
    });
  });

  test("Should be login error messages if session expired, session should renew automatically", async () => {
    await allure.step("Clean cookies and accept terms and conditions", async () => {
      await PageHelper.reloadPage();
      await PageHelper.cleanCookies();
    });
    await allure.step("Fill email", async () => {
      await LoginPage.fillEmail(email);
    });
    await allure.step("Fill password", async () => {
      await LoginPage.fillPassword(DataHelper.generateRandomValidPassword());
    });
    await allure.step("Click login button", async () => {
      await LoginPage.clickOnLoginButton();
    })

    await allure.step("Check that user logged in", async () => {
      await LoginPageExpectations.checkThatUserIsNotLoggedInWithErrorUnderEmailInput();
    });
  });
});
