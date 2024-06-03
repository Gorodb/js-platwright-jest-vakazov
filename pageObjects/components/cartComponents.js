exports.cartLocators = {
  article: (id) => page.locator(`.cartEntry[data-article-number='${id}'] .cartEntry__articleNumber`),
  price: (id) => page.locator(`.cartEntry[data-article-number='${id}'] span.priceNew--strong`),
  title: (id) => page.locator(`.cartEntry[data-article-number='${id}'] .cartEntry__articleName`),
}
