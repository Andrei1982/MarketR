/* eslint-disable new-cap */
import { Selector } from 'testcafe'
import { Page, locate } from './page-model'

class BasketPage extends Page {
  constructor() {
    super()
    this.removeGoodsButton = Selector('button span').withText('Очистить корзину')
    this.continueShoppingButton = locate('//a[@class="src-components-Basket-EmptyBasket-_button"]')
    this.removeItemButton = locate('//button[@class="src-components-Basket-BasketItem-_remove"]')
    this.listOfItems = locate('//div[@class="src-components-Table-_table"]')
    this.itemOfList = locate('//div[@class="src-components-Table-_table"]/div')
    this.emptyBasketNotice = locate('//div[@class="src-components-Basket-EmptyBasket-_text"]')
    this.submitButton = locate('//button[@class="src-components-Basket-SubmitButton-_SubmitButton"]')
    this.inputComment = locate('//textarea')
    this.successOrderNotice = locate('//h2[@class="src-containers-PageBasket-_successOrderHeading"]')
    this.adressSelect = locate('//div/span//label[@class="src-components-Forms-Select-_label"]')
    this.addAdress = Selector('li div').withText('+ Добавить адрес')
  }
}

export { BasketPage }
