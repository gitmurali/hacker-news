import React, { Component } from 'react'

import Page from '@components/Page'
import { history } from '@routes/history'
import { injectIntl, FormattedMessage } from 'react-intl'

import styles from './ErrorPage.scss'

class ErrorPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  // eslint-disable-next-line handle-callback-err
  componentDidCatch (error, errorInfo) {
    history.listen((location, action) => {
      if (action === 'PUSH' || action === 'POP') {
        this.setState({
          hasError: false
        })
      }
    })
  }

  removeError = () => {
    this.setState({ hasError: false })
  }

  render () {
    if (this.state.hasError) {
      return (
        <Page contentCentered padded>
          <div className={styles.errorPage}>
            <div className={styles.imageWrapper}>
              <FormattedMessage
                id='pages.error-page.title'
                defaultMessage='This is embarrassing! Something went wrong.'
              />
            </div>
          </div>
        </Page>
      )
    }

    return this.props.children
  }
}

export default injectIntl(ErrorPage)
