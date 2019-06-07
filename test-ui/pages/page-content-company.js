/* eslint-disable new-cap */
import { Selector } from 'testcafe'
import { Page } from './page-model'

class ContentCompanyPage extends Page {
  constructor() {
    super()
    this.titleOfPage = Selector('h1').withText('О компании')
  }
}

export { ContentCompanyPage }
