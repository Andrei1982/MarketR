/* eslint-disable new-cap, arrow-parens */
import {
  authorizeClientRole,
  authorizePartnerRole
} from './test-roles'
import {
  addGoodToBasket,
  clearBasket,
  removeGoodsFromBasket,
  pickOrderStatus,
  pickLimitOrders,
  pickOrderDetail,
  ejectNumberFromString
} from './test-helpers'
import { MainPage } from './pages/page-main'
import { Page } from './pages/page-model'
import { CatalogPage } from './pages/page-catalog'
import { BasketPage } from './pages/page-basket'
import { CabinetInfoPage } from './pages/page-cabinet-info'
import { CabinetOrdersPage } from './pages/page-cabinet-orders'
import { CabinetFavoritePage } from './pages/page-cabinet-favorite'
import { BrandsPage } from './pages/page-brands'
import { ContentCompanyPage } from './pages/page-content-company'
import { ContentDeliveryPage } from './pages/page-content-delivery'
import { PartnerOrdersPage } from './pages/page-part-orders'
import { PartnerOrderPage } from './pages/page-part-order'
import { PartnerSettingsSettingsPage } from './pages/page-part-settings-settings'
import { RegistryModal } from './pages/modal-registry'
import { LogInModal } from './pages/modal-login'
import { PassRecoveryModal } from './pages/modal-pass-recovery'
import { NewAddressModal } from './pages/modal-new-address'
import { FeedbackModal } from './pages/modal-feedback'
import { MiniCardModal } from './pages/modal-minicard'
import { ConfirmationModal } from './pages/modal-confirmation'
import config from './test-config.js'

const pageMain = new MainPage()
const pageCatalog = new CatalogPage()
const pageBasket = new BasketPage()
const pageCabinetInfo = new CabinetInfoPage()
const pageCabinetOrders = new CabinetOrdersPage()
const pageCabinetFavorite = new CabinetFavoritePage()
const pageBrands = new BrandsPage()
const pageContentCompany = new ContentCompanyPage()
const pageContentDelivery = new ContentDeliveryPage()
const pagePartnerOrders = new PartnerOrdersPage()
const pagePartnerOrder = new PartnerOrderPage()
const pagePatnerSettingsSettings = new PartnerSettingsSettingsPage()
const modalRegistry = new RegistryModal()
const modalLogin = new LogInModal()
const modalPassRecovery = new PassRecoveryModal()
const modalNewAddress = new NewAddressModal()
const modalFeedback = new FeedbackModal()
const modalMinicard = new MiniCardModal()
const modalConfirmation = new ConfirmationModal()

fixture('9-18OK SMOKE SUITE - НЕАВТОРИЗОВАННЫЙ КЛИЕНТ')
  .page(config.baseURL)
  .afterEach(async (t) =>
    await t.wait(config.timeOut)
  )

test('Регистрация пользователя - физлицо - обязательные поля', async (t) =>
  await t
    .click(pageMain.registryButton)
    .click(modalRegistry.inputSurname)
    .click(modalRegistry.inputName)
    .click(modalRegistry.inputMiddlename)
    .click(modalRegistry.inputPhone)
    .click(modalRegistry.inputEmail)
    .click(modalRegistry.checkboxAgree)
    .expect(modalRegistry.inputSurnameError.exists)
      .ok()
    .expect(modalRegistry.inputNameError.exists)
      .ok()
    .expect(modalRegistry.inputPhoneError.exists)
      .ok()
    .expect(modalRegistry.inputEmailError.exists)
      .ok()
    .click(modalRegistry.closeButton)
)

test('Регистрация пользователя - физлицо - отправить данные', async (t) =>
  await t
    .click(pageMain.registryButton)
    .typeText(modalRegistry.inputSurname, config.userNew.surname)
    .typeText(modalRegistry.inputName, config.userNew.name)
    .typeText(modalRegistry.inputMiddlename, config.userNew.middlename)
    .typeText(modalRegistry.inputPhone, config.userNew.phone)
    .typeText(modalRegistry.inputEmail, config.userNew.email)
    .click(modalRegistry.checkboxAgree)
    .click(modalRegistry.submitButton)
    .expect(modalRegistry.resultNotice.innerText)
      .contains(config.userNew.resultNotice)
    .click(modalRegistry.closeButton)
)

