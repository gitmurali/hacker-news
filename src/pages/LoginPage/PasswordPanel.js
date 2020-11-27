import React, { Fragment } from 'react'

import Button from '@components/Button'
import Heading from '@components/Heading'
import Input from '@components/Input'
import Loader from '@components/Loader'
import ROUTES from '@constants/routes'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

import styles from './LoginPage.scss'

const PasswordPanel = ({
  value,
  handleOnChange,
  handleOnSubmit,
  errors,
  isValid,
  emailAddress,
  handleOnClickBack,
  isLoggingIn
}) => {
  return (
    <Fragment>
      <Heading fontWeight='extra-bold'>
        <FormattedMessage id='pages.login.sign-in' defaultMessage='Sign In' />
      </Heading>
      {emailAddress && (
        <div className={styles.passwordPanelEmail}>
          <div className={styles['email-link-wrapper']}>
            <a className={styles['email-link']} onClick={handleOnClickBack}>
              {emailAddress}
            </a>
            <span className={styles['email-link-helper']}>Click to change email address</span>
          </div>
        </div>
      )}
      <form onSubmit={handleOnSubmit}>
        {isLoggingIn && <Loader size='medium' />}
        <Input
          placeholder='password'
          type='password'
          name='password'
          handleOnChange={handleOnChange}
          value={value}
          required
        />
        {errors && (
          <span data-cy='error-message' className={styles['login-error-message']}>
            {errors}
          </span>
        )}
        <Button
          type='submit'
          size='large'
          id='login-password'
          showLabel
          disabled={!isValid}
          label={
            <Link to={ROUTES.FORGOT_PASSWORD}>
              <FormattedMessage id='pages.login.forgot-password' defaultMessage='Forgot Password?' />
            </Link>
          }
        >
          <FormattedMessage id='global.actions.continue' defaultMessage='Continue' />
        </Button>
      </form>
    </Fragment>
  )
}

PasswordPanel.propTypes = {
  value: PropTypes.any,
  handleOnChange: PropTypes.func,
  errors: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  handleOnSubmit: PropTypes.func,
  handleOnClickBack: PropTypes.func
}

export default PasswordPanel
