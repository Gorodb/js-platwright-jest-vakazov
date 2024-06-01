exports.login = {
  registrationLink: page.locator("[data-testid='registerAccount']"),
  loginInput: page.locator("[data-testid='loginEmailInput']"),
  passwordInput: page.locator("[data-testid='loginPasswordInput']"),
  loginButton: page.locator("[data-testid='login-submit']"),
  emailInputErrorMessage: page.locator(".formInput__error[for='loginEmail']"),
  passwordInputErrorMessage: page.locator(".formInput__error[for='loginPassword']"),
}