test('Регистрация пользователя - юрлицо - обязательные поля', async (t) =>
  await t
    .click(pageMain.registryButton)
    .click(modalRegistry.inputSurname)
    .click(modalRegistry.inputName)
    .click(modalRegistry.inputMiddlename)
    .click(modalRegistry.inputPhone)
    .click(modalRegistry.inputEmail)
    .click(modalRegistry.checkboxLegalEntyty)
    .click(modalRegistry.inputOrganizationName)
    .click(modalRegistry.inputInn)
    .click(modalRegistry.checkboxAgree)
    .expect(modalRegistry.inputSurnameError.exists)
      .ok()
    .expect(modalRegistry.inputNameError.exists)
      .ok()
    .expect(modalRegistry.inputPhoneError.exists)
      .ok()
    .expect(modalRegistry.inputEmailError.exists)
      .ok()
    .expect(modalRegistry.inputOrganizationNameError.exists)
      .ok()
    .expect(modalRegistry.inputInnError.exists)
      .ok()
    .click(modalRegistry.closeButton)
)

test('Регистрация пользователя - юрлицо - отправить данные', async (t) =>
  await t
    .click(pageMain.registryButton)
    .typeText(modalRegistry.inputSurname, config.userNew.surname)
    .typeText(modalRegistry.inputName, config.userNew.name)
    .typeText(modalRegistry.inputMiddlename, config.userNew.middlename)
    .typeText(modalRegistry.inputPhone, config.userNew.phone)
    .typeText(modalRegistry.inputEmail, config.userNew.emailOrg)
    .click(modalRegistry.checkboxLegalEntyty)
    .typeText(modalRegistry.inputOrganizationName, config.userNew.nameOrganization)
    .typeText(modalRegistry.inputInn, config.userNew.inn)
    .click(modalRegistry.checkboxAgree)
    .click(modalRegistry.submitButton)
    .expect(modalRegistry.resultNotice.innerText)
      .contains(config.userNew.resultNoticeOrg)
    .click(modalRegistry.closeButton)
)

test('Авторизация пользователя - некорректный e-mail', async (t) =>
  await t
    .click(pageMain.entryButton)
    .typeText(modalLogin.inputEmail, config.userClient.loginInc)
    .typeText(modalLogin.inputPassword, config.userClient.password)
    .click(modalLogin.signInButton)
    .expect(modalLogin.inputEmailError.exists)
      .ok()
    .click(modalLogin.closeButton)
)

test('Авторизация пользователя - некорректный пароль', async (t) =>
  await t
    .click(pageMain.entryButton)
    .typeText(modalLogin.inputEmail, config.userClient.login)
    .typeText(modalLogin.inputPassword, config.userClient.passwordInc)
    .click(modalLogin.signInButton)
    .expect(modalLogin.inputEmailError.exists)
      .ok()
    .click(modalLogin.closeButton)
)

test('Авторизация пользователя - забыли пароль', async (t) =>
  await t
    .click(pageMain.entryButton)
    .typeText(modalLogin.inputEmail, config.userClient.login)
    .click(modalLogin.linkForgotPassword)
    .expect(modalPassRecovery.title.exists)
      .ok()
    .click(modalPassRecovery.closeButton)
)

test('Авторизация пользователя - переход в регистрацию', async (t) =>
  await t
    .click(pageMain.entryButton)
    .click(modalLogin.regystryButton)
    .expect(modalRegistry.title.innerText)
      .contains(config.userNew.title)
    .click(modalPassRecovery.closeButton)
)

test('Авторизация пользователя - клиент - валидные креды', async (t) =>
  await t.useRole(authorizeClientRole)
)

test('Авторизация пользователя - партнер - валидные креды', async (t) =>
  await t.useRole(authorizePartnerRole)
)

test('Корзина - добавление товара', async (t) =>
  await addGoodToBasket(t)
)

test('Корзина - удаление товара', async (t) =>
  Page.promiseWaterfall([
    await addGoodToBasket(t),
    await t
      .click(pageMain.numberGoodsBasket)
      .click(pageBasket.removeItemButton)
      .expect(pageBasket.emptyBasketNotice.exists)
        .ok()
  ])
)

test('Корзина - очистить всю корзину', async (t) =>
  Page.promiseWaterfall([
    await addGoodToBasket(t),
    await t
      .click(pageMain.numberGoodsBasket)
      .click(pageBasket.removeGoodsButton)
      .expect(pageBasket.itemOfList.exists)
        .notOk()
  ])
)

