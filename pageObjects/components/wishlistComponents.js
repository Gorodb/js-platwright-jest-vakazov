exports.wishlistLocators = {
  itemInWishListById: (id) => page.locator(`[data-wishlist-entry-id='${id}']`),
  price: (id) => page.locator(`[data-wishlist-entry-id='${id}'] span.priceNew--strong`),
  title: (id) => page.locator(`[data-wishlist-entry-id='${id}'] .articleFullName`),
}

// [data-wishlist-entry-id='11327899'] span.priceNew--strong
