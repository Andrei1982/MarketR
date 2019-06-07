/* eslint-disable new-cap */
import { Selector } from 'testcafe'
import { Page, locate } from './page-model'
import config from '../test-config.js'

class NewAddressModal extends Page {
  constructor() {
    super()
    this.inputRegion = locate('//input[@name="region"]')
    this.inputDistrict = locate('//input[@name="district"]')
    this.inputCity = locate('//input[@name="city"]')
    this.inputStreet = locate('//input[@name="street"]')
    this.inputHouse = locate('//input[@name="house"]')
    this.inputBuilding = locate('//input[@name="building"]')
    this.inputOffice = locate('//input[@name="office"]')
    this.inputName = locate('//input[@name="name"]')
    this.inputPhone = locate('//input[@name="phone"]')
    this.inputEmail = locate('//input[@name="email"]')
    this.saveButton = Selector('button span').withText('Сохранить')
    this.inputRegionError = Selector('div').withText('Не указана область')
    this.inputCityError = Selector('div').withText('Не указан город')
    this.inputStreetError = Selector('div').withText('Не указана улица')
    this.inputHouseError = Selector('div').withText('Дом')
    this.closeButton = locate('//div[@class="src-components-Modal-_close"]/div')
    this.addedAddress = Selector('div').withText(config.adressNew.addedAddress)
  }
}

export { NewAddressModal }
