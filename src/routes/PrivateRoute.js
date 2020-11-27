import React from 'react'

import ROUTES from '@constants/routes'
import { isLoggedIn } from '@helpers/user'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

/* prettier-ignore */
function PrivateRoute ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.LOGIN,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.any,
  rest: PropTypes.any
}

export default PrivateRoute
