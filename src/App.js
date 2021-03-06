import React, { Component, lazy } from 'react'

import '@resources/scss/style.scss'
import { history } from '@routes/history'
import cx from 'classnames'
import { injectIntl } from 'react-intl'
import { Router } from 'react-router-dom'

const Layout = lazy(() => import('@containers/Layout'))

// prettier-ignore
class App extends Component {
  render () {
    const { intl } = this.props
    const appClass = cx({
      arabic: intl.locale === 'ar'
    })

    return (
      <div className={appClass}>
        <Router history={history}>
          {/* fallback loader */}
          {/* <Suspense fallback={}> */}
          <Layout />
          {/* </Suspense> */}
        </Router>
      </div>
    )
  }
}

export default injectIntl(App)