test('Корзина - оформить заказ', async (t) =>
  Page.promiseWaterfall([
    await addGoodToBasket(t),
    await t
      .click(pageMain.numberGoodsBasket)
      .click(pageBasket.submitButton)
      .wait(5000)
      .expect(modalLogin.inputEmail.exists)
        .ok()
  ])
)

test('Поиск товара', async (t) =>
  await t
    .click(pageMain.inputSearch)
    .typeText(pageMain.inputSearch, config.search.halfWord)
    .click(pageMain.suggestFirstSearch)
    .expect(pageCatalog.titleResultSuggest.innerText)
      .contains(config.search.word)
)

test('Проверка тултипа ссылки поставщика', async (t) =>
  await t
    .hover(pageMain.inputSupplier)
    .expect(pageMain.supplierTooltip.visible)
    .ok()
)

// ############################################################################### //

fixture('9-18OK SMOKE SUITE - АВТОРИЗОВАННЫЙ КЛИЕНТ')
  .page(config.baseURL)
  .beforeEach(async (t) =>
    await t.useRole(authorizeClientRole)
  )
  .afterEach(async (t) =>
    await t.wait(config.timeOut)
  )

test('Переход в ЛК - Мои данные', async (t) =>
  await t
    .hover(pageMain.userNamePanel)
    .click(pageMain.popupIitemCabinet)
    .expect(pageCabinetInfo.titleOfPage.exists)
      .ok()
)

test('Переход в ЛК - Заказы', async (t) =>
  await t
    .hover(pageMain.userNamePanel)
    .click(pageMain.popupIitemOrders)
    .expect(pageCabinetOrders.titleOfPage.exists)
      .ok()
)

test('Переход в ЛК - Избранное', async (t) =>
  await t
    .hover(pageMain.userNamePanel)
    .click(pageMain.popupIitemFavorite)
    .expect(pageCabinetFavorite.titleOfPage.exists)
      .ok()
)

test('Добавление в избранное', async (t) => {
  const favoriteCount = await pageMain.headerFavoriteCount.innerText
  const countOfFavoriteGoods = ejectNumberFromString(favoriteCount)
  return await t
    .click(pageMain.toFavoriteButton)
    .expect(pageMain.headerFavoriteCount.innerText)
      .contains(countOfFavoriteGoods + 1)
})

test('Корзина - добавление товара', async (t) =>
  await addGoodToBasket(t)
)

test('Корзина - удаление товара', async (t) =>
  Page.promiseWaterfall([
    await addGoodToBasket(t),
    await t.click(pageMain.numberGoodsBasket),
    await removeGoodsFromBasket(t),
    await t.expect(pageBasket.emptyBasketNotice.exists)
            .ok()
  ])
)

test('Корзина - очистить всю корзину', async (t) =>
  Page.promiseWaterfall([
    await addGoodToBasket(t),
    await t.click(pageMain.numberGoodsBasket),
    await clearBasket(t)
  ])
)

test('Корзина - оформить заказ', async (t) =>
  Page.promiseWaterfall([
    await addGoodToBasket(t),
    await t
      .click(pageMain.numberGoodsBasket)
      .typeText(pageBasket.inputComment, config.basket.comment)
      .click(pageBasket.submitButton)
      .expect(pageBasket.successOrderNotice.innerText)
        .contains(config.basket.successNotice)
  ])
)

test('Корзина - добавить адрес - обязательные поля', async (t) =>
  Page.promiseWaterfall([
    await addGoodToBasket(t),
    await t
      .click(pageMain.numberGoodsBasket)
      .click(pageBasket.adressSelect)
      .click(pageBasket.addAdress)
      .click(modalNewAddress.inputRegion)
      .click(modalNewAddress.inputDistrict)
      .click(modalNewAddress.inputCity)
      .click(modalNewAddress.inputStreet)
      .click(modalNewAddress.inputHouse)
      .click(modalNewAddress.inputBuilding)
      .click(modalNewAddress.inputOffice)
      .click(modalNewAddress.inputName)
      .click(modalNewAddress.inputPhone)
      .click(modalNewAddress.inputEmail)
      .expect(modalNewAddress.inputRegionError.exists)
        .ok()
      .expect(modalNewAddress.inputCityError.exists)
        .ok()
      .expect(modalNewAddress.inputStreetError.exists)
        .ok()
      .expect(modalNewAddress.inputHouseError.exists)
        .ok()
      .click(modalRegistry.closeButton)
  ])
)

