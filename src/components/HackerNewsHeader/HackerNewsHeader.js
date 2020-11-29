import React, { Fragment } from 'react'

import HackerNewsLogo from '@resources/images/y18.gif'

import styles from './HackerNewsHeader.scss'

const HackerNewsHeader = () => {
  return (
    <Fragment>
      <header>
        <h1>Hacker News</h1>
      </header>
      <div className={styles.header}>
        <img src={HackerNewsLogo} className={styles.logo} />
        <a href='#'>
          <span>top</span>
        </a>
        <a href='#'>
          <span>|</span>
        </a>
        <a href='#'>
          <span>new</span>
        </a>
      </div>
    </Fragment>
  )
}

export default HackerNewsHeader
