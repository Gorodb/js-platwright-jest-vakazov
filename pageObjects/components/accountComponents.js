exports.account = {
  welcomeText: page.locator("div.titleHeadline"),
  yourOrdersLink: page.locator("li.sidebarNavigation__item a[href='/kundenkonto/bestellungen']"),
  yourCustomerDataLink: page.locator("li.sidebarNavigation__item a[href='/kundenkonto/kundendaten']"),
  wishListLink: page.locator("li.sidebarNavigation__item a[href='/wunschliste']"),
}
