exports.PageHelper = class PageHelper {
  static async waitForPageToBeLoaded() {
    await page.waitForLoadState('networkidle');
  }

  static async waitForDomToBeLoaded() {
    await page.waitForLoadState('domcontentloaded');
  }
}
