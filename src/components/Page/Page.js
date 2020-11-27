import React from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import styles from './Page.scss'

const Sidebar = props => <div className={styles['page-sidebar']}>{props.children}</div>

const Page = ({ children, contentCentered, padded, portal, sidebar, ...props }) => {
  const pageProps = cx(props.className, {
    [styles['page-wrapper']]: true,
    [styles['page-wrapper-content-centered']]: contentCentered,
    [styles['page-wrapper-padded']]: padded,
    [styles['page-wrapper-portal']]: true
  })

  const pageContentProps = cx(props.pageClassName, {
    [styles['page-content']]: true,
    [styles['page-content-with-sidebar']]: sidebar
  })

  return (
    <div className={pageProps}>
      {sidebar &&
        React.Children.map(
          children,
          child => {
            return React.cloneElement(child, { ...props, className: pageContentProps })
          },
          {}
        )}
      {!sidebar && <div className={pageContentProps}>{children}</div>}
    </div>
  )
}

Page.Sidebar = Sidebar

Page.defaultProps = {
  sidebar: false
}

Page.propTypes = {
  children: PropTypes.any.isRequired,
  sidebar: PropTypes.bool
}

export default Page
