/* eslint-disable new-cap */
import { Selector } from 'testcafe'
import { Page, locate } from './page-model'
import config from '../test-config'

class LogInModal extends Page {
  constructor() {
    super()
    this.inputEmail = locate('//input[@name="email"]')
    this.inputPassword = locate('//input[@name="password"]')
    this.linkForgotPassword = locate('//a[@class="src-components-PopupAuth-_forgotPassword"]')
    this.signInButton = Selector('button').withText('Войти')
    this.regystryButton = locate('//div[contains(@class,"src-components-PopupAuth-_wrapper")]/a')
    this.closeButton = locate('//div[@class="src-components-Modal-_close"]/div')
    this.inputEmailError = Selector('div').withText(config.error.login.login)
  }
}

export { LogInModal }
