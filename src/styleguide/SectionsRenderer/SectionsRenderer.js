import React, { Fragment } from 'react'

import styles from './SectionsRenderer.scss'

export function SectionsRenderer (props) {
  const { children } = props

  return (
    <div>
      {children.length > 0 && children.map(child => {
        const { visibleName } = child.props.section.visibleName ? child.props.section : child.props.section.components[0]
        return (
          <Fragment key={child.key}>
            <div className={styles.heading}>
              <h1 className={styles.title}>{visibleName}</h1>
            </div>
            <div className={styles.content}>
              {child}
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}

export default SectionsRenderer
