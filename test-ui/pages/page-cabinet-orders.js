/* eslint-disable new-cap */
import { Selector } from 'testcafe'
import { Page } from './page-model'

class CabinetOrdersPage extends Page {
  constructor() {
    super()
    this.titleOfPage = Selector('h1').withText('Мои заказы')
  }
}

export { CabinetOrdersPage }
