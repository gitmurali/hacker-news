import React, { useState, useEffect } from 'react'

import Feed from '@components/Feed'

// import styles from './NewsFeeds.scss'

const NewsFeeds = ({ hackerNews, onHide, handleUpVote }) => {
  const [hits, setHits] = useState([])

  useEffect(() => {
    if (hackerNews.hits) setHits(hackerNews.hits)
  }, [hackerNews.hits])

  return (
    <div>
      {hits.map((feed, i) => (
        <Feed
          key={feed.title}
          newsFeed={feed}
          index={i}
          onHide={onHide}
          onUpVote={handleUpVote}
          backgroundColor={i % 2 === 0 ? '#e6e5df' : '#f6f5ef'}
        />
      ))}
    </div>
  )
}

export default NewsFeeds
