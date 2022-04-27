const MainPage = require('../pages/MainPage');
require('chai').should();
const { assert } = require('chai');
const chaiExpect = require('chai').expect;
const randomEmail = require('random-email');
const randomNickname = require('random-lorem');
const randomPassword = require('generate-password');

describe('Pikabu Registration Process. Positive Cases', () => {
  beforeEach(() => {
  });

  it('The successful registration should be done with correct credentials', () => {
    const mainPage = new MainPage();
    mainPage.openRegistrationForm();
    mainPage.fillRegistrationFields(
      randomEmail({ domain: 'example.com' }),
      randomNickname({ length: 7 }),
      randomPassword.generate({
        length: 15,
        numbers: true,
      }),
    );

    assert.isFalse(mainPage.authSidebar.emailInputError.isDisplayed());
    chaiExpect(mainPage.authSidebar.nicknameInputError.isDisplayed()).to.equal(false);
    assert.equal(mainPage.authSidebar.passwordInputError.isDisplayed(), false);

    mainPage.authSidebar.createAccountButton.waitAndClick();
    mainPage.accountConfirmText.waitForDisplayed();
    mainPage.accountConfirmText.getText().should.equal('Подтвердить аккаунт');
  });

  it('should display correct password difficulty level with different passwords', () => {
    const mainPage = new MainPage();
    mainPage.openRegistrationForm();

    mainPage.authSidebar.passwordInput.waitForEnabled();
    mainPage.authSidebar.passwordInput.setValue(randomPassword.generate({
      length: 5,
    }));
    mainPage.authSidebar.createAccountButton.waitAndClick();
    mainPage.authSidebar.passwordLenthRequirement.waitForDisplayed();
    mainPage.authSidebar.passwordNumberRequirement.waitForDisplayed();
    assert.isTrue(mainPage.authSidebar.passwordLenthRequirement.isDisplayed());
    assert.isTrue(mainPage.authSidebar.passwordNumberRequirement.isDisplayed());

    mainPage.authSidebar.passwordInput.setValue(randomPassword.generate({
      length: 6,
    }));
    mainPage.authSidebar.createAccountButton.waitAndClick();
    mainPage.authSidebar.passwordNumberRequirement.waitForDisplayed();
    assert.isTrue(mainPage.authSidebar.passwordNumberRequirement.isDisplayed());

    mainPage.authSidebar.passwordInput.setValue(randomPassword.generate({
      length: 5,
      numbers: true,
    }));
    mainPage.authSidebar.createAccountButton.waitAndClick();
    mainPage.authSidebar.passwordLenthRequirement.waitForDisplayed();
    assert.isTrue(mainPage.authSidebar.passwordLenthRequirement.isDisplayed());
  });
});