test('Корзина - добавить адрес - сохранить', async (t) =>
  Page.promiseWaterfall([
    await addGoodToBasket(t),
    await t
      .click(pageMain.numberGoodsBasket)
      .click(pageBasket.adressSelect)
      .click(pageBasket.addAdress)
      .typeText(modalNewAddress.inputRegion, config.adressNew.region)
      .typeText(modalNewAddress.inputCity, config.adressNew.city)
      .typeText(modalNewAddress.inputStreet, config.adressNew.street)
      .typeText(modalNewAddress.inputHouse, config.adressNew.house)
      .typeText(modalNewAddress.inputOffice, config.adressNew.office)
      .typeText(modalNewAddress.inputName, config.adressNew.name)
      .typeText(modalNewAddress.inputPhone, config.adressNew.phone)
      .typeText(modalNewAddress.inputEmail, config.adressNew.email)
      .click(modalNewAddress.saveButton)
      .expect(modalNewAddress.addedAddress.exists)
        .ok()
  ])
)

test('Выход авторизованного пользователя', async (t) =>
  await t
    .hover(pageMain.userNamePanel)
    .click(pageMain.popupIitemQuit)
    .expect(pageMain.entryButton.exists)
      .ok()
)

test('Изменить кол-во товара кнопками Плюс и Минус', async (t) => {
  const valueOfProduct = await pageMain.inputOfProduct.value
  return await t
    .click(pageMain.plusButton)
    .click(pageMain.plusButton)
    .expect(pageMain.inputOfProduct.value)
      .contains(+valueOfProduct + 2)
    .click(pageMain.minusButton)
    .expect(pageMain.inputOfProduct.value)
      .contains(+valueOfProduct + 1)
})

test('Переход на страницу Бренды', async (t) =>
  await t
    .click(pageMain.brendsSidebar)
    .expect(pageBrands.titleOfPage.exists)
      .ok()
)

test('Переход на страницу О компании', async (t) =>
  await t
    .click(pageMain.aboutCompanyLink)
    .expect(pageContentCompany.titleOfPage.exists)
      .ok()
)

test('Переход на страницу Доставка и оплата', async (t) =>
  await t
    .click(pageMain.aboutDeliveryLink)
    .expect(pageContentDelivery.titleOfPage.exists)
      .ok()
)

test('Обратная связь - обязательные поля', async (t) =>
  await t
    .click(pageMain.feedbackLink)
    .click(modalFeedback.inputName)
    .click(modalFeedback.inputEmail)
    .click(modalFeedback.inputPhone)
    .click(modalFeedback.inputMessage)
    .click(modalFeedback.checkboxAgree)
    .expect(modalFeedback.inputNameError.exists)
      .ok()
    .expect(modalFeedback.inputEmailError.exists)
      .ok()
    .expect(modalFeedback.inputMessageError.exists)
      .ok()
    .click(modalFeedback.closeButton)
)

test('Обратная связь - отправить собщение', async (t) =>
  await t
    .click(pageMain.feedbackLink)
    .click(modalFeedback.inputSelectQuestion)
    .click(modalFeedback.itemFirstSelectQuestion)
    .typeText(modalFeedback.inputName, config.feedback.name)
    .typeText(modalFeedback.inputEmail, config.feedback.email)
    .typeText(modalFeedback.inputPhone, config.feedback.phone)
    .typeText(modalFeedback.inputMessage, config.feedback.message)
    .click(modalFeedback.checkboxAgree)
    .click(modalFeedback.submitButton)
    .expect(modalFeedback.resultNotice.exists)
      .ok()
)

test.only('ЛК - Мои данные - добавить адрес', async (t) =>
await t
  .navigateTo(config.baseURL + config.routs.cabinetInfo)
  .click(pageCabinetInfo.addAdressButton)
  .typeText(modalNewAddress.inputRegion, config.adressNew.region)
  .typeText(modalNewAddress.inputCity, config.adressNew.city)
  .typeText(modalNewAddress.inputStreet, config.adressNew.street)
  .typeText(modalNewAddress.inputHouse, config.adressNew.house)
  .typeText(modalNewAddress.inputOffice, config.adressNew.office)
  .typeText(modalNewAddress.inputName, config.adressNew.name)
  .typeText(modalNewAddress.inputPhone, config.adressNew.phone)
  .typeText(modalNewAddress.inputEmail, config.adressNew.email)
  .click(modalNewAddress.saveButton)
  .expect(modalNewAddress.addedAddress.exists)
    .ok()
)

