exports.PageHelper = class PageHelper {
  static async waitForPageToBeLoaded() {
    await page.waitForLoadState('networkidle');
  }

  static async waitForDomToBeLoaded() {
    await page.waitForLoadState('domcontentloaded');
  }

  static async cleanCookiesAndReloadThePage() {
    // need to wait for page to be loaded otherwise cookies might not be cleared
    await PageHelper.waitForPageToBeLoaded();
    await context.clearCookies();
    await page.reload();
  }

  static async cleanCookies() {
    await context.clearCookies();
  }

  static async reloadPage() {
    await page.reload();
  }
}
