/* eslint-disable new-cap */
import { Selector } from 'testcafe'
import xPathToCss from 'xpath-to-css'

const locate = xpath => Selector(xPathToCss(xpath))

class Page {
  static promiseWaterfall = callbacks =>
    callbacks.reduce((accumulator, callback) => accumulator.then(callback), Promise.resolve())
}

export { Page, locate }
