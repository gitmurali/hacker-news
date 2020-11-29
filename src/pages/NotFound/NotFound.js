import React from 'react'

import styles from './NotFound.scss'

/* A place holder page when the route not found */
const NotFound = () => (
  <div className={styles['not-found']}>
    <div className={styles['image-wrapper']}>
      Page not found
    </div>
  </div>
)

export default NotFound
