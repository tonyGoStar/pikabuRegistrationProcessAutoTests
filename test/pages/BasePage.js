class BasePage {
  constructor(url) {
    this.url = url;
  }

  open() {
    return browser.url(this.url);
  }

  refresh() {
    return browser.refresh();
  }

  reloadSession() {
    return browser.reloadSession();
  }

  // executeJsCode(script, arguments) {
  //   return browser.execute(script, arguments);
  // }

  // executeAsyncJsCode(script, arguments) {
  //   return browser.executeAsync(script, arguments);
  // }

  waitPageLoad() {
    return browser.waitUntil(() => this.isOpened());
  }

  isOpened() {
    return browser.getUrl().includes(this.url);
  }
}

module.exports = BasePage;
