import React from 'react'

import Arrow from '@resources/images/grayarrow.gif'
import moment from 'moment'

import styles from './Feed.scss'

const Feed = ({ newsFeed, index, backgroundColor }) => {
  return (
    <div className={styles.feed} style={{ backgroundColor }}>
      <div>{newsFeed.numComments}</div>
      <div>
        {newsFeed.points}
        <span>
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
      </div>
    </div>
  )
}

export default Feed