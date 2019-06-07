/* eslint-disable new-cap */
import { Selector } from 'testcafe'
import { Page, locate } from './page-model'

class PartnerOrdersPage extends Page {
  constructor() {
    super()
    this.titleOfPage = Selector('h1').withText('Список заказов')
    this.inputSearch = Selector('input').withAttribute('placeholder', 'Поиск по номеру заказа')
    this.findButton = Selector('button').withText('Найти')
    this.orderNumber = locate('//div[contains(@class, "src-components-PartnerOrderList-_td_orderNumber")]/div/span')
    this.orderStatus = locate('//div[contains(@class, "src-components-PartnerOrderList-_td_status")]/div')
    this.orderClient = locate('//div[contains(@class, "src-components-PartnerOrderList-_td_client")]')
    this.statusSelect = Selector('p').withText('Статусы:').nextSibling()
    this.clientSelect = Selector('p').withText('Клиент:').nextSibling()
    this.selectOption = Selector('li')
    this.limitOrderItemsButton = locate('//div[contains(@class, "src-components-Pagination-_limitButtons_partner")]/button')
    this.itemOrder = locate('//div[contains(@class, "src-components-PartnerOrderList-_tr")]')
    this.newOrdersCount = Selector('.src-components-PartnerNav-_Count')
  }
}

export { PartnerOrdersPage }
