import React, { lazy, Suspense } from 'react'

import Loader from '@components/Loader'
import 'react-app-polyfill/ie11'
import { browserUnsupported } from '@helpers/browserUnsupported'
import * as sagas from '@sagas'
import ConnectedIntlProvider from '@utils/IntlConnect'
import ReactDOM from 'react-dom'
import { addLocaleData } from 'react-intl'
import ar from 'react-intl/locale-data/ar'
import de from 'react-intl/locale-data/de'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
import zh from 'react-intl/locale-data/zh'
import { Provider } from 'react-redux'
import { all } from 'redux-saga/effects'

import configureStore from './store/configureStore'

addLocaleData([...en, ...fr, ...zh, ...de, ...ar])

const App = lazy(() => import('./App'))

// prettier-ignore
function * rootSagas () {
  yield all(sagas)
}

const init = async () => {
  const store = await configureStore()
  store.runSaga(rootSagas)

  ReactDOM.hydrate(
    <Provider store={store}>
      {!browserUnsupported() && (
        <ConnectedIntlProvider>
          <Suspense fallback={<Loader />}>
            <App />
          </Suspense>
        </ConnectedIntlProvider>
      )}
    </Provider>,
    document.getElementById('app')
  )
}

export default init()
