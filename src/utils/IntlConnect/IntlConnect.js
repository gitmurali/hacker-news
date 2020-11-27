import React from 'react'

import translations from '@translations'
import moment from 'moment'
import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  let cultureCode = 'en' || localStorage.getItem('language')

  if (!cultureCode) {
    cultureCode = 'en'
  } else {
    if (localStorage.getItem('language') !== 'en') {
      cultureCode = localStorage.getItem('language')
    }
  }

  moment.locale(cultureCode)

  const messages = translations[cultureCode]

  return { locale: cultureCode, messages, textComponent: React.Fragment }
}

export default connect(mapStateToProps)(IntlProvider)
