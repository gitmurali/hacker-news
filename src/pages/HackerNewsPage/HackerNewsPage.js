import React from 'react'

import HackerNewsHeader from '@components/HackerNewsHeader/HackerNewsHeader'
import Page from '@components/Page'

import styles from './HackerNewsPage.scss'

const HackerNewsPage = () => {
  return (<div className={styles.marginTop}>
    <Page contentCentered>
      <HackerNewsHeader />
    </Page>
  </div>)
}

export default HackerNewsPage
