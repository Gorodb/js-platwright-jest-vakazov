const {MainPage} = require("./mainPage");
const {LoginPage, LoginPageExpectations} = require("./loginPage");
const {CookiesModal} = require("./cookiesModal");
const {RegistrationPage, RegistrationExpectations} = require("./registrationPage");
const {ItemsList} = require("./itemsList");
const {WishListExpectations} = require("./wishListPage");


module.exports = {
  MainPage,
  LoginPage,
  CookiesModal,
  RegistrationPage,
  RegistrationExpectations,
  LoginPageExpectations,
  ItemsList,
  WishListExpectations
}
