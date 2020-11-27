import React from 'react'

import BrowserSupportMessage from '@components/BrowserSupportMessage'
import ConnectedIntlProvider from '@utils/IntlConnect'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureMockStore from 'redux-mock-store'

import App from '../App'

jest.mock('detect-browser', () => ({
  detect: () => ({
    version: 35,
    name: 'chrome'
  })
}))
const mockStore = configureMockStore()
describe('App Component', () => {
  let store
  beforeEach(() => {
    store = mockStore({})
  })
  test('Should Render App', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ConnectedIntlProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ConnectedIntlProvider>
      </Provider>)
    expect(wrapper).toMatchSnapshot()
  })

  test('Should show the unsupported browser message', () => {
    const message = shallow(<BrowserSupportMessage />)
    expect(message).toMatchSnapshot()
  })
})
