import React from 'react'

import styles from './StyleGuideRenderer.scss'

const StyleGuideRenderer = ({ toc, children }) => (
  <main className={styles.main}>
    <div className={styles.sidebar}>
      <h1 className={styles.title}>VSuite</h1>
      {toc}
    </div>
    <div className={styles.content}>
      {children}
      <footer className={styles.footer}>
      </footer>
    </div>
  </main>
)

export default StyleGuideRenderer
