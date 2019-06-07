/* eslint-disable new-cap */
import { Selector } from 'testcafe'
import ReactSelector from 'testcafe-react-selectors'
import { Page, locate } from './page-model'

class PartnerSettingsSettingsPage extends Page {
  constructor() {
    super()
    this.titleOfPage = Selector('h1').withText('Настройки магазина')
    // this.inputShopLink = Selector('input').withAttribute('name', 'settings.shopLink')
    this.inputShopLink = Selector('input')
    this.noticeShopLinkField = locate('//a[contains(@class, "src-components-MySettings-_personalLink")]')
    // this.inputShopLink = ReactSelector('MySettings form div div div input')
  }
}

export { PartnerSettingsSettingsPage }
