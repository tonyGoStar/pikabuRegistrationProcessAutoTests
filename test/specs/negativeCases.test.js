const MainPage = require('../pages/MainPage');
require('chai').should();
const { assert } = require('chai');
const chaiExpect = require('chai').expect;
const randomEmail = require('random-email');
const randomNickname = require('random-lorem');
const randomPassword = require('generate-password');
const credentials = require('../configs/credentials.config');

describe('Pikabu Registration Process. Negative Cases', () => {
  it('Registration with incorrect email', () => {
    const mainPage = new MainPage();
    mainPage.openRegistrationForm();
    mainPage.fillRegistrationFields(
      'random.words',
      randomNickname({ length: 7 }),
      randomPassword.generate({
        length: 15,
        numbers: true,
      }),
    );

    mainPage.authSidebar.emailInputError.waitForDisplayed();
    chaiExpect(mainPage.authSidebar.emailInputError.isDisplayed()).to.equal(true);
  });

  it('Registration without nickname', () => {
    const mainPage = new MainPage();
    mainPage.openRegistrationForm();
    mainPage.authSidebar.emailInput.waitForEnabled();
    mainPage.authSidebar.emailInput.setValue(randomEmail({ domain: 'example.com' }));

    mainPage.authSidebar.createAccountButton.waitAndClick();

    mainPage.authSidebar.nicknameInputError.waitForDisplayed();
    assert.equal(mainPage.authSidebar.nicknameInputError.isDisplayed(), true);
  });

  it('Registration with existing email', () => {
    const mainPage = new MainPage();
    mainPage.openRegistrationForm();
    mainPage.fillRegistrationFields(
      credentials.email,
      randomNickname({ length: 7 }),
      randomPassword.generate({
        length: 15,
        numbers: true,
      }),
    );

    mainPage.authSidebar.createAccountButton.waitAndClick();

    mainPage.authSidebar.existingEmailTitle.waitForDisplayed();
    assert.equal(mainPage.authSidebar.existingEmailTitle.isDisplayed(), true);
  });

  it('Registration with existing nickname', () => {
    const mainPage = new MainPage();
    mainPage.openRegistrationForm();
    mainPage.fillRegistrationFields(
      randomEmail({ domain: 'example.com' }),
      credentials.nickname,
      randomPassword.generate({
        length: 15,
        numbers: true,
      }),
    );

    mainPage.authSidebar.createAccountButton.waitAndClick();

    mainPage.authSidebar.nicknameInputError.waitForDisplayed();
    assert.equal(mainPage.authSidebar.nicknameInputError.isDisplayed(), true);
  });
});
