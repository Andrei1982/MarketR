/* eslint-disable new-cap */
import { Page, locate } from './page-model'

class PassRecoveryModal extends Page {
  constructor() {
    super()
    this.title = locate('//div[@class="src-components-Modal-_header"]/span')
    this.inputEmail = locate('//input[@name="email"]')
    this.recoveryButton = locate('//button[contains(@class,"src-components-PopupPasswordForget-_button")]')
    this.closeButton = locate('//div[@class="src-components-Modal-_close"]/div')
  }
}

export { PassRecoveryModal }
