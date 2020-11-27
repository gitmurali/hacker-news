import React, { useEffect } from 'react'

import HackerNewsHeader from '@components/HackerNewsHeader/HackerNewsHeader'
import Page from '@components/Page'

import styles from './HackerNewsPage.scss'

const HackerNewsPage = ({ hackerNews, onload }) => {
  useEffect(() => {
    onload()
  }, [])

  return (<div className={styles.marginTop}>
    <Page contentCentered>
      <HackerNewsHeader />
    </Page>
  </div>)
}

export default HackerNewsPage
