import React, { useEffect, useState } from 'react'

import HackerNewsHeader from '@components/HackerNewsHeader'
import NewsFeeds from '@components/NewsFeeds'
import Page from '@components/Page'
import TimelineChart from '@components/TimelineChart'

import styles from './HackerNewsPage.scss'

const HackerNewsPage = ({ hackerNews, onload, handleMore }) => {
  const [pages, setPages] = useState(0)
  const [counter, setCounter] = useState(0)
  const [hits, setHits] = useState([])

  useEffect(() => {
    onload()
  }, [])

  useEffect(() => {
    if (hackerNews.hits) setHits(hackerNews.hits)
  }, [hackerNews.hits])

  useEffect(() => {
    if (hackerNews.nbPages) setPages(hackerNews.nbPages)
  }, [hackerNews.nbPages])

  useEffect(() => {
    if (counter !== 0 && counter + 1 <= pages) {
      handleMore(counter)
    }
  }, [counter])

  return (
    <div className={styles.marginTop}>
      <Page contentCentered>
        <HackerNewsHeader />
        <NewsFeeds hackerNews={hackerNews} />
        <div className={styles.more} onClick={() => setCounter(counter + 1)}>
          More
        </div>
        {hits.length > 0 && <TimelineChart hits={hits} />}
      </Page>
    </div>
  )
}

export default HackerNewsPage
