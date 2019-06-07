/* eslint-disable new-cap */
import { Selector } from 'testcafe'
import { Page, locate } from './page-model'

class ConfirmationModal extends Page {
  constructor() {
    super()
    this.modalWraper = locate('//div[contains(@class, "src-components-Modal-_modal")]') // различные компоненты одного модального окна
    this.rejectButton = Selector('.src-components-DialogModal-_buttonContainer button span').withText('Отклонить')
    this.closeButton = Selector('.src-components-DialogModal-_buttonContainer button span').withText('Закрыть')
    this.executeButton = Selector('.src-components-PartnerOrderDetails-PartnerOrderModal-_buttonBlock a').withText('Исполнить')
    this.closeButtonNew = Selector('.src-components-PartnerOrderDetails-PartnerOrderModal-_buttonBlock span p')
    this.returnToListButton = Selector('p').withText('К списку заказов')
  }
}

export { ConfirmationModal }
