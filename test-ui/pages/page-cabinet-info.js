/* eslint-disable  new-cap */
import { Selector } from 'testcafe'
import { Page, locate } from './page-model'

class CabinetInfoPage extends Page {
  constructor() {
    super()
    this.titleOfPage = Selector('h1').withText('Мои данные')
    this.addAdressButton = Selector('span').withText('Добавить')
    this.changeAdressButton = locate('//div[contains(@class,"changeButton")]/button')
    this.deleteAdressButton = locate('//div[contains(@class,"deleteButton")]/button')
    this.fieldEmailInAdress = locate('//div[contains(@class,"field_emaile")]')
    this.modalDeleteButton = locate('//div[contains(@class,"AgreeModal")]/button[position()=1]')
    this.listOfAdress = locate('//div[@class="src-components-UserInfoPanel-_addressesHeader"]/following-sibling::div')
  }
}

export { CabinetInfoPage }
