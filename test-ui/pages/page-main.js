/* eslint-disable new-cap */
import { Selector } from 'testcafe'
import { Page, locate } from './page-model'
import config from '../test-config.js'

class MainPage extends Page {
  constructor() {
    super()
    this.registryButton = locate('//a[@type="button"][1]')
    this.entryButton = Selector('.src-components-UserPanel-_link').withText('Вход')
    this.userName = Selector('.src-components-UserPanel-_userPanelUser').withText(config.userClient.name)
    this.userNamePanel = locate('//div[@class="src-components-UserPanel-_userPanelMenu"]')
    this.inputSearch = Selector('input.src-components-Forms-Select-_field')
    this.suggestFirstSearch = locate('//li[@class="src-components-Forms-Select-_item undefined"][1]')
    this.toBasketButton = Selector('button').withText('В корзину')
    this.numberGoodsBasket = locate('//span[@class="src-components-Header-HeaderInfo-_productNumber"]')
    this.popupIitemCabinet = locate('//ul/li[1]')
    this.popupIitemOrders = locate('//ul/li[2]')
    this.popupIitemFavorite = locate('//ul/li[3]')
    this.popupIitemQuit = locate('//ul/li[4]')
    this.companyName = locate('//a[@class="src-components-Header-HeaderContacts-_linkDescrOffice"]')
    this.inputSupplier = Selector('input').withAttribute('placeholder', 'Введите индивидуальную ссылку поставщика')
    this.supplierTooltip = Selector('.src-components-SupplierField-_notice')
    this.inputOfProduct = Selector('.src-components-OrderButton-_orderInputBase')
    this.plusButton = locate('//div[contains(@class,"src-components-OrderButton-_orderButton")]/div[2]')
    this.minusButton = locate('//div[contains(@class,"src-components-OrderButton-_buttonLeftBase")]')
    this.brendsSidebar = Selector('a').withText('Бренды')
    this.aboutCompanyLink = Selector('a').withText('О компании')
    this.aboutDeliveryLink = Selector('a').withText('Доставка и оплата')
    this.feedbackLink = Selector('a').withText('Обратная связь')
    this.headerFavoriteCount = Selector('span').withText('Избранное')
    this.toFavoriteButton = Selector('button').withText('В избранное')
  }
}

export { MainPage }
