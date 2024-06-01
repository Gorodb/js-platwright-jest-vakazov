exports.ElementsHelper = class ElementsHelper {
  // takes screenshot and attaches it to the allure reporter
  // taken screenshot will be present in current test or tests step
  static async takeScreenshot(name = "screenshot") {
    const screenshot = await page.screenshot();
    await allure.attachment(name, screenshot, 'image/png');
  }

  static async clearAndFill(element, text) {
    await element.clear();
    await element.fill(text);
  }
}
