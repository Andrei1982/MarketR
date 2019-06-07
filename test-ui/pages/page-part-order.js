/* eslint-disable new-cap */
import { Selector } from 'testcafe'
import { Page, locate } from './page-model'
import config from '../test-config.js'

class PartnerOrderPage extends Page {
  constructor() {
    super()
    this.statusOrder = locate('//span[contains(@class, "src-components-PartnerOrderDetails-PartnerOrderBlock-_status")]/p')
    this.codeOfGood = locate('//button[@class="src-components-CopyPopup-_copyButton"]')
    this.codeOfGoodPopup = Selector('div').withText(config.notice.copyPopup)
    this.photoOfGoodIcon = locate('//div[@class="src-components-OrderTableRow-_iconWrapper"]')
    this.photoOfGoodPopup = locate('//div[@class="src-components-PopupImage-_imageWrapper"]')
    this.nameOfGoodLink = locate('//a[@class="src-components-OrderTableRow-_name"]')
    this.acceptButton = Selector('button span').withText('Принять')
    this.rejectButton = Selector('button span').withText('Отклонить')
    this.toBasketButton = Selector('button span').withText('В корзину РЦ')
    this.executeButton = Selector('button span').withText('Исполнить')
  }
}

export { PartnerOrderPage }
