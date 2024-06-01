const {MainPage} = require("./mainPage");
const {LoginPage, LoginPageExpectations} = require("./loginPage");
const {CookiesPage} = require("./cookiesPage");
const {RegistrationPage, RegistrationExpectations} = require("./registrationPage");

module.exports = {
  MainPage,
  LoginPage,
  CookiesPage,
  RegistrationPage,
  RegistrationExpectations,
  LoginPageExpectations
}
