import React, { useEffect, useState } from 'react'

import HackerNewsHeader from '@components/HackerNewsHeader'
import NewsFeeds from '@components/NewsFeeds'
import Page from '@components/Page'
import TimelineChart from '@components/TimelineChart'
import { Helmet } from 'react-helmet'

import styles from './HackerNewsPage.scss'

const HackerNewsPage = ({ hackerNews, onload, handleMore }) => {
  const [pages, setPages] = useState(0)
  const [counter, setCounter] = useState(0)
  const [hits, setHits] = useState([])
  const [vote, setVote] = useState({})
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

  const handleUpVote = vote => {
    setVote(vote)
  }

  return (
    <div className={styles.marginTop}>
      <Helmet>
        <title>Hacker news app</title>
        <meta name="description" content="Hacker news page displays latest news feeds" />
      </Helmet>
      <Page contentCentered>
        <HackerNewsHeader />
        <main>
          <NewsFeeds hackerNews={hackerNews}
            onHide={() => handleMore(counter)}
            handleUpVote={handleUpVote} />
          <div className={styles.more} onClick={() => setCounter(counter + 1)}>
          More
          </div>
          {hits.length > 0 && <TimelineChart hits={hits} vote={vote} />}
        </main>
      </Page>
    </div>
  )
}

export default HackerNewsPage
