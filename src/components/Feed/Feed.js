import React, { useState, useEffect, Fragment } from 'react'

import DesktopFeed from '@components/Feed/DesktopFeed'
import Arrow from '@resources/images/grayarrow.gif'
import moment from 'moment'
import { useMediaQuery } from 'react-responsive'

import styles from './Feed.scss'

const Feed = ({ newsFeed, index, backgroundColor, onHide, onUpVote }) => {
  let ids = localStorage.getItem('hideIds')
  const [upvote, setUpvote] = useState(newsFeed.points)
  const [localIds, setLocalIds] = useState('')
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  useEffect(() => {
    // callTheServiceHere() to save in Backend
    if (upvote !== newsFeed.points && upvote - newsFeed.points <= 10) {
      onUpVote({ upvote, id: newsFeed.objectID })
    }
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
      <Fragment>
        {isTabletOrMobile && (
          <div className={styles.feed} style={{ backgroundColor }}>
            <div className={styles.feedTitle}>{newsFeed.title}</div>
            <div>
              <span className={styles.feedAuthor}>
                (
                <a aria-label='news link' href={newsFeed.url} target='_blank' rel='noopener noreferrer'>
                  {newsFeed.url}
                </a>
                ) by
              </span>{' '}
              {newsFeed.author}
              <span className={styles.feedAuthor}>{moment(newsFeed.createdAt).fromNow()}</span>
              <span className={styles.feedPadLeft}>
                [
                <a aria-label='hide' onClick={() => handleHide(newsFeed.objectID)} className={styles.feedHide}>
                  {' '}
                  hide{' '}
                </a>
                ]
              </span>
            </div>
            <div>
              <span className={styles.comments}>Comments: {newsFeed.numComments}</span>
              <span>
                Votes: {upvote}
                <span
                  aria-label='upvote'
                  className={styles.upvote}
                  onClick={() => upvote - newsFeed.points <= 10 && setUpvote(upvote + 1)}
                >
                  <img alt='upvote arrow' src={Arrow} />
                </span>
              </span>
            </div>
          </div>
        )}
        {!isTabletOrMobile && (
          <DesktopFeed newsFeed={newsFeed}
            upvote={upvote}
            backgroundColor={backgroundColor}
            setUpvote={setUpvote}
            handleHide={handleHide}/>
        )}
      </Fragment>
    )
  )
}

export default Feed
