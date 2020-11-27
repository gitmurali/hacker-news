import React from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import styles from './Loader.scss'

const Loader = ({ opaque, isPageLoader, children, size, isGlobal }) => {
  const loaderProps = cx(styles['component-loader'], {
    [styles['component-loader-opaque']]: opaque,
    [styles['component-loader-page']]: isPageLoader,
    [styles['component-loader--is-global']]: isGlobal
  })

  return (
    <div className={loaderProps}>
      {children && <span className={styles.componentLoaderText}>{children}</span>}
    </div>
  )
}

Loader.defaultProps = {
  children: '',
  opaque: false,
  isPageLoader: false,
  size: 'small',
  isGlobal: false
}

Loader.propTypes = {
  children: PropTypes.any,
  opaque: PropTypes.bool,
  isPageLoader: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isGlobal: PropTypes.bool
}

export default Loader
