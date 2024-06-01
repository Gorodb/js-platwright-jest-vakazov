exports.ElementsHelper = class ElementsHelper {
  static async takeScreenshot(name = "screenshot") {
    const screenshot = await page.screenshot();
    await allure.attachment(name, screenshot, 'image/png');
  }

  static async clearAndFill(element, text) {
    await element.clear();
    await element.fill(text);
  }
}
