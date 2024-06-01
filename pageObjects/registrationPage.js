const {registration} = require("./components/registrationComponents");

exports.RegistrationPage = class RegistrationPage {
  static async setTitle() {
    await registration.firstName.waitFor({state: "visible"});
    const mailOption = await registration.optionMale.innerText();
    await registration.title.selectOption(mailOption);
  }

  static async fillLogin() {
    await registration.firstName.clear();
    await registration.firstName.fill("Ramis");
  }
}
