exports.wishlistLocators = {
  itemInWishListById: (id) => page.locator(`[data-wishlist-entry-id='${id}']`),
  price: (id) => page.locator(`[data-wishlist-entry-id='${id}'] .articlePricesNew__price`),
  title: (id) => page.locator(`[data-wishlist-entry-id='${id}'] .articleFullName`),
}
