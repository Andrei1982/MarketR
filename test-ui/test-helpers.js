/* eslint-disable new-cap, arrow-parens */
import { t } from 'testcafe'
import { MainPage } from './pages/page-main'
import { BasketPage } from './pages/page-basket'
import { Page } from './pages/page-model'
import { PartnerOrdersPage } from './pages/page-part-orders'
import { PartnerOrderPage } from './pages/page-part-order'

const pageMain = new MainPage()
const pageBasket = new BasketPage()
const pagePartnerOrders = new PartnerOrdersPage()
const pagePartnerOrder = new PartnerOrderPage()

const addGoodToBasket = async () =>
  await t
    .click(pageMain.toBasketButton)
    .expect(pageMain.numberGoodsBasket.exists)
      .ok()

const clearBasket = async () =>
  await t
    .click(pageBasket.removeGoodsButton)
    .expect(pageBasket.continueShoppingButton.exists)
      .ok()

const removeGoodsFromBasket = async () => {
  while (await pageBasket.listOfItems.hasChildElements) {
    Page.promiseWaterfall([await t.click(pageBasket.removeItemButton)])
  }
}

const pickOrderStatus = async status =>
  await t
    .click(pagePartnerOrders.statusSelect)
    .click(pagePartnerOrders.selectOption.withText(status))
    .expect(pagePartnerOrders.orderStatus.innerText)
      .contains(status)

const pickLimitOrders = async amount =>
  await t
    .click(pagePartnerOrders.limitOrderItemsButton.withText(amount.toString()))
    .expect(pagePartnerOrders.itemOrder.count)
      .eql(amount + 1)

const pickOrderDetail = async status =>
  await t
    .click(pagePartnerOrders.orderNumber)
    .expect(pagePartnerOrder.statusOrder.innerText)
      .contains(status)

const ejectNumberFromString = str =>
  parseInt(str.replace(/\D+/g, ''), 10) || 0

export {
  addGoodToBasket,
  clearBasket,
  removeGoodsFromBasket,
  pickOrderStatus,
  pickLimitOrders,
  pickOrderDetail,
  ejectNumberFromString
}
