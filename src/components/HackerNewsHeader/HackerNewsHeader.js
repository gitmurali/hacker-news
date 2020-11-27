import React from 'react'

import HackerNewsLogo from '@resources/images/y18.gif'

import styles from './HackerNewsHeader.scss'

const HackerNewsHeader = () => {
  return (<div className={styles.header}>
    <img src={HackerNewsLogo} className={styles.logo}/>
    <a href='#'><span>top</span></a>
    <a href='#'><span>|</span></a>
    <a href='#'><span>new</span></a>
  </div>)
}

export default HackerNewsHeader
