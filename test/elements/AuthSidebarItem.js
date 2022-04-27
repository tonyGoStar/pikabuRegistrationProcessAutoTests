const AbstractElement = require('./abstractElement');

class AuthSidebarItem extends AbstractElement {
  constructor(selector) {
    super(selector);
  }

  emailInput = new AbstractElement('.//input[@type="email"]', this);

  emailInputError = new AbstractElement('.//div[contains(@class, "input_error")][.//div/input[@type="email"]]', this);

  existingEmailTitle = new AbstractElement('.//span[text()="Email используется"]', this);

  nicknameInput = new AbstractElement('.//input[@placeholder="Никнейм на Пикабу *"]', this);

  nicknameInputError = new AbstractElement('.//div[contains(@class, "input_error")][.//div/input[@placeholder="Никнейм на Пикабу *"]]', this);

  passwordInput = new AbstractElement('.//input[@data-role="password"]', this);

  passwordInputError = new AbstractElement('.//div[contains(@class, "input_error")][.//div/input[@data-role="password"]]', this);

  passwordLenthRequirement = new AbstractElement('.//div[@class="requirements-hint__rule"][./div/*[name()="svg"][contains(@class, "icon--auth__error")]]/span[text()="Не менее 6 символов"]', this);

  passwordLetterRequirement = new AbstractElement('.//div[@class="requirements-hint__rule"][./div/*[name()="svg"][contains(@class, "icon--auth__error")]]/span[text()="Как минимум 1 буква"]', this);

  passwordNumberRequirement = new AbstractElement('.//div[@class="requirements-hint__rule"][./div/*[name()="svg"][contains(@class, "icon--auth__error")]]/span[text()="Как минимум 1 цифра"]', this);

  createAccountButton = new AbstractElement('.//div[@data-id="signup"]//button[contains(@type, "submit")]', this);

  /**
   *
   * @param {string} size
   * @param {string|number} quantity
   */
  changeProductProperties(size, quantity) {
    this.dropdownSize.selectOption(size);
    this.dropdownQuantity.selectOption(quantity);
  }

  /**
   *
   * @param {string} size
   * @param {string|number} quantity
   */
  changeProductPropertiesByAttr(size, quantity) {
    this.dropdownSize.selectOptionByAttr('data-select2-id', size);
    this.dropdownQuantity.selectOption(quantity);
  }

  removeItemFromBag() {
    this.basketButtonRemove.click();
    // this.dropdownSize.waitForDisappeared();
    // this.dropdownQuantity.waitForDisappeared();
    // this.basketPrice.waitForDisappeared();
    // this.basketImage.waitForDisappeared();
    // this.waitForDisappeared();
  }

  waitingForRemoveButton() {
    this.basketButtonRemove.waitForDisplayed();
    this.basketButtonRemove.waitForClickable();
  }

  waitingForDropDowns() {
    this.dropdownSize.waitForDisplayed();
    // this.dropdownSize.waitForClickable();
    this.dropdownQuantity.waitForDisplayed();
    // this.dropdownQuantity.waitForClickable();
  }

  waitingForElementsOfItem() {
    this.basketPrice.waitForDisplayed();
    this.basketImage.waitForDisplayed();
    this.basketName.waitForDisplayed();
  }
}

module.exports = AuthSidebarItem;
