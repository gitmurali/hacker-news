import React from 'react'

import styles from '@components/Feed/Feed.scss'
import Arrow from '@resources/images/grayarrow.gif'
import moment from 'moment'

const DesktopFeed = ({ newsFeed, upvote, backgroundColor, setUpvote, handleHide, handleCounter }) => {
  return (<div className={styles.feed} style={{ backgroundColor }}>
    <div>{newsFeed.numComments}</div>
    <div>
      {upvote}
      <span className={styles.upvote}
        onClick={() => handleCounter()}>
        <img alt='upvote arrow' src={Arrow} />
      </span>
    </div>
    <div className={styles.feedTitle}>
      {newsFeed.title}
      <span className={styles.feedAuthor}>
            (
        <a aria-label='News link' href={newsFeed.url} target='_blank' rel='noopener noreferrer'>
          {newsFeed.url}
        </a>
            ) by
      </span>{' '}
      {newsFeed.author}
      <span className={styles.feedAuthor}>{moment(newsFeed.createdAt).fromNow()}</span>
      <span className={styles.feedPadLeft}>
            [
        <a aria-label='hide' onClick={() => handleHide(newsFeed.objectID)} className={styles.feedHide}>
          {' '}hide{' '}
        </a>
            ]
      </span>
    </div>
  </div>)
}

export default DesktopFeed
