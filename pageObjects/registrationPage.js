const {expect} = require("@jest/globals");
const randomNames = require('random-name');

const {DataHelper, ElementsHelper} = require("../helpers");
const {MainPage} = require("./mainPage");
const {account} = require("./components/accountComponents");
const {registration} = require("./components/registrationComponents");

exports.RegistrationPage = class RegistrationPage {
  static async registerUser(email, password) {
    if (!email) {
      email = DataHelper.generateRandomEmail();
    }
    if (!password) {
      password = DataHelper.generateRandomValidPassword();
    }
    await this.setTitle();
    const name = await this.fillFirstName();
    const lastName = await this.fillLastName();
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.fillPasswordConfirmation(password);
    await this.checkConsentCheckbox();
    await this.pressNextButtonAndWaitForRequest();
    return [name, lastName, email, password];
  }

  static async setTitle() {
    await registration.firstName.waitFor({state: "visible"});
    const mailOption = await registration.optionMale.innerText();
    await registration.title.selectOption(mailOption);
  }

  static async fillFirstName() {
    const firstName = randomNames.first();
    await ElementsHelper.clearAndFill(registration.firstName, firstName);
    return firstName;
  }

  static async fillLastName() {
    const lastName = randomNames.last();
    await ElementsHelper.clearAndFill(registration.lastName, lastName);
    return lastName;
  }

  static async fillEmail(email) {
    await ElementsHelper.clearAndFill(registration.email, email);
  }

  static async fillPassword(password) {
    await ElementsHelper.clearAndFill(registration.password, password);
  }

  static async fillPasswordConfirmation(password) {
    await ElementsHelper.clearAndFill(registration.passwordRepeat, password);
  }

  static async checkConsentCheckbox() {
    await registration.consentCheckBox.click();
  }

  static async checkSubscriptionCheckbox() {
    await registration.consentCheckBox.click();
  }

  static async pressNextButton() {
    await registration.nextButton.click();
  }

  static async pressNextButtonAndWaitForRequest() {
    const responsePromise = page.waitForResponse(response =>
      response.url().includes('https://www.sofa.de/api/global/register')
    );
    await registration.nextButton.click();
    const response = await responsePromise;
    return response.ok();
  }
}

exports.RegistrationExpectations = class RegistrationExpectations {
  static async checkThatUserRegisteredAndLoggedIn(name, lastName) {
    await MainPage.clickOnAccountButton();
    await expect(await account.welcomeText.innerText()).toContain(`${name} ${lastName}`)
  }
}