test.only('ЛК - Мои данные - редактировать адрес', async (t) =>
await t
  .navigateTo(config.baseURL + config.routs.cabinetInfo)
  .click(pageCabinetInfo.changeAdressButton)
  .typeText(modalNewAddress.inputEmail, 'new')
  .click(modalNewAddress.saveButton)
  .expect(pageCabinetInfo.fieldEmailInAdress.innerText)
    .contains(config.adressNew.emailChanged)
)

test.skip('ЛК - Мои данные - удалить адрес', async (t) => {
  const countOfAdressItems = await pageCabinetInfo.listOfAdress.child().count
  return await t
    .navigateTo(config.baseURL + config.routs.cabinetInfo)
    .click(pageCabinetInfo.deleteAdressButton)
    .click(pageCabinetInfo.modalDeleteButton)
    .expect(pageCabinetInfo.listOfAdress.child().count)
      .contains(countOfAdressItems - 1)
})

// ############################################################################### //

fixture('9-18OK SMOKE SUITE - АВТОРИЗОВАННЫЙ ПАРТНЕР')
  .page(config.baseURL)
  .beforeEach(async (t) =>
    await t.useRole(authorizePartnerRole)
  )
  .afterEach(async (t) =>
    await t.wait(config.timeOut)
  )

test('Заказы - Поиск заказа', async (t) =>
  await t
    .click(pagePartnerOrders.inputSearch)
    .typeText(pagePartnerOrders.inputSearch, config.search.orderPartner)
    .click(pagePartnerOrders.findButton)
    .expect(pagePartnerOrders.orderNumber.innerText)
      .contains(config.search.orderPartner)
)

test('Заказы - выбор статуса Отменен', async () =>
  await pickOrderStatus('Отменен')
)

test('Заказы - выбор статуса Исполнен', async () =>
  await pickOrderStatus('Исполнен')
)

test('Заказы - выбор статуса В корзине', async () =>
  await pickOrderStatus('В корзине')
)

test('Заказы - выбор статуса Новый', async () =>
  await pickOrderStatus('Новый')
)

test('Заказы - выбор статуса Просмотрен', async () =>
  await pickOrderStatus('Просмотрен')
)

test('Заказы - выбор клиента', async (t) =>
  await t
    .click(pagePartnerOrders.clientSelect)
    .click(pagePartnerOrders.selectOption.withText(config.search.orderClient))
    .expect(pagePartnerOrders.orderClient.innerText)
      .contains(config.search.orderClient)
)

test('Заказы - отобразить заказы - 36', async () =>
  await pickLimitOrders(36)
)

test('Заказы - отобразить заказы - 24', async () =>
  await pickLimitOrders(24)
)

test('Заказы - отобразить заказы - 12', async () =>
  await pickLimitOrders(12)
)

test('Заказы - заказ детально - копировать код', async (t) =>
  Page.promiseWaterfall([
    await pickOrderStatus('Новый'),
    await pickOrderDetail('Новый'),
    await t
      .click(pagePartnerOrder.codeOfGood)
      .expect(pagePartnerOrder.codeOfGoodPopup.exists)
        .ok()
  ])
)

test('Заказы - заказ детально - открыть фото товара', async (t) =>
  Page.promiseWaterfall([
    await pickOrderStatus('Новый'),
    await pickOrderDetail('Новый'),
    await t
      .click(pagePartnerOrder.photoOfGoodIcon)
      .expect(pagePartnerOrder.photoOfGoodPopup.exists)
        .ok()
  ])
)

test('Заказы - заказ детально - открыть мини-карточку товара', async (t) =>
  Page.promiseWaterfall([
    await pickOrderStatus('Новый'),
    await pickOrderDetail('Новый'),
    await t
      .click(pagePartnerOrder.nameOfGoodLink)
      .expect(modalMinicard.modalWraper.exists)
        .ok()
  ])
)

test('Заказы - заказ детально - Новый->Просмотрен', async (t) =>
  Page.promiseWaterfall([
    await pickOrderStatus('Новый'),
    await pickOrderDetail('Новый'),
    await t
      .click(pagePartnerOrder.acceptButton)
      .expect(pagePartnerOrder.statusOrder.innerText)
        .contains('Просмотрен')
  ])
)

