import { browsers } from '@constants/browsers'
import { detect } from 'detect-browser'

export const browserUnsupported = () => {
  const browser = detect()

  const version = parseInt(browser.version)

  if (browser.name === browsers.firefox) {
    if (version < 35) {
      return true
    }
  } else if (browser.name === browsers.chrome) {
    if (version < 40) {
      return true
    }
  } else if (browser.name === browsers.edge) {
    if (version <= 18) {
      return true
    }
  } else if (browser.name === browsers.ie) {
    if (version <= 11) {
      return true
    }
  } else if (browser.name === browsers.safari) {
    if (version < 9) {
      return true
    }
  } else {
    return false
  }
}
