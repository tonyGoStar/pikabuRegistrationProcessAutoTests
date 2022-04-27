const BasePage = require('./BasePage');
const AbstractElement = require('../elements/abstractElement');
const AuthSidebarItem = require('../elements/AuthSidebarItem');

class MainPage extends BasePage {
  constructor() {
    // if (typeof MainPage.instance === 'object') {
    //   return MainPage.instance;
    // }
    super('');
    // MainPage.instance = this;
    // return this;
  }

  authSidebar = new AuthSidebarItem('.tabs.sidebar-auth .tabs__container');

  signUpButton = new AbstractElement('.//span[@data-to="signup"]', this.authSidebar);

  accountConfirmText = new AbstractElement('.//div[@data-role="account-confirm"]/a');

  openRegistrationForm() {
    this.reloadSession();
    this.open();
    this.signUpButton.waitForClickable();
    this.signUpButton.click();
  }

  /**
   *
   * @param {string} email
   * @param {string} nickname
   * @param {string} password
   */
  fillRegistrationFields(email, nickname, password) {
    this.authSidebar.emailInput.waitForEnabled();
    this.authSidebar.emailInput.setValue(email);

    this.authSidebar.nicknameInput.waitForEnabled();
    this.authSidebar.nicknameInput.setValue(nickname);
    this.authSidebar.passwordInput.waitForEnabled();
    this.authSidebar.passwordInput.setValue(password);
  }
}

module.exports = MainPage;
