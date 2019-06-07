/* eslint-disable new-cap, arrow-parens  */
import { Role, t } from 'testcafe'
import { MainPage } from './pages/page-main'
import { LogInModal } from './pages/modal-login'
import { PartnerOrdersPage } from './pages/page-part-orders'
import config from './test-config.js'

const pageMain = new MainPage()
const pagePartnerOrders = new PartnerOrdersPage()
const modalLogin = new LogInModal()

const authorizeClient = async () =>
  await t
    .click(pageMain.entryButton)
    .typeText(modalLogin.inputEmail, config.userClient.login)
    .typeText(modalLogin.inputPassword, config.userClient.password)
    .click(modalLogin.signInButton)
    .expect(pageMain.userName.innerText)
      .contains(config.userClient.name)

// роль для клиента привязанного к партнеру, не привязанный клиент переходит на вкалдку магазин
const authorizePartner = async () =>
  await t
    .click(pageMain.entryButton)
    .typeText(modalLogin.inputEmail, config.userPartner.login)
    .typeText(modalLogin.inputPassword, config.userPartner.password)
    .click(modalLogin.signInButton)
    .expect(pagePartnerOrders.titleOfPage.exists)
      .ok()

const authorizeClientRole = Role(config.baseURL, authorizeClient)
const authorizePartnerRole = Role(config.baseURL, authorizePartner, { preserveUrl: true })

export {
  authorizeClientRole,
  authorizePartnerRole
}
