exports.wishlistLocators = {
  itemsInWishList: page.locator(".wishlistEntry"),
  itemInWishListById: (id) => page.locator(`[data-wishlist-entry-id='${id}']`),
  price: (id) => page.locator(`[data-wishlist-entry-id='${id}'] span.priceNew--strong`),
  title: (id) => page.locator(`[data-wishlist-entry-id='${id}'] .articleFullName`),
  zipcodeInput: page.locator(".wishlist__postalCodeArea [data-testid='zipcode-logistic-inputInput']"),
  addToCartButtons: page.locator(".addToCart__buttonContainer .button--addToCart"),
  addToCartDisabledButton: page.locator(".addToCart__buttonContainer button[disabled]"),
  rightOverlay: page.locator("#overlayRight"),
  closeRightOverlayButton: page.locator("#overlayRight .generalOverlay__close"),
  rightOverlayGoToCartButton: page.locator("#overlayRight [data-testid='cartOverlayToCartButton']"),
}
