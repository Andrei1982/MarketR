/* eslint-disable new-cap */
import { Selector } from 'testcafe'
import { Page, locate } from './page-model'
import config from '../test-config.js'

class RegistryModal extends Page {
  constructor() {
    super()
    this.title = locate('//div[@class="src-components-Modal-_header"]/span')
    this.inputSurname = locate('//input[@name="surname"]')
    this.inputName = locate('//input[@name="name"]')
    this.inputMiddlename = locate('//input[@name="middle_name"]')
    this.inputPhone = locate('//input[@name="phone"]')
    this.inputEmail = locate('//input[@name="email"]')
    this.checkboxLegalEntyty = locate('//label[contains(@class,"src-components-PopupRegistration-_label")]/div')
    this.checkboxAgree = locate('//label[contains(@class,"src-components-PopupRegistration-_agreeBox")]/div')
    this.inputOrganizationName = locate('//input[@name="organization_name"]')
    this.inputInn = locate('//input[@name="inn"]')
    this.submitButton = locate('//div[@class="src-components-PopupRegistration-_footer"]/button')
    this.resultNotice = locate('//h2[@class="src-components-PopupRegistration-_title"]')
    this.closeButton = locate('//div[@class="src-components-Modal-_close"]/div')
    this.inputSurnameError = Selector('div').withText(config.error.reg.surname)
    this.inputNameError = Selector('div').withText(config.error.reg.name)
    this.inputPhoneError = Selector('div').withText(config.error.reg.phone)
    this.inputEmailError = Selector('div').withText(config.error.reg.email)
    this.inputOrganizationNameError = Selector('div').withText(config.error.reg.org)
    this.inputInnError = Selector('div').withText(config.error.reg.inn)
  }
}

export { RegistryModal }