test('Заказы - заказ детально - Новый->Отменен', async (t) =>
  Page.promiseWaterfall([
    await pickOrderStatus('Новый'),
    await pickOrderDetail('Новый'),
    await t
      .click(pagePartnerOrder.rejectButton)
      .click(modalConfirmation.rejectButton)
      .expect(pagePartnerOrder.statusOrder.innerText)
        .contains('Отменен')
  ])
)

test('Заказы - заказ детально - Просмотрен->Исполнен', async (t) =>
  Page.promiseWaterfall([
    await pickOrderStatus('Просмотрен'),
    await pickOrderDetail('Просмотрен'),
    await t
      .click(pagePartnerOrder.executeButton)
      .click(modalConfirmation.executeButton)
      .expect(pagePartnerOrder.statusOrder.innerText)
        .contains('Исполнен')
  ])
)

test('Заказы - заказ детально - Просмотрен->Отменен', async (t) =>
  Page.promiseWaterfall([
    await pickOrderStatus('Просмотрен'),
    await pickOrderDetail('Просмотрен'),
    await t
      .click(pagePartnerOrder.rejectButton)
      .click(modalConfirmation.rejectButton)
      .expect(pagePartnerOrder.statusOrder.innerText)
        .contains('Отменен')
  ])
)

test('Заказы - заказ детально - Просмотрен->В корзину РЦ', async (t) =>
  Page.promiseWaterfall([
    await pickOrderStatus('Просмотрен'),
    await pickOrderDetail('Просмотрен'),
    await t
      .click(pagePartnerOrder.toBasketButton)
      .click(modalConfirmation.returnToListButton)
      .expect(pagePartnerOrders.orderStatus.innerText)
        .contains('Просмотрен')
  ])
)

test('Заказы - заказ детально - Просмотрен->Отмена выполнения', async (t) =>
  Page.promiseWaterfall([
    await pickOrderStatus('Просмотрен'),
    await pickOrderDetail('Просмотрен'),
    await t
      .click(pagePartnerOrder.executeButton)
      .click(modalConfirmation.closeButtonNew)
      .expect(pagePartnerOrder.statusOrder.innerText)
        .contains('Просмотрен')
  ])
)

test('Заказы - заказ детально - Исполнен->Отменен', async (t) =>
  Page.promiseWaterfall([
    await pickOrderStatus('Исполнен'),
    await pickOrderDetail('Исполнен'),
    await t
      .click(pagePartnerOrder.rejectButton)
      .click(modalConfirmation.rejectButton)
      .expect(pagePartnerOrder.statusOrder.innerText)
        .contains('Отменен')
  ])
)

test('Заказы - заказ детально - В корзине->Исполнен', async (t) =>
  Page.promiseWaterfall([
    await pickOrderStatus('В корзине'),
    await pickOrderDetail('В корзине'),
    await t
      .click(pagePartnerOrder.executeButton)
      .click(modalConfirmation.executeButton)
      .expect(pagePartnerOrder.statusOrder.innerText)
        .contains('Исполнен')
  ])
)

test('Заказы - заказ детально - В корзине->Отменен', async (t) =>
  Page.promiseWaterfall([
    await pickOrderStatus('В корзине'),
    await pickOrderDetail('В корзине'),
    await t
      .click(pagePartnerOrder.rejectButton)
      .click(modalConfirmation.rejectButton)
      .expect(pagePartnerOrder.statusOrder.innerText)
        .contains('Отменен')
  ])
)

test('Заказы - изменение кол-ва новых заказов при смене статуса', async (t) => {
  const countOfNewOrders = await pagePartnerOrders.newOrdersCount.innerText
  Page.promiseWaterfall([
    await pickOrderStatus('Новый'),
    await pickOrderDetail('Новый'),
    await t
      .click(pagePartnerOrder.acceptButton)
      .expect(pagePartnerOrder.statusOrder.innerText)
        .contains('Просмотрен')
      .expect(pagePartnerOrders.newOrdersCount.innerText)
        .contains(countOfNewOrders - 1)
  ])
})

// ОШИБКА РЕАКТА Minified React error #32
test.skip('Настройка магазина - настройки - удалить персональную ссылку', async (t) =>
  Page.promiseWaterfall([
    await t
      .navigateTo(config.baseURL + config.routs.settingsMySettings)
      .selectText(pagePatnerSettingsSettings.inputShopLink),
    await t
      .pressKey('delete')
      .expect(pagePatnerSettingsSettings.noticeShopLinkField.innerText)
        .contains(config.notice.shopLink)
  ])
)
