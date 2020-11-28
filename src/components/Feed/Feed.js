import React, { useState, useEffect } from 'react'

import Arrow from '@resources/images/grayarrow.gif'
import moment from 'moment'

import styles from './Feed.scss'

const Feed = ({ newsFeed, index, backgroundColor, onHide }) => {
  let ids = localStorage.getItem('hideIds')
  const [upvote, setUpvote] = useState(newsFeed.points)
  const [localIds, setLocalIds] = useState('')

  useEffect(() => {
    // callTheServiceHere()
  }, [upvote])

  useEffect(() => {
    setLocalIds(ids)
  }, [])

  const setItem = id => {
    localStorage.setItem('hideIds', id)
  }

  const handleHide = id => {
    if (ids == null) {
      setItem(id)
      setLocalIds(id)
    } else if (ids && !ids.includes(id)) {
      setItem(`${ids},${id}`)
      setLocalIds(`${ids},${id}`)
    }
    onHide()
  }

  const isRendering = localIds == null || !localIds.includes(newsFeed.objectID)
  return (
    isRendering && (
      <div className={styles.feed} style={{ backgroundColor }}>
        <div>{newsFeed.numComments}</div>
        <div>
          {upvote}
          <span className={styles.upvote} onClick={() => upvote - newsFeed.points <= 10 && setUpvote(upvote + 1)}>
            <img src={Arrow} />
          </span>
        </div>
        <div className={styles.feedTitle}>{newsFeed.title}</div>
        <div>
          <span className={styles.feedAuthor}>
            (
            <a href={newsFeed.url} target='_blank' rel='noopener noreferrer'>
              {newsFeed.url}
            </a>
            ) by
          </span>{' '}
          {newsFeed.author}
          <span className={styles.feedAuthor}>{moment(newsFeed.createdAt).fromNow()}</span>
          <span className={styles.feedPadLeft}>
            [
            <a onClick={() => handleHide(newsFeed.objectID)} className={styles.feedHide}>
              {' '}
              hide{' '}
            </a>
            ]
          </span>
        </div>
      </div>
    )
  )
}

export default Feed
