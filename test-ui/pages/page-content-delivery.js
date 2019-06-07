/* eslint-disable new-cap */
import { Selector } from 'testcafe'
import { Page } from './page-model'

class ContentDeliveryPage extends Page {
  constructor() {
    super()
    this.titleOfPage = Selector('h1').withText('Доставка и оплата')
  }
}

export { ContentDeliveryPage }
