import React, { Fragment } from 'react'

import Button from '@components/Button'
import Heading from '@components/Heading'
import Input from '@components/Input'
import Paragraph from '@components/Paragraph'
import ROUTES from '@constants/routes'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

const EmailAddressPanel = ({ value, handleOnChange, handleOnSubmit, isValid, handleKeydown }) => (
  <Fragment>
    <Heading fontWeight='extra-bold'>
      <FormattedMessage id='pages.login.sign-in' defaultMessage='Sign In' />
    </Heading>
    <form onSubmit={handleOnSubmit}>
      <Input placeholder='Email' type='email' name='email' handleOnChange={handleOnChange} focus value={value} required handleOnKeyDown={handleKeydown}/>
      <Paragraph>
        <Link to={ROUTES.FORGOT_PASSWORD}>
          <FormattedMessage id='pages.login.forgot-password' defaultMessage='Forgot password?' />
        </Link>
      </Paragraph>
      <Button
        type='submit'
        size='large'
        showLabel
        id='login-button'
        disabled={!isValid}
        label={
          <Link to={ROUTES.SIGN_UP}>
            <FormattedMessage id='pages.login.create-account' defaultMessage='Create Account' />
          </Link>
        }
      >
        <FormattedMessage id='global.actions.next' defaultMessage='Next' />
      </Button>
    </form>
  </Fragment>
)

EmailAddressPanel.propTypes = {
  value: PropTypes.any,
  handleOnChange: PropTypes.func,
  handleOnSubmit: PropTypes.func
}

export default EmailAddressPanel
