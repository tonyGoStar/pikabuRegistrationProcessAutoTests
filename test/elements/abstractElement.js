const helper = require('../utilities/helper');

module.exports = class AbstractElement {
  /**
     *
     * @param {string} selector
     * @param {AbstractElement} parent
     */
  constructor(selector, parent = null) {
    this.locator = selector;
    this.parent = parent;
  }

  get element() {
    if (this.parent) {
      return this.parent.$(this.locator);
    }
    /**
         * @this {WebdriverIO.Element}
         */
    return browser.$(this.locator);
  }

  waitForEnabled() {
    return this.element.waitForEnabled({ timeout: helper.waitingForTimeout });
  }

  waitForDisplayed() {
    return this.element.waitForDisplayed({ timeout: helper.waitingForTimeout });
  }

  waitForClickable() {
    return this.element.waitForClickable({ timeout: helper.waitingForTimeout });
  }

  waitForDisappeared() {
    return this.element.waitForDisplayed({ reverse: true });
  }

  waitAndClick() {
    this.element.waitForClickable();
    this.element.click();
  }

  isClickable() {
    return this.element.isClickable();
  }

  isDisplayed() {
    return this.element.isDisplayed();
  }

  isExisting() {
    return this.element.isExisting();
  }

  click() {
    return this.element.click();
  }

  hover() {
    return this.element.moveTo();
  }

  findElement() {
    return browser.$(`${this.locator}`);
  }

  findAllElements() {
    return browser.$$(`${this.locator}`);
  }

  getAttribute(attr) {
    return this.element.getAttribute(attr);
  }

  getText() {
    return this.element.getText();
  }

  getValue() {
    return this.element.getValue();
  }

  setValue(text) {
    return this.element.setValue(text);
  }

  screenshot() {
    return this.element.saveScreenshot('./test/screenshots/elemScreenshot.png');
  }

  scroll() {
    return this.element.scrollIntoView();
  }

  selectByVisibleText(text) {
    // добавить класс дроп даун
    return this.element.selectByVisibleText(text);
  }

  /**
     *
     * @param {string} selector
     * @returns {WebdriverIO.Element}
     */
  $(selector) {
    return this.element.$(selector);
  }

  $$(selector) {
    return this.element.$$(selector);
  }
};
