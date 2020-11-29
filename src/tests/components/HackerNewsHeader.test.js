import React from 'react'

import HackerNewsHeader from '@components/HackerNewsHeader'
import { shallow, mount } from 'enzyme'
import { IntlProvider } from 'react-intl'

describe('Component:HackerNewsHeader', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(
      <IntlProvider locale='en'>
        <HackerNewsHeader />
      </IntlProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('should render header', () => {
    const wrapper = mount(
      <IntlProvider locale='en'>
        <HackerNewsHeader />
      </IntlProvider>
    )
    expect(wrapper.find('a')).toHaveLength(3)
  })
})
