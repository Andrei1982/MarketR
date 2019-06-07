/* eslint-disable new-cap */
import { Selector } from 'testcafe'
import { Page, locate } from './page-model'

class MiniCardModal extends Page {
  constructor() {
    super()
    this.modalWraper = locate('//div[contains(@class,"src-components-Modal-_mod_miniCard")]')
    this.title = Selector('span.src-components-Modal-_title')
  }
}

export { MiniCardModal }
