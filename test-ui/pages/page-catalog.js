/* eslint-disable new-cap */
import { Page, locate } from './page-model'

class CatalogPage extends Page {
  constructor() {
    super()
    this.titleResultSuggest = locate('//h1[@class="src-components-Title-_title"]/span')
  }
}

export { CatalogPage }
