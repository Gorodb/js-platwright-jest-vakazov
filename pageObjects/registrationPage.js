const randomNames = require('random-name');
const {registration} = require("./components/registrationComponents");
const {ElementsHelper} = require("../helpers/ElementsHelper");

exports.RegistrationPage = class RegistrationPage {
  static async registerUser(email, password) {
    await this.
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
}
