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

  // scrolls to element
  static async scrollToElement(element) {
    try {
      await element.scrollIntoViewIfNeeded();
    } catch {
      console.error(`Can not scroll to element with locator '${element}'`)
    }
  }

  // Sets url to be waited for after clicking by provided locator
  static async waitForResponseAfterClick(locator, url) {
    const responsePromise = page.waitForResponse(response =>
      response.url().includes(url)
    );
    await locator.click();
    const response = await responsePromise;
    return response.ok();
  }
}
