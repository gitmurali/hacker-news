import React, { Component } from 'react'

import Page from '@components/Page'
import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'

// prettier-ignore
export class LoginPage extends Component {
  render () {
    console.log('in login page..')
    return (
      <Page contentCentered>
        Murali
      </Page>
    )
  }
}

const mapStateToProps = ({ user, auth }) => ({
  user,
  auth
})

const mapDispatchToProps = dispatch => ({
  // userLoginFormRequest: data => dispatch(userLoginFormRequest(data)),
  // handleResendTwoFactorAuthCode: data => dispatch(resendTwoFactorAuthCodeRequest(data))
})

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(LoginPage))
