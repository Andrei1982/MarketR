/* eslint-disable new-cap */
import { Page, locate } from './page-model'

class PartnerShopPage extends Page {
  constructor() {
    super()
    this.inputShopName = locate('//input[@name="shop.name"]')
    this.goToHome = locate('//a[@class="src-components-UserPanel-_navLink"]')
    this.title = locate('//div[@class="src-components-Settings-_title"]/h1')
    // this.goToMain = Selector('div').withText('В мой магазин')
    this.goToMain = locate('//div[@class="src-components-Header-_title"]')
  }
}

export { PartnerShopPage }
