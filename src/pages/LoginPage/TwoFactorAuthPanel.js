import React, { Fragment } from 'react'

import Button from '@components/Button'
import Heading from '@components/Heading'
import Input from '@components/Input'
import Paragraph from '@components/Paragraph'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

import styles from './LoginPage.scss'

const TwoFactorAuthPanel = ({ value, handleOnChange, handleOnSubmit, errors, handleResendAuth, notification, isValid }) => (
  <Fragment>
    <Heading fontWeight='extra-bold'>
      <FormattedMessage id='pages.login.sign-in' defaultMessage='Sign In' />
    </Heading>
    <Paragraph fontWeight='extra-bold'>
      <FormattedMessage id='pages.login.sent-code' defaultMessage='We sent a code to your phone' />
    </Paragraph>
    <Paragraph>Check your messages and enter the 6 digit code</Paragraph>
    <form onSubmit={handleOnSubmit}>
      <Input placeholder='code' type='number' name='code' handleOnChange={handleOnChange} value={value} />
      <div className={styles.messagesContainer}>
        {errors && <span className={styles.error}>{errors}</span>}
        {notification && <span className={styles.notification}>{notification}</span>}
      </div>
      <Button
        type='submit'
        size='large'
        showLabel
        disabled={!isValid}
        label={
          <Link to='#' onClick={handleResendAuth}>
            Resend Code
          </Link>
        }
      >
        <FormattedMessage id='global.actions.next' defaultMessage='Next' />
      </Button>
    </form>
  </Fragment>
)
TwoFactorAuthPanel.propTypes = {
  value: PropTypes.any,
  handleOnChange: PropTypes.func,
  handleResendAuth: PropTypes.func,
  errors: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  handleOnSubmit: PropTypes.func
}
export default TwoFactorAuthPanel
