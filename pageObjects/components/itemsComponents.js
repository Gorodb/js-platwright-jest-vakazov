exports.categoryItemsElements = {
  itemsAll: page.locator("//a[contains(@href,'artikel')]"),
  // heartIcon: page.locator(`//a[contains(@href,'artikel')]/following-sibling::div[@data-testid="wishlistHeart"]`).all(),
  heartButton: page.locator(`[data-testid="wishlistHeart"]`),
}
