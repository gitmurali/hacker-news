import React, { Component, Fragment } from 'react'

import ErrorPage from '@pages/ErrorPage'
import HackerNewsPage from '@pages/HackerNewsPage'
import NotFound from '@pages/NotFound'
import { Route, Switch, withRouter } from 'react-router-dom'

import styles from './Layout.scss'

class Layout extends Component {
  render () {
    return (
      <Fragment>
        <div className={styles.contentContainer}>
          <ErrorPage>
            <div>
              <Switch>
                <Route path='/' component={HackerNewsPage} exact />
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </ErrorPage>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(Layout)
