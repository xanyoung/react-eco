import React from 'react'

import styles from './NotFound.module.sass'

export const NotFoundBlock = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Sorry, but this page does not exists or not created yet :/</h1>
    </div>
  )
}
