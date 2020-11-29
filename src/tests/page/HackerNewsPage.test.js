import React from 'react'

import HackerNewsPage from '@pages/HackerNewsPage'
import ConnectedIntlProvider from '@utils/IntlConnect/IntlConnect'
import { shallow, mount } from 'enzyme'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()
describe('Component:HackerNewsPage', () => {
  let store
  beforeEach(() => {
    store = mockStore({})
  })
  test('should match snapshot', () => {
    const wrapper = shallow(
      <IntlProvider locale='en'>
        <HackerNewsPage />
      </IntlProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('should render feeds', () => {
    const temp = {
      hackerNews: {
        hits: []
      }
    }
    const noop = () => {}
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedIntlProvider>
          <BrowserRouter>
            <HackerNewsPage hackerNews={temp} onload={noop} handleMore={noop}/>
          </BrowserRouter>
        </ConnectedIntlProvider>
      </Provider>
    )
    expect(wrapper.find('NewsFeeds')).toHaveLength(1)
  })
})
