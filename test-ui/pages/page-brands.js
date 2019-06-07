/* eslint-disable new-cap */
import { Selector } from 'testcafe'
import { Page } from './page-model'

class BrandsPage extends Page {
  constructor() {
    super()
    this.titleOfPage = Selector('h1').withText('Бренды')
  }
}

export { BrandsPage }
