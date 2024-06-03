const {MainPage} = require("./mainPage");
const {LoginPage, LoginPageExpectations} = require("./loginPage");
const {CookiesModal} = require("./cookiesModal");
const {RegistrationPage, RegistrationExpectations} = require("./registrationPage");
const {ItemsList} = require("./itemsList");
const {WishList, WishListExpectations} = require("./wishListPage");
const {CartExpectations} = require("./cartPage");


module.exports = {
  MainPage,
  LoginPage,
  CookiesModal,
  RegistrationPage,
  RegistrationExpectations,
  LoginPageExpectations,
  ItemsList,
  WishList,
  WishListExpectations,
  CartExpectations,
}
