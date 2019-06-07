/* eslint-disable new-cap */
import { Selector } from 'testcafe'
import { Page, locate } from './page-model'
import config from '../test-config.js'

class FeedbackModal extends Page {
  constructor() {
    super()
    this.title = Selector('span').withText(config.feedback.title)
    this.inputSelectQuestion = Selector('input').withAttribute('placeholder', 'Выбрать вопрос…')
    this.itemFirstSelectQuestion = Selector('li').withText('Вопрос по работе сайта')
    this.inputName = locate('//input[@name="name_user"]')
    this.inputEmail = locate('//input[@name="email"]')
    this.inputPhone = locate('//input[@name="phone"]')
    this.inputMessage = locate('//textarea[@name="message"]')
    this.checkboxAgree = locate('//div[@class="src-components-Checkbox-_tick src-components-Icon-_icon"]')
    this.submitButton = Selector('button').withText('Отправить сообщение')
    this.inputNameError = Selector('div').withText(config.error.feedback.name)
    this.inputEmailError = Selector('div').withText(config.error.feedback.email)
    this.inputMessageError = Selector('div').withText(config.error.feedback.message)
    this.resultNotice = Selector('div').withText(config.feedback.successNotice)
    this.closeButton = locate('//div[@class="src-components-Modal-_close"]/div')
  }
}

export { FeedbackModal }
